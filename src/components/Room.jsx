import React, { useContext, useState } from 'react';
import { AppContext } from '../contextApi';
import { Link, useNavigate } from "react-router-dom";

export default function Room({value,index}) { // קומפננטה של אלמנט חדר בדף הבית
    const {goToRoom} = useContext(AppContext)
  return (
    <button onClick={() => goToRoom(value.nameRoom)} id='roomElement' style={{backgroundColor:value.colorRoom}}>
        {value.nameRoom}
    </button>
  )
}
