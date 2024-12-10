import React from 'react'


const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer-content">
            <h3>Contact Us</h3>
            <p>Email:Info@example.com</p>
            <p>Phone:+121 56556 565556</p>
            <p>Address: jublihills</p>
            <p>Road no :10</p>
          </div>

          <div class="footer-content">
            
            <ul class="social-icons">

              <li><a href="#" class="fa fa-facebook"></a></li>
              <li><a href=""><i class="fab fa-instagram"></i></a></li>
              <li><a href=""><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="bottom-bar">
          <p>&copy; 2024 your company . All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
