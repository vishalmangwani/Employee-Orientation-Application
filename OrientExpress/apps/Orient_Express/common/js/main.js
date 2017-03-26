function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *  
	 */
	
	// Common initialization code goes here
		
	
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=onGoogleMapsReady';
	document.body.appendChild(script);
	
	navigator.notification.alert("cordova");
}



var email="mangwani.vishal@gmail.com";
var cno="8106820687";



function login(){
	
	var uname=$("#username").val();

	var pass=$("#password").val();
	
	alert(uname+"   "+pass);
	var z=
	{
			
		adapter:'Orient',
		procedure:'login',
        parameters:[uname,pass]
	};
    var x= {
    		
    		onSuccess : Logsuc,
    	    onFailure : Logfail,
      };
    
    WL.Client.invokeProcedure(z,x);
}
function Logsuc(result)
{
	alert("Login Successfully");
	window.location.assign("#home");
}
function Logfail(){
	alert("Invalid");
}








function regis1(){
	
	var phoneno=$("#phonenum").val();

	var ver=$("#ver").val();
	alert(phoneno+"   "+ver);
	var a=
	{
			
		adapter:'Orient',
		procedure:'Verification',
        parameters:[phoneno,ver]
	};
    var b= {
    		
    		onSuccess : Versuc,
    	    onFailure : Verfail,
      };
    
    WL.Client.invokeProcedure(a,b);
	
}
function Versuc(result)
{	
	
	email=result.invocationResult.resultSet[0].EMAIL;
	cno=result.invocationResult.resultSet[0].PHONO;
	window.location.assign("#page1");
	alert("Sucess");

}
function Verfail(){
	alert("Invalid Details");
}






function regis2(){
	
	var uname=$("#uname").val();

	var qual=$("#qual").val();
	var exp=$("#exp").val();
	var pass=$("#pass").val();
	var cpass=$("#cpass").val();
	
	var c=
	{
			
		adapter:'Orient',
		procedure:'Register',
        parameters:[uname,qual,exp,pass,email,cno]
	};
    var d= {
    		
    		onSuccess : Regsuc,
    	    onFailure : Regfail,
      };
    
    WL.Client.invokeProcedure(c,d);
	
	
}
function Regsuc(result){
	window.location.assign("#page0");
	alert("Registered");
}
function Regfail(){
	alert("Registration fail");
}



function callme()
{
	alert("i m running");
	var lat="";
	var lon="";
	  var onSuccess = function(position) {
	    alert('Latitude: '          + position.coords.latitude          + '\n' +
	          'Longitude: '         + position.coords.longitude         + '\n' +
	          'Altitude: '          + position.coords.altitude          + '\n' +
	          'Accuracy: '          + position.coords.accuracy          + '\n' +
	          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	          'Heading: '           + position.coords.heading           + '\n' +
	          'Speed: '             + position.coords.speed             + '\n' +
	          'Timestamp: '         + position.timestamp                + '\n');
	
	  
	  
	    var myLatLng = {lat:position.coords.latitude, lng: position.coords.longitude };
	    
	    var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 14,
	      center: myLatLng
	    });
        var marker = new google.maps.Marker({
	      position: myLatLng,
	      map: map,
	      title: 'Hello World!'
	    });
	  
        var map = new google.maps.Map(document.getElementById("map"), map,marker);

};
	
	
	function onError(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
}



function jjj()
{
	var myCenter=new google.maps.LatLng(51.508742,-0.120850);
	alert("ghusa");
var mapProp = {
  center:myCenter,
  zoom:14,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

