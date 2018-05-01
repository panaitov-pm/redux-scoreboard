export default state => next => action => {
	if(!action.generateId) {
		return next(action)
	}

	const randomId = Math.round( Date.now() + ( Math.random() * 1e8 ) ).toString(36);

	return next({...action, randomId})
}