class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editable: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onDelete(id){
    this.props.handleDelete(id);
  }

  handleEdit(event){
    event.preventDefault();
    this.props.handleUpdate({
      id: this.props.item.id,
      name: this.name.value,
      description: this.description.value
    });
    this.toggleEdit();
  }

  toggleEdit(){
    this.setState({editable: !this.state.editable});
  }

  render() {
    if(this.state.editable){
      return (
        // could pull this into a 'edit' uncontrolled component
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.handleEdit}>
                  <div className="form-group">
                    <label>
                      Name
                    </label>
                    <input
                      className="form-control"
                      ref={(name) => this.name = name}
                      type='text'
                      defaultValue={this.props.item.name} />
                  </div>
                  <div className="form-group">
                    <label>
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      ref={(description) => this.description = description}
                      defaultValue={this.props.item.description} />
                  </div>
                  <div className="float-right btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={this.toggleEdit}>Cancel</button>
                    <input
                      className="btn btn-outline-primary"
                      type="submit"
                      value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{this.props.item.name}
                  {this.props.item.updated_at != this.props.item.created_at &&
                    <span
                      title={new Date(this.props.item.updated_at).toLocaleString()}
                      className="badge badge badge-info float-right">Updated</span>
                  }
                </h3>
                <h6 className="card-subtitle mb-2 text-muted">
                  {new Date(this.props.item.created_at).toLocaleString()}
                </h6>
                <p className="card-text">{this.props.item.description}</p>
                <div className="float-right btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={this.toggleEdit}>Edit</button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={this.onDelete.bind(this, this.props.item.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}
