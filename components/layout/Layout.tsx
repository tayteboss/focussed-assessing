import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode, useEffect, useState } from 'react';
import Menu from './Menu';
import { useRouter } from 'next/router';

const Main = styled.main``;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	const [menuIsActive, setMenuIsActive] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setMenuIsActive(false);
	}, [router.pathname]);

	return (
		<>
			<Header
				setMenuIsActive={setMenuIsActive}
			/>
			<Menu
				setMenuIsActive={setMenuIsActive}
				menuIsActive={menuIsActive}
			/>
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
