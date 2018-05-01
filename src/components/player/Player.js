import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removePlayer} from '../../AC';
import {changeScore} from '../../AC';

import Counter from './Counter';

const Player = ({player, removePlayer, changeScore}) => (
	<div className="grid-inner">
		<div className="grid-left">
			<a className="remove-link text-danger mr-3"
				onClick={() => removePlayer(player.id)}
			>&times;</a>
			<div className="player-name">{player.name}</div>
		</div>
		<Counter score={player.score}
		         onChangeScorePlayer={(delta) => changeScore(player.id, delta)}
		/>
	</div>
);

Player.propTypes = {
	player: PropTypes.shape({
	    name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
	}).isRequired,
	removePlayer: PropTypes.func.isRequired,
	changeScore: PropTypes.func.isRequired,
};

export default connect(
	null,
	{removePlayer, changeScore}
)(Player);

