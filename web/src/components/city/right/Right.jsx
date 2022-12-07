import React from "react";
import styled from "styled-components";

const Container = styled.div`
	grid-area: right;
	@media (max-width: 768px) {
		margin-bottom: 35px;
	}
`;

const FollowCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	border: none;
	position: relative;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	padding: 12px;
`;

const Title = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	width: 100%;
	color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
	margin-top: 16px;
	li {
		display: flex;
		align-items: center;
		margin: 12px 0;
		position: relative;
		font-size: 14px;
		& > div {
			display: flex;
			flex-direction: column;
		}
		button {
			background-color: transparent;
			color: rgba(0, 0, 0, 0.6);
			box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
			padding: 16px;
			align-items: center;
			border-radius: 15px;
			box-sizing: border-box;
			font-weight: 600;
			display: inline-flex;
			justify-content: center;
			max-height: 32px;
			max-width: 480px;
			text-align: center;
			border: none;
		}
	}
`;

const AvatarParty = styled.div`
	background: url("https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f973.png");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	margin-right: 8px;
`;

const AvatarDev = styled.div`
	background: url("https://images.emojiterra.com/google/android-nougat/512px/1f468-1f4bb.png");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	margin-right: 8px;
`;

const Recommendation = styled.a`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #0a66c2;
	img {
		margin-left: 5px;
	}
`;

const BannerCard = styled(FollowCard)`
	img {
		width: 100%;
		height: 100%;
	}
`

function Right() {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Events in this city</h2>
					<img src="/images/feed-icon.svg" alt="" />
				</Title>
				<FeedList>
					<li>
						<a>
							<AvatarParty />
						</a>
						<div>
							<span># Devs party</span>
							<button>See</button>
						</div>
					</li>
					<li>
						<a>
							<AvatarDev />
						</a>
						<div>
							<span>#React bootcamp</span>
							<button>See</button>
						</div>
					</li>
				</FeedList>
				<Recommendation>
					View all events
					<img src="/images/right-icon.svg" alt="" />
				</Recommendation>
			</FollowCard>
			<BannerCard>
				<img src="https://assets.entrepreneur.com/content/3x2/2000/20171024224233-el-nomadismo-digital-y-el-trabajo-remoto.jpeg" alt="" />
			</BannerCard>
		</Container>
	);
}


import { connect } from "react-redux";
const mapStateToProps = (state) => {
	return {
		user: state.userState?.user,
	};
};

export default connect(mapStateToProps)(Right);
