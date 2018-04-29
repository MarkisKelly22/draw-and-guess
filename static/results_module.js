// More advanced logic could be used to generate linguistic responses, but this will achieve the goal
// of adding a human element to the application

var responsePrefix = [
    "Definitely a ",
    "It's a ",
    "Hmmm...a ",
    "It looks like a ",
    "I think it's a ",
    "oh I know! A "
    ];

function generateRandomPrefix(){
    return responsePrefix[Math.floor(Math.random() * responsePrefix.length)]
}


function testRandomPrefix() {
    for (var i = 0; i < 50; i++) {
        var rand = Math.floor(Math.random() * prefix.length);
        console.log(responsePrefix[rand])
    }
}

function showGuess(result){
    document.getElementById("output").innerHTML = (generateRandomPrefix() + result + "!");
}

function guessClear() {
    document.getElementById("output").innerHTML = "";

}