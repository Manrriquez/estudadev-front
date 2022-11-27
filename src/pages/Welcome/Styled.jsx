import styled, { keyframes } from "styled-components";
const AnimatedIconTopAndBottom = keyframes`

	0%,
	100% {
		transform: translateY(0);
	}

	10%,
	30%,
	50%,
	70% {
		transform: translateY(-8px);
	}

	20%,
	40%,
	60% {
		transform: translateY(8px);
	}

	80% {
		transform: translateY(6.4px);
	}

	90% {
		transform: translateY(-6.4px);
	}
`;

const TitleWelcome = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 40px;
    color: #0B132A;
`;

const TitleDescriptionWelcome = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 27px;
	color: #4F5665;

`;
const BackgroundFound = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 20rem;

	@media (max-width: 992px) {
		background-size: contain;
		background-position: center;
    }
	
`;

const BoxShadow = styled.div`
	background: #FFFFFF;
	box-shadow: 0px 15px 60px #0000004f;
	border-radius: 10px;
	width: 300px;
	height: 180px;
	transition: 4s;
`;

const FlexCenteredItems = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 15px 0px 15px 0px;
	border-radius: 18px;
	background-color: #F42829;
`;

const IconAnimatedApp = styled.img`
	position: relative;
	animation: ${AnimatedIconTopAndBottom} 8s linear 0s infinite;
	left: 35px;
	bottom: 50px;

	@media (max-width: 992px) {
		left: auto;
		right: 55px;

	}
`;
export {TitleDescriptionWelcome, TitleWelcome, BackgroundFound, IconAnimatedApp, BoxShadow, FlexCenteredItems};