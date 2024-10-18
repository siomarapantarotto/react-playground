import React from 'react';

class ClockClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }

    }

    render() {
      return (
        <div>
           <h5>
              Current time by OLD {this.props.componentType}: {this.state.date.toLocaleTimeString()}
           </h5>
        </div>
      );
    }
}

export default ClockClass;