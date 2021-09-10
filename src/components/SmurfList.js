import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

import { fetchSmurfs } from '../actions';

 const SmurfList = (props) => {
    const { smurfs, isFetching, error } = props;

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }

    if (isFetching) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {
            smurfs.map(smurf => {
                return <Smurf smurf={smurf} key={smurf.id} />
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.