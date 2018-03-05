class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewItemError = this.handleNewItemError.bind(this);
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
      success: (item) => {
        this.props.handleNewItem(item);
        this.setState({
          name: '',
          description: '',
          errors: {}
        });
      },
      error: (xhr, status, err) => {
        this.handleNewItemError(xhr.responseJSON.errors);
      }
    });

    event.preventDefault();
  }

  handleNewItemError(errors){
    this.setState({ errors: errors });
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
                className={`form-control ${('name' in this.state.errors) ? 'is-invalid' : ''}`}
                value={this.state.name}
                onChange={this.handleChange} />
                {('name' in this.state.errors) &&
                  <div className="invalid-feedback">
                    {this.state.errors.name}
                  </div>
                }
              </div>
            <div className="form-group">
              <label>
                Description
              </label>
              <textarea
                name="description"
                type="text"
                className={`form-control ${('description' in this.state.errors) ? 'is-invalid' : ''}`}
                value={this.state.description}
                onChange={this.handleChange} />
                {('description' in this.state.errors) &&
                  <div className="invalid-feedback">
                    {this.state.errors.description}
                  </div>
                }
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
