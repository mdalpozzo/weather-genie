import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco',
      description: '',
      temperature: ''
    };
  }

  componentWillMount() {
    axios.get('/forecast')
      .then((response) => {
        console.log(response.data);
        this.setState({
          location: response.data.city.name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <h1>{this.state.location}</h1>
        <div className="days-of-week">
          <div className="day">
            <p>Monday</p>
            <img src="https://media.giphy.com/media/3ohhwGUroCf7Ka7bc4/giphy.gif" alt="sunny" />
            <p>{this.state.description}</p>
            <p>{this.state.temperature}</p>
          </div>
          <div className="day">
            <p>Tuesday</p>
            <img src="https://media.giphy.com/media/3ohhwGUroCf7Ka7bc4/giphy.gif" alt="sunny" />
            <p>Sunny!</p>
          </div>
          <div className="day">
            <p>Wednesday</p>
            <img src="https://media.giphy.com/media/3ohhwGUroCf7Ka7bc4/giphy.gif" alt="sunny" />
            <p>Sunny!</p>
          </div>
          <div className="day">
            <p>Thursday</p>
            <img src="https://media.giphy.com/media/3ohhwGUroCf7Ka7bc4/giphy.gif" alt="sunny" />
            <p>Sunny!</p>
          </div>
          <div className="day">
            <p>Friday</p>
            <img src="https://media.giphy.com/media/3ohhwGUroCf7Ka7bc4/giphy.gif" alt="sunny" />
            <p>Sunny!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
