**Simple tokenizer**

Accepts a subject string and an array of seperators 
Returns an array of token strings

```javascript
var str = 'this is text. This is next text <a href="https://google.com">click here to goto google.com</a>';
var seps = [' ', '.', '"', '<', '>','/','=','\'','\n'];
//result: ["this", " ", "is", " ", "text", ".", "", " ", "This", " ", "is", " ", 
//        "next", " ", "text", " ", "<", "a", " ", "href", "=", "", """, 
//        "https:", "/", "/", "google", ".", "com", """, ">", "click", " ", "here", " ",
//        "to", " ", "goto", " ", "google", ".", "com", "<", "/", "a", ">", ""]
```
