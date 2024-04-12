import { alert, base, black, error, grey, primary, success, warning} from '../../../theme/palette';
import type { SelectedColor } from './types';

export const themeColors = {
    primary: {
        light: base.white,
        main: primary.main,
        dark: primary.dark,
    },
    secondary: {
        light: base.white,
        main: black.main,
        dark: black.dark,
    },
    success: {
        light: base.white,
        main: success.main,
        dark: success.dark,
    },
    error: {
        light: base.white,
        main: error.main,
        dark: error.dark,
    },
    warning: {
        light: base.white,
        main: warning.main,
        dark: warning.dark,
    },
    alert: {
        light: base.white,
        main: alert.main,
        dark: alert.dark,
    }
}

export const mixedColors = (selectedColor: SelectedColor) => {
    return {
        mainBgColor: {
            contained:  selectedColor.main,
            outlined: selectedColor.light,
            text: 'transparent'
        },
        mainBorderColor: {
            contained:  'transparent',
            outlined: grey[300],
            text: 'transparent'
        },
        pressedBgColor: {
            contained:  selectedColor.dark,
            outlined: selectedColor.light,
            text: 'transparent'
        },
        pressedBorderColor: {
            contained:  'transparent',
            outlined: selectedColor.main,
            text: 'transparent'
        },
        disabledBgColor: {
            contained:  grey[200],
            outlined: grey[100],
            text: 'transparent'
        },
        disabledBorderColor: {
            main: {
                contained: 'transparent',
                outlined: 'transparent',
                text: 'transparent'
            },
            secondary: {
                contained: 'transparent',
                outlined: grey[300],
                text: 'transparent'
            }
        }
    }
}