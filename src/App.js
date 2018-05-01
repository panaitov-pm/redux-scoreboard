import React from 'react';
import {connect} from 'react-redux';

import Header from './components/header';
import PlayersList from './components/player';
import AddPlayer from './components/player/AddPlayer';

const App = ({players}) => (
	<div className="container">
		<h1 className="text-center mt-1 mb-3">Scoreboard</h1>
		<div className="row">
			<div className="col-sm-4">
				<Header players={players} />
			</div>
			<div className="col-sm-8">
				<PlayersList />
				<AddPlayer />
			</div>
		</div>
	</div>
);

export default connect(
	({players}) => ({players})
)(App);
