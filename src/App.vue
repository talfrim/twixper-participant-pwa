<template>
  <div id="app">
   <!-- feeds page
  <section class="feeds-page"> -->
    <!-- feeds content -->
    <transition name="slide-left">
      <router-view/>
    </transition>
    
  <!--</section>
   end of feeds page -->
  </div>
</template>

<script>

export default {
  name: 'App',
  
  
}
</script>

<style>
  * {
		margin: 0;
		padding: 0;
		font-family: 'Josefin Sans', sans-serif;
		outline: none;
  }
  /*
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to    { //.fade-leave-active below version 2.1.8
    opacity: 0;
  }*/

 /* Transition Effect */
  slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }

  /* End of transition effect */

	html {
		font-size: 62.5%;
	}

	body {
		background-color: #f0f8fd;
	}
  
  /*
  .feeds-page {
		width: 100%;
		height: 100vh;
	}*/

@media (max-width: 363px){
    html {
		  font-size: 57.5%;
	  }
}

@media (max-width: 333px){
    html {
		  font-size: 52.5%;
	  }
}


  

  /*.feeds-content {
		display: grid;
		grid-template-columns: minmax(5rem, 1fr) 60rem 40rem minmax(5rem, 1fr);
		grid-template-rows: repeat(2, min-content);
		padding-top: 6.5rem;
	}*/
</style>

