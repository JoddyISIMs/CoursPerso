var nbrCarre;
var couleurDiv;
var variation;

var rouge;
var bleu;
var vert;

Initialisation("rouge");
Rouge();

$(".carre").click(function() {
    if ($(this).hasClass("rouge")) {
        rouge = this.id * variation;
        $(".rouge").removeClass("rouge");
        $("#container").fadeOut(300, function() { Initialisation("vert"); });
        $("#container").delay(300).fadeIn(300);
    } else if ($(this).hasClass("vert")) {
        vert = this.id * variation;
        console.log(vert);
        $(".vert").removeClass("vert");
        $("#container").fadeOut(300, function() { Initialisation("bleu"); });
        $("#container").delay(300).fadeIn(300);
    } else if ($(this).hasClass("bleu")) {
        bleu = this.id * variation;
        $(".bleu").removeClass("bleu");
        $("#container").fadeOut(300, function() { DisplayColor(); });
        Initialisation("rouge");
    }
});

$(".carre").hover(function() {
        $(this).css("border", "2px solid white");
    },
    function() {
        $(this).css("border", "none");
    });

function DisplayColor() {
    $("body").css("background-color", "rgb(" + rouge + "," + vert + "," + bleu + ")");
}

function Rouge() {
    for (i = 0; i < nbrCarre; i++) {
        couleurDiv[i] = i * variation;
        $("#" + i).css("background-color", "rgb(" + couleurDiv[i] + ", 0, 0)");
    }
    $(".carre").addClass("rouge");
}

function Vert() {
    for (i = 0; i < nbrCarre; i++) {
        couleurDiv[i] = i * variation;
        $("#" + i).css("background-color", "rgb(0," + couleurDiv[i] + ", 0)");
    }
    $(".carre").addClass("vert");
}

function Bleu() {
    for (i = 0; i < nbrCarre; i++) {
        couleurDiv[i] = i * variation;
        $("#" + i).css("background-color", "rgb(0, 0," + couleurDiv[i] + ")");
    }
    $(".carre").addClass("bleu");
}

function Initialisation(couleur) {
    nbrCarre = Random();
    couleurDiv = Array(nbrCarre);
    variation = SetVariation();

    $(".carre").hide();
    for (i = 0; i < nbrCarre; i++) {
        $("#" + i).show();
    }

    if (couleur == "vert") {
        Vert();
    } else if (couleur == "bleu") {
        Bleu();
    }
}

function SetVariation() {
    var variation = 255 / (nbrCarre - 1);
    return variation.toFixed(0);
}

function Random() {
    var random = Math.random() * (16 - 2) + 2;
    return random.toFixed(0);
}