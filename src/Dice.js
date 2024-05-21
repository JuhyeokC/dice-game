import DiceBlue1 from './images/dice/dice-blue-1.svg';
import DiceBlue2 from './images/dice/dice-blue-2.svg';
import DiceBlue3 from './images/dice/dice-blue-3.svg';
import DiceBlue4 from './images/dice/dice-blue-4.svg';
import DiceBlue5 from './images/dice/dice-blue-5.svg';
import DiceBlue6 from './images/dice/dice-blue-6.svg';
import DiceRed1 from './images/dice/dice-red-1.svg';
import DiceRed2 from './images/dice/dice-red-2.svg';
import DiceRed3 from './images/dice/dice-red-3.svg';
import DiceRed4 from './images/dice/dice-red-4.svg';
import DiceRed5 from './images/dice/dice-red-5.svg';
import DiceRed6 from './images/dice/dice-red-6.svg';

const DICE_COLORS = {
	나: 'blue',
	상대: 'red',
};

const DICE_LIST = {
	blue: [DiceBlue1, DiceBlue2, DiceBlue3, DiceBlue4, DiceBlue5, DiceBlue6],
	red: [DiceRed1, DiceRed2, DiceRed3, DiceRed4, DiceRed5, DiceRed6],
};

export default function Dice({ gameHistory, children }) {
	const color = DICE_COLORS[children];
	const num = gameHistory[gameHistory.length - 1] || 1;
	return <img className='Dice' alt={color} src={DICE_LIST[color][num - 1]} />;
}
