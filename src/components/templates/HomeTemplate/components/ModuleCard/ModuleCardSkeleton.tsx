import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import Skeleton from 'atoms/Skeleton';
import {moderateScale, scaledForDevice} from 'scale';
import cardLayout from './styles';

interface ModuleCardSkeletonProps {
	testID?: string;
}

const styles = StyleSheet.create({
	title: {
		height: scaledForDevice(14, moderateScale),
		width: '60%',
		borderRadius: scaledForDevice(4, moderateScale),
	},
});

const ModuleCardSkeleton: FC<ModuleCardSkeletonProps> = ({testID}) => (
	<View style={cardLayout.card} testID={testID}>
		<Skeleton style={cardLayout.iconContainer} />
		<View style={cardLayout.content}>
			<Skeleton style={styles.title} />
		</View>
	</View>
);

export default ModuleCardSkeleton;
