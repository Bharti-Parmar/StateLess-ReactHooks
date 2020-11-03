import React, {useState} from 'react';

function ClickEvent(props) {
    const [year, setYear] = useState(2020);
    const [manager, setManager] = useState('Bharti');
    const [status, setStatus] = useState('Open');

    return (
        <div>
            <h3>Current Year: {year}</h3>
            <button className="btn btn-primary mb-4" onClick={() => setYear(year + 1)}>Year</button>

            <h4>Manager On Duty: {manager}</h4>
            <button className="btn btn-secondary mb-4" onClick={() => setManager('Harshad')}>Current Manager</button>

            <h5>Status: {status}</h5>
            <button className="btn btn-success mr-2" onClick={() => setStatus('Open')}>Open</button>
            <button className="btn btn-warning mr-2" onClick={() => setStatus("Back in 5")}> Break</button>
            <button className="btn btn-danger" onClick={() => setStatus('Closed')}>Close</button>
        </div>
    );
}

export default ClickEvent;