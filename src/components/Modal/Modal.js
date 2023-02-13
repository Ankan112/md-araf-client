import React from 'react';

const Modal = ({ modalInfo }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{modalInfo.title}</h3>
                    <p className="py-4">{modalInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;