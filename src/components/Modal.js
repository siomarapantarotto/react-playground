import './Modal.css'

export default function Modal({children}) { // export default function Modal(props) { 
  return (
    <div className="modal-backdrop">
        <div className="modal">
          {children}  {/* {props.children} */}
        </div>        
    </div>
  )
}

