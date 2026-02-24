const fs = require('fs');
const economyData = JSON.parse(fs.readFileSync('economy.json'));

function getUserName(userId) {
    const userEconomy = economyData[userId];
    if (userEconomy && userEconomy.username) {
        return userEconomy.username;
    }
    return user.tag;
}

// Other ranking logic...
