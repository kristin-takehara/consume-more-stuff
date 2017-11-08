import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render(){
    return (
    <div>
      <div className="search-bar">
        <input
         placeholder="SEARCH BAR! "
         value={this.state.term}   
         onChange={ event => this.onInputChange(event.target.value)} />
      </div>
      <div className="search-tips">
        <p> use the search bar to filter your search :)</p>
      </div>
    </div>
    );
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;