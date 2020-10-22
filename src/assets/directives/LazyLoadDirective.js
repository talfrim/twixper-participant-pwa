/*
How to use lazy loader:
- Put "v-lazyload" on the element which contins the img
- Remove tha attribute "src" from the image, 
  instead copy the url to the attribute "data-url"
- See exapmle at TweetPreviewImgsGrid.vue  
*/
export default {
    inserted: el => {
      function loadImage() {
        const imageElement = Array.from(el.children).find(
        el => el.nodeName === "IMG"
        );
        if (imageElement) {
          imageElement.addEventListener("load", () => {
            setTimeout(() => el.classList.add("loaded"), 100);
          });
          imageElement.addEventListener("error", () => console.log("error"));
          imageElement.src = imageElement.dataset.url;
        }
      }
  
      function handleIntersect(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(el);
          }
        });
      }
  
      function createObserver() {
        const options = {
          root: null,
          threshold: "0"
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
      }
      if (window["IntersectionObserver"]) {
        createObserver();
      } else {
        loadImage();
      }
    }
};