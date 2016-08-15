import React, { PropTypes } from 'react'
// import React, { PropTypes, Component } from 'react'


const Button = ({ id, text, handleClick, isDisabled = false }) => (
  <buton
    className='btn'
    onClick={() => handleClick(id)}
    disabled={isDisabled}>
    {text}
  </buton>
)

// class Button extends Component {
//   static propTypes = {
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     handleClick: PropTypes.func.isRequired,
//     isDisabled: PropTypes.bool
//   }
//
//   render() {
//     const { id, text, isDisabled, handleClick } = this.props
//
//     return (
//       <buton data-id={id}
//         onClick={() => handleClick(id)}
//         disabled={isDisabled}>
//         {text}
//       </buton>
//     )
//   }
// }

Button.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default Button
