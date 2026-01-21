import './modal.css'

function Modal({onClose}){
    return(
        <div className="modal-overlay">
            <div className="modal">
                <h3>Success!</h3>
                <p>Your Booking Submitted</p>
                <button onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
    
}

export default Modal