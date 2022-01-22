import React from 'react';

export const Jumbotron = ({ heading }) => {
	return (
		<div className="jumbotron jumbotron-fluid mt-5">
			<div className="container">
				<h1 className="display-4">{heading}</h1>
				<p className="lead">
					Find your new best friend today. Adopt a wonderful cat!
				</p>
				<button type="button" className="btn btn-primary">
					Start looking
				</button>
			</div>
		</div>
	);
};
