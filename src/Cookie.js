/**
 * Sets cookie
 * @param {string} cname Name of cookie
 * @param {string} cvalue Value for the cookie parameter
 * @param {number} exdays Number of days before expiration
 * @returns `void`
 */
export function SetCookie(cname = "blinds_cookie", cvalue = "active", exdays = 30) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/;SameSite=Strict`;
}

/**
 * Gets cookie value if cookie is set
 * @param {string} cname Name of the cookie
 * @returns `string` value of cookie parameter
 */
export function GetCookie(cname = "blinds_cookie") {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Checks if cookie is set
 * @param {string} cname Name of the cookie
 * @returns `boolean`
 */
export function CheckCookie(cname = "blinds_cookie") {
    cname = GetCookie(cname);
    if (cname != "") {
        return true;
    }
    return false;
}

/**
 * Deletes the set cookie if it exists
 * @param {string} cname Name of cookie
 * @returns `void`
 */
export function DeleteCookie(cname = "blinds_cookie") {
    if (CheckCookie(cname)) {
        document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict`;
    }
}
