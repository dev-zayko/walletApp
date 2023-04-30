import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// Custom Components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/cards/CardSection";
import TransactionSection from "../components/transactions/TransactionSection";
import SendMoneySection from "../components/sendMoney/SendMoneySection";

const HomeContainer = styled(Container)`
	background-color: ${colors.graylight};
	witdh: 100%;
	flex: 1;
`;

// Logo
import logo1 from "../../assets/logo/visa.png";

// Portraits
import port1 from "../../assets/portraits/port1.png";
import port2 from "../../assets/portraits/port2.jpg";
import port3 from "../../assets/portraits/port3.png";

// Types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
	const cardData = [
		{
			id: 1,
			accountNo: "3845757744",
			balance: 2000,
			alias: "Work Debit",
			logo: logo1,
		},
		{
			id: 2,
			accountNo: "3845753003",
			balance: 12000,
			alias: "Personal Prepaid",
			logo: logo1,
		},
		{
			id: 3,
			accountNo: "3845758847",
			balance: 5600,
			alias: "School Prepaid",
			logo: logo1,
		},
	];

	const transactionData = [
		{
			id: 1,
			amount: "-$7.500",
			date: "14 Sep 2021",
			title: "Taxi",
			subtitle: "Uber",
			art: {
				background: colors.primary,
				icon: "car",
			},
		},
		{
			id: 2,
			amount: "-$25.000",
			date: "14 Sep 2021",
			title: "Shopping",
			subtitle: "Mercado libre",
			art: {
				background: colors.tertiary,
				icon: "cart",
			},
		},
		{
			id: 3,
			amount: "-$35.000",
			date: "14 Aug 2021",
			title: "Travel",
			subtitle: "Santiago",
			art: {
				background: colors.accent,
				icon: "car",
			},
		},
	];

	const sendMoneyData = [
		{
			id: 1,
			amount: "2450",
			name: "Coby Andoh",
			background: colors.tertiary,
			img: port1
		},
		{
			id: 2,
			amount: "4450",
			name: "Harleent Scoot",
			background: colors.primary,
			img: port2
		},
		{
			id: 3,
			amount: "6250",
			name: "James Corbyn",
			background: colors.accent,
			img: port3
		},
	]


	return (
		<HomeContainer>
			<StatusBar style={"dark"} />
			<CardSection data={cardData} />
			<TransactionSection  data={transactionData}/>
			<SendMoneySection data={sendMoneyData} />
		</HomeContainer>
	);
};

export default Home;
