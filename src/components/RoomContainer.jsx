import React, { useContext, useState } from 'react';
import { AppContext } from '../contextApi';
import ListProduct from './ListProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function RoomContainer({value,addProduct}) { // קומפננטה להצגת תוכן החדר שם החדר וסוגו
    const {listRooms,removeRoom} = useContext(AppContext)
  return (
    <div id='pageRoom'>
      <div id='roomContainer1'><ListProduct value={value}/></div>
      <div id='roomContainer2'>
        <h2>Name room : {value}</h2>
        <h3>Type room : {listRooms.find(e=>e.nameRoom === value).typeRoom}</h3>
        <button id='addProduct1' onClick={addProduct}>Add a product</button>
        <h2 onClick={()=>removeRoom(value)} id='removeRoom'><FontAwesomeIcon icon={faTrash} /></h2>
    </div>
</div>
  )
}
