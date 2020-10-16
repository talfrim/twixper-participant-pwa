<!-- menu from youtube vue proj/youtube react proj.
Header middle will change with vuex probably according to the current tab.-->
<template>
<div id="wrapper">
   <nav class="feeds-nav dark-mode-1">
       <div class="user" @click="openSidebar()">
          <div class="user-img-wrapper">
            <img src="../assets/facebook-user-icon-17.jpg" />
          </div>
          <a href="#" class="user-link light-text">Jane Smith</a>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="icons">
          <a href="#" class="active"><i class="fas fa-home"></i></a>
          <a href="#"><i class="fas fa-search fa-sm"></i></a>
          <a href="#"><i class="far fa-bell"></i></a>
          <a href="#"><i class="far fa-envelope"></i></a>
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
              <img src="../assets/facebook-user-icon-17.jpg" />
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
        </div>
        <div class="sidebar-footer">
            <i class="fas fa-times" @click="closeSidebar()"></i>
          </div> 
      </div>
      <!-- end of sidebar -->
</div>      
</template>

<script>
export default {
    methods:{
        openSidebar(){
            this.$refs.sidebar.classList.add('sidebar-display');
            this.$refs.sidebarWrapper.classList.add('sidebar-wrapper-display');
        },
        closeSidebar(){
            this.$refs.sidebar.classList.remove('sidebar-display');
	        this.$refs.sidebarWrapper.classList.remove('sidebar-wrapper-display');
        }
    }    
}
</script>

<style scoped src="../assets/css/MenuHeaderCSS.css">

</style>