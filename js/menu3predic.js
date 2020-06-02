    //realtime
    Parse.serverURL = 'https://parseapi.back4app.com';  //Server URL
    Parse.initialize(
      '3UWKUkNz8AG4kUXJkrPS2Mx9PyAH7fsDb6zzzMmm', // Application ID
      'VlNWxxTAOoN9XMMb7Ie7V9VSkTitDneJA9JrVWei', // Javascript key
      '0R0NyNF8L4hIwfbBzJE0duPxo6mkSsI73N5LRCRu'  //Master key
    );

    let MyData = Parse.Object.extend('crawl_data'); //past_data의 하위클래스
    let Myquery = new Parse.Query(MyData);
    Myquery.limit(1);
    Myquery.descending("date");
    Myquery.find().then(function(results) {
      if (typeof document !== 'undefined'){ //`ParseObjects found: ${JSON.stringify(results)}`
        var realpm25 = `${results[0].get("pm25")}`, realpm10 = `${results[0].get("pm10")}`, realo3 = `${results[0].get("o3")}`,
        realco=`${results[0].get("co")}`, realno2=`${results[0].get("no2")}`,realso2=`${results[0].get("so2")}`;
        var date=`${results[0].get("date")}`; date=date.replace(/\./g,'-');

        localStorage.setItem('RealDatetime', date);
        localStorage.setItem('Realpm25', realpm25);
        localStorage.setItem('Realpm10', realpm10);
        localStorage.setItem('Realo3', realo3);
        localStorage.setItem('Realco', realco);
        localStorage.setItem('Realno2', realno2);
        localStorage.setItem('Realso2', realso2);

        document.getElementById("pm25").innerHTML = realpm25+" ㎍/㎥";
        document.getElementById("pm10").innerHTML = realpm10+" ㎍/㎥";
        document.getElementById("o3").innerHTML = realo3+" ppm";
        document.getElementById("co").innerHTML = realco+" ppm";
        document.getElementById("no2").innerHTML = realno2+" ppm";
        document.getElementById("so2").innerHTML = realso2+" ppm";
      }
    });
    //parse-server Prediction
    let preData = Parse.Object.extend('prediction_data'); //past_data의 하위클래스
    let prequery = new Parse.Query(preData);
    prequery.limit(2);
    prequery.descending("updatedAt"); //날짜 내림차순 정렬
    // prequery.skip(2);
    // prequery.limit(1);
    prequery.find().then(function(results) {
      if (typeof document !== 'undefined'){ //`ParseObjects found: ${JSON.stringify(results)}`
        //document.write(`${results[0].get("p_pm25")}`);
        var comparetime = `${results[0].get("date")}`.split(',');
        var comparedate = localStorage.getItem('RealDatetime');
        comparetime[0] = comparetime[0].substring(0, comparetime[0].length-3);
          //document.getElementById("tests").innerHTML=comparetime[0] + comparedate;
        if (comparetime[0] == comparedate) {
          var pred_pm25 = `${results[0].get("p_pm25")}`.split(',');
          var date =`${results[0].get("date")}`, dateYYYY =date.substring(0,4)+"년", dateMM = date.substring(5,7)+"월",
          dateDD = date.substring(8,10)+"일", dateTime = date.substring(11,13)+"시";
          var pred_pm10 = `${results[0].get("p_pm10")}`.split(',');
          var pred_o3 = `${results[0].get("p_o3")}`.split(',');
          var pred_co =`${results[0].get("p_co")}`.split(',');
          var pred_no2 = `${results[0].get("p_no2")}`.split(',');
          var pred_so2 = `${results[0].get("p_so2")}`.split(',');

          document.getElementById("Pred25").innerHTML = pred_pm25[0]+" ㎍/㎥";
          document.getElementById("Pred10").innerHTML = pred_pm10[0]+" ㎍/㎥";
          document.getElementById("Predo3").innerHTML = pred_o3[0]+" ppm";
          document.getElementById("Predco").innerHTML = pred_co[0]+" ppm";
          document.getElementById("Predno2").innerHTML = pred_no2[0]+" ppm";
          document.getElementById("Predso2").innerHTML = pred_so2[0]+" ppm";
          document.getElementById("dated").innerHTML = dateYYYY+" "+dateMM+" "+dateDD+" "+dateTime;

          //재현율
          var truep=0, falsen=0;
          var compa25=localStorage.getItem('Realpm25'),compa10=localStorage.getItem('Realpm10'),
          compao3=localStorage.getItem('Realo3'),compaco=localStorage.getItem('Realco'),
          compano2=localStorage.getItem('Realno2'),compaso2=localStorage.getItem('Realso2');
          var range25 = compa25*0.1, range10=compa10*0.1, rangeo3=compao3*0.3, rangeco=compaco*0.3,rangeno2=compano2*0.3, rangeso2=compaso2*0.3;
          // if ((compa25-range25)<=pred_pm25[0] && pred_pm25[0]<=(compa25+range25)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compa10-range10)<=pred_pm10[0] && pred_pm10[0]<=(compa10+range10)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compao3-rangeo3)<=pred_o3[0] && pred_o3[0]<=(compao3+rangeo3)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaco-rangeco)<=pred_co[0] && pred_co[0]<=(compaco+rangeco)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compano2-rangeno2)<=pred_no2[0] && pred_no2[0]<=(compano2+rangeno2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaso2-rangeso2)<=pred_so2[0] && pred_so2[0]<=(compaso2+rangeso2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}

          var abso3=Math.abs(compao3-pred_o3[0]), absco=Math.abs(compaco-pred_co[0]),absno2=Math.abs(compano2-pred_no2[0]), absso2=Math.abs(compaso2-pred_so2[0]);
          if ((Number(compa25)-range25)<=pred_pm25[0] && pred_pm25[0]<=(Number(compa25)+range25)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compa10)-range10)<=pred_pm10[0] && pred_pm10[0]<=(Number(compa10)+range10)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compao3)-0.0054)<=pred_o3[0] && pred_o3[0]<=(Number(compao3)+0.0054)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compaco)-0.16)<=pred_co[0] && pred_co[0]<=(Number(compaco)+0.16)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compano2)-0.0173)<=pred_no2[0] && pred_no2[0]<=(Number(compano2)+0.0173)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compaso2)-0.0014)<=pred_so2[0] && pred_so2[0]<=(Number(compaso2)+0.0014)) {
            truep=truep+1;
          }else {falsen=falsen+1;}

          // if ((compa25-range25)<=pred_pm25[0] && pred_pm25[0]<=(Number(compa25)+range25)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compa10-range10)<=pred_pm10[0] && pred_pm10[0]<=(Number(compa10)+range10)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compao3-abso3)<=pred_o3[0] && pred_o3[0]<=(Number(compao3)+abso3)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaco-absco)<=pred_co[0] && pred_co[0]<=(Number(compaco)+absco)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compano2-absno2)<=pred_no2[0] && pred_no2[0]<=(Number(compano2)+absno2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaso2-absso2)<=pred_so2[0] && pred_so2[0]<=(Number(compaso2)+absso2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}

          var recall = truep+falsen; recall=truep/recall; recall=Math.ceil(recall*100);
          //document.getElementById("tests").innerHTML = recall;
          $(".dial2").knob();
          $({animatedVal: 0}).animate({animatedVal: recall}, {
            duration: 3000,
            easing: "swing",
            step: function() {
              $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change");
            }
          });
        }else {
          var pred_pm25 = `${results[1].get("p_pm25")}`.split(',');
          var date =`${results[1].get("date")}`, dateYYYY =date.substring(0,4)+"년", dateMM = date.substring(5,7)+"월",
          dateDD = date.substring(8,10)+"일", dateTime = date.substring(11,13)+"시";
          var pred_pm10 = `${results[1].get("p_pm10")}`.split(',');
          var pred_o3 = `${results[1].get("p_o3")}`.split(',');
          var pred_co =`${results[1].get("p_co")}`.split(',');
          var pred_no2 = `${results[1].get("p_no2")}`.split(',');
          //var pred_no2 = `${results[1].get("p_no2")}`; pred_no2=pred_no2.substring(0,5);
          var pred_so2 = `${results[1].get("p_so2")}`.split(',');

          document.getElementById("Pred25").innerHTML = pred_pm25[0]+" ㎍/㎥";
          document.getElementById("Pred10").innerHTML = pred_pm10[0]+" ㎍/㎥";
          document.getElementById("Predo3").innerHTML = pred_o3[0]+" ppm";
          document.getElementById("Predco").innerHTML = pred_co[0]+" ppm";
          document.getElementById("Predno2").innerHTML = pred_no2[0]+" ppm";
          document.getElementById("Predso2").innerHTML = pred_so2[0]+" ppm";
          document.getElementById("dated").innerHTML = dateYYYY+" "+dateMM+" "+dateDD+" "+dateTime;

          //재현율
          var truep=0, falsen=0;
          var compa25=localStorage.getItem('Realpm25'),compa10=localStorage.getItem('Realpm10'),
          compao3=localStorage.getItem('Realo3'),compaco=localStorage.getItem('Realco'),
          compano2=localStorage.getItem('Realno2'),compaso2=localStorage.getItem('Realso2');
          var range25 = compa25*0.1, range10=compa10*0.1, rangeo3=compao3*0.5, rangeco=compaco*0.5,rangeno2=compano2*0.5, rangeso2=compaso2*0.5;
          // if ((compa25-range25)<=pred_pm25[0] && pred_pm25[0]<=(compa25+range25)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compa10-range10)<=pred_pm10[0] && pred_pm10[0]<=(compa10+range10)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compao3-rangeo3)<=pred_o3[0] && pred_o3[0]<=(compao3+rangeo3)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaco-rangeco)<=pred_co[0] && pred_co[0]<=(compaco+rangeco)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compano2-rangeno2)<=pred_no2[0] && pred_no2[0]<=(compano2+rangeno2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaso2-rangeso2)<=pred_so2[0] && pred_so2[0]<=(compaso2+rangeso2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}

          //var abso3=Math.abs(compao3-pred_o3[0]), absco=Math.abs(compaco-pred_co[0]),absno2=Math.abs(compano2-pred_no2[0]), absso2=Math.abs(compaso2-pred_so2[0]);
          if ((Number(compa25)-range25)<=pred_pm25[0] && pred_pm25[0]<=(Number(compa25)+range25)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compa10)-range10)<=pred_pm10[0] && pred_pm10[0]<=(Number(compa10)+range10)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compao3)-0.0054)<=pred_o3[0] && pred_o3[0]<=(Number(compao3)+0.0054)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compaco)-0.16)<=pred_co[0] && pred_co[0]<=(Number(compaco)+0.16)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compano2)-0.0173)<=pred_no2[0] && pred_no2[0]<=(Number(compano2)+0.0173)) {
            truep=truep+1;
          }else {falsen=falsen+1;}
          if ((Number(compaso2)-0.0014)<=pred_so2[0] && pred_so2[0]<=(Number(compaso2)+0.0014)) {
            truep=truep+1;
          }else {falsen=falsen+1;}

          // var abso3=Math.abs(compao3-pred_o3[0]), absco=Math.abs(compaco-pred_co[0]),absno2=Math.abs(compano2-pred_no2[0]), absso2=Math.abs(compaso2-pred_so2[0]);
          // if ((compa25-range25)<=pred_pm25[0] && pred_pm25[0]<=(Number(compa25)+range25)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compa10-range10)<=pred_pm10[0] && pred_pm10[0]<=(Number(compa10)+range10)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compao3-abso3)<=pred_o3[0] && pred_o3[0]<=(Number(compao3)+abso3)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaco-absco)<=pred_co[0] && pred_co[0]<=(Number(compaco)+absco)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compano2-absno2)<=pred_no2[0] && pred_no2[0]<=(Number(compano2)+absno2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}
          // if ((compaso2-absso2)<=pred_so2[0] && pred_so2[0]<=(Number(compaso2)+absso2)) {
          //   truep=truep+1;
          // }else {falsen=falsen+1;}

          var recall = truep+falsen; recall=truep/recall; recall=Math.ceil(recall*100);
          //document.getElementById("tests").innerHTML = compaso2+absso2;
          $(".dial2").knob();
          $({animatedVal: 0}).animate({animatedVal: recall}, {
            duration: 3000,
            easing: "swing",
            step: function() {
              $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change");
            }
          });
        }
      }
    });
    //Bar amchart parse server
    let barData = Parse.Object.extend('prediction_data'); //past_data의 하위클래스
    let barquery = new Parse.Query(barData);
    barquery.limit(1);
    barquery.descending("updatedAt"); //날짜 내림차순 정렬
    barquery.find().then(function(results) {
      if (typeof document !== 'undefined'){ //`ParseObjects found: ${JSON.stringify(results)}`
        var bardate =`${results[0].get("date")}`.split(',');
        bardate[0]=bardate[0].substring(5,bardate[0].length-3);
        bardate[1]=bardate[1].substring(5,bardate[1].length-3);
        bardate[2]=bardate[2].substring(5,bardate[2].length-3);
        bardate[3]=bardate[3].substring(5,bardate[3].length-3);
        bardate[4]=bardate[4].substring(5,bardate[4].length-3);

        var barpm10 = `${results[0].get("p_pm10")}`.split(',');
        var barpm25 = `${results[0].get("p_pm25")}`.split(',');
        var baro3 = `${results[0].get("p_o3")}`.split(',');
        var barco = `${results[0].get("p_co")}`.split(',');
        var barno2 = `${results[0].get("p_no2")}`.split(',');
        var barso2 = `${results[0].get("p_so2")}`.split(',');

        ////////amChart stacked bar chart2 pm10/pm25
        am4core.useTheme(am4themes_animated);
        // Themes end
        // Create chart instance
        var chartpm = am4core.create("chartdiv",    am4charts.XYChart);
        chartpm.data = [{
                  "year": "(now) "+localStorage.getItem('RealDatetime').substring(5,localStorage.getItem('RealDatetime').length),
                  "10": localStorage.getItem('Realpm10'),
                  "25": localStorage.getItem('Realpm25')
                }, {
                  "year": bardate[0],
                  "10": barpm10[0],
                  "25": barpm25[0]
                },{
                  "year": bardate[1],
                  "10": barpm10[1],
                  "25": barpm25[1]
                }, {
                  "year": bardate[2],
                  "10": barpm10[2],
                  "25": barpm25[2]
                },{
                  "year": bardate[3],
                  "10": barpm10[3],
                  "25": barpm25[3]
                },{
                  "year": bardate[4],
                  "10": barpm10[4],
                  "25": barpm25[4]
                }];

        chartpm.legend = new am4charts.Legend();
        chartpm.cursor = new am4charts.XYCursor();
        chartpm.legend.position = "bottom";
        // Create axes
        var pmcategoryAxis = chartpm.yAxes.push(new am4charts.CategoryAxis());
        pmcategoryAxis.dataFields.category = "year";
        pmcategoryAxis.renderer.grid.template.opacity = 0;
        pmcategoryAxis.fontSize=12;
        var pmvalueAxis = chartpm.xAxes.push(new am4charts.ValueAxis());
        pmvalueAxis.min = 0;
        pmvalueAxis.renderer.grid.template.opacity = 0;
        pmvalueAxis.renderer.ticks.template.strokeOpacity = 0.5;
        pmvalueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
        pmvalueAxis.renderer.ticks.template.length = 10;
        pmvalueAxis.renderer.baseGrid.disabled = true;
        pmvalueAxis.renderer.minGridDistance = 40;
        pmvalueAxis.fontSize=13;
        // Create series
        function createSeriespm(field, name) {
          var pmseries = chartpm.series.push(new am4charts.ColumnSeries());
          pmseries.dataFields.valueX = field;
          pmseries.dataFields.categoryY = "year";
          pmseries.stacked = true;
          pmseries.name = name;
          pmseries.tooltipText ="{name}: [bold]{valueX}[/]";
          //pmseries.tooltip.pointerOrientation = "vertical";
          var labelBulletpm = pmseries.bullets.push(new am4charts.LabelBullet());
          labelBulletpm.locationX = 0.5;
          labelBulletpm.label.text = "{valueX}";
          labelBulletpm.label.fill = am4core.color("#fff");
        }

        createSeriespm("10", "PM10");
        createSeriespm("25", "PM2.5");

        //////barchart 2
        am4core.useTheme(am4themes_animated);// Apply chart themes
        //am4core.useTheme(am4themes_frozen);
        // Create chart instance
        var chart = am4core.create("chartdiv1", am4charts.XYChart);
        chart.data = [{ // Add data
              "year": "(now) "+localStorage.getItem('RealDatetime').substring(5,localStorage.getItem('RealDatetime').length),
              "o3": localStorage.getItem('Realo3'),
              "co": localStorage.getItem('Realco'),
              "no2": localStorage.getItem('Realno2'),
              "so2": localStorage.getItem('Realso2')
            }, {
              "year": bardate[0],
              "o3": baro3[0],
              "co": barco[0],
              "no2": barno2[0],
              "so2": barso2[0]
            },{
              "year": bardate[1],
              "o3": baro3[1],
              "co": barco[1],
              "no2": barno2[1],
              "so2": barso2[1]
            }, {
              "year": bardate[2],
              "o3": baro3[2],
              "co": barco[2],
              "no2": barno2[2],
              "so2": barso2[2]
            }, {
              "year": bardate[3],
              "o3": baro3[3],
              "co": barco[3],
              "no2": barno2[3],
              "so2": barso2[3]
            },{
              "year": bardate[4],
              "o3": baro3[4],
              "co": barco[4],
              "no2": barno2[4],
              "so2": barso2[4]
            }];
        // Create axes
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.opacity = 0;
        categoryAxis.fontSize=12;

        var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.location = 0;
        valueAxis.renderer.minGridDistance = 40;
        valueAxis.renderer.grid.template.opacity = 0;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
        valueAxis.fontSize=13;

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = "co";
        series.dataFields.categoryY = "year";
        series.name = "CO";
        series.tooltipText = "{name}: [bold]{valueX}[/]";

        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueX = "o3";
        series2.dataFields.categoryY = "year";
        series2.name = "O3";
        series2.tooltipText = "{name}: [bold]{valueX}[/]";

        var series3 = chart.series.push(new am4charts.ColumnSeries());
        series3.dataFields.valueX = "so2";
        series3.dataFields.categoryY = "year";
        series3.name = "SO2";
        series3.tooltipText = "{name}: [bold]{valueX}[/]";
        series3.stacked = true;

        var series4 = chart.series.push(new am4charts.ColumnSeries());
        series4.dataFields.valueX = "no2";
        series4.dataFields.categoryY = "year";
        series4.name = "NO2";
        series4.tooltipText = "{name}: [bold]{valueX}[/]";
        series4.stacked = true;

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
        // Add legend
        chart.legend = new am4charts.Legend();
      }
    });

    //  force-directed tree
    am4core.useTheme(am4themes_animated);    // Themes begin
    var chart = am4core.create("chartdiv2", am4plugins_forceDirected.ForceDirectedTree);  // Create chart
    var series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries()); // Create series
    series.data = [
      {
        "name": "예측 PM10","value": 50000,
        "linkWith":[
           "수집 날짜",
           "기온",
           "습도",
           "풍향",
           "풍속",
           "눈","비","PM10"
        ],
      },{
        "name": "예측 PM2.5","value": 50000,
        "linkWith":[
          "수집 날짜",
          "기온",
          "습도",
          "풍향",
          "풍속",
          "눈","비","PM2.5"
        ],
      },{
        "name": "예측 O3","value": 50000,
        "linkWith":[
          "수집 날짜",
          "기온",
          "습도",
          "풍향",
          "풍속",
          "눈","비",
          "NO2","O3","SO2","CO"
        ],
      },{
        "name": "예측 CO","value": 50000,
        "linkWith":[
          "수집 날짜",
          "기온",
          "습도",
          "풍향",
          "풍속",
          "눈","비",
          "NO2","O3","SO2","CO"
        ],
      },{
        "name": "예측 NO2","value": 50000,
        "linkWith":[
          "수집 날짜",
          "기온",
          "습도",
          "풍향",
          "풍속",
          "눈","비",
          "NO2","O3","SO2","CO"
        ],
      },{
        "name": "예측 SO2","value": 50000,
        "linkWith":[
          "수집 날짜",
          "기온",
          "습도",
          "풍향",
          "풍속",
          "눈","비",
          "NO2","O3","SO2","CO"
        ],
      },{
      "name": "PM10",
      "children": [
        {
          "name": "정상",
          "children": [
            { "name": "좋음", "value": 14680 },
            { "name": "보통", "value": 23476 },
            { "name": "나쁨", "value": 3834 },
            { "name": "매우나쁨", "value": 451 }
          ]
        },
        { "name": "미수신", "value": 156 }, //
      ]
    }, {
      "name": "PM2.5",
      "children": [
        {
          "name": "정상",
          "children": [
            { "name": "좋음", "value": 14796 },
            { "name": "보통", "value": 19709 },
            { "name": "나쁨", "value": 7256 },
            { "name": "매우나쁨", "value": 674 }
          ]
        },
        { "name": "미수신", "value": 162 }, //
      ]
    }, {
      "name": "O3",
      "children": [
        {
          "name": "정상",
          "children": [
            { "name": "좋음", "value": 28003 },
            { "name": "보통", "value": 14067 },
            { "name": "나쁨", "value": 361 },
            { "name": "매우나쁨", "value": 4 }
          ]
        },
        { "name": "미수신", "value": 162 }, //
      ]
    }, {
      "name": "NO2",
      "children": [
        {
          "name": "정상",
          "children": [
            { "name": "좋음", "value": 25301 },
            { "name": "보통", "value": 14877 },
            { "name": "나쁨", "value": 2264 },
            { "name": "매우나쁨", "value": 0 }
          ]
        },
        { "name": "미수신", "value": 155 }, //
      ]
    }, {
      "name": "CO",
      "children": [
        {
          "name": "정상",
          "children": [
            { "name": "좋음", "value": 42432 },
            { "name": "보통", "value": 7 },
            { "name": "나쁨", "value": 0 },
            { "name": "매우나쁨", "value": 0 }
          ]
        },
        { "name": "미수신", "value": 158 }, //
      ]
    },{
      "name": "SO2",
      "children": [
        {
          "name": "정상",
          "children": [
            { "name": "좋음", "value": 42426},
            { "name": "보통", "value": 14 },
            { "name": "나쁨", "value": 0 },
            { "name": "매우나쁨", "value": 0 }
          ]
        },
        { "name": "미수신", "value": 157 }, //
      ]
    },{
      "name": "기온",
      "children": [{
        "name": "정상", "value": 42439 //
      }, {
        "name": "미수신", "value": 158 //
      }]
    },{
      "name": "습도",
      "children": [{
        "name": "정상", "value": 42439 //
      }, {
        "name": "미수신", "value": 158//
      }]
    },{
      "name": "눈","value": 42597 //
    },{
      "name": "비","value": 42597//
    },{
      "name": "수집 날짜","value": 42597//
    },{
      "name": "풍향",
      "children": [{
        "name": "정상", "value": 40688 //
      }, {
        "name": "미수신", "value": 1909 //
      }]
    },{
      "name": "풍속",
      "children": [{
        "name": "정상", "value": 42290 //
      }, {
        "name": "미수신", "value": 307 //
      }]
    }];
    series.dataFields.value = "value";  // Set up data fields
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.nodes.template.tooltipText = "{name}:[bold]{value}[/]";
    series.nodes.template.fillOpacity = 1;
    series.dataFields.id = "name";
    series.links.template.distance = 1;
    series.links.template.strength = 1;
    series.dataFields.linkWith = "linkWith";
    series.linkWithStrength = 0;
    series.maxLevels = 1;

    series.nodes.template.adapter.add("tooltipText", function(text, target) {
      if (target.dataItem) {
        switch(target.dataItem.level) {
          case 0:
            return "[bold]{name}[/]";
          case 1:
            return "{name} : [bold]{value}[/]";
        }
      }
      return text;
    });

    var hoverState = series.links.template.states.create("hover");
    hoverState.properties.strokeWidth = 4;
    hoverState.properties.strokeOpacity = 2;

    series.nodes.template.events.on("over", function(event) {
      event.target.dataItem.childLinks.each(function(link) {
        link.isHover = true;
      })
      if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = true;
      }
    })
    series.nodes.template.events.on("out", function(event) {
      event.target.dataItem.childLinks.each(function(link) {
        link.isHover = false;
      })
      if (event.target.dataItem.parentLink) {
        event.target.dataItem.parentLink.isHover = false;
      }
    })
    series.nodes.template.label.text = "{name}";  // Add labels
    series.nodes.template.label.adapter.add("text", function(text, target) {
      if (target.dataItem) {
        switch(target.dataItem.level) {
          case 0:
            return "[bold]{name}[/]";
          case 1:
            return "{name}";
        }
      }
      return text;
    });
    series.fontSize = 12;
    series.minRadius = 23;
    series.maxRadius = 50;
    series.manyBodyStrength = -20;
    // Close other nodes when one is opened
    series.nodes.template.events.on("hit", function(ev) {
      var targetNode = ev.target;
      if (targetNode.isActive) {
        series.nodes.each(function(node) {
          if (targetNode !== node && node.isActive && targetNode.dataItem.level == node.dataItem.level) {
            node.isActive = false;
          }
        });
      }
    });
