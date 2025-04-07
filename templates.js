"use strict";

//All singleImage  Templete 1
function getSingleImageTemplate(imgSrc, index) {
    return `
      <div class="single_img">  
        <img src="${imgSrc}" alt="Bild ${index}" onclick='toggleOverlay("${imgSrc}", ${index})'>
      </div>
    `;
  }//Onclick activate toggleOverlay function and give the paramter imgSRc and Index, Make a container for IMG SMALL, get img from array[INDEX] EVERY img individually, if you click on img if make a big img container =onclick toggleOverlay
  

   // Tempelt 2 Overlay complete
   function getOverlayTemplate(imgSrc, index) {
    return `
      <div id="overlay" class="overlay_style" onclick="toggleOverlay()"> 
        <div class="overlay_inner" onclick="event.stopPropagation()"> 
  
          <div class="counter_img_content"> 
            <p><span id="current_number_field"></span> / <span id="total_number_field"></span></p>
            <div class="btn_big_render">
              <button class="btn_click" onclick="flashLeft()">
                <img class="img_big_btn" src="img/flashleft.png" alt="">
              </button>
              <button class="btn_click" onclick="flashRight()">
                <img class="img_big_btn" src="img/flashright.png" alt="">
              </button>
            </div>
          </div>
  
          <img id="overlay_image-rendered" class="img_rendered_overlay" src="${imgSrc}" 
               alt="Big Movie Image" onclick="toggleOverlay()">
  
        </div>
      </div>
    `;
  }
  

// Template 3 + header
  function getHeaderTemplate() {
    return `
      <a href="index.html">
        <img id="header_logo" src="img/3d.gif" alt="Logo Fotogram">
      </a>
      <h1 id="title_text">Fotogram Movie Edition</h1>
    `;
  }
  

// Template 4 footer
  function getFooterTemplate() {
    return `
        <footer id="footer_content">
            <img id="footer_logo" src="img/3d.gif" alt="Logo Fotogram">
            <h1 id="footer_title_text">Fotogram </h1>
            <div class="link_footer"><a href="impressum.html">Impressum</a></div>
        </footer>
    `;
}


// Template 5
function getImpressumTemplate() {
    return `
        <section class="impressum-container">
            <h2>IMPRESSUM</h2>
            <p><strong>Andreas Kissner</strong></p>
            <p>Rue du Champ-Fort 6</p>
            <p>2853 Courfaivre</p>
            <p><strong>Telefon:</strong> <a href="tel:+41767496713">+41 76 749 67 13</a></p>
            <p><strong>E-Mail:</strong> <a href="mailto:T@1000.Skynet">T@1000.Skynet</a></p>
            <p>Quelle: <a href="https://www.e-recht24.de" target="_blank">e-recht24.de</a></p>
            <p><a href="#">DATENSCHUTZERKLÄRUNG</a></p>
           <a class="link_back" href="index.html">Back to Start</a>
        </section>
    `;
}