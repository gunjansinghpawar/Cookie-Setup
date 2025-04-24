<p align="center">
  <img src="https://user-images.githubusercontent.com/0000000/your-logo-placeholder.png" width="150" alt="CookieManager Logo" />
</p>

<h1 align="center">🍪 Cookie Setup</h1>

<p align="center">
  Lightweight, zero-dependency cookie manager for web and Node.js apps.
  <br />
  Generates secure cookies using <strong>email</strong> and <strong>user ID</strong>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cookie-setup">
    <img src="https://img.shields.io/npm/v/cookie-setup.svg?style=flat-square" alt="NPM Version" />
  </a>
  <a href="https://github.com/gunjansinghpawar/cookie-setup">
    <img src="https://img.shields.io/github/stars/gunjansinghpawar/cookie-setup?style=flat-square" alt="GitHub Stars" />
  </a>
  <a href="https://www.npmjs.com/package/cookie-setup">
    <img src="https://img.shields.io/npm/dt/cookie-setup.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/cookie-setup.svg?style=flat-square" alt="License" />
  </a>
</p>

---

## 🚀 Features

- ✅ Generate cookies with `email` and `_id`
- ✅ Lightweight, no dependencies
- ✅ Works in Express, browsers, and custom frameworks
- ✅ TypeScript support out of the box
- ✅ Cookie options: `secure`, `SameSite`, `path`, `expiration`

---

## 📦 Installation

```bash
npm install cookie-setup
****
---

## 🚀 Exmaple For Creating a Cookie
```bash
import { CookieManager } from 'cookie-setup';

app.get('/login', (req, res) => {
  const cookies = CookieManager.setUserSessionCookies(email, user_id, {
    days: 7,
    secure: true,
    sameSite: 'Strict'
  });

  cookies.forEach(cookie => res.append('Set-Cookie', cookie));
  res.send('✅ Logged in and cookies set!');
});
****
## 🚀 Exmaple For Deleting a Cookie
```bash
app.get('/logout', (req, res) => {
  const expiredCookies = CookieManager.deleteUserSessionCookies();

  expiredCookies.forEach(cookie => res.append('Set-Cookie', cookie));
  res.send('👋 Logged out and cookies cleared!');
});

