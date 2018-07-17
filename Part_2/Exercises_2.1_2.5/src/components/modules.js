import React from 'react'

  const Kurssit =({kurssit}) => {
        console.log('Kurssit:', kurssit)
        const tehtavienReduceri2 = kurssit[0].osat.reduce(function(accumulator, currentValue) {
          return accumulator +  currentValue.tehtavia;
          }, 0);
        console.log('Reduceri: ', tehtavienReduceri2);
            
      return (
        <div>
        <Sisalto kurssit={kurssit} />
        <p>Yhteensä:  {tehtavienReduceri2}</p>  
        </div>
      )
  }

  const Sisalto = ({kurssit}) => {
    const kurssitMapatty = () => kurssit.map(tieto =>        
      <div key={tieto.id}>
      <h1>{tieto.nimi}</h1> 
      {osatMapatty(tieto.id-1)}     
      </div>
      )
  const osatMapatty = (props) => {
    console.log('Testi2:', props)
    return (
      kurssit[props].osat.map(tieto =>
       <li key={tieto.id}>
          {tieto.nimi}
          {' '}
          {tieto.tehtavia}
      </li>
      )
     )
  }
console.log('Tiedot:', kurssitMapatty)
console.log('Tiedot:', osatMapatty)
    return(
      <div>
      {kurssitMapatty()}
      </div>
    )
  }

export default Kurssit