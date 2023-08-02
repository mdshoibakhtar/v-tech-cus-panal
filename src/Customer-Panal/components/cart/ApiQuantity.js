import { useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { setCartLists, useIncCountMutation, useOfflineCartUpdateMutation } from "../products/productSlice";
import { useDispatch, useSelector } from "react-redux";

export const ApiQuatity = ({ countValue, item = null, getOffCartList, getCartData }) => {
    const [quantity, setQuantity] = useState(countValue)
    const user_id = window.localStorage.getItem('user_id')
    const isLogin = window.localStorage.getItem("isLogin")

    const [updateOffline, { isSuccess: isrefSuc, data: resDataVal, isLoading: loadUpd }] = useOfflineCartUpdateMutation()

    const { updatedProducts: products } = useSelector((state) => {
        return state.productList
    })

    const [ChengeCount, { isLoading, data: resData, isSuccess }] = useIncCountMutation()
    useEffect(() => {
        if (!countValue) {
            setQuantity(1)
        }
    }, [])

    const dispacher = useDispatch()

    const handleInc = () => {
        if (isLogin === 'true') {
            setQuantity(quantity + 1)
            ChengeCount({ count: quantity + 1, id: item._id, userid: user_id })
        } else {
            setQuantity(+quantity + 1)
            updateOffline({ data: { products, count: +quantity + 1, }, id: item })
        }
    }

    const handleDec = () => {
        if (quantity === 1) {
            return
        }
        if (isLogin === 'true') {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
            ChengeCount({ count: quantity - 1, id: item._id, userid: user_id })
        } else {
            if (quantity > 1) {
                setQuantity(+quantity - 1)
            }
            updateOffline({ data: { products, count: +quantity - 1 }, id: item })
        }

    }

    useEffect(() => {
        if (isLogin === 'true') {
            if (isrefSuc) {
                getCartData()
            }
            if (isSuccess) {
                getCartData()
            }
        }

    }, [isrefSuc, isSuccess])



    useEffect(() => {
        if (isrefSuc) {
            const newArr = resDataVal.cart.products.map((item) => {
                return { ...item, product: item.product._id }
            })

            dispacher(setCartLists(newArr))
            getOffCartList({ products: newArr })
        }
    }, [isrefSuc])

    if (isLogin === 'true') {
        return (
            <div className="quantity">
                {isLoading && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                <button
                    type="button"
                    className="minus"
                    onClick={handleDec}
                >
                    <AiOutlineMinus />
                </button>
                <div className="number">{quantity ? quantity : 0}</div>
                <button
                    type="button"
                    className="plus"
                    onClick={handleInc}
                >
                    <AiOutlinePlus />
                </button>
            </div>
        )
    } else {
        return (
            <div className="quantity">
                {loadUpd && <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                <button
                    type="button"
                    className="minus"
                    onClick={handleDec}

                >
                    <AiOutlineMinus />
                </button>
                <div className="number">{quantity ? quantity : 0}</div>
                <button
                    type="button"
                    className="plus"
                    onClick={handleInc}
                >
                    <AiOutlinePlus />
                </button>
            </div>
        )
    }

}