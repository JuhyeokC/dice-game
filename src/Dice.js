const DICE_COLORS = {
	나: 'blue',
	상대: 'red',
};

export default function Dice({ gameHistory, children }) {
	const color = DICE_COLORS[children];
	const num = gameHistory[gameHistory.length - 1] || 1;
	const imagePath = process.env.PUBLIC_URL + `/images/dice/dice-${color}-${num}.svg`;
	return <img className='Dice' alt={color} src={imagePath} />;
}
