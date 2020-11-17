import React, { useState, useEffect } from 'react';

function AsyncAPICall(props) {

    const [data, setData] = useState({});
    // const [error, setError] = useState(false);

    async function fetchData(){
        const res = await fetch(`http://dummy.restapiexample.com/api/v1/employees`);
        res.json()
        .then(res => setData(res))
        // .catch(err => setError(err))
        .catch(console.error)
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <span>My JSON Data: {JSON.stringify(data)}</span>
            {/* <span>Has Error: {JSON.stringify(error)}</span> */}
        </div>
    );
}

export default AsyncAPICall;