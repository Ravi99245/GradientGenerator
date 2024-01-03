import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  Heading,
  Paragraph,
  UnorderedList,
  ColorContainer,
  Color1,
  Color,
  ColorInput,
  GenerateButton,
  Container,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientColor1: '#8ae323',
    gradientColor2: '#014f7b',
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'top',
  }

  updateColor1 = event => {
    this.setState({color1: event.target.value})
  }

  updateColor2 = event => {
    this.setState({color2: event.target.value})
  }

  updateTheGradientDirection = value => {
    this.setState({direction: value})
  }

  generateGradient = () => {
    const {color1, color2} = this.state
    this.setState({gradientColor1: color1, gradientColor2: color2})
  }

  render() {
    const {
      color1,
      color2,
      gradientColor1,
      gradientColor2,
      direction,
    } = this.state
    return (
      <Container data-testid="gradientGenerator">
        <GradientContainer
          color1={gradientColor1}
          color2={gradientColor2}
          direction={direction}
        >
          <Heading>Generate a CSS color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <UnorderedList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                item={eachItem}
                direction={direction}
                updateTheGradientDirection={this.updateTheGradientDirection}
              />
            ))}
          </UnorderedList>
          <Paragraph>Pick the Colors</Paragraph>
          <ColorContainer>
            <Color1>
              <Color>{color1}</Color>
              <ColorInput
                type="color"
                value={color1}
                onChange={this.updateColor1}
              />
            </Color1>
            <Color1>
              <Color>{color2}</Color>
              <ColorInput
                type="color"
                value={color2}
                onChange={this.updateColor2}
              />
            </Color1>
          </ColorContainer>
          <GenerateButton type="button" onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </GradientContainer>
      </Container>
    )
  }
}

export default GradientGenerator
