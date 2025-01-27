//1
function LoggerDecorator(logMsg) {
    function Logger(target) {
        console.log(logMsg);
        // console.log(target);
    }
    return Logger;
}
function Template(template, elementId) {
    return function (target) {
        var user = new target();
        var container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = template;
        }
    };
}
// @LoggerDecorator('This is custom Logger...')    //called at runtime
Template('<p>This is dynamic paragraph</p>', 'container');
var User = /** @class */ (function () {
    function User() {
        this.name = 'Aishwarya';
        this.age = 21;
        console.log("User class constructor called...");
    }
    return User;
}());
var user = new User();
