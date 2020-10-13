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
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      {charset: "UTF-8"},
    ],
    link: [
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css', integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay', crossorigin: 'anonymous'  },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap'},
    ]
  },
  
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

  .feeds-content {
		display: grid;
		grid-template-columns: minmax(5rem, 1fr) 60rem 40rem minmax(5rem, 1fr);
		grid-template-rows: repeat(2, min-content);
		padding-top: 6.5rem;
	}

