import styled, { keyframes } from "styled-components";

const TitleWelcome = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 23.4913px;
    line-height: 33px;
    color: #0B132A;
`;

const TitleDescriptionWelcome = styled.p`
font-style: normal;
font-weight: 400;
font-size: 7.51721px;
line-height: 14px;
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
export {TitleDescriptionWelcome, TitleWelcome, BackgroundFound, IconAnimatedApp};