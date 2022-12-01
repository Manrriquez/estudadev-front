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
	padding: 25px 0px 25px 0px;
    max-height: 250px;
	background-image: url(${props => props.image});
	background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
`;

const TitleCourses = styled.h3`
	color: #FFFFFF;
	font-size: clamp(20px, 3vw, 26px);
    font-weight: 700;
	margin-top: 40px;
`;

const TitleCoursesLight = styled.span`
	font-weight: 400;
`;

const DescriptionCourses = styled.p`
	font-weight: 700;
	display: flex;
	flex-direction: column;

	svg {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10px;
		font-size: 26px;
	}
`;

const BoxCourses = styled.div`
	background: #FFFFFF;
	border: 1px solid #00000047;
 	box-shadow: 0px 4px 60px rgb(0 0 0 / 35%);
	border-radius: 20px;
	padding: 20px;
	color: #4F5665;
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 130px;
	position: relative;
	margin-bottom: 25px;

	&:hover {
		border: 1px solid #ff1d1d52;
		box-shadow: 0px 4px 60px rgb(255 0 0 / 35%);
		color: #F42829;
		top: ${props => props.top};
		bottom: ${props => props.bottom};
	}
`;

const FlexBoxCourses = styled.div`
	display: flex;
	gap: 15px;
	justify-content: space-evenly;
	position: relative;
	bottom: ${props => props.bottom};
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

const BackgroundFoundAbout = styled.div`
	border-radius: 28px;
	width: 100%;
	padding: 25px;
	background: #F42829;
	border: 1px solid #F42829;
		box-shadow: 0px 4px 20px rgb(255 0 0 / 35%);
	color: #ffff;
	min-height: 300px;
`;

const TitleBoxAbout = styled.h3`
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 15px;
`;

const DescriptionBoxAbout = styled.p`
	font-size: 18px;
	font-weight: 400;
`;

const TitleProgram = styled.h3`

	border-bottom: 7px solid #F42829;
	max-width: 500px;
	padding-bottom: 10px;
	font-size: 26px;
	margin-bottom: 65px;
	border-radius: 7px;
	margin-left: auto;
	margin-right: auto;

`;

const ProgramDescriptionBox = styled.div`
	// border-bottom: 7px solid #F42829;
	padding-bottom: 10px;
	font-size: 16px;
	width: 100%;
	// max-width: 300px;
	background: #FFFFFF;
	// border: 1px solid #00000047;
 	// box-shadow: 0px 4px 20px rgb(0 0 0 / 35%);
	padding: 10px;
	color: #4F5665;
	border-radius: 18px;
	text-align: center;

	svg {
		font-size: 30px;
	}
`;

export {TitleDescriptionWelcome, TitleWelcome, BackgroundFound, BackgroundBanner, BoxCourses, FlexBoxCourses, TitleProgram, ProgramDescriptionBox,
	 IconAnimatedApp, TitleCourses, DescriptionCourses, TitleCoursesLight, BackgroundFoundAbout, TitleBoxAbout, DescriptionBoxAbout};