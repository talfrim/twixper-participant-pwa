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

/*CONTAINS BOTH TWEETS WITH "tweet+mode: extended" PARAMETERS AND WITHOUT THIS PARAMETER. */
export default [
    {
        "created_at": "Mon Oct 26 15:32:13 +0000 2020",
        "id": 1320750085811113985,
        "id_str": "1320750085811113985",
        "full_text": "ביום רביעי הבא נניח הצעה לפיזור הכנסת. לא עוד שבועיים, לא עוד חודש, לא עוד 45 יום, יום רביעי הבא תונח על שולחן הכנסת הצעה לפיזור הכנסת. אם עד אז לא יעבור תקציב אין לי ספק, שהפעם אנשי כחול לבן יעמדו במילתם, יצביעו איתנו, נפזר את הכנסת, נשלח את הממשלה האיומה הביתה ונלך לבחירות. https://t.co/pqxZjsg2lr",
        "truncated": false,
        "display_text_range": [
            0,
            276
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1320749550185943042,
                    "id_str": "1320749550185943042",
                    "indices": [
                        277,
                        300
                    ],
                    "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "url": "https://t.co/pqxZjsg2lr",
                    "display_url": "pic.twitter.com/pqxZjsg2lr",
                    "expanded_url": "https://twitter.com/yairlapid/status/1320750085811113985/video/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1280,
                            "h": 720,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1320749550185943042,
                    "id_str": "1320749550185943042",
                    "indices": [
                        277,
                        300
                    ],
                    "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1320749550185943042/pu/img/gaaYrC0P3BRx4G3q.jpg",
                    "url": "https://t.co/pqxZjsg2lr",
                    "display_url": "pic.twitter.com/pqxZjsg2lr",
                    "expanded_url": "https://twitter.com/yairlapid/status/1320750085811113985/video/1",
                    "type": "video",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1280,
                            "h": 720,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            16,
                            9
                        ],
                        "duration_millis": 27834,
                        "variants": [
                            {
                                "bitrate": 256000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/vid/480x270/W1y7Hp15llS0RH4r.mp4?tag=10"
                            },
                            {
                                "bitrate": 2176000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/vid/1280x720/WYL-g1jlYEkZYy9Q.mp4?tag=10"
                            },
                            {
                                "content_type": "application/x-mpegURL",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/pl/NZa-J45vWANS1siO.m3u8?tag=10"
                            },
                            {
                                "bitrate": 832000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1320749550185943042/pu/vid/640x360/NIoGS37d8Xm4i3Cb.mp4?tag=10"
                            }
                        ]
                    },
                    "additional_media_info": {
                        "monetizable": false
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 2946300174,
            "id_str": "2946300174",
            "name": "יאיר לפיד - Yair Lapid",
            "screen_name": "yairlapid",
            "location": "ישראל",
            "description": "ראש האופוזיציה • חבר כנסת • יו״ר יש עתיד - תל\"ם • Yair Lapid - Member of Knesset and Chairperson of Yesh Atid",
            "url": "https://t.co/NAKeERt2K2",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/NAKeERt2K2",
                            "expanded_url": "http://www.yeshatid.org.il",
                            "display_url": "yeshatid.org.il",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 224866,
            "friends_count": 173,
            "listed_count": 406,
            "created_at": "Sun Dec 28 12:22:24 +0000 2014",
            "favourites_count": 141,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 4103,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1244262677163257857/tXYybiqv_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1244262677163257857/tXYybiqv_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/2946300174/1585490316",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 2,
        "favorite_count": 75,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "iw"
    },
	{
        "created_at": "Tue Oct 06 20:14:49 +0000 2020",
        "id": 1313573447121993728,
        "id_str": "1313573447121993728",
        "text": "É sempre um sentimento especial representar o nosso país!🇵🇹👏🏽💪🏽\n#todosportugal https://t.co/yTYT5CKZtK",
        "truncated": false,
        "entities": {
            "hashtags": [
                {
                    "text": "todosportugal",
                    "indices": [
                        64,
                        78
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1313573442092965889,
                    "id_str": "1313573442092965889",
                    "indices": [
                        79,
                        102
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjrAFgJWoAEYSoQ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EjrAFgJWoAEYSoQ.jpg",
                    "url": "https://t.co/yTYT5CKZtK",
                    "display_url": "pic.twitter.com/yTYT5CKZtK",
                    "expanded_url": "https://twitter.com/Cristiano/status/1313573447121993728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 640,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1313573442092965889,
                    "id_str": "1313573442092965889",
                    "indices": [
                        79,
                        102
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjrAFgJWoAEYSoQ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EjrAFgJWoAEYSoQ.jpg",
                    "url": "https://t.co/yTYT5CKZtK",
                    "display_url": "pic.twitter.com/yTYT5CKZtK",
                    "expanded_url": "https://twitter.com/Cristiano/status/1313573447121993728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 640,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1313573442134908934,
                    "id_str": "1313573442134908934",
                    "indices": [
                        79,
                        102
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjrAFgTWoAY3zbg.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EjrAFgTWoAY3zbg.jpg",
                    "url": "https://t.co/yTYT5CKZtK",
                    "display_url": "pic.twitter.com/yTYT5CKZtK",
                    "expanded_url": "https://twitter.com/Cristiano/status/1313573447121993728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 640,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1313573442097156100,
                    "id_str": "1313573442097156100",
                    "indices": [
                        79,
                        102
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjrAFgKWkAQAkpJ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EjrAFgKWkAQAkpJ.jpg",
                    "url": "https://t.co/yTYT5CKZtK",
                    "display_url": "pic.twitter.com/yTYT5CKZtK",
                    "expanded_url": "https://twitter.com/Cristiano/status/1313573447121993728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 640,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1017,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 155659213,
            "id_str": "155659213",
            "name": "Cristiano Ronaldo",
            "screen_name": "Cristiano",
            "location": "Turim, Piemonte",
            "description": "This Privacy Policy addresses the collection and use of personal information - https://t.co/Jp6yh1T58c",
            "url": "https://t.co/VcAXB9ryty",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/VcAXB9ryty",
                            "expanded_url": "http://www.facebook.com/cristiano",
                            "display_url": "facebook.com/cristiano",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": [
                        {
                            "url": "https://t.co/Jp6yh1T58c",
                            "expanded_url": "http://www.cristianoronaldo.com/terms",
                            "display_url": "cristianoronaldo.com/terms",
                            "indices": [
                                79,
                                102
                            ]
                        }
                    ]
                }
            },
            "protected": false,
            "followers_count": 88696370,
            "friends_count": 51,
            "listed_count": 83635,
            "created_at": "Mon Jun 14 19:09:20 +0000 2010",
            "favourites_count": 2,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 3594,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "080101",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/155659213/1564759975",
            "profile_link_color": "1643C9",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "838387",
            "profile_text_color": "0D0D0D",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 8809,
        "favorite_count": 160978,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "pt"
	}, 
	{
        "created_at": "Sat Oct 24 09:30:00 +0000 2020",
        "id": 1319934155170279424,
        "id_str": "1319934155170279424",
        "text": "🚨 TWO HOURS 🚨\n\nWhat're you guys up to ahead of the game? \n\n🔷 #ManCity | https://t.co/axa0klUGiM https://t.co/R0ti2mIphv",
        "truncated": false,
        "entities": {
            "hashtags": [
                {
                    "text": "ManCity",
                    "indices": [
                        61,
                        69
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/axa0klUGiM",
                    "expanded_url": "http://mancity.com",
                    "display_url": "mancity.com",
                    "indices": [
                        72,
                        95
                    ]
                }
            ],
            "media": [
                {
                    "id": 1319653486926114817,
                    "id_str": "1319653486926114817",
                    "indices": [
                        96,
                        119
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBZ2sLWMAEa6gx.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBZ2sLWMAEa6gx.jpg",
                    "url": "https://t.co/R0ti2mIphv",
                    "display_url": "pic.twitter.com/R0ti2mIphv",
                    "expanded_url": "https://twitter.com/ManCity/status/1319934155170279424/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319653486926114817,
                    "id_str": "1319653486926114817",
                    "indices": [
                        96,
                        119
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBZ2sLWMAEa6gx.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBZ2sLWMAEa6gx.jpg",
                    "url": "https://t.co/R0ti2mIphv",
                    "display_url": "pic.twitter.com/R0ti2mIphv",
                    "expanded_url": "https://twitter.com/ManCity/status/1319934155170279424/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 14573900,
            "id_str": "14573900",
            "name": "Manchester City",
            "screen_name": "ManCity",
            "location": "Etihad Stadium",
            "description": "𝐸𝓈𝓉. 1894  💙 This Is Our City 🏆 6 x League Champions 🙌 #ManCity ℹ️ @ManCityHelp",
            "url": "https://t.co/rZckZ8PABr",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/rZckZ8PABr",
                            "expanded_url": "http://www.mancity.com/city+",
                            "display_url": "mancity.com/city+",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 8588075,
            "friends_count": 51895,
            "listed_count": 14587,
            "created_at": "Mon Apr 28 19:28:08 +0000 2008",
            "favourites_count": 13615,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 134354,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "060606",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319230083371065344/_WS47oVD_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319230083371065344/_WS47oVD_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/14573900/1602505147",
            "profile_link_color": "81B2D5",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 45,
        "favorite_count": 780,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
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
        "created_at": "Sat Oct 24 10:30:34 +0000 2020",
        "id": 1319949398487519232,
        "id_str": "1319949398487519232",
        "text": "The power of the Khun family: unmatched https://t.co/plCrz0G1Ss",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319949393387192320,
                    "id_str": "1319949393387192320",
                    "indices": [
                        40,
                        63
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElFm-tpWAAAfA0x.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElFm-tpWAAAfA0x.jpg",
                    "url": "https://t.co/plCrz0G1Ss",
                    "display_url": "pic.twitter.com/plCrz0G1Ss",
                    "expanded_url": "https://twitter.com/agueroagnis_/status/1319949398487519232/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 750,
                            "h": 484,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 750,
                            "h": 484,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 439,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319949393387192320,
                    "id_str": "1319949393387192320",
                    "indices": [
                        40,
                        63
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElFm-tpWAAAfA0x.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElFm-tpWAAAfA0x.jpg",
                    "url": "https://t.co/plCrz0G1Ss",
                    "display_url": "pic.twitter.com/plCrz0G1Ss",
                    "expanded_url": "https://twitter.com/agueroagnis_/status/1319949398487519232/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 750,
                            "h": 484,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 750,
                            "h": 484,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 439,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319949393383084033,
                    "id_str": "1319949393383084033",
                    "indices": [
                        40,
                        63
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElFm-toXUAEbsjE.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElFm-toXUAEbsjE.jpg",
                    "url": "https://t.co/plCrz0G1Ss",
                    "display_url": "pic.twitter.com/plCrz0G1Ss",
                    "expanded_url": "https://twitter.com/agueroagnis_/status/1319949398487519232/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 750,
                            "h": 440,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 750,
                            "h": 440,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 399,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319949393387290625,
                    "id_str": "1319949393387290625",
                    "indices": [
                        40,
                        63
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElFm-tpXgAEkcgv.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElFm-tpXgAEkcgv.jpg",
                    "url": "https://t.co/plCrz0G1Ss",
                    "display_url": "pic.twitter.com/plCrz0G1Ss",
                    "expanded_url": "https://twitter.com/agueroagnis_/status/1319949398487519232/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 750,
                            "h": 553,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 750,
                            "h": 553,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 501,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319949393391484929,
                    "id_str": "1319949393391484929",
                    "indices": [
                        40,
                        63
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElFm-tqXgAEA0Mg.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElFm-tqXgAEA0Mg.jpg",
                    "url": "https://t.co/plCrz0G1Ss",
                    "display_url": "pic.twitter.com/plCrz0G1Ss",
                    "expanded_url": "https://twitter.com/agueroagnis_/status/1319949398487519232/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 749,
                            "h": 447,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 406,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 749,
                            "h": 447,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 1084116061165965312,
            "id_str": "1084116061165965312",
            "name": "Annie ☆",
            "screen_name": "agueroagnis_",
            "location": "",
            "description": "~ 𝐿𝒾𝓀𝑒 𝐼 𝒶𝓁𝓌𝒶𝓎𝓈 𝓈𝒶𝓎, 𝒸𝒶𝓃’𝓉 𝒻𝒾𝓃𝒹 𝒶 𝒹𝑜𝑜𝓇? 𝑀𝒶𝓀𝑒 𝓎𝑜𝓊𝓇 𝑜𝓌𝓃 ~ 𝓔𝓭𝔀𝓪𝓻𝓭 𝓔𝓵𝓻𝓲𝓬",
            "url": "https://t.co/pJcoTuwMmh",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/pJcoTuwMmh",
                            "expanded_url": "https://curiouscat.me/agueroagnis_",
                            "display_url": "curiouscat.me/agueroagnis_",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 3709,
            "friends_count": 543,
            "listed_count": 39,
            "created_at": "Sat Jan 12 15:53:05 +0000 2019",
            "favourites_count": 19291,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 8167,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1270817851591532546/_nThOWDK_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1270817851591532546/_nThOWDK_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1084116061165965312/1595307448",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 8,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Wed Oct 21 09:47:28 +0000 2020",
        "id": 1318851389402062848,
        "id_str": "1318851389402062848",
        "text": "מי שממחזר מתנות למילצן סופו שימחזר ברכות יום הולדת https://t.co/Pek5srSYH1",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1318851371622424578,
                    "id_str": "1318851371622424578",
                    "indices": [
                        51,
                        74
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek2AVb0XYAI0pq-.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek2AVb0XYAI0pq-.jpg",
                    "url": "https://t.co/Pek5srSYH1",
                    "display_url": "pic.twitter.com/Pek5srSYH1",
                    "expanded_url": "https://twitter.com/chaimlevinson/status/1318851389402062848/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 971,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 550,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1125,
                            "h": 1390,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1318851371622424578,
                    "id_str": "1318851371622424578",
                    "indices": [
                        51,
                        74
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek2AVb0XYAI0pq-.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek2AVb0XYAI0pq-.jpg",
                    "url": "https://t.co/Pek5srSYH1",
                    "display_url": "pic.twitter.com/Pek5srSYH1",
                    "expanded_url": "https://twitter.com/chaimlevinson/status/1318851389402062848/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 971,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 550,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1125,
                            "h": 1390,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1318851381814505472,
                    "id_str": "1318851381814505472",
                    "indices": [
                        51,
                        74
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek2AWByWMAA25dd.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek2AWByWMAA25dd.jpg",
                    "url": "https://t.co/Pek5srSYH1",
                    "display_url": "pic.twitter.com/Pek5srSYH1",
                    "expanded_url": "https://twitter.com/chaimlevinson/status/1318851389402062848/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1090,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 617,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1125,
                            "h": 1239,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 37960888,
            "id_str": "37960888",
            "name": "Chaim Levinson",
            "screen_name": "chaimlevinson",
            "location": "Tel-Aviv, Israel",
            "description": "Haaretz Political correspondent. columnist.\n\n050-5204118\nchaimlevinson@gmail.com",
            "url": "https://t.co/tZvAVpo5aR",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/tZvAVpo5aR",
                            "expanded_url": "http://www.haaretz.com/misc/writers/chaim-levinson-1.424",
                            "display_url": "haaretz.com/misc/writers/c…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 120979,
            "friends_count": 215,
            "listed_count": 370,
            "created_at": "Tue May 05 16:37:50 +0000 2009",
            "favourites_count": 27065,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 32424,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1282341652682743809/gs7tAD-Q_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1282341652682743809/gs7tAD-Q_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/37960888/1599885415",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": {
            "id": "2edb6e240797c549",
            "url": "https://api.twitter.com/1.1/geo/id/2edb6e240797c549.json",
            "place_type": "country",
            "name": "Israel",
            "full_name": "Israel",
            "country_code": "IL",
            "country": "Israel",
            "contained_within": [],
            "bounding_box": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            34.266924,
                            29.393973
                        ],
                        [
                            35.669933,
                            29.393973
                        ],
                        [
                            35.669933,
                            33.290533
                        ],
                        [
                            34.266924,
                            33.290533
                        ]
                    ]
                ]
            },
            "attributes": {}
        },
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 118,
        "favorite_count": 2558,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "iw"
	},
    {
        "created_at": "Thu Oct 22 13:38:54 +0000 2020",
        "id": 1319272016524972033,
        "id_str": "1319272016524972033",
        "full_text": "She is art https://t.co/yoxb88en1V",
        "truncated": false,
        "display_text_range": [
            0,
            10
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319271784386998275,
                    "id_str": "1319271784386998275",
                    "indices": [
                        11,
                        34
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7-sraVMAMH4oV.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7-sraVMAMH4oV.jpg",
                    "url": "https://t.co/yoxb88en1V",
                    "display_url": "pic.twitter.com/yoxb88en1V",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319272016524972033/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 1623,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 799,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 452,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319271784386998275,
                    "id_str": "1319271784386998275",
                    "indices": [
                        11,
                        34
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7-sraVMAMH4oV.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7-sraVMAMH4oV.jpg",
                    "url": "https://t.co/yoxb88en1V",
                    "display_url": "pic.twitter.com/yoxb88en1V",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319272016524972033/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 1623,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 799,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 452,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319271855795044353,
                    "id_str": "1319271855795044353",
                    "indices": [
                        11,
                        34
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7-w1bVgAE4SFW.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7-w1bVgAE4SFW.jpg",
                    "url": "https://t.co/yoxb88en1V",
                    "display_url": "pic.twitter.com/yoxb88en1V",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319272016524972033/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 452,
                            "h": 680,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 799,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1623,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319271930046738434,
                    "id_str": "1319271930046738434",
                    "indices": [
                        11,
                        34
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7-1KCUcAIrk3n.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7-1KCUcAIrk3n.jpg",
                    "url": "https://t.co/yoxb88en1V",
                    "display_url": "pic.twitter.com/yoxb88en1V",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319272016524972033/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 799,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 452,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1623,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319272011902775299,
                    "id_str": "1319272011902775299",
                    "indices": [
                        11,
                        34
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7-56-UcAMKmLM.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7-56-UcAMKmLM.jpg",
                    "url": "https://t.co/yoxb88en1V",
                    "display_url": "pic.twitter.com/yoxb88en1V",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319272016524972033/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 1623,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 799,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 452,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27457,
            "friends_count": 19,
            "listed_count": 427,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7875,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 671,
        "favorite_count": 1041,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
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
        "created_at": "Thu Oct 22 13:53:01 +0000 2020",
        "id": 1319275570824241153,
        "id_str": "1319275570824241153",
        "text": "The mainstream media must be dissolved https://t.co/IAsZ8V853x",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319275565786882051,
                    "id_str": "1319275565786882051",
                    "indices": [
                        39,
                        62
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CIyOUYAMkiJt.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CIyOUYAMkiJt.jpg",
                    "url": "https://t.co/IAsZ8V853x",
                    "display_url": "pic.twitter.com/IAsZ8V853x",
                    "expanded_url": "https://twitter.com/MattNegrin/status/1319275570824241153/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 476,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1115,
                            "h": 781,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1115,
                            "h": 781,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319275565786882051,
                    "id_str": "1319275565786882051",
                    "indices": [
                        39,
                        62
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CIyOUYAMkiJt.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CIyOUYAMkiJt.jpg",
                    "url": "https://t.co/IAsZ8V853x",
                    "display_url": "pic.twitter.com/IAsZ8V853x",
                    "expanded_url": "https://twitter.com/MattNegrin/status/1319275570824241153/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 476,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1115,
                            "h": 781,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1115,
                            "h": 781,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319275565791072260,
                    "id_str": "1319275565791072260",
                    "indices": [
                        39,
                        62
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CIyPUUAQvLBU.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CIyPUUAQvLBU.jpg",
                    "url": "https://t.co/IAsZ8V853x",
                    "display_url": "pic.twitter.com/IAsZ8V853x",
                    "expanded_url": "https://twitter.com/MattNegrin/status/1319275570824241153/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 344,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1116,
                            "h": 564,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1116,
                            "h": 564,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 15751676,
            "id_str": "15751676",
            "name": "Matt Negrin, HOST OF HARDBALL AT 7PM ON MSNBC",
            "screen_name": "MattNegrin",
            "location": "New York",
            "description": "@TheDailyShow; blocked by @MeetThePress; mysteriously unblocked by @MeetThePress; here to remind you @seanspicer is a liar. Host of @hardball at 7pm on @MSNBC.",
            "url": "https://t.co/v7thJO9T8H",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/v7thJO9T8H",
                            "expanded_url": "http://dailyshow.com/book",
                            "display_url": "dailyshow.com/book",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 44382,
            "friends_count": 2954,
            "listed_count": 624,
            "created_at": "Wed Aug 06 16:11:47 +0000 2008",
            "favourites_count": 29607,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 56081,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/825787279750856704/UlcPhlh7_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/825787279750856704/UlcPhlh7_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/15751676/1598545884",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 3,
        "favorite_count": 28,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
	},
	{
        "created_at": "Thu Oct 22 13:52:57 +0000 2020",
        "id": 1319275551631183881,
        "id_str": "1319275551631183881",
        "text": "♡201022♡ #Monday \n©®☆☞ PlayM Naver post - Weeekly x Tenstar https://t.co/wPKQOAIJUJ",
        "truncated": false,
        "entities": {
            "hashtags": [
                {
                    "text": "Monday",
                    "indices": [
                        9,
                        16
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319275545117429760,
                    "id_str": "1319275545117429760",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CHlOVkAAcXeg.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CHlOVkAAcXeg.jpg",
                    "url": "https://t.co/wPKQOAIJUJ",
                    "display_url": "pic.twitter.com/wPKQOAIJUJ",
                    "expanded_url": "https://twitter.com/weeeklypics/status/1319275551631183881/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 738,
                            "h": 1112,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 451,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 738,
                            "h": 1112,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319275545117429760,
                    "id_str": "1319275545117429760",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CHlOVkAAcXeg.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CHlOVkAAcXeg.jpg",
                    "url": "https://t.co/wPKQOAIJUJ",
                    "display_url": "pic.twitter.com/wPKQOAIJUJ",
                    "expanded_url": "https://twitter.com/weeeklypics/status/1319275551631183881/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 738,
                            "h": 1112,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 451,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 738,
                            "h": 1112,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319275545398423555,
                    "id_str": "1319275545398423555",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CHmRVMAMpT5r.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CHmRVMAMpT5r.jpg",
                    "url": "https://t.co/wPKQOAIJUJ",
                    "display_url": "pic.twitter.com/wPKQOAIJUJ",
                    "expanded_url": "https://twitter.com/weeeklypics/status/1319275551631183881/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 410,
                            "h": 612,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 410,
                            "h": 612,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 410,
                            "h": 612,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319275545528463362,
                    "id_str": "1319275545528463362",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek8CHmwVcAIwsAD.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek8CHmwVcAIwsAD.jpg",
                    "url": "https://t.co/wPKQOAIJUJ",
                    "display_url": "pic.twitter.com/wPKQOAIJUJ",
                    "expanded_url": "https://twitter.com/weeeklypics/status/1319275551631183881/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 408,
                            "h": 615,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 408,
                            "h": 615,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 408,
                            "h": 615,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 1073437905459146752,
            "id_str": "1073437905459146752",
            "name": "Weeekly Pics ♥ω♥ ~♪ (위클리)",
            "screen_name": "weeeklypics",
            "location": "",
            "description": "♡♡here to serve you fresh photos of @_weeekly members ～(^з^)-♡ Since 181214",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 3302,
            "friends_count": 47,
            "listed_count": 114,
            "created_at": "Fri Dec 14 04:41:55 +0000 2018",
            "favourites_count": 1309,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 2541,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1315156609107017728/J9gsdP1a_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1315156609107017728/J9gsdP1a_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1073437905459146752/1602392744",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 7,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
	{
        "created_at": "Wed Oct 21 20:38:40 +0000 2020",
        "id": 1319015265808666624,
        "id_str": "1319015265808666624",
        "text": "וואו. איזה קסם https://t.co/H0WP7cOLH0",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319015262528655360,
                    "id_str": "1319015262528655360",
                    "indices": [
                        15,
                        38
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek4VZJBW0AA499u.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek4VZJBW0AA499u.jpg",
                    "url": "https://t.co/H0WP7cOLH0",
                    "display_url": "pic.twitter.com/H0WP7cOLH0",
                    "expanded_url": "https://twitter.com/BenCaspit/status/1319015265808666624/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 453,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 683,
                            "h": 1810,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 257,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319015262528655360,
                    "id_str": "1319015262528655360",
                    "indices": [
                        15,
                        38
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek4VZJBW0AA499u.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek4VZJBW0AA499u.jpg",
                    "url": "https://t.co/H0WP7cOLH0",
                    "display_url": "pic.twitter.com/H0WP7cOLH0",
                    "expanded_url": "https://twitter.com/BenCaspit/status/1319015265808666624/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 453,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 683,
                            "h": 1810,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 257,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 804535273,
            "id_str": "804535273",
            "name": "Ben Caspit בן כספית",
            "screen_name": "BenCaspit",
            "location": "ישראל",
            "description": "Author of the best seller The Netanyahu Years, senior columnist, Maariv, Al-Monitor, Radio 103 fm, TV anchorman, Retweets do not imply endorsement.",
            "url": "https://t.co/9h1t3X9gSW",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/9h1t3X9gSW",
                            "expanded_url": "http://103fm.maariv.co.il/programs/program.aspx?c41t4nzVq=EF",
                            "display_url": "103fm.maariv.co.il/programs/progr…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 238327,
            "friends_count": 1093,
            "listed_count": 443,
            "created_at": "Wed Sep 05 12:46:01 +0000 2012",
            "favourites_count": 9618,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 24049,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/854795613686386688/cxby2Mr3_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/854795613686386688/cxby2Mr3_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/804535273/1520779263",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 8,
        "favorite_count": 166,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "iw"
	},
	{
        "created_at": "Thu Oct 22 12:28:07 +0000 2020",
        "id": 1319254202447691777,
        "id_str": "1319254202447691777",
        "text": "חייבים לקדם ולתקצב את התכנית הלאומית למאבק באלימות נגד נשים. חייבים להציל את האישה הבאה.\n\n(צילום: קובי גדעון, לע\"מ) https://t.co/SG14ZzGYrM",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319254111028715520,
                    "id_str": "1319254111028715520",
                    "indices": [
                        116,
                        139
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7un9BXIAAj6LR.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7un9BXIAAj6LR.jpg",
                    "url": "https://t.co/SG14ZzGYrM",
                    "display_url": "pic.twitter.com/SG14ZzGYrM",
                    "expanded_url": "https://twitter.com/ruvirivlin/status/1319254202447691777/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1600,
                            "h": 1066,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 800,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 453,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319254111028715520,
                    "id_str": "1319254111028715520",
                    "indices": [
                        116,
                        139
                    ],
                    "media_url": "http://pbs.twimg.com/media/Ek7un9BXIAAj6LR.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Ek7un9BXIAAj6LR.jpg",
                    "url": "https://t.co/SG14ZzGYrM",
                    "display_url": "pic.twitter.com/SG14ZzGYrM",
                    "expanded_url": "https://twitter.com/ruvirivlin/status/1319254202447691777/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1600,
                            "h": 1066,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 800,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 453,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": 1319254016346509313,
        "in_reply_to_status_id_str": "1319254016346509313",
        "in_reply_to_user_id": 886335560,
        "in_reply_to_user_id_str": "886335560",
        "in_reply_to_screen_name": "ruvirivlin",
        "user": {
            "id": 886335560,
            "id_str": "886335560",
            "name": "ראובן (רובי) ריבלין",
            "screen_name": "ruvirivlin",
            "location": "ישראל",
            "description": "נשיא המדינה. ירושלמי דור שביעי. נשוי לנחמה",
            "url": "https://t.co/MUd2Ulhy4P",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/MUd2Ulhy4P",
                            "expanded_url": "http://www.president.gov.il/Pages/Default.aspx",
                            "display_url": "president.gov.il/Pages/Default.…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 107507,
            "friends_count": 144,
            "listed_count": 188,
            "created_at": "Wed Oct 17 07:48:14 +0000 2012",
            "favourites_count": 64,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 3308,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/2761776650/cb20ef6b66070a28de905bf0157570e4_normal.jpeg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/2761776650/cb20ef6b66070a28de905bf0157570e4_normal.jpeg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/886335560/1466963352",
            "profile_link_color": "3B94D9",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 11,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "iw"
    },
    {
        "created_at": "Fri Oct 30 14:22:10 +0000 2020",
        "id": 1322182006713798657,
        "id_str": "1322182006713798657",
        "full_text": "The vintage Hazard chippi-chaapa special #RMtraining https://t.co/0N7U4THqy6",
        "truncated": false,
        "display_text_range": [
            0,
            52
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "RMtraining",
                    "indices": [
                        41,
                        52
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1322181841227554818,
                    "id_str": "1322181841227554818",
                    "indices": [
                        53,
                        76
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/EllVYR7XIAIJfHg.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/EllVYR7XIAIJfHg.jpg",
                    "url": "https://t.co/0N7U4THqy6",
                    "display_url": "pic.twitter.com/0N7U4THqy6",
                    "expanded_url": "https://twitter.com/Ultra_Suristic/status/1322182006713798657/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 600,
                            "h": 338,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 600,
                            "h": 338,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 600,
                            "h": 338,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1322181841227554818,
                    "id_str": "1322181841227554818",
                    "indices": [
                        53,
                        76
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/EllVYR7XIAIJfHg.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/EllVYR7XIAIJfHg.jpg",
                    "url": "https://t.co/0N7U4THqy6",
                    "display_url": "pic.twitter.com/0N7U4THqy6",
                    "expanded_url": "https://twitter.com/Ultra_Suristic/status/1322182006713798657/photo/1",
                    "type": "animated_gif",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 600,
                            "h": 338,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 600,
                            "h": 338,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 600,
                            "h": 338,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            300,
                            169
                        ],
                        "variants": [
                            {
                                "bitrate": 0,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/tweet_video/EllVYR7XIAIJfHg.mp4"
                            }
                        ]
                    }
                }
            ]
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": 1322180303876665344,
        "in_reply_to_status_id_str": "1322180303876665344",
        "in_reply_to_user_id": 833896660476497920,
        "in_reply_to_user_id_str": "833896660476497920",
        "in_reply_to_screen_name": "Ultra_Suristic",
        "user": {
            "id": 833896660476497920,
            "id_str": "833896660476497920",
            "name": "M•A•J",
            "screen_name": "Ultra_Suristic",
            "location": "",
            "description": "Juan Gómez González a.k.a JUANITO: If I weren't a player, I'd be an Ultra Sur!",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 54141,
            "friends_count": 4757,
            "listed_count": 421,
            "created_at": "Tue Feb 21 04:30:31 +0000 2017",
            "favourites_count": 28949,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 81593,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1281539895350251520/Hg5i-_Ak_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1281539895350251520/Hg5i-_Ak_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/833896660476497920/1563003963",
            "profile_link_color": "981CEB",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 3,
        "favorite_count": 34,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Mon Oct 26 12:42:33 +0000 2020",
        "id": 1320707386315804673,
        "id_str": "1320707386315804673",
        "full_text": "https://t.co/zhglkELwwq",
        "truncated": false,
        "display_text_range": [
            0,
            0
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1320707274818703362,
                    "id_str": "1320707274818703362",
                    "indices": [
                        0,
                        23
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElQYRN_X0AIi0s9.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElQYRN_X0AIi0s9.jpg",
                    "url": "https://t.co/zhglkELwwq",
                    "display_url": "pic.twitter.com/zhglkELwwq",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320707386315804673/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1320707274818703362,
                    "id_str": "1320707274818703362",
                    "indices": [
                        0,
                        23
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElQYRN_X0AIi0s9.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElQYRN_X0AIi0s9.jpg",
                    "url": "https://t.co/zhglkELwwq",
                    "display_url": "pic.twitter.com/zhglkELwwq",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320707386315804673/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1320707309266501632,
                    "id_str": "1320707309266501632",
                    "indices": [
                        0,
                        23
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElQYTOUXgAAMu9O.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElQYTOUXgAAMu9O.jpg",
                    "url": "https://t.co/zhglkELwwq",
                    "display_url": "pic.twitter.com/zhglkELwwq",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320707386315804673/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1320707340744691714,
                    "id_str": "1320707340744691714",
                    "indices": [
                        0,
                        23
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElQYVDlWkAIdrPz.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElQYVDlWkAIdrPz.jpg",
                    "url": "https://t.co/zhglkELwwq",
                    "display_url": "pic.twitter.com/zhglkELwwq",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320707386315804673/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1320707374357876741,
                    "id_str": "1320707374357876741",
                    "indices": [
                        0,
                        23
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElQYXAzXEAUzKUg.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElQYXAzXEAUzKUg.jpg",
                    "url": "https://t.co/zhglkELwwq",
                    "display_url": "pic.twitter.com/zhglkELwwq",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320707386315804673/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27443,
            "friends_count": 19,
            "listed_count": 424,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7874,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 171,
        "favorite_count": 362,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
    },
    {
        "created_at": "Fri Oct 30 17:57:16 +0000 2020",
        "id": 1322236140162875398,
        "id_str": "1322236140162875398",
        "full_text": "HE’S INSANE?? https://t.co/Eb10oDsz6p",
        "truncated": false,
        "display_text_range": [
            0,
            13
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1322236123800809479,
                    "id_str": "1322236123800809479",
                    "indices": [
                        14,
                        37
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmGv8RWMAcYSJQ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmGv8RWMAcYSJQ.jpg",
                    "url": "https://t.co/Eb10oDsz6p",
                    "display_url": "pic.twitter.com/Eb10oDsz6p",
                    "expanded_url": "https://twitter.com/certifiedIvrboy/status/1322236140162875398/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 1002,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 568,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1485,
                            "h": 1240,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1322236123800809479,
                    "id_str": "1322236123800809479",
                    "indices": [
                        14,
                        37
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmGv8RWMAcYSJQ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmGv8RWMAcYSJQ.jpg",
                    "url": "https://t.co/Eb10oDsz6p",
                    "display_url": "pic.twitter.com/Eb10oDsz6p",
                    "expanded_url": "https://twitter.com/certifiedIvrboy/status/1322236140162875398/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 1002,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 568,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1485,
                            "h": 1240,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1322236123809271808,
                    "id_str": "1322236123809271808",
                    "indices": [
                        14,
                        37
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmGv8TXUAAJquB.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmGv8TXUAAJquB.jpg",
                    "url": "https://t.co/Eb10oDsz6p",
                    "display_url": "pic.twitter.com/Eb10oDsz6p",
                    "expanded_url": "https://twitter.com/certifiedIvrboy/status/1322236140162875398/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1199,
                            "h": 1241,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 657,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1159,
                            "h": 1200,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 1019732677,
            "id_str": "1019732677",
            "name": "𝔠𝔞𝔩𝔢𝔟",
            "screen_name": "certifiedIvrboy",
            "location": "",
            "description": "",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 17456,
            "friends_count": 370,
            "listed_count": 49,
            "created_at": "Tue Dec 18 13:01:48 +0000 2012",
            "favourites_count": 45520,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 63220,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "131516",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319990338224795648/YeRdhmXc_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319990338224795648/YeRdhmXc_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1019732677/1597443365",
            "profile_link_color": "9266CC",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 7,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Sun Oct 25 12:54:41 +0000 2020",
        "id": 1320348055535759362,
        "id_str": "1320348055535759362",
        "full_text": "Krystal for Kind magazine https://t.co/boIant30U8",
        "truncated": false,
        "display_text_range": [
            0,
            25
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1320346437746675712,
                    "id_str": "1320346437746675712",
                    "indices": [
                        26,
                        49
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElLQFvJX0AA3ofc.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElLQFvJX0AA3ofc.jpg",
                    "url": "https://t.co/boIant30U8",
                    "display_url": "pic.twitter.com/boIant30U8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320348055535759362/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 502,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 885,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1511,
                            "h": 2048,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1320346437746675712,
                    "id_str": "1320346437746675712",
                    "indices": [
                        26,
                        49
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElLQFvJX0AA3ofc.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElLQFvJX0AA3ofc.jpg",
                    "url": "https://t.co/boIant30U8",
                    "display_url": "pic.twitter.com/boIant30U8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320348055535759362/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 502,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 885,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1511,
                            "h": 2048,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1320346492020936704,
                    "id_str": "1320346492020936704",
                    "indices": [
                        26,
                        49
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElLQI5VXUAAYQKu.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElLQI5VXUAAYQKu.jpg",
                    "url": "https://t.co/boIant30U8",
                    "display_url": "pic.twitter.com/boIant30U8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320348055535759362/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1620,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 800,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 453,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1320346556164411392,
                    "id_str": "1320346556164411392",
                    "indices": [
                        26,
                        49
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElLQMoSXEAA3DtG.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElLQMoSXEAA3DtG.jpg",
                    "url": "https://t.co/boIant30U8",
                    "display_url": "pic.twitter.com/boIant30U8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320348055535759362/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1366,
                            "h": 2048,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 454,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 800,
                            "h": 1200,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1320348050183905284,
                    "id_str": "1320348050183905284",
                    "indices": [
                        26,
                        49
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElLRjl8XYAQMLJV.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElLRjl8XYAQMLJV.jpg",
                    "url": "https://t.co/boIant30U8",
                    "display_url": "pic.twitter.com/boIant30U8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320348055535759362/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1620,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 453,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 800,
                            "h": 1200,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27443,
            "friends_count": 19,
            "listed_count": 424,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7874,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 309,
        "favorite_count": 534,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Sat Oct 24 13:59:10 +0000 2020",
        "id": 1320001894711001093,
        "id_str": "1320001894711001093",
        "full_text": "⚘❤ https://t.co/8gu2u9g4Sp",
        "truncated": false,
        "display_text_range": [
            0,
            2
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1320001876885229569,
                    "id_str": "1320001876885229569",
                    "indices": [
                        3,
                        26
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGWtp6X0AEOSsZ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGWtp6X0AEOSsZ.jpg",
                    "url": "https://t.co/8gu2u9g4Sp",
                    "display_url": "pic.twitter.com/8gu2u9g4Sp",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320001894711001093/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1440,
                            "h": 1440,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1320001876885229569,
                    "id_str": "1320001876885229569",
                    "indices": [
                        3,
                        26
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGWtp6X0AEOSsZ.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGWtp6X0AEOSsZ.jpg",
                    "url": "https://t.co/8gu2u9g4Sp",
                    "display_url": "pic.twitter.com/8gu2u9g4Sp",
                    "expanded_url": "https://twitter.com/krys_pics/status/1320001894711001093/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1440,
                            "h": 1440,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27443,
            "friends_count": 19,
            "listed_count": 424,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7874,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 139,
        "favorite_count": 257,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
    },
    {
        "created_at": "Thu Oct 01 20:23:10 +0000 2020",
        "id": 1311763607290441728,
        "id_str": "1311763607290441728",
        "full_text": "September 30th vs October 1st. 😈 https://t.co/ipFGupBZVV",
        "truncated": false,
        "display_text_range": [
            0,
            32
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1311759569173975040,
                    "id_str": "1311759569173975040",
                    "indices": [
                        33,
                        56
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjROYM9VkAANQ2v.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EjROYM9VkAANQ2v.jpg",
                    "url": "https://t.co/ipFGupBZVV",
                    "display_url": "pic.twitter.com/ipFGupBZVV",
                    "expanded_url": "https://twitter.com/CommunityTV/status/1311763607290441728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 1200,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 2048,
                            "h": 2048,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1311759569173975040,
                    "id_str": "1311759569173975040",
                    "indices": [
                        33,
                        56
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjROYM9VkAANQ2v.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EjROYM9VkAANQ2v.jpg",
                    "url": "https://t.co/ipFGupBZVV",
                    "display_url": "pic.twitter.com/ipFGupBZVV",
                    "expanded_url": "https://twitter.com/CommunityTV/status/1311763607290441728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 1200,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 2048,
                            "h": 2048,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1311759608642334720,
                    "id_str": "1311759608642334720",
                    "indices": [
                        33,
                        56
                    ],
                    "media_url": "http://pbs.twimg.com/media/EjROaf_U8AAyPSn.png",
                    "media_url_https": "https://pbs.twimg.com/media/EjROaf_U8AAyPSn.png",
                    "url": "https://t.co/ipFGupBZVV",
                    "display_url": "pic.twitter.com/ipFGupBZVV",
                    "expanded_url": "https://twitter.com/CommunityTV/status/1311763607290441728/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 891,
                            "h": 893,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 678,
                            "h": 680,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 891,
                            "h": 893,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 28205458,
            "id_str": "28205458",
            "name": "Community",
            "screen_name": "CommunityTV",
            "location": "Greendale, Colorado",
            "description": "The official Twitter profile for Community. Watch anytime on Netflix and Hulu.",
            "url": "https://t.co/ziXzt5fCcT",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/ziXzt5fCcT",
                            "expanded_url": "https://bit.ly/CommunityTVYoutube",
                            "display_url": "bit.ly/CommunityTVYou…",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 313780,
            "friends_count": 251,
            "listed_count": 2672,
            "created_at": "Wed Apr 01 21:49:50 +0000 2009",
            "favourites_count": 2808,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 7608,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "FFFFFF",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/697206945325813760/mZdvBYVO_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/697206945325813760/mZdvBYVO_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/28205458/1590683002",
            "profile_link_color": "0EB3D6",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDFFCC",
            "profile_text_color": "333333",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 533,
        "favorite_count": 4081,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Fri Oct 30 17:52:11 +0000 2020",
        "id": 1322234862326206464,
        "id_str": "1322234862326206464",
        "full_text": "Yesterday The Princess Royal visited the Oasis Southampton City Farm, which offers a wide range of activities to the whole community, including adults and children with learning disabilities.\n\nHRH met volunteers and staff, as well as the farm’s sheep and chickens 🐑🐓 https://t.co/cR3eTnJbtK",
        "truncated": false,
        "display_text_range": [
            0,
            266
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1322234799562641411,
                    "id_str": "1322234799562641411",
                    "indices": [
                        267,
                        290
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmFi3GXUAMkuRz.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmFi3GXUAMkuRz.jpg",
                    "url": "https://t.co/cR3eTnJbtK",
                    "display_url": "pic.twitter.com/cR3eTnJbtK",
                    "expanded_url": "https://twitter.com/RoyalFamily/status/1322234862326206464/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 680,
                            "h": 453,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 799,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 2048,
                            "h": 1364,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1322234799562641411,
                    "id_str": "1322234799562641411",
                    "indices": [
                        267,
                        290
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmFi3GXUAMkuRz.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmFi3GXUAMkuRz.jpg",
                    "url": "https://t.co/cR3eTnJbtK",
                    "display_url": "pic.twitter.com/cR3eTnJbtK",
                    "expanded_url": "https://twitter.com/RoyalFamily/status/1322234862326206464/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 680,
                            "h": 453,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 799,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 2048,
                            "h": 1364,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1322234799537442818,
                    "id_str": "1322234799537442818",
                    "indices": [
                        267,
                        290
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmFi3AW0AIiqAz.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmFi3AW0AIiqAz.jpg",
                    "url": "https://t.co/cR3eTnJbtK",
                    "display_url": "pic.twitter.com/cR3eTnJbtK",
                    "expanded_url": "https://twitter.com/RoyalFamily/status/1322234862326206464/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1364,
                            "h": 2048,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 799,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 453,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1322234799533248512,
                    "id_str": "1322234799533248512",
                    "indices": [
                        267,
                        290
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElmFi2_W0AAYeWH.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElmFi2_W0AAYeWH.jpg",
                    "url": "https://t.co/cR3eTnJbtK",
                    "display_url": "pic.twitter.com/cR3eTnJbtK",
                    "expanded_url": "https://twitter.com/RoyalFamily/status/1322234862326206464/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 2048,
                            "h": 1364,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 453,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 799,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 36042554,
            "id_str": "36042554",
            "name": "The Royal Family",
            "screen_name": "RoyalFamily",
            "location": "United Kingdom",
            "description": "Updates, pictures and videos from Buckingham Palace about the work and activities of The Queen and members of The Royal Family.",
            "url": "https://t.co/u87QMImjnO",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/u87QMImjnO",
                            "expanded_url": "http://www.royal.uk",
                            "display_url": "royal.uk",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 4282260,
            "friends_count": 534,
            "listed_count": 9223,
            "created_at": "Tue Apr 28 11:31:02 +0000 2009",
            "favourites_count": 707,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 34259,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "632B36",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1194195825838174208/IqIyECgx_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1194195825838174208/IqIyECgx_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/36042554/1573553447",
            "profile_link_color": "0089B3",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDFFCC",
            "profile_text_color": "333333",
            "profile_use_background_image": false,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 39,
        "favorite_count": 368,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Sat Oct 24 12:36:10 +0000 2020",
        "id": 1319981005348929536,
        "id_str": "1319981005348929536",
        "full_text": "💖💖💖\n#HappyKrystalDay\n#ShiningKrystalDay\n#OneAndOnly수정아생일축하해 https://t.co/n5V3KMf6WR",
        "truncated": false,
        "display_text_range": [
            0,
            59
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "HappyKrystalDay",
                    "indices": [
                        4,
                        20
                    ]
                },
                {
                    "text": "ShiningKrystalDay",
                    "indices": [
                        21,
                        39
                    ]
                },
                {
                    "text": "OneAndOnly수정아생일축하해",
                    "indices": [
                        40,
                        59
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319980807314956288,
                    "id_str": "1319980807314956288",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGDjPpXYAAlAgS.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGDjPpXYAAlAgS.jpg",
                    "url": "https://t.co/n5V3KMf6WR",
                    "display_url": "pic.twitter.com/n5V3KMf6WR",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319981005348929536/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319980807314956288,
                    "id_str": "1319980807314956288",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGDjPpXYAAlAgS.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGDjPpXYAAlAgS.jpg",
                    "url": "https://t.co/n5V3KMf6WR",
                    "display_url": "pic.twitter.com/n5V3KMf6WR",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319981005348929536/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319980865217331200,
                    "id_str": "1319980865217331200",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGDmnWXgAAAenN.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGDmnWXgAAAenN.jpg",
                    "url": "https://t.co/n5V3KMf6WR",
                    "display_url": "pic.twitter.com/n5V3KMf6WR",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319981005348929536/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319980947224301568,
                    "id_str": "1319980947224301568",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGDrY2WkAAA4Vd.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGDrY2WkAAA4Vd.jpg",
                    "url": "https://t.co/n5V3KMf6WR",
                    "display_url": "pic.twitter.com/n5V3KMf6WR",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319981005348929536/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 1079,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 679,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1079,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319981000848531457,
                    "id_str": "1319981000848531457",
                    "indices": [
                        60,
                        83
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElGDugnXYAE8GFn.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElGDugnXYAE8GFn.jpg",
                    "url": "https://t.co/n5V3KMf6WR",
                    "display_url": "pic.twitter.com/n5V3KMf6WR",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319981005348929536/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1080,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27443,
            "friends_count": 19,
            "listed_count": 424,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7874,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 115,
        "favorite_count": 173,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
    },
    {
        "created_at": "Sat Oct 24 06:14:58 +0000 2020",
        "id": 1319885074867826689,
        "id_str": "1319885074867826689",
        "full_text": "Jung sisters 💕\n#HappyKrystalDay\n#ShiningKrystalDay\n#OneAndOnly수정아생일축하해 https://t.co/FYFDArrtWl",
        "truncated": false,
        "display_text_range": [
            0,
            70
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "HappyKrystalDay",
                    "indices": [
                        15,
                        31
                    ]
                },
                {
                    "text": "ShiningKrystalDay",
                    "indices": [
                        32,
                        50
                    ]
                },
                {
                    "text": "OneAndOnly수정아생일축하해",
                    "indices": [
                        51,
                        70
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319885006903386113,
                    "id_str": "1319885006903386113",
                    "indices": [
                        71,
                        94
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElEsa7TXIAEIH9O.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElEsa7TXIAEIH9O.jpg",
                    "url": "https://t.co/FYFDArrtWl",
                    "display_url": "pic.twitter.com/FYFDArrtWl",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319885074867826689/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 810,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 810,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319885006903386113,
                    "id_str": "1319885006903386113",
                    "indices": [
                        71,
                        94
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElEsa7TXIAEIH9O.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElEsa7TXIAEIH9O.jpg",
                    "url": "https://t.co/FYFDArrtWl",
                    "display_url": "pic.twitter.com/FYFDArrtWl",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319885074867826689/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1080,
                            "h": 810,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 810,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319885042106195968,
                    "id_str": "1319885042106195968",
                    "indices": [
                        71,
                        94
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElEsc-cXYAAU1aF.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElEsc-cXYAAU1aF.jpg",
                    "url": "https://t.co/FYFDArrtWl",
                    "display_url": "pic.twitter.com/FYFDArrtWl",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319885074867826689/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1080,
                            "h": 810,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 810,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319885071365607424,
                    "id_str": "1319885071365607424",
                    "indices": [
                        71,
                        94
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElEsercWkAA4RU_.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElEsercWkAA4RU_.jpg",
                    "url": "https://t.co/FYFDArrtWl",
                    "display_url": "pic.twitter.com/FYFDArrtWl",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319885074867826689/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1080,
                            "h": 815,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 815,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 513,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": 1319884369104961538,
        "in_reply_to_status_id_str": "1319884369104961538",
        "in_reply_to_user_id": 3311180101,
        "in_reply_to_user_id_str": "3311180101",
        "in_reply_to_screen_name": "krys_pics",
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27443,
            "friends_count": 19,
            "listed_count": 424,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7874,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 73,
        "favorite_count": 113,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    {
        "created_at": "Fri Oct 23 13:08:33 +0000 2020",
        "id": 1319626766441381888,
        "id_str": "1319626766441381888",
        "full_text": "❤ https://t.co/KKM7VasHi8",
        "truncated": false,
        "display_text_range": [
            0,
            1
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1319626453466730496,
                    "id_str": "1319626453466730496",
                    "indices": [
                        2,
                        25
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBBRIsX0AAEV3H.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBBRIsX0AAEV3H.jpg",
                    "url": "https://t.co/KKM7VasHi8",
                    "display_url": "pic.twitter.com/KKM7VasHi8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319626766441381888/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 981,
                            "h": 981,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 981,
                            "h": 981,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1319626453466730496,
                    "id_str": "1319626453466730496",
                    "indices": [
                        2,
                        25
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBBRIsX0AAEV3H.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBBRIsX0AAEV3H.jpg",
                    "url": "https://t.co/KKM7VasHi8",
                    "display_url": "pic.twitter.com/KKM7VasHi8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319626766441381888/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 981,
                            "h": 981,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 981,
                            "h": 981,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319626674531672064,
                    "id_str": "1319626674531672064",
                    "indices": [
                        2,
                        25
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBBeAOXIAAAUcC.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBBeAOXIAAAUcC.jpg",
                    "url": "https://t.co/KKM7VasHi8",
                    "display_url": "pic.twitter.com/KKM7VasHi8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319626766441381888/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 977,
                            "h": 977,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 977,
                            "h": 977,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 680,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319626721583312901,
                    "id_str": "1319626721583312901",
                    "indices": [
                        2,
                        25
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBBgvgWMAUC8fY.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBBgvgWMAUC8fY.jpg",
                    "url": "https://t.co/KKM7VasHi8",
                    "display_url": "pic.twitter.com/KKM7VasHi8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319626766441381888/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 777,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1352,
                            "h": 875,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 440,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1319626760179384321,
                    "id_str": "1319626760179384321",
                    "indices": [
                        2,
                        25
                    ],
                    "media_url": "http://pbs.twimg.com/media/ElBBi_SXgAElYey.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/ElBBi_SXgAElYey.jpg",
                    "url": "https://t.co/KKM7VasHi8",
                    "display_url": "pic.twitter.com/KKM7VasHi8",
                    "expanded_url": "https://twitter.com/krys_pics/status/1319626766441381888/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 483,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 852,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1357,
                            "h": 964,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3311180101,
            "id_str": "3311180101",
            "name": "Krystal pics",
            "screen_name": "krys_pics",
            "location": "Credits to owners",
            "description": "Fanpage for 정수정 🖤",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 27443,
            "friends_count": 19,
            "listed_count": 424,
            "created_at": "Mon Aug 10 04:53:10 +0000 2015",
            "favourites_count": 6491,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 7874,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1319885662527500288/ztk0-g8K_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3311180101/1603543241",
            "profile_link_color": "FF691F",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 221,
        "favorite_count": 360,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
    },
]
/*
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
*/