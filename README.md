# SE2_16_171759_L4
### Andrea Zampieri 171759

## How to test

1. Launch the server with `node scripts/index.js`
2. Open the browser on the [index](http://localhost:32123/)
3. Use the buttons to use the function such as inserting/searching/deleting employees

## Initial state and what to NOT do

* When the application is launched, there are **no** employees stored
* The user only accesses the root pah [ http://localhost:32123/ ]:  */search*,  */insert* and  */delete* are used only by the js to send requests (sent when the button is pressed)
* accessing */search*,  */insert* and  */delete* won't display the right page (in fact no HTML page, maybe some JSON data and usually a blank page)