const fs = require('fs');

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function writeToFile(varXmin, varXmax, varYmin, varYmax, steps, reverse) {
    let xmlContent = '';
    for (let i = 0; i <= steps; i++) {
        let t = i / steps;
        let varX = Math.round(lerp(varXmin, varXmax, t));
        let varY = Math.round(lerp(varYmin, varYmax, t));

        xmlContent +=
`<MouseMovementEvent>
    <Type>3</Type>
    <X>${varX}</X>
    <Y>${varY}</Y>
    <Delay>1</Delay>
</MouseMovementEvent>`;
    }

    if (reverse) {
        for (let i = steps; i >= 0; i--) {
            let t = i / steps;
            let varX = Math.round(lerp(varXmin, varXmax, t));
            let varY = Math.round(lerp(varYmin, varYmax, t));

            xmlContent +=
`<MouseMovementEvent>
    <Type>3</Type>
    <X>${varX}</X>
    <Y>${varY}</Y>
    <Delay>1</Delay>
</MouseMovementEvent>`;
        }
    }

    fs.writeFile('mouseEvent.xml', xmlContent, (err) => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
}

if (process.argv.includes('--help')) {
    console.log(`
Usage: node script.js varXmin varXmax varYmin varYmax steps reverse

Arguments:
  varXmin  Starting x-coordinate of the mouse movement.
  varXmax  Ending x-coordinate of the mouse movement.
  varYmin  Starting y-coordinate of the mouse movement.
  varYmax  Ending y-coordinate of the mouse movement.
  steps    Number of intermediate points for interpolation.
  reverse  Simulate mouse movement in reverse direction. Use 'true' for reverse, 'false' for no reverse.

Example: node script.js 0.0 10.0 0.0 10.0 10 true
This command simulates a mouse movement from (0.0, 0.0) to (10.0, 10.0) and back, with 10 interpolated steps.
    `);
    process.exit(0);
}

let varXmin = parseFloat(process.argv[2]);
let varXmax = parseFloat(process.argv[3]);
let varYmin = parseFloat(process.argv[4]);
let varYmax = parseFloat(process.argv[5]);
let steps = parseInt(process.argv[6]) - 1; // Number of steps for interpolation
let reverse = process.argv[7] === 'true'; // Reverse flag (true/false)

writeToFile(varXmin, varXmax, varYmin, varYmax, steps, reverse);
