const linkChecked = "https://google.com";

const linkIncludeCheck = link => link.indexOf('https://') !== -1;


console.log(linkIncludeCheck(linkChecked) ? "კი მოიცავს" : "არა, არ მოიცავს"); //^Output - კი მოიცავს