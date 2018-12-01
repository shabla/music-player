import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import SiriWave from "siriwave";

import actions from "../../actions";

class Player extends Component {
	constructor(props) {
		super(props);
		this.waveContainer = React.createRef();
	}

	componentDidMount() {
		this.siriWave = new SiriWave({
			container: this.waveContainer.current,
			height: 70
		});
	}

	onSeek = value => {
		this.props.setSeek(this.props.selectedSound, value);
	};

	prev = () => {
		if (this.props.isPlaying) {
			if (this.props.seek > 1) {
				this.props.setSeek(this.props.selectedSound, 0);
			} else {
				console.log("prev not implemented");
			}
		} else {
			// go to prev file in playlist only when not playing or the seek is less than 1
			console.log("prev not implemented");
		}
	};

	playPause = () => {
		if (this.props.isPlaying) {
			this.props.pause(this.props.selectedSound);
			this.siriWave.stop();
		} else if (this.props.selectedSound != null) {
			this.props.play(this.props.selectedSound);
			this.siriWave.start();
		} else {
			console.log("nothing");
			// no selection
		}
	};

	next = () => {
		// next
		console.log("next not implemented");
	};

	toggleRandom = () => {
		console.log("toggle random not implemented");
	};

	toggleRepeat = () => {
		console.log("toggle repeat not implemented");
	};

	formatTrackName = () => {
		let formattedDuration = "";
		if (this.props.duration) {
			formattedDuration = ` (${getDisplayDuration(this.props.duration)})`;
		}

		return this.props.filename + formattedDuration;
	};

	render() {
		return (
			<div className="player">
				<div id="wave" ref={this.waveContainer} />

				<div className="infos">
					<div className="time">{getDisplayDuration(this.props.seek)}</div>

					<div className="current-track">
						<span className="track-name">{this.formatTrackName()}</span>
					</div>
				</div>

				<div className="timeline">
					<input
						type="range"
						min={0}
						max={this.props.duration}
						value={this.props.seek}
						onChange={e => this.onSeek(e.target.value)}
						className="slider"
					/>
				</div>

				<div className="controls">
					<div className="playback">
						<button onClick={this.prev}>
							<i className="fas fa-step-backward" />
						</button>
						<button onClick={this.playPause}>
							<i
								className={classnames("fas", {
									"fa-play": !this.props.isPlaying,
									"fa-pause": this.props.isPlaying
								})}
							/>
						</button>
						<button onClick={this.next}>
							<i className="fas fa-step-forward" />
						</button>
					</div>

					<div className="extra">
						<button onClick={this.toggleRandom}>
							<i className="fas fa-random" />
						</button>
						<button onClick={this.toggleRepeat}>
							<i className="fas fa-redo" />
						</button>
					</div>

					<div className="volume">
						<button onClick={this.props.toggleMute}>
							<i
								className={classnames("fas", {
									"fa-volume-up": !this.props.isMuted,
									"fa-volume-mute": this.props.isMuted
								})}
							/>
						</button>

						<div className="volume-slider">
							<input
								className="slider"
								type="range"
								min="0"
								max="100"
								value={this.props.volume}
								onChange={e => this.props.setVolume(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const getSelectedFilename = path => {
	if (!path) {
		return "";
	}

	path = path.split("/");
	return path[path.length - 1].replace(/\.mp3$/, "");
};

const getDisplayDuration = (duration = 0) => {
	let seconds = Math.round(duration % 60);
	if (seconds < 9) {
		seconds = "0" + seconds;
	}

	const minutes = Math.floor(duration / 60);
	return minutes + ":" + seconds;
};

const stateToProps = state => ({
	isPlaying: state.sounds.isPlaying,
	selectedSound: state.sounds.all[state.sounds.selected],
	seek: state.sounds.seek,
	filename: getSelectedFilename(state.sounds.selected),
	duration: state.sounds.duration,
	volume: state.sounds.volume
});

const dispatchToProps = {
	setVolume: actions.player.setVolume,
	setSeek: actions.player.setSeek,
	play: actions.player.play,
	pause: actions.player.pause,
	toggleMute: actions.player.toggleMute
};

export default connect(
	stateToProps,
	dispatchToProps
)(Player);
