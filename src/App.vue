<template>
  <div id="app">
   <!-- feeds page -->
  <section class="feeds-page">
    <!-- feeds content -->
    <transition>
      <router-view/>
    </transition>
    
  </section>
  <!-- end of feeds page -->
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

	html {
		font-size: 62.5%;
	}

	body {
		background-color: #f0f8fd;
	}
  
  .feeds-page {
		width: 100%;
		height: 100vh;
	}

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

