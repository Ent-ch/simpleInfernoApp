import { version } from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import './registerServiceWorker';
import Logo from './logo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/daemonite-material/css/material.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno ${version}`}</h1>
        </header>
        <p className={classNames("App-intro")}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
