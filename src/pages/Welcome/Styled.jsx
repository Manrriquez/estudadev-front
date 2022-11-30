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

const BackgroundBanner = styled.div`
	background: #F42829;
	width: 100%;
	padding: 25px 0px 25px 0px
`;

const TitleCourses = styled.h3`
	color: #FFFFFF;
	font-size: clamp(20px, 3vw, 26px);
    font-weight: 700;
    margin-bottom: 25px;
`;

const DescriptionCourses = styled.p`
	color: #FFFFFF;
`;

const BoxCourses = styled.div`
	background: #FFFFFF;
	border: 1px solid #F2F2F2;
	box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	padding: 20px
`;

const FlexBoxCourses = styled.div`
	display: flex;
	gap: 15px;
	justify-content: space-evenly;
	flex-direction: ${props => props.direction};
`;

const IconAnimatedApp = styled.img`
	position: relative;
	animation: ${AnimatedIconTopAndBottom} 8s linear 0s infinite;
	left: ${props => props.left};
	bottom: ${props => props.bottom};
	top: ${props => props.top};
	right: ${props => props.right};
	padding: 10px 15px 10px 15px;
    border-radius: 8px;
    width: 30px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 4px 40px rgb(9 9 12 / 10%);
    border-radius: 8px;
`;
export {TitleDescriptionWelcome, TitleWelcome, BackgroundFound, BackgroundBanner, BoxCourses, FlexBoxCourses,
	 IconAnimatedApp, TitleCourses, DescriptionCourses};