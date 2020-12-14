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

// ref: https://www.buzzfeed.com/jeanlucbouchard/wank-thinktank
var words = [
    'Spanking the monkey',
    'Five finger shuffle',
    'Making the bald man cry',
    'Poaching your egg',
    'Shaking hands with Dr. Winky',
    'Beating your meat',
    'Blowing your own horn',
    'Battling the purple-headed yogurt slinger',
    'Riding the mayonnaise surf',
    'Shucking corn',
    'Waxing your carrot',
    'Tugging the slug',
    'Windsurfing on Mount Baldy',
    'Debugging the hard drive',
    'Auditioning your hand puppet',
    'Oozing your noodle',
    'Squirt hockey',
    'Hand shandy',
    'Smoosh smoosh',
    'Burping the worm',
    'Wanking',
    'Pocket pinball',
    'Badgering the witness',
    'Celebrating Palm Sunday',
    'Making magic with leftovers',
    'Pulling the Pope',
    'Wrestling the eel',
    'Liquidating the inventory',
    'Hoisting your own petard',
    'Fishing with dynamite',
    'Beef Strokenoff',
    'Jerkin’ the gherkin',
    'Cooking cucumbers',
    'Consulting Dr. Jackoff',
    'Tipping off the inspector',
    'Much a goo about nothing',
    'Looking for clues with Fred and Daphne',
    'Discovering your own potential',
    'Shuffling your iPod',
    'Strangling the Cyclops',
    'Buffing the Vampire Slayer',
    'Making Pearl Jam',
    'Meeting the Goopman at midnight',
    'Seasoning your meatloaf',
    'Practicing politics',
    'Hunting for Red October',
    'Tossing egg salad',
    'Crying on the toilet',
    '23 skidoo',
    'The tartar sauce rainbow',
]

var changeWordTimeout;
var iwords = 0;
var changeWord = function() {
    if (iwords % words.length == 0) {
        rng.Shuffle(words);
        iwords = 0;
    }
    $('body > div > span')
        .text(words[iwords]);
    iwords++;
    changeWordTimeout = setTimeout(function() { changeWord(); }, 4000);
}

function stopChangeWord() {
    clearTimeout(changeWordTimeout);
}

function ehandler(event) {
    if (event.keyCode == 8 || event.type == 'tap') {
        console.log('Backspace was pressed');
        stopChangeWord();
        event.preventDefault();
    }
    else if (event.keyCode == 37 || event.type == 'swipeleft') {
        console.log('Left was pressed');
        event.preventDefault();
    }
}

$(document).ready(function () {
    changeWord();
    $(document).on('keydown', ehandler);
    $(document).on('tap swipeleft', ehandler);
});

//}