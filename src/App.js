import './App.css';
import DialogsComponent from './components/DialogsComponent/DialogsComponent';
import HeaderContainer from './components/Header/HeaderContainer';
import MusicComponent from './components/MusicComponent/MusicComponent';
import NavBar from './components/NavBar/NavBar';
import NewsComponent from './components/NewsComponent/NewsComponent';
import SettingsComponent from './components/SettingsComponent/SettingsComponent';
import UsersComponent from './components/UsersComponent/UsersComponent';
import ProfileContainer from './components/ProfileComponent/ProfileContainer';
import LoginComponent from './components/LoginComponent/LoginComponent';
import Preloader from './components/common/Preloader/Preloader';
import React from 'react';
import { connect } from 'react-redux';
import { initialization } from './redux/appReducer';
import { Routes, Route } from 'react-router-dom';


class App extends React.Component {
  componentDidMount() {
    this.props.initialization();
  };
  render() {
    if (this.props.initialized) {
      return (
        <div className='flex-container'>
          <HeaderContainer />
          <div className='main'>
            <NavBar />
            <Routes>
              <Route path='/' element={<ProfileContainer />} />
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsComponent />} />
              <Route path='/users' element={<UsersComponent />} />
              <Route path='/news' element={<NewsComponent />} />
              <Route path='/music' element={<MusicComponent />} />
              <Route path='/settings' element={<SettingsComponent />} />
              <Route path='/login' element={<LoginComponent />} />
            </Routes>
          </div>
        </div>
      );
    }
    else {
      <Preloader />
    };
  };
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialization: () => {
      dispatch(initialization());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);