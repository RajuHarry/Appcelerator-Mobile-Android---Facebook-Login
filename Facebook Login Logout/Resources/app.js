var softInput = Titanium.UI.Android.SOFT_INPUT_STATE_HIDDEN | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
var win = Titanium.UI.createWindow({
	backgroundColor : '#1976D2',
	windowSoftInputMode : softInput
});
var fb = require('facebook');
fb.initialize();
var activitymn = Titanium.Android.currentActivity;
var value = 0;
// progressIndicator
var deviceToken;
// use bitwise OR to combine two settings for the windowSoftInputMode property
var toastconnect = Titanium.UI.createNotification({
	duration : 5000,
	message : "Your data connection is slow, some features of Wymm may not work properly.",
	backgroundColor : '#fff',
});
var toastupdate = Titanium.UI.createNotification({
	duration : 5000,
	message : "Sign in again when you are ready!",
	backgroundColor : '#fff',
});


fb.appid = '1419384821695805';
/*
 fb.permissions = ['email'];

 fb.appid = 'Your id from facebook ';//123456789012345*/ //15 digit code
fb.permissions = ['email', 'user_about_me', 'user_birthday,user_friends', 'user_photos', 'user_relationships', 'user_relationship_details'];

var globalmnurl = "http://www.phoenixpeth.com/";

var pfimage = Ti.UI.createImageView({
	image : 'img/logo.png',
	top : 160,
	bottom : 20,
	width : 200,
	height : 200,
});

win.add(pfimage);
var bgimage = Ti.UI.createImageView({
	//image : 'img/badam.png',
	top : 20,
	bottom : 20,
	width : 'auto',
	height : 'auto',

});

win.add(bgimage);

var fbButton = Titanium.UI.createButton({
	backgroundImage : 'img/f_login.png',
	backgroundSelectedImage : 'img/f_login-hover.png',
	width : 250,
	height : 48,
	top : 400
});
win.add(fbButton);

var pb = Ti.UI.createProgressBar({
	top : 350,
	width : 250,
	min : 0,
	max : 100,
	value : 0,
	color : '#ffffff',
	//message: 'Downloading 0 of 10',
	font : {
		fontSize : 0,
		fontWeight : 'bold'
	},
	style : Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
});
//win.add(pb);

var devicetokenget = '';

win.addEventListener("open", function() {
	Ti.Network.addEventListener('change', function(e) {
		networkIsOnline = e.online;
		networkType = e.networkType;
	
		if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE || !Titanium.Network.online || networkIsOnline == false) {
			
			toastconnect.show();

		}

	});

});


win.addEventListener("open", function() {
	
	if (Titanium.Network.networkType === Titanium.Network.NETWORK_NONE || !Titanium.Network.online) {
		//alert(Ti.Network.online); It Goes in this loop While we are in login Screen
		var alertDialog = Titanium.UI.createAlertDialog({
			title : 'Alert!',
			message : 'Your data connection is slow, some features may not work properly.',
			buttonNames : ['OK']
		});
		alertDialog.show();
		alertDialog.addEventListener('click', function(e) {

			//win.close();

		});
	} else if (!fb.loggedIn) {

		fbButton.addEventListener('click', function(e) {

			fb.authorize();

		});

		fb.addEventListener('login', function(e) {

			
			if (e.success) {
				var t = '';
				fb.requestWithGraphPath('me', {fields:'email'}, 'GET', function(e) {
										
					if (e.success) {
						t = JSON.parse(e.result);
						//alert(t.email);
					
				
/* alert("Coming Here-----"+t.email);
var t = JSON.parse(e.data);alert(t.email);
*/

/* ######################################### Conditional Code start here ################################################## */
				
				if (!t.email || t.email === "" || t.email === null || t.email === "undefined" || t.email === undefined) {
					//alert("Your Profile Email is Not verified or Mentioned  On facebook");
					toastupdate.show();
					var alertDialogfbval = Titanium.UI.createAlertDialog({
						title : 'Alert',
						message : 'Sorry Could not fetch info',
						buttonNames : ['OK']
					});
					alertDialogfbval.show();
					alertDialogfbval.addEventListener('click', function(e) {
						fb.logout();
						win.close();

					});
				} 
				
				else {

					
					Titanium.App.Properties.setString("my_propemail", t.email);
					win.add(pb);
					var newWin = Ti.UI.createWindow({
						url : 'home.js',
						windowSoftInputMode : softInput
					});
					newWin.open();
					win.hide();

				}

/* ######################################### Conditional Code end here ################################################## */

						} 
					
					else {
						if (e.error) {
							alert(e.error);
						} else {
							alert("Unknown result");
						}
					}
				});



			} else if (e.error) {
				alert(e.error);
			} else if (e.cancelled) {

				toastupdate.show();

			}

		});
		
	} 
	  else if(fb.loggedIn)
	  {
		var newWin = Ti.UI.createWindow({
				url : 'home.js',
				windowSoftInputMode : softInput
			});
			newWin.open();
			win.hide();
	  }
});
fb.addEventListener('logout', function(e) {

	var newWin = Ti.UI.createWindow({
		url : 'app.js',
		windowSoftInputMode : softInput
	});
	newWin.open();
	win.close();
});
var get_email = Titanium.App.Properties.getString("my_propemail");
var logoutopenReq = Titanium.Network.createHTTPClient();

Titanium.App.addEventListener('OpenWin', function(e) {
	fb.logout();
});

win.fbProxy = fb.createActivityWorker({
	lifecycleContainer : win
});
win.setTitle('Welcome to Phoenix Peth');
win.open();
win.addEventListener('android:back', function(e) {
});

