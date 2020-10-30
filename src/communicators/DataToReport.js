export default{
    //Details about the experiment
    "title": "",
    "start_date": "",
    "end_date" : "", // Null if not ended yet
    "researcher_details": [
        {"first_name": "", "last_name": "", "username": ""},
    ],
    "collabed_res": [
        {"first_name": "", "last_name": "", "username": ""},
    ],
    "num_of_participants": "",
    "status": "",
    "exp_groups": [ // array of objects
        {
            "group_id": "", // Group id within the experiment. Groups in different experiments may have the same id.
            "group_name": "",
            "group_num_of_participants": "",
            "group_size_in_percentage": "", //גודל הקבוצה באחוזים כפי שהחוקר הגדיר בצור ניסוי
            "group_participants": [ // array of objects
                {"participants_twiitter_username": "", "last_action_time": ""}, // possibly more fields
                {"participants_twiitter_username": "", "last_action_time": ""}
            ],
            "group_manipulations":[ // array of objects
                {},
                {}
            ]
        }
    ],
    // The main part
    "actions_log": [ // Array of objects
        // Each object represents an action by any of the participants

        // The fields which are included in all the action objects:
        {
            "action_date": "",
            "participant_twiitter_username" : "",
            "participant_group_id": "",
            "action_type" : ""
        },
        // The other fields varies for each action type.
        // The possible action types:
        [
            "first_login",
            "login",
            "logout",
            "saw tweet", // Passively saw a tweet, in feed or in other tab (for example in public user's timleine) 
            "like", // Can be like on a tweet or comment
            "retweet",
            "comment",
            "tweeted", // Posted new tweet
            "saw tweet full", // Went to the tweet's full page
            "saw user profile", // Went to a public user profile page
            "follow",
            "unfollow",
            "followed by", // Followed by other user
            "saw tweet media", // Clicked on a media that was attached to a tweet. For example - image, video, link
            "search"
            // Question, can we represent a tweet by Id, or do we have to include the full Json of the tweet (which is HUGE)?  
        ]

    ]

}