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
//sparkline
$('#lineChart-1').sparkline([102,109,120,99,110,80,87,74,102,109,120,99,110,80,87,74], {
  type: 'line',
  height: '100',
  width: '250',
  lineWidth: '2',
  lineColor: '#177dff',
  fillColor: 'rgba(23, 125, 255, 0.2)'
});
$('#lineChart-2').sparkline([100,109,120,99,50,80,100,102,102,102,120,99,110,86,110,120], {
  type: 'line',
  height: '100',
  width: '250',
  lineWidth: '2',
  lineColor: '#177dff',
  fillColor: 'rgba(23, 125, 255, 0.2)'
});
$('#lineChart-3').sparkline([100,100,110,60,100,100,70,80,100,130,140], {
  type: 'line',
  height: '100',
  width: '250',
  lineWidth: '2',
  lineColor: '#177dff',
  fillColor: 'rgba(23, 125, 255, 0.2)'
});
$('#lineChart-4').sparkline([80,60,80,99,100,100,100,102,95,80,75,70,76,86,110,101], {
  type: 'line',
  height: '100',
  width: '250',
  lineWidth: '2',
  lineColor: '#177dff',
  fillColor: 'rgba(23, 125, 255, 0.2)'
});
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
// //SameSite
// document.cookie = "safeCookie1=foo; SameSite=Lax";
// document.cookie = "sateCookie2=foo";
// document.cookie = "crossCookie=bar; SameSite=None; Secure";
