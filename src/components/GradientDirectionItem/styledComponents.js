import styled from 'styled-components'

export const ListItem = styled.li`
  color: #ffffff;
`

export const ListDirectionButton = styled.button`
  color: #1e293b;
  font-weight: 600;
  width: 70px;
  margin-right: 7px;
  padding: 5px;
  border-radius: 3px;
  border: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  outline: none;
`
