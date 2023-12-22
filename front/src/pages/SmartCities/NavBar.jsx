


const NavBar= () => {
	return (
		<nav style={{backgroundColor: 'transparent', position:'absolute'}}>
			<ul>
				<a href="/#home" className="logo">
					<img
						src="./logo.png"
						alt=""
						style={{
							width: "200px",
							height: "100px",
						}}
					/>
				</a>

				<li className="active">
					<a href="/#home">
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="/#ai">
						<span>AI </span>
					</a>
				</li>
				<li>
					<a href="">
						<span>Smart Cities</span>
					</a>
				</li>
				<li>
					<a href="">
						<span>Software Services</span>
					</a>
				</li>
				<li>
					<a href="/#cave">
						<span>Cave </span>
					</a>
				</li>
				<li>
					<a href="/#metaverse">
						<span>Metaverse</span>
					</a>
				</li>
				 <a href="/#contact" className="button"><span>Contact Us </span> </a>
				
			</ul>
		</nav>
	);
};

export default NavBar;