const robot = require("robotjs");

console.log('node robot test running, start in 3 seconds');

robot.setKeyboardDelay(500);
const screenSize = robot.getScreenSize();

function testRunning() {
    robot.keyTap(Math.random() < .5 ? 'pageup' : 'pagedown', ['control'])
    
    if(Math.random() < .3) {
        robot.keyTap(Math.random() < .5 ? 'pageup' : 'pagedown', ['alt']);
    }

    robot.moveMouseSmooth(Math.random() * screenSize.width, Math.random() * screenSize.height);
}

setTimeout(() => {
    setInterval(testRunning, 5000);
}, 3000);