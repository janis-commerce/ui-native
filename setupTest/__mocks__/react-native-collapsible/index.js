import React from 'react';
import {View, TouchableOpacity} from 'react-native';

export const mockAccordion = ({sections, renderHeader, renderContent, onChange}) => (
	<View>
		{sections.map((section, index) => {
			<View>
				<TouchableOpacity onPress={() => onChange([index])}>
					{renderHeader(section)}
				</TouchableOpacity>
				{renderContent(section)}
			</View>;
		})}
	</View>
);
