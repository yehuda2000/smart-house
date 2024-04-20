import React, { useContext} from 'react';
import { AppContext } from '../contextApi';
import Room from './Room';

export default function RoomList() { // קומפננטה להצגת רשימת החדרים
    const {listRooms} = useContext(AppContext)
  return (
    <div id='listRooms'>{listRooms.map((element,index)=>{
        return <Room value={element} key={crypto.randomUUID()} index={index}/>
      })}</div>
  )
}
