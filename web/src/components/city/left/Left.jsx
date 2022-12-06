import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import './Left.css'
const Container = styled.div`
	grid-area: left;
`;

const ArtCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	border-radius: 5px;
	background-color: #fff;
	transition: box-shadow 83ms;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

/* TODO ARRUMAR ESSE CSS DA IMAGEM*/
const UserInfo = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding: 12px 12px 16px;
	word-wrap: break-word;
	word-break: break-word;
	background: url("https://www.vounajanela.com/wp-content/uploads/2018/06/bali-ubud-indonesia-1-1050x599.jpg");
	background-position: center;
	background-size: 462px;
	background-repeat: no-repeat;
	height: 310px;
`;

const CardBackground = styled.div`
	margin: -12px -12px 0;
`;


const Widget = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding: 12px 0;
	& > a {
		text-decoration: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 4px 12px;
		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}
		div {
			display: flex;
			flex-direction: column;
			text-align: left;
			span {
				font-size: 12px;
				line-height: 1.333;
				&:first-child {
					color: rgba(0, 0, 0, 0.6);
				}
				&:nth-child(2) {
					color: #000;
				}
			}
		}
	}
`;

const Item = styled.a`
	display: block;
	border-color: rgba(0, 0, 0, 0.6);
	text-align: left;
	padding: 12px;
	font-size: 12px;
	span {
		display: flex;
		align-items: center;
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

const CommunityCard = styled(ArtCard)`
	padding: 8px 0 0;
	text-align: left;
	display: flex;
	flex-direction: column;
	a {
		color: #000;
		padding: 4px 12px;
		font-size: 12px;
		&:hover {
			color: #0a66c2;
		}
		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&:last-child {
			color: rgba(0, 0, 0, 0.6);
			border-top: 1px solid #d6cec2;
			padding: 12px;
			&:hover {
				background-color: rgba(0, 0, 0, 0.08);
			}
		}
	}
`;

function Left(props) {
	let photoUrl ="https://www.vounajanela.com/wp-content/uploads/2018/06/bali-ubud-indonesia-1-1050x599.jpg";//props.user.photoURL ? props.user.photoURL : "/images/photo.svg"; TODO QND TIVER AUTH
	return (
		<Container>
			<ArtCard>
				<UserInfo>
					<CardBackground />
			
						<span className="text-bold">Bali</span>
							
				</UserInfo>
				<Widget>
					<a>
						<div>
							<span>Nomads in this location</span>
							<span className="findNomads">Find nomads in this location </span>
						</div>
						<span>🗺️</span>
					</a>
				</Widget>
				<Item>
					<span>
						<img src="/images/item-icon.svg" alt="" />
						Saved Recommendations
					</span>
				</Item>
			</ArtCard>
			<CommunityCard>
				<a>
					<span>Bangkok</span>
				</a>
				<a>
					<span>
						London
						<img src="/images/plus-icon.svg" alt="" />
					</span>
				</a>
				<a>
					<span>Beijing</span>
				</a>
				<a>
					<span>Discover Hot Cities 🔥</span>
				</a>
			</CommunityCard>
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

export default connect(mapStateToProps)(Left);
