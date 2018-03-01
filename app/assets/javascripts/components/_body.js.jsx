class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    $.getJSON(
      '/api/v1/items.json',
      (response) => { this.setState({ items: response }) }
    );
  }

  render() {
    return (
      <div>
        <NewItem />
        <AllItems items={this.state.items} />
      </div>
    );
  }

}
