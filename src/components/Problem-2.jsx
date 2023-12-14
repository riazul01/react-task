import React, { useState } from 'react';
import ModalA from './ModalA';
import ModalB from './ModalB';

const Problem2 = () => {
    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);

    const handleShowModalA = () => {
        setShowModalA(true);
        setShowModalB(false);
    }

    const handleShowModalB = () => {
        setShowModalB(true);
        setShowModalA(false);
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                    <button onClick={handleShowModalA} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button onClick={handleShowModalB} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

                {showModalA && <ModalA setShowModalA={setShowModalA} handleShowModalB={handleShowModalB}/>}
                {showModalB && <ModalB setShowModalB={setShowModalB} handleShowModalA={handleShowModalA}/>}
            </div>
        </div>
    );
};

export default Problem2;