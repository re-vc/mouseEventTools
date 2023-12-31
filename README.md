# Mouse Event Tool
This is a Node.js script for generating an XML file that simulates mouse movement events. The generated file, named mouseEvent.xml, includes XML tags representing a sequence of mouse movements, potentially in two directions.

## Dependencies
This script uses the built-in Node.js fs module for file system operations.

## How to Run
Make sure you have Node.js and npm installed on your system. Open your terminal/command prompt and navigate to the directory containing the script.

You can display usage instructions with the following command:

`npm run help`

To run the script, use the following command:

`npm run generate -- varXmin varXmax varYmin varYmax steps reverse`

varXmin and varYmin are the starting x and y coordinates of the mouse movement.
varXmax and varYmax are the ending x and y coordinates of the mouse movement.
steps is the number of intermediate points for the interpolation between the start and end points.
reverse is a flag that determines if the mouse movement should be simulated in the reverse direction as well (values: 'true'/'false').
For example:

`npm run generate -- 0.0 10.0 0.0 10.0 10 true`

This will generate a mouse movement from the point (0.0, 0.0) to (10.0, 10.0) and back, with 10 interpolated steps.

## Output
The script will generate an XML file named mouseEvent.xml in the same directory. If an error occurs, it will be printed to the console. Upon successful completion, the script prints 'Successfully wrote file'.

Each mouse movement is represented as a <MouseMovementEvent> tag in the XML file. Here is an example of what a single mouse movement event looks like:

`<MouseMovementEvent>
    <Type>3</Type>
    <X>5</X>
    <Y>5</Y>
    <Delay>1</Delay>
</MouseMovementEvent>`

## Purpose
The generated XML file simulates mouse movements which can be useful for automated tasks, such as in gaming applications. Specifically, this output can be used with Razer Synapse's Macro feature to automate certain tasks or sequences in games or other software.

Here is how you can use the generated XML data:

Once the script successfully generates the mouseEvent.xml, open this file using a text editor of your choice.
Copy the entire content of the mouseEvent.xml file.

Navigate to the Razer Synapse macro file where you want to apply these mouse movements. It will be located in a directory similar to `C:\ProgramData\Razer\Razer Central\Accounts\RZR_<Account_ID>\Emily3\Macros. Please replace <Account_ID>` with your own account ID.

Open the desired macro.xml file in a text editor.
Paste the copied content from mouseEvent.xml into the appropriate location in your macro.xml. Make sure to paste the `<MouseMovementEvent>` elements inside the <Macro> element, but not inside any other element.
Save the macro.xml file.

Refresh Razer Synapse for the changes to take effect.

Now, the mouse movements generated by this script are included in your Razer Synapse macro and can be triggered as part of that macro's actions.

This allows you to automate complex mouse movement sequences with precision, repeatability, and customization.

## Maintenance and Contributions

While the code provided here is fully functional and has been used successfully, I do not necessarily intend to maintain or update it regularly. I will, however, try to address any major issues if they come to my attention.

This being said, I'm open to contributions from the community. If you've made improvements or fixes to the code, feel free to submit a pull request.
