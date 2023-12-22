import SecondTitle from "../SecondTitle/SecondTitle";
import "./Smartcities.css"; // Import your CSS file for styling
import Smart from "./Smart";

const Smartcities = () => {
	return (
		<div id="intelligent-store" className="intelligent-store">
			<p className="container-title">
				<SecondTitle />
			</p>
			<Smart/>
			<br/>
			<br/>
			<div className="products">
				<div className="product">
					<img src="./AI.jpg" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1  >1. AI and Deep Learning</h1>
						 <p  >

						 Specializing in AI and deep learning technologies, 
						 <br /> <br/>Edge AI provides advanced solutions for data processing and analytics.
							<br />
							<br />
							Their products are designed for high performance and efficiency,
							<br/>
							<br /> suitable for both research and practical applications in various industries.
							
						</p>
					</div>
				</div>
				<div className="product">
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1>2. Embedded Solutions</h1>
						<p>
						Offering a wide range of embedded solutions, 
							<br />
							<br />Edge AI caters to the needs of IoT and industrial applications. 
							<br />
							<br />Their solutions are known for reliability and versatility, 
							<br />
							<br /> suitable for a variety of operational environments.

						</p>
					</div>
					<img src="./embeded.png" alt="" />
				</div>
				<div className="product">
					<img src="./visualution.jpg" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}}>
						<h1>3. Professional Visualization</h1>
						<p> Edge AI excels in providing professional visualization solutions, <br />
							<br /> including high-performance graphics cards and visualization software. <br />
							<br /> These solutions are ideal for graphics-intensive applications<br/>
							<br />in design, visualization, and digital content creation.
						</p>
					</div>

				</div>
				<div className="product">
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1>4. Data Center</h1>
						<p>
						They offer comprehensive data center solutions, 
							<br />
							<br /> focusing on high-density computing, storage, and networking. 
							<br />
							<br /> These solutions are designed to maximize efficiency and scalability, 
							<br />
							<br /> meeting the demands of modern data centers.

						</p>
					</div>
					<img src="./data.png" alt="" />
				</div>
			
			<div className="product">
					<img src="./network.jpg" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1  >5. Networking and Connectivity</h1>
						 <p  >

						 Edge AI's networking and connectivity solutions
							<br />
							<br />
							include advanced network interface cards, switches, and wireless communication devices.
							<br />
							<br /> These products ensure robust and secure connectivity for various network infrastructures.
							

						</p>
					</div>
				</div>
				<div className="product">
					
					<div className="text" style={{ position: 'relative', left: '10%'}} >
						<h1>6. Servers and Workstations</h1>
						<p>
						The company also provides a range of servers and workstations, 
							<br />
							<br />  designed for high-performance computing tasks. 
							<br />
							<br /> These systems are built with the latest technologies
							<br />
							<br />to handle complex computations and large datasets efficiently.</p>
					</div>
					<img src="./Server.jpg" alt="" />
				</div>
				<div className="product">
					<img src="./accessoire.png" alt="" />
					<div className="text" style={{ position: 'relative', left: '10%'}}>
						<h1>7. Accessories and Components</h1>
						<p> In addition to their primary offerings, Edge AI also provides a variety of accessories and components,
							<br />
							<br />including cables, adapters, and power supplies, 
							<br />
							<br /> ensuring comprehensive support for their main product lines.



						</p>
					</div>

				</div>
			
			</div>
		</div>
		
	);
};

export default Smartcities;
