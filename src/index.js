import ActivateDarkMode from './ActivateDarkMode';
import DeactivateDarkMode from './DeactivateDarkMode';
import { CheckCookie } from './Cookie';
import { Init } from './Init';

Init();
document.querySelector("#blinds_dark_mode_id").onclick = () => {
    if (CheckCookie()) {
        DeactivateDarkMode();
    } else {
        ActivateDarkMode();
    }
}
