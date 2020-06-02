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
  '13n' : 'wi wi-night-alt-snow',
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
  'Seonghwan' : '충청남도 천안시 서북구 성환읍',
  'Tokusan-ri' : '경상남도 창원시 진해구 풍호동',
  'Heunghae' : '경상북도 포항시 북구 흥해읍',
  'Reisui' : '전라남도 여수시',
  'Yeonil' : '경상북도 포항시 남구 연일읍',
  'Neietsu' : '강원도 영월군 영월읍',
  'Yongin' : '경기도 용인시 처인구',
  'Yeonggwang' : '전라남도 영광군',
  'Yeongdong' : '충청북도 영동군',
  'Eisen' : '경상북도 영천시',
  'Yeongam-guncheong' : '전라남도 영암군',
  'Yeoncheon-gun' : '경기도 연천군',
  'Gapyeong County' : '경기도 가평군',
  'Yeoju' : '경기도 여주군',
  'Yesan' : '충청남도 예산군',
  'Yecheon' : '경상북도 예천군',
  'Yangyang' : '강원도 양양군',
  'Yangsan' : '경상남도 양산시',
  'Yangju' : '경기도 양주시',
  'Yanggu' : '강원도 양구군',
  'Wŏnju' : '강원도 원주시',
  'Wanju' : '전라북도 완주군',
  'Waegwan' : '경상북도 칠곡군 왜관읍',
  'Unsal-li' : '경기도 포천시 창수면 운산리',
  'Umulmok' : '강원도 철원군',
  'Suwon-si' : '경기도 수원시',
  'Ulsan' : '울산광역시 중구 다운동',
  'Ulsan' : '울산광역시 남구 달동',
  'Ulchin' : '경상북도 울진군',
  'Uijeongbu-si' : '경기도 의정부시',
  'Tangjin' : '충청남도 당진시',
  'Taesal-li' : '충청남도 서산시',
  'Daejeon' : '대전광역시 중구 은행선화동',
  'Daejeon' : '대전광역시 중구 대흥동',
  'Daegu' : '대구광역시 달서구 도원동',
  'Daegu' : '대구광역시 중구 성내2동',
  'Boryeong' : '충청남도 보령시',
  'T’aebaek' : '강원도 태백시',
  'Taian' : '충청남도 태안군',
  'Suwon' : '경기도 수원시',
  'Suncheon' : '전라남도 순천시',
  'Sunchang-chodeunghakgyo' : '전라북도 순창군',
  'Republic of Korea' : '대한민국',
  'Seoul' : '서울특별시 종로구',
  'Seoul' : '서울특별시 중구 태평로1가',
  'Sokcho' : '강원도 속초시',
  'Yongsan' : '서울특별시 용산구',
  'Sinch’ŏn-dong' : '서울특별시 송파구 잠실2동',
  'Santyoku' : '강원도 삼척시 ',
  'Pyeongtaek' : '경기도 평택시 통복시장2로',
  'Pyeong' : '평택시 오성면',
  'Buyeo' : '충청남도 부여군',
  'Busan' : '부산광역시 동구 좌천1동',
  'Busan' : '부산광역시 중구 중앙동2가',
  'Bucheon-si' : '경기도 부천시 원미구',
  'Puan' : '전라북도 부안군',
  'Boseong' : '전라남도 보성군',
  'Beolgyo' : '전라남도 보성군 벌교읍',
  'Pohang' : '경상북도 포항시 북구',
  'Osan' : '경기도 오산시',
  'Asan' : '충청남도 아산시 온천동',
  'Okcheon' : '충청북도 옥천군',
  'Kosong' : '강원도 고성군',
  'Nonsan' : '충청남도 논산시 반월동',
  'Namyang' : '경기도 화성시 남양동',
  'Namhae' : '경상남도 남해군',
  'Naju' : '전라남도 나주시',
  'Munsan' : '경기도 파주시 문산읍',
  'Mungyeong' :'경상북도 문경시 점촌동',
  'Paju' : '경기도 파주시 금촌1동',
  'Muju' : '전라북도 무주군 무주읍',
  'Muan' :'무안군 무안읍',
  'Mokpo' :'전라남도 목포시 호남동',
  'Miryang':'경상남도 밀양시 내이동',
  'Masan' :'경상남도 창원시 마산합포구 추산동',
  'Gyeongsangbuk-do' :'경상북도 의성군 사곡면 오상리',
  'Gyeongsan-si' :'경상북도 경산시 중앙동',
  'Gyeongju':'경상북도 경주시 중부동',
  'Gyeonggi-do':'경기도 남양주시 와부읍 월문리',
  'Kwangyang':'전라남도 광양시 광양읍',
  'Gwangju':'광주광역시 북구 우산동',
  'Gwangju':'경기도 광주시 경안동',
  'Gwangju':'광주광역시 동구 대인동',
  'Gwacheon':'경기도 과천시 중앙로',
  'Kuwaegwan':'경상북도 칠곡군 약목면',
  'Kurye':'전라남도 구례군 구례읍',
  'Guri-si':'경기도 구리시 수택1동',
  'Kunwi':'경상북도 군위군 군위읍 동부리',
  'Gunsan':'전라북도 군산시 삼학동',
  'Gunpo':'경기도 군포시 금정동',
  'Kinzan':'충청남도 금산군 금산읍',
  'Gumi':'경상북도 구미시 형곡1동',
  'Goyang-si':'경기도 고양시 덕양구 주교동',
  'Goseong':'경상남도 고성군 고성읍',
  'Koryŏng':'경상북도 고령군 고령읍',
  'Gongju':'충청남도 공주시 중동',
  'Kyosai':'경상남도 거제시 거제면',
  'Koyo':'전라남도 고흥군 고흥읍',
  'Koesan':'충청북도 괴산군 괴산읍',
  "Koch'ang": '전라북도 고창군 고창읍',
  'Gimpo-si':'경기도 김포시 김포1동',
  'Kimje':'전라북도 김제시 중앙로',
  'Kimhae':'경상남도 김해시 서상동',
  'Gimcheon':'경상북도 김천시 자산동',
  'Gijang':'부산광역시 기장군 기장읍',
  'Gapyeong':'경기도 가평군 가평읍',
  'Gangwon-do':'강원도 홍천군 서석면 검산리',
  'Gangneung':'강원도 강릉시 임당동',
  'Ganghwa-gun':'인천광역시 강화군 강화읍',
  'Iksan': '전라북도 익산시 남중동',
  'Ipyang-ni': '충청북도 청주시 상당구 외평동',
  'Ipseokdong': '대구광역시 동구 입석동',
  'Inje': '강원도 인제군 인제읍',
  'Incheon': '인천광역시 중구 용유동',
  'Incheon': '인천광역시 남동구 만수1동',
  'Imsil': '전라북도 임실군 임실읍',
  'Icheon-si': '경기도 이천시 중리동',
  'Hwasun': '전라남도 화순군 화순읍',
  'Hwaseong-si': '경기도 화성시 남양동',
  'Hwapyeongri': '경기도 여주군 가남면 화평리',
  'Hwacheon': '강원도 화천군 화천읍',
  'Hŭngjŏn': '경상북도 의성군 구천면 장국리',
  'Kulgwan-dong': '경기도 안산시 단원구 대부동',
  'Hongseong': '충청남도 홍성군 홍성읍',
  'Hongch’ŏn': '강원도 홍천군 홍천읍 신장대리',
  'Hayang': '경상북도 경산시 하양읍',
  'Hamyang': '경상남도 함양군',
  'Hampyeongsaengtaegongwon': '전라남도 함평군 함평읍',
  'Haenam': '전라남도 해남군 해남읍',
  'Hadong-eup Samuso': '경상남도 하동군 하동읍' ,
  'Jungpyong': '충청북도 증평군 증평읍',
  'Chungju': '충청북도 충주시 성내.충인동',
  'Chungcheongnam-do': '충청남도 공주시 신풍면',
  'Chungcheongbuk-do': '충청북도 괴산군 연풍면 은티중리길',
  'Chuncheon': '강원도 춘천시 효자2동',
  'Chuja-ri': '경기도 광주시 오포읍',
  'Jeonju': '전라북도 전주시 완산구 경원동3가',
  'Cheongsong gun': '경상북도 청송군 청송읍',
  'Ch’ŏngnim': '경상북도 포항시 남구 청림동',
  'Cheongju-si': '충청북도 청주시 상당구 중앙동',
  'Cheonan':'충청남도 천안시 동남구 중앙동',
  'Jeollanam-do':'전라남도 장흥군 장동면',
  'Jeollabuk-do':'전라북도 임실군 관촌면',
  'Chinju':'경상남도 진주시 중앙동',
  'Chinhae':'경상남도 창원시 진해구 대천동',
  "Chinch'ŏn":'충청북도 진천군 진천읍',
  'Jinan-gun':'전라북도 진안군 진안읍',
  'Shitsukoku':'대구광역시 북구 태전2동',
  'Jeju-do':'제주특별자치도 제주시 연동',
  'Jeju City':'제주특별자치도 제주시 삼도2동',
  'Teisen':'충청북도 제천시 남현동',
  'Changwon':'경상남도 창원시 의창구 용호동',
  'Changsu':'전라북도 장수군 장수읍',
  'Changp’o':'경상남도 함안군 대산면',
  'Janggol':'충청남도 논산시 양촌면',
  'Jamwon-dong':'서울특별시 서초구 반포3동',
  'Anyang-si':'경기도 안양시 만안구 안양6동',
  'Anseong':'경기도 안성시 안성3동',
  'Ansan-si':'경기도 안산시 단원구 고잔동',
  'Andong':'경상북도 안동시 서구동',
  'Gaigeturi':'제주특별자치도 제주시 애월읍'
}
// var $LatitudeData=37.553828; //초기값 서울역 용산 id=1837055
// var $LongitudeData=126.96965;
$.ajax({
  url: "https://api.openweathermap.org/data/2.5/weather?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&id=1837055",
  dataType: 'json',
  type: 'GET',
  success: function(data){
    var $Icon = (data.weather[0].icon).substr(0.3);
    var $Temp = (data.main.temp).toFixed(1) + '℃';
    var $feelT = (data.main.feels_like).toFixed(1) + '℃';
    document.getElementById("feelTemp").innerHTML = "(체감온도 "+$feelT+")";
    var $City = data.name;
    var $Description = data.weather[0].id;
    var $hum = data.main.humidity;
    if ($hum<=0) { //습도
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (1<=$hum && $hum<=9) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/1~9.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (10<=$hum && $hum<=20) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/10~20.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (21<=$hum && $hum<=35) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/21~35.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (36<=$hum && $hum<=49) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/36~49.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (50<=$hum && $hum<=60) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/50~60.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (61<=$hum && $hum<=75) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/61~75.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (76<=$hum && $hum<=85) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/76~85.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (86<=$hum && $hum<=95) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/86~95.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }else if (100<=$hum) {
      document.getElementById("Ihum").src="./icons/made-icons/dropicon/100.png";
      document.getElementById("Currhum").innerHTML = $hum;
    }
    var wind_sp = (data.wind.speed).toFixed(1);
    if (wind_sp<4) {  //풍속
      document.getElementById("Wspeed").innerHTML = "약한 바람 <small>"+wind_sp+"m/s</small>";
    }else if (4<=wind_sp && wind_sp<9) {
      document.getElementById("Wspeed").innerHTML = "조금 강한 바람 <small>"+wind_sp+"m/s</small>";
    }else if (9<=wind_sp && wind_sp<14) {
      document.getElementById("Wspeed").innerHTML = "강한 바람 <small>"+wind_sp+"m/s</small>";
    }else if (14<=wind_sp) {
      document.getElementById("Wspeed").innerHTML = "강풍특보 <small>"+wind_sp+"m/s</small>";
    }
    var wind_deg = data.wind.deg;
    if (0<=wind_deg && wind_deg<45) { //풍향
      document.getElementById("Currwind").innerHTML = "북풍 ";
      $('.i-wind').css({
        transform: "rotate(180deg)"
      });
    }else if (45<=wind_deg && wind_deg<90) {
      document.getElementById("Currwind").innerHTML = "북동풍 ";
      $('.i-wind').css({
        transform: "rotate(225deg)"
      });
    }else if (90<=wind_deg && wind_deg<135) {
      document.getElementById("Currwind").innerHTML = "동풍 ";
      $('.i-wind').css({
        transform: "rotate(270deg)"
      });
    }else if (135<=wind_deg && wind_deg<180) {
      document.getElementById("Currwind").innerHTML = "남동풍 ";
      $('.i-wind').css({
        transform: "rotate(315deg)"
      });
    }else if (180<=wind_deg && wind_deg<225) {
      document.getElementById("Currwind").innerHTML = "남풍 ";
      $('.i-wind').css({
        transform: "rotate(0deg)"
      });
    }else if (225<=wind_deg && wind_deg<270) {
      document.getElementById("Currwind").innerHTML = "남서풍 ";
      $('.i-wind').css({
        transform: "rotate(45deg)"
      });
    }else if (270<=wind_deg && wind_deg<315) {
      document.getElementById("Currwind").innerHTML = "서풍 ";
      $('.i-wind').css({
        transform: "rotate(90deg)"
      });
    }else if (315<=wind_deg && wind_deg<360) {
      document.getElementById("Currwind").innerHTML = "북서풍 ";
      $('.i-wind').css({
        transform: "rotate(135deg)"
      });
    }else if (360<=wind_deg) {
      document.getElementById("Currwind").innerHTML = "북풍 ";
      $('.i-wind').css({
        transform: "rotate(180deg)"
      });
    }
    var wear = Math.floor(data.main.feels_like);
    if (wear<=4) {  //기온별 옷차림
      document.getElementById("tem-wear").innerHTML = "지금은 패딩, 두꺼운 코트, 목도리, 기모 제품을 입으세요!";
    }else if (5<=wear && wear<=8) {
      document.getElementById("tem-wear").innerHTML = "지금은 코트, 가죽 옷, 히트텍, 니트를 입으세요!";
    }else if (9<=wear && wear<=11) {
      document.getElementById("tem-wear").innerHTML = "지금은 자켓, 트렌치, 점퍼, 니트, 청바지를 입으세요!";
    }else if (12<=wear && wear<=16) {
      document.getElementById("tem-wear").innerHTML = "지금은 자켓, 가디건, 청자켓, 청바지, 면바지를 입으세요!";
    }else if (17<=wear && wear<=19) {
      document.getElementById("tem-wear").innerHTML = "지금은 얇은 니트, 맨투맨, 후드티, 청바지를 입으세요!";
    }else if (20<=wear && wear<=22) {
      document.getElementById("tem-wear").innerHTML = "지금은 얇은 가디건, 긴팔티, 면바지, 슬랙스를 입으세요!";
    }else if (23<=wear && wear<=27) {
      document.getElementById("tem-wear").innerHTML = "지금은 반팔, 얇은 셔츠, 반바지, 면바지를 입으세요!";
    }else if (wear>=28) {
      document.getElementById("tem-wear").innerHTML = "지금은 민소매, 반팔, 반바지, 린넨 소재를 입으세요!";
    }
    $('.CurrIcon').prepend('<i class="' + weatherIcon[$Icon] + '"></i>');
    $('.CurrTemp').prepend($Temp);
    $('.CurrCity').append(currentCity[$City]);
    $('.CurrDescription').append(weatherDescription[$Description]);
  }
})

