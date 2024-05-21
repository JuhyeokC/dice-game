import { useState } from 'react';
import { getRandomNum } from './util';
import Header from './Header';
import Boards from './Boards';

export default function App() {
	const [myHistory, setMyHistory] = useState([]);
	const [otherHistory, setOtherHistory] = useState([]);

	const gameManager = {
		handleRollGame: () => {
			setMyHistory([...myHistory, getRandomNum(6)]);
			setOtherHistory([...otherHistory, getRandomNum(6)]);
		},
		handleClearGame: () => {
			setMyHistory([]);
			setOtherHistory([]);
		},
	};

	return (
		<div className='App'>
			<Header gameManager={gameManager} />
			<Boards className='App-boards' gameHistory={{ myHistory, otherHistory }} />
		</div>
	);
}
