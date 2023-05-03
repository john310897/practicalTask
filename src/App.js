import './App.css';
import Home from './views/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SummaryForm from './views/SummaryForm';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/summary' element={<SummaryForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
