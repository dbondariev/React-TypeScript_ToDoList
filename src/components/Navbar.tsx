import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
	<nav>
		<div className='nav-wrapper purple darken-2 px1'>
			<a href='/' className='brand-logo'>
				React + Typescript
			</a>
			<ul className='right hide-on-med-and-down'>
				<li>
					<NavLink to='/'>Event List</NavLink>
				</li>
				<li>
					<NavLink to='/about'>Information Page</NavLink>
				</li>
			</ul>
		</div>
	</nav>
);
