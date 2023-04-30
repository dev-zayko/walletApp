import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// Custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import AmountSection from "../components/balance/AmountBalance";
import BalanceCardSection from "../components/balance/BalanceCardSection";
import ButtonSection from "../components/balance/ButtonSection";

const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
	width: 100%;
	padding: 25px;
	flex: 1;
`;

// Types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
	return (
		<BalanceContainer>
			<StatusBar style={"dark"} />
			<AmountSection balance={route?.params?.balance} />
			<BalanceCardSection {...route?.params}/>
			<ButtonSection />
		</BalanceContainer>
	);
};

export default Balance;
