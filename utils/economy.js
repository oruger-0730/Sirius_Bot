const fs = require('fs');

const economyFilePath = './economy.json';

// Load economy data from the file
function loadEconomy() {
    if (fs.existsSync(economyFilePath)) {
        const data = fs.readFileSync(economyFilePath);
        return JSON.parse(data);
    }
    return {};
}

// Save economy data to the file
function saveEconomy(economy) {
    fs.writeFileSync(economyFilePath, JSON.stringify(economy, null, 2));
}

// Get a user's economy data
function getUserEconomy(userId) {
    const economy = loadEconomy();
    return economy[userId] || { balance: 0, lastWorkAt: null, username: '' };
}

// Set a user's economy data
function setUserEconomy(userId, data) {
    const economy = loadEconomy();
    economy[userId] = { ...economy[userId], ...data };
    saveEconomy(economy);
}

// Add balance to a user's account
function addBalance(userId, amount) {
    const userEconomy = getUserEconomy(userId);
    userEconomy.balance += amount;
    setUserEconomy(userId, userEconomy);
}

// Set the last work time for a user
function setLastWorkAt(userId, time) {
    const userEconomy = getUserEconomy(userId);
    userEconomy.lastWorkAt = time;
    setUserEconomy(userId, userEconomy);
}

// Get the ranking of users based on their balance
function getRanking() {
    const economy = loadEconomy();
    return Object.entries(economy)
        .map(([userId, data]) => ({ userId, ...data }))
        .sort((a, b) => b.balance - a.balance);
}

module.exports = {
    loadEconomy,
    saveEconomy,
    getUserEconomy,
    setUserEconomy,
    addBalance,
    setLastWorkAt,
    getRanking
};