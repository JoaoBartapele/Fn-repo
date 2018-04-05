// Wait for element On JQUERY

var waitForElement = function (selector, callback) {
   if ($(selector).length) {
       callback();
   } else {
       setTimeout(function () {
           waitForElement(selector, callback);
       }, 100);
   }
};
