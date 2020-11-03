import React, {useReducer} from 'react';

function UseReducer(props) {

    const [checked, toggle] = useReducer(
        checked => !checked,
        false
    );

    return (
        <div>
            <input type="checkbox" className="mr-2" value={checked} onChange={toggle} />
            {checked ? 'Checked' : "Not Checked"}
        </div>
    );
}

export default UseReducer;