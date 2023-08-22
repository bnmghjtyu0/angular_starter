const errorCode = require("./error");

module.exports = (req, res) => {
  // res.status(200).json({
  //   msg: "success",
  //   data: {
  //     token: "xxxxxx",
  //   },
  // });

  res.status(401).json({
    msg: "error",
    errorMsg: errorCode.get("A0003"),
  });
};
