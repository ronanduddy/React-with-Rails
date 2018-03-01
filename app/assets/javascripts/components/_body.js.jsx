class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    {/* need to look at what/how bind is/works! */}
    this.handleNewItem = this.handleNewItem.bind(this);
  }

  componentDidMount() {
    $.getJSON(
      '/api/v1/items.json',
      (response) => { this.setState({ items: response }) }
    );
  }

  handleNewItem(item) {
    console.log(this.state);
    this.setState({ items: this.state.items.concat(item) });
  }

  render() {
    return (
      <div>
        <NewItem handleNewItem={this.handleNewItem} />
        <AllItems items={this.state.items} />
      </div>
    );
  }

}
