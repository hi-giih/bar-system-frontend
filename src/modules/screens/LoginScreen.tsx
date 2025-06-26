import { BackgroudImage, ContainerLogin, LimitedContainer, LogoImage,ContainerLoginScreen } from "../styles/loginScreen.styles";


const LoginScreen = () => {
    return (
    <ContainerLoginScreen>
        <BackgroudImage src="./Capalogin.jpg"/>
        <ContainerLogin>
            <LimitedContainer>
                <LogoImage src='./logo.png'/>
            </LimitedContainer>
        </ContainerLogin>


    </ContainerLoginScreen>
    );
};

export default LoginScreen;