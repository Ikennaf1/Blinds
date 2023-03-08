import ConstructDarkModeStyle from './ConstructDarkModeStyle';

export default function ActivateDarkMode()
{
    let styles = ConstructDarkModeStyle();

    let styleTag = document.createElement("style");
    styleTag.setAttribute("id", "blinds_id");
    styleTag.textContent = styles;

    document.head.appendChild(styleTag);
}
