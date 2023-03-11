import IsDarkMode from './IsDarkMode';
import { SwitchIcon } from "./Icons";
import { CheckCookie, SetCookie } from "./Cookie";
import ActivateDarkMode from "./ActivateDarkMode";
import DeactivateDarkMode from "./DeactivateDarkMode";

export function Init()
{
    if (IsDarkMode() && !CheckCookie("blindsInitialized")) {
        ActivateDarkMode();
    }
    
    if (!CheckCookie("blindsInitialized")) {
        SetCookie("blindsInitialized", "yes");
    }

    if (CheckCookie()) {
        ActivateDarkMode();
    } else {
        DeactivateDarkMode();
    }
    SwitchIcon();
}
