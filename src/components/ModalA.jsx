import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ModalAContext } from '../context/ModalAContextProvider';
import '../assets/scss/components/modal.scss';

const ModalA = ({setShowModalA, handleShowModalB}) => {
    const [isChecked, setIsChecked] = useState(false);
    const { data, loader, searchText, setSearchText } = useContext(ModalAContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        setSearchParams('/problem-2/contacts');
    }, []);

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const handleCloseModal = () => {
        setShowModalA(false);
        navigate('/problem-2');
    }

    return ReactDOM.createPortal(
        <div className="modalBox">
            <div className="modalHeader d-flex justify-content-center gap-3">
                <button className="btn btn1 btn-lg" type="button" >All Contacts</button>
                <button onClick={handleShowModalB} className="btn btn2 btn-lg" type="button" >US Contacts</button>
                <button onClick={handleCloseModal} className="btn btn3 btn-lg" type="button" >Close</button>
            </div>

            <div className="searchBox">
                <input value={searchText} type="text" onChange={handleSearchText} placeholder="Search here..." />
                <button>Search</button>
            </div>

            {loader ? <p style={{fontSize: '1.2rem'}}>Please wait...</p> :
                (data && data.length === 0 ? <p style={{fontSize: '1.1rem'}}>No items found!</p> : <div className="dataItems"><Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Country</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((item) => isChecked ? item.id % 2 === 0 : item).map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.country.name}</td>
                                <td>{item.phone}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>)}
            
            {data && data.length !== 0 && <div className="checkboxInput">
                <input checked={isChecked} onChange={handleCheckbox} type="checkbox" id="checkbox" style={{height: '1.1rem', width: '1.1rem'}} />
                <label htmlFor="checkbox">Only Even</label>
            </div>}
        </div>,
        document.getElementById('modal-A')
    );
}

export default ModalA;