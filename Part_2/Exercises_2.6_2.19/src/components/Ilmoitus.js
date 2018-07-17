import React from 'react';

const Ilmoitus = ({teksti}) => {
  console.log('Ilmoitus näytetään: ', teksti)
  
      if (teksti === null) {
        return null;
      }
      else {
        return (
          <div className="ilmoitus">
          {teksti}
         </div>
        )
      }
}

export default Ilmoitus