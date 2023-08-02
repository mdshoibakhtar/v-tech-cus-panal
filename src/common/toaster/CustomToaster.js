
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const CustomToaster = ({show, setShow, message, position, delay, title, color})=> {
    return (
        <ToastContainer position={position}>
        <Toast onClose={() => setShow()} show={show} delay={delay} autohide bg={color}>
        <Toast.Header>
           
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body style={{color: 'white'}}>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    )
}