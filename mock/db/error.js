var map = new Map();
map.set("A0003", "OTP驗證碼已寄到您的手機號碼與電子信箱");
function getErrCode(code) {
  if (typeof map.get(code) === "object") {
    return map.get(code);
  }
  return {
    errCode: code,
    errMsg: map.get(code),
  };
}

module.exports = { get: getErrCode };
