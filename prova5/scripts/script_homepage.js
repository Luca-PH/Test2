var i;
var height_figures = 150;
var string_c = "";
var string_begin = `
<div class='photo-grid-container'>
    <div class='photo-grid'>`
var string_end = `
    </div>
</div>
`
var string_c_1 = `

          <div class='photo-grid-item'>
            <img src='images/images_thumbnails/`
var string_c_2 =`' height="`+height_figures+`"/>
          </div>
          
    `


for (i = 1; i <= 3; i++) {
  image_name= "photo" +i+"_800.jpg";
  var string_c = string_c + string_c_1 + "photo" +i+"_800.jpg"+ string_c_2;
} 

$('body').append(string_begin + string_c + string_end);
