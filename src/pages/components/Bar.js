import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Info from './Info';


const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/Info' activeStyle>
			Info
		</NavLink>
		<NavLink to='/FAQ' activeStyle>
			FAQ
		</NavLink>
		<NavLink to='/TermsConditions' activeStyle>
			Terms Conditions
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
