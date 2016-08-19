import React, { PropTypes, Component } from 'react'
import Item from './Item'

export default class ItemsList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired,

    changeOtherState: PropTypes.func.isRequired
  };

  // shouldComponentUpdate (nextProps) {
  //   debugger;
  //   console.dir(nextProps);
  //   console.dir(this.props);
  //   console.dir(this.props !== nextProps);
  //
  //   return true;
  // }

  render() {
    const { items, addItem, delItem, changeItem, changeOtherState } = this.props;
    console.log('change');

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
              changeItemBtnClick={changeItem}
            />
          )}
        </ul>
        <button onClick={() => changeOtherState()} className='btn'>ChangeOtherState</button>
      </div>
    )
  }
}
