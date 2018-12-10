import React from 'react';

import {Navigation} from './PrimaryNavigationStyled';

import links from './links';

export default class PrimaryNavigation extends React.Component {
	renderLinks(linkSet) {
		return linkSet.map((link, i) => (
			<Navigation.Link 
				exact
				key={`nav-link-${i}`}
				to={link.to}
			>
				{link.label}
			</Navigation.Link>))
	}

	render() {
		const {all, loggedIn, loggedOut} = links;
		return (
			<Navigation>
				{this.renderLinks(all)}
				{!this.props.auth.isAuthenticated && 
					<React.Fragment>
						{this.renderLinks(loggedOut)}
					</React.Fragment>
				}
				{this.props.auth.isAuthenticated &&
					<React.Fragment>
						{this.renderLinks(loggedIn)}
					</React.Fragment>
				}
			</Navigation>
		);
	}
}