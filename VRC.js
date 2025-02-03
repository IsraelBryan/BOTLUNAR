const vrchat = require('vrchat');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));


const configuration = new vrchat.Configuration({
    username: "UMBFB",
    password: "umbreon_game23",
    baseOptions: {
        headers: { "User-Agent": "umbfb9014@gmail.com"}
    }
});

const authenticationApi = new vrchat.AuthenticationApi(configuration);
const usersApi = new vrchat.UsersApi(configuration);
const systemApi = new vrchat.SystemApi(configuration);

async function main() {
    var currentUser = (await authenticationApi.getCurrentUser()).data;

    if (currentUser["requiresTwoFactorAuth"] && currentUser["requiresTwoFactorAuth"][0] === "emailOtp") {
        await authenticationApi.verify2FAEmailCode({ code: await prompt("email Code\n") })
        currentUser = (await authenticationApi.getCurrentUser()).data;
    }
    if (currentUser["requiresTwoFactorAuth"] && currentUser["requiresTwoFactorAuth"][0] === "totp") {
        await authenticationApi.verify2FA({ code: await prompt("Digite o Codigo:\n") })
        currentUser = (await authenticationApi.getCurrentUser()).data;
    }

    console.log(`Connected as: ${currentUser.displayName}`);
    const teste = (await usersApi.searchUsers({ query: "kajezinho" })).data;
    const tupperUser = (await usersApi.getUser("usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469")).data;
    const currentOnlineUsers = (await systemApi.getCurrentOnlineUsers()).data;
    console.log(`Last Login: ${currentUser.last_login}`);
    console.log('Bio of user:\n');
    console.log(`${currentUser.bio}`);
    console.log('\n');
    console.log('Friends:')
    console.log(`${currentUser.friends.length}`);
    console.log('\n');
    console.log('Players in game:');
    console.log(`${currentOnlineUsers}`);
    console.log('\n');
    console.log(`${currentUser.displayName} your home is: https://vrchat.com/home/launch?worldId=${currentUser.homeLocation}`);
    console.log('\n');
    
    
}

main();