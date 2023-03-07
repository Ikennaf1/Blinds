import Styles from '../blinds.style.json';

/**
 * Constructs the data given in the blinds.style.json to CSS
 * @param: `NULL`
 * @returns `string`: The constructed CSS
 */
export default function ConstructDarkModeStyle()
{
    let style = "";
    let temp = "";
    let value = "";
    Object.keys(Styles).map((selector) => {
        temp = `\n${selector} {\n`;
        style += temp;
        Object.keys(Styles[selector]).map((property) => {
            value = Styles[selector][property];
            temp = `\t${property}: ${value} !important; \n`;
            style += temp;
        });
        style += "}\n";
    });
    console.log(style);
    return style;
}
