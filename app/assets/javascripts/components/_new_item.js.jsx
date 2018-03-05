class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: {
        item: {
          name: this.state.name,
          description: this.state.description
        }
      },
      success: (item) => { this.props.handleNewItem(item) }
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <h2>Create New Item</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange} />
              </div>
            <div className="form-group">
              <label>
                Description
              </label>
              <textarea
                name="description"
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.handleChange} />
            </div>
            <div className="float-right">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }

}
