$(document).ready(function(){
  
    var cityName = "臺北市";
    var weatherType;
    var minTemp;
    var maxTemp;
  $("path").mouseenter(function(e){
    cityName = $(this).attr("id");
   
    var api = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?locationName="+cityName+"&elementName=Wx,MinT,MaxT&sort=time&Authorization=CWB-6DBC732E-05D6-41FA-84BD-6440622CFB44";
  
  $.getJSON(api,function(data){

    weatherType = data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    minTemp = data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    maxTemp = data.records.location[0].weatherElement[2].time[0].parameter.parameterName;;
   
  
  });
     $('#cityN').html(cityName);
     $('#minAndMax').html(minTemp+" &#8451 ~ "+maxTemp+" &#8451");
     $('#weatherT').html(weatherType);
  
 });
  
  
});