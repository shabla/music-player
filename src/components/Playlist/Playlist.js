import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../../actions";

class Playlist extends Component {
	render() {
		return (
			<div className="playlist">
				<div className="content">
					<div className="row">
						<div className="position">1.</div>
						<div className="filename">03 - DEVICE</div>
						<div className="duration">4:38</div>
					</div>
					<div className="row">
						<div className="position">2.</div>
						<div className="filename">03 - DEVICE</div>
						<div className="duration">4:38</div>
					</div>
					<div className="row selected">
						<div className="position">3.</div>
						<div className="filename">03 - DEVICE</div>
						<div className="duration">4:38</div>
					</div>
					<div className="row">
						<div className="position">4.</div>
						<div className="filename">03 - DEVICE</div>
						<div className="duration">4:38</div>
					</div>
				</div>

				<div className="scrollbar">
					<div className="scrollbar-track">
						<div className="scrollbar-position" />
					</div>
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
)(Playlist);
