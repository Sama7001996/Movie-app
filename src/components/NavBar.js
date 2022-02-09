import React from 'react';

const NavBar = (props) => {
	return (
        <>
        <nav className="navbar">
            <div className="container">
                <h1 className="navbar-brand">Movie Search App</h1>
                <form className="search-btn">
                <input className="form-control me-2" 
                type="search" 
                placeholder="Enter Movie Name..." 
                aria-label="Search"
                value={props.value}
				onChange={(event) => props.setSearch(event.target.value)}></input>
                </form>
            </div>
        </nav>
      </>
	
	);
};

export default NavBar;


