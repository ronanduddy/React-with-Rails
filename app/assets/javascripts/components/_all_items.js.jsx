class AllItems extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDelete(id){
    this.props.handleItemDeletion(id);
  }

  handleUpdate(item){
    this.props.handleItemUpdate(item);
  }

  render() {
    {/* need to look at why ids can/t be passed into bind */}
    const items = this.props.items.map((item) => {
      return (
        <div key={item.id} >
          <Item
            item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            handleUpdate={this.handleUpdate.bind(this)} />
        </div>
      )
    });

    return (
      <div>
        <h2>All Items (x{items.length})</h2>
        {items}
      </div>
    );
  }

}
