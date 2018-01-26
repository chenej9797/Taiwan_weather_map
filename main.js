$(document).ready(function(){
    var cityName = "";
    var currentCity = "";
    var weatherType = "";
    var weatherDescription = "";
    var minTemp = 18;
    var maxTemp = 18;

  $("path").mouseenter(function(e){
    cityName = $(this).attr("name");
    var api = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?locationName="+cityName+"&elementName=Wx,MinT,MaxT&sort=time&Authorization=CWB-6DBC732E-05D6-41FA-84BD-6440622CFB44";
    var _api = "https://api.openweathermap.org/data/2.5/group?id=1668284,6724654,7280290,1675151,1668399,1548565,7280289,1674197,1667905,1671971,1671564,1665194,1668352,1670479,1668295,1674502,1670651,1672228,1678836,1679136&units=metric&APPID=18779931dba6c5d8e6c9cac52c1c2f90";
  // $.getJSON(api,function(data){
  //   weatherType = data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
  //   minTemp = data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
  //   maxTemp = data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
  // });
  $.getJSON(_api, function(data) {
    var cities = data.list;
    currentCity = cities.filter(city => city.name == cityName);
    console.log(currentCity);
    minTemp = currentCity[0].main.temp_min;
    maxTemp = currentCity[0].main.temp_max;
    weatherType = currentCity[0].weather[0].main;
    weatherDescription = currentCity[0].weather[0].description;
  });
     $('#cityN').html(cityName);
     $('#minAndMax').html(minTemp+" &#8451 ~ "+maxTemp+" &#8451");
     $('#weatherT').html(weatherType+' - '+weatherDescription); 
 });
  
  
});