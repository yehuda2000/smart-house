import React, { useContext} from 'react';
import { AppContext } from '../contextApi';
import Product from './Product';

export default function ListProduct({value}) { // קומפננטה של שדה המכיל בתוכו את המוצרים בחדר
    const {listRooms,changeStatusProduct2} = useContext(AppContext)
    function changeStatusProduct1(indexProduct){
      changeStatusProduct2(indexProduct,value)
    }
  return (
    <div id='listProducts'>{listRooms.find(e=>e.nameRoom === value).productsRoom.map((element,index)=>{
        return <Product changeStatusProduct1={changeStatusProduct1} value={element} key={crypto.randomUUID()} index={index}/>
      })}</div>
  )
}
