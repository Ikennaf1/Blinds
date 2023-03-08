import IsDarkMode from './IsDarkMode';
import ActivateDarkMode from './ActivateDarkMode';
import DeactivateDarkMode from './DeactivateDarkMode';

let x = 0;
document.querySelector("#swd").onclick = () => {
    if (x == 0) {
        ActivateDarkMode();
    } else {
        DeactivateDarkMode();
    }
    x = (x + 1) % 2;
}