/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	// top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		// {
		// 	module: "clock",
		// 	position: "top_left"
		// },
		{
			module: "calendar",
			header: "Austin Zhanna Shared Calendar",
			position: "bottom_center",
			// position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 300000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/85955c56e3e1088641ca55553885299a95ed5f577bdd798813ffa767b3854c88%40group.calendar.google.com/private-72a548746a1e3dcf00bd8b7e61e0c7d0/basic.ics",
						name: "azshare"
					}
				]
			}
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	config: {
		// 		weatherProvider: "openmeteo",
		// 		type: "current",
		// 		lat: 42.319519,
		// 		lon: -72.629761
		// 	}
		// },
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		weatherProvider: "openmeteo",
		// 		type: "forecast",
		// 		lat: 42.319519,
		// 		lon: -72.629761
		// 	}
		// },

		{
			module: "MMM-CalendarExt3",
			position: "top_center",
			title: "",
			config: {
				mode: "week",
				instanceId: "az1",
				locale: 'en-US',
				maxEventLines: 5,
				firstDayOfWeek: 1,
				fontSize: '20px',
				eventHeight: '22px',
				calendarSet: ['azshare'],
				weeksInView: 3,
				useWeather: false
			}
		},


		// {
		// 	module: 'DailyXKCD',
		// 	position: 'upper_third',
		// 	config: {
		// 		invertColors: false,
		// 		showTitle: true,
		// 		showAltText: true
		// 	}
		// },
		// {
		// 	module: 'MMM-WordOfTheDay',
		// 	position: 'top_center',
		// 	config: {
		// 		headerText: "Word of the Day",
		// 		updateInterval: 10 * 60 * 1000, // 10 minutes
		// 	}
		// },

//		{
//			module: "newsfeed",
//			position: "bottom_bar",
//			config: {
//				feeds: [
//					{
//						title: "New York Times",
//						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
//					}
//				],
//				showSourceTitle: true,
//				showPublishDate: true,
//				broadcastNewsFeeds: true,
//				broadcastNewsUpdates: true
//			}
//		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
