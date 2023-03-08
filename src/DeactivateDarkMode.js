/**
 * Deactivates the dark mode if active
 * @param: `NULL`
 * @returns `void`
 */
export default function DeactivateDarkMode()
{
    let style = "";

    if (style = document.querySelector("#blinds_id")) {
        document.head.removeChild(style);
    }
}
