import React from 'react';

class CounterArea extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <section id="counter-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="single-counter client">
						<span className="counter-heading">Clients</span>
						<span className="counter">150</span>
					</div>
				</div>
								<div className="col-lg-3 col-md-6">
					<div className="single-counter project">
						<span className="counter-heading">Selfies Uploaded</span>
						<span className="counter">300</span>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="single-counter awards">
						<span className="counter-heading">Images Processed</span>
						<span className="counter">256</span>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="single-counter members">
						<span className="counter-heading">Downloads</span>
						<span className="counter">260</span>
					</div>
				</div>
			</div>
		</div>
	</section> 
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default CounterArea;
