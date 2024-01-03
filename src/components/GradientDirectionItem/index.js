import {ListItem, ListDirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, direction, updateTheGradientDirection} = props
  const {value, displayText} = item
  const isActive = direction === value
  console.log(isActive)

  const changeDirection = () => {
    updateTheGradientDirection(value)
  }

  return (
    <ListItem>
      <ListDirectionButton
        type="button"
        isActive={isActive}
        onClick={changeDirection}
      >
        {displayText}
      </ListDirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
