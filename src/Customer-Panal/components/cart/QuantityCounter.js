import { useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { changeCountInProduct } from "../products/productSlice";

export const QuantityCounter = ({ val , countValue, item = null }) => {
    const [quantity, setQuantity] = useState(countValue)
    const dispatch = useDispatch()


    const data = useSelector((data) => {
        return data.productList.products
    })

    useEffect(() => {
        if (!countValue) {
            setQuantity(1)
        }
        setQuantity(1)
    }, [item])

    const handleInc = () => {
        setQuantity(+quantity + 1)
        window.localStorage.setItem("productCount", quantity + 1)
    }

    const handleDec = () => {
        if (quantity > 1) {
            setQuantity(+quantity - 1)
            window.localStorage.setItem("productCount", quantity - 1)
        }
    }

    useEffect(() => {
        if (item && quantity && quantity > 1) {
            const newData = data.map((val) => {
                if (val._id === item._id) {
                    return { ...val, count: quantity, subTotal: quantity * val.product?.purchase_price }
                }
                return val
            })
            dispatch(changeCountInProduct(newData))
        }
    }, [quantity])
    useEffect(() => {
        setQuantity(1)
    }, [val])


    const changeQty = (e)=>{
        setQuantity(+e.target.value)
        window.localStorage.setItem("productCount", +e.target.value)
    }

    return (
        <div className="quantity">
            <button
                type="button"
                className="minus"
                onClick={handleDec}
            >
                <AiOutlineMinus />
            </button>
            <input value={quantity ? quantity : 0} className="form-control" style={{width:"50px"}} onChange={changeQty}/>
            {/* <div className="number">{quantity ? quantity : 0}</div> */}
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