import logo from './images/logo/logo.png';
import Buttons from './Buttons';

export default function Header({ gameManager }) {
	return (
		<header>
			<img className='App-logo' alt='주사위게임 로고' src={logo} />
			<h1 className='App-title'>주사위게임</h1>
			<Buttons gameManager={gameManager} />
		</header>
	);
}
