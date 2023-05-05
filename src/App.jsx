import { Routes, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Hiragana from './components/Hiragana'
import Home from './components/Home'
import Katakana from './components/Katakana'
import NotFound from './components/NotFound'


function App() {

	return (
		<div className="App">
			<nav>
				<ul>
					<li className='home-li'>
						<Link to="/">Home</Link>
					</li>
					<li className='hiragana-li'>
						<Link to="hiragana">Hiragana</Link>
					</li>
					<li className='katakana-li'>
						<Link to="katakana">Katakana</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hiragana" element={<Hiragana />} />
				<Route path="/katakana" element={<Katakana />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App