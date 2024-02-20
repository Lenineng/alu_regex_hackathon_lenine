const string = "[Verse 1] For now the day bleeds into night fall";

const pattern = /\[Verse \d+\] (.*)/;

const match = string.match(pattern);

if (match) {
    console.log("Verse 1:", match[1]);
}