// location forecast!!
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("이 브라우저에서는 Geolocation을 지원하지 않습니다.");
  }
}
function showPosition(position) {
  var $LatitudeData=position.coords.latitude;
  var $LongitudeData=position.coords.longitude;

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&lat="+$LatitudeData+'&lon='+$LongitudeData+" ",
    dataType: 'json',
    type: 'GET',
    success: function(data){
      var forecity = data.city.name;
      var forecast = "";
      var valtime = "";
      var chartData = [];
      //document.getElementById("tests").innerHTML=data.list.length;
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // am4core.useTheme(am4themes_kelly);
      // Create chart instance
      var castchart = am4core.create("chartforecast", am4charts.XYChart);
      castchart.colors.step = 2;

      for (var i = 3; i < data.list.length; i++) {
        forecast += '<tr>';
        valtime = data.list[i].dt_txt.split(' ');
        forecast += '<td class="foretime">'+ valtime[0].substring(5,valtime[0].length)+'<br/>'+valtime[1].substring(0,2) +'시' +'</td>';
        forecast += '<td class="foreicon">'+ '<i class="' +weatherIcon[data.list[i].weather[0].icon] + '"></i>' +'</td>';
        forecast += '<td>'+ weatherDescription[data.list[i].weather[0].id] +'</td>';
        forecast += '<td class="foretem">'+ (data.list[i].main.temp).toFixed(1)+ '℃' +'</td>';
        forecast += '</tr>';

        chartData.push({
          date: data.list[i].dt_txt.substring(5,data.list[i].dt_txt.length-3),
          fchum: data.list[i].main.humidity,
          fctemp: data.list[i].main.temp,
          fcwind: data.list[i].wind.speed
            });
      }
      $("#forecastTbody").empty();
      $("#forecastTbody").html(forecast);
      $('#forecastCITY').html(currentCity[forecity]);
      // Add data
      castchart.data = chartData;
      // Create axes
      var castdateAxis = castchart.xAxes.push(new am4charts.DateAxis());
      castdateAxis.renderer.minGridDistance = 50;
      castdateAxis.renderer.grid.template.opacity = 0;
      castdateAxis.fontSize = 12;
      // Create series
      function createAxisAndSeries(field, name, opposite) {
        var castvalueAxis = castchart.yAxes.push(new am4charts.ValueAxis());
        castvalueAxis.renderer.grid.template.opacity = 0;
        castvalueAxis.fontSize = 11;
        if(castchart.yAxes.indexOf(castvalueAxis) != 0){
          castvalueAxis.syncWithAxis = castchart.yAxes.getIndex(0);
        }
        var castseries = castchart.series.push(new am4charts.LineSeries());
        castseries.dataFields.valueY = field;
        castseries.dataFields.dateX = "date";
        castseries.strokeWidth = 2;
        castseries.yAxis = castvalueAxis;
        castseries.yAxis.min = 0;
        castseries.name = name;
        castseries.tooltipText = "{name}: [bold]{valueY}[/]";
        castseries.tensionX = 0.8;
        castseries.showOnInit = true;

        var interfaceColors = new am4core.InterfaceColorSet();
        castvalueAxis.renderer.line.strokeOpacity = 1;
        castvalueAxis.renderer.line.strokeWidth = 2;
        castvalueAxis.renderer.line.stroke = castseries.stroke;
        castvalueAxis.renderer.labels.template.fill = castseries.stroke;
        castvalueAxis.renderer.opposite = opposite;
      }
      createAxisAndSeries("fchum", "습도", false);
      createAxisAndSeries("fctemp", "기온", true);
      createAxisAndSeries("fcwind", "풍속", true);
      // Add legend
      castchart.legend = new am4charts.Legend();
      castchart.legend.position = "top";
      // Add cursor
      castchart.cursor = new am4charts.XYCursor();
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
