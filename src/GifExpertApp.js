import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{
//const categories=['Pedro','Hernan','Tomas']
const [categories, setCategories] = useState(["Bienvenido"])  

return( 
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
        <ol>
        {  categories.map(c=>(
        <GifGrid category={c} key={c}/>
        ))}
        </ol>
           
    </>
    );
  }

  
export default GifExpertApp