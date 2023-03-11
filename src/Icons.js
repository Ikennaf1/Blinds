import Icons from '../icons.json';
import { CheckCookie } from './Cookie';

/**
 * Retrieves the normal icon
 */
export function GetIconNormal()
{
    return Icons.normal.replace("\\", "");
}

/**
 * Retrieves the dark icon
 */
export function GetIconDark()
{
    return Icons.dark.replace("\\", "");
}

export function ShowIcon()
{
    SwitchIcon();
}

export function SwitchIcon()
{
    let node = document.querySelector("#blinds_dark_mode_id");
    if (CheckCookie()) {
        node.innerHTML = GetIconNormal();
    } else {
        node.innerHTML = GetIconDark();
    }
}
