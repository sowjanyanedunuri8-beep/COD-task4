let jsVotes = Number(localStorage.getItem("jsVotes")) || 0;
let pythonVotes = Number(localStorage.getItem("pythonVotes")) || 0;
let javaVotes = Number(localStorage.getItem("javaVotes")) || 0;

function updateUI(){

    document.getElementById("jsVotes").textContent = jsVotes;
    document.getElementById("pythonVotes").textContent = pythonVotes;
    document.getElementById("javaVotes").textContent = javaVotes;

    let total = jsVotes + pythonVotes + javaVotes;

    document.getElementById("totalVotes").textContent = total;

    if(total > 0){

    document.getElementById("jsBar").style.width =
        (jsVotes/total)*100 + "%";

    document.getElementById("pythonBar").style.width =
        (pythonVotes/total)*100 + "%";

    document.getElementById("javaBar").style.width =
        (javaVotes/total)*100 + "%";
}
else{

    document.getElementById("jsBar").style.width = "0%";
    document.getElementById("pythonBar").style.width = "0%";
    document.getElementById("javaBar").style.width = "0%";
}
}

function vote(option){

    if(option === "js"){
        jsVotes++;
    }
    else if(option === "python"){
        pythonVotes++;
    }
    else{
        javaVotes++;
    }

    localStorage.setItem("jsVotes", jsVotes);
    localStorage.setItem("pythonVotes", pythonVotes);
    localStorage.setItem("javaVotes", javaVotes);

    updateUI();
}

function resetPoll(){

    jsVotes = 0;
    pythonVotes = 0;
    javaVotes = 0;

    localStorage.setItem("jsVotes", 0);
    localStorage.setItem("pythonVotes", 0);
    localStorage.setItem("javaVotes", 0);

    updateUI();
}

updateUI();