import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigInAndSignUpPage from './pages/sign-in-and-sign-up page/sign-in-and-sign-up page.compnent';
import Header from './components/header/header.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
 usubscribeFromAuth= null;

componentDidMount(){
const {setCurrentUser}=this.props

  this.usubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef=await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapShot=>{
     setCurrentUser({
           id:snapShot.id,
           ...snapShot.data()
         });
       });
    }
    else{
     setCurrentUser(userAuth);
    }
  });
}

componentWillUnmount(){
  this.usubscribeFromAuth()
}

  render() {
    return (<div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SigInAndSignUpPage}></Route>
      </Switch>
    </div>
    );
  }
}
 
const mapDispatchToProps= dispatch =>({
setCurrentUser:user => dispatch(setCurrentUser(user))
});

export default connect(null , mapDispatchToProps)(App);
