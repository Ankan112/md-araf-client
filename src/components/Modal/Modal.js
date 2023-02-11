import React from 'react';

const Modal = ({ modalInfo }) => {
    // console.log(props.blog.description)
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            {/* < input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold"> hi {modalInfo.title}</h3>
                    <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias porro modi eos illo, dolorum nostrum.</p>
                </label>
            </label> */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Inter</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet enim aperiam cumque nesciunt vero minima suscipit recusandae inventore eligendi, consequuntur voluptatum dolorum omnis corrupti sapiente veniam dolore! Atque provident illum ex corrupti earum, modi ipsum, ipsa consectetur sequi pariatur sit, laborum reiciendis. Quis consequuntur neque aut, animi doloremque ipsa quibusdam!</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;