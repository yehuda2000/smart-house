import { useState } from 'react'
import Swal from 'sweetalert2'
import {Routes,Route} from 'react-router-dom'                   
import { useNavigate } from "react-router-dom"
import './App.css'
import AddRoom from './components/AddRoom';
import { AppContext } from './contextApi'
import Home from './components/Home';
import PageRoom from './components/PageRoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faWifi } from '@fortawesome/free-solid-svg-icons';


function App() {
  const nav = useNavigate();                        //? משתנה בעזרתו נעבור בין כתובות
  const [listRooms,setListRooms] = useState([])     //? רשימת החדרים באפליקציה
  const [roomName,setRoomName] = useState('')       //? משתנה המכיל את שם החדר
  
  function addRoom(){                              //* פונקציה למעבר לדף יצירת חדר
    nav("/addroom");
  }

  function goToRoom(value){                       //* פונקציה למעבר לדף החדר מסויים - הפונקציה שולחת בנתיב את שם החדר
    nav(`/room/${value}`); 
  }

  function goToHome(){                           //* פונקציה לחזרה לדף הבית
    nav('/'); 
  }

  function removeRoom(value){                   //* פונקציה להסרת חדר מסויים לפי שם החדר
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const product = listRooms.find(e=>e.nameRoom === value)
        setListRooms(listRooms.filter(e=>e!=product))
        nav('/');
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.", //? הודעת הצלחה - החדר נמחק בהצלחה
          icon: "success"
        });
      }
    }); 

  }

  function  changeStatusProduct2(indexProduct,value){ //* פונקציה לשינוי סטטוס המוצר בחדר מסויים / כבוי או דלוק
    const updatedRooms = [...listRooms];
    const roomIndex = updatedRooms.findIndex(room => room.nameRoom === value);
    if(roomIndex !== -1) {
        const x = updatedRooms[roomIndex].productsRoom[indexProduct].status
        updatedRooms[roomIndex].productsRoom[indexProduct].status = !x
        setListRooms(updatedRooms);
    } else {
        console.log("Error - room does not exist");
    }
  }

  function addProductToRoom2(fullProduct){ //* פונקציה להוספת מוצר לחדר מסויים
    const updatedRooms = [...listRooms];
    const roomIndex = updatedRooms.findIndex(room => room.nameRoom === roomName);
    if(roomIndex !== -1) {
        updatedRooms[roomIndex].productsRoom.push(fullProduct);
        setListRooms(updatedRooms);
    } else {
        console.log("Error - room does not exist");
    }
}


  return (
   <div id='body'>
    <AppContext.Provider value={{listRooms,setListRooms,goToRoom,addProductToRoom2,setRoomName,changeStatusProduct2,removeRoom}}>
      <p id='homeIcon' onClick={goToHome}><FontAwesomeIcon icon={faHouse} style={{color:'006790'}} /></p>
      <h1 className='mainTitle'>Smart House <FontAwesomeIcon icon={faWifi} /></h1>
      <Routes>
        <Route path='/' element={<Home addRoom={addRoom}/>}/>
        <Route path='/addroom' element={<AddRoom/>} />
        <Route path='/room/:value' element={<PageRoom/>} />
      </Routes>
      </AppContext.Provider>
   </div>
  )
}

export default App
