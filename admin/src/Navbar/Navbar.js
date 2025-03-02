// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: '#000' }}>
			<div className="container-fluid py-1">
				<Link className="navbar-brand" to="/">
					Courses.
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/courses">
								Courses
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/training">
								Training
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/alumni">
								Alumni
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/placement">
								Placement
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
