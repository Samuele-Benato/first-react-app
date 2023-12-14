import React from 'react'

const AppComponent = () => {
  return (
    <section>
      <Presentazione/>
    </section>
  )
}

const Persona = () => {
  return (
    <h2>Nome : Samuele</h2>
  )
}
const Messaggio = () => {
  return (
    <h5>Messaggio : Sto sviluppando con React</h5>
  )
}
const Presentazione = () => {
  return (
    <React.Fragment>
     <Persona/>
     <Messaggio/>
    </React.Fragment>
  )
}

export default AppComponent