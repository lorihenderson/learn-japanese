import { useState, useEffect } from 'react'

function Katakana() {
	const katakana = [
		{ romanji: 'a', katakana: 'ア' },
		{ romanji: 'i', katakana: 'イ' },
		{ romanji: 'u', katakana: 'ウ' },
		{ romanji: 'e', katakana: 'エ' },
		{ romanji: 'o', katakana: 'オ' },
		{ romanji: 'ka', katakana: 'カ' },
		{ romanji: 'ki', katakana: 'キ' },
		{ romanji: 'ku', katakana: 'ク' },
		{ romanji: 'ke', katakana: 'ケ' },
		{ romanji: 'ko', katakana: 'コ' },
		{ romanji: 'sa', katakana: 'サ' },
		{ romanji: 'shi', katakana: 'シ' },
		{ romanji: 'su', katakana: 'ス' },
		{ romanji: 'se', katakana: 'セ' },
		{ romanji: 'so', katakana: 'ソ' },
		{ romanji: 'chi', katakana: 'チ' },
		{ romanji: 'ta', katakana: 'タ' },
		{ romanji: 'te', katakana: 'テ' },
        { romanji: 'ti', katakana: 'ティ' },
		{ romanji: 'to', katakana: 'ト' },
        { romanji: 'tu', katakana: 'トゥ' },
		{ romanji: 'tsu', katakana: 'ツ' },
		{ romanji: 'tsa', katakana: 'ツァ' },
		{ romanji: 'na', katakana: 'ナ' },
		{ romanji: 'ni', katakana: 'ニ' },
		{ romanji: 'nu', katakana: 'ヌ ' },
		{ romanji: 'ne', katakana: 'ネ' },
		{ romanji: 'no', katakana: 'ノ' },
		{ romanji: 'ha', katakana: 'ハ' },
		{ romanji: 'hi', katakana: 'ヒ' },
		{ romanji: 'fu', katakana: 'フ' },
		{ romanji: 'he', katakana: 'ヘ' },
		{ romanji: 'ho', katakana: 'ホ' },
		{ romanji: 'ma', katakana: 'マ' },
		{ romanji: 'mi', katakana: 'ミ' },
		{ romanji: 'mu', katakana: 'ム' },
		{ romanji: 'me', katakana: 'メ' },
		{ romanji: 'mo', katakana: 'モ' },
		{ romanji: 'ya', katakana: 'ヤ' },
		{ romanji: 'yu', katakana: 'ユ' },
		{ romanji: 'yo', katakana: 'ヨ' },
		{ romanji: 'ra', katakana: 'ラ' },
		{ romanji: 'ri', katakana: 'リ' },
		{ romanji: 'ru', katakana: 'ル' },
		{ romanji: 're', katakana: 'レ' },
		{ romanji: 'ro', katakana: 'ロ' },
		{ romanji: 'wa', katakana: 'ワ' },
		{ romanji: 'we', katakana: 'ウェ' },
		{ romanji: 'wo', katakana: 'ウォ' },
		{ romanji: 'n', katakana: 'ン' },
		{ romanji: 'fa', katakana: 'ファ' },
		{ romanji: 'fi', katakana: 'フィ' },
		{ romanji: 'fe', katakana: 'フェ' },
		{ romanji: 'fo', katakana: 'フォ' },
    { romanji: 'ga', katakana: 'ガ' },
    { romanji: 'gi', katakana: 'ギ' },
    { romanji: 'gu', katakana: 'グ' },
    { romanji: 'ge', katakana: 'ゲ' },
    { romanji: 'go', katakana: 'ゴ' },
    { romanji: 'za', katakana: 'ザ' },
    { romanji: 'ze', katakana: 'ゼ' },
    { romanji: 'zo', katakana: 'ゾ' },
    { romanji: 'da', katakana: 'ダ' },
    { romanji: 'ji', katakana: 'ジ' },
    { romanji: 'ji', katakana: 'ヂ' },
    { romanji: 'zu', katakana: 'ズ' },
    { romanji: 'zu', katakana: 'ヅ' },
    { romanji: 'de', katakana: 'デ' },
    { romanji: 'do', katakana: 'ド' },
    { romanji: 'ba', katakana: 'バ' },
    { romanji: 'bi', katakana: 'ビ' },
    { romanji: 'bu', katakana: 'ブ' },
    { romanji: 'be', katakana: 'ベ' },
    { romanji: 'bo', katakana: 'ボ' },
    { romanji: 'po', katakana: 'パ' },
    { romanji: 'pi', katakana: 'ピ' },
    { romanji: 'pu', katakana: 'プ' },
    { romanji: 'pe', katakana: 'ペ' },
    { romanji: 'po', katakana: 'ポ' },
    { romanji: 'kya', katakana: 'キャ' },
    { romanji: 'kyu', katakana: 'キュ' },
    { romanji: 'kyo', katakana: 'キョ' },
    { romanji: 'gya', katakana: 'ギャ' },
    { romanji: 'gyu', katakana: 'ギュ' },
    { romanji: 'gyo', katakana: 'ギョ' },
    { romanji: 'sha', katakana: 'シャ' },
    { romanji: 'shu', katakana: 'シュ' },
    { romanji: 'sho', katakana: 'ショ' },
    { romanji: 'ja', katakana: 'ジャ' },
    { romanji: 'ju', katakana: 'ジュ' },
    { romanji: 'jo', katakana: 'ジョ' },
    { romanji: 'cha', katakana: 'チャ' },
    { romanji: 'chu', katakana: 'チャ' },
    { romanji: 'cho', katakana: 'チョ' },
    { romanji: 'nya', katakana: 'ニャ' },
    { romanji: 'nyu', katakana: 'ニュ' },
    { romanji: 'nyo', katakana: 'ニョ' },
    { romanji: 'hya', katakana: 'ヒャ' },
    { romanji: 'hyu', katakana: 'ヒュ' },
    { romanji: 'hyo', katakana: 'ヒョ' },
    { romanji: 'bya', katakana: 'ビャ' },
    { romanji: 'byu', katakana: 'ビュ' },
    { romanji: 'byo', katakana: 'ビョ' },
    { romanji: 'pya', katakana: 'ピャ' },
    { romanji: 'pyu', katakana: 'ピュ' },
    { romanji: 'pyo', katakana: 'ピョ' },
    { romanji: 'mya', katakana: 'ミャ' },
    { romanji: 'myu', katakana: 'ミュ' },
    { romanji: 'myo', katakana: 'ミョ' },
    { romanji: 'rya', katakana: 'リャ' },
    { romanji: 'ryu', katakana: 'リュ' },
    { romanji: 'ryo', katakana: 'リョ' },
	]

	const [katakanaInput, setKatakanaInput] = useState('')
	const [katakanaCurrent, setKatakanaCurrent] = useState(0)
	
	const [katakanaStreak, setKatakanaStreak] = useState(0)
	const [maxKatakanaStreak, setMaxKatakanaStreak] = useState(0)

	const [error, setError] = useState(false)

	const setRandomKatakana = () => {
		const randomKIndex = Math.floor(Math.random() * katakana.length)
		setKatakanaCurrent(randomKIndex)
	}

	const handleKataChange = (e) => {
		setKatakanaInput(e.target.value)
	}

	const handleKataSubmit = (e) => {
		e.preventDefault()
		 
		if (katakanaInput.toLowerCase() === katakana[current].romanji) {
			setKatakanaStreak(katakanaStreak + 1)
			setMaxKatakanaStreak(katakanaStreak + 1 > maxKatakanaStreak ? katakanaStreak + 1 : maxKatakanaStreak)
			setError(false)

			localStorage.setItem('katakanaStreak', katakanaStreak + 1)
			localStorage.setItem('maxKatakanaStreak', katakanaStreak + 1 > maxKatakanaStreak ? katakanaStreak + 1 : maxKatakanaStreak)
		} else {
			const k = katakana[current].katakana
			const rm = katakana[current].romanji
			setError(`Wrong! The correct answer for ${k} is ${rm}`)
			setKatakanaStreak(0)
			localStorage.setItem('streak', 0)
		}

		setKatakanaInput('')
		setRandomKatakana()
	}

	useEffect(() => {
		setRandomKatakana()
		setKatakanaStreak(parseInt(localStorage.getItem('katakanaStreak')) || 0)
		setMaxKatakanaStreak(parseInt(localStorage.getItem('maxKatakanaStreak')) || 0)
	}, [])

	return (
		<div className="Katakana">
			<header className="katakana-header">
				<h1 className="quiz-header">Katakana Quiz</h1>
				<div>
					<p>{katakanaStreak} / {maxKatakanaStreak}</p>
				</div>
			</header>

			<div className="quiz-katakana">
				<p>{katakana[katakanaCurrent].katakana}</p>
			</div>

			<div className="quiz-input ">
				<form onSubmit={handleKataSubmit}>
					<input
						type="text"
						onChange={handleKataChange}
						value={katakanaInput}
						className="kata-input-value" />
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

export default Katakana