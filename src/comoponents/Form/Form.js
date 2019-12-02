import React, { useState } from 'react';
import Input from '../Input';
import Select from '../Select';
import stringToValues from '../../utils/stringToValues';
import { AUTO, DASH } from '../../constants';

const Form = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('-');

    const inputValueChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    const inputFocusLost = (e) => {
        e.preventDefault();
        if(inputValue && inputValue !== AUTO) {
            const options = stringToValues(inputValue);

            options.size && !isNaN(options.size) ? setInputValue(options.size) : setInputValue('');

            props.menuItems.includes(options.units) && setSelectValue(options.units);
        }

        inputValue === AUTO && setSelectValue(DASH);
    }

    const selectValueChange = (e) => {
        e.preventDefault();
        setSelectValue(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setInputValue('');
        setSelectValue(DASH);
        //Dispatch actions for submit form here.
    }

    return (
        <form onSubmit={e => submitForm(e)}>
            <h4>Enter a values.</h4>
            <Input 
                inputValue={inputValue}
                onChange={inputValueChange}
                onBlur={inputFocusLost}
            />
            <Select 
                selectValue={selectValue}
                menuItems={props.menuItems} 
                onChange={selectValueChange} 
            />
            <br/>
            <button type="submit" >Submit</button>
        </form>
    );
}

export default Form;