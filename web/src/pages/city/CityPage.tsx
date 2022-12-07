import React from "react";
import { connect } from "react-redux";

import './CityPage.css'
import Left from "../../components/city/left/Left"
import Main from "../../components/city/main/Main";
import Right from "../../components/city/right/Right";
import { useHistory } from "react-router-dom";

interface CityPageProps {
  user: Object
}


// function Home(props: CityPageProps) {
	function Home(props) {
  let navigate = useHistory(); 
  
  // if(!props.user) return navigate('/login'); - > p quando tiver login, ver se n autentica direto no router

  return (

    <div className="container">

			<div className="content">
				<div className="section">
					<h5>
						<a>Did u see a scam..?</a>
					</h5>
					<p>- Please report to us and keep our community moving.</p>
				</div>
				<div className="layout">
					<Left />
					<Main />
					<Right />
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.userState?.user,
	};
};

export default connect(mapStateToProps)(Home);
