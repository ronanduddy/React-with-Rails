class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    {/* need to look at what/how bind is/works! */}
    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleItemDeletion = this.handleItemDeletion.bind(this);
  }

  componentDidMount() {
    $.getJSON(
      '/api/v1/items.json',
      (response) => { this.setState({ items: response }) }
    );
  }

  handleNewItem(item) {
    this.setState({ items: this.state.items.concat(item) });
  }

  handleItemDeletion(id){
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: () => {
        this.setState({
          items: this.state.items.filter((item) => { return item.id != id; })
        });
      }
    });
  }

  render() {
    return (
      <div>
        <NewItem handleNewItem={this.handleNewItem} />
        <AllItems items={this.state.items} handleItemDeletion={this.handleItemDeletion} />
      </div>
    );
  }

}
