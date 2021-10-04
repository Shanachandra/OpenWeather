
async function openweather(){
try{

    var id=document.getElementById('getlocation').value
    
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=82b75d38197a57dd76ae689441ed9e86`
    var result=await fetch(url);
    var jsondata=await result.json();
    if(jsondata?.cod==404)
    {
        alert('city not found')
    }
    var temp=document.getElementById('temp')
    temp.innerHTML=jsondata.main.temp;
    var press=document.getElementById('press')
    press.innerHTML=jsondata.main.pressure
    var humid=document.getElementById('humid')
    humid.innerHTML=jsondata.main.humidity
    var change=document.getElementById('getlocation')
    
    change.value='';
    console.log(jsondata)
}
catch(error)
{
    console.log("wrong")
    alert("city not found")
}

}

//openweather('london')