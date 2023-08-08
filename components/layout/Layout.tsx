import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useState } from 'react';
import Menu from './Menu';

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	const [MenuIsActive, setMenuIsActive] = useState(false);

	return (
		<>
			<Header
				setMenuIsActive={setMenuIsActive}
			/>
			<Menu
				setMenuIsActive={setMenuIsActive}
				menuIsActive={MenuIsActive}
			/>
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
