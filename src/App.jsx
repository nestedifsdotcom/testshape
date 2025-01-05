import { useEffect, useState } from "react";
import "./App.css";
import treeImg from "./assets/tree.png";

function App() {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<img
				src={treeImg}
				alt=""
				className="treeImg"
				style={{
					"--top-offset": scrollTop + "px",
				}}
			/>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
			<div className="item"></div>
		</div>
	);
}

export default App;
