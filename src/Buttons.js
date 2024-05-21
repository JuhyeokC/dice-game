import Button from './Button';

export default function Buttons({ gameManager }) {
	return (
		<div>
			<Button className='App-button' color='blue' onClick={gameManager.handleRollGame}>
				던지기
			</Button>
			<Button className='App-button' color='red' onClick={gameManager.handleClearGame}>
				처음으로
			</Button>
		</div>
	);
}
