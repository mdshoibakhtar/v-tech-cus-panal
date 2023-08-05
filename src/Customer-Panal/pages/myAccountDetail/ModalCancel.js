import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap"

function ModalCancel(props) {
    const userid = window.localStorage.getItem("user_id");
    const [state, setState] = useState({
        orderId: props.val._id,
        reason: '99998888',
        user: userid,
        note: ""
    })

    const changeVal = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }

    const [reasons, setReasons] = useState(null)

    const getData = async () => {
        try {
            const res = await axios.get(`https://onlineparttimejobs.in/api/cancelReason`)
            setReasons(res.data)
        } catch (error) {
            alert('Somthing Wend Wrong')
        }

    }

    useEffect(()=>{
        getData()
    },[])


    const sendData = async () => {
        try {
            const res = await axios.post(`https://onlineparttimejobs.in/api/cancelOrder/addReasonOrder`, state)
            props.fechData()
            props.onHide()
            alert('Order Cancel Successfully')
        } catch (error) {
            alert(' Somthing Wend Wrong Order Not Cancel')
        }
    }



    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Cancel Order Id : {props.val._id}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <select name="reason" onChange={changeVal} style={{margin:"15px 0"}} className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                {reasons && reasons.map((item)=>{
                    return  <option value={item?._id}>{item.reason}</option>
                })}
              
            </select>



            <div className="form-floating">
                <textarea className="form-control" name="note" onChange={changeVal} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>

        </Modal.Body>
        <Modal.Footer>
            <Button onClick={sendData}>Send</Button>
        </Modal.Footer>
    </Modal>
}
export default ModalCancel