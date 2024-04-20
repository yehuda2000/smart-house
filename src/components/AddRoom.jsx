import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AppContext } from '../contextApi';
import { useNavigate } from "react-router-dom";

export default function AddRoom() {
    const [typeRoom,setTypeRoom] = useState('')  //? משתנה המכיל את סוג החדר
    const [nameRoom,setNameRoom] = useState('')  //? משתנה המכיל את שם החדר
    const [colorRoom,setColorRoom] = useState('') //? משתנה המכיל את צבע החדר

    const {listRooms,setListRooms} = useContext(AppContext)
    const nav = useNavigate();

    function createRoom (){                      //* פונקציה ליצירת חדר חדש
        if(!typeRoom){
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Oops...",
                text: "Error - No room type selected", //! שגיאה במידה ולא נבחר סוג חדר
            });                           
        }
        else if(nameRoom.length<1){
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Oops...",
                text: "Error - Room name must contain at least one character", //! שגיאה במידה ושם החדר לא כולל לפחות תו אחד
            }); 
        }
        else if(listRooms.find(e=>e.nameRoom === nameRoom)){
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Oops...",
                text: `Error - A room with this name already exists : ${nameRoom}`, //! שגיאה במידה ושם החדר קיים כבר ברשימת החדרים
            }); 
        }
        else{     //* ההוספה עצמה - יצירת אובייקט חדר והכנסתו לרשימת החדרים
            let temp = {typeRoom:typeRoom,nameRoom:nameRoom,colorRoom:colorRoom,productsRoom:[]}          
            setListRooms([...listRooms,temp])
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Successfully added room", //? הודעת הצלחה - החדר נוסף בהצלחה
                showConfirmButton: false,
                timer: 1500
              });
        }
        nav("/");
        
    }
  return (
    <div className='divAdding'>
        <h2 className='secondaryTitle'>Add A New Room</h2>
        <select className='select' onChange={e=> setTypeRoom(e.target.value)}>
            <option value="0">Select a room type</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Kitchen Room">Kitchen Room</option>
        </select>
        <input type="text" id='inputNameRoom' placeholder='Room name' maxLength={9} onChange={e=> setNameRoom(e.target.value)} />
        <div>
            <label id='labelColor' htmlFor="colorPicker">Color Room </label>
            <input type="color" id="colorPicker" name="colorPicker" onChange={e=> setColorRoom(e.target.value)}/>
        </div>
        <button className='buttonCreate' onClick={createRoom}>Create Room</button>
        
    </div>
  )
}
