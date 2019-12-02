import React from 'react';

const Select = (props) => {
    const { menuItems, onChange, selectValue } = props;

    return (
        <select onChange={e => onChange(e)} value={selectValue}>
            {
                menuItems.map(item => <option key={item} value={item}>{item}</option>)
            }
        </select>
    );
}

export default Select;