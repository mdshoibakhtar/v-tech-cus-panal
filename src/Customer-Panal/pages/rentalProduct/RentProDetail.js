import { useParams } from "react-router-dom"
import TopRentProd from "./TopRentProd"
import BottomDetails from "../../components/prodetails/BottomDetails"

function RentProDetail() {
    const param = useParams()
    return <div>
        <TopRentProd param={param.id} />
        <BottomDetails/>
    </div>
}
export default RentProDetail