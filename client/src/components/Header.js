import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payments from '../containers/Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login With Google</a>
					</li>
				);
			default:
				return [
					<li key="payments">
						<Payments />
					</li>,
					<li key="credits" style={{ margin: '0 20px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="logout">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	}
	render() {
		return (
			<nav>
				<div
					className="nav-wrapper blue"
					style={{ paddingLeft: '10px' }}
				>
					<Link
						to={this.props.auth ? '/surveys' : '/'}
						className="left brand-logo"
					>
						FeedbackCollector
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
