import React, { useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import bgImage from '../images/image.png';
// import shirt1 from '../images/shirt1.png';
import rice from "../images/rice.jpg";
import Tea1 from '../images/Tea1.jpg';
import Wheat from '../images/Wheatflour.jpg';

import Tea from '../images/Tea.jpg';
import Wheatflour from '../images/Wheatflour.jpg';
import Freedomoil from '../images/Freedomoil.jpg';
import Handwash from '../images/Handwash.jpg';
import Harpic from '../images/Harpic.jpg';
import lizol from '../images/lizol.jpg';


import Riceflour from '../images/riceflour.webp';
import Gramflour from '../images/Gramflour.jpg';
import Maida from '../images/Maida.jpg';
import Rava from '../images/Rava.jpg';
import sooji from '../images/sooji.jpg';
import Maggie from '../images/Maggie.jpg';
import Biscuits from '../images/Biscuit.jpg';
import Brownrice from '../images/Brownrice.jpg';
import choc from '../images/choc.jpg';
import Pulses from '../images/Pulses.jpg';
import Coffee from '../images/Coffee.jpg';
import Jaggerypowder from '../images/Jaggerypowder.jpg';
import Shampoo from '../images/Shampoo.jpg';
import Brush from '../images/Brush.jpg';
import Vim from '../images/vim1.jpg';
import Surf from '../images/Surf.jpg';
import Cornflakes from '../images/Cornflakes.jpg';
import WomensImage from '../images/Womens.webp';
import emailImage from '../images/em.png';
import locationImage from '../images/loca.jpg';
import phoneImage from '../images/phn.png';
// import image1 from '../images/img1.png';
// import image2 from '../images/img2.png';
// import image3 from '../images/img3.png';
import kidsBanner from '../images/Kidsbanner.webp';
import userIcon from '../images/user.png';
import cartIcon from '../images/cart.png';
import addIcon from '../images/add1.webp';
// import checkoutIcon from '../images/checkout.png';
function MyApp() {
  const [products] = useState([
    { id: 9, name: 'mariegold', image: Biscuits, price: 20 },
    { id: 10, name: 'Brownrice', image: Brownrice, price: 800 },
    { id: 1, name: 'Rice', image: rice, price: 450 },
    { id: 2, name: 'Taj mahal', image: Tea1, price: 350 },
    { id: 4, name: 'Sooji', image: sooji, price: 135 },
    { id: 6, name: 'Wheat Flour', image: Wheatflour, price: 160 },
    { id: 10, name: 'lizol', image: lizol, price: 430 },
    { id: 11, name: 'Coffee', image: Coffee, price: 340 },
    { id: 7, name: 'Maggie', image: Maggie, price: 260 },
    { id: 8, name: 'pulses', image: Pulses, price: 320 },
    { id: 10, name: 'Freedomoil', image: Freedomoil, price: 299 },
    { id: 11, name: 'Shampoo', image: Shampoo, price: 398 },
    
  ]);

  const [otherProducts] = useState([
   
    { id: 3, name: 'Maida', image: Maida, price: 110 },
    { id: 5, name: 'upma mix', image: Rava, price: 160 },
    { id: 7, name: 'Rice Flour', image: Riceflour, price: 150 },
    { id: 8, name: 'Gram Flour', image: Gramflour, price: 130 },
    { id: 9, name: 'Brush', image: Brush, price: 40 },
    { id: 10, name: 'Vim', image: Vim, price: 70},
    { id: 11, name: 'Surf', image: Surf, price: 120 },
    { id: 12, name: 'Cornflakes', image: Cornflakes, price: 199 },


    


    




   
  ]);

  const addToCart = (productName, price) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { name: productName, price: price };
    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log(`Adding ${productName} to cart with price ${price}`);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md" id="navbar">
        <a className="navbar-brand" href="#" id="logo">
          <img src={logo} alt="" width="50px" style={{ marginBottom: '10px', marginRight: '10px' }} />
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product-cards">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#product-cards2">Kids</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#footer">About</a>
            </li>
            
          </ul>
          <div className="navbar-nav ml-auto">
            <Link to="/signup" className="nav-item nav-link">
              <img src={userIcon} width="20px" alt="User Icon" />
            </Link>
            <Link to="/addtocart" className="nav-item nav-link">
              <img src={cartIcon} width="20px" alt="Cart Icon" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3> Mega Grocery Sale!</h3>
          <h2>Category <span className="changecontent"></span></h2>
          <p>Discover a wide range of quality groceries, fresh produce, and household essentials at ourstore. Stock up on everything you need at unbeatable prices!</p>
          {/* <h5>50% OFF</h5> */}
          <a href="#product-cards" className="btn">Shop Now</a>
        </div>
        <div className="img">
        <img src={bgImage} alt="" style={{ height: '450px', width: '90%' }} />
        </div>
      </section>

      {/* Product Cards */}
      <div className="container" id="product-cards" style={{ marginTop: '50px' }}>
        <h1 className="text-center">PRODUCT</h1>
        <div className="row" style={{ marginTop: '50px' }}>
          {products.map((product) => (
            <div className="col-md-3 py-3 py-md-0" key={product.id}>
              <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                  <h3 className="text-center">{product.name}</h3>
                  <div className="star text-center">
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                  </div>
                  <div className='imagee'>
                    <img src={addIcon} width="20px" height="20px" alt="Add to Cart Icon" onClick={() => addToCart(product.name, product.price)} />
                    <h5>{product.price}/-</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row" style={{ marginTop: '50px' }}>
          {otherProducts.map((product) => (
            <div className="col-md-3 py-3 py-md-0" key={product.id}>
              <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                  <h3 className="text-center">{product.name}</h3>
                  <div className="star text-center">
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                  </div>
                  <div className='imagee'>
                    <img src={addIcon} width="20px" height="20px" alt="Add to Cart Icon" onClick={() => addToCart(product.name, product.price)} />
                    <h5>{product.price}/-</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    

      {/* End of Product Cards */}

      {/* Banner */}
      {/* <div className="container">
        <section className="banner" id="banner">
          <div className="banner-content">
            <h1>Special <span>Collection</span></h1>
            <p>"Indulge in elegance at our women's boutique. From timeless classics <br /> to contemporary chic, find the perfect ensemble for every occasion. Visit us now!</p>
            <h5>UPTO 50% OFF</h5>
            <a href="#" className="btn">Shop Now</a>
          </div>
          <div className="img">
            <img src={WomensImage} alt="Special Collection" />
          </div>
        </section>
      </div> */}
      {/* End of Banner */}
      
      {/* End of Other Product Cards */}

      {/* Banner2 */}
      {/* <div className="container">
        <section className="banner2" id="banner2">/
          <div className="banner2-content">
            <h1>Kids <span>Wear</span></h1>
            <h2>Product <span className="bannerchangecontent"></span></h2>
            <h3>UPTO 50% OFF</h3>
            <p>"Experience whimsical fashion for your little ones at our kid's <br/> From playful prints to comfortable essentials, discover adorable outfits for every adventure. Visit us today!"</p>
            <a href="#" className="btn">Shop Now</a>
          </div>
          <div className="img">
            <img src={kidsBanner} alt="Kids Wear" />
          </div>
        </section>
      </div> */}
      {/* End of Banner2 */}
     
      {/* End of About Us */}

      {/* Contact Us */}
      <div class="container" id="contact">
        <h2>CONTACT US</h2>
        <hr/>
        <div class="row">
          <div class="col-md-3 py-3 py-md-0">
          <div className="d-flex align-items-center"/>

            <img src={locationImage} width="60px"/>
            <p>India AndhraPradesh
              <br/>Guntur
            </p>
          </div>

          <div class="col-md-3 py-3 py-md-0">
            
            <img src={phoneImage} width="60px"/>
            <p>+91  7723791900
           {/* <br/>+91 9618190870 */}
            </p>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <img src={emailImage}  width="60px"/>
            <p>example@gmail.com
            <br/>contact@gmail.com
            </p>
          </div>
        </div> 
<hr/>
        <div class="row">

          <div class="col-md-6 py-3 py-md-0">

            <div class="form-group">
              <input type="text" class="form-control" id="usr" placeholder="Your Name"/>
            </div>
            <div class="form-group">
              <input type="phone" class="form-control" id="phn" placeholder="Your Phone Number"/>
            </div>
          </div>

          <div class="col-md-6 py-3 py-md-0">

            <div class="form-group">
              <input type="email" class="form-control" id="eml" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <input type="subject" class="form-control" id="sbj" placeholder="Subject"/>
            </div>
          </div>

        </div>
        <div class="form-group">
          <textarea class="form-control" rows="5" id="comment" placeholder="Type your Message"></textarea>

        </div>
        <div id="message"><button>Send Message</button></div>
        
      </div>


      {/* End of Contact Us */}

    </div>
  );
}

export default MyApp;

