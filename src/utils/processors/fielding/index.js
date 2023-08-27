const seasonProcessor = function (item, index, seasonObj) {
  switch (index) {
    case 0:
      item = item.split(" ");
      seasonObj.year = item[0];
      seasonObj.team = item[1];
      break;
    case 1:
      seasonObj.pos = item;
      break;
    case 2:
      seasonObj.g = item;
      break;
    case 3:
      seasonObj.gs = item;
      break;
    case 4:
      seasonObj.outs = item;
      break;
    case 5:
      seasonObj.tc = item;
      break;
    case 6:
      seasonObj["tc/g"] = item;
      break;
    case 7:
      seasonObj.ch = item;
      break;
    case 8:
      seasonObj.po = item;
      break;
    case 9:
      seasonObj.a = item;
      break;
    case 10:
      seasonObj.e = item;
      break;
    case 11:
      seasonObj.dp = item;
      break;
    case 12:
      seasonObj.pb = item;
      break;
    case 13:
      seasonObj.casb = item;
      break;
    case 14:
      seasonObj.cacs = item;
      break;
    case 15:
      seasonObj["FLD%"] = item;
      break;
    case 16:
      seasonObj.rf = item;
      break;
  }
  return seasonObj;
};

module.exports = {
  seasonProcessor,
};
