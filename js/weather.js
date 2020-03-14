//날씨
let weatherIcon = {
  // dayIcon
  '01d' : 'wi wi-day-sunny',
  '02d' : 'wi wi-day-cloudy',
  '03d' : 'wi wi-cloud',
  '04d' : 'wi wi-cloudy',
  '09d' : 'wi wi-day-showers',
  '10d' : 'wi wi-day-rain',
  '11d' : 'wi wi-day-lightning',
  '13d' : 'wi wi-day-snow',
  '50d' : 'wi wi-day-fog',
  // nightIcon
  '01n' : 'fas fa-moon',
  '02n' : 'wi wi-night-alt-cloudy',
  '03n' : 'wi wi-cloud',
  '04n' : 'wi wi-cloudy',
  '09n' : 'wi wi-night-alt-showers',
  '10n' : 'wi wi-night-alt-rain',
  '11n' : 'wi wi-night-alt-lightning',
  '13n' : 'wi wi wi-night-alt-snow',
  '50n' : 'wi wi-night-fog'
};
let weatherDescription = {
  '200' : '약한 비를 동반한 천둥번개',
  '201' : '비를 동반한 천둥번개',
  '202' : '폭우를 동반한 천둥번개',
  '210' : '약한 천둥번개',
  '211' : '천둥번개',
  '212' : '강한 천둥번개',
  '221' : '불규칙적인 천둥번개',
  '230' : '번개와 약한 이슬비',
  '231' : '번개를 동반한 이슬비',
  '232' : '번개와 굵은 이슬비',
  '300' : '약한 이슬비',
  '301' : '이슬비',
  '302' : '강한 이슬비',
  '310' : '가벼운 보슬비',
  '311' : '약한 비',
  '312' : '강한 보슬비',
  '313' : '소나기성 안개비',
  '314' : '강한 소나기성 안개비',
  '321' : '소나기',
  '500' : '약한 비',
  '501' : '비',
  '502' : '강한 비',
  '503' : '거센 비',
  '504' : '집중호우',
  '511' : '우박',
  '520' : '약한 소나기',
  '521' : '소나기',
  '522' : '강한 소나기',
  '531' : '불규칙적인 소나기',
  '600' : '가벼운 눈',
  '601' : '눈',
  '602' : '강한 눈',
  '611' : '진눈깨비',
  '612' : '소나기성 진눈깨비',
  '615' : '약한 비와 눈',
  '616' : '비내리고 눈',
  '620' : '약한 소나기성 눈',
  '621' : '소나기성 눈',
  '622' : '강한 소나기성 눈',
  '701' : '안개',
  '711' : '스모그',
  '721' : '옅은 안개',
  '731' : '황사',
  '761' : '먼지낌',
  '762' : '화산재',
  '771' : '돌풍',
  '781' : '토네이도',
  '800' : '맑음',
  '801' : '구름 조금',
  '802' : '구름 많음',
  '803' : '구름 적고 맑음',
  '804' : '구름 많고 흐림',
  '900' : '토네이도',
  '901' : '태풍',
  '902' : '허리케인',
  '903' : '한파',
  '904' : '열대야',
  '905' : '바람 많음',
  '906' : '우박',
  '951' : '바람 없음',
  '952' : '약한 바람',
  '953' : '산들 바람',
  '954' : '바람',
  '955' : '선선한 바람',
  '956' : '강한 바람',
  '957' : '거센 바람',
  '958' : '돌풍',
  '959' : '심한 돌풍',
  '960' : '폭풍',
  '961' : '강한 폭풍',
  '962' : '허리케인'
}
let currentCity = {
  'Yongsan' : '서울특별시 용산구',
  'Pyeongtaek-si' : '경기도 평택시',
  'Seonghwan' : '충청남도 천안시 서북구 성환읍'
}
var $LatitudeData=37.553828; //초기값 서울역
var $LongitudeData=126.969652;
$.ajax({
  url: "https://api.openweathermap.org/data/2.5/weather?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&lat="+$LatitudeData+'&lon='+$LongitudeData+" ",
  dataType: 'json',
  type: 'GET',
  success: function(data){
    var $Icon = (data.weather[0].icon).substr(0.3);
    var $Temp = Math.floor(data.main.temp) + '℃';
    var $city = data.name;
    var $Description = data.weather[0].id;
    $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] + '"></i>');
    $('.CurrTemp').prepend($Temp);
    $('.CurrCity').append(currentCity[$city]);
    $('.CurrDescription').append(weatherDescription[$Description]);
  }
})
// 위치
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
  }
}
function showPosition(position) {
  $LatitudeData=position.coords.latitude;
  $LongitudeData=position.coords.longitude;

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&lat="+$LatitudeData+'&lon='+$LongitudeData+" ",
    dataType: 'json',
    type: 'GET',
    success: function(data){
      var $Icon = (data.weather[0].icon).substr(0.3);
      var $Temp = Math.floor(data.main.temp) + '℃';
      var $city = data.name;
      var $Description = data.weather[0].id;
      $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>');
      $('.CurrTemp').html($Temp);
      $('.CurrCity').html($city);
      $('.CurrDescription').html(weatherDescription[$Description]);
    }
  })
}
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("사용자가 Geolocation 요청을 거부했습니다.")
      break;
    case error.POSITION_UNAVAILABLE:
      alert("위치 정보를 사용할 수 없습니다.")
      break;
    case error.TIMEOUT:
      alert("사용자 위치를 가져오는 요청이 시간 초과되었습니다.")
      break;
    case error.UNKNOWN_ERROR:
      alert("알 수 없는 오류가 발생했습니다.")
      break;
  }
}
