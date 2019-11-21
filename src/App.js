import React from 'react';
import {IonApp} from '@ionic/react';
import './App.css';

// import components
// import Header from './components/header'
import Routes from './routes';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {    
    return(
      <IonApp>
        {/* <Header /> */}
        <Routes />
      </IonApp>
    )
  }
}
export default App;
