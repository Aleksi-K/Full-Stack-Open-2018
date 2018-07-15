/*
Tehdyt tehtävät:
1.6 ok
1.7 ok
1.8 ok
1.9 ok
1.10 ok * tehtävä
1.11 ok
*/
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }

     clickedButton = (nappula) => { 
        console.log('Klikattu clickedHandle: ', nappula)
        return () => {
            this.setState({ [nappula] : this.state[nappula] + 1 })
        }
    }    

    render() {
        return (
        <div> 
        <Otsikko />
        <Button
          handleClick={this.clickedButton("hyva")}
          text="hyvä"
        />
        <Button
          handleClick={this.clickedButton("neutraali")}
          text="neutraali"
        />
        <Button
          handleClick={this.clickedButton("huono")}
          text="huono"
        />
        <Statistics tilasto={this.state} />
        </div>  
      )
    }
  }
  const Otsikko = (props) => {
    return (
        <div>
            <h1>Anna palautetta</h1>
            
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Statistic = ({ text, value }) => (
    <tr><th>{text}:</th><th> {value}</th></tr>
  )

const Statistics = ({ tilasto }) => {
    let yhteensa = tilasto.hyva + tilasto.neutraali + tilasto.huono
    let keskiarvo = (tilasto.hyva * 1 + tilasto.huono * -1) / yhteensa
    console.log("Yhteensä: " + yhteensa)

    if (yhteensa > 0) {
        console.log("toimiiko")
    
        return (          
            <div>
            <table>
            <tbody>
            <Statistic text="Hyvä" value={tilasto.hyva}/>
            <Statistic text="Neutraali: " value={tilasto.neutraali}/>
            <Statistic text="Huono" value={tilasto.huono}/>
            <Statistic text="Keskiarvo" value={keskiarvo.toFixed(2)}/>
            <Statistic text="Positiivisia" value={(((tilasto.hyva/yhteensa)*100).toFixed(2))+" %"}  />
            </tbody>
            </table>
            </div>
        )
    } else {
        return (
            <div>
            <p>Ei yhtään palautetta annettu</p>
            </div>
            )
    
        }   
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


