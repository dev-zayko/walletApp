import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// Custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/text/BigText";
import SmallText from "../components/text/SmallText";
import RegularButton from "../components/buttons/RegularButton";

export const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

export const TopSection = styled.View`
  width: 100%;
	flex: 1;
	max-height: 55%;
`;

export const TopImage = styled.Image`
  width: 100%;
	height: 100%;
	resize-mode: stretch;
`;

export const BottomSection = styled.View`
  width: 100%;
	padding: 25px;
	flex: 1;
	justify-content: flex-end;
`;

// Image
import background from "../../assets/background/background-v1.jpg";

// Types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
	return (
		<>
		<StatusBar style={"dark"} />
		<WelcomeContainer>
		 <TopSection>
		   <TopImage source={background} />
		 </TopSection>
		 <BottomSection>
		   <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
			 Best way to track your money
		   </BigText> 
			 <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
			 Best payment method, connects your money to your frineds, family
			 </SmallText>
			 <RegularButton onPress={() => { navigation.navigate("Home") }}>
			 Get Started
			 </RegularButton>
		 </BottomSection>
		</WelcomeContainer>
		</>
	);
}

export default Welcome;
