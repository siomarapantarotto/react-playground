import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid", 
          borderColor: "#cb6703",
          textAlign: 'center'
        }}>
          {children}
          <button onClick={handleClose}>Close</button>
        </div>        
    </div>
  ), document.body)
}

