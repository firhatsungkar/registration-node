import styled from 'styled-components'

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primary);
  color: var(--white);
  text-align: center;
  padding: 1em;
  font-size: 1em;
  font-weight: 600;
  border-radius: 0.4em;
  outline: none;
  :active {
    opacity: 0.4;
  }
`

export default SubmitButton