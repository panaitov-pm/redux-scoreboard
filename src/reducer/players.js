import C from '../constants';
import data from '../data';

const  defaultState = data.players;

export default (state = defaultState, action) => {
	const {type, payload, randomId} = action;

	switch (type) {
		case C.ADD_PLAYER:
			const player = {
				id: randomId,
				name: payload.name,
				score: 0
			};
			return [...state, player];
		case C.REMOVE_PLAYER:
			return state.filter(player => player.id !== payload.id);
		case C.CHANGE_SCORE:
			return state.map(player => {
				if(player.id === payload.id) {
					return {...player, score: player.score += payload.delta}
				} else {
					return player;
				}
			});
		default:
			return state;
	}
}