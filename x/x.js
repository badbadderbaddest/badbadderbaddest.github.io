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

// ref: https://www.buzzfeed.com/javiermoreno/how-many-euphemisms-for-sex-do-you-know
var words = [
    'Take a trip to pound town',
    'Bump uglies',
    'Knock boots',
    'Check the oil',
    'Feed the kitty',
    'Do the no pants dance',
    'Two person push ups',
    'Slime the banana',
    'Fill the cream donut',
    'Burping the worm in the mole hole',
    'Test the humidity',
    'Bone',
    'Stuff the taco',
    'Ride the skin bus into tuna town',
    'Polish the porpose',
    'Sweep the chimney',
    'Bury the bone',
    'Thread the needle',
    'Take old one eye to the optometrist',
    'Pork',
    'Spear the bearded clam',
    'Boink',
    'Ride the flag pole',
    'Get some stankie on the hang down',
    'Hit a home run',
    'Pound the punanni pavement',
    'Hizzit the skins',
    'Smack the salmon',
    'Test the suspension',
    'Slam the ham',
    'Horizontal hula',
    'Make the beast with two backs',
    'Ride the bolonga pony',
    'Stuff the beaver',
    'Attack the pink fortress',
    'Exchange bodily fluids',
    'Play hide the canoli',
    'Shuck the oyster',
    'Four legged fox trot',
    'Butter the biscuit',
    'Shake the trailer',
    'Make whoopee',
    'Play hide the German sausage',
    'Hanky panky',
    'Open the gates of Mordor',
    'Get mounted',
    'Go home to play with the box the kid came in',
    'Clean the carpet',
    'Know in the Biblical sense',
    'Lust and thrust',
    'Park the beef bus into tuna town',
    'Smash pissers',
    'Mattress dance',
    'Hump',
    'Buck',
    'Mingle limbs',
    'Part the pink sea',
    'Bed boogie',
    'Make babies',
    'Spelunking the Bat Cave',
    'Hot beef injection',
    'Get your end wet',
    'Cave diving',
    'Bury the weasel',
    'Fornicate',
    'Do the deed',
    'Stir the up skirt yogurt',
    'Park the Plymouth into the garage of love',
    'Have relations',
    'Roll in the hay',
    'Play doctor',
    'Do the nasty',
    'Shag',
    'Vulcanize the whoopee stick',
    'Foxtrot Uniform Charlie Kilo',
    'Score',
    'F*ck',
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