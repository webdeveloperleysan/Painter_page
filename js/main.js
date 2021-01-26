$(function () {


//ArcticModal init
    $('#exampleModal').arcticmodal();


    var options =  {
        srcNode: 'img',             // grid items (class, node)
        margin: '15px',             // margin in pixel
        width: '240px',             // grid item width in pixel
        max_width: '',              // dynamic gird item width
        resizable: true,            // re-layout if window resize
        transition: 'all 0.5s ease' // support transition for CSS3
    };
    $('.grid').gridify(options);

});


// Sticky nav

$(window).scroll(function() {
if ($(this).scrollTop() > 500){
$('nav').addClass("sticky");
}
else{
$('nav').removeClass("sticky");
}


});


function check() {
var submit = document.getElementsByName('submit')[0];
if (document.getElementById('politics').checked)
submit.disabled = '';
else
submit.disabled = 'disabled';
}


// Animation init

 new WOW().init();


