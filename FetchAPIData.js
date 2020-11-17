import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchAPIData(props) {

    const [myData, setData] = useState({ data:[] });

    // async function fetchData(){
    //     const res = await fetch(`http://dummy.restapiexample.com/api/v1/employees`);
    //     res.json()
    //     .then(res => setData(res))
    //     .catch(console.error)
    // }

    // useEffect(() => {
    //     fetchData();
    // });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://dummy.restapiexample.com/api/v1/employees`,);
            setData(result.myData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <span>{JSON.stringify(myData)}</span>
            <ul>
                {
                    myData.data.map(item => {
                        <li key={item.id}>
                            {item.employee_name}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default FetchAPIData;