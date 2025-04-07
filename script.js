let randomImg = [
    "imgArray/img1.jpg",
    "imgArray/img2.jpg",
    "imgArray/img4.jpg",
    "imgArray/img5.jpg",
    "imgArray/img6.png",
    "imgArray/img8.jpg",
    "imgArray/img9.jpg",
    "imgArray/img10.jpg",
    "imgArray/img12.jpg",
    "imgArray/img13.jpg",
    "imgArray/img14.jpg",
    "imgArray/img15.jpg",
    "imgArray/img16.png",
    "imgArray/img17.jpg"
];

let currentIndex = 0; // For btn who show witch number

function renderImages() {
    let contentRef = document.getElementById("rendered_images");
    contentRef.innerHTML = ""; //Clear when something inside

    for (let index = 0; index < randomImg.length; index++) { //loop goes through array step by step each time
        contentRef.innerHTML += randomSingleImage(index); // Giv every time a value to the function randomSingleImage and make that in the html
    }
}


//Templete 1 // And Function
function randomSingleImage(index) {
    return getSingleImageTemplate(randomImg[index], index);
  }

  
  // Function Overlay Templete 2
  function toggleOverlay(imgSrc, index) {
    let overlayField = document.getElementById("overlay_content");
    let overlay = document.getElementById("overlay");
  
    if (!overlay) {
      currentIndex = index;
      overlayField.innerHTML = getOverlayTemplate(imgSrc, index); //  ersetzt den langen Template-Block
      updateCounter();
    } else if (imgSrc) {
      currentIndex = index;
      document.getElementById("overlay_image-rendered").src = imgSrc;
      document.getElementById("overlay").classList.remove("d_none");
      updateCounter();
    } else {
      document.getElementById("overlay").classList.add("d_none");
    }
  }
  

// Control counter
function updateCounter() {
    document.getElementById("current_number_field").textContent = currentIndex + 1; 
    document.getElementById("total_number_field").textContent = randomImg.length;
}


// Btn Left
function flashLeft() {
    currentIndex = (currentIndex - 1 + randomImg.length) % randomImg.length;
    showImageAt(currentIndex);
}


// BTN Right
function flashRight() {
    currentIndex = (currentIndex + 1) % randomImg.length;
    showImageAt(currentIndex);
}


function showImageAt(index) { 
    let imgElement = document.getElementById("overlay_image-rendered"); 
    imgElement.src = randomImg[index];
    updateCounter();
}


//HEADER
function renderHeader() {
    let headerTarget = document.getElementById("header_content");
    headerTarget.innerHTML += randomHeader();
}

// Header Function + Template 3
function randomHeader() {
    return getHeaderTemplate();
  }
  

//Footer
function renderFooter() {
    let footerTarget = document.getElementById("footer");
    footerTarget.innerHTML += randomFooter();
}


//Tempate 4
function randomFooter(){
return  getFooterTemplate();
}


// Impressum
function renderImpressum() {
    let impressumTarget = document.getElementById("impressum");
    impressumTarget.innerHTML += randomImpressum();
}

//Template 5
function randomImpressum(){
    return getImpressumTemplate();
}


// splitet InitPage
function initPage() {
    renderHeader(); 

    if (document.getElementById("rendered_images")) { 
        renderImages();
    }

    renderFooter();

    if (document.getElementById("impressum")) { 
        renderImpressum();
    }
}
