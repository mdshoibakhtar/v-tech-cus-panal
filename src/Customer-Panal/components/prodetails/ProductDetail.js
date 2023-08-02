import { useParams } from "react-router-dom"
import TopDetails from "./TopDetails";
import BottomDetails from "./BottomDetails";

function ProductDetail() {
    const param = useParams()
    return <div>
        <TopDetails param={param.id}/>
        <BottomDetails />

    </div>
}
export default ProductDetail