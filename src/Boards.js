import Board from './Board';

export default function Boards({ className, gameHistory }) {
	return (
		<div className={className}>
			<Board className='App-board' gameHistory={gameHistory.myHistory}>
				나
			</Board>
			<Board className='App-board' gameHistory={gameHistory.otherHistory}>
				상대
			</Board>
		</div>
	);
}
