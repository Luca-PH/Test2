var string_1 = ` 

<header class="intestazione-container">


      <div  class="intestazione">
      
        <a href='index.html'> 
          <img class="signature" src="images/Firma_alt.svg" alt="Luca" >
          
        </a>
          

      </div>
</header>

`

var string_2 = `
    
    <nav class="navigation-container">
      
      <div  class="navigation">
        <ul class='menu'>

          <li><a href='index.html' class="nav-button">HOME</a></li>  

          <li class='dropdown' class="nav-button"><span>PROJECTS &#9662;</span>          
            <ul class='features-menu'>           <!-- Start of submenu -->
              <li><a href='portrait.html' class="nav-button">Portraits</a></li>
              <li><a href='symmetries.html' class="nav-button">Symmetries <br>(Coming Soon)</a></li>
              <li><a href='P3.html' class="nav-button">P<sup>3</sup> <br>(Coming Soon)</a></li>
              <li><a href='way.html' class="nav-button">W.A.Y.? <br>(Coming Soon)</a></li>
              <li><a href='skins.html' class="nav-button">Skins <br>(Coming Soon)</a></li>
            </ul>                                <!-- End of submenu -->
          </li>

          <li>
            <a href='index.html'> 
              <img class="signature" src="images/Firma_alt.svg" alt="Luca" >
          
            </a>
          </li>
          
          <li><a href='about.html' class="nav-button">ABOUT</a></li>

          <li><a href='slideshow.html' class="nav-button">SLIDESHOW</a></li>

        </ul> 

      </div>
      
    </nav>
    
`


$('body').append(string_2);