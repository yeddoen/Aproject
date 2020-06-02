//pm25 data parsing
$(function(){
	apikey="jmlzfLiLkGfg5rfxIRmmaPMdisMIarg7qsfPJXdcrKVFguKUfmaXW8d7SQyze1vz9TFNrsAUrsLHVwy0k13NnA%3D%3D";
	realURL = "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst";
	realURL += "?serviceKey=" + apikey;
	realURL += "&numOfRows=1";
	realURL += "&pageNo=1";
	realURL += "&itemCode=PM25";
	realURL += "&dataTerm=DAILY";
	realURL += "&dataGubun=HOUR&searchCondition=WEEK";
	realURL += "&_returnType=json";

	$.ajax({
		url: realURL,
		type : 'GET',
		async:false,
		success: function(data){
			var majson=JSON.parse(data);
			//date_pm25 = majson.list[0].dataTime;
			localStorage.setItem('date', majson.list[0].dataTime);  //로컬스토리지
			localStorage.setItem('seoul', majson.list[0].seoul);
			localStorage.setItem('busan', majson.list[0].busan);
			localStorage.setItem('daegu', majson.list[0].daegu);
			localStorage.setItem('incheon', majson.list[0].incheon);
			localStorage.setItem('gwangju', majson.list[0].gwangju);
			localStorage.setItem('daejeon', majson.list[0].daejeon);
			localStorage.setItem('ulsan', majson.list[0].ulsan);
			localStorage.setItem('gyeonggi', majson.list[0].gyeonggi);
			localStorage.setItem('gangwon', majson.list[0].gangwon);
			localStorage.setItem('chungbuk', majson.list[0].chungbuk);
			localStorage.setItem('chungnam', majson.list[0].chungnam);
			localStorage.setItem('jeonbuk', majson.list[0].jeonbuk);
			localStorage.setItem('jeonnam', majson.list[0].jeonnam);
			localStorage.setItem('gyeongbuk', majson.list[0].gyeongbuk);
			localStorage.setItem('gyeongnam', majson.list[0].gyeongnam);
			localStorage.setItem('jeju', majson.list[0].jeju);
			localStorage.setItem('sejong', majson.list[0].sejong);
		}

	})
});

