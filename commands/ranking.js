const fs = require('fs');

const ranking = async (message) => {
    const economyData = JSON.parse(fs.readFileSync('economy.json'));
    const rankings = Object.keys(economyData).map(userId => ({
        userId,
        username: economyData[userId].username || '<Unknown>',
        balance: economyData[userId].balance
    }));

    rankings.sort((a, b) => b.balance - a.balance);
    
    let response = 'Ranking:\n';
    rankings.forEach((user, index) => {
        response += `${index + 1}. ${user.username}: ${user.balance}\n`;
    });

    message.channel.send(response.trim());
};

module.exports = { ranking };