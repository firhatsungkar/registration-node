import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const Container = styled.p`
  width: 100%;
  padding: 1em;
  background-color: var(--danger);
  color: var(--white);
  border-radius: 0.3em;
`
function ErrorAlert({ message }) {
  return (
    <Container>
      {message}
    </Container>
  )
}

ErrorAlert.propTypes = {
  message: string
}

export default ErrorAlert