export default function IsDarkMode()
{
    let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
    let isDarkMode = mediaQueryObj.matches;

    return isDarkMode;
}