$(function(){
	document.getElementById("date25").innerHTML = "점검중입니다.";
	if (localStorage.getItem('date')!=null) {
		document.getElementById("date25").innerHTML = "[제공시간 : "+localStorage.getItem('date')+"]";
	}
	var localseoul=0, localbusan=0, localdaegu=0, localincheon=0, localgwangju=0, localdaejeon=0,
	localulsan=0, localgyeonggi=0, localgangwon=0, localchungbuk=0, localchungnam=0, localjeonbuk=0,
	localjeonnam=0, localgyeongbuk=0, localgyeongnam=0, localjeju=0, localsejong=0;

	localseoul=localStorage.getItem('seoul');
	localbusan=localStorage.getItem('busan');
	localdaegu=localStorage.getItem('daegu');
	localincheon=localStorage.getItem('incheon');
	localgwangju=localStorage.getItem('gwangju');
	localdaejeon=localStorage.getItem('daejeon');
	localulsan=localStorage.getItem('ulsan');
	localgyeonggi=localStorage.getItem('gyeonggi');
	localgangwon=localStorage.getItem('gangwon');
	localchungbuk=localStorage.getItem('chungbuk');
	localchungnam=localStorage.getItem('chungnam');
	localjeonbuk=localStorage.getItem('jeonbuk');
	localjeonnam=localStorage.getItem('jeonnam');
	localgyeongbuk=localStorage.getItem('gyeongbuk');
	localgyeongnam=localStorage.getItem('gyeongnam');
	localjeju=localStorage.getItem('jeju');
	localsejong=localStorage.getItem('sejong');
	//kakaomaps api
	var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
			center : new kakao.maps.LatLng(35.9683, 127.6358), // 지도의 중심좌표
			level : 13 // 지도의 확대 레벨
	});
	var positions = [
	{
	stationName:"서울",
	latlng: new kakao.maps.LatLng(37.564214, 127.001699),
	data: localseoul
	},{
	stationName:"부산",
	latlng: new kakao.maps.LatLng(35.137922, 129.055628),
	data: localbusan
	},{
	stationName:"대구",
	latlng: new kakao.maps.LatLng(35.871389, 128.601389),
	data: localdaegu
	},
	{
	stationName:"인천",
	latlng: new kakao.maps.LatLng(37.45611244480607, 126.70520113475625),
	data: localincheon
	},
	{
	stationName:"광주",
	latlng: new kakao.maps.LatLng(35.160146853004946, 126.85148719291763),
	data: localgwangju
	},
	{
	stationName:"대전",
	latlng: new kakao.maps.LatLng(36.350833, 127.385),
	data: localdaejeon
	},
	{
	stationName:"울산",
	latlng: new kakao.maps.LatLng(35.538333, 129.311389),
	data: localulsan
	},
	{
	stationName:"경기",
	latlng: new kakao.maps.LatLng(37.22009836187118, 127.03557004628966),
	data: localgyeonggi
	},
	{
	stationName:"강원",
	latlng: new kakao.maps.LatLng(37.830412, 128.226071),
	data: localgangwon
	},
	{
	stationName:"충북",
	latlng: new kakao.maps.LatLng(36.87142141027084, 127.75230436036603),
	data: localchungbuk
	},
	{
	stationName:"충남",
	latlng: new kakao.maps.LatLng(36.540290086349295, 126.80011104238886),
	data: localchungnam
	},
	{
	stationName:"전북",
	latlng: new kakao.maps.LatLng(35.7167483975705, 127.13108245059698),
	data: localjeonbuk
	},
	{
	stationName:"전남",
	latlng: new kakao.maps.LatLng(34.653194120725495, 126.79637123492203),
	data: localjeonnam
	},
	{
	stationName:"경북",
	latlng: new kakao.maps.LatLng(36.66578572680499, 129.0697304201675),
	data: localgyeongbuk
	},
	{
	stationName:"경남",
	latlng: new kakao.maps.LatLng(35.25, 128.25),
	data: localgyeongnam
	},
	{
	stationName:"제주",
	latlng: new kakao.maps.LatLng(33.366667, 126.533333),
	data: localjeju
	},
	{
	stationName:"세종",
	latlng: new kakao.maps.LatLng(36.48041517922756, 127.28893996997017),
	data: localsejong
	}
	];

	for (var i = 0; i < positions.length; i ++) {
			// 마커를 생성합니다
			if (0<=positions[i].data && positions[i].data<=15) {
				var marker = new kakao.maps.Marker({
						map: map, // 마커를 표시할 지도
						position: positions[i].latlng, // 마커의 위치
						image: new kakao.maps.MarkerImage('./file/location/location좋음.png', new kakao.maps.Size(60, 70))
				});
				 }else if (16<=positions[i].data && positions[i].data<=35) {
					 var marker = new kakao.maps.Marker({
							 map: map, // 마커를 표시할 지도
							 position: positions[i].latlng, // 마커의 위치
							 image: new kakao.maps.MarkerImage('./file/location/location보통.png', new kakao.maps.Size(60, 70))
					 });
				 }else if (36<=positions[i].data && positions[i].data<=75) {
					 var marker = new kakao.maps.Marker({
							 map: map, // 마커를 표시할 지도
							 position: positions[i].latlng, // 마커의 위치
							 image: new kakao.maps.MarkerImage('./file/location/location나쁨.png', new kakao.maps.Size(60, 70))
					 });
				 }else if (76<=positions[i].data) {
					 var marker = new kakao.maps.Marker({
							 map: map, // 마커를 표시할 지도
							 position: positions[i].latlng, // 마커의 위치
							 image: new kakao.maps.MarkerImage('./file/location/location매우나쁨.png', new kakao.maps.Size(60, 70))
					 });
				 }else {
					 var marker = new kakao.maps.Marker({
							 map: map, // 마커를 표시할 지도
							 position: positions[i].latlng, // 마커의 위치
							 image: new kakao.maps.MarkerImage('./file/location/location좋음.png', new kakao.maps.Size(60, 70))
					 });
				 }
				 if (positions[i].data=="null") {
				 	positions[i].data=0;
				 }
			var infowindow = new kakao.maps.InfoWindow({
					content: positions[i].stationName+" : "+positions[i].data+"㎍/㎥" // 인포윈도우에 표시할 내용
			});
			kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
			kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
	}
	function makeOverListener(map, marker, infowindow) {
			return function() {
					infowindow.open(map, marker);
			};
	}
	function makeOutListener(infowindow) {
			return function() {
					infowindow.close();
			};
	}
});
//search
$("#myInput").on("keyup", function myFunction() {
		var value = $(this).val();
		$("#myTable tr td").filter(function () {
				$(this).toggle($(this).text().indexOf(value) > -1)
		});
} );
$("#myTable tr td").click(function(){
var text = $(this).text();
document.getElementById('myInput').setAttribute("value",text);
});
//name Search
function SearchNameWeather() {
	var $NameData = document.getElementById("myInput").value;
	var krID;

	if ($NameData=="서울 종로") {
		krID = 1835847; currentCity = {'Seoul' : '서울특별시 종로구'};
	}else if ($NameData=="서울 용산") {krID = 1837055;}else if ($NameData=="서울 중구") {krID = 1835848;
	}else if ($NameData=="서울 잠실") {krID = 1837217;}else if ($NameData=="서울 서초") {krID = 1846735;
	}else if ($NameData=="경기 안양") {krID = 1846898;}else if ($NameData=="경기 안성") {krID = 1846912;
	}else if ($NameData=="경기 안산") {krID = 1846918;}else if ($NameData=="경기 여주") {krID = 1843880;
	}else if ($NameData=="경기 화성") {krID = 1843847;}else if ($NameData=="경기 이천") {krID = 1843702;
	}else if ($NameData=="경기 가평") {krID = 1843082;}else if ($NameData=="경기 김포") {krID = 1842936;
	}else if ($NameData=="경기 고양") {krID = 1842485;}else if ($NameData=="경기 군포") {krID = 1842030;
	}else if ($NameData=="경기 구리") {krID = 1841988;}else if ($NameData=="경기 남양주") {krID = 1841610;
	}else if ($NameData=="경기 과천") {krID = 1841909;}else if ($NameData=="경기 파주") {krID = 1840898;}
	else if ($NameData=="경기 오산") {krID = 1839652;
	}else if ($NameData=="경기 부천") {krID = 1838716;}else if ($NameData=="경기 평택") {krID = 1838343;
	}else if ($NameData=="경기 수원") {krID = 1835553;}else if ($NameData=="경기 의전부") {krID = 1833788;
	}else if ($NameData=="경기 포천") {krID = 1833581;}else if ($NameData=="경기 양주") {krID = 1832847;
	}else if ($NameData=="경기 연천") {krID = 1832697;}else if ($NameData=="경기 용인") {krID = 1832427;
	}else if ($NameData=="경기 광주") {krID = 1841810; currentCity = {'Gwangju' : '경기도 광주시 경안동'};}
	else if ($NameData=="인천 중구") {krID = 1843561; currentCity = {'Incheon' : '인천광역시 중구 용유동'};
	}else if ($NameData=="인천 남동구") {krID = 1843564; currentCity = {'Incheon' : '인천광역시 남동구 만수1동'};
	}else if ($NameData=="인천 강화") {krID = 1843163;}else if ($NameData=="전북 순창") {krID = 1835650;
	}else if ($NameData=="대전 은행동") {krID = 1835224;currentCity = {'Daejeon' : '대전광역시 중구 은행선화동'};
	}else if ($NameData=="대전 대흥동") {krID = 1835235; currentCity = {'Daejeon' : '대전광역시 중구 대흥동'};
	}else if ($NameData=="전북 전주") {krID = 1845457;}else if ($NameData=="전북 완주") {krID = 1833466;
	}else if ($NameData=="전북 부안") {krID = 1838722;}else if ($NameData=="전북 무주") {krID = 1840942;
	}else if ($NameData=="전북 군산") {krID = 1842025;}else if ($NameData=="전북 고창") {krID = 1842859;
	}else if ($NameData=="전북 김제") {krID = 1842939;}else if ($NameData=="전북 익산") {krID = 1843491;
	}else if ($NameData=="전북 임실") {krID = 1843585;}else if ($NameData=="전북 진안") {krID = 1846114;
	}else if ($NameData=="전북 장수") {krID = 1846355;}else if ($NameData=="전남 해남") {krID = 1844751;
	}else if ($NameData=="전남 장흥") {krID = 1845788;}else if ($NameData=="전남 함평") {krID = 1844539;
	}else if ($NameData=="전남 화순") {krID = 1843841;}else if ($NameData=="부산 기장") {krID = 1842966;}
	else if ($NameData=="광주 북구") {krID = 1841808; currentCity = {'Gwangju' : '광주광역시 북구 우산동'};
	}else if ($NameData=="광주 동구") {krID = 1841811; currentCity = {'Gwangju' : '광주광역시 동구 대인동'};
	}else if ($NameData=="전남 고흥") {krID = 1842781;}else if ($NameData=="전남 구례") {krID = 1841976;
	}else if ($NameData=="전남 광양") {krID = 1841775;}else if ($NameData=="전남 목포") {krID = 1841066;
	}else if ($NameData=="전남 보성") {krID = 1838740;}else if ($NameData=="전남 나주") {krID = 1840536;
	}else if ($NameData=="전남 여수") {krID = 1832157;}else if ($NameData=="전남 순천") {krID = 1835648;
	}else if ($NameData=="부산 중구") {krID = 1838524;currentCity = {'Busan' : '부산광역시 중구 중앙동2가'};
	}else if ($NameData=="부산 동구") {krID = 1838519;currentCity = {'Busan' : '부산광역시 동구 좌천1동'};
	}else if ($NameData=="대구 중구") {krID = 1835329; currentCity = {'Daegu' : '대구광역시 중구 성내2동'};
	}else if ($NameData=="대구 동구") {krID = 1843502;}else if ($NameData=="대구 북구") {krID = 1846149;
	}else if ($NameData=="대구 달서구") {krID = 1835327;currentCity = {'Daegu' : '대구광역시 달서구 도원동'};
	}else if ($NameData=="강원 강릉") {krID = 1843137;}else if ($NameData=="강원 태백") {krID = 1835515;
	}else if ($NameData=="강원 인제") {krID = 1843542;}else if ($NameData=="강원 춘천") {krID = 1845136;
	}else if ($NameData=="강원 고성") {krID = 1840179;}else if ($NameData=="강원 영월") {krID = 1832257;
	}else if ($NameData=="강원 양양") {krID = 1832809;}else if ($NameData=="강원 양구") {krID = 1832909;
	}else if ($NameData=="강원 원주") {krID = 1833105;}else if ($NameData=="강원 철원") {krID = 1833702;
	}else if ($NameData=="강원 태백") {krID = 1835515;}else if ($NameData=="강원 속초") {krID = 1836553;
	}else if ($NameData=="강원 삼척") {krID = 1838069;}else if ($NameData=="경북 경주") {krID = 1841603;}
	else if ($NameData=="강원 홍천") {krID = 1844191;}else if ($NameData=="강원 화천") {krID = 1844045;
	}else if ($NameData=="경북 의성") {krID = 1844088;}else if ($NameData=="경북 경산") {krID = 1844308;
	}else if ($NameData=="경북 안동") {krID = 1846986;}else if ($NameData=="경북 포항") {krID = 1839071;
	}else if ($NameData=="경북 영천") {krID = 1832617;}else if ($NameData=="경북 예천") {krID = 1832798;
	}else if ($NameData=="경북 칠곡") {krID = 1833514;}else if ($NameData=="경북 울진") {krID = 1833763;
	}else if ($NameData=="경북 문경") {krID = 1840886;}else if ($NameData=="경북 의성") {krID = 1841597;
	}
	else if ($NameData=="경북 군위") {krID = 1842016;
	}else if ($NameData=="경북 구미") {krID = 1842225;}else if ($NameData=="경북 고령") {krID = 1842559;
	}else if ($NameData=="경북 김천") {krID = 1842944;}else if ($NameData=="경북 청송") {krID = 1845519;
	}else if ($NameData=="경남 고성") {krID = 1842518;}else if ($NameData=="경남 밀양") {krID = 1841149;
	}else if ($NameData=="경남 남해") {krID = 1840454;}else if ($NameData=="경남 양산") {krID = 1832828;
	}else if ($NameData=="경남 거제") {krID = 1842754;}else if ($NameData=="경남 창원") {krID = 1846326;
	}else if ($NameData=="경남 진주") {krID = 1846052;}else if ($NameData=="경남 하동") {krID = 1844788;}
	else if ($NameData=="경남 함양") {krID = 1844533;}else if ($NameData=="경남 김해") {krID = 1842943;
	}else if ($NameData=="경남 함안") {krID = 1846430;}else if ($NameData=="충북 괴산") {krID = 1845106;
	}else if ($NameData=="충북 충주") {krID = 1845033;}else if ($NameData=="충북 진천") {krID = 1846095;
	}else if ($NameData=="충북 제천") {krID = 1846278;}else if ($NameData=="충북 영동") {krID = 1832566;
	}else if ($NameData=="충북 옥천") {krID = 1839873;}else if ($NameData=="충북 청주") {krID = 1845604;
	}else if ($NameData=="충북 증평") {krID = 1844954;}else if ($NameData=="충남 예산") {krID = 1832771;
	}
	else if ($NameData=="충남 천안") {krID = 1845759;}else if ($NameData=="충남 서산") {krID = 1835096;
	}else if ($NameData=="충남 성환") {krID = 1836208;}else if ($NameData=="충남 논산") {krID = 1840211;
	}else if ($NameData=="충남 당진") {krID = 1834885;}else if ($NameData=="충남 공주") {krID = 1842616;
	}else if ($NameData=="충남 홍성") {krID = 1844174;}else if ($NameData=="충남 금산") {krID = 1842153;
	}else if ($NameData=="충남 아산") {krID = 1839726;}else if ($NameData=="충남 부여") {krID = 1838508;
	}else if ($NameData=="충남 태안") {krID = 1835518;}else if ($NameData=="충남 보령") {krID = 1835447;
	}else if ($NameData=="제주 삼도동") {krID = 1846266;}else if ($NameData=="제주 애월") {krID = 1847050;}
	else if ($NameData=="제주 연동") {krID = 1846265;}
	else if ($NameData=="울산 중구") {krID = 1833742;currentCity = {'Ulsan' : '울산광역시 중구 다운동'};}
	else if ($NameData=="울산 남구") {krID = 1833747;currentCity = {'Ulsan' : '울산광역시 남구 달동'};}
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&id="+krID,
		dataType: 'json',
		type: 'GET',
		success: function(data){
			var $Icon = (data.weather[0].icon).substr(0.3);
			var $Temp = (data.main.temp).toFixed(1) + '℃';
			var $feelT = (data.main.feels_like).toFixed(1) + '℃';
			document.getElementById("feelTemp").innerHTML = "(체감온도 "+$feelT+")";
			var $city = data.name;
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
			if (wear<=4) {
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
			$('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>');
			$('.CurrTemp').html($Temp);
			$('.CurrCity').html(currentCity[$city]||$city);
			$('.CurrDescription').html(weatherDescription[$Description]);
		}
	})
}
//parse-server
Parse.serverURL = 'https://parseapi.back4app.com';  //Server URL
Parse.initialize(
	'3UWKUkNz8AG4kUXJkrPS2Mx9PyAH7fsDb6zzzMmm', // Application ID
	'VlNWxxTAOoN9XMMb7Ie7V9VSkTitDneJA9JrVWei', // Javascript key
	'0R0NyNF8L4hIwfbBzJE0duPxo6mkSsI73N5LRCRu'  //Master key
);

