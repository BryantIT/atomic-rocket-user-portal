import React from 'react'

const Header = () => {
    return (
        <header id="site-header">
		<form action="#" id="search-header" name="search-header">
			<input type="search" name="search" placeholder="Type and Hit Enter.." />
			<button>Search</button>
		</form>
		<div class="container nav-bar-container">
			<div class="row nav-row">
				<div class="logo-container">
					<a href="index.html">
						<span class="logo ">Music<span class="colored">Base</span></span>
						<br />
						<span class="tagline colored-orange">Electro Music Base</span>
					</a>
				</div>
				<div id="site-navigation" class="tech-nav">
					<ul>
						<li class="active has-child">
							<a href="#">Home</a>
							<ul class="submenu">
								<li><a href="index.html">Home Band</a></li>
								<li><a href="home-artist.html">Home Artist</a></li>
								<li><a href="home-podcast.html">Home Podcast</a></li>
							</ul>
						</li>
						<li class="has-child">
							<a href="#">Albums</a>
							<ul class="submenu">
								<li><a href="albums.html">Albums Page</a></li>
								<li><a href="album-single.html">Album Single</a></li>
							</ul>
						</li>
						<li class="has-child">
							<a href="#">Events</a>
							<ul class="submenu">
								<li><a href="events-masonry.html">Events Masonry</a></li>
								<li><a href="events-list.html">Events List</a></li>
								<li><a href="event-single.html">Event Single</a></li>
							</ul>
						</li>
						<li class="has-child">
							<a href="#">Band</a>
							<ul class="submenu">
								<li><a href="members.html">Members Page</a></li>
								<li><a href="biography.html">Biography Page</a></li>
								<li><a href="artist-single.html">Single Artist</a></li>
							</ul>
						</li>
						<li class="has-child">
							<a href="#">Pages</a>
							<ul class="submenu">
								<li class="has-child">
									<a href="#">Blog</a>
									<ul class="submenu">
										<li><a href="blog-list.html">Blog List</a></li>
										<li><a href="blog-masonry.html">Blog Masonry</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
									</ul>
								</li>
								<li class="has-child">
									<a href="#">Shop</a>
									<ul class="submenu">
										<li><a href="products.html">Products</a></li>
										<li><a href="product-single.html">Product Single</a></li>
										<li><a href="cart.html">Cart</a></li>
									</ul>
								</li>
								<li><a href="video-gallery.html">Video Gallery</a></li>
								<li><a href="coming-soon.html">Coming Soon</a></li>
								<li><a href="404.html">404 Page</a></li>
							</ul>
						</li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</div>
				{/* <!-- Extra Nav --> */}
				<div class="extra-nav">
					<button id="mini-cart-toggle"><i class="fa fa-shopping-cart"></i> <span class="mini-cart-count">2</span></button>
					<button id="search-toggle"><i class="fa fa-search"></i></button>
					<button id="menu-toggle"><i class="fa fa-bars"></i></button>
					{/* <!-- Mini Cart Widget --> */}
					<div id="mini-cart-widget">
						<h5 class="title">2 Products</h5>
						<div class="product clearfix">
							<img src="assets/img/shop/mini-1.jpg" alt="" />
							<h6>This is Product Title</h6>
							<span>1 x $120</span>
							<i class="fa fa-close"></i>
						</div>
						<div class="product clearfix">
							<img src="assets/img/shop/mini-2.jpg" alt="" />
							<h6>This is Product Title</h6>
							<span>2 x $60</span>
							<i class="fa fa-close"></i>
						</div>
						<div class="mini-cart-footer">
							<h4 class="subtotal">Subtotal: <span>$240</span></h4>
							<a href="#" class="btn btn-sm">Checkout</a >
							<a href="#" class="link">View Cart</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
}

export default Header