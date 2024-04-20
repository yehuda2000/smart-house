import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AppContext } from '../contextApi';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import RoomContainer from './RoomContainer';
import AddProduct from './AddProduct';
export default function PageRoom() { // קומפננטת החדר
    const { value } = useParams();
    const {listRooms,setRoomName,addProductToRoom2} = useContext(AppContext) 
    const [isAddProduct,setIsAddProduct] = useState(false) //? משתנה הבודק עם נלחץ כפתור הוספת מוצר - ובמידה וכן מציג את קומפננטת הוספת מוצר
    const [typeRoom,setTypeRoom] = useState(listRooms.find(e=>e.nameRoom === value).typeRoom) //? משתנה המכיל את סוג החדר

    function addProduct(){ //* פונרציה המציגה את קומפננטת הוספת מוצר ושומרת את שם החדר במשתנה שם חדר
        setIsAddProduct(true)
        setRoomName(value)
    }

    function addProductToRoom1(product){ //* פונקציית בדיקת תקינות לפונקציה הוספת מוצר לרשימת המוצרים בחדר
      const arrProducts = listRooms.find(e=>e.nameRoom === value).productsRoom
      const arrLength = arrProducts.length
      const productStereoSystem = arrProducts.find(e=>e.product === 'Stereo system')
      
      if(product == 0){
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Oops...",
          text: "No product selected", //! לא נבחר מוצר - בקומפננטת הוספת מוצר
        });       
      }else if(arrLength==5){
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Oops...",
          text: "You cannot add more than 5 products to a room", //! לא ניתן להוסיף יותר מ5 מוצרים בחדר
        });
      }else if(productStereoSystem && product === 'Stereo system'){
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Oops...",
          text: "You cannot add more than one stereo system in a room", //! לא ניתן להוסיף יותר ממערכת סטריאו אחת בחדר
        });
      }else{
        let fullProduct = {  //* יצירת אובייקט מוצר ושליחתו לפונקציה להוספת מוצר לרשימת המוצרים בחדר
          product:product,
          status:false
        }
        addProductToRoom2(fullProduct)
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Product successfully added", //? הודעת הצלחה - המוצר נוסף בהצלחה
          showConfirmButton: false,
          timer: 1500
        });
      }
      setIsAddProduct(false) //* חזרה לעמוד החדר

    }
  return (
  <div>
    {isAddProduct ? <AddProduct addProductToRoom1={addProductToRoom1} typeRoom={typeRoom}/> : <RoomContainer value={value} addProduct={addProduct}/>}
  </div>
  )
}
