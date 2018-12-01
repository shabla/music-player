import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";

class AppBar extends Component {
	render() {
		return (
			<div className="app-bar">
				<div className="title">{this.props.title}</div>

				<div className="window-controls">
					<button className="control" onClick={this.props.minimize}>
						<i className="fas fa-window-minimize" />
					</button>
					<button className="control" onClick={this.props.maximize}>
						<i className="fas fa-window-maximize" />
					</button>
					<button className="control" onClick={this.props.close}>
						<i className="fas fa-times" />
					</button>
				</div>
			</div>
		);
	}
}

const stateToProps = state => ({
	title: state.app.title
});

const dispatchToProps = {
	minimize: actions.app.minimize,
	maximize: actions.app.maximize,
	close: actions.app.close
};

export default connect(
	stateToProps,
	dispatchToProps
)(AppBar);
