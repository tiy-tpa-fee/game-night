import React from 'react';
import Parse from 'parse';
import Icon from './Icon';
import Game from '../Game';
import Carousel from './Carousel';

class GameDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let query = new Parse.Query(Game);
    query.get(this.props.game_id, {
      success: (object) => {
        this.setState({
          game: object
        });
      }
    });
  }

  render() {
    if (this.state.game) {
      return <div className="gamedetailswrapper">
          <div className="gamedetailstitle">
            {this.state.game.get('title')}
          </div>
          <div className="container content">
            <Carousel images={this.state.game.get('images')} />
            <div className="row row-centered gamedeatilitem">
              <i className="col-xs-4 fa fa-users fa-2x text-center">
                {this.state.game.get('minPlayers')}-{this.state.game.get('maxPlayers')}
              </i>
              <i className="col-xs-4 fa fa-hourglass-half fa-2x text-center">
                {this.state.game.get('duration')} min.</i>
              <i className="col-xs-4 fa fa-cogs fa-2x text-center">
                {this.state.game.get('difficulty')}</i>
            </div>
            <div className="row row-centered">
              <div className="col-xs-12 text-center detailsinfo">Details:</div>
            </div>
            <div className=" gamedetailsdetails">
              {this.state.game.get('description')}
            </div>
          </div>
        </div>
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default GameDetails;
