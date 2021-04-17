<template>
<div id="wrapper" ref="wrapper">
   <nav class="feeds-nav dark-mode-1">
       <div class="user" @click="openSidebar()">
          <div class="user-img-wrapper">
            <img :src="pTwitterEnt.profile_image_url_https" />
          </div>
          <a href="#" class="user-link light-text">{{pTwitterEnt.name}}</a>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="icons">
          <!--<a href="#" class="active" @click="homeTabClicked" ><i class="fas fa-home"></i></a>
          <a href="#" @click="searchTabClicked"><i class="fas fa-search fa-sm"></i></a>
          <a href="#"><i class="far fa-bell"></i></a>
          <a href="#"><i class="far fa-envelope"></i></a>-->
          <router-link 
            :to="{ name: 'feed'}"
            @click.native="clickedHome"
          >
            <i class="fas fa-home" ref="homeI"></i>
          </router-link>
          <router-link :to="{ name: 'searchBox'}">
            <i class="fas fa-search fa-sm"></i>
          </router-link>
           <router-link :to="{ name: 'notifications'}">
            <i class="far fa-bell"></i>
          </router-link>
           <router-link :to="{ name: 'messaging'}">
            <i class="far fa-envelope"></i>
          </router-link>
        </div>
      </nav>
       <!-- sidebar -->
      <div class="sidebar-wrapper" ref="sidebarWrapper">
        <div class="sidebar dark-mode-1" ref="sidebar">
          <div class="sidebar-header border">
            <h2 class="light-text">Account info</h2>
            <i class="fas fa-times" @click="closeSidebar()"></i>
          </div>
          <div 
            ref="userNameImgContainer"
            @click="clickedUserNameImgContainer"
            class="sidebar-user-name-img-container" 
          >
            <div class="sidebar-user">
              <div class="sidebar-user-img">
                <img :src="pTwitterEnt.profile_image_url_https" />
              </div>
              <!-- <span>+</span> -->
            </div>
            <div class="sidebar-user-info light-text">
              <h4>{{pTwitterEnt.name}}</h4>
              <p>@{{pTwitterEnt.screen_name}}</p>
            </div>
          </div>
          <div class="following light-text">
            <router-link :to="{ name: 'friendsPage', params: {userName: pTwitterEnt.screen_name} }"
              tag="p" class="following-paragraph"> 
              <span>{{parseNumberBeforeDisplay(pTwitterEnt.friends_count)}}</span> 
              <span class="following-title">Following</span>
            </router-link>
            
            <router-link :to="{ name: 'followersPage', params: {userName: pTwitterEnt.screen_name} }"
              tag="p" class="following-paragraph"> 
              <span>{{parseNumberBeforeDisplay(pTwitterEnt.followers_count)}}</span> 
              <span class="following-title">Followers</span>
            </router-link>
          </div>
          <div class="sidebar-list-1 border">
            <ul>
              <li>
                <a @click="clickedProfile()"> <i class="fas fa-user"></i> Profile </a>
              </li>
              <li>
                <hr>
              </li>
              <li class="disabled-li">
                <a >Settings and Privacy</a>
              </li>
              <li class="disabled-li">
                <a >Help Center</a>
              </li>
              <li>
                <a @click="clickedLogout()"><i class="fas fa-door-open"></i>Log Out</a>
              </li>
              <!-- <li>
                <a href="#"> <i class="far fa-list-alt"></i> Lists </a>
              </li>
              <li>
                <a href="#"> <i class="far fa-bookmark"></i> Bookmarks </a>
              </li>
              <li>
                <a href="#"> <i class="fab fa-adversal"></i> Ads </a>
              </li>
              <li>
                <a href="#"> <i class="fas fa-chart-line"></i> Analytics </a>
              </li> -->
            </ul>
          </div>
          <!-- <div class="sidebar-list-2">
            <ul>
              <li><a href="#">Settings and Privacy</a></li>
              <li><a href="#">Help Center</a></li>
              <li><i class="fas fa-chart-line"></i><a href="#">Log Out</a></li>
            </ul>
          </div> -->
          <!-- <div class="sidebar-footer">
            <i class="fas fa-times" @click="closeSidebar()"></i>
          </div>   -->
        </div>
        
      </div>
      <!-- end of sidebar -->
</div>      
</template>

<script>
import {parseTwitterNumbersToStringFunc, emptyLs} from "../assets/globalFunctions";

