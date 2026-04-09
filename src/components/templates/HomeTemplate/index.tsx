import React, {FC, ComponentType, ReactElement, useState, useMemo, useCallback} from 'react';
import {View, ScrollView, StyleSheet, Pressable, useWindowDimensions} from 'react-native';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';
import UserHeader from './components/UserHeader';
import ModuleCard from './components/ModuleCard';
import type {EnvironmentType} from './components/UserHeader';
import {base, primary} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

export interface ModuleConfig {
	icon: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	badge?: number;
	subtitle?: string;
}

export interface HomeTemplateProps {
	userName: string;
	appName?: string;
	userAvatar?: string;
	avatarPlaceholder?: string;
	avatarBgColor?: string;
	environment?: EnvironmentType;
	onMenuPress: () => void;
	topBarLabel?: string;
	topBarLabelOnPress?: () => void;
	showTopBarChevron?: boolean;
	modules: ModuleConfig[];
	sectionTitle?: string;
	illustration?: ComponentType | null;
	headerExtra?: ReactElement | null;
	footerExtra?: ReactElement | null;
	loading?: boolean;
	showDisabledToggle?: boolean;
	initialShowDisabled?: boolean;
	testID?: string;
}

const validBodyPadding = scaledForDevice(24, horizontalScale);
const validBodyPaddingTop = scaledForDevice(20, moderateScale);
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
	body: {
		flex: 1,
	},
	gradient: {
		backgroundColor: `${primary.main}0F`,
		borderTopLeftRadius: validGradientBorderRadius,
		borderTopRightRadius: validGradientBorderRadius,
		paddingHorizontal: validBodyPadding,
		paddingTop: validBodyPaddingTop,
		paddingBottom: scaledForDevice(24, moderateScale),
	},
	sectionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: validSectionTitleMarginBottom,
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

const HomeTemplate: FC<HomeTemplateProps> = ({
	userName,
	appName,
	userAvatar,
	avatarPlaceholder,
	avatarBgColor,
	environment,
	onMenuPress,
	topBarLabel,
	topBarLabelOnPress,
	showTopBarChevron,
	modules,
	sectionTitle = 'Seleccioná un módulo',
	illustration: Illustration = null,
	headerExtra = null,
	footerExtra = null,
	loading = false,
	showDisabledToggle = true,
	initialShowDisabled = true,
	testID,
}) => {
	const {height: screenHeight} = useWindowDimensions();
	const [showDisabled, setShowDisabled] = useState(initialShowDisabled);

	const hasDisabledModules = useMemo(() => modules?.some((mod) => mod.disabled), [modules]);

	const visibleModules = useMemo(() => {
		if (!modules) return [];
		const enabled = modules.filter((mod) => !mod.disabled);
		if (!showDisabled) return enabled;
		const disabled = modules.filter((mod) => mod.disabled);
		return [...enabled, ...disabled];
	}, [modules, showDisabled]);

	const toggleVisibility = useCallback(() => {
		setShowDisabled((prev) => !prev);
	}, []);

	if (!userName || !modules) {
		return null;
	}

	const showToggle = showDisabledToggle && hasDisabledModules && !loading;

	return (
		<View style={styles.container} testID={testID}>
			<UserHeader
				userName={userName}
				appName={appName}
				userAvatar={userAvatar}
				avatarPlaceholder={avatarPlaceholder}
				avatarBgColor={avatarBgColor}
				environment={environment}
				onMenuPress={onMenuPress}
				topBarLabel={topBarLabel}
				topBarLabelOnPress={topBarLabelOnPress}
				showTopBarChevron={showTopBarChevron}
				illustration={Illustration}
				testID={`${testID}-header`}>
				{headerExtra}
			</UserHeader>

			<ScrollView style={styles.body}>
				<View style={[styles.gradient, {minHeight: screenHeight}]}>
					<View style={styles.sectionHeader}>
						<Typography type="title" size="medium">
							{sectionTitle}
						</Typography>
						{showToggle && (
							<Pressable
								onPress={toggleVisibility}
								style={styles.toggleButton}
								testID={`${testID}-toggle-visibility`}>
								<Icon
									name={showDisabled ? 'eye' : 'eye_slash'}
									size={validToggleIconSize}
									color={primary.main}
								/>
							</Pressable>
						)}
					</View>

					{visibleModules.map((mod) => (
						<ModuleCard
							key={mod.title}
							icon={mod.icon}
							title={mod.title}
							onPress={mod.onPress}
							disabled={mod.disabled}
							badge={mod.badge}
							subtitle={mod.subtitle}
							loading={loading}
						/>
					))}

					{footerExtra}
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeTemplate;
