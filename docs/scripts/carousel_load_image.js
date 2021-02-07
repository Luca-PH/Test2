// NON FUNZIONA I NUOVI PEZZI NON HANNO LE IMPOSTAZIONI CSS NECESSARIE
// possibile soluzione: "trigger" 


var i;
var height_figures = 150;
var string_c = "";
var string_begin_first = `<li class="carousel_slide current--slide">
<img class="carousel_image" src="`
var string_begin = `<li class="carousel_slide">
<img class="carousel_image" src="`
var string_end = `" alt="" >
</li>
`
var string_folder = `images/`
          




for (i = 1; i <= 3; i++)
{
    

    image_name= "photo" +i+".jpg";
    if (i === 1)
    {
        string_c = string_c + string_begin_first+ string_folder + image_name + string_end ;
    } else
    {
    string_c = string_c + string_begin + string_folder + image_name+ string_end ;
    }
} 

console.log(string_c);
//$('body').append(string_c);
//document.body.insertAdjacentHTML('beforeEnd',string_c);
var d1 = document.getElementById('one');
//d1.insertAdjacentHTML('beforeend', string_c);
$("#one").append(string_c)