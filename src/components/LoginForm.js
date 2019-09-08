import React from 'react'
import styled from 'styled-components'

import SubmitButton from './SubmitButton'

const Container = styled.div`
  width: 100%;
  background-color: var(--secondary);
  padding: 3em 5em;
  font-size: 1em;
  opacity: ${props => props.disabled ? 0.3 : 1};
`

function LoginForm() {
  return (
    <Container>
        <SubmitButton>Login</SubmitButton>
    </Container>
  )
}

export default LoginForm