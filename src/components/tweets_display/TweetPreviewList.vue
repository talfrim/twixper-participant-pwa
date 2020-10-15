<template>
    <div id="wrapper">
        <MenuHeader />
        <div class="posts">
            <TweetPreview :tweetPreview="t" v-for="(t,i) in tp" v-bind:key="i"></TweetPreview>
            <br><br><br><br><br><br> <!-- For the menu bar at the bottom -->
        </div>
    </div>   
</template>

<script>
import TweetPreview from "./TweetPreview.vue";
import MenuHeader from "../MenuHeader.vue";
export default {
    components: {
        TweetPreview,
        MenuHeader
    },
    data() {
        return {
                tp: [{
                    userFullName: "Avigdor Liberman", 
                    varified_icon: true,
                    imageUrl: "https://pbs.twimg.com/profile_images/1273191655890464777/SNhqTJGz_400x400.jpg",
                    userName: "liberman",   
                    time: "35m",
                    content: "Hello, my name is Liberman.",
                },
                {
                    userFullName: "Ben Gurion University", 
                    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Ben-Gurion_University_of_the_Negev.svg/1200px-Ben-Gurion_University_of_the_Negev.svg.png",
                    userName: "bgu",   
                    time: "45m",
                    content: "We are closed due to COVID.",
                },
                {
                    userFullName: "Avigdor LongLongName", 
                    varified_icon: true,
                    imageUrl: "https://pbs.twimg.com/profile_images/1273191655890464777/SNhqTJGz_400x400.jpg",
                    userName: "liberman",   
                    time: "55m",
                    content: "Vote for Bibi.",
                    postImg: "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/455223"
                },
                {
                    userFullName: "Ben Gurion University", 
                    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Ben-Gurion_University_of_the_Negev.svg/1200px-Ben-Gurion_University_of_the_Negev.svg.png",
                    userName: "bgu",   
                    time: "1h",
                    content: "We are still closed due to COVID.",
                },
                {
                    userFullName: "Yair Netanyahu ", 
                    imageUrl: "https://pbs.twimg.com/profile_images/1288147374204956672/BWhwDO4i_400x400.jpg",
                    userName: "yairnet",   
                    time: "1h",
                    content: "Vote for Bibi...",
                    postImg: "https://hsro-inf-wt.github.io/assets/vuejs.gif"
                },
                {
                    userFullName: "Ben Gurion University", 
                    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Ben-Gurion_University_of_the_Negev.svg/1200px-Ben-Gurion_University_of_the_Negev.svg.png",
                    userName: "bgu",   
                    time: "2h",
                    content: "Still closed due to COVID... Lorem ipsum dolor sit amet, ad vel eirmod erroribus elaboraret. At doming efficiantur eum, ex nulla prodesset vel. Nec lucilius explicari incorrupte eu, ei denique referrentur est. Usu cu consulatu elaboraret dissentias, ex commodo iuvaret feugiat sed, quo te novum aliquid appetere.",
                },
                {
                    userFullName: "Yair Netanyahu ", 
                    imageUrl: "https://pbs.twimg.com/profile_images/1288147374204956672/BWhwDO4i_400x400.jpg",
                    userName: "yairnet",   
                    time: "2h",
                    content: "I love Twixper.",
                },
                {
                    userFullName: "Ben Gurion University", 
                    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Ben-Gurion_University_of_the_Negev.svg/1200px-Ben-Gurion_University_of_the_Negev.svg.png",
                    userName: "bgu",   
                    time: "3h",
                    content: "You guessed it.  Lorem ipsum dolor sit amet consectetur adipisic autem facilis at mollitia sunt in pariatur voluptate, blanditiis magni aut praesentium. Iure, quod vitae fugiat perferendis hic facere eror.",
                }
                
                ]
        }
    }
}   
</script>

<style scoped>
    .posts {
		grid-column: 2 / 3;
		grid-row: 2 / -1;
		background-color: #fff;
	}

    .posts {
			grid-column: 1 / -1;
		}
</style>