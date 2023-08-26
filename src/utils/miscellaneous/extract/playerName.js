function playerName(string) {
  // Assuming string will come in like this;
  // let string = 'HANK AARON STATS'
  string = string.split(" ");
  string.length = string.length - 1;
  string = string.join(" ");
  console.log(string);
  return string;
}

function pullName(nameWithTwitterHandle) {
  const regex = /^([\w\s]+)\s+\(Twitter:\s+@[\w]+\)$/;
  const match = nameWithTwitterHandle.match(regex);
  if (match && match[1]) {
    birthName = match[1];
  }
  return birthName;
}

function extractPlayerName(birthNameFromBio) {
  let name = !birthNameFromBio.includes("Twitter")
    ? birthNameFromBio
    : pullName(birthNameFromBio);

  return name;
}

module.exports = {
  playerName,
  extractPlayerName,
};
