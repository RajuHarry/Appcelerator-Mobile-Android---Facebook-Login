var win = Titanium.UI.currentWindow;
var TiDrawerLayout = require('com.tripvi.drawerlayout');
var osname = Ti.Platform.osname;
var osname_version = Ti.Platform.version;
var progressIndicator = Ti.UI.Android.createProgressIndicator({
  message:'Please wait...',
  location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
  type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
  //type: Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT,
  cancelable: false,
  //min: 0,
  //max: 100,
});

var softInput = Titanium.UI.Android.SOFT_INPUT_STATE_HIDDEN | Ti.UI.Android.SOFT_INPUT_ADJUST_PAN;
var win = Titanium.UI.currentWindow;
var progressIndicatorchat = Ti.UI.Android.createProgressIndicator({
  location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
  type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
  //type: Ti.UI.Android.PROGRESS_INDICATOR_DETERMINANT,
  cancelable: false,
  min: 0,
  max: 100,
});
var table = Ti.UI.createWebView({
	url: 'http://www.phoenixpeth.com/',
	scalesPageToFit: true,
	enableZoomControls:false,
    showScrollbars:false,
    cacheMode:Titanium.UI.Android.WEBVIEW_LOAD_NO_CACHE,
});

//Ensure first beforeload is processed. navigationType is other when setting url or data etc.
var loading = false;
var value = 0;
table.addEventListener('beforeload', function(){
    var value = 0;
	progressIndicatorchat.show();
	setInterval(function(){
	if (value > 100) {
    return;
	}
    progressIndicatorchat.message = "Please Wait...";
	progressIndicatorchat.value = value;
    value ++;
    }, 50);
    //Ti.API.info('beforeload');
    loading = true;
    
});
 
table.addEventListener('load', function(){
    //Ti.API.info('load');
    loading = false;
    progressIndicatorchat.hide();
});
 
