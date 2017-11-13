import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';
import Nav from 'inferno-bootstrap/dist/Navigation/Nav';
import NavItem from 'inferno-bootstrap/dist/Navigation/NavItem';
import NavLink from 'inferno-bootstrap/dist/Navigation/NavLink';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/daemonite-material/css/material.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink href="#">
                  <Logo width="20" height="20" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
              </NavItem>
            </Nav>
          <div className="container">
            <div className="row">
              <div className="col-10 content">
                <h2>Content</h2>
              </div>
              <div className="col-2 sidebar">
                <h2>Sidebar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
