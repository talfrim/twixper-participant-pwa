// twitterApiCommunicator.js


//require("dotenv").config();
//console.log(process.env);

/*
var T = new Twit({
  consumer_key:         process.env.API_KEY,
  consumer_secret:      process.env.API_SECRET_KEY,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
})*/

//COMMENTING the following code because its only prpuse is writing 
//the feed to a fille. Then I copied the output to export at the end.

/*
console.log("running")
let Twit = require('twit')

var T = new Twit({
    consumer_key:         'OMF3C62ujk8hZhtBxs2PKR5qu',
    consumer_secret:      'HpNJkId1HCkj8LAnR9wgD7XRc9kddhz5vCvXTkoEmTbIpHNYLI',
    access_token:         '1238476547444572162-t8xwUcDloOjQDyFYKmOqe57JAi9y3q',
    access_token_secret:  'IuCVKE0scTYoY7KxJkvkQB7YtFzXohg7OHAtAI6WTJmfX',
})
var fs = require('fs');

console.log("function");
T.get('statuses/home_timeline', {count: 10},
  function gotData(err, data, response){
      //Write the data to file
      fs.writeFile('feedJSON10.txt', JSON.stringify(data), function (err) {
        if (err) console.log('Error in writing feed to file');
        console.log('Saved feed to file');
      });
  }
)*/


/*
export default {
  getHomeTimeline(){
      console.log("function");
      T.get('statuses/home_timeline', 
        function gotData(err, data, response){
            console.log(data)
        }
      );
  },
}
*/

