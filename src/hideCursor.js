//Receive event from main.js for hide the cursor when the app is not on focus

const { ipcRenderer } = require('electron');
//let cursorEnable = document.getElementById('bodyCover').style.cursor;

ipcRenderer.on('call-cursor-function', (event, arg) => {
    //console.log(event, arg);

    if(arg == true){
        document.getElementById('bodyCover').style.cursor = "none";
        console.log("Cursor Disable.")
    }
    else if (arg == false){
        document.getElementById('bodyCover').style.cursor = "auto";
        console.log("Cursor Enable.")
    }
    else{
        console.log("can`t find value: function|hideCursor.js")
    }




})
