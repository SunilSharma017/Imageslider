let slides=document.querySelectorAll(".slide")
let counter=0;

slides.forEach((slide,index)=>

{
    slide.style.left=`${index*100}%`
// we can also write it from this type it is used to evalute stirng and int togethe 
// another way    slider.style.left=index*100+'%';
});

const imageSlide = ()=>{
   slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${counter*100}%)`
   }
   )
} ; 

const goPrev = () =>{
    if(counter>0){
    counter--;
    imageSlide()
    }
};
const goNext = () =>{
    if(counter<slides.length-1){
    counter++;
    imageSlide()
    }
};