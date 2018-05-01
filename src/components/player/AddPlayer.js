import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPlayer} from '../../AC';


class AddPlayer extends Component {
	state = {
		playerName: '',
	};

	handleChangePlayerName = ({target}) => {
		this.setState({playerName: target.value});
	};

	handleAddPlayer = (e) => {
		e.preventDefault();
		const {addPlayer} = this.props;
		if(!this.state.playerName.trim().length) {
			return;
		}
		addPlayer(this.state.playerName);
		this.setState({playerName: ''});
	};
	render() {
		return (
			<div className="mt-5">
				<form onSubmit={this.handleAddPlayer}>
					<div className="input-group">
						<input className="form-control"
						       placeholder="Player Name"
						       value={this.state.playerName}
								onChange={this.handleChangePlayerName}
						/>
							<div className="input-group-append">
								<input className="btn btn-primary"
								       type="submit"
								       value="Add Player" />
							</div>
					</div>
				</form>
			</div>
		)
	}
}

AddPlayer.propTypes = {
	addPlayer: PropTypes.func.isRequired,
};

export default connect(
	null,
	{addPlayer}
)(AddPlayer);