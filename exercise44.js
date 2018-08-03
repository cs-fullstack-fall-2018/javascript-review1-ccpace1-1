var squad = ["Bob", "John", "Bob", "Kenn", "Bob", "Kevin", "John", "Kevin"];
function main() {
    console.log("Bob is in there " + countInArray(squad) + " times.");
    console.log("John is in there " + countInArray2(squad) + " times.");
    console.log("Kenn is in there " + countInArray3(squad) + " times.");
    console.log("Kevin is in there " + countInArray4(squad) + " times.");
}
function countInArray(squad) {
    var count = 0;
    for (var i = 0; i < squad.length; i++) {
        if (squad[i] === "Bob") {
            count++;
        }
    }
    return count;
}
function countInArray2(squad2) {
    var count = 0;
    for (var i = 0; i < squad2.length; i++) {
        if (squad[i] === "John") {
            count++;
        }
    }
    return count;
}
function countInArray3(squad3) {
    var count = 0;
    for (var i = 0; i < squad3.length; i++) {
        if (squad[i] === "Kenn") {
            count++;
        }
    }
    return count;
}
function countInArray4(squad4) {
    var count = 0;
    for (var i = 0; i < squad4.length; i++) {
        if (squad[i] === "Kevin") {
            count++;
        }
    }
    return count;
}
main();
