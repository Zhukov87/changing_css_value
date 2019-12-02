import React from 'react';

const Input = (props) => {
    const { onChange, onBlur, inputValue } = props;

    return (
        <input 
            value={inputValue}
            onChange={e => onChange(e)} 
            onBlur={e => onBlur(e)} 
        />
    );
}

export default Input;