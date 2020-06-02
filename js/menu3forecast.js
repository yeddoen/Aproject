/////forecast

var foreID = 1837055; //초기값 용산 서울역 lat=37.553828&lon=126.969652
$.ajax({
  url: "https://api.openweathermap.org/data/2.5/forecast?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&id="+foreID,
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
    $("#forecastTbody").append(forecast);
    $('#forecastCITY').append(currentCity[forecity]);
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
////search2
$("#myInput2").on("keyup", function myFunction() {
    var value = $(this).val();
    $("#myTable2 tr td").filter(function () {
        $(this).toggle($(this).text().indexOf(value) > -1)
    });
} );
$("#myTable2 tr td").click(function(){
var text = $(this).text();
document.getElementById('myInput2').setAttribute("value",text);
});
//name Search2
function SearchNameWeather2() {
  var $NameforecastData = document.getElementById("myInput2").value;
  var krforecastID;

  if ($NameforecastData=="서울 종로") {
    krforecastID = 1835847; currentCity = {'Seoul' : '서울특별시 종로구'};
  }else if ($NameforecastData=="서울 용산") {krforecastID = 1837055;}else if ($NameforecastData=="서울 중구") {krforecastID = 1835848;
  }else if ($NameforecastData=="서울 잠실") {krforecastID = 1837217;}else if ($NameforecastData=="서울 서초") {krforecastID = 1846735;
  }else if ($NameforecastData=="경기 안양") {krforecastID = 1846898;}else if ($NameforecastData=="경기 안성") {krforecastID = 1846912;
  }else if ($NameforecastData=="경기 안산") {krforecastID = 1846918;}else if ($NameforecastData=="경기 여주") {krforecastID = 1843880;
  }else if ($NameforecastData=="경기 화성") {krforecastID = 1843847;}else if ($NameforecastData=="경기 이천") {krforecastID = 1843702;
  }else if ($NameforecastData=="경기 가평") {krforecastID = 1843082;}else if ($NameforecastData=="경기 김포") {krforecastID = 1842936;
  }else if ($NameforecastData=="경기 고양") {krforecastID = 1842485;}else if ($NameforecastData=="경기 군포") {krforecastID = 1842030;
  }else if ($NameforecastData=="경기 구리") {krforecastID = 1841988;}else if ($NameforecastData=="경기 남양주") {krforecastID = 1841610;
  }else if ($NameforecastData=="경기 과천") {krforecastID = 1841909;}else if ($NameforecastData=="경기 파주") {krforecastID = 1840898;}
  else if ($NameforecastData=="경기 오산") {krforecastID = 1839652;
  }else if ($NameforecastData=="경기 부천") {krforecastID = 1838716;}else if ($NameforecastData=="경기 평택") {krforecastID = 1838343;
  }else if ($NameforecastData=="경기 수원") {krforecastID = 1835553;}else if ($NameforecastData=="경기 의전부") {krforecastID = 1833788;
  }else if ($NameforecastData=="경기 포천") {krforecastID = 1833581;}else if ($NameforecastData=="경기 양주") {krforecastID = 1832847;
  }else if ($NameforecastData=="경기 연천") {krforecastID = 1832697;}else if ($NameforecastData=="경기 용인") {krforecastID = 1832427;
  }else if ($NameforecastData=="경기 광주") {krforecastID = 1841810; currentCity = {'Gwangju' : '경기도 광주시 경안동'};}
  else if ($NameforecastData=="인천 중구") {krforecastID = 1843561; currentCity = {'Incheon' : '인천광역시 중구 용유동'};
  }else if ($NameforecastData=="인천 남동구") {krforecastID = 1843564; currentCity = {'Incheon' : '인천광역시 남동구 만수1동'};
  }else if ($NameforecastData=="인천 강화") {krforecastID = 1843163;}else if ($NameforecastData=="전북 순창") {krforecastID = 1835650;
  }else if ($NameforecastData=="대전 은행동") {krforecastID = 1835224;currentCity = {'Daejeon' : '대전광역시 중구 은행선화동'};
  }else if ($NameforecastData=="대전 대흥동") {krforecastID = 1835235; currentCity = {'Daejeon' : '대전광역시 중구 대흥동'};
  }else if ($NameforecastData=="전북 전주") {krforecastID = 1845457;}else if ($NameforecastData=="전북 완주") {krforecastID = 1833466;
  }else if ($NameforecastData=="전북 부안") {krforecastID = 1838722;}else if ($NameforecastData=="전북 무주") {krforecastID = 1840942;
  }else if ($NameforecastData=="전북 군산") {krforecastID = 1842025;}else if ($NameforecastData=="전북 고창") {krforecastID = 1842859;
  }else if ($NameforecastData=="전북 김제") {krforecastID = 1842939;}else if ($NameforecastData=="전북 익산") {krforecastID = 1843491;
  }else if ($NameforecastData=="전북 임실") {krforecastID = 1843585;}else if ($NameforecastData=="전북 진안") {krforecastID = 1846114;
  }else if ($NameforecastData=="전북 장수") {krforecastID = 1846355;}else if ($NameforecastData=="전남 해남") {krforecastID = 1844751;
  }else if ($NameforecastData=="전남 장흥") {krforecastID = 1845788;}else if ($NameforecastData=="전남 함평") {krforecastID = 1844539;
  }else if ($NameforecastData=="전남 화순") {krforecastID = 1843841;}else if ($NameforecastData=="부산 기장") {krforecastID = 1842966;}
  else if ($NameforecastData=="광주 북구") {krforecastID = 1841808; currentCity = {'Gwangju' : '광주광역시 북구 우산동'};
  }else if ($NameforecastData=="광주 동구") {krforecastID = 1841811; currentCity = {'Gwangju' : '광주광역시 동구 대인동'};
  }else if ($NameforecastData=="전남 고흥") {krforecastID = 1842781;}else if ($NameforecastData=="전남 구례") {krforecastID = 1841976;
  }else if ($NameforecastData=="전남 광양") {krforecastID = 1841775;}else if ($NameforecastData=="전남 목포") {krforecastID = 1841066;
  }else if ($NameforecastData=="전남 보성") {krforecastID = 1838740;}else if ($NameforecastData=="전남 나주") {krforecastID = 1840536;
  }else if ($NameforecastData=="전남 여수") {krforecastID = 1832157;}else if ($NameforecastData=="전남 순천") {krforecastID = 1835648;
  }else if ($NameforecastData=="부산 중구") {krforecastID = 1838524;currentCity = {'Busan' : '부산광역시 중구 중앙동2가'};
  }else if ($NameforecastData=="부산 동구") {krforecastID = 1838519;currentCity = {'Busan' : '부산광역시 동구 좌천1동'};
  }else if ($NameforecastData=="대구 중구") {krforecastID = 1835329; currentCity = {'Daegu' : '대구광역시 중구 성내2동'};
  }else if ($NameforecastData=="대구 동구") {krforecastID = 1843502;}else if ($NameforecastData=="대구 북구") {krforecastID = 1846149;
  }else if ($NameforecastData=="대구 달서구") {krforecastID = 1835327;currentCity = {'Daegu' : '대구광역시 달서구 도원동'};
  }else if ($NameforecastData=="강원 강릉") {krforecastID = 1843137;}else if ($NameforecastData=="강원 태백") {krforecastID = 1835515;
  }else if ($NameforecastData=="강원 인제") {krforecastID = 1843542;}else if ($NameforecastData=="강원 춘천") {krforecastID = 1845136;
  }else if ($NameforecastData=="강원 고성") {krforecastID = 1840179;}else if ($NameforecastData=="강원 영월") {krforecastID = 1832257;
  }else if ($NameforecastData=="강원 양양") {krforecastID = 1832809;}else if ($NameforecastData=="강원 양구") {krforecastID = 1832909;
  }else if ($NameforecastData=="강원 원주") {krforecastID = 1833105;}else if ($NameforecastData=="강원 철원") {krforecastID = 1833702;
  }else if ($NameforecastData=="강원 태백") {krforecastID = 1835515;}else if ($NameforecastData=="강원 속초") {krforecastID = 1836553;
  }else if ($NameforecastData=="강원 삼척") {krforecastID = 1838069;}else if ($NameforecastData=="경북 경주") {krforecastID = 1841603;}
  else if ($NameforecastData=="강원 홍천") {krforecastID = 1844191;}else if ($NameforecastData=="강원 화천") {krforecastID = 1844045;
  }else if ($NameforecastData=="경북 의성") {krforecastID = 1844088;}else if ($NameforecastData=="경북 경산") {krforecastID = 1844308;
  }else if ($NameforecastData=="경북 안동") {krforecastID = 1846986;}else if ($NameforecastData=="경북 포항") {krforecastID = 1839071;
  }else if ($NameforecastData=="경북 영천") {krforecastID = 1832617;}else if ($NameforecastData=="경북 예천") {krforecastID = 1832798;
  }else if ($NameforecastData=="경북 칠곡") {krforecastID = 1833514;}else if ($NameforecastData=="경북 울진") {krforecastID = 1833763;
  }else if ($NameforecastData=="경북 문경") {krforecastID = 1840886;}else if ($NameforecastData=="경북 의성") {krforecastID = 1841597;
  }
  else if ($NameforecastData=="경북 군위") {krforecastID = 1842016;
  }else if ($NameforecastData=="경북 구미") {krforecastID = 1842225;}else if ($NameforecastData=="경북 고령") {krforecastID = 1842559;
  }else if ($NameforecastData=="경북 김천") {krforecastID = 1842944;}else if ($NameforecastData=="경북 청송") {krforecastID = 1845519;
  }else if ($NameforecastData=="경남 고성") {krforecastID = 1842518;}else if ($NameforecastData=="경남 밀양") {krforecastID = 1841149;
  }else if ($NameforecastData=="경남 남해") {krforecastID = 1840454;}else if ($NameforecastData=="경남 양산") {krforecastID = 1832828;
  }else if ($NameforecastData=="경남 거제") {krforecastID = 1842754;}else if ($NameforecastData=="경남 창원") {krforecastID = 1846326;
  }else if ($NameforecastData=="경남 진주") {krforecastID = 1846052;}else if ($NameforecastData=="경남 하동") {krforecastID = 1844788;}
  else if ($NameforecastData=="경남 함양") {krforecastID = 1844533;}else if ($NameforecastData=="경남 김해") {krforecastID = 1842943;
  }else if ($NameforecastData=="경남 함안") {krforecastID = 1846430;}else if ($NameforecastData=="충북 괴산") {krforecastID = 1845106;
  }else if ($NameforecastData=="충북 충주") {krforecastID = 1845033;}else if ($NameforecastData=="충북 진천") {krforecastID = 1846095;
  }else if ($NameforecastData=="충북 제천") {krforecastID = 1846278;}else if ($NameforecastData=="충북 영동") {krforecastID = 1832566;
  }else if ($NameforecastData=="충북 옥천") {krforecastID = 1839873;}else if ($NameforecastData=="충북 청주") {krforecastID = 1845604;
  }else if ($NameforecastData=="충북 증평") {krforecastID = 1844954;}else if ($NameforecastData=="충남 예산") {krforecastID = 1832771;
  }
  else if ($NameforecastData=="충남 천안") {krforecastID = 1845759;}else if ($NameforecastData=="충남 서산") {krforecastID = 1835096;
  }else if ($NameforecastData=="충남 성환") {krforecastID = 1836208;}else if ($NameforecastData=="충남 논산") {krforecastID = 1840211;
  }else if ($NameforecastData=="충남 당진") {krforecastID = 1834885;}else if ($NameforecastData=="충남 공주") {krforecastID = 1842616;
  }else if ($NameforecastData=="충남 홍성") {krforecastID = 1844174;}else if ($NameforecastData=="충남 금산") {krforecastID = 1842153;
  }else if ($NameforecastData=="충남 아산") {krforecastID = 1839726;}else if ($NameforecastData=="충남 부여") {krforecastID = 1838508;
  }else if ($NameforecastData=="충남 태안") {krforecastID = 1835518;}else if ($NameforecastData=="충남 보령") {krforecastID = 1835447;
  }else if ($NameforecastData=="제주 삼도동") {krforecastID = 1846266;}else if ($NameforecastData=="제주 애월") {krforecastID = 1847050;}
  else if ($NameforecastData=="제주 연동") {krforecastID = 1846265;}
  else if ($NameforecastData=="울산 중구") {krforecastID = 1833742;currentCity = {'Ulsan' : '울산광역시 중구 다운동'};}
  else if ($NameforecastData=="울산 남구") {krforecastID = 1833747;currentCity = {'Ulsan' : '울산광역시 남구 달동'};}
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?APPID=19cf2b4d24f78ab577061da24b4c9a2d&units=metric&id="+krforecastID,
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
