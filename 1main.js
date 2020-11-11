var video = $('<video />', {
    id: 'video',
    src: 'https://www.youtube.com/watch?v=Qe_F9CxFpmw',
    type: 'video/mp4',
    controls: true
});

console.log("btn1")
function videoShow(){
    console.log("hello")
    $("body").appendTo(video)
}

console.log("btn2")