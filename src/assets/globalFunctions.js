function parseTwitterDate(tdate) {
    var system_date = new Date(Date.parse(tdate));
    var user_date = new Date();
    if (K.ie) {
        system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    }
    var diff = Math.floor((user_date - system_date) / 1000);
    //if (diff <= 1) {return "just now";}
    if (diff < 20) {return diff + "s";}
    //if (diff < 40) {return "half a minute ago";}
    //if (diff < 60) {return "less than a minute ago";}
    //if (diff <= 90) {return "one minute ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + "m";}
    if (diff <= 5400) {return "1h";}
    if (diff <= 86400) {return Math.round(diff / 3600) + "h";}
    if (diff <= 129600) {return "1d";}
    if (diff < 604800) {return Math.round(diff / 86400) + "d";}
    if (diff <= 777600) {return "1w";}
    //return "on " + system_date; //TODO: CHANGE FORMAT TO "19 Oct" for example
    return "fixMe";
}

// from http://widgets.twimg.com/j/1/widget.js
var K = function () {
    var a = navigator.userAgent;
    return {
        ie: a.match(/MSIE\s([^;]*)/)
    }
}();

function parseNumbersToString (number, decimalPlaces = 1) {
    let letter = "";
    decimalPlaces = Math.pow(10, decimalPlaces);
    const abbrev = ["K", "M", "B", "T"];

    for (let i = abbrev.length - 1; i >= 0; i--) {
        const size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.floor((number * decimalPlaces) / size) / decimalPlaces;

      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      letter = abbrev[i];
      break;
    }
  }

  return number.toString() + letter;
}

module.exports = {
    parseTwitterDateFunc: parseTwitterDate,
    parseTwitterNumbersToStringFunc: parseNumbersToString
};