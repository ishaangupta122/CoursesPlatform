import './App.css';
import Courses from './Courses/Courses';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Training from './Training/Training';
import Alumni from './Alumni/Alumni';
import User from './Users/User';
import Placement from './Placements/Placement';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<User />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/training" element={<Training />} />
				<Route path="/alumni" element={<Alumni />} />
				<Route path="/placement" element={<Placement />} />
			</Routes>
		</Router>
	);
}

export default App;
