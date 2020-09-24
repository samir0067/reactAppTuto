import React, { Component } from 'react'
import Membre from './components/Membre'
import Button from './components/button'
import './App.css'

const famille = {
  membreA: {
    lastname: 'Lecomte',
    firstname: 'Martin',
    age: 40
  },
  membreB: {
    lastname: 'Hamon',
    firstname: 'Hélène',
    age: 26
  },
  membreC: {
    lastname: 'Grondin',
    firstname: 'Kevin',
    age: 34
  },
  membreD: {
    lastname: 'Poulain',
    firstname: 'Morgane',
    age: 13
  },
  membreE: {
    lastname: 'Bouchet',
    firstname: 'Lucie',
    age: 3
  }
}
const paragraphe = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit expedita magni cumque ratione libero inventore at vitae corrupti quis sit, quas unde quidem aliquam. Esse mollitia aut architecto reprehenderit deserunt ducimus libero, nesciunt quo.'

class App extends Component {
  state = { famille, isShow: false, isShowMembreE: false }


  handleShow = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }
  handleShowMembreE = () => {
    const isShowMembreE = !this.state.isShowMembreE
    this.setState({ isShowMembreE })
  }


  handleChangeFirst = (event, id) => {
    const famille = { ...this.state.famille }
    const firstname = event.target.value
    famille[id].firstname = firstname
    this.setState({ famille })
  }
  handleChangeLast = (event, id) => {
    const famille = { ...this.state.famille }
    const lastname = event.target.value
    famille[id].lastname = lastname
    this.setState({ famille })
  }
  handleClickNum = (num, id) => {
    const famille = { ...this.state.famille }
    famille[id].age += num
    this.setState({ famille })
  }
  handleHideFirstname = id => {
    const famille = { ...this.state.famille }
    famille[id].firstname = ''
    this.setState({ famille })
  }
  handleHideLastname = id => {
    const famille = { ...this.state.famille }
    famille[id].lastname = ''
    this.setState({ famille })
  }


  render () {
    const { titleH1, titleH2 } = this.props
    const { famille, isShow, isShowMembreE } = this.state

    let description = null
    if (isShow) {
      description = <strong>La plus jeune. </strong>
    }
    let detailMembreE = null
    if (isShowMembreE) {
      detailMembreE = (
        <>
          <Membre 
            firstname={famille.membreE.firstname} 
            lastname={famille.membreE.lastname}
            age={famille.membreE.age}
          >
          </Membre>
          <button onClick={this.handleShow}>
            {
              isShow ? 'Cacher' : 'Détails'
            }
          </button>
          <hr/>
        </>
      )
    }

    const liste = Object.keys(famille)
      .map(membre => (
        <>
          <Membre 
            key={membre.id}
            handleChangeFirst={event => this.handleChangeFirst(event, membre)} 
            handleChangeLast={event => this.handleChangeLast(event, membre)} 
            handleHideFirstname={() => this.handleHideFirstname(membre)}
            handleHideLastname={() => this.handleHideLastname(membre)}
            firstname={famille[membre].firstname} 
            lastname={famille[membre].lastname} 
            age={famille[membre].age}
          />
          <Button 
            titleBtn='Vieillir' 
            vieillir={() => this.handleClickNum(1, membre)}
          />
          <hr/>
        </>
      ))

    return (
      <>
        <div className='App'>
          <h1>{titleH1}</h1>
          <p>{paragraphe}</p>
        </div>
        <div className='App'>
          <h2>{titleH2}</h2>
          { liste }
          {detailMembreE}
          <button onClick={this.handleShowMembreE}>
            {
              isShowMembreE ? 'Cacher' : 'Membre E'
            }
          </button>
        </div>
      </>
    )
  }
}
export default App
