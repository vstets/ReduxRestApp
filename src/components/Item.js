import React, { PropTypes } from 'react'
import Button from './Button'

const Item = ({ id, text, removeItemBtnClick }) => (
  <li id={id}>
    {text}
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
  removeItemBtnClick: PropTypes.func.isRequired
}

export default Item
