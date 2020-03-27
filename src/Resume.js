import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <h1>This is Resume</h1>
        <Link to="/">Home</Link>
        <h2>My name is Teerapat</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          mollitia ducimus assumenda veniam quos aperiam quis dignissimos rerum
          voluptatem repellendus architecto, suscipit esse adipisci temporibus
          officiis consequuntur eaque maxime cumque?
        </p>

        <Button type="primary">Primary</Button>
      </div>
    );
  }
}
