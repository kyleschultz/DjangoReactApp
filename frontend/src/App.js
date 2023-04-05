import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        firstName: "",
        lastName: ""
      },
      forceMetricsDemoList: []
    };
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/forcemetricsdemo/');
      const forceMetricsDemoList = await res.json();
      this.setState({forceMetricsDemoList});
    }
    catch (e) {
      console.log(e);
    }
  }

  renderItems = () => {
    return this.state.forceMetricsDemoList.map(item => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className='forcemtericsdemo-title mr-2'>
          {item.firstName} {item.lastName}
        </span>
      </li>
    ))
  }

  render() {
    return (
      <main className="content">
        <div className="row">
          <div className="col-md-6">
              Welcome to Kyle's React/Django Demo!
              <p></p>
              <p></p>
              <p></p>
              Attendees:
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default App;
