
// intersection observer api works better

function scrollAppear(element) {
  let target = document.querySelector(element)
  let element_Position = target.getBoundingClientRect().top
  console.log(element_Position)
  let frame_height = window.innerHeight/1.3


  if (frame_height >element_Position ){
    target.classList.add('moonShines')
  }
 
  else{
    target.classList.remove('moonShines')
  }
}
window.addEventListener('scroll', function () {
  scrollAppear('.moon')
})
window.addEventListener('scroll', function () {
  scrollAppear('.start')
})
