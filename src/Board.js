import Dice from './Dice';

export default function Board({ className, gameHistory, children }) {
	const classNames = ['Board', className ? className : ''].join(' ');
	return (
		<div className={classNames}>
			<h2 className='Board-heading'>{children}</h2>
			<Dice gameHistory={gameHistory}>{children}</Dice>
			<h2 className='Board-heading'>총점</h2>
			<p>{gameHistory.reduce((acc, cur) => (acc += cur), 0)}</p>
			<h2 className='Board-heading'>기록</h2>
			<p>{gameHistory.length === 0 ? '-' : gameHistory.join(', ')}</p>
		</div>
	);
}
