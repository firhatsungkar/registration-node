import React from 'react'
import styled from 'styled-components'
import { string, bool, func } from 'prop-types'

import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import SelectInput from './SelectInput'
import ErrorAlert from './ErrorAlert'

const Container = styled.div`
  width: 100%;
  background-color: var(--secondary);
  padding: 3em 5em;
  font-size: 1em;
  opacity: ${props => props.disabled ? 0.3 : 1};
`

const Title = styled.h1``

const Form = styled.form`
  margin:0;
  padding:0;
`

const Label = styled.label`
  font-size: 1em;
  color: var(--black);
  opacity: 0.8;
  margin-top: 1em;
  display: block;
  cursor: pointer;
`

const InputGroup = styled.div`
  margin: 1em 0;
  display: ${ props => props.inline ? 'flex' : 'block'};
  & > * {
    margin-right: ${props => props.inline ? '1em' : 'inherit'};
  }
`

const RadioInput = styled.input.attrs({type: 'radio'})`
  margin-right: 1em;
`

const RadioLabel = styled.label`
  cursor: pointer;
`

const RadioGroup = styled.span`
  margin-right: 3em;
`


function RegistrationForm(props) {
  const {
    onSubmit,
    disabled = false,
    errorMessage = '',
  } = props
  function range(start, end) {
    return Array.from(
      Array(end-start+1),
      (_, index) => index + start
    )
  }
  function generateYears(diffYear=100) {
    const endYear = (new Date()).getFullYear()
    const startYear = endYear - diffYear
    return range(startYear, endYear).map(
      (year) => ({label: String(year), value: year})
    ).reverse()
  }
  function generateMonths() {
    return range(0,11).map(
      (month) => ({
        label: (new Date(new Date().setMonth(month))).toLocaleString('en', {month: 'long'}),
        value: month+1
      })
    )
  }
  function generateDate() {
    return range(1, 31).map(
      (day) => ({
        label: String(day),
        value: day
      })
    )
  }
  function handleOnSubmitForm(event) {
    event.preventDefault()
    const target = event.target
    const firstName = target.querySelector('input[name="firstName"]').value
    const lastName = target.querySelector('input[name="lastName"]').value
    const mobileNumber = target.querySelector('input[name="mobileNumber"]').value
    const year = target.querySelector('select[name="year"]').value
    const month = target.querySelector('select[name="month"]').value
    const date = target.querySelector('select[name="date"]').value
    const gender = target.querySelector('input[name="gender"]').value
    const email = target.querySelector('input[name="email"]').value
    let dateOfBirth = null
    if (date && month && year) {
      dateOfBirth = `${date}/${month}/${year}`
    }
    const result = {
      firstName,
      lastName,
      mobileNumber,
      gender,
      dateOfBirth,
      email
    }

    onSubmit && onSubmit(result)
  }
  return (
    <Container disabled={disabled}>
      {errorMessage && <ErrorAlert message={errorMessage} /> }
      <Title>Registration</Title>
      <Form onSubmit={handleOnSubmitForm}>
        <TextInput type="text" placeholder="Mobile number" name="mobileNumber" required disabled={disabled}/>
        <TextInput type="text" placeholder="First name" name="firstName" required disabled={disabled}/>
        <TextInput type="text" placeholder="Last name" name="lastName" required disabled={disabled}/>
        <Label>Date of Birth</Label>
        <InputGroup inline>
          <SelectInput name="month" data={generateMonths()} placeholder="Month" disabled={disabled}/>
          <SelectInput name="date" data={generateDate()} placeholder="Date" disabled={disabled}/>
          <SelectInput name="year" data={generateYears()} placeholder="Year" disabled={disabled}/>
        </InputGroup>
        <InputGroup>
          <RadioGroup>
            <RadioInput id="male" name="gender" value="m" disabled={disabled}/>
            <RadioLabel htmlFor="male">Male</RadioLabel>
          </RadioGroup>
          <RadioGroup>
            <RadioInput id="female" name="gender" value="f" disabled={disabled}/>
            <RadioLabel htmlFor="female">Female</RadioLabel>
          </RadioGroup>
        </InputGroup>
        <TextInput type="email" placeholder="Email" name="email" required disabled={disabled}/>
        <SubmitButton type="submit" disabled={disabled}>Register</SubmitButton>
      </Form>
    </Container>
  )
}

RegistrationForm.propTypes = {
    onSubmit: func,
    disabled: bool ,
    errorMessage: string, 
}

export default RegistrationForm