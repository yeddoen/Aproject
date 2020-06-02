
let MyCurrData = Parse.Object.extend('crawl_data'); //past_data의 하위클래스
let query = new Parse.Query(MyCurrData);

//query.equalTo("date", "2020-04-01 01:00"); //key,value 일치하는거 찾아옴
query.limit(8); //최근 8시간 [0]이 가장 최신
query.addDescending("date"); //날짜 내림차순 정렬
// query.find().then((results) => {
query.find().then(function(results) {
  if (typeof document !== 'undefined'){
    //crawl_weather
    var currtem = `${results[0].get("tem")}`,currhum = `${results[0].get("hum")}`,currWD = `${results[0].get("win_d")}`,
    currWF = `${results[0].get("win_f")}`, currwind="",currrain = `${results[0].get("rain")}`;

    if (currtem == "undefined") {
      document.getElementById("Ctemp").innerHTML = "기온 점검중…";
    }else {
      document.getElementById("Ctemp").innerHTML = "현재기온 "+currtem+"℃"; //기온
    }
    if (currrain == "undefined") {
      document.getElementById("Crain").innerHTML = "강수량 점검중…";
    }else {
      document.getElementById("Crain").innerHTML = "강수량 "+currrain+"mm";
    }
    if (currWD == "undefined" && currWF =="undefined") {
      document.getElementById("Cwind").innerHTML = "바람 점검중…";
      $('.i-wind').css({
        display:"none"
      });
    }else {
      $('.i-wind').css({
        display:"inline-block"
      });
      if (0<=currWD && currWD<45) {
        currwind = "북풍 ";
        $('.i-wind').css({
          transform: "rotate(180deg)"
        });
      }else if (45<=currWD && currWD<90) {
        currwind = "북동풍 ";
        $('.i-wind').css({
          transform: "rotate(225deg)"
        });
      }else if (90<=currWD && currWD<135) {
        currwind = "동풍 ";
        $('.i-wind').css({
          transform: "rotate(270deg)"
        });
      }else if (135<=currWD && currWD<180) {
        currwind = "남동풍 ";
        $('.i-wind').css({
          transform: "rotate(315deg)"
        });
      }else if (180<=currWD && currWD<225) {
        currwind = "남풍 ";
        $('.i-wind').css({
          transform: "rotate(0deg)"
        });
      }else if (225<=currWD && currWD<270) {
        currwind = "남서풍 ";
        $('.i-wind').css({
          transform: "rotate(45deg)"
        });
      }else if (270<=currWD && currWD<315) {
        currwind = "서풍 ";
        $('.i-wind').css({
          transform: "rotate(90deg)"
        });
      }else if (315<=currWD && currWD<360) {
        currwind = "북서풍 ";
        $('.i-wind').css({
          transform: "rotate(135deg)"
        });
      }else if (360<=currWD) {
        currwind = "북풍 ";
        $('.i-wind').css({
          transform: "rotate(180deg)"
        });
      }
      currwind += currWF;
      document.getElementById("Cwind").innerHTML = currwind+"m/s";  //바람
    }
    if (currhum == "undefined") {
      document.getElementById("Chumidity").innerHTML = "점검중…";
      document.getElementById("hum-img").style.display="none";
    }else {
      document.getElementById("hum-img").style.display="inline-block";
      if (currhum<=0) { //습도
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (1<=currhum && currhum<=9) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/1~9.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (10<=currhum && currhum<=20) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/10~20.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (21<=currhum && currhum<=35) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/21~35.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (36<=currhum && currhum<=49) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/36~49.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (50<=currhum && currhum<=60) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/50~60.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (61<=currhum && currhum<=75) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/61~75.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (76<=currhum && currhum<=85) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/76~85.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (86<=currhum && currhum<=95) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/86~95.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }else if (96<=currhum) {
        document.getElementById("hum-img").src="./icons/made-icons/dropicon/100.png";
        document.getElementById("Chumidity").innerHTML = currhum;
      }
    }

    // document.write("날짜:"+results[0].get("date")+", 미세먼지:"+results[0].get("pm10")+", 초미세먼지:"+results[0].get("pm25"));
    var currGrade = `${results[0].get("grade")}`; //`${value}`템플릿 리터럴
    currGrade = currGrade.replace("['",""); currGrade = currGrade.replace("']","");
    var currDate = `${results[0].get("date")}`;
    currDate = currDate.substring(5,currDate.length-2);
    currDate = currDate.replace(":","시"); currDate = currDate.replace(".","월"); currDate = currDate.replace(" ","일 ");
    var classdate = document.getElementsByClassName("Cdate")
    for (var i = 0; i < classdate.length; i++) {
      classdate[i].innerHTML = "&nbsp;[제공 : 강서구 "+currDate+"]";
    }
    var currPM10 = `${results[0].get("pm10")}`,currPM25 = `${results[0].get("pm25")}`,currO3 = `${results[0].get("o3")}`,
    currNO2 = `${results[0].get("no2")}`,currCO = `${results[0].get("co")}`,currSO2 = `${results[0].get("so2")}`;
    //AQIgrade
    if(currGrade == "좋음"){
      document.getElementById("i-grade").src="./file/grade/좋음.png";
    }else if (currGrade == "보통") {
      document.getElementById("i-grade").src="./file/grade/보통.png";
    }else if (currGrade == "나쁨") {
      document.getElementById("i-grade").src="./file/grade/나쁨.png";
    }else if (currGrade == "매우나쁨") {
      document.getElementById("i-grade").src="./file/grade/매우나쁨.png";
    }else {
      document.getElementById("Cgrade").innerHTML = "현재 등급을 표시할 수 없습니다.";
    }
    //PM10
    if (0<=currPM10 && currPM10<=30) {  //좋음
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (31<=currPM10 && currPM10<=80) { //보통
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (81<=currPM10 && currPM10<=150) { //나쁨
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (151<=currPM10) { //매우나쁨
      var em = document.getElementById("btn-10");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //PM2.5
    if (0<=currPM25 && currPM25<=15) {  //좋음
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (16<=currPM25 && currPM25<=35) { //보통
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (36<=currPM25 && currPM25<=75) { //나쁨
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (76<=currPM25) { //매우나쁨
      var em = document.getElementById("btn-25");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //O3
    if (0<=currO3 && currO3<=0.03) {  //좋음
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (0.031<=currO3 && currO3<=0.09) { //보통
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (0.091<=currO3 && currO3<=0.15) { //나쁨
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (0.151<=currO3) { //매우나쁨
      var em = document.getElementById("btn-o3");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //NO2
    if (0<=currNO2 && currNO2<=0.03) {  //좋음
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (0.031<=currNO2 && currNO2<=0.06) { //보통
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (0.061<=currNO2 && currNO2<=0.15) { //나쁨
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (0.151<=currNO2) { //매우나쁨
      var em = document.getElementById("btn-no2");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //CO
    if (0<=currCO && currCO<=2) {  //좋음
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (2.01<=currCO && currCO<=9) { //보통
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (9.01<=currCO && currCO<=15) { //나쁨
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (15.01<=currCO) { //매우나쁨
      var em = document.getElementById("btn-co");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //SO2
    if (0<=currSO2 && currSO2<=0.02) {  //좋음
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-info');
    }else if (0.021<=currSO2 && currSO2<=0.05) { //보통
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-success');
    }else if (0.051<=currSO2 && currSO2<=0.15) { //나쁨
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-warning');
    }else if (0.151<=currSO2) { //매우나쁨
      var em = document.getElementById("btn-so2");
      em.classList.remove('btn-light');
      em.classList.add('btn-danger');
    }
    //bar-Chart PM10
    var ctx = document.getElementById('chart10').getContext('2d');
    var times = new Array(), barpm10= new Array(), color10 = new Array();
    for (var i = 0; i < results.length; i++) {
      times[i]=`${results[i].get("date")}`;
      barpm10[i]=`${results[i].get("pm10")}`;

      if (`${results[i].get("charge_flag")}`=="False") {
        if (0<=barpm10[i] && barpm10[i]<=30) {  //좋음
          color10[i] = '#5870fe';
        }else if (31<=barpm10[i] && barpm10[i]<=80) { //보통
          color10[i] = '#6fdc6f';
        }else if (81<=barpm10[i] && barpm10[i]<=150) { //나쁨
          color10[i] = '#f0a058';
        }else if (151<=barpm10[i]) { //매우나쁨
          color10[i] = '#fd6060';
        }
      }else if (`${results[i].get("charge_flag")}`=="True") { //점검중인 경우
        color10[i] = '#919191';
      }
    }
    times[0] = times[0].substr(2,times[0].length); times[7] = times[7].substr(2,times[7].length);
    times[1] = times[1].substr(11,times[1].length); times[2] = times[2].substr(11,times[2].length);
    times[3] = times[3].substr(11,times[3].length); times[4] = times[4].substr(11,times[4].length);
    times[5] = times[5].substr(11,times[5].length); times[6] = times[6].substr(11,times[6].length);
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'PM10(㎍/㎥) ',
                backgroundColor: [color10[7],color10[6],color10[5],color10[4],color10[3],color10[2],color10[1],color10[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barpm10[7],barpm10[6],barpm10[5],barpm10[4],barpm10[3],barpm10[2],barpm10[1],barpm10[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              ticks : {
                    min : 0
                  },
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart PM2.5
    var ctx1 = document.getElementById('chart25').getContext('2d');
    var barpm25= new Array(), color25 = new Array();
    for (var i = 0; i < results.length; i++) {
      barpm25[i]=`${results[i].get("pm25")}`;

      if (`${results[i].get("charge_flag")}`=="False") {
        if (0<=barpm25[i] && barpm25[i]<=15) {  //좋음
          color25[i] = '#5870fe';
        }else if (16<=barpm25[i] && barpm25[i]<=35) { //보통
          color25[i] = '#6fdc6f';
        }else if (36<=barpm25[i] && barpm25[i]<=75) { //나쁨
          color25[i] = '#f0a058';
        }else if (76<=barpm25[i]) { //매우나쁨
          color25[i] = '#fd6060';
        }
      }else if (`${results[i].get("charge_flag")}`=="True") { //점검중인 경우
        color25[i] = '#919191';
      }
    }
    var chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'PM2.5(㎍/㎥) ',
                backgroundColor: [color25[7],color25[6],color25[5],color25[4],color25[3],color25[2],color25[1],color25[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barpm25[7],barpm25[6],barpm25[5],barpm25[4],barpm25[3],barpm25[2],barpm25[1],barpm25[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              ticks : {
                    min : 0
                  },
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart O3
    var ctx2 = document.getElementById('charto3').getContext('2d');
    var baro3= new Array(), coloro3 = new Array();
    for (var i = 0; i < results.length; i++) {
      baro3[i]=`${results[i].get("o3")}`;

      if (`${results[i].get("charge_flag")}`=="False") {
        if (0<=baro3[i] && baro3[i]<=0.03) {  //좋음
          coloro3[i] = '#5870fe';
        }else if (0.031<=baro3[i] && baro3[i]<=0.09) { //보통
          coloro3[i] = '#6fdc6f';
        }else if (0.091<=baro3[i] && baro3[i]<=0.15) { //나쁨
          coloro3[i] = '#f0a058';
        }else if (0.151<=baro3[i]) { //매우나쁨
          coloro3[i] = '#fd6060';
        }
      }
      if (`${results[i].get("charge_flag")}`=="True") { //점검중인 경우
        coloro3[i] = '#919191';
      }else {

      }
    }
    var chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'O3(ppm) ',
                backgroundColor: [coloro3[7],coloro3[6],coloro3[5],coloro3[4],coloro3[3],coloro3[2],coloro3[1],coloro3[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [baro3[7],baro3[6],baro3[5],baro3[4],baro3[3],baro3[2],baro3[1],baro3[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              ticks : {
                    min : 0
                  },
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart NO2
    var ctx3 = document.getElementById('chartno2').getContext('2d');
    var barno2= new Array(), colorno2 = new Array();
    for (var i = 0; i < results.length; i++) {
      barno2[i]=`${results[i].get("no2")}`;

      if (`${results[i].get("charge_flag")}`=="False") {
        if (0<=barno2[i] && barno2[i]<=0.03) {  //좋음
          colorno2[i] = '#5870fe';
        }else if (0.031<=barno2[i] && barno2[i]<=0.06) { //보통
          colorno2[i] = '#6fdc6f';
        }else if (0.061<=barno2[i] && barno2[i]<=0.15) { //나쁨
          colorno2[i] = '#f0a058';
        }else if (0.151<=barno2[i]) { //매우나쁨
          colorno2[i] = '#fd6060';
        }
      }else if (`${results[i].get("charge_flag")}`=="True") { //점검중인 경우
        colorno2[i] = '#919191';
      }
    }
    var chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'NO2(ppm) ',
                backgroundColor: [colorno2[7],colorno2[6],colorno2[5],colorno2[4],colorno2[3],colorno2[2],colorno2[1],colorno2[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barno2[7],barno2[6],barno2[5],barno2[4],barno2[3],barno2[2],barno2[1],barno2[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              ticks : {
                    min : 0
                  },
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart CO
    var ctx4 = document.getElementById('chartco').getContext('2d');
    var barco= new Array(), colorco = new Array();
    for (var i = 0; i < results.length; i++) {
      barco[i]=`${results[i].get("co")}`;

      if (`${results[i].get("charge_flag")}`=="False") {
        if (0<=barco[i] && barco[i]<=2) {  //좋음
          colorco[i] = '#5870fe';
        }else if (2.01<=barco[i] && barco[i]<=9) { //보통
          colorco[i] = '#6fdc6f';
        }else if (9.01<=barco[i] && barco[i]<=15) { //나쁨
          colorco[i] = '#f0a058';
        }else if (15.01<=barco[i]) { //매우나쁨
          colorco[i] = '#fd6060';
        }
      }else if (`${results[i].get("charge_flag")}`=="True") { //점검중인 경우
        colorco[i] = '#919191';
      }
    }
    var chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'CO(ppm) ',
                backgroundColor: [colorco[7],colorco[6],colorco[5],colorco[4],colorco[3],colorco[2],colorco[1],colorco[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barco[7],barco[6],barco[5],barco[4],barco[3],barco[2],barco[1],barco[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              ticks : {
                    min : 0
                  },
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
    //bar-Chart SO2
    var ctx5 = document.getElementById('chartso2').getContext('2d');
    var barso2= new Array(), colorso2 = new Array();
    for (var i = 0; i < results.length; i++) {
      barso2[i]=`${results[i].get("so2")}`;

      if (`${results[i].get("charge_flag")}`=="False") {
        if (0<=barso2[i] && barso2[i]<=0.02) {  //좋음
          colorso2[i] = '#5870fe';
        }else if (0.021<=barso2[i] && barso2[i]<=0.05) { //보통
          colorso2[i] = '#6fdc6f';
        }else if (0.051<=barso2[i] && barso2[i]<=0.15) { //나쁨
          colorso2[i] = '#f0a058';
        }else if (0.151<=barso2[i]) { //매우나쁨
          colorso2[i] = '#fd6060';
        }
      }else if (`${results[i].get("charge_flag")}`=="True") { //점검중인 경우
        colorso2[i] = '#919191';
      }
    }
    var chart5 = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: [times[7], times[6], times[5], times[4], times[3], times[2], times[1], times[0]],
            datasets: [{
                label: 'SO2(ppm) ',
                backgroundColor: [colorso2[7],colorso2[6],colorso2[5],colorso2[4],colorso2[3],colorso2[2],colorso2[1],colorso2[0]],
                borderColor: 'transparent',
                barThickness: 1,
                data: [barso2[7],barso2[6],barso2[5],barso2[4],barso2[3],barso2[2],barso2[1],barso2[0]],
            }],
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks:{
                  fontSize: 10,
                }
            }],
            yAxes: [{
              ticks : {
                beginAtZero: true,
                  },
              gridLines: {
                display: false,
                drawBorder: false
              }
           }]
          },
        }
    });
  }
  console.log('ParseObjects found:', results);
});

//
var select1="",select2="",select3="",select4="",select5="",select6="";
function showhide(i){
  if(document.all["currD"+i].style.display == "none"){
    document.all["currD"+i].style.display = "block";
    if (i==1) { //currD1 pm10
      select1 = document.getElementById("btn-10");
      if(select1.classList.contains('btn-info')) {
        select1.classList.add('selectbtn-info');
      }else if (select1.classList.contains('btn-success')) {
        select1.classList.add('selectbtn-success');
      }else if (select1.classList.contains('btn-warning')) {
        select1.classList.add('selectbtn-warning');
      }else if (select1.classList.contains('btn-danger')) {
        select1.classList.add('selectbtn-danger');
      }
    }else if (i==2) { //currD2 pm25
      select2 = document.getElementById("btn-25");
      if(select2.classList.contains('btn-info')) {
        select2.classList.add('selectbtn-info');
      }else if (select2.classList.contains('btn-success')) {
        select2.classList.add('selectbtn-success');
      }else if (select2.classList.contains('btn-warning')) {
        select2.classList.add('selectbtn-warning');
      }else if (select2.classList.contains('btn-danger')) {
        select2.classList.add('selectbtn-danger');
      }
    }else if (i==3) { //currD3 o3
      select3 = document.getElementById("btn-o3");
      if(select3.classList.contains('btn-info')) {
        select3.classList.add('selectbtn-info');
      }else if (select3.classList.contains('btn-success')) {
        select3.classList.add('selectbtn-success');
      }else if (select3.classList.contains('btn-warning')) {
        select3.classList.add('selectbtn-warning');
      }else if (select3.classList.contains('btn-danger')) {
        select3.classList.add('selectbtn-danger');
      }
    }else if (i==4) { //currD4 no2
      select4 = document.getElementById("btn-no2");
      if(select4.classList.contains('btn-info')) {
        select4.classList.add('selectbtn-info');
      }else if (select4.classList.contains('btn-success')) {
        select4.classList.add('selectbtn-success');
      }else if (select4.classList.contains('btn-warning')) {
        select4.classList.add('selectbtn-warning');
      }else if (select4.classList.contains('btn-danger')) {
        select4.classList.add('selectbtn-danger');
      }
    }else if (i==5) { //currD5 co
      select5 = document.getElementById("btn-co");
      if(select5.classList.contains('btn-info')) {
        select5.classList.add('selectbtn-info');
      }else if (select5.classList.contains('btn-success')) {
        select5.classList.add('selectbtn-success');
      }else if (select5.classList.contains('btn-warning')) {
        select5.classList.add('selectbtn-warning');
      }else if (select5.classList.contains('btn-danger')) {
        select5.classList.add('selectbtn-danger');
      }
    }else if (i==6) { //currD6 so2
      select6 = document.getElementById("btn-so2");
      if(select6.classList.contains('btn-info')) {
        select6.classList.add('selectbtn-info');
      }else if (select6.classList.contains('btn-success')) {
        select6.classList.add('selectbtn-success');
      }else if (select6.classList.contains('btn-warning')) {
        select6.classList.add('selectbtn-warning');
      }else if (select6.classList.contains('btn-danger')) {
        select6.classList.add('selectbtn-danger');
      }
    }
  }else {
    document.all["currD"+i].style.display = "none";
    if (i==1) { //currD1 pm10
      if(select1.classList.contains('btn-info')) {
        select1.classList.remove('selectbtn-info');
      }else if (select1.classList.contains('btn-success')) {
        select1.classList.remove('selectbtn-success');
      }else if (select1.classList.contains('btn-warning')) {
        select1.classList.remove('selectbtn-warning');
      }else if (select1.classList.contains('btn-danger')) {
        select1.classList.remove('selectbtn-danger');
      }
    }else if (i==2) { //currD2 pm25
      if(select2.classList.contains('btn-info')) {
        select2.classList.remove('selectbtn-info');
      }else if (select2.classList.contains('btn-success')) {
        select2.classList.remove('selectbtn-success');
      }else if (select2.classList.contains('btn-warning')) {
        select2.classList.remove('selectbtn-warning');
      }else if (select2.classList.contains('btn-danger')) {
        select2.classList.remove('selectbtn-danger');
      }
    }else if (i==3) { //currD3 o3
      if(select3.classList.contains('btn-info')) {
        select3.classList.remove('selectbtn-info');
      }else if (select3.classList.contains('btn-success')) {
        select3.classList.remove('selectbtn-success');
      }else if (select3.classList.contains('btn-warning')) {
        select3.classList.remove('selectbtn-warning');
      }else if (select3.classList.contains('btn-danger')) {
        select3.classList.remove('selectbtn-danger');
      }
    }else if (i==4) { //currD4 no2
      if(select4.classList.contains('btn-info')) {
        select4.classList.remove('selectbtn-info');
      }else if (select4.classList.contains('btn-success')) {
        select4.classList.remove('selectbtn-success');
      }else if (select4.classList.contains('btn-warning')) {
        select4.classList.remove('selectbtn-warning');
      }else if (select4.classList.contains('btn-danger')) {
        select4.classList.remove('selectbtn-danger');
      }
    }else if (i==5) { //currD5 co
      if(select5.classList.contains('btn-info')) {
        select5.classList.remove('selectbtn-info');
      }else if (select5.classList.contains('btn-success')) {
        select5.classList.remove('selectbtn-success');
      }else if (select5.classList.contains('btn-warning')) {
        select5.classList.remove('selectbtn-warning');
      }else if (select5.classList.contains('btn-danger')) {
        select5.classList.remove('selectbtn-danger');
      }
    }else if (i==6) { //currD6 so2
      if(select6.classList.contains('btn-info')) {
        select6.classList.remove('selectbtn-info');
      }else if (select6.classList.contains('btn-success')) {
        select6.classList.remove('selectbtn-success');
      }else if (select6.classList.contains('btn-warning')) {
        select6.classList.remove('selectbtn-warning');
      }else if (select6.classList.contains('btn-danger')) {
        select6.classList.remove('selectbtn-danger');
      }
    }
  }
};
