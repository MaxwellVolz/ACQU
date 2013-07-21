$(document).live( 'pagebeforecreate',function(event){
	
    //alert("ti'ts");
	

	
	
	
});

//polaroid placements
var polaroid1 = new polaroid(100,80,"1","bear");
var polaroid2 = new polaroid(65,55,"20","alien 1");
var polaroid3 = new polaroid(110,145,"-20","alien 2");
var polaroid4 = new polaroid(100,-18,"10","frog 1");
var polaroid5 = new polaroid(60,193,"-10","monkey 1");
var polaroid6 = new polaroid(5,30,"-20","monkey 2");
var polaroid7 = new polaroid(175,-60,"20","penguin");
var polaroid8 = new polaroid(-50,175,"-20","rabbit");
var polaroid9 = new polaroid(235,83,"20","dragon");

var polaroidArray=[polaroid9,polaroid8,polaroid7,polaroid6,polaroid5,polaroid4,polaroid3,polaroid2,polaroid1];

$(document).ready(function(){
  $('#about').click(function() {
	  drawPolaroid();
  });
});



function drawPolaroid(){
	
	//Create Canvas
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	
	for(var i=0;i<polaroidArray.length;i++)
	{
		
		//Add Rotation
		ctx.rotate(polaroidArray[i].rotation*Math.PI/180);
		
		// Create gradient
		var grd=ctx.createLinearGradient(0,polaroidArray[i].y,0,polaroidArray[i].y+90);
		grd.addColorStop(0,"gray");
		grd.addColorStop(1,"lightgray");
		
		// Fill with gradient
		ctx.fillStyle=grd;
		ctx.fillRect(polaroidArray[i].x,polaroidArray[i].y,75,90);
		
		//Create inner gradient
		var grdi=ctx.createLinearGradient(0,polaroidArray[i].x+2.5,0,polaroidArray[i].y+90);
		grdi.addColorStop(0,"black");
		grdi.addColorStop(1,"gray");
		
		// Fill inner with gradient
		ctx.fillStyle=grdi;
		ctx.fillRect(polaroidArray[i].x+2.5,polaroidArray[i].y+2.5,70,70);
		
		
		//Draw Image
		var img=document.getElementById(polaroidArray[i].imgID);
		ctx.drawImage(img,polaroidArray[i].x+2.5,polaroidArray[i].y+2.5,70,70);
		
		//Clear Rotation
		ctx.rotate(-polaroidArray[i].rotation*Math.PI/180);
	}
}

//create polaroid objects
function polaroid(x,y,rotation,imgID)
{
this.x=x;
this.y=y;
this.rotation=rotation;
this.imgID=imgID;
}