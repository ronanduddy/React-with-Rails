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
      <div>
        <h2>Create New Item</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange} />
            </label>
            <br />
            <label>
              Description:
              <input
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

}
