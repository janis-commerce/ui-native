import {TextStyle, ViewStyle} from 'react-native';

type Style = ViewStyle | TextStyle;

type VariantGroups = Record<string, Record<string, Style>>;

type Selection<V extends VariantGroups> = {[Group in keyof V]: keyof V[Group]};

interface StyleVariantsConfig<V extends VariantGroups> {
	base?: Style;
	variants: V;
}

export type VariantProps<Resolver> = Resolver extends (selection: infer S) => Style ? S : never;

/**
 * Patrón CVA para RN: crea un resolver de estilos a partir de grupos de
 * variantes ortogonales. El resolver exige una key por grupo y devuelve el
 * merge de `base` más el estilo elegido de cada grupo, en orden de declaración.
 */
const styleVariants =
	<V extends VariantGroups>({base = {}, variants}: StyleVariantsConfig<V>) =>
	(selection: Selection<V>): Style =>
		Object.keys(variants).reduce<Style>(
			(merged, group) => ({
				...merged,
				...variants[group as keyof V][selection[group as keyof V] as string],
			}),
			{...base}
		);

export default styleVariants;
