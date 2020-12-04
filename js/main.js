const randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};
window.charts = []
var toObject = null;

function showResults(state, bg) {
    if (toObject) {
        clearTimeout(toObject);
        toObject = null;
    }
    document.getElementById("popup").style.pointerEvents = "initial";
    document.getElementById("popup").style.opacity = "1";
    if (bg != "#aaaaaa") {
        if (bg == "#4DBBF5") {
            bg = "#ADE1FA"; //democrat
        } else {
            bg = "#EEB3BE"; //republican
        }
    }

    document.getElementById("popup").style.backgroundColor = bg;

    // Show data
    createTurnout(state);
    createDemoGraph(state);
    createPrediction(state, bg);

}

function closePopup() {
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.backgroundColor = "#ffffff00";
    document.getElementById("popup").style.pointerEvents = "none";
    window.charts.forEach(chart => {
        chart.destroy();
    });
    window.charts = []
    toObject = setTimeout(() => {
        let arr = ["AIAN", "API", "Black", "White", "Hispanic", "Unknown"];
        arr.forEach(race => {
            document.getElementById('demo-' + race).style.height = "0";
        });
    }, 800);
}

function createPrediction(state, bg) {
    if (window.mode == "True Outcome") {
        document.getElementById("result").innerHTML = "This is the true election outcome!";
    } else {
        var predict = bg == "#ADE1FA" ? "Democrat" : "Republican";
        var actual = redStatesMap["True Outcome"].includes(state.toLowerCase());
        var res = (predict == "Republican") == actual ? "Correct" : "Wrong";
        res = bg == "#aaaaaa" ? "invalid" : res;
        document.getElementById("result").innerHTML = "Predicted Winner: " + predict + ". The prediction is <b>" + res + "</b>!.";
    }
}
var modes = ["Corrected by Political Bias", "Corrected by Gender&Race", "Corrected by Gender", "Corrected by Race", "True Outcome", "Uncorrected"];
window.mode = "True Outcome";
function changeto(text) {
    window.mode = text;
    document.getElementById("btn1").innerHTML = text;
    if (text == "True Outcome") {
        document.getElementById("btn1").style = "background-color:rgb(71, 245, 123);";
    } else if (text == "Uncorrected") {
        document.getElementById("btn1").style = "background-color:rgb(240, 118, 97);";
    } else {
        document.getElementById("btn1").style = "";
    }
    s = "";
    modes.forEach(m => {
        if (m != text) {
            s += "<a onclick=\"changeto('" + m + "')\">" + m + "</a>";
        }
    });
    document.getElementById("myDropdown").innerHTML = s;
    makeMap();

}

function makeMap() {
    //Do Work on Map
    for (var state in window.usRaphael) {
        var col = "#4DBBF5";
        if (redStatesMap[window.mode].includes(state)) {
            col = "#EB4444";
        } else if (window.mode == "Corrected by Political Bias" && !blueStatesMap[window.mode].includes(state)) {
            col = "#aaaaaa";
        }
        window.usRaphael[state].attr("fill", col);
        textObj = labelPath(window.usRaphael[state], state.toUpperCase());
        (function (st, state, textObj) {

            st[0].style.cursor = "pointer";

            st[0].onmouseover = function () {
                st.animate({ stroke: "#000" }, 500);
                st.toFront();
                textObj.toFront();
                window.R.safari();
            };

            st[0].onclick = function () {
                showResults(state.toUpperCase(), window.usRaphael[state].attrs.fill);
            };

            st[0].onmouseout = function () {
                st.animate({ stroke: "#fff" }, 500);
                st.toFront();
                textObj.toFront();
                window.R.safari();
            };

        })(window.usRaphael[state], state, textObj);
    }
}