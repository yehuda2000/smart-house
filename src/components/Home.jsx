import React from 'react'
import RoomList from './RoomList'

export default function Home({addRoom}) { // קומפננטת כפתור פלוס להוספת חדר חדש
  return (
    <div>
        <RoomList/>
        <button id='plus' onClick={addRoom}>+</button> 
    </div>
  )
}
