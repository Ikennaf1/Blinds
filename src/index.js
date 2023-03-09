import IsDarkMode from './IsDarkMode';
import ActivateDarkMode from './ActivateDarkMode';
import DeactivateDarkMode from './DeactivateDarkMode';
import { SetCookie, CheckCookie, DeleteCookie } from './Cookie';

document.querySelector("#swd").onclick = () => {
    if (CheckCookie("blinds_cookie")) {
        DeactivateDarkMode();
        DeleteCookie("blinds_cookie");
    } else {
        ActivateDarkMode();
        SetCookie("blinds_cookie");
    }
}