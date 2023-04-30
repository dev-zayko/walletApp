import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";

// Custom components
import RegularText from "../text/RegularText";
import SmallText from "../text/SmallText";

import styled from "styled-components/native";
import { colors } from "../colors";

const StyledView = styled.View`
	flex-direction: column;
	flex: 1;
	justify-content: center;
`;

interface GreetingProps {
	mainText: string;
	subText: string;
	mainTextStyle?: StyleProp<TextStyle>;
	subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
	return (
		<StyledView>
			<RegularText
				textStyles={{
					color: colors.secondary,
					fontSize: 22,
				}}
			>
				{props.mainText}
			</RegularText>
			<SmallText
				textStyles={[
					{
						color: colors.graydark,
					},
					props.subTextStyles,
				]}
			>
				{props.subText}
			</SmallText>
		</StyledView>
	);
};

export default Greeting;