let MyCurrData = Parse.Object.extend('crawl_data'); //past_data의 하위클래스
let query = new Parse.Query(MyCurrData);

//query.equalTo("date", "2020-04-01 01:00"); //key,value 일치하는거 찾아옴
query.limit(72);
query.addDescending("date"); //날짜 내림차순 정렬
query.find().then(function(results) {
	if (typeof document !== 'undefined'){
		//dataTable
		var testList = new Array();
		for (var i = 0; i < results.length; i++) {
			var data = new Array();

			if (`${results[i].get("date")}`=="undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("date")}`);
			}
			if (`${results[i].get("tem")}`=="undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("tem")}`+"<small>℃</small>");
			}
			if (`${results[i].get("rain")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("rain")}`+"<small>mm</small>");
			}
			if (`${results[i].get("win_f")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("win_f")}`+"<small>m/s</small>");
			}
			if (`${results[i].get("win_d")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				var pre_d = `${results[i].get("win_d")}`;
				if (0<=pre_d && pre_d<45) {
					data.push("<i class='fas fa-location-arrow fa-rotate-135'></i>");
				}else if (45<=pre_d && pre_d<90) {
					data.push("<i class='fas fa-location-arrow fa-rotate-180'></i>");
				}else if (90<=pre_d && pre_d<135) {
					data.push("<i class='fas fa-location-arrow fa-rotate-225'></i>");
				}else if (135<=pre_d && pre_d<180) {
					data.push("<i class='fas fa-location-arrow fa-rotate-270'></i>");
				}else if (180<=pre_d && pre_d<225) {
					data.push("<i class='fas fa-location-arrow fa-rotate-315'></i>");
				}else if (225<=pre_d && pre_d<270) {
					data.push("<i class='fas fa-location-arrow'></i>");
				}else if (270<=pre_d && pre_d<315) {
					data.push("<i class='fas fa-location-arrow fa-rotate-45'></i>");
				}else if (315<=pre_d && pre_d<360) {
					data.push("<i class='fas fa-location-arrow fa-rotate-90'></i>");
				}else if (360<=pre_d) {
					data.push("<i class='fas fa-location-arrow fa-rotate-135'></i>");
				}else if (pre_d < 0) {
						data.push("<span class='badge badge-pill badge-light'>miss</span>");
				}
			}
			if (`${results[i].get("hum")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("hum")}`+"<small>%</small>");
			}
			if (`${results[i].get("grade")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				var pre_grade = `${results[i].get("grade")}`;
				pre_grade = pre_grade.replace("['",""); pre_grade = pre_grade.replace("']","");

				if (`${results[i].get("charge_flag")}`=="True") {  //점검중인 경우
					if(pre_grade == "좋음"){
						data.push("<span class='badge badge-pill badge-light'>좋음</span>");
					}else if (pre_grade == "보통") {
						data.push("<span class='badge badge-pill badge-light'>보통</span>");
					}else if (pre_grade == "나쁨") {
						data.push("<span class='badge badge-pill badge-light'>나쁨</span>");
					}else if (pre_grade == "매우나쁨") {
						data.push("<span class='badge badge-pill badge-light'>매우나쁨</span>");
					}else if (pre_grade == "점검중") {
						data.push("<span class='badge badge-pill badge-light'>점검중</span>");
					}
		    }else {
					if(pre_grade == "좋음"){
						data.push("<span class='badge badge-pill badge-info'>좋음</span>");
					}else if (pre_grade == "보통") {
						data.push("<span class='badge badge-pill badge-success'>보통</span>");
					}else if (pre_grade == "나쁨") {
						data.push("<span class='badge badge-pill badge-warning'>나쁨</span>");
					}else if (pre_grade == "매우나쁨") {
						data.push("<span class='badge badge-pill badge-danger'>매우나쁨</span>");
					}else if (pre_grade == "점검중") {
						data.push("<span class='badge badge-pill badge-light'>점검중</span>");
					}
		    }
			}
			if (`${results[i].get("pm10")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("pm10")}`);
			}
			if (`${results[i].get("pm25")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("pm25")}`);
			}
			if (`${results[i].get("o3")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("o3")}`);
			}
			if (`${results[i].get("no2")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("no2")}`);
			}
			if (`${results[i].get("co")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("co")}`);
			}
			if (`${results[i].get("so2")}` == "undefined") {	//
				data.push("<span class='badge badge-pill badge-light'>점검중</span>");
			}else {
				data.push(`${results[i].get("so2")}`);
			}

			testList.push(data);
		}
		$(function(){
			$('#total-table').DataTable({
				data: testList,
				"language": {
						"emptyTable": "데이터가 없어요.",
						"lengthMenu": " _MENU_개",
						"info": "현재 _START_ - _END_ / _TOTAL_건",
						"infoEmpty": "데이터 0",
						"infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
						"search": "검색: ",
						"zeroRecords": "일치하는 데이터가 없어요.",
						"loadingRecords": "로딩중...",
						"processing":     "잠시만 기다려 주세요...",
						"paginate": {
								"next": "다음",
								"previous": "이전"
						}
				},
				"order": [[0,"desc"]],
				"columnDefs": [{
						"targets": '_all',
						"createdCell": function (td, cellData, rowData, row, col) {
								$(td).css('padding-left', '1px');
								$(td).css('padding-right', '1px');
								$(td).css('padding-top', '15px');
								$(td).css('padding-bottom', '15px');
						}
				}],
			});
		});
	}
	console.log('ParseObjects found:', results);
}, function(error) {
	if (typeof document !== 'undefined') document.write(`Error while fetching ParseObjects: ${JSON.stringify(error)}`);
	console.error('Error while fetching ParseObjects', error);
});
