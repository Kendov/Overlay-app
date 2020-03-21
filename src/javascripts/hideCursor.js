//Receive event from main.js for hide the cursor when the app is not on focus

const { ipcRenderer } = require('electron');


ipcRenderer.on('call-cursor-function', (event, arg) => {
    

    if(arg == true){
        document.getElementById('bodyCover').style.cursor = "none";
        
        //hide and show menus
        document.getElementById('tbar').style.transform = "translateY(-100px)";
        document.getElementById('menu').style.transform = "translateY(100px)";
        console.log("Cursor Disable.");
    }
    else if (arg == false){
        document.getElementById('bodyCover').style.cursor = "auto";
        
        //hide and show menus
        document.getElementById('tbar').style.transform = "translateY(0px)";
        document.getElementById('menu').style.transform = "translateY(0px)";
        console.log("Cursor Enable.")
    }
    else{
        console.log("can`t find value: function|hideCursor.js")
    }




})
