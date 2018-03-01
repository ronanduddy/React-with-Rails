class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }

    this.handleEdit = this.handleEdit.bind(this);
  }

  onDelete(id){
    this.props.handleDelete(id);
  }

  handleEdit(){
    if(this.state.editable) {
      this.props.handleUpdate({
        id: this.props.item.id,
        name: this.name.value,
        description: this.description.value
      });
    }
    this.setState({editable: !this.state.editable})
  }

  render() {
    {/* need to look at how uncontrolled forms work (refs) */}
    const item = this.props.item;
    const name = this.state.editable ? <input ref={(name) => this.name = name} type='text' defaultValue={item.name} /> : <h3>{item.name}</h3>;
    const description = this.state.editable ? <input ref={(description) => this.description = description} type='text' defaultValue={item.description} />: <p>{item.description}</p>;
    return (
      <div>
        {name}
        {description}
        <button onClick={this.onDelete.bind(this, item.id)}>Delete</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    );
  }

}
