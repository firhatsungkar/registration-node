import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 20vh;
  background-color: var(--primary);
  color: var(--white);
  display: grid;
  place-items: center;
`

const Title = styled.h1`
`

function Footer() {
  return(
    <Container>
      <Title>Footer</Title>
    </Container>
  )
}

export default Footer