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

// ref: https://mashable.com/2018/05/07/masturbation-slang-euphemisms-list/
// ref: https://www.huffpost.com/entry/21-creative-euphemisms-for-female-masturbation_n_561d6ac5e4b0c5a1ce60eab1
// ref: http://www.chicagonow.com/listing-beyond-forty/2017/02/40-new-euphemisms-for-female-masturbation/
var words = [
    //
    'Poaching the egg',
    'Shaking hands with the milkman',
    'Manual override',
    'Marching the penguin',
    'Double clicking',
    'Polishing the banister',
    'Petting the cat',
    'Lone Rangering',
    'Boxing the one-eyed champ',
    'Celebrating Palm Sunday',
    'Nulling the void',
    'Visiting the safety deposit box',
    'Orbiting Venus',
    'Finding Nemo',
    'Cuffing the carrot',
    'Cooking cucumbers',
    'Dialing the rotary phone',
    'Taking the self-guided tour',
    'Playing five-on-one',
    'Making waffles',
    'Doing a Meg Ryan',
    'Downstairs DJ',
    'Turning on the sprinklers',
    'Shucking the corn',
    'Softening the peach',
    'Spearing the bearded clam',
    'Paddling the pink canoe',
    'DIY',
    'Scratching Yoda behind the ears',
    'Trolling the Bermuda Triangle',
    'Taking selfies at The Bean',
    'Dotting the "i"',
    'Burping the worm',
    'Tapping into your potential',
    'Giving yourself a hand',
    'Rotating the drive head',
    'Keynoting in Cupertino',
    'Taking your talents to South Beach',
    'Auditioning the finger puppets',
    'Badgering the witness',
    'Making soup',
    'Preparing the monologue',
    'Rosing (thanks, Titanic)',
    'Clicking the home page',
    'Drilling for oil',
    'Engaging in safe sex',
    'Singing soprano',
    'Debugging the hard drive',
    'Minding the gap',
    'Watching the Magic Mike: XXL trailer',
    //
    'Ménage à moi',
    'Paddling the pink canoe',
    'Finger painting',
    'Visiting the safety deposit box',
    'Dialing the rotary phone',
    'Auditioning the finger puppets',
    'Womansplaining yourself',
    'Engaging in safe sex',
    'Getting lost in the deep end',
    'Jillin’ off',
    'DIY time',
    'Doing a Meg Ryan',
    'Fanning the fur',
    'Girls’ night in',
    'Checking the undercarriage',
    'The downstairs DJ',
    'Buttering your muffin',
    'Visiting the bat cave',
    'Knitting',
    'Diddling Miss Daisy',
    '﻿Playing the piano',
    //
    'Taking selfies at The Bean',
    'Playing chess without a bishop',
    'Reading below the fold',
    'Taking the self-guided tour',
    'Sailing the catamaran',
    'Flooding the basement',
    'Hacking the home network',
    'Optimizing your search results',
    'Meeting with the small council',
    'Practicing your touch typing',
    'Shaking out the curtains',
    'Taking laps around the kiddie pool',
    'Dotting the i',
    'Investing in bitcoin',
    'Clicking the home page',
    'Punching the pill box',
    'Touching up your lip gloss',
    'Polishing the little jewel',
    'Buffing the bumper',
    'Keynoting in Cupertino',
    'Checking some batteries',
    'Solving cat’s cradle',
    'Fingering the fine china',
    'Folding the fitted sheet',
    'Tapping your own potential',
    'Being your own boss',
    'Working from home',
    'Probing the psyche',
    'Taming the shrew',
    'Rocking the Casbah',
    'Rocking the suburbs',
    'Rocking the free world',
    'Knocking on heaven’s door',
    'Romancing the stone',
    'Rubbing the raspberry',
    'Testing the waterslide',
    'Checking your wallet',
    'Cornonating the queen',
    'Pinching the dumpling',
    'Drafting a blog post',
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