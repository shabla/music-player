import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";

import AppBar from "../AppBar/AppBar";
import Player from "../Player/Player";
import Playlist from "../Playlist/Playlist";

import actions from "../../actions";

import "./App.scss";

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

class App extends Component {
	componentDidMount() {
		// set default volume
		this.props.setVolume(this.props.volume);
	}

	state = {
		dropzoneActive: false
	};

	onDragEnter = () => {
		this.setState({
			dropzoneActive: true
		});
	};

	onDragLeave = () => {
		this.setState({
			dropzoneActive: false
		});
	};

	onDrop = async files => {
		const file = files[0];
		const b64 = await getBase64(file);

		await this.props.loadFile(file.name, b64);
		this.props.play(this.props.selectedSound);

		this.setState({
			dropzoneActive: false
		});
	};

	render() {
		return (
			<Dropzone
				onDrop={this.onDrop}
				disableClick
				style={{
					// absolute = active, relative = disabled
					position: this.state.dropzoneActive ? "absolute" : "relative",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0
				}}
				onDragEnter={this.onDragEnter}
				onDragLeave={this.onDragLeave}
				onDrop={this.onDrop}
			>
				<div className="app">
					<AppBar />

					<main>
						<Player />
						<Playlist />
					</main>
				</div>
			</Dropzone>
		);
	}
}

const stateToProps = state => ({
	volume: state.sounds.volume,
	selectedSound: state.sounds.all[state.sounds.selected]
});

const dispatchToProps = {
	setVolume: actions.player.setVolume,
	loadFile: actions.app.loadFile,
	play: actions.player.play
};

export default connect(
	stateToProps,
	dispatchToProps
)(App);
