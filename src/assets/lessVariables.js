/**
 * A collection of style variables
 * Please insert new values on alphabetical order.
 */

const colors = {
    'border-color': '#e0e0e0',
    'brand-primary': '#0F56BC',
    'brand-primary-lightest': '#F1F8FF',
    'emgray-darker': '#ccc',
    'emgray-light': 'rgba(153, 153, 153, .5)',
    'gray-light': '#777',
    'gray-bold': '#adadad',
    'greyish-brown': '#505050',
    'text-color': '#505050',
    silver: '#c0c0c0',
    'input-bg': '#ffffff',
    'input-border-focus': '#0F56BC',
    'brand-danger': '#f44336'
};

const fontSizeBase = 14;
const fontSansSerif = '"Source Sans Pro", Helvetica, Arial, sans-serif';
const fonts = {
    'font-family-sans-serif': fontSansSerif,
    'font-family-base': fontSansSerif,
    'font-size-base': `${fontSizeBase}px`,
    'font-size-large': `${fontSizeBase * 1.25}px`,
    'font-size-small': `${fontSizeBase * 0.85}px`
};

export const LESS_VARIABLES = {
    ...colors,
    ...fonts
};
