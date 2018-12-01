import React, { Component } from "react";

import AppBar from "../AppBar/AppBar";

import "normalize.css";
import "./App.scss";

export default class App extends Component {
	render() {
		return (
			<div className="window">
				<AppBar />
				<div className="menu">
					<div className="menu-item" id="menu-file">
						File
					</div>
					<div className="menu-item">Playback</div>
					<div className="menu-item">Options</div>
					<div className="menu-item">About</div>
				</div>

				<main>
					<div className="player">
						<div className="infos">
							<div className="time">0:27</div>

							<div className="current-track">
								<span className="track-name">01 - World's End, Girl's Rondo (4:28)</span>
							</div>
						</div>

						<div className="timeline">
							<input type="range" min="1" max="100" value="33" className="slider" />
						</div>

						<div className="controls">
							<div className="playback">
								<button id="button-prev">
									<i className="fas fa-step-backward" />
								</button>
								<button id="button-play-pause">
									<i className="fas fa-play" />
								</button>
								<button>
									<i className="fas fa-step-forward" />
								</button>
							</div>

							<div className="extra">
								<button>
									<i className="fas fa-random" />
								</button>
								<button>
									<i className="fas fa-redo" />
								</button>
							</div>

							<div className="volume">
								<button>
									<i className="fas fa-volume-up" />
								</button>

								<div className="volume-slider">
									<input
										type="range"
										min="0"
										max="100"
										value="75"
										className="slider"
										id="volume-slider"
									/>
								</div>
							</div>
						</div>
					</div>

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
				</main>
			</div>
		);
	}
}
