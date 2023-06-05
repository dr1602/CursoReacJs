import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
        {/*vamos a mandar a un hijo a nuestro modal*/}
        {/* podemos mandar cualquier componente de aqui, no mandar directamente a algo especifico, nos va a apermitir ser reutilizado para mandar lo que queramos a nustro modal como formulario o alerat de error*/}
            {children}
        </div>,
        document.getElementById('modal')

    );
}

  export { Modal };