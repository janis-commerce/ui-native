import { ReactElement } from 'react';
declare type TextProps = {
    children?: ReactElement | string;
};
declare const Text: {
    ({ children, ...props }: TextProps): JSX.Element | null;
    propTypes: {
        children: import("prop-types").Validator<NonNullable<NonNullable<import("prop-types").ReactNodeLike>>>;
    };
};
export default Text;
