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
        <div className="row justify-content-center">
          <div className="col-6">
            <h2>Items <span className="badge badge-primary">{items.length}</span></h2>
          </div>
        </div>
        {items}
      </div>
    );
  }

}
