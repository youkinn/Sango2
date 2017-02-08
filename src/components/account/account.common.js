// 验证手机号
export const isPhone = function (phone) {
    return /^1\d{10}$/.test(phone);
};

// 验证密码
export const isValidPassword = function (password) {
    return /^[0-9a-zA-Z_]{6,16}$/.test(password);
};