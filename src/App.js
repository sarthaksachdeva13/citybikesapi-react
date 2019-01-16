import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react'
import BikeCard from './Bike';
import './App.css';

class App extends Component {
  state = {
    stations: []
  }

  componentDidMount() {
    fetch('https://api.citybik.es/v2/networks/blue-bikes')
      .then(res => res.json())
      .then(res => this.setState({ stations: res.network.stations.slice(0, 12) }))
  }

  render() {
    const { stations } = this.state;
    const stationMap = stations.map(s => {
      return <BikeCard key={s.id} bike={s} />
    })
    return (
      <div className="App">
        <Container text>
          <Header as='h1'>List of Stations</Header>
          <Divider/>
          <div className="ui three doubling stackable cards">
            {stationMap}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
