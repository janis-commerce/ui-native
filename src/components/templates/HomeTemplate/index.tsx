import React, {FC, ComponentType, ReactElement, useState} from 'react';
import {View, ScrollView, StyleSheet, Pressable} from 'react-native';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';
import type {ClientInfo} from 'molecules/ClientSelector';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import {ModuleCard, ModuleCardSkeleton} from './components/ModuleCard';
import type {ModuleCardProps} from './components/ModuleCard';
import type {EnvironmentType} from './components/EnvironmentChip';
import {base, primary} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export type ModuleConfig = ModuleCardProps & {id: string};

export interface HomeTemplateProps {
	userName: string;
	greeting: string;
	appName?: string;
	userAvatar?: string;
	avatarBgColor?: string;
	environment?: EnvironmentType;
	onMenuPress: () => void;
	client?: ClientInfo;
	modules: ModuleConfig[];
	sectionTitle: string;
	illustration?: ComponentType | null;
	headerExtra?: ReactElement | null;
	footerExtra?: ReactElement | null;
	loading?: boolean;
	showDisabledToggle?: boolean;
	initialShowDisabled?: boolean;
	testID?: string;
}

const SKELETON_MODULES_COUNT = 4;

const validBodyPadding = scaledForDevice(24, horizontalScale);
const validBodyPaddingTop = scaledForDevice(20, moderateScale);
const validBodyPaddingBottom = scaledForDevice(24, moderateScale);
const validSectionTitleMarginBottom = scaledForDevice(16, moderateScale);
const validGradientBorderRadius = scaledForDevice(30, moderateScale);
const validToggleIconSize = scaledForDevice(20, moderateScale);
const validToggleSize = scaledForDevice(36, moderateScale);
const validToggleRadius = scaledForDevice(50, moderateScale);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: base.white,
	},
	gradient: {
		flex: 1,
		backgroundColor: `${primary.main}0F`,
		borderTopLeftRadius: validGradientBorderRadius,
		borderTopRightRadius: validGradientBorderRadius,
		paddingTop: validBodyPaddingTop,
	},
	sectionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: validToggleSize,
		paddingHorizontal: validBodyPadding,
	},
	body: {
		flex: 1,
	},
	bodyContent: {
		paddingHorizontal: validBodyPadding,
		paddingTop: validSectionTitleMarginBottom,
		paddingBottom: validBodyPaddingBottom,
	},
	toggleButton: {
		backgroundColor: base.white,
		borderRadius: validToggleRadius,
		width: validToggleSize,
		height: validToggleSize,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const splitByAvailability = (modules: ModuleConfig[]) => {
	const enabledModules: ModuleConfig[] = [];
	const disabledModules: ModuleConfig[] = [];
	modules.forEach((moduleConfig) =>
		(moduleConfig.disabled ? disabledModules : enabledModules).push(moduleConfig)
	);
	return {enabledModules, disabledModules};
};

const renderSkeletons = (count: number) =>
	Array.from({length: count}, (_, index) => <ModuleCardSkeleton key={index} />);

const HomeTemplate: FC<HomeTemplateProps> = ({
	userName,
	greeting,
	appName,
	userAvatar,
	avatarBgColor,
	environment,
	onMenuPress,
	client,
	modules,
	sectionTitle,
	illustration: Illustration = null,
	headerExtra = null,
	footerExtra = null,
	loading = false,
	showDisabledToggle = true,
	initialShowDisabled = true,
	testID,
}) => {
	const [showDisabled, setShowDisabled] = useState(initialShowDisabled);

	if (!modules) {
		return null;
	}

	const {enabledModules, disabledModules} = splitByAvailability(modules);
	const visibleModules = showDisabled ? [...enabledModules, ...disabledModules] : enabledModules;
	const showToggle = showDisabledToggle && !!disabledModules.length && !loading;
	const toggleVisibility = () => setShowDisabled((isShowingDisabled) => !isShowingDisabled);

	return (
		<View style={styles.container} testID={testID}>
			<Header
				onMenuPress={onMenuPress}
				userName={userName}
				userAvatar={userAvatar}
				avatarBgColor={avatarBgColor}
				client={client}
				testID={composeTestID(testID, 'header')}
			/>

			<UserInfo
				greeting={greeting}
				appName={appName}
				environment={environment}
				illustration={Illustration}
				testID={composeTestID(testID, 'user-info')}>
				{headerExtra}
			</UserInfo>

			<View style={styles.gradient}>
				<View style={styles.sectionHeader}>
					<Typography type="title" size="medium">
						{sectionTitle}
					</Typography>
					{showToggle && (
						<Pressable
							onPress={toggleVisibility}
							style={styles.toggleButton}
							testID={composeTestID(testID, 'toggle-visibility')}>
							<Icon
								name={showDisabled ? 'eye' : 'eye_slash'}
								size={validToggleIconSize}
								color={primary.main}
							/>
						</Pressable>
					)}
				</View>

				<ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
					{loading
						? renderSkeletons(visibleModules.length || SKELETON_MODULES_COUNT)
						: visibleModules.map(({id, ...cardProps}) => <ModuleCard key={id} {...cardProps} />)}

					{footerExtra}
				</ScrollView>
			</View>
		</View>
	);
};

export default HomeTemplate;
