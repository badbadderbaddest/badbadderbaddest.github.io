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

// ref: https://namingschemes.com/Penis_Synonyms
var words = [
    'Baby-Maker',
    'Beaver Basher',
    'Bed Snake',
    'Beef Whistle',
    'Best Friend',
    'Bishop',
    'Blue-Vein Sausage',
    'Boner',
    'Braciole',
    'Bratwurst',
    'Burrito',
    'Candle',
    'Captain',
    'Chief',
    'Choad',
    'Chopper',
    'Clarinet',
    'Cock',
    'Cracksman',
    'Cranny Axe',
    'Crevice Crawler',
    'Cucumber',
    'Cum Gun',
    'Custard Launcher',
    'Dagger',
    'Danger noodle',
    'Dick',
    'Ding Dong',
    'Dingbat',
    'Dingus',
    'Dink',
    'Dinky',
    'Disco Stick',
    'Dong',
    'Donger',
    'Doodad',
    'Dork',
    'Dragon',
    'Drum Stick',
    'Dude Piston',
    'Easy Rider',
    'Eggroll',
    'Excalibur',
    'Fang',
    'Ferret',
    'Fire Hose',
    'Flesh Flute',
    'Flesh Tower',
    'Foto',
    'F*ck Rod',
    'F*ck Stick',
    'Fun Stick',
    'Giggle Stick',
    'Goober',
    'Goofy Goober',
    'Groin Ferret',
    'Hairy Hotdog',
    'Heat-Seeking Moisture Missile',
    'Helmet Head',
    'Hog',
    'Horn',
    'Hose',
    'Hot dog',
    'Hotdogger',
    'Humperdink',
    'Jackhammer',
    'Jimmy',
    'John Thomas (Dated)',
    'Johnson',
    'Joystick',
    'Junk',
    'Kickstand',
    'King Sebastian',
    'Knob',
    'Krull The Warrior King',
    'Lamb Kebab',
    'Lap Rocket',
    'Leaky Hose',
    'Leather-Stretcher',
    'Lingam',
    'Lipstick 💄',
    'Little Alex',
    'Little Bob',
    'Little Elvis',
    'Little Fish',
    'Lizard (As In "Drain The...")',
    'Longfellow',
    'Love Muscle',
    'Love Rod',
    'Love Stick',
    'Love Whistle',
    'Luigi',
    'Man Meat',
    'Man Umbrella',
    'Manhood',
    'Master Sword',
    'Meat And Two Veg',
    'Meat Popsicle',
    'Meat Stick',
    'Meat Sword',
    'Member',
    'Microphone',
    'Middle Stump',
    'Milkman',
    'Millimetre Peter',
    'Mutton',
    'Netherrod',
    'Old Boy',
    'Old Chap',
    'Old Fellow',
    'Old Man',
    'One-Eyed Anaconda',
    'One-Eyed Monster',
    'One-Eyed Trouser-Snake (Australia, UK)',
    'One-Eyed Willie',
    'One-Eyed Wonder Weasel',
    'One-Eyed Wonder Worm',
    'One-Eyed Yogurt Slinger',
    'Pecker',
    'Pedro',
    'Peepee',
    'Percy',
    'Peter',
    'Pickle',
    'Pied Piper',
    'Pig Skin Bus',
    'Pink Oboe',
    'Pink Torpedo',
    'Piss Weasle',
    'Piston',
    'Pitched Tent',
    'Plug',
    'Pocket Rocket',
    'Pork Sword',
    'Prick',
    'Prince Charming',
    'Princess Sophia',
    'Purple-Headed Yogurt Flinger',
    'Putz',
    'Python',
    'Quiver Bone',
    'Rod',
    'Rod Of Pleasure',
    'Sausage',
    'Schlong',
    'Schlort',
    'Schmuck, Shmuck (Yiddish)',
    'Schnitzel',
    'Schwanz',
    'Schwarz',
    'Sea Monster (As In "Drain The...")',
    'Sebastianic Sword',
    'Sexcalibur (Sword of Legend)',
    'Shaft',
    'Short Arm',
    'Single Serving Soup Dispenser',
    'Skin Flute',
    'Snake',
    'Soldier',
    'Spawn Hammer',
    'Stick Shift',
    'Surfboard',
    'Tallywhacker',
    'Tent Peg',
    'Third Leg',
    'Thumper',
    'Thunderbird',
    'Thundersword',
    'Tinker',
    'Tiny',
    'Todger (Australia, UK)',
    'Tonka',
    'Tonsil Tickler',
    'Tool',
    'Trouser Snake',
    'Tubesteak',
    'Twig (& Berries)',
    'Twinkie',
    'Uncle Dick',
    'Vein',
    'Vlad The Impaler',
    'Wand',
    'Wang',
    'Wang Doodle',
    'Wanger',
    'Wedding Tackle',
    'Wee Wee',
    'Whoopie Stick',
    'Wick',
    'Wiener',
    'Wiener Schnitzel',
    'Willy',
    'Winkie',
    'Womb Broom',
    'Woody Womb Pecker',
    'Worm',
    'Yogurt Gun',
    'Yogurt Hose',
    '$5 Footlong',
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