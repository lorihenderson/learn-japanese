import { useState, useEffect } from 'react'

function App() {
	const hiragana = [
		{ romanji: 'a', hiragana: 'あ' },
		{ romanji: 'i', hiragana: 'い' },
		{ romanji: 'u', hiragana: 'う' },
		{ romanji: 'e', hiragana: 'え' },
		{ romanji: 'o', hiragana: 'お' },
		{ romanji: 'ka', hiragana: 'か' },
		{ romanji: 'ki', hiragana: 'き' },
		{ romanji: 'ku', hiragana: 'く' },
		{ romanji: 'ke', hiragana: 'け' },
		{ romanji: 'ko', hiragana: 'こ' },
		{ romanji: 'sa', hiragana: 'さ' },
		{ romanji: 'shi', hiragana: 'し' },
		{ romanji: 'su', hiragana: 'す' },
		{ romanji: 'se', hiragana: 'せ' },
		{ romanji: 'so', hiragana: 'そ' },
		{ romanji: 'ta', hiragana: 'た' },
		{ romanji: 'chi', hiragana: 'ち' },
		{ romanji: 'tsu', hiragana: 'つ' },
		{ romanji: 'te', hiragana: 'て' },
		{ romanji: 'to', hiragana: 'と' },
		{ romanji: 'na', hiragana: 'な' },
		{ romanji: 'ni', hiragana: 'に' },
		{ romanji: 'nu', hiragana: 'ぬ' },
		{ romanji: 'ne', hiragana: 'ね' },
		{ romanji: 'no', hiragana: 'の' },
		{ romanji: 'ha', hiragana: 'は' },
		{ romanji: 'hi', hiragana: 'ひ' },
		{ romanji: 'fu', hiragana: 'ふ' },
		{ romanji: 'he', hiragana: 'へ' },
		{ romanji: 'ho', hiragana: 'ほ' },
		{ romanji: 'ma', hiragana: 'ま' },
		{ romanji: 'mi', hiragana: 'み' },
		{ romanji: 'mu', hiragana: 'む' },
		{ romanji: 'me', hiragana: 'め' },
		{ romanji: 'mo', hiragana: 'も' },
		{ romanji: 'ya', hiragana: 'や' },
		{ romanji: 'yu', hiragana: 'ゆ' },
		{ romanji: 'yo', hiragana: 'よ' },
		{ romanji: 'ra', hiragana: 'ら' },
		{ romanji: 'ri', hiragana: 'り' },
		{ romanji: 'ru', hiragana: 'る' },
		{ romanji: 're', hiragana: 'れ' },
		{ romanji: 'ro', hiragana: 'ろ' },
		{ romanji: 'wa', hiragana: 'わ' },
		{ romanji: 'wo', hiragana: 'を' },
		{ romanji: 'n', hiragana: 'ん' },
    { romanji: 'ga', hiragana: 'が' },
    { romanji: 'gi', hiragana: 'ぎ' },
    { romanji: 'gu', hiragana: 'ぐ' },
    { romanji: 'ge', hiragana: 'げ' },
    { romanji: 'go', hiragana: 'ご' },
    { romanji: 'za', hiragana: 'ざ' },
    { romanji: 'ze', hiragana: 'ぜ' },
    { romanji: 'zo', hiragana: 'ぞ' },
    { romanji: 'da', hiragana: 'だ' },
    { romanji: 'ji', hiragana: 'じ' },
    { romanji: 'ji', hiragana: 'ぢ' },
    { romanji: 'zu', hiragana: 'ず' },
    { romanji: 'zu', hiragana: 'づ' },
    { romanji: 'de', hiragana: 'で' },
    { romanji: 'do', hiragana: 'ど' },
    { romanji: 'ba', hiragana: 'ば' },
    { romanji: 'bi', hiragana: 'び' },
    { romanji: 'bu', hiragana: 'ぶ' },
    { romanji: 'be', hiragana: 'べ' },
    { romanji: 'bo', hiragana: 'ぼ' },
    { romanji: 'po', hiragana: 'ぱ' },
    { romanji: 'pi', hiragana: 'ぴ' },
    { romanji: 'pu', hiragana: 'ぷ' },
    { romanji: 'pe', hiragana: 'ぺ' },
    { romanji: 'po', hiragana: 'ぽ' },
    { romanji: 'kya', hiragana: 'きゃ' },
    { romanji: 'kyu', hiragana: 'きゅ' },
    { romanji: 'kyo', hiragana: 'きょ' },
    { romanji: 'gya', hiragana: 'ぎゃ' },
    { romanji: 'gyu', hiragana: 'ぎゅ' },
    { romanji: 'gyo', hiragana: 'ぎょ' },
    { romanji: 'sha', hiragana: 'しゃ' },
    { romanji: 'shu', hiragana: 'しゅ' },
    { romanji: 'sho', hiragana: 'しょ' },
    { romanji: 'ja', hiragana: 'じゃ' },
    { romanji: 'ju', hiragana: 'じゅ' },
    { romanji: 'jo', hiragana: 'じょ' },
    { romanji: 'cha', hiragana: 'ちゃ' },
    { romanji: 'chu', hiragana: 'ちゅ' },
    { romanji: 'cho', hiragana: 'ちょ' },
    { romanji: 'nya', hiragana: 'にゃ' },
    { romanji: 'nyu', hiragana: 'にゅ' },
    { romanji: 'nyo', hiragana: 'にょ' },
    { romanji: 'hya', hiragana: 'ひゃ' },
    { romanji: 'hyu', hiragana: 'ひゅ' },
    { romanji: 'hyo', hiragana: 'ひょ' },
    { romanji: 'bya', hiragana: 'びゃ' },
    { romanji: 'byu', hiragana: 'びゅ' },
    { romanji: 'byo', hiragana: 'びょ' },
    { romanji: 'pya', hiragana: 'ぴゃ' },
    { romanji: 'pyu', hiragana: 'ぴゅ' },
    { romanji: 'pyo', hiragana: 'ぴょ' },
    { romanji: 'mya', hiragana: 'みゃ' },
    { romanji: 'myu', hiragana: 'みゅ' },
    { romanji: 'myo', hiragana: 'みょ' },
    { romanji: 'rya', hiragana: 'りゃ' },
    { romanji: 'ryu', hiragana: 'りゅ' },
    { romanji: 'ryo', hiragana: 'りょ' },
	]

	const [input, setInput] = useState('')
	const [current, setCurrent] = useState(0)
	
	const [streak, setStreak] = useState(0)
	const [maxStreak, setMaxStreak] = useState(0)

	const [error, setError] = useState(false)

	const setRandomHiragana = () => {
		const randomIndex = Math.floor(Math.random() * hiragana.length)
		setCurrent(randomIndex)
	}

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		 
		if (input.toLowerCase() === hiragana[current].romanji) {
			setStreak(streak + 1)
			setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak)
			setError(false)

			localStorage.setItem('streak', streak + 1)
			localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak)
		} else {
			const h = hiragana[current].hiragana
			const r = hiragana[current].romanji
			setError(`Wrong! The correct answer for ${h} is ${r}`)
			setStreak(0)
			localStorage.setItem('streak', 0)
		}

		setInput('')
		setRandomHiragana()
	}

	useEffect(() => {
		setRandomHiragana()
		setStreak(parseInt(localStorage.getItem('streak')) || 0)
		setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
	}, [])

	return (
		<div className="App">
			<header className="hiragana-header">
				<h1 className="quiz-header">Hiragana Quiz</h1>
				<div>
					<p>{streak} / {maxStreak}</p>
				</div>
			</header>

			<div className="quiz-hiragana ">
				<p>{hiragana[current].hiragana}</p>
			</div>

			<div className="quiz-input ">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={handleChange}
						value={input}
						className="input-value " />
				</form>
			</div>
			{error && 
				<div>
					<p>{ error }</p>
				</div>
			}
		</div>
	)
}

export default App