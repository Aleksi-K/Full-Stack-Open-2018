import React from 'react';
import axios from 'axios';
import NaytaNumero from './components/NaytaNumero';
import Ilmoitus from './components/Ilmoitus';
import personService from './services/persons';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
        id: '',
        name: '', 
        number: ''
        }
      ],
      newName: '',
      newNumber: '',
      notification: null,
      filter: ''
    }
  }

  componentDidMount() {
    console.log('did mount')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response })
      })
  }

  addNumber = (event) => {
    event.preventDefault()
    console.log("Nappulaa painettu")
  
    const noteObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const persons = this.state.persons.concat(noteObject)

   const name = this.state.newName
   if (this.state.persons.map(person => person.name).includes(name)) {
      if (window.confirm(`Henkilö ${name} on jo luettelossa. Haluatko päivittää numeron?`)) { 
      this.setState({
      notification: name + ' on jo luettelossa! Korvataan uusi numero!'
      }) 
      //Poistetaan ilmoitus näkyvistä 3 sec päästä
      setTimeout(() => {
      this.setState({ notification: null })
    }, 3000);   

    const personAll = this.state.persons.find(person => person.name === name)
    console.log('Päivetty numero: ', personAll , 'ID: ', personAll.id)
    const newPersons = this.state.persons.filter(person => person.id !== personAll.id)
    console.log('NoteObject ' , noteObject)
    personService
    .update(personAll.id,noteObject)
    .then(response => {
      this.setState({
        persons: newPersons.concat(noteObject),
        newName: '',
        newNumber: '',
        notification: `Korvataan henkilön ${name} numero!`
      })
      setTimeout(() => {
        this.setState({ notification: null })
      }, 3000); 
      
    })
    .catch(error => {
       this.setState({ 
        notification: `Henkilön numeroa päivittäessä henkilö on poistettu palvelimelta. Lisää henkilö uudelleen. Henkilön numeroa ei päivitetty.`
      })

      //Poistetaan ilmoitus näkyvistä 5 sec päästä
       setTimeout(() => {
       this.setState({ notification: null })
       }, 5000);
    })
  }

 }
  else {
    personService
    .create(noteObject)
    .then(response => {
      console.log(response)
      this.setState({
        persons: this.state.persons.concat(noteObject),
        newName: '',
        newNumber: '',
        notification: `Henkilö ${name} lisättiin palvelimelle`
      })
    })  

    //Poistetaan ilmoitus näkyvistä 3 sec päästä
   setTimeout(() => {
    this.setState({ notification: null })
    }, 3000);

  }

  }
  handleFilterChange = (event) => {
    console.log('Filter: ' , event.target.value)
   this.setState({ filter: event.target.value })
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
   this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
   this.setState({ newNumber: event.target.value })
  }

  handleDelete = (props) => {
    const deleteId =  props
    const person = this.state.persons.find(person => person.id === deleteId)

    console.log('Deleteä painettu ->', deleteId  ,'<-')

    if (window.confirm(`Haluatko poistaa henkilön ${person.name}?`)) { 

      personService
      .deleteNumber(deleteId)
      .then(response => {
        console.log('Staten persons' , this.state.persons)
        console.log('Filtteröity persons' , this.state.persons.filter(person => person.id !== deleteId))
        const newPersons = this.state.persons.filter(person => person.id !== deleteId)
        console.log('New persons' , newPersons)
        console.log('Deleteä painettu(2) ->', deleteId  ,'<-')
  
        this.setState({ 
          persons: newPersons,
          notification: `Poisto onnistui.`
        })
        console.log('Poisto tehty ->', response)
  
        //Poistetaan ilmoitus näkyvistä 3 sec päästä
       setTimeout(() => {
       this.setState({ notification: null })
      }, 3000);   
      })
      
      .catch(error => {
        const newPersons = this.state.persons.filter(person => person.id !== deleteId)
        this.setState({ 
          
          persons: newPersons,
          notification: `Henkilö on jo poistettu palvelimelta.`
        })

        //Poistetaan ilmoitus näkyvistä 3 sec päästä
         setTimeout(() => {
         this.setState({ notification: null })
         }, 3000);
      })

    } else {
      this.setState({ 
        notification: `Poisto peruutettiin.`
      })

              //Poistetaan ilmoitus näkyvistä 3 sec päästä
              setTimeout(() => {
                this.setState({ notification: null })
               }, 3000);
       }
  }

  render() {
    //luodaan uusi lista, joka rajaa listaa filter kentän mukaan
    const personFilter = this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    console.log('Filteri:', personFilter)
    return (
      <div>
          <Ilmoitus teksti={this.state.notification} key="teksti" />

        <h2>Puhelinluettelo</h2>
        <div>
            Rajaa:  
            <input 
            value={this.state.filter} 
            onChange={this.handleFilterChange}
            />
          </div>
        <h2>Lisää uusi numero:</h2>
        <form onSubmit={this.addNumber}>

          <div>
            nimi: 
            <input 
            value={this.state.newName} 
            onChange={this.handlePersonChange}
            />
          </div>
          <div>
            numero: 
            <input 
            value={this.state.newNumber} 
            onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
         <div> 
         <table>
           <tbody>
        {personFilter.map(persons =>  
        <tr key={persons.name}><td>{persons.name}</td><td>{persons.number}</td><td><button onClick={() => this.handleDelete(persons.id)} value={persons.id}>Poista</button></td></tr>
        )}
        </tbody>
        </table>
        </div>    
        </ul>
        debug: {this.state.newName}
   </div>
    )
  }
}

export default App