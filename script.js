window.onload = function () {
   slideOne()
   slideTwo()
}

let sliderOne = document.getElementById('slider-1')
let sliderTwo = document.getElementById('slider-2')
let displayValOne = document.getElementById('range1')
let displayValTwo = document.getElementById('range2')
let minGap = 2
let slideTrack = document.querySelector('.slider-track')
let sliderMaxValue = document.getElementById('slider-1').max

function slideOne() {
   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap
   }
   displayValOne.textContent = sliderOne.value
   fillColor()
}

function slideTwo() {
   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap
   }
   displayValTwo.textContent = sliderTwo.value
   fillColor()
}

function fillColor() {
   percent1 = (sliderOne.value / sliderMaxValue) * 100
   percent2 = (sliderTwo.value / sliderMaxValue) * 100
   slideTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #ffe4c4 ${percent1}%, #ffe4c4 ${percent2}%, #dadae5 ${percent2}% )`
}
