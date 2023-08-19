function cleanUrl(player, page = "01") {
  try {
    const firstName = player.lastName.substring(0, 5);
    const lastName = player.firstName.substring(0, 2);
    // const page = `01`; // todo: need to add logic that handles if there's more than one player with this naming convention.
    const url = `https://www.baseball-almanac.com/players/player.php?p=${firstName}${lastName}${page}`;

    return url;
  } catch (error) {
    throw error;
  }
}

module.exports = cleanUrl;
