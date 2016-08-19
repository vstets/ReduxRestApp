import React, { PropTypes, Component } from 'react'

export default class ItemsList extends Component {
  static propTypes = {
    // onOff: PropTypes.bool.isRequired,
    onOff: PropTypes.object.isRequired,
    onOffToggle: PropTypes.func.isRequired
  };

  shouldComponentUpdate (nextProps) {
    console.dir(nextProps);
    console.dir(this.props);

    return this.props !== nextProps;
  }

  render() {
    const { onOff, onOffToggle } = this.props;

    return (
      <div>
        <br/>
        <button
          onClick = { onOffToggle }
          className = 'btn'
          data-text = {onOff.item}
        >On-off</button>
      </div>
    )
  }
}
