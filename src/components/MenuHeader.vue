<template>
<div id="wrapper" ref="wrapper">
   <nav class="feeds-nav dark-mode-1">
       <div class="user" @click="openSidebar()">
          <div class="user-img-wrapper">
            <img src="../assets/images/facebook-user-icon-17.jpg" />
          </div>
          <a href="#" class="user-link light-text">Jane Smith</a>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="icons">
          <!--<a href="#" class="active" @click="homeTabClicked" ><i class="fas fa-home"></i></a>
          <a href="#" @click="searchTabClicked"><i class="fas fa-search fa-sm"></i></a>
          <a href="#"><i class="far fa-bell"></i></a>
          <a href="#"><i class="far fa-envelope"></i></a>-->
          <router-link :to="{ name: 'feed'}">
            <i class="fas fa-home"></i>
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
          <div class="sidebar-user">
            <div class="sidebar-user-img">
              <img src="../assets/images/facebook-user-icon-17.jpg" />
            </div>
            <span>+</span>
          </div>
          <div class="sidebar-user-info light-text">
            <h4>Jane Smith</h4>
            <p>@janesmith</p>
          </div>
          <div class="following light-text">
            <p class="following-paragraph"><span>711</span> Following</p>
            <p class="following-paragraph"><span>7.5K</span> Followers</p>
          </div>
          <div class="sidebar-list-1 border">
            <ul>
              <li>
                <a href="#"> <i class="fas fa-user"></i> Profile </a>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
          <div class="sidebar-list-2">
            <ul>
              <li><a href="#">Settings and Privacy</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
          <div class="sidebar-footer">
            <i class="fas fa-times" @click="closeSidebar()"></i>
          </div>  
        </div>
        
      </div>
      <!-- end of sidebar -->
</div>      
</template>

<script>
export default {
    props:{
        parentsEl:{
          required: true
        },
    },
    data(){
        return{
            touch:{
                startX: 0,
                endX: 0,
                startY: 0,
                endY: 0,
            },
            isSidebarOpen: false
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