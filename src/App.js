import React from 'react';
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import './App.css';


class App extends React.Component {


  state = {
    books: []
  }

    
  
  componentDidMount() {
    const getData = async () => {
      try {
        const {data} = await axios.request('https://animechan.vercel.app/api/available/anime');
        this.setState({books: data});
      } catch (err) {
        alert(err);
      }      
    }
    getData();

    
  }

  


  render() {
    return (
      <div className="App">
       <SearchBar data={this.state.books}/>
      </div>
    );

  }
}

export default App;
