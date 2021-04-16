let text = [
    "Everytime I see you, my heart melted like an ice cream.",
    "Sometimes when you think one plus one is two, its actually a window."
];
let main_test_panel = $("#type_test_main_panel");
let start_btn = $("#start_typetest_btn");
let restart_btn = $("#restart_typetest_btn");
let totype_panel = $("#to_type");
let type_test_panel = $("#type_test_panel");
let typetest_input = $("#typetest_input");
let test_time = $("#test_time");
let test_error = $(".test_error");
let test_acc = $(".test_acc");
let test_result_panel = $("#type_test_result");
let wpm_panel = $("#wpm");
let test_des = $("#test_des");

let TIME_LIMIT = 10;
let timeLeft = TIME_LIMIT;
let timer = null;

let words = null;

let totalErrors = 0;
let totalWords = 0;
let accuracy = 0;
let wpm = 0;

let lastErrors = 0;
let lastWordsTyped = 0;
let currentTestIndex = -1;

typetest_input.text("");
typetest_input.on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
        checkInput(typetest_input.val().toString());
});

start_btn.click(function(){
    startTest();
});

restart_btn.click(function(){
    location.reload();
});

function randRangeInclusive(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTestIndex(currIndex) {
    let testIndex = currIndex;
    while(testIndex == currIndex) {
        testIndex = randRangeInclusive(0, text.length - 1)
    }
    return testIndex;
}

function startTest() {
    type_test_panel.show();
    main_test_panel.hide();
    resetValues();
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);

    currentTestIndex = randRangeInclusive(0, text.length - 1);
    setTest(text[currentTestIndex]);
}

function setTest(totype) {
    totype_panel.text(totype);
    typetest_input.focus();
    typetest_input.val("");
    words = totype.toString().split(" ");
}

function checkInput(input) {
    let check = input.split(" ");

    let val = "";
    let isCorrect = false;
    let tempError = 0;

    for (let i = 0; i < words.length; i++) {
        if (i > check.length - 1) {
            val += words[i];
            val += " ";
            continue;
        }

        isCorrect = true;
        for (let j = 0; j < words[i].length; j++) {
            if (check[i].length > words[i].length || 
                j > check[i].length - 1 || 
                check[i][j] != words[i][j]) 
            {
                isCorrect = false;
                break;
            }
        }
        
        if (i == check.length - 1) {
            val += "<span style='color:cyan'>";
            val += words[i];
            val += "</span>";
        } else if (isCorrect) {
            val += "<span style='color:greenyellow'>";
            val += words[i];
            val += "</span>";
        } else if (isCorrect == false) {
            val += "<span style='color:orangered'>";
            val += words[i];
            val += "</span>";
            tempError += 1;
        }
        val += " ";
    }
    
    totalErrors = lastErrors + tempError;
    totalWords = lastWordsTyped + ((check.length > words.length) ? words.length : check.length);
    accuracy = Math.trunc((((totalWords - totalErrors) * 100) / totalWords));

    totype_panel.html(val);
    test_error.text(totalErrors);
    test_acc.text(accuracy.toString() + "%");

    if (check.length > words.length) {
        lastWordsTyped += words.length;
        lastErrors += tempError;
        onCompleted();
    }
}

function onCompleted() {
    currentTestIndex = getTestIndex(currentTestIndex);
    setTest(text[currentTestIndex]);
}

function finishTest() {
    clearInterval(timer);
    timer = null;
    wpm = Math.trunc((totalWords - totalErrors) / (TIME_LIMIT / 60));
    wpm_panel.text(wpm);
    type_test_panel.hide();
    test_result_panel.show();

    let test_des_t = "";
    // PRO
    if (wpm >= 85) {
        test_des_t = "A PRO BEING A PRO!";
    } 
    // FAST
    else if (wpm >= 65) {
        test_des_t = "FAST LIKE A LIGHTNING!";
    }
    // FLUENT
    else if (wpm >= 45) {
        test_des_t = "A FLUENT TYPER!";
    }
    // AVERAGE
    else if (wpm >= 25) {
        test_des_t = "GOOD ENOUGH IN AVERAGE";
    }
    // SLOW
    else {
        test_des_t = "TOO SLOW, KEEP PRACTICING!";
    }

    test_des.text(test_des_t);
}

function resetValues() {
    timeLeft = TIME_LIMIT;
    lastErrors = 0;
    textIndex = 0;
    totalErrors = 0;
    totalWords = 0;
    accuracy = 0;
    currentTestIndex = -1;
    test_time.text(timeLeft + "s");
    wpm = 0;
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        test_time.text(timeLeft + "s");
    }
    else {
        finishTest();
    }
}
