const clicked_image = document.querySelector('.photo-grid')
const modal_image = document.querySelector('.modal_image')
const modal_background = document.querySelector('.modal_background')
const close_modal_button = document.querySelector('.close_modal_button')

clicked_image.addEventListener("click", e =>
{
    // what indicator was clicked on?
    const target_Image = e.target.closest("img");

    console.log(target_Image.src);

    modal_image.src = target_Image.src;
    modal_image.style.display = "block";
    modal_background.style.display = "flex";
    close_modal_button.style.display = "block";
})


// When the user clicks on <span> (x), close the modal
close_modal_button.onclick = function() {
    modal_image.style.display = "none";
    modal_background.style.display = "none";
    close_modal_button.style.display = "none";
  } 


 document.addEventListener("scroll", e =>
{
    // what indicator was clicked on?
    console.log(clicked_image)
})