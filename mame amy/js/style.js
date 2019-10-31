var helloBtn = document.getElementById( "click1" );
helloBtn.addEventListener( "click", function( event ) {
    alert( "Hello." );
}, false );

$(document).ready( function ()
{

$('#affiche').on('click',function(){
    $('.test1').css('display','block');
} );

$('#clospop').on('click',function(){
    $('.test1').css('display','none');
} );
})  ;
$(document).ready( function ()
{
$('#input1').focus('click',function(){
    $(this).css('backgroude','red');
} );
$('#inputdiv').focusin('click',function(){
    $(this).css('display','none');
} );
});
$(document).ready( function ()
{
$( "#input1" ).focus(function() {
    $( this ).css( "background", "red" );
  });
} );

$(document).ready( function ()
{
$( "#click1" ).off('click',function() {
   $(this).alert('je ne suit pas cliquable');
  });
} );
$( "p" ).click(function() {
    $( this ).slideUp();
  });
