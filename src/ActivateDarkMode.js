import ConstructDarkModeStyle from './ConstructDarkModeStyle';

/**
 * Activates dark mode by adding the style generated by ConstructDarkModeStyle
 * function to the document tree
 * 
 * @param: `NULL`
 * @returns `void`
 */
export default function ActivateDarkMode()
{
    let styles = ConstructDarkModeStyle();

    let styleTag = document.createElement("style");
    styleTag.setAttribute("id", "blinds_id");
    styleTag.textContent = styles;

    document.head.appendChild(styleTag);
}
