import React from 'react'

export default function Product({value,index,changeStatusProduct1}) { // קומפפנטת אלמנט מוצר בדף חדר מסויים
  return (
    <button onClick={() => changeStatusProduct1(index)} id='productElement' style={value.status ? {backgroundColor:'green'} : {backgroundColor:'red'} }>
    {value.product}
</button>
  )
}
