import { BottomSheetScrollViewProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types";
import { UIModalProps } from "atoms/Modal";
import { SwipeUpProps } from "atoms/SwipeUp";
import { ScrollViewProps } from "react-native";

export type ComponentType = 'modal' | 'swipe';
export type BaseModalProps = {componentType: 'modal'} & UIModalProps & {scrollProps?: ScrollViewProps};
export type BaseSwipeUpProps = {componentType: 'swipe'} & SwipeUpProps & {scrollProps? : BottomSheetScrollViewProps};