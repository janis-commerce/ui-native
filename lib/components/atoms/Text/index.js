import React from 'react';
import { StyleSheet, Text as TextComponent } from 'react-native';
import { node, arrayOf, oneOfType } from 'prop-types';
const Text = ({ children, ...props }) => {
    if (!children)
        return null;
    return <TextComponent style={styles.TextStyles} {...props}>{children}</TextComponent>;
};
const styles = StyleSheet.create({
    TextStyles: {
        fontSize: 16,
        fontFamily: 'Roboto'
    }
});
Text.propTypes = {
    children: oneOfType([node, arrayOf(node)]).isRequired,
};
export default Text;
