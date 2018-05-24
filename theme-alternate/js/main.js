var td_theme_switcher = (function () 
{
        var themes = [];
  
  		// Initialise
        function init() {
           var styles = document.getElementsByTagName("link");
		   for(var i = 0; i < styles.length; i++) {
		   		themes.push( styles[i].getAttribute("title") );
		   }
        }
 
 		// Set an active style
        function setStyle(style, save) {
        	var i, a = document.getElementsByTagName("link");
            for(i = 0; i < a.length; i++) {
            	// Disable all set and alternate styles
			    if(a[i].getAttribute("rel").indexOf("style") != -1 && a[i].getAttribute("title")) 
			    {
			       a[i].disabled = true;
			       if(a[i].getAttribute("title") == style) a[i].disabled = false;
			    }
			    // Save the cookie
		        if(save)createCookie('preferredStyle',style,365);
			}
        }

        // Get possible styles
        function getStyles() {
        	return themes;
        }

        // Create cookie
		function createCookie(name, value, days) {
		    var expires;
		    if (days) {
		        var date = new Date();
		        date.setTime(date.getTime()+(days*24*60*60*1000));
		        expires = "; expires="+date.toGMTString();
		    }
		    else {
		        expires = "";
		    }
		    document.cookie = name+"="+value+expires+"; path=/";
		}

		// Read cookie
		function readCookie(name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0) === ' ') {
		            c = c.substring(1,c.length);
		        }
		        if (c.indexOf(nameEQ) === 0) {
		            return c.substring(nameEQ.length,c.length);
		        }
		    }
		    return null;
		}
 
        return {
            init: init,
            setStyle: setStyle,
            getStyles: getStyles,
            readCookie: readCookie,
        };
 
})();

(function($, td_theme_switcher, window) {
	// On window load, get the currently saved cookie value of preferredStyle and change theme
	$(window).load(function(){
		// On load, always get theme from context
		// User can change the theme on another tab and our app might not know it
		microsoftTeams.getContext(function (context) {
		    themechanged(context.theme);
		});
		
		// var preferredStyle = td_theme_switcher.readCookie('preferredStyle');
		// td_theme_switcher.setStyle(preferredStyle,0);
	});

	// Callback function for the themeChanged Event of Teams
	function themechanged(theme)
	{
		td_theme_switcher.setStyle(theme,1);
	}

	microsoftTeams.registerOnThemeChangeHandler(themechanged);

}(jQuery, td_theme_switcher, window));



