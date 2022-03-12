import React from 'react';
import './styles.css';
import axios from 'axios';

class App extends React.Component {
  pegarPlaylists = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
      {
        headers: {
          Authorization: 'matheus-bevar-guimaraes'
        }
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
      <h1>oi silvio</h1>
      <button onClick={this.pegarPlaylists}>PEGAR PLAYLISTS</button>
      </div>
    );
  }

}

export default App;
