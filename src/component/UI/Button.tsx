import React, { ReactNode } from 'react';

const Button = ({
	styles,
	children,
	onClick,
}: {
	styles: string;
	children: ReactNode;
	onClick?: () => void;
}) => {
	return (
		<button onClick={onClick} className={`py-[10px] px-[32px] ${styles} `}>
			{children}
		</button>
	);
};

export default Button;
