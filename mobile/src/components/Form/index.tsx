import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

import { feedbackType } from "../../components/Widget";

import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";

interface Props {
	feedbackType: feedbackType;
}

export function Form({ feedbackType }: Props) {
	const feedbackTypeInfo = feedbackTypes[feedbackType];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<ArrowLeft
						size={24}
						weight="bold"
						color={theme.colors.text_secondary}
					/>
				</TouchableOpacity>

				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
				</View>
			</View>
		</View>
	);
}
