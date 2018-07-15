
import React from 'react'
import ReactDOM from 'react-dom'

/*
TÄSSÄ TEHTÄVÄT
1.1 ok
1.2 ok
1.3 ok
1.4 ok
1.5 ok 
*/

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}


const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osat={props.osat[0]} />
            <Osa osat={props.osat[1]} />
            <Osa osat={props.osat[2]} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.osat.nimi} {props.osat.tehtavia}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtavaa</p>
        </div>
    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


/*
Muistiinpanoja aikaisempien tehtävien vaiheistä jätetty alas

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
}

const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
}

const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
}

return (
    <div>
    <Otsikko teksti={kurssi}/> 
    <Sisalto teksti1={osa1.nimi} tehtavat1={osa1.tehtavia}
    teksti2={osa2.nimi} tehtavat2={osa2.tehtavia} 
    teksti3={osa3.nimi} tehtavat3={osa3.tehtavia}/> 
    <Yhteensa tehtavia={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia}/> 
    </div>
    )
}


const kurssi = 'Half Stack -sovelluskehitys'
const osat = [
    {
      nimi: 'Reactin perusteet',
        tehtavia: 10
    },
    {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    },
    {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }
]

<p> {props.osat[0].nimi} </p>
<Osa teksti={osat[1].nimi} tehtavat={osat[1].tehtavia}/> 
<Osa teksti={osat[2].nimi} tehtavat={osat[2].tehtavia}/> 

<Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
<Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
<Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>

<p>{props.nimi} {props.tehtavia}</p>

*/