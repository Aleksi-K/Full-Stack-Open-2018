//Tehtävät 2.1, 2.2, 2.3, 2.4, 2.5
import React from 'react'
import ReactDOM from 'react-dom'
import Kurssit from './components/modules'

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
    return (
      <div>   
        <Kurssit kurssit={kurssit} />
      </div>
    )
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

