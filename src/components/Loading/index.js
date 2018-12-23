import React from 'react';
import { ScaleLoader } from 'react-spinners';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="loading-container">
        <div className="sweet-loading">
          <ScaleLoader
            color="#00a99d"
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
