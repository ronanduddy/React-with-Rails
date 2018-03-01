class AllItems extends React.Component {

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
    const items = this.state.items.map((item) => {
      return (
        <div key={item.id}> {/* key is important for list of similar elements */}
          <h3>#{item.id} {item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    });
    return <div> <h2>All Items (x{items.length})</h2> {items} </div>;
  }
}
