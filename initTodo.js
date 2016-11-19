var lsTODOSKEY = "TODOS";
var lsTODOS = window.localStorage.getItem(lsTODOSKEY);
var TODOS = [];

if (lsTODOS) {
    TODOS = JSON.parse(lsTODOS);
} else {
    window.localStorage.setItem(lsTODOSKEY, JSON.stringify(TODOS));
}