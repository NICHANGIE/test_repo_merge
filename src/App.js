
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Createaccount from './Components/Createaccount';
import HomePage from './Components/HomePage';
import CreateFundraiser from './Components/CreateFundraiser';
import DonationForm from './Components/DonationForm';
import ForgotPassword from './Components/ForgotPassword';
import Readmore from './Components/Readmore';
import UserDashboard from './Components/UserDashbord';
import './Julius.css';
import SigninForm from './Components/SigninForm';
import FileUpload from './Components/FileUpload';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< HomePage />}></Route>
				<Route exact path='/login' element={<SigninForm/>}></Route>
				<Route exact path='/register' element={< Createaccount />}></Route>
		<Route exact path='/fileupload' element={<FileUpload />}></Route>
        <Route exact path='/donate' element={<DonationForm />}></Route>
        <Route exact path='/createfundraising' element={<CreateFundraiser />}></Route>
        <Route exact path='/forgot' element={<ForgotPassword />}></Route>
		<Route exact path='/readmore' element={< Readmore/>}></Route>
		<Route exact path='/userdashbord' element={<UserDashboard />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}
export default App;
