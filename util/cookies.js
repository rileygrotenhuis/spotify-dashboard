import * as cookie from 'cookie';

module.exports.getCookie = (context, key) => {
    const cookies = context.req.headers.cookie ?? '';
    const parsedCookies = cookie.parse(cookies);

    return parsedCookies[key];
};