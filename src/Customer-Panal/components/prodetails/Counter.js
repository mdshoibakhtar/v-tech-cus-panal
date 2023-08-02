import { useEffect, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const QuantityCounter = ({ val , countValue, item = null }) => {
    const [quantity, setQuantity] = useState(countValue)

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
        setQuantity(1)
    }, [val])


    const changeQty = (e)=>{
        setQuantity(+e.target.value)
        window.localStorage.setItem("productCount", +e.target.value)
    }

    return (
        <div className="quantity" style={{display:"flex",justifyContent:"left"}}> 
            <button
                type="button"
                // className="minus"
                className="value-button decrease_"
                onClick={handleDec}
            >
                <AiOutlineMinus />
            </button>
            <input value={quantity ? quantity : 1} className="form-control" style={{width:"50px",marginRight:"10px",marginLeft:"10px"}} onChange={changeQty}/>
            {/* <div className="number">{quantity ? quantity : 0}</div> */}
            <button
                type="button"
                // className="plus"
                className="value-button increase_"
                onClick={handleInc}
            >
                <AiOutlinePlus />
            </button>
        </div>
    )
}