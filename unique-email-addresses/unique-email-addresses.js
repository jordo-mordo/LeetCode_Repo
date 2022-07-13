/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let counter = 0;
    let domains = {};
    
    emails.forEach((string, index) => {
        let atSymbol = string.indexOf('@');
        let domain = string.slice(atSymbol + 1, string.length);
        let username = string.slice(0, atSymbol);
        username = username.replace(/[.]/g, '');
        if (username.includes('+')) {
            username = username.slice(0, username.indexOf('+'));
        }
        
        if (!domains[domain]) {
            domains[domain] = [username];
            counter++;
        } else {
            if (!domains[domain].includes(username)) {
                domains[domain].push(username);
                counter++;
            }
        }
        
    });
    console.log(domains);
    return counter;
};