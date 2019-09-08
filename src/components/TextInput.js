import styled from 'styled-components'

const TextInput = styled.input`
  width: 100%;
  border: 1px solid var(--black);
  padding: 1em;
  margin: 1em 0;
  font-size: 1em;
  ::placeholder {
    color: var(--black);
    opacity: 0.8;
  }
`

export default TextInput