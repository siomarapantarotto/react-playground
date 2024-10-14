import './Modal.css'

export default function Modal({children, handleClose}) { // export default function Modal(props) { 
  return (
    <div className="modal-backdrop">
        <div className="modal">
          {children}  {/* {props.children} */}
          <button onClick={handleClose}>Close</button>
        </div>        
    </div>
  )
}

