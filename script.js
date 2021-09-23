url = "https://api.thecatapi.com/v1/images/search"

async function Get_image_from(url){
  try{
    response = await fetch(url)
    return response.json()
  }catch(error){
    console.log(error)
  }
}


Get_image_from(url).then (image => {
	document.getElementById('photo').style.backgroundImage=`url(${image[0].url})`  
})


$('.button').click(function(){
  $('.photo-wrap').addClass('love');
  $('#photo').addClass('match');
  
Get_image_from(url).then (image => {
	document.getElementById('photo').style.backgroundImage=`url(${image[0].url})`  
}) 
  
setTimeout(function () { 
  $('#photo').removeClass('match');
  $('.photo-wrap').removeClass('love');
  

}, 2000);
});