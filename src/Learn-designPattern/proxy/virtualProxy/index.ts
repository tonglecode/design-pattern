import { items } from "../../../proxy/item";
import { ProxyImage } from "./ProxyImage";

// Create container
const container = document.createElement("div");
container.className = "image-container";
document.body.appendChild(container);

// Create image gallery
items.forEach((url) => {
  const imageContainer = document.createElement("div");
  imageContainer.className = "image-wrapper";
  container.appendChild(imageContainer);

  const proxyImage = new ProxyImage(url[1], imageContainer);

  // Add click handler to load image
  const button = document.createElement("button");
  button.textContent = "Load Image";
  button.onclick = () => proxyImage.display();
  imageContainer.appendChild(button);
});

// Optional: Add some basic styles
const styles = `
  .image-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .image-wrapper {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
  }
  
  .proxy-image {
    max-width: 100%;
    height: auto;
  }
  
  .loading {
    padding: 2rem;
    background: #f0f0f0;
    text-align: center;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
