import React, { useContext, useState } from 'react';
import { AppContext } from '../contextApi';
export default function AddProduct({addProductToRoom1,typeRoom}) { // קומפננטה להוספת מוצר
    const [product,setProduct] = useState('')
    const [isBathroom,setIsBathroom] =  useState('')
    function CheckRoomType(){ //* פונקציה לבדיקה סוג החדר שאנו נמצאים בו הוא חדר שירותים
      if(typeRoom=='Bathroom'){
        setIsBathroom(true)
      }else{
        setIsBathroom(false)
      }
    }

  return (
    <div className='divAdding'>
        <h2 className='secondaryTitle'>Add A New Product</h2>
        <select name="" className='select' onClick={CheckRoomType} onChange={e=> setProduct(e.target.value)}>
            <option value="">Select a product</option>
            <option value="Air conditioner">Air conditioner</option>
            {isBathroom && <option value="Water heater">Water heater</option>}
            <option value="Stereo system">Stereo system</option>
            <option value="lamp">lamp</option>
        </select>
        <button id='addProduct2' style={{marginTop:'20px'}} onClick={() => addProductToRoom1(product)}>Add a product</button>
        
    </div>
  )
}
