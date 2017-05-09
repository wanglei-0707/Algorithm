var mice = [
    {x: 1, y:1, time: 5000},
    {x: 2, y:2, time: 6000},
    {x: 3, y:3, time: 7000},
];
function showMouse(mouse){
    console.log('show mouse at '+ (new Date()).getSeconds());
    console.log(mouse.x, mouse.y);
    return mouse;
}
function hideMouse(mouse){
    console.log('hide mouse at '+ (new Date()).getSeconds());
    console.log(mouse);
}

var mouses = [];

function showMouses(mice){
    var time = 0;
    for(var i=0;i<mice.length;i++){
        (function(i){
            if(i === 0){
                mouses.push(showMouse(mice[i]));
            }else{
                setTimeout(function(){
                    mouses.push(showMouse(mice[i]));
                    hideMouse(mouses.shift());
                }, time);
            }
            time += mice[i].time;
        })(i);
    }
    setTimeout(function(){
        hideMouse(mouses.shift());
    }, time);
}
showMouses(mice);
