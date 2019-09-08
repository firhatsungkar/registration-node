import React, { useState } from 'react'
import styled from 'styled-components'

import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
  display: grid;
  place-items: center;
`

function App() {

  let [disabledForm, setDisabledForm] = useState(false)
  let [isSuccess, setIsSuccess] = useState(false)
  let [errorMessage, setErrorMessage] = useState('')

  function handleOnSubmit(result) {
    setDisabledForm(true)
    fetch('/api/v1/contacts', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(result)
    })
    .then( response => {
      setDisabledForm(false)
      if ( response.status === 200 || response.status === 201 ) {
        const json = response.json()
        json.then(data => {
          setIsSuccess(true)
          console.log('data', data)
        })
      } else {
        const json = response.json()
        json.then(error => {
          const { errors } = error
          const message = errors[0]['message']
          if (message) {
            setErrorMessage(message)
          }
          console.error(error)
        })
      }
    })
    .catch(error => {
      setDisabledForm(false)
      console.error('error', error)
    })
  }
  return (
    <Container>
      { isSuccess ? (
        <LoginForm />
      ) : (
        <RegistrationForm
          disabled={disabledForm}
          onSubmit={handleOnSubmit}
          errorMessage={errorMessage}/>
      )}
      <Footer/>
    </Container>
  )
}

export default App
