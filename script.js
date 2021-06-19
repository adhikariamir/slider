
let images = [{
   name: "image1",caption:"Landscape"},
   {name:"image2",caption:"Mountain"},
    {name:"image3",caption:"Ice House"},
]

let totalImages = (images.length);
let currentImage= 0;


const prev = document.getElementById ('prev');
const next = document.getElementById ('next');
const text = document.getElementById ('text');
const imgNo = document.getElementById ('imgNo');
const img = document.querySelector ('img');


const loadImage =(item)=>{
    console.log(item);
    img.src= `img/${item.name}.jpg`  
    text.textContent= `${item.caption}`
    imgNo.textContent =`${currentImage +1} of ${totalImages}`
    {(currentImage === 0)?

        prev.classList.add('show')
  
  :
      prev.classList.remove('show')
  }




    {(currentImage === totalImages-1)?

        next.classList.add('show')
  
  :
      next.classList.remove('show')
  }
    
  console.log(currentImage);
}

loadImage(images[currentImage])




prev.addEventListener('click',()=>{

    
    currentImage--;
    loadImage(images[currentImage])


   
})
next.addEventListener('click',()=>{
    
    
    currentImage++;
    loadImage(images[currentImage])
    console.log(currentImage,"cur");
    console.log(totalImages,"toatla");

   

})

