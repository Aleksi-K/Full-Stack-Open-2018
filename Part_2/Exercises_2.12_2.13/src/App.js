//TEHTÄVÄT 2.12, 2.13
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      findCountry: '',
      countries: []
    }
  }
  
  handleFindCountry = (event) => {
   console.log('Find Country: ' , event.target.value)
   this.setState({ findCountry: event.target.value })
  }

  handleCountryClick = (props) => {
    console.log('Maata klikattu:', props)
    this.setState({ findCountry: props })
  }

  componentDidMount() {
    const baseUrl = 'https://restcountries.eu/rest/v2/all'

    axios
      .get(baseUrl)
      .then(response => {
        this.setState({countries: response.data})
      })
  }

  render() {
    //suodatetaan haetun rajauksen mukaan
    const countryFilter = this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.findCountry.toLowerCase()))
    console.log('Country Filter: ', countryFilter)

    const Countries = () => {
      console.log('Countries')
      if (countryFilter.length > 10) {
        return (<p>Näytettäviä kohteita on liikaa. Rajaa lisää hakua.</p>)
      }
      else if (countryFilter.length === 1 ) {
        console.log('Vain 1 maa',  countryFilter)
        return (
          <p>
        <h2>{countryFilter[0].name}</h2>
        Pääkaupunki: {countryFilter[0].capital} <br />
        Ihmisiä: {countryFilter[0].population} <br />
        Maanosa: {countryFilter[0].region} <br /> 
        <img alt={countryFilter[0].name} src={countryFilter[0].flag} />
        </p>
      )
      }
      else {
        return(
          <p>
          {countryFilter.map(country => 
            <li key={country.name} onClick={() => this.handleCountryClick(country.name)} >{country.name} - {country.name}</li>
            )}
            </p>
        )
      }
    }
    return (
      <div>
      Etsi maat:
      <input 
        value={this.state.findCountry} 
        onChange={this.handleFindCountry}
      />
       <Countries />
       </div>

    );
  }
}

export default App;
