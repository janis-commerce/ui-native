import React, {FC, ReactElement} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Typography from 'atoms/Typography';
import type {SelectorInfo} from 'molecules/SelectorButton';
import {useMenu} from 'organisms/Menu';
import type {ClientInfo} from 'ts/interfaces/client';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import GradientBackground from './components/GradientBackground';
import {ModuleCard, ModuleCardSkeleton} from './components/ModuleCard';
import type {ModuleCardProps} from './components/ModuleCard';
import type {EnvironmentType} from './components/EnvironmentChip';
import {base, black} from 'theme/palette';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';
import {composeTestID} from 'utils';

export type ModuleConfig = ModuleCardProps & {id: string};

export interface HomeTemplateProps {
	userName: string;
	greeting: string;
	appName?: string;
	avatarBgColor?: string;
	environment?: EnvironmentType;
	client?: ClientInfo;
	selector?: SelectorInfo;
	modules: ModuleConfig[];
	sectionTitle: string;
	headerExtra?: ReactElement | null;
	footerExtra?: ReactElement | null;
	loading?: boolean;
	testID?: string;
}

const SKELETON_MODULES_COUNT = 4;

const validSectionPaddingHorizontal = scaledForDevice(24, horizontalScale);
const validSectionPaddingVertical = scaledForDevice(24, moderateScale);
const validSectionBorderRadius = scaledForDevice(30, moderateScale);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: base.white,
	},
	modulesSection: {
		flex: 1,
		overflow: 'hidden',
		borderTopLeftRadius: validSectionBorderRadius,
		borderTopRightRadius: validSectionBorderRadius,
		paddingTop: validSectionPaddingVertical,
	},
	sectionTitle: {
		paddingHorizontal: validSectionPaddingHorizontal,
	},
	cards: {
		flex: 1,
	},
	cardsContent: {
		paddingHorizontal: validSectionPaddingHorizontal,
		paddingVertical: validSectionPaddingVertical,
	},
});

const sortByAvailability = (modules: ModuleConfig[]) => {
	const enabledModules: ModuleConfig[] = [];
	const disabledModules: ModuleConfig[] = [];
	modules.forEach((moduleConfig) =>
		(moduleConfig.disabled ? disabledModules : enabledModules).push(moduleConfig)
	);
	return [...enabledModules, ...disabledModules];
};

const renderSkeletons = (count: number) =>
	Array.from({length: count}, (_, index) => <ModuleCardSkeleton key={index} />);

const HomeTemplate: FC<HomeTemplateProps> = ({
	userName,
	greeting,
	appName,
	avatarBgColor,
	environment,
	client,
	selector,
	modules,
	sectionTitle,
	headerExtra = null,
	footerExtra = null,
	loading = false,
	testID,
}) => {
	const menu = useMenu();

	if (!modules) {
		return null;
	}

	const sortedModules = sortByAvailability(modules);

	return (
		<View style={styles.container} testID={testID}>
			<Header
				onMenuPress={menu?.openMenu}
				avatarBgColor={avatarBgColor}
				client={client}
				selector={selector}
				testID={composeTestID(testID, 'header')}
			/>

			<UserInfo
				greeting={greeting}
				userName={userName}
				appName={appName}
				environment={environment}
				testID={composeTestID(testID, 'user-info')}>
				{headerExtra}
			</UserInfo>

			<View style={styles.modulesSection}>
				<GradientBackground />
				<Typography type="title" size="large" color={black.main} style={styles.sectionTitle}>
					{sectionTitle}
				</Typography>

				<ScrollView style={styles.cards} contentContainerStyle={styles.cardsContent}>
					{loading
						? renderSkeletons(sortedModules.length || SKELETON_MODULES_COUNT)
						: sortedModules.map(({id, ...cardProps}) => <ModuleCard key={id} {...cardProps} />)}

					{footerExtra}
				</ScrollView>
			</View>
		</View>
	);
};

export default HomeTemplate;
