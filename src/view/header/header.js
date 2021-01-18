import React from 'react' ;

const Header = () => {

    return(
        <header>
			<div>
				<h1>Where in the world?</h1>
				<button id="toggle">
					<i className="far fa-moon"></i>
					<i className="fas fa-moon"></i>
					Dark Mode
				</button>
			</div>
		</header>
    )
}

export default Header;