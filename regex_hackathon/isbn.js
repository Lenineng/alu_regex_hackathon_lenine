const string = "The book ISBN 123-4-567-89012-3 is a great read";

const pattern = /ISBN \d{3}-\d-\d{3}-\d{5}-\d/;

const match = string.match(pattern);

if (match) {
    console.log("ISBN:", match[0]);
}
