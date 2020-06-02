  //parse-server
  Parse.serverURL = 'https://parseapi.back4app.com';  //Server URL
  Parse.initialize(
    '3UWKUkNz8AG4kUXJkrPS2Mx9PyAH7fsDb6zzzMmm', // Application ID
    'VlNWxxTAOoN9XMMb7Ie7V9VSkTitDneJA9JrVWei', // Javascript key
    '0R0NyNF8L4hIwfbBzJE0duPxo6mkSsI73N5LRCRu'  //Master key
  );

  let MyPredicData = Parse.Object.extend('prediction_data'); //past_data의 하위클래스
  let pquery = new Parse.Query(MyPredicData);

  pquery.limit(1);
  pquery.descending("updatedAt"); //날짜 내림차순 정렬
  pquery.find().then(function(results) {
    if (typeof document !== 'undefined'){
      var sppm25 =`${results[0].get("p_pm25")}`.split(',');
      var line_pm25 = [sppm25[0],sppm25[1],sppm25[2],sppm25[3],sppm25[4]];
      var sppm10 =`${results[0].get("p_pm10")}`.split(',');
      var line_pm10 = [sppm10[0],sppm10[1],sppm10[2],sppm10[3],sppm10[4]];
      var spo3 =`${results[0].get("p_o3")}`.split(',');
      var line_o3 = [spo3[0],spo3[1],spo3[2],spo3[3],spo3[4]];
      var spco =`${results[0].get("p_co")}`.split(',');
      var line_co = [spco[0],spco[1],spco[2],spco[3],spco[4]];
      var spno2 =`${results[0].get("p_no2")}`.split(',');
      var line_no2 = [spno2[0],spno2[1],spno2[2],spno2[3],spno2[4]];
      var spso2 =`${results[0].get("p_so2")}`.split(',');
      var line_so2 = [spso2[0],spso2[1],spso2[2],spso2[3],spso2[4]];
      // document.getElementById("test").innerHTML=line_pm25;
      //sparkline
      $('#lineChart-1').sparkline(line_o3, {
        type: 'line',
        height: '100',
        width: '250',
        spotRadius:'3',
        chartRangeMin: '0',
        lineWidth: '2',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
      });
      $('#lineChart-2').sparkline(line_pm10, {
        type: 'line',
        height: '100',
        width: '250',
        lineWidth: '2',
        spotRadius:'3',
        chartRangeMin: '0',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
      });
      $('#lineChart-3').sparkline(line_pm25, {
        type: 'line',
        height: '100',
        width: '250',
        spotRadius:'3',
        chartRangeMin: '0',
        lineWidth: '2',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
      });
      $('#lineChart-4').sparkline(line_co, {
        type: 'line',
        height: '100',
        width: '250',
        spotRadius:'3',
        chartRangeMin: '0',
        lineWidth: '2',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
      });
      $('#lineChart-5').sparkline(line_so2, {
        type: 'line',
        height: '100',
        width: '250',
        spotRadius:'3',
        chartRangeMin: '0',
        lineWidth: '2',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
      });
      $('#lineChart-6').sparkline(line_no2, {
        type: 'line',
        height: '100',
        width: '250',
        spotRadius:'3',
        chartRangeMin: '0',
        lineWidth: '2',
        lineColor: '#177dff',
        fillColor: 'rgba(23, 125, 255, 0.2)'
      });
    }
    console.log('ParseObjects found:', results);
  });
