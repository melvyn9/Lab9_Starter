//Make sure DOM content loaded first
window.addEventListener("DOMContentLoaded", () => {
    //Console Log
    document.getElementById("consoleLog").addEventListener("click", () => {
        console.log("Console Log Demo");
    });

    //Console Error
    document.getElementById("consoleError").addEventListener("click", () => {
        console.error("Console Error Demo");
    });

    //Console Count
    document.getElementById("consoleCount").addEventListener("click", () => {
        countButton();
    });

    function countButton() {
        let result = "Count Button"
        console.count(result);
    }

    //Console Warn
    document.getElementById("consoleWarn").addEventListener("click", () => {
        console.warn("Console Warn Button");
    });

    //Console Assert
    document.getElementById("consoleAssert").addEventListener("click", () => {
        isEmptyString();
    });

    function isEmptyString(inputString) {
        console.assert(inputString, "No input string provided");
    }

    //Console Clear
    document.getElementById("consoleClear").addEventListener("click", () => {
        console.clear();
    });

    //Console Dir
    let myBio = new Object();
    myBio.name = "Melvyn";
    myBio.age = 20;
    myBio.major = "Math-CS";
    myBio.favClass = "CSE110";

    document.getElementById("consoleDir").addEventListener("click", () => {
        console.dir(myBio);
    });

    //Console Dirxml
    let myExample = document.getElementById("dirExample");
    document.getElementById("consoleDirxml").addEventListener("click", () => {
        console.dirxml(myExample);
    });

    //Console Start Group
    document.getElementById("consoleStartGroup").addEventListener("click", () => {
        console.group("New Group");
    });

    //Console End Group
    document.getElementById("consoleEndGroup").addEventListener("click", () => {
        console.groupEnd();
    });

    //Console Table
    document.getElementById("consoleTable").addEventListener("click", () => {
        console.table(myBio);
    });

    //Console Start Timer
    document.getElementById("consoleStartTimer").addEventListener("click", () => {
        console.time("my timer");
    });

    //Console End Timer
    document.getElementById("consoleEndTimer").addEventListener("click", () => {
        console.timeEnd("my timer");
    });

    //Console Trace
    function levelOne() {
        levelTwo();
    }

    function levelTwo() {
        levelThree();
    }

    function levelThree() {
        console.trace();
    }

    document.getElementById("consoleTrace").addEventListener("click", () => {
        levelOne();
    });

    //Console Global
    document.getElementById("consoleGlobal").addEventListener("click", () => {
        alert("Demonstrating an error");
        // Undefined function
        undefinedFunction();
    });

    //Catch global error
    window.onerror = function(event, source, lineno, colno, error) {
        // Log the error
        console.log("Error: " + event + "\nSource: " + source + "\nLine: " + lineno + "\nColumn:" + colno);

        var suppressErrorAlert = true;
        // If you return true, then error alerts (like in older versions of 
        // Internet Explorer) will be suppressed.
        return suppressErrorAlert;
     };
})