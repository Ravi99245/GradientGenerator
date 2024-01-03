import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`

export const GradientContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props =>
    `linear-gradient(to ${props.direction}, ${props.color1}, ${props.color2})`};
  font-family: 'Roboto';
  color: #ffffff;
  testid: 'gradientGenerator';
`

export const Heading = styled.h1`
  font-size: 25px;
`

export const Paragraph = styled.p`
  font-size: 18px;
  color: #ededed;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-evenly;
  align-items: center;
`
export const Color1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const Color = styled.p`
  color: #ededed;
  font-size: 15px;
`

export const ColorInput = styled.input`
  border: none;
  height: 40px;
  width: 80px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const GenerateButton = styled.button`
  border: none;
  background-color: #00c9b7;
  padding: 8px;
  color: #014f7b;
  font-weight: 600;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
