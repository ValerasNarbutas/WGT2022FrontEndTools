console.info('Hello World!');

$(document).ready(function(){
    $("#mainAction").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log(event);
        showDate();
 
    });
});

function showDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    $("#date").text(time);
}
