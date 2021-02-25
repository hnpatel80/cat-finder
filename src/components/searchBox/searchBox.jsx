import React from 'react';
import "./style.scss";

export const  SearchBox=({placeHolder,onChangeText})=>  (
    <input 
        type='search' 
        className="search"
        placeholder={placeHolder} 
        onChange={onChangeText}
    />
)
export default SearchBox;