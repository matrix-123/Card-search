import React from 'react'
import './Search.css'

export const SearchBox=({placeholder,handleChange})=>{

    return(
        <input   type="search" placeholder={placeholder}onChange={handleChange}
          
    />
    
    )}