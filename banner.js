// Banner Function

function printBanner(string) {
    let banner = "*";
    let banLength = string.length;
    console.log(`${banner.repeat(banLength)} ${string} ${banner.repeat(banLength)}`);
}

printBanner("Im the smartest man alive!")