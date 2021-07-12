import React from 'react';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigInAndSignUpPage from './pages/sign-in-and-sign-up page/sign-in-and-sign-up page.compnent';
import Header from './components/header/header.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

 usubscribeFromAuth= null;

componentDidMount(){
  this.usubscribeFromAuth= auth.onAuthStateChanged(async user=>{
    createUserProfileDocument(user);
  })
}

componentWillUnmount(){
  this.usubscribeFromAuth()
}

  render() {
    return (<div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SigInAndSignUpPage}></Route>
      </Switch>
    </div>
    );
  }
}
export default App;
