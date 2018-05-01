import C from '../constants';

export const addPlayer = (name) => ({
	type: C.ADD_PLAYER,
	payload: {name},
	generateId: true
});

export const removePlayer = (id) => ({
	type: C.REMOVE_PLAYER,
	payload: {id},
	generateId: false
});

export const changeScore = (id, delta) => ({
	type: C.CHANGE_SCORE,
	payload: {id, delta},
	generateId: false
});