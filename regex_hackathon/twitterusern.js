const string = "Follow me on @simeon123 and @azeh_tweet";

const pattern = /@(\w+)/g;

const usernames = string.match(pattern);

if (usernames) {
    usernames.forEach(username => {
        console.log("Twitter Username:", username);
    });
}
