import Buttons from './Buttons';

export default function Header({ gameManager }) {
	const imagePath = process.env.PUBLIC_URL + `/images/logo/logo.png`;
	return (
		<header>
			<img className='App-logo' alt='주사위게임 로고' src={imagePath} />
			<h1 className='App-title'>주사위게임</h1>
			<Buttons gameManager={gameManager} />
		</header>
	);
}
