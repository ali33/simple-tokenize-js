/*
 * Simple tokenizer
 *
 * - Accepts a subject string and an array of seperators 
 * - Returns an array of token objects
 *
 * - var str = 'this is text. This is next text <a href="https://google.com">click here to goto google.com</a>';
 * - var seps = [' ', '.', '"', '<', '>','/','=','\'','\n'];
 * - result: ["this", " ", "is", " ", "text", ".", "", " ", "This", " ", "is", " ", "next", " ", "text", " ", "<", "a", " ", "href", "=", "", """, "https:", "/", "/", "google", ".", "com", """, ">", "click", " ", "here", " ", "to", " ", "goto", " ", "google", ".", "com", "<", "/", "a", ">", ""]
 */
function tokenize(str, seps) {
    function splitKeepSep(str, sep) {
        var result = [];
        var idx = str.indexOf(sep);
        if (idx < 0)
            return [str];
        else {
            if (idx > 0) {
                var str1 = str.substr(0, idx);
                result.push(str1);
            }
            result.push(sep);
            var str2 = str.substr(idx + sep.length);
            var result2 = splitKeepSep(str2, sep);
            for (var i = 0; i < result2.length; i++)
                result.push(result2[i]);
        }
        return result;
    }
    var result = [str];
    for (var i = 0; i < seps.length; i++) {
        var sep = seps[i];
        var new_result = [];
        for (j = 0; j < result.length; j++) {
            var subs = splitKeepSep(result[j], sep)
            for (k = 0; k < subs.length; k++) {
                new_result.push(subs[k]);
            }
        }
        result = new_result;
    }
    return result;
}