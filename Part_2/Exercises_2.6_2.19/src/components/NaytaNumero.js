import React from 'react';



const NaytaNumero = ({persons}) => {
  console.log('Numeron näyttäminen: ', persons)
  return ( 
    <li key={persons.name}>{persons.name} - {persons.number}</li>
    
 )
}


export default NaytaNumero