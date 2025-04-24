"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieManager = void 0;
class CookieManager {
    /**
     * Build a single cookie string
     */
    static buildCookie(name, value, options = {}) {
        const { days = 7, path = '/', secure = false, sameSite = 'Lax', } = options;
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        let cookie = `${name}=${encodeURIComponent(value)}; Expires=${expires}; Path=${path}; SameSite=${sameSite}`;
        if (secure)
            cookie += '; Secure';
        return cookie;
    }
    /**
     * Create cookies for email + user_id or _id
     */
    static setUserSessionCookies(email, id, options = {}) {
        return [
            this.buildCookie('user_email', btoa(email), options),
            this.buildCookie('user_id', btoa(id), options),
        ];
    }
    /**
     * Return cookie headers to delete user_email and user_id cookies
     */
    static deleteUserSessionCookies(path = '/') {
        const expiredDate = 'Thu, 01 Jan 1970 00:00:00 GMT';
        return [
            `user_email=; Expires=${expiredDate}; Path=${path}; SameSite=Lax`,
            `user_id=; Expires=${expiredDate}; Path=${path}; SameSite=Lax`,
        ];
    }
}
exports.CookieManager = CookieManager;
