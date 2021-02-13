import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange=(arg)=>{
        setInputValue(arg.target.value) 
    }
    const handleSubmit=(a)=>{
        a.preventDefault();
        if(inputValue.trim().length>2){
        setCategories((cat)=>[inputValue,...cat])
        setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
  }
