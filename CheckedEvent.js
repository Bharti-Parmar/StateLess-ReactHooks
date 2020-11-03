import React, {useState} from 'react';

function CheckedEvent(props) {

    const [checked, setChecked] = useState(false);

    alert(`Checked: ${checked.toString()}`);

    return (
        <div>
            <input type="checkbox" className="mr-2" value={checked} onChange={() => setChecked(checked => !checked)} />
            {checked ? 'Checked' : "Not Checked"}
        </div>
    );
}

export default CheckedEvent;