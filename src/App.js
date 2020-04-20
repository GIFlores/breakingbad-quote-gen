import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    
    fetch('https://www.breakingbadapi.com/api/quotes')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }
  render() {
      var{ isLoaded, items } = this.state;

      if (!isLoaded) {
        console.log(items)
        return <div>Loading...</div>
      }
      else {
      return(
        <div class="App">
            <ul>
              {items.map(item =>(
                  <li key={item.quote_id}>
                    Quote: {item.quote} | Author {item.author}
                  </li>
              ))}
            </ul>
        </div>
      );
    }
  }

}
export default App;
