import React, { useState } from 'react'
import styled from 'styled-components'
import { array, string, any, bool } from 'prop-types';

const Select = styled.select`
  visibility: hidden;
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
`
const Option = styled.option``

const SelectContainer = styled.div`
  position: relative;
`

const SelectButton = styled.div`
  display: inline-block;
  padding: 0.5em 3em 0.5em 0.5em;
  border: 1px solid var(--black);
  border-radius: 0.3em;
  position: relative;
  cursor: ${ props => !props.disabled ? 'pointer' : 'not-allowed'};
  ::after {
    content: '';
    border-right: 3px solid black;
    border-bottom: 3px solid black;
    width: 10px;
    height: 10px;
    transform: rotate(-315deg);
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }
`

const SelectOptions = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid var(--black);
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 3em;
  max-height: 300px;
  overflow: auto;
  background-color: var(--white);
  border-radius: 0.3em;
  z-index: 9;
`
const SelectOption = styled.li`
  padding: 0.5em 3em 0.3em 0.5em;
  cursor: pointer;
`

function SelectInput(props) {
  const {
    data = [],
    placeholder = '',
    selected = null,
    name = null,
    disabled = false,
  } = props

  let [ selectedValue, setSelectedValue ] = useState(selected)
  let [ showMenu, setShowMenu ] = useState(false)
  function getItemLabelFromValue(value) {
    const item = data.find(item => item.value === value)
    return item ? item.label : placeholder
  }
  function handleOnClickSelect() {
    if (!disabled) {
      setShowMenu(!showMenu)
    }
  }
  function handleOnClickSelectItem(item) {
    setSelectedValue(item.value)
    setShowMenu(false)
  }

  return (
    <>
      <Select name={name} defaultValue={selectedValue} disabled={disabled}>
        <Option value="">{placeholder}</Option>
        { data.length > 0 && data.map(item => (
          <Option selected={item.value === selectedValue} key={item.value} value={item.value}>{item.label}</Option>
        ))}
      </Select>
      <SelectContainer>
        <SelectButton onClick={handleOnClickSelect} disabled={disabled}>
          {getItemLabelFromValue(selectedValue)}
        </SelectButton>
        { showMenu && (
          <SelectOptions>
            { data.length > 0 && data.map(item => (
              <SelectOption key={item.value} onClick={() => handleOnClickSelectItem(item)}>
                {item.label}
              </SelectOption>
            ))}
          </SelectOptions>
        )}
      </SelectContainer>
    </>
  )
}

SelectInput.propTypes = {
  data: array,
  placeholder: string,
  selected: any,
  name: string,
  disabled: bool,
}

export default SelectInput