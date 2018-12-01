import React, { Component } from "react";
import { connect } from "react-redux";

class AppBar extends Component {
	render() {
		return (
			<div className="app-bar">
				<div className="title">Music Player</div>

				<div className="window-controls">
					<button className="control">
						<i className="fas fa-window-minimize" />
					</button>
					<button className="control">
						<i className="fas fa-window-maximize" />
					</button>
					<button className="control">
						<i className="fas fa-times" />
					</button>
				</div>
			</div>
		);
	}
}

const stateToProps = state => ({});

const dispatchToProps = {};

export default connect(
	stateToProps,
	dispatchToProps
)(AppBar);
