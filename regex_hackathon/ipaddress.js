const string = "The server's IP address is 192.168.1.2";

const pattern = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g;

const ipAddresses = string.match(pattern);

if (ipAddresses) {
    ipAddresses.forEach(ipAddress => {
        console.log("IP Address:", ipAddress);
    });
}
