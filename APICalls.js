import React, {useState, useEffect} from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

// function PublicEmployeeAPI(){  
// }

function APICalls(props) {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://dummy.restapiexample.com/api/v1/employees/${data.id}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error)
    }, []);

    if(data){
        return (
            <div>
                <ul>
                    <li key={data.id}>
                        {data.name}
                    {/* {
                        data.map(employee => {
                            <h1>{employee.employee_name}</h1>
                        })
                    } */}
                    </li>
                </ul>
            </div>
        );
    }
    return null;

}

export default APICalls;