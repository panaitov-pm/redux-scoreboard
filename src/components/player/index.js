import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {CSSTransitionGroup} from 'react-transition-group';

import Player from './Player';

const PlayersList = ({players}) => (

	<CSSTransitionGroup
		component="div"
		className="grid"
		transitionName="slider"
		transitionEnterTimeout={500}
		transitionLeaveTimeout={300}>
		{
			players.map(player => (
				<Player
					id={player.id}
					key={player.id}
					player={player}
				/>
			))
		}
	</CSSTransitionGroup>
);

PlayersList.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(
	({players}) => ({players})
)(PlayersList);

