import React from 'react'
//stylesheet
import './style.css'

const Header = () => {
    return (
        <header id="site-header">
		<form action="#" id="search-header" name="search-header">
			<input type="search" name="search" placeholder="Type and Hit Enter.." />
			<button>Search</button>
		</form>
		<div className='container nav-bar-container'>
			<div className='row nav-row'>
				<div className='logo-container'>
					<a href="index.html">
						<span className='logo'>Music<span className="colored">Base</span></span>
						<br />
						<span className="tagline colored-orange">Electro Music Base</span>
					</a>
				</div>
				<div id="site-navigation" className="tech-nav">
					<ul>
						<li className="active has-child">
							<a href="#">Home</a>
							<ul className="submenu">
								<li><a href="index.html">Home Band</a></li>
								<li><a href="home-artist.html">Home Artist</a></li>
								<li><a href="home-podcast.html">Home Podcast</a></li>
							</ul>
						</li>
						<li className="has-child">
							<a href="#">Albums</a>
							<ul className="submenu">
								<li><a href="albums.html">Albums Page</a></li>
								<li><a href="album-single.html">Album Single</a></li>
							</ul>
						</li>
						<li className="has-child">
							<a href="#">Events</a>
							<ul className="submenu">
								<li><a href="events-masonry.html">Events Masonry</a></li>
								<li><a href="events-list.html">Events List</a></li>
								<li><a href="event-single.html">Event Single</a></li>
							</ul>
						</li>
						<li className="has-child">
							<a href="#">Band</a>
							<ul className="submenu">
								<li><a href="members.html">Members Page</a></li>
								<li><a href="biography.html">Biography Page</a></li>
								<li><a href="artist-single.html">Single Artist</a></li>
							</ul>
						</li>
						<li className="has-child">
							<a href="#">Pages</a>
							<ul className="submenu">
								<li className="has-child">
									<a href="#">Blog</a>
									<ul className="submenu">
										<li><a href="blog-list.html">Blog List</a></li>
										<li><a href="blog-masonry.html">Blog Masonry</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
									</ul>
								</li>
								<li className="has-child">
									<a href="#">Shop</a>
									<ul className="submenu">
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
				<div className="extra-nav">
					<button id="mini-cart-toggle"><i className="fa fa-shopping-cart"></i> <span className="mini-cart-count">2</span></button>
					<button id="search-toggle"><i className="fa fa-search"></i></button>
					<button id="menu-toggle"><i className="fa fa-bars"></i></button>
					{/* <!-- Mini Cart Widget --> */}
					<div id="mini-cart-widget">
						<h5 className="title">2 Products</h5>
						<div className="product clearfix">
							<img src="assets/img/shop/mini-1.jpg" alt="" />
							<h6>This is Product Title</h6>
							<span>1 x $120</span>
							<i className="fa fa-close"></i>
						</div>
						<div className="product clearfix">
							<img src="assets/img/shop/mini-2.jpg" alt="" />
							<h6>This is Product Title</h6>
							<span>2 x $60</span>
							<i className="fa fa-close"></i>
						</div>
						<div className="mini-cart-footer">
							<h4 className="subtotal">Subtotal: <span>$240</span></h4>
							<a href="#" className="btn btn-sm">Checkout</a >
							<a href="#" className="link">View Cart</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
}

export default Header