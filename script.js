/**
 * Created by Martin Ruzicka on 28/11/2017.
 */

var questions = [
        "1. Are you lost with ideas?",
        "2. Aren't you fan of music?",
        "3. Aren't you fan of any culture?",
        "4. Do you hate computer games?",
        "5. Are you afraid of traveling?",
        "6. Do you think that alcohol should be banned?",
        "7. Have you left your home town before?",
        "8. Can you ask for a beer in more languages?",
        "9. Do you like meeting new people?",
        "10. Is your memory strong?",
        "11. Did you drink so much yesterday that you don't remember where you are?",
        "12. Aren't you satisfied with boresness of your Czech partner?",
        "13. Do you spent every evening alone in front of the computer?",
        "14. Does everyone think that you are weird?",
        "15. Never heard about deodorant?",
        "16. Computer is the only thing that understands you?",
        "17. Are you afraid of light?",
        "18. Do you enjoy listening of music?",
        "19. Can you recognize G and E tone?",
        "20. Is pop music a crap for you?",
        "21. Is staying at disco best activity to do on Friday?",
        "22. Do you know every hiphoper that ever performed?",
        "23. Are you hungry right now?",
        "24. Do you go each day to different restaurant?",
        "25. Have you ever tried passion fruit?",
        "26. Are you thinking about having a shot?",
        "27. ONE beer is not enough for you?",
        "28. Can you recognize wine more detailed than white and red?",
        "29. Alcohol and marihuana aren't satisfaing for you enoug?",
        "31. Do you thing that working is the most important thing in the life?",
        "32. Do you enjoy giving orders but people don't listen to you?",
        "33. Aren't you still sure what to do in your life?",
        "34. Do you like to make some nonsense tasks?",
        "35. Do you like to live carefree life?",
        "36. Do you a lot of money and you don't know what to do with it?",
        "37. Does your computer have problems with running newest games?",
        "38. Do you like animals?",
        "39. Do you know which politician is the most corrupted?",
        "40. Do you visit cinema a lot?",
        "41. Do you have posters of your favorite actress in your room?"
    ];

var conclusions = [
        "1. Make a system about choosing the topic of the system",
        "2. Make a system about choosing what to listen",
        "3. Make a system about choosing what to watch",
        "4. Make a system about which country to travel in",
        "5. Make a system about what language to learn",
        "6. Make a system about computer games",
        "7. Make a system about what to eat",
        "8. Make a system about what alcohol to drink",
        "9. Make a system about which drug to use",
        "10. Make a system about choosing the university",
        "11. Make a system about choosing the occupation",
        "12. Make a system about choosing computer",
        "13. Make a system about recognizing animals",
        "14. Make a system about choosing a political party for elections",
        "15. Make a system that tells you where you are",
        "16. Make a system that choose programming language"
    ];

var properties = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0.9, 0, 0.1, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0.8, 1, 1, 1, 0.2, 1, 0.8],
    [0.9, 0.9, 0.9, 0.9, 0.9, 0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
    [0.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var fset = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var key = {
    left: 37,
    right: 39
};

// var questions = [
//     "1. Máte chuť na plnější pivo?",
//     "2. Chcete vyzkoušet ostřejší pivo?",
//     "3. Plánujete při pití jíst keksy?",
//     "4. Preferejute hořké pivo?",
//     "5. Je libo silnější kousek?",
//     "6. Máte chuť na ovoce?",
//     "7. Preferujete chmelové pivo?",
//     "8. Preferujete větší podíl pšenice?",
//     "9. Dal/a byste si spíše sladké pivo?",
//     "10. Co takhle šťavnaté?",
//     "11. Máte náladu na něco netradičního?",
//     "12. Rádi byste osvěžující nápoj?"
// ];
//
// var conclusions = [
//     "1. Pilsner",
//     "2. IPA",
//     "3. Belgian",
//     "4. Stout",
//     "5. Sour ALE"
// ];
//
// var properties = [
//     [0.2, 0.7, 0.6, 0.2, 1],
//     [0.3, 0.6, 1, 0.2, 0.6],
//     [1, 0, 0, 0, 0],
//     [0.5, 0.6, 0.2, 0.7, 0.9],
//     [0.6, 0.8, 0.7, 0.9, 1],
//     [0, 1, 0.5, 0.5, 0.5],
//     [0.8, 0.8, 1, 0.2, 0.3],
//     [0.1, 0.2, 0.8, 1, 0],
//     [0, 0, 0, 1, 0],
//     [0, 0, 1, 0.3, 0.3],
//     [0, 0.5, 0.5, 0.7, 1],
//     [1, 0, 0.6, 0, 1]
// ];
//
// var fset = [1, 1, 1, 1, 1];

var n = Math.floor(Math.random() * questions.length-1) + 1;
var options = [n];



$('body').keypress(function (e) {
    var k = e.keyCode;
    if( k === key.left ) {
        play(false);
    } else if ( k === key.right ) {
        play(true);
    }
});

$('#question').text(questions[n]);


function say(value) {
    if ( value ) {
        for (var i=0; i<fset.length; i++) {
            fset[i] = Math.min(properties[n][i],fset[i]);
        }
    } else {
        for (var i=0; i<fset.length; i++) {
            fset[i] = Math.min(1-properties[n][i],fset[i]);
        }
    }
}

function lastConclusion() {
    var index = -1;
    for (var i=0; i<fset.length; i++) {
        if (fset[i] > 0.00001) {
            if (index !== -1) {
                return -1;
            }
            index = i;
        }
    }
    return index;
}

function isAllZero() {
    for (var i=0; i<fset.length; i++) {
        if (fset[i] > 0.00001) {
            return false
        }
    }
    return true;
}

function play(value) {
    if (options.length === questions.length) {
        alert("No more questions");
        return [];
    }

    say(value);

    print(value);

    if (isAllZero()) {
        alert("I don't know")
    }

    var last = lastConclusion();
    if (last !== -1) {
        alert(conclusions[last] + " : " + fset[last]);
    }

    while(true) {
        n = Math.floor(Math.random() * questions.length-1) + 1;
        if ($.inArray(n, options) === -1) {
            options.push(n);
            break;
        }
    }

    $('#question').text(questions[n]);
}


function print(val) {
    // console.log(fset + " : " + n);

    $('body').append($('<div/>').text(questions[n] + " -> " + val));

    $('body').append($('<div/>').text(fset + " : " + n));

    var dataChart = [["Element", "Density", { role: "style" } ]];

    for (var i=0; i < conclusions.length; i++ ) {
        dataChart.push([conclusions[i],fset[i], fset[i] > 0.5 ? "#F00" : "#00F"]);
    }

    var data = google.visualization.arrayToDataTable(dataChart);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
            { calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation" },
            2]);

    var options = {
            width: 600,
            height: 400,
            bar: {groupWidth: "80%"},
            legend: { position: "none" },
        };

    var chart = new google.visualization.BarChart(document.getElementById("chart")); //
    chart.draw(view, options);

}
