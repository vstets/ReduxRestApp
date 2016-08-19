import React, { PropTypes } from 'react'
import Button from './Button'

const Item = ({ id, text, changeItemBtnClick, removeItemBtnClick }) => (
  <li id={id}>
    {text}
    <Button
      id={id}
      text='Change'
      handleClick={() => changeItemBtnClick({id: id})}
    />
    <Button
      id={id}
      text='X'
      handleClick={() => removeItemBtnClick({id: id})}
    />
  </li>
)

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  changeItemBtnClick: PropTypes.func.isRequired,
  removeItemBtnClick: PropTypes.func.isRequired
}

export default Item
