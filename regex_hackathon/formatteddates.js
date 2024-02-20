const string = "Today's date is 11-Feb-2024";

const pattern = /(\d{2})-(\w{3})-(\d{4})/;

const match = string.match(pattern);

if (match) {
    console.log("Day:", match[1]);
    console.log("Month:", match[2]);
    console.log("Year:", match[3]);
}
