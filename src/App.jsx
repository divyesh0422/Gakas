import React from 'react'
import Header from './components/Header'
import Grid from './components/grid'
import Footer from './components/Footer'
import FormWithValidation from './components/FormWithValidation'


const App = () => {
  return (
    <>
    <div>
    <Header />
      <Grid />
      <FormWithValidation />
      <Footer />
   

    </div>
    </>
  )
}

export default App