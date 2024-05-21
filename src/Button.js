export default function Button({ className, color = 'blue', onClick, children }) {
	const classNames = ['Button', className ? className : '', color ? color : ''].join(' ');
	return (
		<button className={classNames} onClick={onClick}>
			{children}
		</button>
	);
}
