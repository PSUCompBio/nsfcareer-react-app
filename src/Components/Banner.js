import React from 'react';

// Banner class containing Spinners and other banner related elements (Pre loader etc.)
class Banner extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return  (<div className="preloader-wrapper">
    <div className="spinner"></div>
</div>);   
	
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Banner;
