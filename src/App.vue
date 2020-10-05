<template>
  <div id="app">
   <!-- feeds page -->
   <section class="feeds-page">
    <!-- feeds content -->
    <div class="feeds-content dark-mode-2">
      <div class="posts dark-mode-1">
        
        <div class="post border">
          <div class="user-avatar">
            <img src="../assets/Nir.png" />
          </div>
          <div class="post-content">
            <div class="post-user-info light-text">
              <h4>Nir Dzoraev</h4>
              <i class="fas fa-check-circle"></i>
              <span>@nirdz 35m</span>
            </div>
            <p class="post-text light-text">
              Twixper is Amazinggg!!
            </p>
            <div class="post-img">
              <img src="../assets/snake.gif" />
            </div>
            <div class="post-icons">
              <i class="far fa-comment"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="fas fa-share-alt"></i>
            </div>
          </div>
		</div>
		<div class="post border">
          <div class="user-avatar">
            <img src="../assets/Tal.png" />
          </div>
          <div class="post-content">
            <div class="post-user-info light-text">
              <h4>Tal Frimerman</h4>
              <i class="fas fa-check-circle"></i>
              <span>@talfrim 35m</span>
            </div>
            <p class="post-text light-text">
              Is this the real life? Is this just a test?
            </p>
            <div class="post-icons">
              <i class="far fa-comment"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="fas fa-share-alt"></i>
            </div>
          </div>
        </div>
        <div class="post border">
          <div class="user-avatar">
            <img src="../assets/facebook-user-icon-17.jpg" />
          </div>
          <div class="post-content">
            <div class="post-user-info light-text">
              <h4> Dr. Nir Grinberg</h4>
              <i class="fas fa-check-circle"></i>
              <span>@nirgrin 56m</span>
            </div>
            <p class="post-text light-text">
              Lets fight fake news.
            </p>
            <div class="post-icons">
              <i class="far fa-comment"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="fas fa-share-alt"></i>
            </div>
          </div>
		</div>		
      </div>
    </div>
    <!-- end of feeds content -->

    <button type="button" class="post-btn">
      +<i class="fas fa-feather-alt"></i> 
    </button>
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

	.feeds-header {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		background-color: #fff;
		margin-top: 1.5rem;
	}

	.header-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.1rem solid #eee;
		padding: 1.5rem;
	}

	.header-top h4 {
		font-size: 2.2rem;
	}

	.header-top i {
		font-size: 2rem;
		color: #1aa1f5;
	}

	.header-post {
		display: flex;
		align-items: center;
		padding: 1rem;
		border-bottom: 0.1rem solid #eee;
	}

	.header-img-wrapper {
		width: 4rem;
		height: 4rem;
		margin-right: 1.5rem;
	}

	.header-img-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	.header-post input {
		width: 35rem;
		height: 3rem;
		border: 0.1rem solid #d6e1e9;
		border-radius: 3rem;
		background-color: #d6e1e9;
		padding: 0.4rem 1.5rem;
	}

	.header-post i {
		font-size: 2.5rem;
		color: #1aa1f5;
		margin: 1rem;
	}

	.posts {
		grid-column: 2 / 3;
		grid-row: 2 / -1;
		background-color: #fff;
	}

	.post {
		display: flex;
		padding: 1.5rem;
		border-bottom: 0.1rem solid #eee;
	}

	.user-avatar {
		width: 6rem;
		height: 6rem;
		flex-shrink: 0;
		margin-right: 1.5rem;
	}

	.user-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	.post-user-info {
		display: flex;
		align-items: center;
		margin: 1rem 0;
	}

	.post-user-info h4 {
		font-size: 1.6rem;
		margin-right: 0.5rem;
	}

	.post-user-info i {
		font-size: 1.6rem;
		color: #1aa1f5;
		margin-right: 0.5rem;
	}

	.post-user-info span {
		font-size: 1.6rem;
	}

	.post-text {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	.post-img {
		width: 48rem;
		height: 30rem;
	}

	.post-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}

	.post-icons {
		margin-top: 1rem;
	}

	.post-icons i {
		font-size: 1.6rem;
		color: #868383;
		margin-right: 4rem;
	}

	.follow {
		position: fixed;
		top: 8rem;
		left: 57%;
		background-color: #fff;
		width: 35rem;
	}

	.follow-heading {
		padding: 1rem;
		font-size: 1.8rem;
		border-bottom: 0.1rem solid #eee;
	}

	.follow-user {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		border-bottom: 0.1rem solid #eee;
	}

	.follow-user-img {
		width: 6rem;
		height: 6rem;
		margin-right: 2rem;
	}

	.follow-user-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	.follow-user-info h4,
	.follow-user-info p {
		font-size: 1.6rem;
		margin-bottom: 0.5rem;
	}

	.follow-btn {
		margin-left: auto;
		width: 9rem;
		background-color: #fff;
		color: #1aa1f5;
		padding: 0.7rem 0.5rem;
		border: 0.1rem solid #1aa1f5;
		border-radius: 2rem;
		font-size: 1.6rem;
		cursor: pointer;
	}

	.follow-link {
		margin: 2rem 1rem;
	}

	.follow-link a {
		text-decoration: none;
		color: #1aa1f5;
		font-size: 1.5rem;
	}

	.follow-footer {
		background-color: #f0f8fd;
	}

	.follow-footer ul {
		list-style: none;
		display: flex;
		padding: 2rem 0;
	}

	.follow-footer a {
		text-decoration: none;
		font-size: 1.5rem;
		color: #868383;
		margin: 0 0.7rem;
	}
	/* end of feeds content */

  .post-btn {
		position: fixed;
		bottom: 2rem;
		left: 68%;
		width: 12rem;
		padding: 1.5rem 1rem;
		background-color: #1aa1f5;
		color: #fff;
		font-size: 2rem;
		border: 0.1rem solid #1aa1f5;
		border-radius: 3rem;
		cursor: pointer;
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s;
	}

	.post-btn:hover {
		background-color: #117abb;
	}

  @media (max-width: 1600px) {
		/* news feed page */
		.follow {
			left: 58.5%;
		}
	}

  @media (max-width: 1300px) {
    /* news feed page */
		.follow {
			left: 60%;
		}
	}

  @media (max-width: 1100px) {
    /* news feed page */
		.feeds-content {
			grid-template-columns: minmax(5rem, 1fr) 2fr minmax(5rem, 1fr);
		}

		.search-bar {
			display: none;
		}

		.follow {
			display: none;
		}

		.post-btn {
			left: 80%;
		}
	}

  @media (max-width: 700px) {
    /* news feed page */
		.feeds-content {
			grid-template-columns: 1fr;
		}

		.feeds-header {
			grid-column: 1 / -1;
		}

		.posts {
			grid-column: 1 / -1;
		}

		.modal {
			width: 90%;
		}

		.modal-img {
			flex-shrink: 0;
		}

		.post-btn {
			left: 75%;
			font-size: 1.8rem;
			width: 11rem;
			padding: 1.2rem 0.8rem;
		}

		.sidebar-list-1 li,
		.sidebar-list-2 li {
			margin-bottom: 1.5rem;
		}
	}

  @media (max-width: 600px) {
    /* news feed page */
		.user a,
		.user i {
			display: none;
		}

		.header-post input {
			width: 27rem;
		}

		.post-text {
			width: 90%;
		}

		.post-img {
			width: 90%;
			height: 25rem;
		}

		.post-btn {
			left: 70%;
		}
	}


</style>