export default [
	{
		"created_at":"Tue Oct 20 21:52:46 +0000 2020",
		"id":1318671527919915000,
		"id_str":"1318671527919915011",
		"text":"RT @JenniBns: Alfred Nakache was an Algerian-French Jewish swimmer. North African champion, he then swam for France and broke the 200m butt…",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				{
					"screen_name":"JenniBns",
					"name":"Jenny 🐚",
					"id":978762768370323500,
					"id_str":"978762768370323458",
					"indices":[
						3,
						12
					]
				}
			],
			"urls":[
				
			]
		},
		"source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id":null,
		"in_reply_to_status_id_str":null,
		"in_reply_to_user_id":null,
		"in_reply_to_user_id_str":null,
		"in_reply_to_screen_name":null,
		"user":{
			"id":2986232390,
			"id_str":"2986232390",
			"name":"צבי האוזר",
			"screen_name":"ZviHauser",
			"location":"",
			"description":"יושב ראש ועדת החוץ והבטחון בכנסת ישראל. מזכיר הממשלה ה-16. אוהב העם והארץ. אבא של מיכאל ויואב. גם באינסטגרם: https://t.co/KSaaotALFJ",
			"url":"https://t.co/iVbcdqwz8c",
			"entities":{
				"url":{
					"urls":[
						{
							"url":"https://t.co/iVbcdqwz8c",
							"expanded_url":"https://t.me/zvihauserupdates",
							"display_url":"t.me/zvihauserupdat…",
							"indices":[
								0,
								23
							]
						}
					]
				},
				"description":{
					"urls":[
						{
							"url":"https://t.co/KSaaotALFJ",
							"expanded_url":"https://bit.ly/2PGcrR3",
							"display_url":"bit.ly/2PGcrR3",
							"indices":[
								109,
								132
							]
						}
					]
				}
			},
			"protected":false,
			"followers_count":34182,
			"friends_count":632,
			"listed_count":109,
			"created_at":"Fri Jan 16 23:47:20 +0000 2015",
			"favourites_count":8536,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":true,
			"verified":true,
			"statuses_count":3548,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"C0DEED",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/929418833412214786/hRJwajKe_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/929418833412214786/hRJwajKe_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/2986232390/1556658698",
			"profile_link_color":"1DA1F2",
			"profile_sidebar_border_color":"C0DEED",
			"profile_sidebar_fill_color":"DDEEF6",
			"profile_text_color":"333333",
			"profile_use_background_image":true,
			"has_extended_profile":true,
			"default_profile":true,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"retweeted_status":{
			"created_at":"Mon Oct 19 19:00:39 +0000 2020",
			"id":1318265826504544300,
			"id_str":"1318265826504544257",
			"text":"Alfred Nakache was an Algerian-French Jewish swimmer. North African champion, he then swam for France and broke the… https://t.co/vg7rHFxku4",
			"truncated":true,
			"entities":{
				"hashtags":[
					
				],
				"symbols":[
					
				],
				"user_mentions":[
					
				],
				"urls":[
					{
						"url":"https://t.co/vg7rHFxku4",
						"expanded_url":"https://twitter.com/i/web/status/1318265826504544257",
						"display_url":"twitter.com/i/web/status/1…",
						"indices":[
							117,
							140
						]
					}
				]
			},
			"source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
			"in_reply_to_status_id":null,
			"in_reply_to_status_id_str":null,
			"in_reply_to_user_id":null,
			"in_reply_to_user_id_str":null,
			"in_reply_to_screen_name":null,
			"user":{
				"id":978762768370323500,
				"id_str":"978762768370323458",
				"name":"Jenny 🐚",
				"screen_name":"JenniBns",
				"location":"🇿🇦 Mother City",
				"description":"🇮🇱✡︎ | Iraqi Jew sharing Mizrahi History 📚| Sidekick : @rinouch935 | צברית בדם | بنت الرافدين | #MakeMesopotamiaGreatAgain",
				"url":null,
				"entities":{
					"description":{
						"urls":[
							
						]
					}
				},
				"protected":false,
				"followers_count":3847,
				"friends_count":617,
				"listed_count":9,
				"created_at":"Tue Mar 27 22:36:43 +0000 2018",
				"favourites_count":26277,
				"utc_offset":null,
				"time_zone":null,
				"geo_enabled":true,
				"verified":false,
				"statuses_count":17773,
				"lang":null,
				"contributors_enabled":false,
				"is_translator":false,
				"is_translation_enabled":false,
				"profile_background_color":"000000",
				"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile":false,
				"profile_image_url":"http://pbs.twimg.com/profile_images/1311390428764217347/_loFX1sf_normal.jpg",
				"profile_image_url_https":"https://pbs.twimg.com/profile_images/1311390428764217347/_loFX1sf_normal.jpg",
				"profile_banner_url":"https://pbs.twimg.com/profile_banners/978762768370323458/1572560429",
				"profile_link_color":"ABB8C2",
				"profile_sidebar_border_color":"000000",
				"profile_sidebar_fill_color":"000000",
				"profile_text_color":"000000",
				"profile_use_background_image":false,
				"has_extended_profile":true,
				"default_profile":false,
				"default_profile_image":false,
				"following":false,
				"follow_request_sent":false,
				"notifications":false,
				"translator_type":"none"
			},
			"geo":null,
			"coordinates":null,
			"place":null,
			"contributors":null,
			"is_quote_status":false,
			"retweet_count":141,
			"favorite_count":424,
			"favorited":false,
			"retweeted":false,
			"possibly_sensitive":false,
			"possibly_sensitive_appealable":false,
			"lang":"en"
		},
		"is_quote_status":false,
		"retweet_count":141,
		"favorite_count":0,
		"favorited":false,
		"retweeted":false,
		"lang":"en"
	},
	{
		"created_at":"Tue Oct 20 20:46:20 +0000 2020",
		"id":1318654807821963300,
		"id_str":"1318654807821963264",
		"text":"כלים טיפולים בקהילה, ובמקרי קצה - שימוש בכלי המשפט הפלילי שקיימים גם היום.",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				
			],
			"urls":[
				
			]
		},
		"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id":1318654805833863200,
		"in_reply_to_status_id_str":"1318654805833863170",
		"in_reply_to_user_id":3185280620,
		"in_reply_to_user_id_str":"3185280620",
		"in_reply_to_screen_name":"bezalelsm",
		"user":{
			"id":3185280620,
			"id_str":"3185280620",
			"name":"בצלאל סמוטריץ'",
			"screen_name":"bezalelsm",
			"location":"ישראל",
			"description":"‏‏יושב ראש מפלגת האיחוד הלאומי.",
			"url":null,
			"entities":{
				"description":{
					"urls":[
						
					]
				}
			},
			"protected":false,
			"followers_count":127533,
			"friends_count":131,
			"listed_count":238,
			"created_at":"Mon May 04 14:14:28 +0000 2015",
			"favourites_count":43278,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":false,
			"verified":true,
			"statuses_count":10107,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"000000",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1218118064069279744/OHvBVXbg_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1218118064069279744/OHvBVXbg_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/3185280620/1581068979",
			"profile_link_color":"89C9FA",
			"profile_sidebar_border_color":"000000",
			"profile_sidebar_fill_color":"000000",
			"profile_text_color":"000000",
			"profile_use_background_image":false,
			"has_extended_profile":false,
			"default_profile":false,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"is_quote_status":false,
		"retweet_count":2,
		"favorite_count":92,
		"favorited":false,
		"retweeted":false,
		"lang":"iw"
	},
	{
		"created_at":"Tue Oct 20 20:46:19 +0000 2020",
		"id":1318654805833863200,
		"id_str":"1318654805833863170",
		"text":"אבל אתן לא מסוגלות לנהל דיון רציני ומעמיק וכל מה שנשאר לכן זה להכפיש ולהפוך את מי שחושב אחרת מכן למי שמתעלם/תומך בא… https://t.co/E1CH41XFw5",
		"truncated":true,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				
			],
			"urls":[
				{
					"url":"https://t.co/E1CH41XFw5",
					"expanded_url":"https://twitter.com/i/web/status/1318654805833863170",
					"display_url":"twitter.com/i/web/status/1…",
					"indices":[
						117,
						140
					]
				}
			]
		},
		"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id":1318654803065659400,
		"in_reply_to_status_id_str":"1318654803065659393",
		"in_reply_to_user_id":3185280620,
		"in_reply_to_user_id_str":"3185280620",
		"in_reply_to_screen_name":"bezalelsm",
		"user":{
			"id":3185280620,
			"id_str":"3185280620",
			"name":"בצלאל סמוטריץ'",
			"screen_name":"bezalelsm",
			"location":"ישראל",
			"description":"‏‏יושב ראש מפלגת האיחוד הלאומי.",
			"url":null,
			"entities":{
				"description":{
					"urls":[
						
					]
				}
			},
			"protected":false,
			"followers_count":127533,
			"friends_count":131,
			"listed_count":238,
			"created_at":"Mon May 04 14:14:28 +0000 2015",
			"favourites_count":43278,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":false,
			"verified":true,
			"statuses_count":10107,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"000000",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1218118064069279744/OHvBVXbg_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1218118064069279744/OHvBVXbg_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/3185280620/1581068979",
			"profile_link_color":"89C9FA",
			"profile_sidebar_border_color":"000000",
			"profile_sidebar_fill_color":"000000",
			"profile_text_color":"000000",
			"profile_use_background_image":false,
			"has_extended_profile":false,
			"default_profile":false,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"is_quote_status":false,
		"retweet_count":3,
		"favorite_count":113,
		"favorited":false,
		"retweeted":false,
		"lang":"iw"
	},
	{
		"created_at":"Tue Oct 20 20:46:19 +0000 2020",
		"id":1318654803065659400,
		"id_str":"1318654803065659393",
		"text":"ככה בדיוק נראית דמגוגיה בגרוש!\n\nתייגו צעקנים וצעקניות שלא יודעים לנהל דיון לגופו של עניין והולכים למחוזות הדמגוגיה.… https://t.co/8FVe9EyOJa",
		"truncated":true,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				
			],
			"urls":[
				{
					"url":"https://t.co/8FVe9EyOJa",
					"expanded_url":"https://twitter.com/i/web/status/1318654803065659393",
					"display_url":"twitter.com/i/web/status/1…",
					"indices":[
						117,
						140
					]
				}
			]
		},
		"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id":null,
		"in_reply_to_status_id_str":null,
		"in_reply_to_user_id":null,
		"in_reply_to_user_id_str":null,
		"in_reply_to_screen_name":null,
		"user":{
			"id":3185280620,
			"id_str":"3185280620",
			"name":"בצלאל סמוטריץ'",
			"screen_name":"bezalelsm",
			"location":"ישראל",
			"description":"‏‏יושב ראש מפלגת האיחוד הלאומי.",
			"url":null,
			"entities":{
				"description":{
					"urls":[
						
					]
				}
			},
			"protected":false,
			"followers_count":127533,
			"friends_count":131,
			"listed_count":238,
			"created_at":"Mon May 04 14:14:28 +0000 2015",
			"favourites_count":43278,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":false,
			"verified":true,
			"statuses_count":10107,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"000000",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1218118064069279744/OHvBVXbg_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1218118064069279744/OHvBVXbg_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/3185280620/1581068979",
			"profile_link_color":"89C9FA",
			"profile_sidebar_border_color":"000000",
			"profile_sidebar_fill_color":"000000",
			"profile_text_color":"000000",
			"profile_use_background_image":false,
			"has_extended_profile":false,
			"default_profile":false,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"is_quote_status":true,
		"quoted_status_id":1318625033368047600,
		"quoted_status_id_str":"1318625033368047628",
		"quoted_status":{
			"created_at":"Tue Oct 20 18:48:01 +0000 2020",
			"id":1318625033368047600,
			"id_str":"1318625033368047628",
			"text":"ככה, בדיוק ככה נראית אלימות כלכלית!\nתייגו חברי כנסת שלא יודעים מה זה להסתובב ברחוב בלי לדעת איפה הם ישנו  בלילה הבא… https://t.co/4KG1ObRj5a",
			"truncated":true,
			"entities":{
				"hashtags":[
					
				],
				"symbols":[
					
				],
				"user_mentions":[
					
				],
				"urls":[
					{
						"url":"https://t.co/4KG1ObRj5a",
						"expanded_url":"https://twitter.com/i/web/status/1318625033368047628",
						"display_url":"twitter.com/i/web/status/1…",
						"indices":[
							117,
							140
						]
					}
				]
			},
			"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
			"in_reply_to_status_id":1318624679435882500,
			"in_reply_to_status_id_str":"1318624679435882497",
			"in_reply_to_user_id":1344892465,
			"in_reply_to_user_id_str":"1344892465",
			"in_reply_to_screen_name":"fainys",
			"user":{
				"id":1344892465,
				"id_str":"1344892465",
				"name":"fainy",
				"screen_name":"fainys",
				"location":"",
				"description":"‏יזמת חברתית -חינוכית.  חרדית, פמינסטית. מאמינה באנשים,בחינוך ובתיקון עולם",
				"url":null,
				"entities":{
					"description":{
						"urls":[
							
						]
					}
				},
				"protected":false,
				"followers_count":516,
				"friends_count":160,
				"listed_count":1,
				"created_at":"Thu Apr 11 17:30:12 +0000 2013",
				"favourites_count":1790,
				"utc_offset":null,
				"time_zone":null,
				"geo_enabled":false,
				"verified":false,
				"statuses_count":683,
				"lang":null,
				"contributors_enabled":false,
				"is_translator":false,
				"is_translation_enabled":false,
				"profile_background_color":"C0DEED",
				"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile":false,
				"profile_image_url":"http://pbs.twimg.com/profile_images/1283105915630235655/cpKQsAY7_normal.jpg",
				"profile_image_url_https":"https://pbs.twimg.com/profile_images/1283105915630235655/cpKQsAY7_normal.jpg",
				"profile_link_color":"1DA1F2",
				"profile_sidebar_border_color":"C0DEED",
				"profile_sidebar_fill_color":"DDEEF6",
				"profile_text_color":"333333",
				"profile_use_background_image":true,
				"has_extended_profile":false,
				"default_profile":true,
				"default_profile_image":false,
				"following":false,
				"follow_request_sent":false,
				"notifications":false,
				"translator_type":"none"
			},
			"geo":null,
			"coordinates":null,
			"place":null,
			"contributors":null,
			"is_quote_status":false,
			"retweet_count":3,
			"favorite_count":69,
			"favorited":false,
			"retweeted":false,
			"lang":"iw"
		},
		"retweet_count":7,
		"favorite_count":147,
		"favorited":false,
		"retweeted":false,
		"possibly_sensitive":false,
		"possibly_sensitive_appealable":false,
		"lang":"iw"
	},
	{
		"created_at":"Tue Oct 20 20:44:53 +0000 2020",
		"id":1318654444242948000,
		"id_str":"1318654444242948098",
		"text":"לא יודע למה נזכרתי בזה פתאום. לונדון 2010\n\nhttps://t.co/M7iM0zDWn3",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				
			],
			"urls":[
				{
					"url":"https://t.co/M7iM0zDWn3",
					"expanded_url":"https://bit.ly/3dKmTmL",
					"display_url":"bit.ly/3dKmTmL",
					"indices":[
						43,
						66
					]
				}
			]
		},
		"source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id":null,
		"in_reply_to_status_id_str":null,
		"in_reply_to_user_id":null,
		"in_reply_to_user_id_str":null,
		"in_reply_to_screen_name":null,
		"user":{
			"id":114894966,
			"id_str":"114894966",
			"name":"עמית סגל Amit Segal",
			"screen_name":"amit_segal",
			"location":"Israel",
			"description":"חושב על פוליטיקה במקום על רומנטיקה. פרשן פוליטי @N12news, @yediotahronot, אבא של עברי וענר מירושלים 🇮🇱 בטלגרם: https://t.co/IZrBXqXJQv",
			"url":"https://t.co/qeREecAIjo",
			"entities":{
				"url":{
					"urls":[
						{
							"url":"https://t.co/qeREecAIjo",
							"expanded_url":"http://www.amitsegal.co.il",
							"display_url":"amitsegal.co.il",
							"indices":[
								0,
								23
							]
						}
					]
				},
				"description":{
					"urls":[
						{
							"url":"https://t.co/IZrBXqXJQv",
							"expanded_url":"http://t.me/amitsegal",
							"display_url":"t.me/amitsegal",
							"indices":[
								111,
								134
							]
						}
					]
				}
			},
			"protected":false,
			"followers_count":529067,
			"friends_count":33,
			"listed_count":720,
			"created_at":"Tue Feb 16 23:36:16 +0000 2010",
			"favourites_count":17761,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":true,
			"verified":true,
			"statuses_count":18810,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"000000",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1306591398422962177/M-j0e_xN_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1306591398422962177/M-j0e_xN_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/114894966/1591039768",
			"profile_link_color":"ABB8C2",
			"profile_sidebar_border_color":"000000",
			"profile_sidebar_fill_color":"000000",
			"profile_text_color":"000000",
			"profile_use_background_image":false,
			"has_extended_profile":true,
			"default_profile":false,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"is_quote_status":false,
		"retweet_count":0,
		"favorite_count":109,
		"favorited":false,
		"retweeted":false,
		"possibly_sensitive":false,
		"possibly_sensitive_appealable":false,
		"lang":"iw"
	},
	{
		"created_at":"Tue Oct 20 20:43:18 +0000 2020",
		"id":1318654043779190800,
		"id_str":"1318654043779190784",
		"text":"RT @NadavGalon: משטרת אוחנה במיטבה. סמויים, מעצרי שווא וניסיונות איסוף מידע על מפגינים. מציע לכם להתמקד בארגון הפשע שאנחנו מפגינים לסלק מהש…",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				{
					"screen_name":"NadavGalon",
					"name":"Nadav Galon",
					"id":819479340257869800,
					"id_str":"819479340257869825",
					"indices":[
						3,
						14
					]
				}
			],
			"urls":[
				
			]
		},
		"source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id":null,
		"in_reply_to_status_id_str":null,
		"in_reply_to_user_id":null,
		"in_reply_to_user_id_str":null,
		"in_reply_to_screen_name":null,
		"user":{
			"id":884063996,
			"id_str":"884063996",
			"name":"זהבה גלאון",
			"screen_name":"zehavagalon",
			"location":"",
			"description":"Zahava Galon, President of @ZulatEquality and former Meretz chairperson and former Israeli MK\nנשיאת זולת לשוויון וזכויות-אדם, ראשת מרצ וחברת כנסת לשעבר",
			"url":null,
			"entities":{
				"description":{
					"urls":[
						
					]
				}
			},
			"protected":false,
			"followers_count":109266,
			"friends_count":1982,
			"listed_count":229,
			"created_at":"Tue Oct 16 09:10:13 +0000 2012",
			"favourites_count":51452,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":true,
			"verified":true,
			"statuses_count":8574,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"C0DEED",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1069151026962415616/gn1XtBWQ_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1069151026962415616/gn1XtBWQ_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/884063996/1530119483",
			"profile_link_color":"1DA1F2",
			"profile_sidebar_border_color":"C0DEED",
			"profile_sidebar_fill_color":"DDEEF6",
			"profile_text_color":"333333",
			"profile_use_background_image":true,
			"has_extended_profile":false,
			"default_profile":true,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"retweeted_status":{
			"created_at":"Tue Oct 20 20:40:50 +0000 2020",
			"id":1318653426541219800,
			"id_str":"1318653426541219841",
			"text":"משטרת אוחנה במיטבה. סמויים, מעצרי שווא וניסיונות איסוף מידע על מפגינים. מציע לכם להתמקד בארגון הפשע שאנחנו מפגינים… https://t.co/arFIiyjRcU",
			"truncated":true,
			"entities":{
				"hashtags":[
					
				],
				"symbols":[
					
				],
				"user_mentions":[
					
				],
				"urls":[
					{
						"url":"https://t.co/arFIiyjRcU",
						"expanded_url":"https://twitter.com/i/web/status/1318653426541219841",
						"display_url":"twitter.com/i/web/status/1…",
						"indices":[
							116,
							139
						]
					}
				]
			},
			"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
			"in_reply_to_status_id":null,
			"in_reply_to_status_id_str":null,
			"in_reply_to_user_id":null,
			"in_reply_to_user_id_str":null,
			"in_reply_to_screen_name":null,
			"user":{
				"id":819479340257869800,
				"id_str":"819479340257869825",
				"name":"Nadav Galon",
				"screen_name":"NadavGalon",
				"location":"Israel",
				"description":"נשוי לאלן ואבא של ברי. נלחם בשבילם על המדינה.",
				"url":"https://t.co/bjNVRyFbGV",
				"entities":{
					"url":{
						"urls":[
							{
								"url":"https://t.co/bjNVRyFbGV",
								"expanded_url":"http://www.glpr.co.il/",
								"display_url":"glpr.co.il",
								"indices":[
									0,
									23
								]
							}
						]
					},
					"description":{
						"urls":[
							
						]
					}
				},
				"protected":false,
				"followers_count":381,
				"friends_count":526,
				"listed_count":2,
				"created_at":"Thu Jan 12 09:41:14 +0000 2017",
				"favourites_count":25,
				"utc_offset":null,
				"time_zone":null,
				"geo_enabled":false,
				"verified":false,
				"statuses_count":23,
				"lang":null,
				"contributors_enabled":false,
				"is_translator":false,
				"is_translation_enabled":false,
				"profile_background_color":"F5F8FA",
				"profile_background_image_url":null,
				"profile_background_image_url_https":null,
				"profile_background_tile":false,
				"profile_image_url":"http://pbs.twimg.com/profile_images/1317034138688512001/26kFi1nm_normal.jpg",
				"profile_image_url_https":"https://pbs.twimg.com/profile_images/1317034138688512001/26kFi1nm_normal.jpg",
				"profile_banner_url":"https://pbs.twimg.com/profile_banners/819479340257869825/1602839305",
				"profile_link_color":"1DA1F2",
				"profile_sidebar_border_color":"C0DEED",
				"profile_sidebar_fill_color":"DDEEF6",
				"profile_text_color":"333333",
				"profile_use_background_image":true,
				"has_extended_profile":true,
				"default_profile":true,
				"default_profile_image":false,
				"following":false,
				"follow_request_sent":false,
				"notifications":false,
				"translator_type":"none"
			},
			"geo":null,
			"coordinates":null,
			"place":null,
			"contributors":null,
			"is_quote_status":true,
			"quoted_status_id":1318644673842450400,
			"quoted_status_id_str":"1318644673842450433",
			"quoted_status":{
				"created_at":"Tue Oct 20 20:06:04 +0000 2020",
				"id":1318644673842450400,
				"id_str":"1318644673842450433",
				"text":"אחרי שההפגנה בבלפור כבר התפזרה, זיו ברטפלד היה בדרכו הביתה כשארבעה בלשים הכניסו אותו לרכב אזרחי ולקחו אותו לחקירה.… https://t.co/wb75Rrt5VW",
				"truncated":true,
				"entities":{
					"hashtags":[
						
					],
					"symbols":[
						
					],
					"user_mentions":[
						
					],
					"urls":[
						{
							"url":"https://t.co/wb75Rrt5VW",
							"expanded_url":"https://twitter.com/i/web/status/1318644673842450433",
							"display_url":"twitter.com/i/web/status/1…",
							"indices":[
								116,
								139
							]
						}
					]
				},
				"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
				"in_reply_to_status_id":null,
				"in_reply_to_status_id_str":null,
				"in_reply_to_user_id":null,
				"in_reply_to_user_id_str":null,
				"in_reply_to_screen_name":null,
				"user":{
					"id":791911093354455000,
					"id_str":"791911093354455041",
					"name":"Inbar Tvizer ענבר טויזר",
					"screen_name":"inbartvizer",
					"location":"Jerusalem",
					"description":"‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏ענבר טויזר ‏‏כתבת בימי מגפה 054-2508724 ‎‎‎‎‎‎@N12news \n ‎‎‎‎‎",
					"url":"https://t.co/EFkCDxqmkS",
					"entities":{
						"url":{
							"urls":[
								{
									"url":"https://t.co/EFkCDxqmkS",
									"expanded_url":"https://m.n12.co.il/",
									"display_url":"m.n12.co.il",
									"indices":[
										0,
										23
									]
								}
							]
						},
						"description":{
							"urls":[
								
							]
						}
					},
					"protected":false,
					"followers_count":6750,
					"friends_count":817,
					"listed_count":41,
					"created_at":"Fri Oct 28 07:54:52 +0000 2016",
					"favourites_count":8366,
					"utc_offset":null,
					"time_zone":null,
					"geo_enabled":true,
					"verified":false,
					"statuses_count":2329,
					"lang":null,
					"contributors_enabled":false,
					"is_translator":false,
					"is_translation_enabled":false,
					"profile_background_color":"F5F8FA",
					"profile_background_image_url":null,
					"profile_background_image_url_https":null,
					"profile_background_tile":false,
					"profile_image_url":"http://pbs.twimg.com/profile_images/1272798261728903168/Mbf1BYCG_normal.jpg",
					"profile_image_url_https":"https://pbs.twimg.com/profile_images/1272798261728903168/Mbf1BYCG_normal.jpg",
					"profile_banner_url":"https://pbs.twimg.com/profile_banners/791911093354455041/1543058077",
					"profile_link_color":"1DA1F2",
					"profile_sidebar_border_color":"C0DEED",
					"profile_sidebar_fill_color":"DDEEF6",
					"profile_text_color":"333333",
					"profile_use_background_image":true,
					"has_extended_profile":true,
					"default_profile":true,
					"default_profile_image":false,
					"following":false,
					"follow_request_sent":false,
					"notifications":false,
					"translator_type":"none"
				},
				"geo":null,
				"coordinates":null,
				"place":null,
				"contributors":null,
				"is_quote_status":false,
				"retweet_count":36,
				"favorite_count":202,
				"favorited":false,
				"retweeted":false,
				"possibly_sensitive":false,
				"possibly_sensitive_appealable":false,
				"lang":"iw"
			},
			"retweet_count":3,
			"favorite_count":31,
			"favorited":false,
			"retweeted":false,
			"possibly_sensitive":false,
			"possibly_sensitive_appealable":false,
			"lang":"iw"
		},
		"is_quote_status":true,
		"quoted_status_id":1318644673842450400,
		"quoted_status_id_str":"1318644673842450433",
		"retweet_count":3,
		"favorite_count":0,
		"favorited":false,
		"retweeted":false,
		"lang":"iw"
	},
	{
		"created_at":"Tue Oct 20 20:37:47 +0000 2020",
		"id":1318652658698342400,
		"id_str":"1318652658698342402",
		"text":"RT @Mickeygitzin: \"ערכי המשפחה\" זה המילים המכובסות שהימין השמרני משתמש בהן כדי לתאר מצב בו גברים משתמש בכוחם הכלכלי החברתי או הפיזי כדי לנצ…",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				{
					"screen_name":"Mickeygitzin",
					"name":"Mickey Gitzin",
					"id":21625345,
					"id_str":"21625345",
					"indices":[
						3,
						16
					]
				}
			],
			"urls":[
				
			]
		},
		"source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id":null,
		"in_reply_to_status_id_str":null,
		"in_reply_to_user_id":null,
		"in_reply_to_user_id_str":null,
		"in_reply_to_screen_name":null,
		"user":{
			"id":884063996,
			"id_str":"884063996",
			"name":"זהבה גלאון",
			"screen_name":"zehavagalon",
			"location":"",
			"description":"Zahava Galon, President of @ZulatEquality and former Meretz chairperson and former Israeli MK\nנשיאת זולת לשוויון וזכויות-אדם, ראשת מרצ וחברת כנסת לשעבר",
			"url":null,
			"entities":{
				"description":{
					"urls":[
						
					]
				}
			},
			"protected":false,
			"followers_count":109266,
			"friends_count":1982,
			"listed_count":229,
			"created_at":"Tue Oct 16 09:10:13 +0000 2012",
			"favourites_count":51452,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":true,
			"verified":true,
			"statuses_count":8574,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"C0DEED",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1069151026962415616/gn1XtBWQ_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1069151026962415616/gn1XtBWQ_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/884063996/1530119483",
			"profile_link_color":"1DA1F2",
			"profile_sidebar_border_color":"C0DEED",
			"profile_sidebar_fill_color":"DDEEF6",
			"profile_text_color":"333333",
			"profile_use_background_image":true,
			"has_extended_profile":false,
			"default_profile":true,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"retweeted_status":{
			"created_at":"Tue Oct 20 18:57:56 +0000 2020",
			"id":1318627530728001500,
			"id_str":"1318627530728001537",
			"text":"\"ערכי המשפחה\" זה המילים המכובסות שהימין השמרני משתמש בהן כדי לתאר מצב בו גברים משתמש בכוחם הכלכלי החברתי או הפיזי כ… https://t.co/sLSgCyMM7Z",
			"truncated":true,
			"entities":{
				"hashtags":[
					
				],
				"symbols":[
					
				],
				"user_mentions":[
					
				],
				"urls":[
					{
						"url":"https://t.co/sLSgCyMM7Z",
						"expanded_url":"https://twitter.com/i/web/status/1318627530728001537",
						"display_url":"twitter.com/i/web/status/1…",
						"indices":[
							117,
							140
						]
					}
				]
			},
			"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
			"in_reply_to_status_id":null,
			"in_reply_to_status_id_str":null,
			"in_reply_to_user_id":null,
			"in_reply_to_user_id_str":null,
			"in_reply_to_screen_name":null,
			"user":{
				"id":21625345,
				"id_str":"21625345",
				"name":"Mickey Gitzin",
				"screen_name":"Mickeygitzin",
				"location":"Tel Aviv",
				"description":"Executive Director of the New Israel Fund in Israel",
				"url":"https://t.co/6r1xu6LIlv",
				"entities":{
					"url":{
						"urls":[
							{
								"url":"https://t.co/6r1xu6LIlv",
								"expanded_url":"http://www.nif.org.il",
								"display_url":"nif.org.il",
								"indices":[
									0,
									23
								]
							}
						]
					},
					"description":{
						"urls":[
							
						]
					}
				},
				"protected":false,
				"followers_count":8494,
				"friends_count":1395,
				"listed_count":43,
				"created_at":"Mon Feb 23 02:55:00 +0000 2009",
				"favourites_count":42410,
				"utc_offset":null,
				"time_zone":null,
				"geo_enabled":true,
				"verified":false,
				"statuses_count":12542,
				"lang":null,
				"contributors_enabled":false,
				"is_translator":false,
				"is_translation_enabled":false,
				"profile_background_color":"0B1933",
				"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
				"profile_background_tile":false,
				"profile_image_url":"http://pbs.twimg.com/profile_images/707123192259813376/IgakRV6d_normal.jpg",
				"profile_image_url_https":"https://pbs.twimg.com/profile_images/707123192259813376/IgakRV6d_normal.jpg",
				"profile_banner_url":"https://pbs.twimg.com/profile_banners/21625345/1457426281",
				"profile_link_color":"34A5CE",
				"profile_sidebar_border_color":"043C6E",
				"profile_sidebar_fill_color":"05132C",
				"profile_text_color":"004A86",
				"profile_use_background_image":true,
				"has_extended_profile":true,
				"default_profile":false,
				"default_profile_image":false,
				"following":false,
				"follow_request_sent":false,
				"notifications":false,
				"translator_type":"none"
			},
			"geo":null,
			"coordinates":null,
			"place":null,
			"contributors":null,
			"is_quote_status":false,
			"retweet_count":12,
			"favorite_count":160,
			"favorited":false,
			"retweeted":false,
			"lang":"iw"
		},
		"is_quote_status":false,
		"retweet_count":12,
		"favorite_count":0,
		"favorited":false,
		"retweeted":false,
		"lang":"iw"
	},
	{
		"created_at":"Tue Oct 20 20:37:13 +0000 2020",
		"id":1318652512770117600,
		"id_str":"1318652512770117637",
		"text":"RT @KnessetT: @roy_katz \n@Roy_Iddan \n@JacobEilon \n@galhirsch2015 \n@zehavagalon \n@bogie_yaalon \n@Ahmad_tibi",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				{
					"screen_name":"KnessetT",
					"name":"ערוץ כנסת",
					"id":1040246229895204900,
					"id_str":"1040246229895204865",
					"indices":[
						3,
						12
					]
				},
				{
					"screen_name":"roy_katz",
					"name":"Roy Katz רועי כ\"ץ",
					"id":444607166,
					"id_str":"444607166",
					"indices":[
						14,
						23
					]
				},
				{
					"screen_name":"Roy_Iddan",
					"name":"Roy Iddan 🏴‍☠️ רועי עידן",
					"id":40183789,
					"id_str":"40183789",
					"indices":[
						25,
						35
					]
				},
				{
					"screen_name":"JacobEilon",
					"name":"יעקב אילון",
					"id":3019533199,
					"id_str":"3019533199",
					"indices":[
						37,
						48
					]
				},
				{
					"screen_name":"galhirsch2015",
					"name":"גל הירש-Gal Hirsch",
					"id":3080357672,
					"id_str":"3080357672",
					"indices":[
						50,
						64
					]
				},
				{
					"screen_name":"zehavagalon",
					"name":"זהבה גלאון",
					"id":884063996,
					"id_str":"884063996",
					"indices":[
						66,
						78
					]
				},
				{
					"screen_name":"bogie_yaalon",
					"name":"משה 'בּוֹגִי' יעלון",
					"id":514082785,
					"id_str":"514082785",
					"indices":[
						80,
						93
					]
				},
				{
					"screen_name":"Ahmad_tibi",
					"name":"Ahmad Tibi",
					"id":39465137,
					"id_str":"39465137",
					"indices":[
						95,
						106
					]
				}
			],
			"urls":[
				
			]
		},
		"source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
		"in_reply_to_status_id":null,
		"in_reply_to_status_id_str":null,
		"in_reply_to_user_id":null,
		"in_reply_to_user_id_str":null,
		"in_reply_to_screen_name":null,
		"user":{
			"id":884063996,
			"id_str":"884063996",
			"name":"זהבה גלאון",
			"screen_name":"zehavagalon",
			"location":"",
			"description":"Zahava Galon, President of @ZulatEquality and former Meretz chairperson and former Israeli MK\nנשיאת זולת לשוויון וזכויות-אדם, ראשת מרצ וחברת כנסת לשעבר",
			"url":null,
			"entities":{
				"description":{
					"urls":[
						
					]
				}
			},
			"protected":false,
			"followers_count":109266,
			"friends_count":1982,
			"listed_count":229,
			"created_at":"Tue Oct 16 09:10:13 +0000 2012",
			"favourites_count":51452,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":true,
			"verified":true,
			"statuses_count":8574,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"C0DEED",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1069151026962415616/gn1XtBWQ_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1069151026962415616/gn1XtBWQ_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/884063996/1530119483",
			"profile_link_color":"1DA1F2",
			"profile_sidebar_border_color":"C0DEED",
			"profile_sidebar_fill_color":"DDEEF6",
			"profile_text_color":"333333",
			"profile_use_background_image":true,
			"has_extended_profile":false,
			"default_profile":true,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"retweeted_status":{
			"created_at":"Tue Oct 20 18:01:13 +0000 2020",
			"id":1318613256890667000,
			"id_str":"1318613256890667008",
			"text":"@roy_katz \n@Roy_Iddan \n@JacobEilon \n@galhirsch2015 \n@zehavagalon \n@bogie_yaalon \n@Ahmad_tibi",
			"truncated":false,
			"entities":{
				"hashtags":[
					
				],
				"symbols":[
					
				],
				"user_mentions":[
					{
						"screen_name":"roy_katz",
						"name":"Roy Katz רועי כ\"ץ",
						"id":444607166,
						"id_str":"444607166",
						"indices":[
							0,
							9
						]
					},
					{
						"screen_name":"Roy_Iddan",
						"name":"Roy Iddan 🏴‍☠️ רועי עידן",
						"id":40183789,
						"id_str":"40183789",
						"indices":[
							11,
							21
						]
					},
					{
						"screen_name":"JacobEilon",
						"name":"יעקב אילון",
						"id":3019533199,
						"id_str":"3019533199",
						"indices":[
							23,
							34
						]
					},
					{
						"screen_name":"galhirsch2015",
						"name":"גל הירש-Gal Hirsch",
						"id":3080357672,
						"id_str":"3080357672",
						"indices":[
							36,
							50
						]
					},
					{
						"screen_name":"zehavagalon",
						"name":"זהבה גלאון",
						"id":884063996,
						"id_str":"884063996",
						"indices":[
							52,
							64
						]
					},
					{
						"screen_name":"bogie_yaalon",
						"name":"משה 'בּוֹגִי' יעלון",
						"id":514082785,
						"id_str":"514082785",
						"indices":[
							66,
							79
						]
					},
					{
						"screen_name":"Ahmad_tibi",
						"name":"Ahmad Tibi",
						"id":39465137,
						"id_str":"39465137",
						"indices":[
							81,
							92
						]
					}
				],
				"urls":[
					
				]
			},
			"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
			"in_reply_to_status_id":1318612964690124800,
			"in_reply_to_status_id_str":"1318612964690124810",
			"in_reply_to_user_id":1040246229895204900,
			"in_reply_to_user_id_str":"1040246229895204865",
			"in_reply_to_screen_name":"KnessetT",
			"user":{
				"id":1040246229895204900,
				"id_str":"1040246229895204865",
				"name":"ערוץ כנסת",
				"screen_name":"KnessetT",
				"location":"גבעת רם, ירושלים",
				"description":"‏‏‏‏כל העדכונים מהמתרחש במליאה, בוועדות ובפוליטיקה הישראלית",
				"url":"https://t.co/bWcDGKubDC",
				"entities":{
					"url":{
						"urls":[
							{
								"url":"https://t.co/bWcDGKubDC",
								"expanded_url":"http://www.knesset.tv",
								"display_url":"knesset.tv",
								"indices":[
									0,
									23
								]
							}
						]
					},
					"description":{
						"urls":[
							
						]
					}
				},
				"protected":false,
				"followers_count":10621,
				"friends_count":954,
				"listed_count":73,
				"created_at":"Thu Sep 13 14:30:02 +0000 2018",
				"favourites_count":786,
				"utc_offset":null,
				"time_zone":null,
				"geo_enabled":false,
				"verified":true,
				"statuses_count":13135,
				"lang":null,
				"contributors_enabled":false,
				"is_translator":false,
				"is_translation_enabled":false,
				"profile_background_color":"F5F8FA",
				"profile_background_image_url":null,
				"profile_background_image_url_https":null,
				"profile_background_tile":false,
				"profile_image_url":"http://pbs.twimg.com/profile_images/1302963114745507841/cKPadQDk_normal.jpg",
				"profile_image_url_https":"https://pbs.twimg.com/profile_images/1302963114745507841/cKPadQDk_normal.jpg",
				"profile_banner_url":"https://pbs.twimg.com/profile_banners/1040246229895204865/1599558974",
				"profile_link_color":"1DA1F2",
				"profile_sidebar_border_color":"C0DEED",
				"profile_sidebar_fill_color":"DDEEF6",
				"profile_text_color":"333333",
				"profile_use_background_image":true,
				"has_extended_profile":false,
				"default_profile":true,
				"default_profile_image":false,
				"following":false,
				"follow_request_sent":false,
				"notifications":false,
				"translator_type":"none"
			},
			"geo":null,
			"coordinates":null,
			"place":null,
			"contributors":null,
			"is_quote_status":false,
			"retweet_count":1,
			"favorite_count":3,
			"favorited":false,
			"retweeted":false,
			"lang":"und"
		},
		"is_quote_status":false,
		"retweet_count":1,
		"favorite_count":0,
		"favorited":false,
		"retweeted":false,
		"lang":"und"
	},
	{
		"created_at":"Tue Oct 20 20:29:31 +0000 2020",
		"id":1318650578457759700,
		"id_str":"1318650578457759747",
		"text":"למי שמעוניין בקטע המלא והלא ערוך שהופץ על ידי כחול לבן, הוא מצ\"ב: https://t.co/PyKrPhGnSA",
		"truncated":false,
		"entities":{
			"hashtags":[
				
			],
			"symbols":[
				
			],
			"user_mentions":[
				
			],
			"urls":[
				
			],
			"media":[
				{
					"id":1318650321598615600,
					"id_str":"1318650321598615554",
					"indices":[
						66,
						89
					],
					"media_url":"http://pbs.twimg.com/ext_tw_video_thumb/1318650321598615554/pu/img/I1AOg20rUIASdXXD.jpg",
					"media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/1318650321598615554/pu/img/I1AOg20rUIASdXXD.jpg",
					"url":"https://t.co/PyKrPhGnSA",
					"display_url":"pic.twitter.com/PyKrPhGnSA",
					"expanded_url":"https://twitter.com/zoharm7/status/1318650578457759747/video/1",
					"type":"photo",
					"sizes":{
						"thumb":{
							"w":150,
							"h":150,
							"resize":"crop"
						},
						"small":{
							"w":680,
							"h":322,
							"resize":"fit"
						},
						"medium":{
							"w":1200,
							"h":568,
							"resize":"fit"
						},
						"large":{
							"w":1280,
							"h":606,
							"resize":"fit"
						}
					}
				}
			]
		},
		"extended_entities":{
			"media":[
				{
					"id":1318650321598615600,
					"id_str":"1318650321598615554",
					"indices":[
						66,
						89
					],
					"media_url":"http://pbs.twimg.com/ext_tw_video_thumb/1318650321598615554/pu/img/I1AOg20rUIASdXXD.jpg",
					"media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/1318650321598615554/pu/img/I1AOg20rUIASdXXD.jpg",
					"url":"https://t.co/PyKrPhGnSA",
					"display_url":"pic.twitter.com/PyKrPhGnSA",
					"expanded_url":"https://twitter.com/zoharm7/status/1318650578457759747/video/1",
					"type":"video",
					"sizes":{
						"thumb":{
							"w":150,
							"h":150,
							"resize":"crop"
						},
						"small":{
							"w":680,
							"h":322,
							"resize":"fit"
						},
						"medium":{
							"w":1200,
							"h":568,
							"resize":"fit"
						},
						"large":{
							"w":1280,
							"h":606,
							"resize":"fit"
						}
					},
					"video_info":{
						"aspect_ratio":[
							640,
							303
						],
						"duration_millis":78424,
						"variants":[
							{
								"content_type":"application/x-mpegURL",
								"url":"https://video.twimg.com/ext_tw_video/1318650321598615554/pu/pl/WeNF8sjtwihYYmQK.m3u8?tag=10"
							},
							{
								"bitrate":832000,
								"content_type":"video/mp4",
								"url":"https://video.twimg.com/ext_tw_video/1318650321598615554/pu/vid/760x360/1PFjKfO2fmNI4hsW.mp4?tag=10"
							},
							{
								"bitrate":2176000,
								"content_type":"video/mp4",
								"url":"https://video.twimg.com/ext_tw_video/1318650321598615554/pu/vid/1280x606/sTt5446YEhkIADf9.mp4?tag=10"
							},
							{
								"bitrate":256000,
								"content_type":"video/mp4",
								"url":"https://video.twimg.com/ext_tw_video/1318650321598615554/pu/vid/570x270/Zv1E5_BkIUDQsX9B.mp4?tag=10"
							}
						]
					},
					"additional_media_info":{
						"monetizable":false
					}
				}
			]
		},
		"source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
		"in_reply_to_status_id":1318648582472335400,
		"in_reply_to_status_id_str":"1318648582472335363",
		"in_reply_to_user_id":325609507,
		"in_reply_to_user_id_str":"325609507",
		"in_reply_to_screen_name":"zoharm7",
		"user":{
			"id":325609507,
			"id_str":"325609507",
			"name":"Miki Zohar מיקי זוהר",
			"screen_name":"zoharm7",
			"location":"ישראל",
			"description":"‏‏יו״ר הקואליציה ויו״ר סיעת הליכוד.\nאינסטגרם: https://t.co/fg1pedFDUS‎",
			"url":"https://t.co/BbVJ5rhF1a",
			"entities":{
				"url":{
					"urls":[
						{
							"url":"https://t.co/BbVJ5rhF1a",
							"expanded_url":"https://www.facebook.com/MikiZoharLikud/",
							"display_url":"facebook.com/MikiZoharLikud/",
							"indices":[
								0,
								23
							]
						}
					]
				},
				"description":{
					"urls":[
						{
							"url":"https://t.co/fg1pedFDUS",
							"expanded_url":"https://instagram.com/miki_zohar",
							"display_url":"instagram.com/miki_zohar",
							"indices":[
								46,
								69
							]
						}
					]
				}
			},
			"protected":false,
			"followers_count":46139,
			"friends_count":183,
			"listed_count":151,
			"created_at":"Tue Jun 28 15:41:12 +0000 2011",
			"favourites_count":712,
			"utc_offset":null,
			"time_zone":null,
			"geo_enabled":true,
			"verified":true,
			"statuses_count":1849,
			"lang":null,
			"contributors_enabled":false,
			"is_translator":false,
			"is_translation_enabled":false,
			"profile_background_color":"C0DEED",
			"profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png",
			"profile_background_tile":false,
			"profile_image_url":"http://pbs.twimg.com/profile_images/1273551122905673730/2i15Z3z3_normal.jpg",
			"profile_image_url_https":"https://pbs.twimg.com/profile_images/1273551122905673730/2i15Z3z3_normal.jpg",
			"profile_banner_url":"https://pbs.twimg.com/profile_banners/325609507/1592463660",
			"profile_link_color":"1DA1F2",
			"profile_sidebar_border_color":"C0DEED",
			"profile_sidebar_fill_color":"DDEEF6",
			"profile_text_color":"333333",
			"profile_use_background_image":true,
			"has_extended_profile":true,
			"default_profile":true,
			"default_profile_image":false,
			"following":true,
			"follow_request_sent":false,
			"notifications":false,
			"translator_type":"none"
		},
		"geo":null,
		"coordinates":null,
		"place":null,
		"contributors":null,
		"is_quote_status":false,
		"retweet_count":4,
		"favorite_count":53,
		"favorited":false,
		"retweeted":false,
		"possibly_sensitive":false,
		"possibly_sensitive_appealable":false,
		"lang":"iw"
	}
]
