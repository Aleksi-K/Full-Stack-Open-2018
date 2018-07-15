//Tehdyt tehtävät 1.12, 1.13, 1.14

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        selected: 0,
        votes: [0,0,0,0,0,0]
    }
  }

  clickedButton = (type) => {
    console.log('Type: ', type) 
    if (type === 'random') {
        return () => {
            const random = Math.floor(Math.random() * anecdotes.length)
            console.log('Random id: ', random)
            this.setState({ selected : random })
        }
    } else if (type === 'vote') {
        return () => {
            const copyVotes = [...this.state.votes]
            copyVotes[this.state.selected] += 1
            console.log('Copy votes: ', copyVotes)
            this.setState({ votes : copyVotes })
        }
    } 

}    

  render() {
    const  FindBestAnecdote = () => {
        return(
            anecdotes[this.state.votes.reduce(
                (Max, x, i, arr) =>
                x > arr[Max] ?
                i : Max, 0)
            ]
        )
    }

    return (
        <div>
        <p>
        {this.props.anecdotes[this.state.selected]}
        </p>
        <p>
        Ääniä saatu {this.state.votes[this.state.selected]}
        </p>
        <p>
        <Button
        handleClick={this.clickedButton("random")}
        text="Seuraava anekdootti"
        />
        <Button
        handleClick={this.clickedButton("vote")}
        text="Äänestä"
        />
        </p>
        
        <h2>Eniten ääniä saanut: </h2>
        <p>
        <FindBestAnecdote />
        </p>
        <p>
        Saadut pisteet: {Math.max(...this.state.votes)}
        </p>
        </div>  
    )
  }
}
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)