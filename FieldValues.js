import React, {useState, useEffect} from 'react';

function FieldValues(props) {

    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();

    useEffect(() => {
        console.log(`First Field Value: ${val1}`);
        console.log('Second Input Value is: ', val2);
    });

    return (
        <div>
            <h3>First Input Value: {val1}</h3>
            <input value={val1} onChange={e => setVal1(e.target.value)} />
            <br /><br />

            <h4>Second Input Value: {val2}</h4>
            <input value={val2} onChange={e => setVal2(e.target.value)} />
        </div>
    );
}

export default FieldValues;