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
        "created_at": "Thu Dec 17 21:42:35 +0000 2020",
        "id": 1339687461107077120,
        "id_str": "1339687461107077120",
        "full_text": "RT @insider_reviews: 💰 New low: The @Fitbit Inspire 2 Activity Tracker is down to $70 at @target (originally $100) ➡️ https://t.co/briQK7nn…",
        "truncated": false,
        "display_text_range": [
            0,
            140
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "insider_reviews",
                    "name": "Insider Reviews",
                    "id": 2873888723,
                    "id_str": "2873888723",
                    "indices": [
                        3,
                        19
                    ]
                },
                {
                    "screen_name": "fitbit",
                    "name": "fitbit",
                    "id": 17424053,
                    "id_str": "17424053",
                    "indices": [
                        36,
                        43
                    ]
                },
                {
                    "screen_name": "Target",
                    "name": "Target",
                    "id": 89084561,
                    "id_str": "89084561",
                    "indices": [
                        89,
                        96
                    ]
                }
            ],
            "urls": []
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3224616765,
            "id_str": "3224616765",
            "name": "Tech Insider",
            "screen_name": "techinsider",
            "location": "New York, USA",
            "description": "What you want to know about tech. A division of @thisisinsider. Follow us on Facebook, Instagram, and YouTube. Visit our homepage for the day's top stories.",
            "url": "http://t.co/Fp1fi3LC2G",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/Fp1fi3LC2G",
                            "expanded_url": "http://www.techinsider.io",
                            "display_url": "techinsider.io",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 337131,
            "friends_count": 467,
            "listed_count": 4089,
            "created_at": "Thu Apr 30 15:15:08 +0000 2015",
            "favourites_count": 824,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 80955,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3224616765/1549483972",
            "profile_link_color": "64C5F0",
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
        "retweeted_status": {
            "created_at": "Thu Dec 17 19:18:48 +0000 2020",
            "id": 1339651275688964097,
            "id_str": "1339651275688964097",
            "full_text": "💰 New low: The @Fitbit Inspire 2 Activity Tracker is down to $70 at @target (originally $100) ➡️ https://t.co/briQK7nnn4",
            "truncated": false,
            "display_text_range": [
                0,
                120
            ],
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "fitbit",
                        "name": "fitbit",
                        "id": 17424053,
                        "id_str": "17424053",
                        "indices": [
                            15,
                            22
                        ]
                    },
                    {
                        "screen_name": "Target",
                        "name": "Target",
                        "id": 89084561,
                        "id_str": "89084561",
                        "indices": [
                            68,
                            75
                        ]
                    }
                ],
                "urls": [
                    {
                        "url": "https://t.co/briQK7nnn4",
                        "expanded_url": "http://bit.ly/38cfkTt",
                        "display_url": "bit.ly/38cfkTt",
                        "indices": [
                            97,
                            120
                        ]
                    }
                ]
            },
            "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 2873888723,
                "id_str": "2873888723",
                "name": "Insider Reviews",
                "screen_name": "insider_reviews",
                "location": "New York, NY",
                "description": "Honest reviews of products and services. A division of @thisisinsider. When you buy through our links, we may earn money from our affiliate partners.",
                "url": "https://t.co/TkIDwDER4M",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/TkIDwDER4M",
                                "expanded_url": "https://www.businessinsider.com/reviews",
                                "display_url": "businessinsider.com/reviews",
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
                "followers_count": 9526,
                "friends_count": 34,
                "listed_count": 134,
                "created_at": "Wed Nov 12 16:01:37 +0000 2014",
                "favourites_count": 331,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 14322,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1234951420937490433/pGMblHja_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234951420937490433/pGMblHja_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/2873888723/1564001442",
                "profile_link_color": "157491",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
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
            "retweet_count": 1,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:39:38 +0000 2020",
        "id": 1339686716530188294,
        "id_str": "1339686716530188294",
        "full_text": "🔄 A second change as we approach the final 10 minutes — @Donny_Beek6 is on for @B_Fernandes8!\n\n🔴 #MUFC\n#️⃣ #SHUMUN\n🏆 #PL https://t.co/wUAbWrtGs9",
        "truncated": false,
        "display_text_range": [
            0,
            120
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        97,
                        102
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        107,
                        114
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        117,
                        120
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "Donny_beek6",
                    "name": "Donny van de Beek",
                    "id": 1699890626,
                    "id_str": "1699890626",
                    "indices": [
                        56,
                        68
                    ]
                },
                {
                    "screen_name": "B_Fernandes8",
                    "name": "Bruno Fernandes",
                    "id": 1123232834376933376,
                    "id_str": "1123232834376933376",
                    "indices": [
                        79,
                        92
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1339686355274768386,
                    "id_str": "1339686355274768386",
                    "indices": [
                        121,
                        144
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "url": "https://t.co/wUAbWrtGs9",
                    "display_url": "pic.twitter.com/wUAbWrtGs9",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339686716530188294/photo/1",
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
                    "id": 1339686355274768386,
                    "id_str": "1339686355274768386",
                    "indices": [
                        121,
                        144
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeFpGSXIAIJAVj.jpg",
                    "url": "https://t.co/wUAbWrtGs9",
                    "display_url": "pic.twitter.com/wUAbWrtGs9",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339686716530188294/photo/1",
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
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
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
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 86,
        "favorite_count": 1022,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
{
        "created_at": "Sun Nov 15 10:27:30 +0000 2020",
        "id": 1327921158386315264,
        "id_str": "1327921158386315264",
        "full_text": "7️⃣ whole years of @JillScottJS8! \n\n#OnThisDay in 2013, we signed the one and only Jill Scott! 🙌\n\n🔷 #ManCity | https://t.co/axa0klD5re https://t.co/k8FTSOSh1l",
        "truncated": false,
        "display_text_range": [
            0,
            134
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "OnThisDay",
                    "indices": [
                        36,
                        46
                    ]
                },
                {
                    "text": "ManCity",
                    "indices": [
                        100,
                        108
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "JillScottJS8",
                    "name": "Jill Scott MBE",
                    "id": 73983778,
                    "id_str": "73983778",
                    "indices": [
                        19,
                        32
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/axa0klD5re",
                    "expanded_url": "http://mancity.com",
                    "display_url": "mancity.com",
                    "indices": [
                        111,
                        134
                    ]
                }
            ],
            "media": [
                {
                    "id": 1327918268267507713,
                    "id_str": "1327918268267507713",
                    "indices": [
                        135,
                        158
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "url": "https://t.co/k8FTSOSh1l",
                    "display_url": "pic.twitter.com/k8FTSOSh1l",
                    "expanded_url": "https://twitter.com/ManCity/status/1327921158386315264/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1327918268267507713,
                    "id_str": "1327918268267507713",
                    "indices": [
                        135,
                        158
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/Em22oR7WMAE7Gi7.jpg",
                    "url": "https://t.co/k8FTSOSh1l",
                    "display_url": "pic.twitter.com/k8FTSOSh1l",
                    "expanded_url": "https://twitter.com/ManCity/status/1327921158386315264/photo/1",
                    "type": "animated_gif",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 510,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1038,
                            "h": 778,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            519,
                            389
                        ],
                        "variants": [
                            {
                                "bitrate": 0,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/tweet_video/Em22oR7WMAE7Gi7.mp4"
                            }
                        ]
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
            "followers_count": 8690190,
            "friends_count": 51837,
            "listed_count": 14684,
            "created_at": "Mon Apr 28 19:28:08 +0000 2008",
            "favourites_count": 13685,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 135020,
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
        "retweet_count": 42,
        "favorite_count": 789,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
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
        "created_at": "Sun Nov 15 14:30:29 +0000 2020",
        "id": 1327982305730760704,
        "id_str": "1327982305730760704",
        "full_text": "Honours even 🔵🔴\n\nWatch all the best bits from a thrilling Manchester derby! 👇\n\n🔷 #ManCity | https://t.co/axa0klD5re https://t.co/GMAS665cgp",
        "truncated": false,
        "display_text_range": [
            0,
            115
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "ManCity",
                    "indices": [
                        81,
                        89
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/axa0klD5re",
                    "expanded_url": "http://mancity.com",
                    "display_url": "mancity.com",
                    "indices": [
                        92,
                        115
                    ]
                }
            ],
            "media": [
                {
                    "id": 1327982162524692481,
                    "id_str": "1327982162524692481",
                    "indices": [
                        116,
                        139
                    ],
                    "media_url": "http://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "url": "https://t.co/GMAS665cgp",
                    "display_url": "pic.twitter.com/GMAS665cgp",
                    "expanded_url": "https://twitter.com/ManCity/status/1327982305730760704/video/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
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
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1327982162524692481,
                    "id_str": "1327982162524692481",
                    "indices": [
                        116,
                        139
                    ],
                    "media_url": "http://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Em3wyFRXcAAB96l.jpg",
                    "url": "https://t.co/GMAS665cgp",
                    "display_url": "pic.twitter.com/GMAS665cgp",
                    "expanded_url": "https://twitter.com/ManCity/status/1327982305730760704/video/1",
                    "type": "video",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
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
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            16,
                            9
                        ],
                        "duration_millis": 117680,
                        "variants": [
                            {
                                "content_type": "application/x-mpegURL",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/pl/48sq3u5qq0ERsbB_.m3u8?tag=13"
                            },
                            {
                                "bitrate": 288000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/vid/480x270/M5ostLWzanC9bSgJ.mp4?tag=13"
                            },
                            {
                                "bitrate": 2176000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/vid/1280x720/ev-TBZxZtaw1aEGM.mp4?tag=13"
                            },
                            {
                                "bitrate": 832000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/1327982162524692481/vid/640x360/sFmeHSaszV_6xqFo.mp4?tag=13"
                            }
                        ]
                    },
                    "additional_media_info": {
                        "title": "FA WSL HIGHLIGHTS | UNITED V CITY ",
                        "monetizable": true
                    }
                }
            ]
        },
        "source": "<a href=\"http://grabyo.com\" rel=\"nofollow\">Grabyo</a>",
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
            "followers_count": 8690190,
            "friends_count": 51837,
            "listed_count": 14684,
            "created_at": "Mon Apr 28 19:28:08 +0000 2008",
            "favourites_count": 13685,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 135020,
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
        "retweet_count": 14,
        "favorite_count": 517,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
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
        "created_at": "Thu Dec 17 20:11:12 +0000 2020",
        "id": 1339664462270390273,
        "id_str": "1339664462270390273",
        "full_text": "RT @JanVertonghen: Still waiting for  my ⌚️ Sonnyboy... #puskás",
        "truncated": false,
        "display_text_range": [
            0,
            63
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "puskás",
                    "indices": [
                        56,
                        63
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "JanVertonghen",
                    "name": "Jan Vertonghen",
                    "id": 507489702,
                    "id_str": "507489702",
                    "indices": [
                        3,
                        17
                    ]
                }
            ],
            "urls": []
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 121402638,
            "id_str": "121402638",
            "name": "Tottenham Hotspur",
            "screen_name": "SpursOfficial",
            "location": "Tottenham, London, England",
            "description": "The official Twitter account of Tottenham Hotspur.",
            "url": "https://t.co/V8cMqMluK2",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/V8cMqMluK2",
                            "expanded_url": "http://www.tottenhamhotspur.com",
                            "display_url": "tottenhamhotspur.com",
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
            "followers_count": 5315784,
            "friends_count": 404,
            "listed_count": 11420,
            "created_at": "Tue Mar 09 11:36:02 +0000 2010",
            "favourites_count": 4197,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 94478,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338444101688172546/Qp3bAeZT_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338444101688172546/Qp3bAeZT_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/121402638/1607641399",
            "profile_link_color": "2CB8EB",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
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
        "retweeted_status": {
            "created_at": "Thu Dec 17 19:55:03 +0000 2020",
            "id": 1339660401122926604,
            "id_str": "1339660401122926604",
            "full_text": "Still waiting for  my ⌚️ Sonnyboy... #puskás",
            "truncated": false,
            "display_text_range": [
                0,
                44
            ],
            "entities": {
                "hashtags": [
                    {
                        "text": "puskás",
                        "indices": [
                            37,
                            44
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": []
            },
            "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 507489702,
                "id_str": "507489702",
                "name": "Jan Vertonghen",
                "screen_name": "JanVertonghen",
                "location": "",
                "description": "Official account of Jan Vertonghen, football player for SL Benfica and the Belgian national team!",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 937912,
                "friends_count": 241,
                "listed_count": 2543,
                "created_at": "Tue Feb 28 15:06:46 +0000 2012",
                "favourites_count": 1588,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": false,
                "verified": true,
                "statuses_count": 987,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1295371796850647041/zyRk8Jkg_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1295371796850647041/zyRk8Jkg_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/507489702/1597950485",
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
            "retweet_count": 318,
            "favorite_count": 5326,
            "favorited": false,
            "retweeted": false,
            "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 318,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:34:15 +0000 2020",
        "id": 1339685364399820804,
        "id_str": "1339685364399820804",
        "full_text": "🔄 A first change of the night for #MUFC, as @JuanMata8 takes @MasonGreenwood's place with 15 minutes remaining.\n\n#️⃣ #SHUMUN\n🏆 #PL https://t.co/4dX0cO8nFZ",
        "truncated": false,
        "display_text_range": [
            0,
            130
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        34,
                        39
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        117,
                        124
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        127,
                        130
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "juanmata8",
                    "name": "Juan Mata García",
                    "id": 140750163,
                    "id_str": "140750163",
                    "indices": [
                        44,
                        54
                    ]
                },
                {
                    "screen_name": "masongreenwood",
                    "name": "Mason Greenwood",
                    "id": 835833765033291777,
                    "id_str": "835833765033291777",
                    "indices": [
                        61,
                        76
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1339685123692916737,
                    "id_str": "1339685123692916737",
                    "indices": [
                        131,
                        154
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeEhaSXcAEWC24.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeEhaSXcAEWC24.jpg",
                    "url": "https://t.co/4dX0cO8nFZ",
                    "display_url": "pic.twitter.com/4dX0cO8nFZ",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339685364399820804/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
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
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339685123692916737,
                    "id_str": "1339685123692916737",
                    "indices": [
                        131,
                        154
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeEhaSXcAEWC24.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeEhaSXcAEWC24.jpg",
                    "url": "https://t.co/4dX0cO8nFZ",
                    "display_url": "pic.twitter.com/4dX0cO8nFZ",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339685364399820804/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
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
                        },
                        "medium": {
                            "w": 1200,
                            "h": 675,
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
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
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
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 103,
        "favorite_count": 1134,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:31:29 +0000 2020",
        "id": 1339684666568302594,
        "id_str": "1339684666568302594",
        "full_text": "RT @SheffieldUnited: 74' 3rd Blades change.\n\nRhian Brewster comes on for Oli Burke.\n\n🔴 #SUFC 1-3 #MUFC ⚫️ https://t.co/xPDbTPNhjE",
        "truncated": false,
        "display_text_range": [
            0,
            129
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "SUFC",
                    "indices": [
                        87,
                        92
                    ]
                },
                {
                    "text": "MUFC",
                    "indices": [
                        97,
                        102
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "SheffieldUnited",
                    "name": "Sheffield United",
                    "id": 63463538,
                    "id_str": "63463538",
                    "indices": [
                        3,
                        19
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1339684418198396928,
                    "id_str": "1339684418198396928",
                    "indices": [
                        106,
                        129
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                    "url": "https://t.co/xPDbTPNhjE",
                    "display_url": "pic.twitter.com/xPDbTPNhjE",
                    "expanded_url": "https://twitter.com/SheffieldUnited/status/1339684589456027653/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 960,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 604,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 960,
                            "h": 1080,
                            "resize": "fit"
                        }
                    },
                    "source_status_id": 1339684589456027653,
                    "source_status_id_str": "1339684589456027653",
                    "source_user_id": 63463538,
                    "source_user_id_str": "63463538"
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339684418198396928,
                    "id_str": "1339684418198396928",
                    "indices": [
                        106,
                        129
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                    "url": "https://t.co/xPDbTPNhjE",
                    "display_url": "pic.twitter.com/xPDbTPNhjE",
                    "expanded_url": "https://twitter.com/SheffieldUnited/status/1339684589456027653/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 960,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 604,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 960,
                            "h": 1080,
                            "resize": "fit"
                        }
                    },
                    "source_status_id": 1339684589456027653,
                    "source_status_id_str": "1339684589456027653",
                    "source_user_id": 63463538,
                    "source_user_id_str": "63463538"
                },
                {
                    "id": 1339684418202558464,
                    "id_str": "1339684418202558464",
                    "indices": [
                        106,
                        129
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeD4WIW4AA0wX6.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeD4WIW4AA0wX6.jpg",
                    "url": "https://t.co/xPDbTPNhjE",
                    "display_url": "pic.twitter.com/xPDbTPNhjE",
                    "expanded_url": "https://twitter.com/SheffieldUnited/status/1339684589456027653/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 960,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 960,
                            "h": 1080,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 604,
                            "h": 680,
                            "resize": "fit"
                        }
                    },
                    "source_status_id": 1339684589456027653,
                    "source_status_id_str": "1339684589456027653",
                    "source_user_id": 63463538,
                    "source_user_id_str": "63463538"
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
            "id": 343627165,
            "id_str": "343627165",
            "name": "Premier League",
            "screen_name": "premierleague",
            "location": "",
            "description": "The official Twitter account of the Premier League 📱 @OfficialFPL | 🇮🇳 @PLforIndia | 🇺🇸 @PLinUSA Join us on YouTube 👉 https://t.co/mE5i2L4M3L",
            "url": "https://t.co/IMNRVHC2Kt",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/IMNRVHC2Kt",
                            "expanded_url": "http://premierleague.com",
                            "display_url": "premierleague.com",
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
                            "url": "https://t.co/mE5i2L4M3L",
                            "expanded_url": "http://youtube.com/premierleague",
                            "display_url": "youtube.com/premierleague",
                            "indices": [
                                118,
                                141
                            ]
                        }
                    ]
                }
            },
            "protected": false,
            "followers_count": 24201046,
            "friends_count": 82,
            "listed_count": 26639,
            "created_at": "Wed Jul 27 21:09:32 +0000 2011",
            "favourites_count": 1853,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 123736,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "050528",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338425972253728769/Km-hIKAs_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338425972253728769/Km-hIKAs_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/343627165/1607957133",
            "profile_link_color": "93A644",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "171838",
            "profile_text_color": "FFFFFF",
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
        "retweeted_status": {
            "created_at": "Thu Dec 17 21:31:10 +0000 2020",
            "id": 1339684589456027653,
            "id_str": "1339684589456027653",
            "full_text": "74' 3rd Blades change.\n\nRhian Brewster comes on for Oli Burke.\n\n🔴 #SUFC 1-3 #MUFC ⚫️ https://t.co/xPDbTPNhjE",
            "truncated": false,
            "display_text_range": [
                0,
                84
            ],
            "entities": {
                "hashtags": [
                    {
                        "text": "SUFC",
                        "indices": [
                            66,
                            71
                        ]
                    },
                    {
                        "text": "MUFC",
                        "indices": [
                            76,
                            81
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 1339684418198396928,
                        "id_str": "1339684418198396928",
                        "indices": [
                            85,
                            108
                        ],
                        "media_url": "http://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                        "url": "https://t.co/xPDbTPNhjE",
                        "display_url": "pic.twitter.com/xPDbTPNhjE",
                        "expanded_url": "https://twitter.com/SheffieldUnited/status/1339684589456027653/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 960,
                                "h": 1080,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 604,
                                "h": 680,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 960,
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
                        "id": 1339684418198396928,
                        "id_str": "1339684418198396928",
                        "indices": [
                            85,
                            108
                        ],
                        "media_url": "http://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/EpeD4WHXYAAplw2.jpg",
                        "url": "https://t.co/xPDbTPNhjE",
                        "display_url": "pic.twitter.com/xPDbTPNhjE",
                        "expanded_url": "https://twitter.com/SheffieldUnited/status/1339684589456027653/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 960,
                                "h": 1080,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 604,
                                "h": 680,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 960,
                                "h": 1080,
                                "resize": "fit"
                            }
                        }
                    },
                    {
                        "id": 1339684418202558464,
                        "id_str": "1339684418202558464",
                        "indices": [
                            85,
                            108
                        ],
                        "media_url": "http://pbs.twimg.com/media/EpeD4WIW4AA0wX6.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/EpeD4WIW4AA0wX6.jpg",
                        "url": "https://t.co/xPDbTPNhjE",
                        "display_url": "pic.twitter.com/xPDbTPNhjE",
                        "expanded_url": "https://twitter.com/SheffieldUnited/status/1339684589456027653/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 960,
                                "h": 1080,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 960,
                                "h": 1080,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 604,
                                "h": 680,
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
                "id": 63463538,
                "id_str": "63463538",
                "name": "Sheffield United",
                "screen_name": "SheffieldUnited",
                "location": "Sheffield, UK",
                "description": "Official Twitter account of Sheffield United - The Blades. Other accts 👉 @sufcdevelopment, @sufc_women, @sufcservices, @sufcarabic & @sufcturk ⚽️",
                "url": "https://t.co/BcilCkgsX4",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/BcilCkgsX4",
                                "expanded_url": "http://sufc.co.uk",
                                "display_url": "sufc.co.uk",
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
                "followers_count": 388636,
                "friends_count": 149,
                "listed_count": 1994,
                "created_at": "Thu Aug 06 12:14:57 +0000 2009",
                "favourites_count": 552,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 45119,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "CC0000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1338927829040377857/TdQZv4t4_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338927829040377857/TdQZv4t4_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/63463538/1591183393",
                "profile_link_color": "CC0000",
                "profile_sidebar_border_color": "FFFFFF",
                "profile_sidebar_fill_color": "FFFFFF",
                "profile_text_color": "330000",
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
            "retweet_count": 23,
            "favorite_count": 239,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "cy"
        },
        "is_quote_status": false,
        "retweet_count": 23,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "cy"
    },
    {
        "created_at": "Thu Dec 17 21:30:04 +0000 2020",
        "id": 1339684309062606853,
        "id_str": "1339684309062606853",
        "full_text": "On the attack ✨\n\n🔴 #MUFC\n#️⃣ #SHUMUN\n🏆 #PL https://t.co/S9OlqqIkCX",
        "truncated": false,
        "display_text_range": [
            0,
            42
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        19,
                        24
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        29,
                        36
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        39,
                        42
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1339683908368166913,
                    "id_str": "1339683908368166913",
                    "indices": [
                        43,
                        66
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeDaq2XcAElb8U.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeDaq2XcAElb8U.jpg",
                    "url": "https://t.co/S9OlqqIkCX",
                    "display_url": "pic.twitter.com/S9OlqqIkCX",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339684309062606853/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 544,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1350,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 960,
                            "h": 1200,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339683908368166913,
                    "id_str": "1339683908368166913",
                    "indices": [
                        43,
                        66
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeDaq2XcAElb8U.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeDaq2XcAElb8U.jpg",
                    "url": "https://t.co/S9OlqqIkCX",
                    "display_url": "pic.twitter.com/S9OlqqIkCX",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339684309062606853/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 544,
                            "h": 680,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1350,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 960,
                            "h": 1200,
                            "resize": "fit"
                        }
                    }
                },
                {
                    "id": 1339683908640772097,
                    "id_str": "1339683908640772097",
                    "indices": [
                        43,
                        66
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeDar3XEAEbz3R.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeDar3XEAEbz3R.jpg",
                    "url": "https://t.co/S9OlqqIkCX",
                    "display_url": "pic.twitter.com/S9OlqqIkCX",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339684309062606853/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 544,
                            "h": 680,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 960,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1080,
                            "h": 1350,
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
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
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
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 104,
        "favorite_count": 1538,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
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
        "created_at": "Thu Dec 17 21:29:29 +0000 2020",
        "id": 1339684162010312704,
        "id_str": "1339684162010312704",
        "full_text": "Why do humans enjoy the pain that comes with eating spicy food? https://t.co/oDV6ktqOYT",
        "truncated": false,
        "display_text_range": [
            0,
            63
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 985884912023756800,
                    "id_str": "985884912023756800",
                    "indices": [
                        64,
                        87
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeDpFzXEAE5dCn.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeDpFzXEAE5dCn.jpg",
                    "url": "https://t.co/oDV6ktqOYT",
                    "display_url": "pic.twitter.com/oDV6ktqOYT",
                    "expanded_url": "https://twitter.com/techinsider/status/1339684162010312704/video/1",
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
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 985884912023756800,
                    "id_str": "985884912023756800",
                    "indices": [
                        64,
                        87
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeDpFzXEAE5dCn.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeDpFzXEAE5dCn.jpg",
                    "url": "https://t.co/oDV6ktqOYT",
                    "display_url": "pic.twitter.com/oDV6ktqOYT",
                    "expanded_url": "https://twitter.com/techinsider/status/1339684162010312704/video/1",
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
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            16,
                            9
                        ],
                        "duration_millis": 185978,
                        "variants": [
                            {
                                "content_type": "application/x-mpegURL",
                                "url": "https://video.twimg.com/amplify_video/985884912023756800/pl/qjYzWUbK0wUCTBic.m3u8?tag=6"
                            },
                            {
                                "bitrate": 2176000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/985884912023756800/vid/1280x720/X2_9WnrCOHF85B3K.mp4?tag=6"
                            },
                            {
                                "bitrate": 832000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/985884912023756800/vid/640x360/aUNUJHqIebHlTz7I.mp4?tag=6"
                            },
                            {
                                "bitrate": 320000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/amplify_video/985884912023756800/vid/320x180/c3JqK_6RnaG7kEQy.mp4?tag=6"
                            }
                        ]
                    },
                    "additional_media_info": {
                        "title": "Here's why sometimes pain can feel good",
                        "description": "Similar areas of the brain are activated when you burn your hand on the stove and when you bite into a cookie. Here's why.",
                        "call_to_actions": {
                            "visit_site": {
                                "url": "https://www.businessinsider.com/"
                            }
                        },
                        "monetizable": false
                    }
                }
            ]
        },
        "source": "<a href=\"http://www.socialflow.com\" rel=\"nofollow\">SocialFlow</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3224616765,
            "id_str": "3224616765",
            "name": "Tech Insider",
            "screen_name": "techinsider",
            "location": "New York, USA",
            "description": "What you want to know about tech. A division of @thisisinsider. Follow us on Facebook, Instagram, and YouTube. Visit our homepage for the day's top stories.",
            "url": "http://t.co/Fp1fi3LC2G",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/Fp1fi3LC2G",
                            "expanded_url": "http://www.techinsider.io",
                            "display_url": "techinsider.io",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 337131,
            "friends_count": 467,
            "listed_count": 4089,
            "created_at": "Thu Apr 30 15:15:08 +0000 2015",
            "favourites_count": 824,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 80955,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3224616765/1549483972",
            "profile_link_color": "64C5F0",
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
        "retweet_count": 5,
        "favorite_count": 14,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:27:00 +0000 2020",
        "id": 1339683538094972929,
        "id_str": "1339683538094972929",
        "full_text": "✍️ 🖼️ To celebrate Sonny winning the #Puskas Award, we're giving away a special photograph of his iconic goal, signed by the man himself!\n\nEnter now for a chance to win ⤵️\n\n#FIFAFootballAwards ⚪️ #TheBest",
        "truncated": false,
        "display_text_range": [
            0,
            204
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "Puskas",
                    "indices": [
                        37,
                        44
                    ]
                },
                {
                    "text": "FIFAFootballAwards",
                    "indices": [
                        173,
                        192
                    ]
                },
                {
                    "text": "TheBest",
                    "indices": [
                        196,
                        204
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": []
        },
        "source": "<a href=\"https://ads-api.twitter.com\" rel=\"nofollow\">Twitter for Advertisers (legacy)</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 121402638,
            "id_str": "121402638",
            "name": "Tottenham Hotspur",
            "screen_name": "SpursOfficial",
            "location": "Tottenham, London, England",
            "description": "The official Twitter account of Tottenham Hotspur.",
            "url": "https://t.co/V8cMqMluK2",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/V8cMqMluK2",
                            "expanded_url": "http://www.tottenhamhotspur.com",
                            "display_url": "tottenhamhotspur.com",
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
            "followers_count": 5316094,
            "friends_count": 404,
            "listed_count": 11418,
            "created_at": "Tue Mar 09 11:36:02 +0000 2010",
            "favourites_count": 4197,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 94481,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "C0DEED",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338444101688172546/Qp3bAeZT_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338444101688172546/Qp3bAeZT_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/121402638/1607641399",
            "profile_link_color": "2CB8EB",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
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
        "retweet_count": 62,
        "favorite_count": 841,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:24:48 +0000 2020",
        "id": 1339682983528296452,
        "id_str": "1339682983528296452",
        "full_text": "Just a couple of 21-year-olds 💪🟦🟥 @RonaldAraujo939 &amp; @OscarMingueza https://t.co/KhnLwTUXMW",
        "truncated": false,
        "display_text_range": [
            0,
            71
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "RonaldAraujo939",
                    "name": "Ronald Araujo",
                    "id": 1020668620517576706,
                    "id_str": "1020668620517576706",
                    "indices": [
                        34,
                        50
                    ]
                },
                {
                    "screen_name": "OscarMingueza",
                    "name": "Oscar Mingueza",
                    "id": 1362843871,
                    "id_str": "1362843871",
                    "indices": [
                        57,
                        71
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1339681858469175296,
                    "id_str": "1339681858469175296",
                    "indices": [
                        72,
                        95
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeBjWYXIAAeXDW.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeBjWYXIAAeXDW.jpg",
                    "url": "https://t.co/KhnLwTUXMW",
                    "display_url": "pic.twitter.com/KhnLwTUXMW",
                    "expanded_url": "https://twitter.com/FCBarcelona/status/1339682983528296452/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 2048,
                            "h": 1280,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 425,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 750,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339681858469175296,
                    "id_str": "1339681858469175296",
                    "indices": [
                        72,
                        95
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeBjWYXIAAeXDW.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeBjWYXIAAeXDW.jpg",
                    "url": "https://t.co/KhnLwTUXMW",
                    "display_url": "pic.twitter.com/KhnLwTUXMW",
                    "expanded_url": "https://twitter.com/FCBarcelona/status/1339682983528296452/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 2048,
                            "h": 1280,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 425,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 750,
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
            "id": 96951800,
            "id_str": "96951800",
            "name": "FC Barcelona",
            "screen_name": "FCBarcelona",
            "location": "Get BarçaTV+ 👉",
            "description": "#ForçaBarça! Join us: @fcbarcelona_cat @fcbarcelona_es @fcbarcelona_br @fcbarcelona_jp @fcbarcelona_id @fcbarcelona_ara @fcbarcelona_fra @fcbarcelona_tr",
            "url": "https://t.co/7fVxP0ION3",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/7fVxP0ION3",
                            "expanded_url": "http://barca.link/ob4230r8AYl",
                            "display_url": "barca.link/ob4230r8AYl",
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
            "followers_count": 34842142,
            "friends_count": 92,
            "listed_count": 30353,
            "created_at": "Tue Dec 15 09:53:50 +0000 2009",
            "favourites_count": 3160,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 112719,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1333096463916797954/7bzarkH2_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1333096463916797954/7bzarkH2_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/96951800/1601035102",
            "profile_link_color": "9B0034",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "CBC9C4",
            "profile_text_color": "333333",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 116,
        "favorite_count": 1934,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:22:24 +0000 2020",
        "id": 1339682379762454536,
        "id_str": "1339682379762454536",
        "full_text": "cc \n@Northeastern\n\n@Harvard\n\n@rutgers\n\n@NorthwesternU\n\n@NUlabTMN\n\n@NUnetsi\n\n@ShorensteinCtr",
        "truncated": false,
        "display_text_range": [
            0,
            91
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "Northeastern",
                    "name": "Northeastern U.",
                    "id": 46477409,
                    "id_str": "46477409",
                    "indices": [
                        4,
                        17
                    ]
                },
                {
                    "screen_name": "Harvard",
                    "name": "Harvard University",
                    "id": 39585367,
                    "id_str": "39585367",
                    "indices": [
                        19,
                        27
                    ]
                },
                {
                    "screen_name": "Rutgers",
                    "name": "Rutgers Football",
                    "id": 2379862393,
                    "id_str": "2379862393",
                    "indices": [
                        29,
                        37
                    ]
                },
                {
                    "screen_name": "NorthwesternU",
                    "name": "Northwestern",
                    "id": 33639255,
                    "id_str": "33639255",
                    "indices": [
                        39,
                        53
                    ]
                },
                {
                    "screen_name": "NUlabTMN",
                    "name": "NULab",
                    "id": 902498275,
                    "id_str": "902498275",
                    "indices": [
                        55,
                        64
                    ]
                },
                {
                    "screen_name": "NUnetsi",
                    "name": "Network Science Institute",
                    "id": 3729520335,
                    "id_str": "3729520335",
                    "indices": [
                        66,
                        74
                    ]
                },
                {
                    "screen_name": "ShorensteinCtr",
                    "name": "Shorenstein Center",
                    "id": 56772461,
                    "id_str": "56772461",
                    "indices": [
                        76,
                        91
                    ]
                }
            ],
            "urls": []
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": 1339682378739019784,
        "in_reply_to_status_id_str": "1339682378739019784",
        "in_reply_to_user_id": 37213193,
        "in_reply_to_user_id_str": "37213193",
        "in_reply_to_screen_name": "davidlazer",
        "user": {
            "id": 37213193,
            "id_str": "37213193",
            "name": "David Lazer",
            "screen_name": "davidlazer",
            "location": "Massachusetts",
            "description": "Computational social scientist at Northeastern and Harvard Universities.",
            "url": "http://t.co/3VA8Yzceuu",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/3VA8Yzceuu",
                            "expanded_url": "http://www.davidlazer.com",
                            "display_url": "davidlazer.com",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 11415,
            "friends_count": 2987,
            "listed_count": 474,
            "created_at": "Sat May 02 15:11:37 +0000 2009",
            "favourites_count": 17725,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 17515,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/37213193/1491675289",
            "profile_link_color": "7FDBB6",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "und"
    },
    {
        "created_at": "Thu Dec 17 21:22:23 +0000 2020",
        "id": 1339682378739019784,
        "id_str": "1339682378739019784",
        "full_text": "More in the report, and more reports (similar data for every state) at https://t.co/R2ssoQmGoP.\nw/\n@matthewabaum\n\n@royperlis\n\n@MauSantillana\n\n@Ognyanova\n\nAlexi Quintana\n@_Jon_Green\n\n@hanyuchwe\n\n@AdinaGitomer\n\nJamie Druckman\nJennifer Lin\n@mattysimonson\n\n@Atauslu",
        "truncated": false,
        "display_text_range": [
            0,
            261
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "matthewabaum",
                    "name": "Matthew Baum",
                    "id": 150651734,
                    "id_str": "150651734",
                    "indices": [
                        99,
                        112
                    ]
                },
                {
                    "screen_name": "royperlis",
                    "name": "Roy Perlis",
                    "id": 1166828948,
                    "id_str": "1166828948",
                    "indices": [
                        114,
                        124
                    ]
                },
                {
                    "screen_name": "MauSantillana",
                    "name": "Mauricio Santillana",
                    "id": 1385808920,
                    "id_str": "1385808920",
                    "indices": [
                        126,
                        140
                    ]
                },
                {
                    "screen_name": "Ognyanova",
                    "name": "Katherine Ognyanova",
                    "id": 75641981,
                    "id_str": "75641981",
                    "indices": [
                        142,
                        152
                    ]
                },
                {
                    "screen_name": "_Jon_Green",
                    "name": "Jon Green",
                    "id": 493387905,
                    "id_str": "493387905",
                    "indices": [
                        169,
                        180
                    ]
                },
                {
                    "screen_name": "hanyuchwe",
                    "name": "Hanyu Chwe",
                    "id": 385233146,
                    "id_str": "385233146",
                    "indices": [
                        182,
                        192
                    ]
                },
                {
                    "screen_name": "AdinaGitomer",
                    "name": "Adina Gitomer",
                    "id": 600577592,
                    "id_str": "600577592",
                    "indices": [
                        194,
                        207
                    ]
                },
                {
                    "screen_name": "mattysimonson",
                    "name": "Matthew Simonson",
                    "id": 3698106376,
                    "id_str": "3698106376",
                    "indices": [
                        237,
                        251
                    ]
                },
                {
                    "screen_name": "Atauslu",
                    "name": "Ata Uslu",
                    "id": 1278080876987985923,
                    "id_str": "1278080876987985923",
                    "indices": [
                        253,
                        261
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/R2ssoQmGoP",
                    "expanded_url": "http://COVIDstates.org",
                    "display_url": "COVIDstates.org",
                    "indices": [
                        71,
                        94
                    ]
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": 1339682377342312452,
        "in_reply_to_status_id_str": "1339682377342312452",
        "in_reply_to_user_id": 37213193,
        "in_reply_to_user_id_str": "37213193",
        "in_reply_to_screen_name": "davidlazer",
        "user": {
            "id": 37213193,
            "id_str": "37213193",
            "name": "David Lazer",
            "screen_name": "davidlazer",
            "location": "Massachusetts",
            "description": "Computational social scientist at Northeastern and Harvard Universities.",
            "url": "http://t.co/3VA8Yzceuu",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/3VA8Yzceuu",
                            "expanded_url": "http://www.davidlazer.com",
                            "display_url": "davidlazer.com",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 11415,
            "friends_count": 2987,
            "listed_count": 474,
            "created_at": "Sat May 02 15:11:37 +0000 2009",
            "favourites_count": 17725,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 17515,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/37213193/1491675289",
            "profile_link_color": "7FDBB6",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:22:23 +0000 2020",
        "id": 1339682377342312452,
        "id_str": "1339682377342312452",
        "full_text": "4) Big differential impacts depending on whether there are children in the home- much bigger impact across all dimensions on households with children, &amp; more disruptive to women than men in households with children. https://t.co/FCsfufBXM1",
        "truncated": false,
        "display_text_range": [
            0,
            219
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1339679671290609673,
                    "id_str": "1339679671290609673",
                    "indices": [
                        220,
                        243
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd_kCgWwAku-0V.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd_kCgWwAku-0V.jpg",
                    "url": "https://t.co/FCsfufBXM1",
                    "display_url": "pic.twitter.com/FCsfufBXM1",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682377342312452/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 309,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1560,
                            "h": 708,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 545,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339679671290609673,
                    "id_str": "1339679671290609673",
                    "indices": [
                        220,
                        243
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd_kCgWwAku-0V.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd_kCgWwAku-0V.jpg",
                    "url": "https://t.co/FCsfufBXM1",
                    "display_url": "pic.twitter.com/FCsfufBXM1",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682377342312452/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 309,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1560,
                            "h": 708,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 545,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": 1339682374007861259,
        "in_reply_to_status_id_str": "1339682374007861259",
        "in_reply_to_user_id": 37213193,
        "in_reply_to_user_id_str": "37213193",
        "in_reply_to_screen_name": "davidlazer",
        "user": {
            "id": 37213193,
            "id_str": "37213193",
            "name": "David Lazer",
            "screen_name": "davidlazer",
            "location": "Massachusetts",
            "description": "Computational social scientist at Northeastern and Harvard Universities.",
            "url": "http://t.co/3VA8Yzceuu",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/3VA8Yzceuu",
                            "expanded_url": "http://www.davidlazer.com",
                            "display_url": "davidlazer.com",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 11415,
            "friends_count": 2987,
            "listed_count": 474,
            "created_at": "Sat May 02 15:11:37 +0000 2009",
            "favourites_count": 17725,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 17515,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/37213193/1491675289",
            "profile_link_color": "7FDBB6",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "favorite_count": 1,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:22:22 +0000 2020",
        "id": 1339682374007861259,
        "id_str": "1339682374007861259",
        "full_text": "2) Modest regional differences (though bigger differences state to state)\n\n3) And modest differences across partisans- worst for Independents, then Democrats, and then Republicans. https://t.co/CTQBIEYOuP",
        "truncated": false,
        "display_text_range": [
            0,
            180
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1339682243997003779,
                    "id_str": "1339682243997003779",
                    "indices": [
                        181,
                        204
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeB5ylW8AMVu7I.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeB5ylW8AMVu7I.jpg",
                    "url": "https://t.co/CTQBIEYOuP",
                    "display_url": "pic.twitter.com/CTQBIEYOuP",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682374007861259/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 680,
                            "h": 308,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 543,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1440,
                            "h": 652,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339682243997003779,
                    "id_str": "1339682243997003779",
                    "indices": [
                        181,
                        204
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeB5ylW8AMVu7I.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeB5ylW8AMVu7I.jpg",
                    "url": "https://t.co/CTQBIEYOuP",
                    "display_url": "pic.twitter.com/CTQBIEYOuP",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682374007861259/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 680,
                            "h": 308,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 543,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1440,
                            "h": 652,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
        "in_reply_to_status_id": 1339682370438479875,
        "in_reply_to_status_id_str": "1339682370438479875",
        "in_reply_to_user_id": 37213193,
        "in_reply_to_user_id_str": "37213193",
        "in_reply_to_screen_name": "davidlazer",
        "user": {
            "id": 37213193,
            "id_str": "37213193",
            "name": "David Lazer",
            "screen_name": "davidlazer",
            "location": "Massachusetts",
            "description": "Computational social scientist at Northeastern and Harvard Universities.",
            "url": "http://t.co/3VA8Yzceuu",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/3VA8Yzceuu",
                            "expanded_url": "http://www.davidlazer.com",
                            "display_url": "davidlazer.com",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 11415,
            "friends_count": 2987,
            "listed_count": 474,
            "created_at": "Sat May 02 15:11:37 +0000 2009",
            "favourites_count": 17725,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 17515,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/37213193/1491675289",
            "profile_link_color": "7FDBB6",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:22:21 +0000 2020",
        "id": 1339682370438479875,
        "id_str": "1339682370438479875",
        "full_text": "Check out our latest https://t.co/1dfXjRWifI report, on economic hardships due to the pandemic. \n\nSome take aways: \n\n1) Big impacts on everyone, but especially on people with less education, and on Hispanics. https://t.co/3hf8TQP4Ll",
        "truncated": false,
        "display_text_range": [
            0,
            208
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/1dfXjRWifI",
                    "expanded_url": "http://COVIDStates.org",
                    "display_url": "COVIDStates.org",
                    "indices": [
                        21,
                        44
                    ]
                }
            ],
            "media": [
                {
                    "id": 1339678682881925121,
                    "id_str": "1339678682881925121",
                    "indices": [
                        209,
                        232
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd-qgZXIAEbcpx.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd-qgZXIAEbcpx.jpg",
                    "url": "https://t.co/3hf8TQP4Ll",
                    "display_url": "pic.twitter.com/3hf8TQP4Ll",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682370438479875/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1560,
                            "h": 786,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 343,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 605,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339678682881925121,
                    "id_str": "1339678682881925121",
                    "indices": [
                        209,
                        232
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd-qgZXIAEbcpx.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd-qgZXIAEbcpx.jpg",
                    "url": "https://t.co/3hf8TQP4Ll",
                    "display_url": "pic.twitter.com/3hf8TQP4Ll",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682370438479875/photo/1",
                    "type": "photo",
                    "sizes": {
                        "large": {
                            "w": 1560,
                            "h": 786,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 343,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 605,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        }
                    }
                },
                {
                    "id": 1339678971307433986,
                    "id_str": "1339678971307433986",
                    "indices": [
                        209,
                        232
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd-7S3XIAIpMB6.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd-7S3XIAIpMB6.jpg",
                    "url": "https://t.co/3hf8TQP4Ll",
                    "display_url": "pic.twitter.com/3hf8TQP4Ll",
                    "expanded_url": "https://twitter.com/davidlazer/status/1339682370438479875/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 351,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1200,
                            "h": 619,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 1240,
                            "h": 640,
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
            "id": 37213193,
            "id_str": "37213193",
            "name": "David Lazer",
            "screen_name": "davidlazer",
            "location": "Massachusetts",
            "description": "Computational social scientist at Northeastern and Harvard Universities.",
            "url": "http://t.co/3VA8Yzceuu",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/3VA8Yzceuu",
                            "expanded_url": "http://www.davidlazer.com",
                            "display_url": "davidlazer.com",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 11415,
            "friends_count": 2987,
            "listed_count": 474,
            "created_at": "Sat May 02 15:11:37 +0000 2009",
            "favourites_count": 17725,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 17515,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme6/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1128284724387094528/bG-I8Knm_normal.png",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/37213193/1491675289",
            "profile_link_color": "7FDBB6",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "retweet_count": 1,
        "favorite_count": 2,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:21:33 +0000 2020",
        "id": 1339682169313259522,
        "id_str": "1339682169313259522",
        "full_text": "🌪 At our free-flowing best 🌪 \n\n🔴 #MUFC\n#️⃣ #SHUMUN\n🏆 #PL \nhttps://t.co/Lrw3IDxJWe",
        "truncated": false,
        "display_text_range": [
            0,
            81
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        33,
                        38
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        43,
                        50
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        53,
                        56
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1339680030306291713,
                    "id_str": "1339680030306291713",
                    "indices": [
                        58,
                        81
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd_6uIXcAYCdhT.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd_6uIXcAYCdhT.jpg",
                    "url": "https://t.co/Lrw3IDxJWe",
                    "display_url": "pic.twitter.com/Lrw3IDxJWe",
                    "expanded_url": "https://twitter.com/primevideosport/status/1339680154616999936/video/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
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
                        }
                    },
                    "source_status_id": 1339680154616999936,
                    "source_status_id_str": "1339680154616999936",
                    "source_user_id": 1125687015956262917,
                    "source_user_id_str": "1125687015956262917"
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1339680030306291713,
                    "id_str": "1339680030306291713",
                    "indices": [
                        58,
                        81
                    ],
                    "media_url": "http://pbs.twimg.com/media/Epd_6uIXcAYCdhT.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/Epd_6uIXcAYCdhT.jpg",
                    "url": "https://t.co/Lrw3IDxJWe",
                    "display_url": "pic.twitter.com/Lrw3IDxJWe",
                    "expanded_url": "https://twitter.com/primevideosport/status/1339680154616999936/video/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1920,
                            "h": 1080,
                            "resize": "fit"
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
                        }
                    },
                    "source_status_id": 1339680154616999936,
                    "source_status_id_str": "1339680154616999936",
                    "source_user_id": 1125687015956262917,
                    "source_user_id_str": "1125687015956262917",
                    "additional_media_info": {
                        "title": "Watch the Premier League on Prime Video",
                        "embeddable": false,
                        "monetizable": false,
                        "source_user": {
                            "id": 1125687015956262917,
                            "id_str": "1125687015956262917",
                            "name": "Amazon Prime Video Sport",
                            "screen_name": "primevideosport",
                            "location": "United Kingdom",
                            "description": "Now delivering sport, too ⚽️🎾🏉",
                            "url": "https://t.co/ZGlhjZdP1S",
                            "entities": {
                                "url": {
                                    "urls": [
                                        {
                                            "url": "https://t.co/ZGlhjZdP1S",
                                            "expanded_url": "http://amazon.co.uk/primevideo",
                                            "display_url": "amazon.co.uk/primevideo",
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
                            "followers_count": 420599,
                            "friends_count": 267,
                            "listed_count": 485,
                            "created_at": "Tue May 07 09:01:13 +0000 2019",
                            "favourites_count": 2257,
                            "utc_offset": null,
                            "time_zone": null,
                            "geo_enabled": false,
                            "verified": true,
                            "statuses_count": 11676,
                            "lang": null,
                            "contributors_enabled": false,
                            "is_translator": false,
                            "is_translation_enabled": false,
                            "profile_background_color": "F5F8FA",
                            "profile_background_image_url": null,
                            "profile_background_image_url_https": null,
                            "profile_background_tile": false,
                            "profile_image_url": "http://pbs.twimg.com/profile_images/1134453800725618690/EONRf-Pu_normal.jpg",
                            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1134453800725618690/EONRf-Pu_normal.jpg",
                            "profile_banner_url": "https://pbs.twimg.com/profile_banners/1125687015956262917/1607506576",
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
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
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
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 239,
        "favorite_count": 1810,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:21:26 +0000 2020",
        "id": 1339682137516195849,
        "id_str": "1339682137516195849",
        "full_text": "RT @insider_reviews: 💰 New low: Hisense 43\" Class H5510G Series LED Full HD Smart Android TV is down to $180 at @bestbuy (originally $300)…",
        "truncated": false,
        "display_text_range": [
            0,
            139
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "insider_reviews",
                    "name": "Insider Reviews",
                    "id": 2873888723,
                    "id_str": "2873888723",
                    "indices": [
                        3,
                        19
                    ]
                },
                {
                    "screen_name": "BestBuy",
                    "name": "Best Buy",
                    "id": 17475575,
                    "id_str": "17475575",
                    "indices": [
                        112,
                        120
                    ]
                }
            ],
            "urls": []
        },
        "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 3224616765,
            "id_str": "3224616765",
            "name": "Tech Insider",
            "screen_name": "techinsider",
            "location": "New York, USA",
            "description": "What you want to know about tech. A division of @thisisinsider. Follow us on Facebook, Instagram, and YouTube. Visit our homepage for the day's top stories.",
            "url": "http://t.co/Fp1fi3LC2G",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "http://t.co/Fp1fi3LC2G",
                            "expanded_url": "http://www.techinsider.io",
                            "display_url": "techinsider.io",
                            "indices": [
                                0,
                                22
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 337131,
            "friends_count": 467,
            "listed_count": 4089,
            "created_at": "Thu Apr 30 15:15:08 +0000 2015",
            "favourites_count": 824,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": true,
            "statuses_count": 80955,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1197961125641494529/MVjp8tHL_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/3224616765/1549483972",
            "profile_link_color": "64C5F0",
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
        "retweeted_status": {
            "created_at": "Thu Dec 17 19:15:12 +0000 2020",
            "id": 1339650372059729920,
            "id_str": "1339650372059729920",
            "full_text": "💰 New low: Hisense 43\" Class H5510G Series LED Full HD Smart Android TV is down to $180 at @bestbuy (originally $300) 📺 https://t.co/NTHKr6CgGr",
            "truncated": false,
            "display_text_range": [
                0,
                143
            ],
            "entities": {
                "hashtags": [],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "BestBuy",
                        "name": "Best Buy",
                        "id": 17475575,
                        "id_str": "17475575",
                        "indices": [
                            91,
                            99
                        ]
                    }
                ],
                "urls": [
                    {
                        "url": "https://t.co/NTHKr6CgGr",
                        "expanded_url": "https://shop-links.co/1726808849597209504",
                        "display_url": "shop-links.co/17268088495972…",
                        "indices": [
                            120,
                            143
                        ]
                    }
                ]
            },
            "source": "<a href=\"https://about.twitter.com/products/tweetdeck\" rel=\"nofollow\">TweetDeck</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 2873888723,
                "id_str": "2873888723",
                "name": "Insider Reviews",
                "screen_name": "insider_reviews",
                "location": "New York, NY",
                "description": "Honest reviews of products and services. A division of @thisisinsider. When you buy through our links, we may earn money from our affiliate partners.",
                "url": "https://t.co/TkIDwDER4M",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/TkIDwDER4M",
                                "expanded_url": "https://www.businessinsider.com/reviews",
                                "display_url": "businessinsider.com/reviews",
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
                "followers_count": 9526,
                "friends_count": 34,
                "listed_count": 134,
                "created_at": "Wed Nov 12 16:01:37 +0000 2014",
                "favourites_count": 331,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": true,
                "statuses_count": 14322,
                "lang": null,
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/1234951420937490433/pGMblHja_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/1234951420937490433/pGMblHja_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/2873888723/1564001442",
                "profile_link_color": "157491",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
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
            "retweet_count": 1,
            "favorite_count": 1,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:18:59 +0000 2020",
        "id": 1339681522819993600,
        "id_str": "1339681522819993600",
        "full_text": "⚡️ @MarcusRashford finishes off a lightning counter to bag his second of the night ✌️\n\nWe. Are. Cooking. 👨‍🍳\n\n🔴 #MUFC\n#️⃣ #SHUMUN\n🏆 #PL https://t.co/B3HwcLsugQ",
        "truncated": false,
        "display_text_range": [
            0,
            135
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        112,
                        117
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        122,
                        129
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        132,
                        135
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "MarcusRashford",
                    "name": "Marcus Rashford MBE",
                    "id": 734492654755577858,
                    "id_str": "734492654755577858",
                    "indices": [
                        3,
                        18
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1339680935420280834,
                    "id_str": "1339680935420280834",
                    "indices": [
                        136,
                        159
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeAtnwWwAITNey.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeAtnwWwAITNey.jpg",
                    "url": "https://t.co/B3HwcLsugQ",
                    "display_url": "pic.twitter.com/B3HwcLsugQ",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339681522819993600/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
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
                    "id": 1339680935420280834,
                    "id_str": "1339680935420280834",
                    "indices": [
                        136,
                        159
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeAtnwWwAITNey.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeAtnwWwAITNey.jpg",
                    "url": "https://t.co/B3HwcLsugQ",
                    "display_url": "pic.twitter.com/B3HwcLsugQ",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339681522819993600/photo/1",
                    "type": "photo",
                    "sizes": {
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
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
                            "w": 1280,
                            "h": 720,
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
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
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
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 220,
        "favorite_count": 2535,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:15:57 +0000 2020",
        "id": 1339680759037235200,
        "id_str": "1339680759037235200",
        "full_text": "מת https://t.co/5Xf6mPU6Iw",
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
                    "id": 1339680751076450304,
                    "id_str": "1339680751076450304",
                    "indices": [
                        3,
                        26
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeAi5BXIAAA4om.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeAi5BXIAAA4om.jpg",
                    "url": "https://t.co/5Xf6mPU6Iw",
                    "display_url": "pic.twitter.com/5Xf6mPU6Iw",
                    "expanded_url": "https://twitter.com/ivgiz/status/1339680759037235200/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1242,
                            "h": 1639,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 909,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 515,
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
                    "id": 1339680751076450304,
                    "id_str": "1339680751076450304",
                    "indices": [
                        3,
                        26
                    ],
                    "media_url": "http://pbs.twimg.com/media/EpeAi5BXIAAA4om.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/EpeAi5BXIAAA4om.jpg",
                    "url": "https://t.co/5Xf6mPU6Iw",
                    "display_url": "pic.twitter.com/5Xf6mPU6Iw",
                    "expanded_url": "https://twitter.com/ivgiz/status/1339680759037235200/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1242,
                            "h": 1639,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 909,
                            "h": 1200,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 515,
                            "h": 680,
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
            "id": 327746094,
            "id_str": "327746094",
            "name": "יבגני זרובינסקי",
            "screen_name": "ivgiz",
            "location": "",
            "description": "במידה ונפגעתם מתוכן כלשהו, אנא כתבו לי ואחסום אתכם",
            "url": "https://t.co/Juxck2EpGZ",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/Juxck2EpGZ",
                            "expanded_url": "https://facebook.com/ivgiz",
                            "display_url": "facebook.com/ivgiz",
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
            "followers_count": 63104,
            "friends_count": 1023,
            "listed_count": 70,
            "created_at": "Sat Jul 02 02:37:11 +0000 2011",
            "favourites_count": 23423,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 15153,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1242036862837030913/L-4sfaep_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1242036862837030913/L-4sfaep_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/327746094/1498332129",
            "profile_link_color": "1B95E0",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "favorite_count": 110,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "iw"
    },
    {
        "created_at": "Thu Dec 17 21:10:01 +0000 2020",
        "id": 1339679263960805377,
        "id_str": "1339679263960805377",
        "full_text": "U N R E A L 🔥\n\n🔴 #MUFC\n#️⃣ #SHUMUN\n🏆 #PL https://t.co/uerCJXhTAP",
        "truncated": false,
        "display_text_range": [
            0,
            40
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "MUFC",
                    "indices": [
                        17,
                        22
                    ]
                },
                {
                    "text": "SHUMUN",
                    "indices": [
                        27,
                        34
                    ]
                },
                {
                    "text": "PL",
                    "indices": [
                        37,
                        40
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": [],
            "media": [
                {
                    "id": 1339678940080840714,
                    "id_str": "1339678940080840714",
                    "indices": [
                        41,
                        64
                    ],
                    "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1339678940080840714/pu/img/D5XlqZP-TlUyYMZ6.jpg",
                    "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1339678940080840714/pu/img/D5XlqZP-TlUyYMZ6.jpg",
                    "url": "https://t.co/uerCJXhTAP",
                    "display_url": "pic.twitter.com/uerCJXhTAP",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339679263960805377/video/1",
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
                        "medium": {
                            "w": 720,
                            "h": 720,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 720,
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
                    "id": 1339678940080840714,
                    "id_str": "1339678940080840714",
                    "indices": [
                        41,
                        64
                    ],
                    "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/1339678940080840714/pu/img/D5XlqZP-TlUyYMZ6.jpg",
                    "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/1339678940080840714/pu/img/D5XlqZP-TlUyYMZ6.jpg",
                    "url": "https://t.co/uerCJXhTAP",
                    "display_url": "pic.twitter.com/uerCJXhTAP",
                    "expanded_url": "https://twitter.com/ManUtd/status/1339679263960805377/video/1",
                    "type": "video",
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
                        "medium": {
                            "w": 720,
                            "h": 720,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 720,
                            "h": 720,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            1,
                            1
                        ],
                        "duration_millis": 4000,
                        "variants": [
                            {
                                "bitrate": 432000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1339678940080840714/pu/vid/320x320/Z8tKhJ_21Ib7chHW.mp4?tag=10"
                            },
                            {
                                "bitrate": 832000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1339678940080840714/pu/vid/480x480/7iKarN0Uzdd3myKw.mp4?tag=10"
                            },
                            {
                                "content_type": "application/x-mpegURL",
                                "url": "https://video.twimg.com/ext_tw_video/1339678940080840714/pu/pl/kwgRknpx-Dfif-lN.m3u8?tag=10"
                            },
                            {
                                "bitrate": 1280000,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/ext_tw_video/1339678940080840714/pu/vid/720x720/JOYANyaDkyIsBclG.mp4?tag=10"
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
            "id": 558797310,
            "id_str": "558797310",
            "name": "Manchester United",
            "screen_name": "ManUtd",
            "location": "Manchester, England",
            "description": "Official #MUFC account 🔴⚪⚫ Find out the latest news from around the club ⤵",
            "url": "https://t.co/y0CpzwkC1c",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/y0CpzwkC1c",
                            "expanded_url": "http://manutd.co/ManUtdApp",
                            "display_url": "manutd.co/ManUtdApp",
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
            "followers_count": 23960274,
            "friends_count": 148,
            "listed_count": 21661,
            "created_at": "Fri Apr 20 15:17:43 +0000 2012",
            "favourites_count": 3118,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 63179,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338414846879166467/9arznr7Y_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/558797310/1608134178",
            "profile_link_color": "B30000",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "EFEFEF",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "regular"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 637,
        "favorite_count": 3882,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Thu Dec 17 21:09:27 +0000 2020",
        "id": 1339679123057348609,
        "id_str": "1339679123057348609",
        "full_text": "כנראה חשוד במשהו",
        "truncated": false,
        "display_text_range": [
            0,
            16
        ],
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": []
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": 1339678331743166464,
        "in_reply_to_status_id_str": "1339678331743166464",
        "in_reply_to_user_id": 327746094,
        "in_reply_to_user_id_str": "327746094",
        "in_reply_to_screen_name": "ivgiz",
        "user": {
            "id": 327746094,
            "id_str": "327746094",
            "name": "יבגני זרובינסקי",
            "screen_name": "ivgiz",
            "location": "",
            "description": "במידה ונפגעתם מתוכן כלשהו, אנא כתבו לי ואחסום אתכם",
            "url": "https://t.co/Juxck2EpGZ",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/Juxck2EpGZ",
                            "expanded_url": "https://facebook.com/ivgiz",
                            "display_url": "facebook.com/ivgiz",
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
            "followers_count": 63104,
            "friends_count": 1023,
            "listed_count": 70,
            "created_at": "Sat Jul 02 02:37:11 +0000 2011",
            "favourites_count": 23423,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 15153,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "000000",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme18/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme18/bg.gif",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1242036862837030913/L-4sfaep_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1242036862837030913/L-4sfaep_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/327746094/1498332129",
            "profile_link_color": "1B95E0",
            "profile_sidebar_border_color": "000000",
            "profile_sidebar_fill_color": "000000",
            "profile_text_color": "000000",
            "profile_use_background_image": false,
            "has_extended_profile": true,
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
        "favorite_count": 27,
        "favorited": false,
        "retweeted": false,
        "lang": "iw"
    },
    {
        "created_at": "Thu Dec 17 21:09:25 +0000 2020",
        "id": 1339679116031913992,
        "id_str": "1339679116031913992",
        "full_text": "GOAL Sheff Utd 1-3 Man Utd (51 mins)\n\nA sweeping Man Utd counter attack ends with Marcus Rashford bagging his second of the match\n\n#SHUMUN",
        "truncated": false,
        "display_text_range": [
            0,
            138
        ],
        "entities": {
            "hashtags": [
                {
                    "text": "SHUMUN",
                    "indices": [
                        131,
                        138
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [],
            "urls": []
        },
        "source": "<a href=\"https://www.spredfast.com/\" rel=\"nofollow\">Khoros</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 343627165,
            "id_str": "343627165",
            "name": "Premier League",
            "screen_name": "premierleague",
            "location": "",
            "description": "The official Twitter account of the Premier League 📱 @OfficialFPL | 🇮🇳 @PLforIndia | 🇺🇸 @PLinUSA Join us on YouTube 👉 https://t.co/mE5i2L4M3L",
            "url": "https://t.co/IMNRVHC2Kt",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/IMNRVHC2Kt",
                            "expanded_url": "http://premierleague.com",
                            "display_url": "premierleague.com",
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
                            "url": "https://t.co/mE5i2L4M3L",
                            "expanded_url": "http://youtube.com/premierleague",
                            "display_url": "youtube.com/premierleague",
                            "indices": [
                                118,
                                141
                            ]
                        }
                    ]
                }
            },
            "protected": false,
            "followers_count": 24201046,
            "friends_count": 82,
            "listed_count": 26639,
            "created_at": "Wed Jul 27 21:09:32 +0000 2011",
            "favourites_count": 1853,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 123736,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": true,
            "profile_background_color": "050528",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1338425972253728769/Km-hIKAs_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1338425972253728769/Km-hIKAs_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/343627165/1607957133",
            "profile_link_color": "93A644",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "171838",
            "profile_text_color": "FFFFFF",
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
        "retweet_count": 185,
        "favorite_count": 2363,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
    }
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