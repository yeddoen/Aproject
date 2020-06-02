// 시간
setInterval("dpTime()",100);
function dpTime(){
  var now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  if (hours > 12){
    hours -= 12;
    ampm = "오후 ";
  }
  else{
    ampm = "오전 ";
  }
  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  document.getElementById("dpTime").innerHTML = ampm + hours + ":" + minutes; }
  // top button
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
      $( '.top' ).fadeIn();
    } else {
      $( '.top' ).fadeOut();
    }
  } );
  $( '.top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  } );
