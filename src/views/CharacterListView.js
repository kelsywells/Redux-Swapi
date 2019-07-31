import React from "react";
import { connect } from "react-redux";
import { charsReducer } from "../actions";
import { CharacterList } from "../components";
import { getPeople } from "../actions";


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    {this.props.fetching && (
      <h2>Loading...</h2>
    )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('state', state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getPeople
  }
)(CharacterListView);
