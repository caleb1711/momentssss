import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container  from "react-bootstrap/Container";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Christ}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1> }/>
        </Switch>
        <switch>
          <Route exact path="/signin" render={() => <h1>Sign in</h1> }/>
        </switch>
        <switch>
          <Route exact path="/signup" render={() => <h1>Sign up</h1> }/>
        </switch>
        

        
      </Container>
    </div>
  );
}

export default App;
