import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  renderResults() {
    if(this.props.loading) {
      console.log('hi again');
      return <li>Loading</li>;
    }
    if(this.props.error) {
      return <li>Error</li>;
    }
    const listedCheeses = this.props.cheeses.map((cheese, i) => {
      return (<li key={i}>{cheese}</li>)
    });
    console.log(listedCheeses);
    return (listedCheeses)
  }

  componentDidMount() {
    console.log(fetchCheeses());
    this.props.dispatch(fetchCheeses());
  }
  render() {
    console.log(this.renderResults());
    return (
      <ul>
        {this.renderResults()}
      </ul>
    );
  }
}

const mapStateToProps = (state)  => ({
  cheeses: state.cheeses,
  loading: state.loading, 
  error: state.error,
})

export default connect(mapStateToProps)(CheeseList);
