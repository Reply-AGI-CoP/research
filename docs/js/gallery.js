// Sample JSON data containing image information
const imageData = [
    {
      src: "https://github.com/marino-multipla/marino-multipla/blob/main/photos/Area42-Robotics-VirtualTour.jpg?raw=true",
      thumbnailSrc: "https://github.com/marino-multipla/marino-multipla/blob/main/photos/Area42-Robotics-VirtualTour_thumbnail.jpg?raw=true",
      caption: "Reply Area42 Lab Virtual Tour<br>Lingotto, Turin<br>October 2023",
    },
    // Add more image data as needed
  ];
  
  // Function to create a row with images
  function createImageRow(images) {
    const row = document.createElement("div");
    row.classList.add("row");
  
    images.forEach(image => {
      const col = document.createElement("div");
      col.classList.add("col-md-4");
  
      const link = document.createElement("a");
      link.setAttribute("data-fancybox", "gallery");
      link.setAttribute("data-src", image.src);
      link.setAttribute("data-caption", image.caption);
  
      const img = document.createElement("img");
      img.setAttribute("src", image.thumbnailSrc);
      img.classList.add("img-responsive", "img-thumbnail");
  
      link.appendChild(img);
      col.appendChild(link);
      row.appendChild(col);
    });
  
    return row;
  }
  
  // Function to initialize the gallery
  function initializeGallery() {
    const galleryContainer = document.getElementById("gallery-container");
  
    // Create rows and append them to the container
    for (let i = 0; i < imageData.length; i += 3) {
      const rowImages = imageData.slice(i, i + 3);
      const row = createImageRow(rowImages);
      galleryContainer.appendChild(row);
    }
  }
  
  // Call the initializeGallery function when the page is loaded
  window.addEventListener("load", initializeGallery);
  