export default {
    props:{
        parentsEl:{
          required: true
        },
    },
    data(){
        return{
          pTwitterEnt:{
            screen_name: "janesmith",
            name: "Jane Smith",
            friends_count: -1, 
            followers_count: -1,
            profile_image_url_https: "../assets/images/facebook-user-icon-17.jpg"
          },
          touch:{
            startX: 0,
            endX: 0,
            startY: 0,
            endY: 0,
          },
          isSidebarOpen: false
        }
    },
    created(){
      // Get the participant's twiiter info from local storage
      if(localStorage.getItem('user_twitter_entity') != null){
        this.pTwitterEnt = JSON.parse(localStorage['user_twitter_entity'])
        // In order to get high quality img:  replace("_normal", "").
        const profileImgUrl = this.pTwitterEnt.profile_image_url_https
        this.pTwitterEnt.profile_image_url_https = profileImgUrl.replace("_normal", "")
      }
      else{
        // Should not get here
        console.log("Why 'user_twitter_entity' is not in LS??")
      }
    },
    mounted(){
        //Add listeners to touch-on-screen events
        //console.log(this.fatherComponent);
        //console.log(this.$root.$el);
        this.parentsEl.addEventListener("touchstart", event => this.touchStart(event));
        this.parentsEl.addEventListener("touchmove", event => this.touchMove(event));
        this.parentsEl.addEventListener("touchend", () => this.touchEnd());
    },
    methods:{
      clickedProfile(){
        // Redirect to the participant's user page
			  this.$router.push({ path: '/userPagePublic/'+ this.pTwitterEnt.screen_name})
      },
      clickedUserNameImgContainer(){
        this.setBackgroundGrey(this.$refs.userNameImgContainer)
        setTimeout( () =>
          this.$router.push({ path: '/userPagePublic/'+this.pTwitterEnt.screen_name})
        , 300)
      },
      setBackgroundGrey(domElement){
        domElement.style.backgroundColor = "rgba(0,0,0,0.1)"
      },
      clickedLogout(){
        // Ask if the user is sure to logout
        const answer = window.confirm('Are you sure you want to log out?')
        if (answer) {
          emptyLs()
          this.$router.push("welcomePage")
        } else {
          return
        }
      },
      clickedHome(){
        this.$emit("clickedHome")
      },
      activeHomeStyle(){
        this.$refs.homeI.classList.add("active")
      },
      inctiveHomeStyle(){
        this.$refs.homeI.classList.remove("active")
      },
      parseNumberBeforeDisplay(number){
        return parseTwitterNumbersToStringFunc(number);
      },
      touchStart(event){
          this.touch.startX = event.touches[0].clientX; // [0] is the first finger touches
          this.touch.endX = 0;
          this.touch.startY = event.touches[0].clientY; 
          this.touch.endY = 0;
      },
      touchMove(event){
          this.touch.endX = event.touches[0].clientX;
          this.touch.endY = event.touches[0].clientY;
      },
      touchEnd(){
          //console.log(this.touch);
          //console.log(Math.abs(this.touch.endX - this.touch.startX));
          //console.log(Math.abs(this.touch.endY - this.touch.startY));
          // console.log();

          //Check if the user tries to open the sidebar using finger drag gestore
          if(
              Math.abs(this.touch.endY - this.touch.startY) > 30 || //Scrolls up
              Math.abs(this.touch.endX - this.touch.startX) < 45){ //Not scrolling enough
                  //this.resetPositions();
                  return;
          }
          if(this.touch.endX > this.touch.startX){
              this.openSidebar();
          }
          else{
              this.closeSidebar();
          }
          //this.resetPositions();
          
      },
      resetPositions(){
          this.touch.startX = 0;
          this.touch.endX = 0;
          this.touch.startY = 0;
          this.touch.endY = 0;
      },
      openSidebar(){
          if(!this.isSidebarOpen){
              console.log("openSidebar called");
              this.$refs.sidebar.classList.add('sidebar-display');
              this.$refs.sidebarWrapper.classList.add('sidebar-wrapper-display');
              // Prevent the page from scrolling
              document.body.style.overflow = 'hidden';
              this.isSidebarOpen = true;
          }
      },
      closeSidebar(){
          if(this.isSidebarOpen){
              console.log("closeSidebar called");
              this.$refs.sidebar.classList.remove('sidebar-display');
              this.$refs.sidebarWrapper.classList.remove('sidebar-wrapper-display');
              // Re-enable the scrolling
              document.body.style.overflow = 'auto'
              this.isSidebarOpen = false;
          } 
      },
        /*searchTabClicked(){
          this.$router.push("/search")
        },
        homeTabClicked(){
          this.$router.push("/feed")
        }*/

    }    
}
</script>

<style scoped src="../assets/css/MenuHeaderCSS.css">

</style>