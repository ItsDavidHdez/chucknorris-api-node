const pushData = require("./request");

const length = 25;

const action = async () => {
  if (data.length === length) return;

  while (data.length < length) {
    data.push(new Promise(pushData));
  }

  data = await Promise.all(data);
};

module.exports = action;
