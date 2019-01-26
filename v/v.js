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

// ref: https://namingschemes.com/Vagina_Synonyms
var words = [
    "Ace of spades",
    "Anya",
    "Area 51",
    "Axe Wound",
    "Baby Cannon",
    "Badly packed kebab",
    "Bearded Clam",
    "Beaver",
    "Beef Curtains",
    "Black Ace",
    "Black Triangle (curse of the black triangle)",
    "Blue Waffle",
    "Breakfast of Champions",
    "Broad Faced Chicken",
    "Box",
    "Canister",
    "Castle",
    "Catfish",
    "Cathedral",
    "Cauliflower",
    "Cave",
    "Chimney",
    "Choot",
    "Clout",
    "Clunge",
    "Cockleshell (similar to clam)",
    "Cockpit",
    "Coin Purse",
    "Cigar Box",
    "Clam",
    "Clowns Pocket",
    "Cock Pocket",
    "Cooch",
    "Coochie",
    "Cooleyhopper",
    "Cooter",
    "Cunny",
    "C*nt",
    "Cum Bucket",
    "Danger Zone",
    "Dragon's Lair",
    "Dugout",
    "Face Flower",
    "Fairy",
    "Falcon Crest",
    "Fandango",
    "Fanjita",
    "Fanjo",
    "Fanny",
    "Fanny Boo",
    "Feedbag",
    "Fifi",
    "Fillet",
    "Fingwonger",
    "Fish",
    "FUPA (Fat Upper Pussy Area)",
    "Furburger",
    "Front-Butt (aka Front Bum)",
    "Gammon",
    "Gaping Dragon",
    "Gash",
    "Gigi",
    "Glory Hole",
    "Growler",
    "Hayloft (post-menopausal women)",
    "Hidey-hole",
    "Hole",
    "Hooty-hoo",
    "Honey bun",
    "Honey Pot",
    "Honeysuckle",
    "Hot Box",
    "Hot Pocket",
    "Lady Bird",
    "Lady Flower",
    "Lady Garden",
    "Lamb Pocket",
    "Lion's Den",
    "Lucifer's Cradle",
    "Mantrap",
    "Manhole",
    "Meat Curtains",
    "Meat Wallet",
    "Meat Socket",
    "Meat Tunnel",
    "Meat Smoker",
    "Minge",
    "Muff",
    "Muffin",
    "Neden",
    "Nether End",
    "Nether Eye",
    "Nether Mouth",
    "Nether Void",
    "Nookie",
    "Passion Flower",
    "Passion Fruit",
    "Passion Pit",
    "Patchouli",
    "Peach",
    "Pickle Jar",
    "Pincushion",
    "Pink Panda",
    "Pink Panther",
    "Pink Sink",
    "Pink Taco",
    "Piss Flaps",
    "Poon",
    "Poontang",
    "Pot Hole",
    "Prickly Pear",
    "Pufferfish",
    "Punaani",
    "Puss",
    "Pussy",
    "Pussy Cat",
    "Quim",
    "Rosebud",
    "Sarah's Saddlebag (dated)",
    "Sausage Wallet",
    "Shame Cave",
    "Side-ways Smile",
    "Slippery slope",
    "Slippery slot",
    "Slit",
    "Slot Machine",
    "Smiling Dolphin",
    "Snapper",
    "Snatch",
    "Snutchie",
    "Stench Trench",
    "Stink Box",
    "Stink Tank",
    "Soggy Box",
    "Taco",
    "Tamale",
    "Tampon Tunnel",
    "Tinkleflower",
    "Toad",
    "Toolbox",
    "Toolshed",
    "Trinket",
    "Tuna Purse",
    "Tuna Town",
    "Tutu",
    "Twat",
    "Twelge",
    "Tweety / Tweetybird",
    "Twidget",
    "Twinkle Cavern",
    "Vag",
    "Vagoo",
    "Va-Jay-Jay",
    "Valarie's Stinkhole",
    "Velvet purse",
    "Vertical Smile",
    "Virginia Belle (dated)",
    "Warehouse",
    "Water gate",
    "Water lily",
    "Whispering eye",
    "Woosie",
    "Wormhole",
    "Wormgerm",
    "Wizard's Sleeve",
    "Wuss",
    "Ya-ya",
    "Ying-yang",
    "Yippee bog",
    "Yogurt factory",
    "Yoko Ono",
    "Yoni",
    "Ziggy",
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