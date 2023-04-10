//{ stubs

if (typeof console === "undefined") {
    console = {
        log: function () { },
        info: function () { },
        warn: function () { },
        error: function () { }
    };
}

//}

//{ init

function Random() {
}
Random.prototype.Next = function (limit) {
    return Math.floor((Math.random() * limit));
}
var rng = new Random();
Random.prototype.Shuffle = function (a) {
    var shuffled = [];
    for (var i = a.length - 1; i >= 0; i--) {
        var next = rng.Next(i + 1);
        shuffled.push(a[next]);
        var t = a[next];
        a[next] = a[i];
        a[i] = t;
    }
    return shuffled;
}

// ref: https://en.wiktionary.org/wiki/Thesaurus:breasts
var words = [
    "Assets",
    "Balloons",
    "Baps",
    "Bazongas",
    "Bazookas",
    "Bazooms",
    "Bewbs",
    "Boobage",
    "Boobs",
    "Boobers",
    "Boobies",
    "Boosies",
    "Bosoms",
    "Breast",
    "Breasticles",
    "Bristols",
    "Bubbies",
    "Bubs",
    "Bust",
    "Cans",
    "Charlies",
    "Chesticles",
    "Chichis",
    "Coconuts",
    "Diddies",
    "Ding-dongs",
    "Dirty Pillows",
    "Funbags",
    "Gazongas",
    "Girls",
    "Globes",
    "Headlights",
    "Honkers",
    "Hooters",
    "Jubblies",
    "Jugs",
    "Knockers",
    "Lady Lumps",
    "Love Pillows",
    "Mammaries",
    "Mammary Glands",
    "Mammas",
    "Megaboobs",
    "Melons",
    "Milkbag",
    "Milk Jugs",
    "Milkers",
    "Money Makers",
    "Mountains",
    "Norks",
    "Paps",
    "Pair",
    "Puppies",
    "Rack",
    "Sweater Puppies",
    "Tatas",
    "Teats",
    "Tiddies",
    "Tits",
    "Titters",
    "Titties",
    "Threepenny Bits",
    "Top Bollocks",
    "Torpedoes",
    "Twins",
    "Udders",
    "Waps",
    "Bee Stings",
    "Falsies",
    "Implants",
    "Milk Factories",
    "Milk Makers",
    "Mosquito Bites",
]

var iwords = 0;
var changeWord = function() {
    if (iwords % words.length == 0) {
        rng.Shuffle(words);
        iwords = 0;
    }
    $('body > div > span')
        .text(words[iwords]);
    iwords++;
    setTimeout(function() { changeWord(); }, 4000);
}

$(document).ready(function () {
    changeWord();
});

//}