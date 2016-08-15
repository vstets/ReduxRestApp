import React, { PropTypes, Component } from 'react'
import Item from './Item'

export default class ItemsList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
  };

  render() {
    const { items, addItem, delItem } = this.props;

    return (
      <div>
        <button onClick={addItem} className='btn'>Add</button>
        <br/>
        <button onClick={() => delItem({id: items[0].id})} className='btn'>Delete</button>
        <br/>
        <ul>
          {items.map(item =>
            <Item
              id={item.id}
              text={item.text}
              key={item.id}
              removeItemBtnClick={delItem}
            />
          )}
        </ul>
      </div>
    )
  }
}
