var imageSources = ["url('6.jpg')","url('7.jpg')", "url('8.jpg')","url('9.jpg')","url('10.jpg')","url('11.jpg')","url('12.jpg')"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("main2").style.backgroundImage = imageSources[index];
  index++;
} , 3000);
var e2=document.getElementById("text2")
console.log(e2)
var e3=document.getElementById("button5")
console.log(e3)
e3.addEventListener("click",testClick1)
function testClick1(){
	var url2="https://cricapi.com/api/matches/?apikey=7RZ2772zwAXa3wtsgoBBPALYjEV2"
	var xhr2=new XMLHttpRequest()
	xhr2.open('GET',url2)
    xhr2.onreadystatechange=Test2
    function Test2()
    {
    	if(this.status==200&&this.readyState==4)
    	{
    	var matches=JSON.parse(this.responseText)
    	console.log(matches)
        var url3="https://cricapi.com/api/cricketScore/?apikey=7RZ2772zwAXa3wtsgoBBPALYjEV2&unique_id="+ matches.matches[e2.value].unique_id
        var xhr3=new XMLHttpRequest()
        xhr3.open('GET',url3)
        xhr3.onreadystatechange=Test3
        function Test3()
        {
            if(this.status==200&&this.readyState==4)
            {
                var result=JSON.parse(this.responseText)
                console.log(result)
                document.getElementById("th1").innerHTML=result["team-1"]
                document.getElementById("td2").innerHTML="vs"
                document.getElementById("th3").innerHTML=result["team-2"]
                 document.getElementById("td4").innerHTML=result.score
                 document.getElementById("td5").innerHTML=matches.matches[e2.value].date
                 document.getElementById("td6").innerHTML=result.stat
                 document.getElementById("result1").style.backgroundColor="rgb(0,0,0,0.7)"
            }
        }
        xhr3.send()
       }
    }
    xhr2.send()
}
