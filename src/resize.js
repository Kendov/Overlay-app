document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};


function myFunction(){
    document.getElementById('player').height = window.innerHeight;
    document.getElementById('player').width = window.innerWidth;

    //console.log(window.innerHeight, window.innerWidth);
}


        
    