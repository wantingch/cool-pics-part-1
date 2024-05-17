let button = document.getElementById("hide")

let bar = document.getElementById("bar")

button.addEventListener("click", ()=>{
    bar.classList.toggle("hide")
})

function handleResize() {
    let button = document.getElementById("hide");
    if (window.innerWidth > 1000) {
        button.classList.add("hide");
        bar.classList.remove ("hide")
    } else {
        button.classList.remove("hide");
        bar.classList.add ("hide")
    }
}


  
  handleResize();
  window.addEventListener("resize", handleResize);

  function openViewer(src) {
    var imageViewer = document.getElementById('imageViewer');
    var viewerImage = document.getElementById('viewerImage');
    viewerImage.src = src; 
    imageViewer.style.display = 'flex'; 

}

function closeViewer() {
    var imageViewer = document.getElementById('imageViewer');
    imageViewer.style.display = 'none'; 
}