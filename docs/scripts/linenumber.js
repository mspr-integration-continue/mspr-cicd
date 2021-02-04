/*global document */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b9867388c0c87c5fb6dd3249e5419969b23b88a8

(function() {
    var source = document.getElementsByClassName('prettyprint source linenums');
    var i = 0;
    var lineNumber = 0;
    var lineId;
    var lines;
    var totalLines;
    var anchorHash;
<<<<<<< HEAD
=======
(() => {
    const source = document.getElementsByClassName('prettyprint source linenums');
    let i = 0;
    let lineNumber = 0;
    let lineId;
    let lines;
    let totalLines;
    let anchorHash;
>>>>>>> d141d2ff2f4dc3657223fe441a9a832ee4ae4be0
=======
>>>>>>> b9867388c0c87c5fb6dd3249e5419969b23b88a8

    if (source && source[0]) {
        anchorHash = document.location.hash.substring(1);
        lines = source[0].getElementsByTagName('li');
        totalLines = lines.length;

        for (; i < totalLines; i++) {
            lineNumber++;
<<<<<<< HEAD
<<<<<<< HEAD
            lineId = 'line' + lineNumber;
=======
            lineId = `line${lineNumber}`;
>>>>>>> d141d2ff2f4dc3657223fe441a9a832ee4ae4be0
=======
            lineId = 'line' + lineNumber;
>>>>>>> b9867388c0c87c5fb6dd3249e5419969b23b88a8
            lines[i].id = lineId;
            if (lineId === anchorHash) {
                lines[i].className += ' selected';
            }
        }
    }
})();
