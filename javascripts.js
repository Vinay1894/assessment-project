
var e=document.getElementById("text1")
console.log(e)
var e1=document.getElementById("button4")
console.log(e1)
e1.addEventListener("click",testClick)
function testClick(){
var url="http://cricapi.com/api/playerFinder?apikey=7RZ2772zwAXa3wtsgoBBPALYjEV2&name="+e.value
var xhr=new XMLHttpRequest()
xhr.open('GET',url)
xhr.onreadystatechange=Test
function Test()
{
	if(this.status==200&&this.readyState==4)
	{
		var res_data=JSON.parse(this.responseText)
		console.log(res_data)
		var url1="http://cricapi.com/api/playerStats?apikey=7RZ2772zwAXa3wtsgoBBPALYjEV2&pid="+ res_data.data[0].pid
		var xhr1=new XMLHttpRequest()
		xhr1.open('GET',url1)
		xhr1.onreadystatechange=Test1
		function Test1()
		{
			if(this.status==200&&this.readyState==4)
			{
				var bio=JSON.parse(this.responseText)
				console.log(bio)
				document.getElementById('display').setAttribute('src',bio.imageURL)
				document.getElementById('id1').innerHTML=bio.name
				document.getElementById('id2').innerHTML="Play for"
				document.getElementById('id3').innerHTML=bio.country
				document.getElementById('id4').innerHTML="Age"
				document.getElementById('id5').innerHTML=bio.currentAge
				document.getElementById('id6').innerHTML="Born"
				document.getElementById('id7').innerHTML=bio.born
				document.getElementById('id8').innerHTML="Batting Style"
				document.getElementById('id9').innerHTML=bio.battingStyle
				document.getElementById('id10').innerHTML="Bowling Style"
				document.getElementById('id11').innerHTML=bio.bowlingStyle
				document.getElementById('id12').innerHTML=bio.profile
				document.getElementById('id13').innerHTML="Batting Performance"
				document.getElementById('id14').innerHTML="League"
				document.getElementById('id15').innerHTML="50"
				document.getElementById('id16').innerHTML="100"
				document.getElementById('id17').innerHTML="HS"
				document.getElementById('id18').innerHTML="Runs"
				document.getElementById('id19').innerHTML="Inns"
				document.getElementById('id20').innerHTML="Mat"
				document.getElementById('id21').innerHTML="T20Is"
				document.getElementById('id22').innerHTML=bio.data.batting.T20Is[50] 
				document.getElementById('id23').innerHTML=bio.data.batting.T20Is[100]
				document.getElementById('id24').innerHTML=bio.data.batting.T20Is.HS
				document.getElementById('id25').innerHTML=bio.data.batting.T20Is.Runs
				document.getElementById('id26').innerHTML=bio.data.batting.T20Is.Inns
				document.getElementById('id27').innerHTML=bio.data.batting.T20Is.Mat
				document.getElementById('id28').innerHTML="ODIs"
				document.getElementById('id29').innerHTML=bio.data.batting.ODIs[50]
				document.getElementById('id30').innerHTML=bio.data.batting.ODIs[100]
				document.getElementById('id31').innerHTML=bio.data.batting.ODIs.HS
				document.getElementById('id32').innerHTML=bio.data.batting.ODIs.Runs
				document.getElementById('id33').innerHTML=bio.data.batting.ODIs.Inns
				document.getElementById('id34').innerHTML=bio.data.batting.ODIs.Mat
				document.getElementById('id35').innerHTML="tests"
				document.getElementById('id36').innerHTML=bio.data.batting.tests[50]
				document.getElementById('id37').innerHTML=bio.data.batting.tests[100]
				document.getElementById('id38').innerHTML=bio.data.batting.tests.HS
				document.getElementById('id39').innerHTML=bio.data.batting.tests.Runs
				document.getElementById('id40').innerHTML=bio.data.batting.tests.Inns
				document.getElementById('id41').innerHTML=bio.data.batting.tests.Mat
				document.getElementById('id42').innerHTML="Bowling Performance"
				document.getElementById('id43').innerHTML="League"
				document.getElementById('id44').innerHTML="Ave"
				document.getElementById('id45').innerHTML="BBI"
				document.getElementById('id46').innerHTML="Wkts"
				document.getElementById('id47').innerHTML="Runs"
				document.getElementById('id48').innerHTML="Balls"
				document.getElementById('id49').innerHTML="Mat"
				document.getElementById('id50').innerHTML="T20Is"
				document.getElementById('id51').innerHTML=bio.data.bowling.T20Is.Ave
				document.getElementById('id52').innerHTML=bio.data.bowling.T20Is.BBI
				document.getElementById('id53').innerHTML=bio.data.bowling.T20Is.Wkts
				document.getElementById('id54').innerHTML=bio.data.bowling.T20Is.Runs
				document.getElementById('id55').innerHTML=bio.data.bowling.T20Is.Balls
				document.getElementById('id56').innerHTML=bio.data.bowling.T20Is.Mat
				document.getElementById('id57').innerHTML="ODIs"
				document.getElementById('id58').innerHTML=bio.data.bowling.ODIs.Ave
				document.getElementById('id59').innerHTML=bio.data.bowling.ODIs.BBI
				document.getElementById('id60').innerHTML=bio.data.bowling.ODIs.Wkts
				document.getElementById('id61').innerHTML=bio.data.bowling.ODIs.Runs
				document.getElementById('id62').innerHTML=bio.data.bowling.ODIs.Balls
				document.getElementById('id63').innerHTML=bio.data.bowling.ODIs.Mat
				document.getElementById('id64').innerHTML="tests"
				document.getElementById('id65').innerHTML=bio.data.bowling.tests.Ave
				document.getElementById('id66').innerHTML=bio.data.bowling.tests.BBI
				document.getElementById('id67').innerHTML=bio.data.bowling.tests.Wkts
				document.getElementById('id68').innerHTML=bio.data.bowling.tests.Runs
				document.getElementById('id69').innerHTML=bio.data.bowling.tests.Balls
				document.getElementById('id70').innerHTML=bio.data.bowling.tests.Mat
                document.getElementById("id71").style.border = "1px solid black";
                document.getElementById("id71").style.backgroundColor="rgb(0,0,0,0.5)";
                document.getElementById("id71").style.boxShadow="5px 10px 18px black";
                document.getElementById("id71").style.marginTop="40px";
                document.getElementById("id71").style.width="70%";
                document.getElementById("id72").style.backgroundImage="url('6.jpg')";
                document.getElementById("id72").style.marginTop="10px";
                document.getElementById("id71").style.borderTop="3px solid orange";
                document.getElementById("id71").style.borderBottom="3px solid orange";
                 document.getElementById("id71").style.borderRadius="20px";
                document.getElementById("div2").style.width="90%";
                 document.getElementById("div2").style.borderRadius="15px";
                document.getElementById("div2").style.backgroundColor="rgb(180,184,184,0.6)";
                document.getElementById("div3").style.width="90%";
                document.getElementById("div3").style.backgroundColor="rgb(180,184,184,0.6)";
                 document.getElementById("div3").style.borderRadius="15px";
                document.getElementById("div4").style.width="90%";
                document.getElementById("div4").style.backgroundColor="rgb(180,184,184,0.6)";
                 document.getElementById("div4").style.borderRadius="15px";
                
			}
		}
		xhr1.send()
	}
}
xhr.send()

}