table.addEventListener('error', function(){
    //Ti.API.info('error');
    loading = false;
    progressIndicatorchat.hide();
});

	var leftWin = Ti.UI.createView({
		backgroundColor : 'white'
	});
    
	var mainContanerView = Ti.UI.createScrollView({
		//top : 64,
		left : 0,
		right : 0,
		bottom : 0,
		contentHeight : Ti.UI.SIZE,
		contentWidth : Ti.UI.FILL,
		scrollsToTop : true,
		layout : 'vertical',
		backgroundColor : 'transparent'
	});
	
	var sideContantView = Ti.UI.createView({
		top : 0,
		layout : 'vertical',
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		//backgroundImage : '/images/side-menu-bg-pattern.jpg'
	});
	mainContanerView.add(sideContantView);
	//=========== name and email =================
	var nameAndemailView = Ti.UI.createView({
		top : 0,
		left : 0,
		right : 0,
		idofthemenu : 15,
		backgroundColor : '#f3f3f3',
		height : Ti.UI.SIZE,
		layout : 'vertical'
	});
	var name_lbl = Ti.UI.createLabel({
		text : 'Guest',
		top : 10,
		left : 20,
		idofthemenu : 15,
		color : "#ff3333",
		font : {
			fontSize : 25
		},
	});
	var email_lbl = Ti.UI.createLabel({
		text : 'guest@phoenixpeth.com',
		top : 7,
		left : 20,
		idofthemenu : 15,
		color : "#666666",
		font : {
			fontSize : 16
		},
	});
	var Bottomlbl = Ti.UI.createLabel({
		top : 8,
		text : '',
		height : 1,
	});
	nameAndemailView.add(name_lbl);
	nameAndemailView.add(email_lbl);
	nameAndemailView.add(Bottomlbl);
	sideContantView.add(nameAndemailView);
	//=============== welcome ==================
	var welcomeView = Ti.UI.createView({
		top : 10,
		height : 50,
		left : 0,
		right : 0,

	});
	var welcomeLbl = Ti.UI.createLabel({
		text : "Welcome!",
		top : 10,
		left : 50,
		color : '#ff3333',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
	});

	
		welcomeView.add(welcomeLbl);
		sideContantView.add(welcomeView);
	

	// ============= today match ===================
	var todayMatchView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 1,
		right : 0,
		layout : 'horizontal'
	});
	var imgTodayMatch = Ti.UI.createImageView({
		//image : '/images/todaysmatch.png',
		left : 10,
		idofthemenu : 1,
		height : 24,
		width : 30
	});
	var lblTodayMath = Ti.UI.createLabel({
		text : "Shake Images",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 1,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		todayMatchView.add(imgTodayMatch);
		todayMatchView.add(lblTodayMath);
		sideContantView.add(todayMatchView);
	
	//=========== Previes match =====================
	var previousMatchView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 2,
		right : 0,
		layout : 'horizontal'
	});
	var imgPreviousMatch = Ti.UI.createImageView({
		//image : '/images/my-matches.png',
		left : 10,
		idofthemenu : 2,
		height : 24,
		width : 30
	});
	var lblPreviousMatch = Ti.UI.createLabel({
		text : "Change Price",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 2,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		previousMatchView.add(imgPreviousMatch);
		previousMatchView.add(lblPreviousMatch);
		sideContantView.add(previousMatchView);
	
	//=========== Karma point =====================
	var karmaPoint = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,
		idofthemenu : 3,
		layout : 'horizontal'
	});
	var imgkarmaPoint = Ti.UI.createImageView({
		//image : '/images/kara-points.png',
		left : 10,
		idofthemenu : 3,
		height : 24,
		width : 30
	});
	var lblkarmaPoint = Ti.UI.createLabel({
		text : "Your Current Location",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 3,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		karmaPoint.add(imgkarmaPoint);
		karmaPoint.add(lblkarmaPoint);
		sideContantView.add(karmaPoint);
	
	//=========== my profile =====================
	var myProfileView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,
		idofthemenu : 4,
		layout : 'horizontal'
	});
	var imgMyProfile = Ti.UI.createImageView({
		//image : '/images/human.png',
		left : 10,
		idofthemenu : 4,
		height : 24,
		width : 30
	});
	var lblMyProfile = Ti.UI.createLabel({
		text : "Chat Freely",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 4,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		myProfileView.add(imgMyProfile);
		myProfileView.add(lblMyProfile);
		sideContantView.add(myProfileView);
	
	//=========== personality Quiz =====================
	var personalityQuizView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 5,
		right : 0,
		layout : 'horizontal'
	});
	var imgPersonalityQuiz = Ti.UI.createImageView({
		//image : '/images/personality-quiz.png',
		left : 10,
		idofthemenu : 5,
		height : 24,
		width : 30
	});
	var lblPersonalityQuiz = Ti.UI.createLabel({
		text : "Logout",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 5,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		personalityQuizView.add(imgPersonalityQuiz);
		personalityQuizView.add(lblPersonalityQuiz);
		sideContantView.add(personalityQuizView);
	//=========== Match preferences =====================
	var matchPreferencesView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,
		idofthemenu : 6,
		layout : 'horizontal'
	});
	var imgMatchPreferences = Ti.UI.createImageView({
		//image : '/images/Match-Preferences.png',
		left : 10,
		idofthemenu : 6,
		height : 24,
		width : 30
	});
	var lblMatchPreferences = Ti.UI.createLabel({
		text : "Play Game Chess",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 6,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		matchPreferencesView.add(imgMatchPreferences);
		matchPreferencesView.add(lblMatchPreferences);
		//sideContantView.add(matchPreferencesView);
	
	//=========== My Photos =====================
	var myPhotoView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 7,
		right : 0,
		layout : 'horizontal'
	});
	var imgMyPhoto = Ti.UI.createImageView({
		//image : '/images/edit-photos.png',
		left : 10,
		idofthemenu : 7,
		height : 24,
		width : 30
	});
	var lblMyPhoto = Ti.UI.createLabel({
		text : "Play Game viman",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 7,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	
		myPhotoView.add(imgMyPhoto);
		myPhotoView.add(lblMyPhoto);
		//sideContantView.add(myPhotoView);
	//=========== Logout =====================
	var logoutView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 8,
		right : 0,
		layout : 'horizontal'
	});
	var imgLogout = Ti.UI.createImageView({
		//image : '/images/logout.png',
		left : 10,
		idofthemenu : 8,
		height : 24,
		width : 30
	});
	var lblLogout = Ti.UI.createLabel({
		text : "Share",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 8,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	logoutView.add(imgLogout);
	logoutView.add(lblLogout);
	//sideContantView.add(logoutView);
	//=========== others =====================
	var otherView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,

	});
	var lblOther = Ti.UI.createLabel({
		text : "Other",
		top : 10,
		left : 50,
		color : '#ff3333',
		font : {
			fontSize : 18,
			fontWeight : 'bold'
		},
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
	});
	
		otherView.add(lblOther);
		sideContantView.add(otherView);
	
	//=========== Media Coverage =====================
	var mediaCoverageView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 9,
		right : 0,
		layout : 'horizontal'
	});
	var imgMediaCoverage = Ti.UI.createImageView({
		//image : '/images/media-coverage.png',
		left : 10,
		idofthemenu : 9,
		height : 24,
		width : 30
	});
	var lblMediaCoverage = Ti.UI.createLabel({
		text : "Media Coverage",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 9,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	mediaCoverageView.add(imgMediaCoverage);
	mediaCoverageView.add(lblMediaCoverage);
	sideContantView.add(mediaCoverageView);
	//=========== Stay Connected =====================
	var stayConnectedView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,
		idofthemenu : 10,
		layout : 'horizontal'
	});
	var imgStayConnected = Ti.UI.createImageView({
		//image : '/images/stay-connected.png',
		left : 10,
		idofthemenu : 10,
		height : 24,
		width : 30
	});
	var lblStayConnected = Ti.UI.createLabel({
		text : "Stay Connected",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 10,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	stayConnectedView.add(imgStayConnected);
	stayConnectedView.add(lblStayConnected);
	sideContantView.add(stayConnectedView);
	//=========== Abouts =====================
	var aboutWymmView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,
		idofthemenu : 11,
		layout : 'horizontal'
	});
	var imgAboutWymm = Ti.UI.createImageView({
		//image : '/images/aboutt_us.png',
		left : 10,
		idofthemenu : 11,
		height : 24,
		width : 30
	});
	var lblAboutWymm = Ti.UI.createLabel({
		text : "About Wymm",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 11,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	aboutWymmView.add(imgAboutWymm);
	aboutWymmView.add(lblAboutWymm);
	//sideContantView.add(aboutWymmView);
	//=========== Terms & condition =====================
	var termAndConditionView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 12,
		right : 0,
		layout : 'horizontal'
	});
	var imgTermAndCondition = Ti.UI.createImageView({
		//image : '/images/info.png',
		left : 10,
		idofthemenu : 12,
		height : 24,
		width : 30
	});
	var lblTermAndCondition = Ti.UI.createLabel({
		text : "Terms of Service",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 12,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	termAndConditionView.add(imgTermAndCondition);
	termAndConditionView.add(lblTermAndCondition);
	//sideContantView.add(termAndConditionView);
	//=========== Privacy Policy=====================
	var privacyPolicyView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		idofthemenu : 13,
		right : 0,
		layout : 'horizontal'
	});
	var imgPrivacyPolicy = Ti.UI.createImageView({
		//image : '/images/Privacy-Policy.png',
		left : 10,
		height : 24,
		idofthemenu : 13,
		width : 30
	});
	var lblPrivacyPolicy = Ti.UI.createLabel({
		text : "Privacy Policy",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 13,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	privacyPolicyView.add(imgPrivacyPolicy);
	privacyPolicyView.add(lblPrivacyPolicy);
	//sideContantView.add(privacyPolicyView);
	//=========== Contact Us =====================
	var contactUsView = Ti.UI.createView({
		top : 0,
		height : 50,
		left : 0,
		right : 0,
		idofthemenu : 14,
		layout : 'horizontal'
	});
	var imgContactUsView = Ti.UI.createImageView({
		//image : '/images/stay-connected.png',
		left : 10,
		height : 24,
		idofthemenu : 14,
		width : 30
	});
	var lblContactUsView = Ti.UI.createLabel({
		text : "Contact Us",
		top : 15,
		bottom : 15,
		left : 10,
		idofthemenu : 14,
		color : '#333333',
		font : {
			fontSize : 16
		}
	});
	contactUsView.add(imgContactUsView);
	contactUsView.add(lblContactUsView);
	//sideContantView.add(contactUsView);

	leftWin.add(mainContanerView);
	
	// ======= All CLICK EVENT =================
	
	sideContantView.addEventListener('click', function(e) {
		var lefMmenuItem = e.source.idofthemenu;
		Ti.API.info('click ==== ' + JSON.stringify(lefMmenuItem));
		switch(lefMmenuItem) {
		case 1:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 2:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 3:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 4:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 5:
			progressIndicator.message = "Please wait for a moment...";
			progressIndicator.show();
			Titanium.App.fireEvent('OpenWin');
			break;
		case 6:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 7:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 8:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 9:
			Titanium.App.fireEvent('OpenWin');
			var newWin=Ti.UI.createWindow({
            url        : 'home.js',
            });
	        newWin.open();
	        win.close();
			break;
		case 10:
			
			break;
		case 11:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 12:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 13:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 14:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 15:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		case 16:
			Titanium.Platform.openURL('http://www.phoenixpeth.com');
			break;
		}
	});


var drawer = TiDrawerLayout.createDrawer({
	leftView: leftWin,
	centerView: table,
	leftDrawerWidth: "280dp",
	width: Ti.UI.FILL, //Ti.UI.SIZE
	height: Ti.UI.FILL,
	//drawerLockMode:TiDrawerLayout.LOCK_MODE_LOCKED_CLOSED, // prevents user from swiping. manual use of toggleLeftWindow() still works
	//drawerIndicatorEnabled: false
});
drawer.addEventListener('draweropen', function(e) {
	//win.title = "open " + e.drawer;
});
drawer.addEventListener('drawerclose', function(e) {
	//win.title = "close";
});
drawer.addEventListener('drawerslide', function(e) {
	//win.title = "slide: " + e.offset.toFixed(2);
});

win.addEventListener("open", function() {
	win.activity.actionBar.onHomeIconItemSelected = function() {
		drawer.toggleLeftWindow();
	};
});
win.addEventListener('android:back', function(e) {
	drawer.toggleLeftWindow();
});

win.add(drawer);
win.add(progressIndicatorchat);