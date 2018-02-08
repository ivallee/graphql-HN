import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.linkg.description} ({this.props.link.url})
        </div>
      </div>
    );
  }
  _voteForLink = async () => {
    //implement later
  }
}

export default Link;