import React, { useState } from 'react';

const Problem1 = () => {
    const [item, setItem] = useState({name: '', status: ''});
    const [data, setData] = useState([]);
    const [show, setShow] = useState('all');

    const handleClick = (val) => {
        setShow(val);
    }

    const handleChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, item]);
        setItem({name: '', status: ''});
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input value={item.name} onChange={handleChange} name="name" type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input value={item.status} onChange={handleChange} name="status" type="text" className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter((item) => item.status === show || show === 'all').sort((a, b) => (a.status.toLowerCase() === 'active') ? -1 : (a.status.toLowerCase() === 'completed') ? 1 : 0).map((item, index) => {
                                return <tr key={index}>
                                    <td scope="col">{item.name}</td>
                                    <td scope="col">{item.status}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;