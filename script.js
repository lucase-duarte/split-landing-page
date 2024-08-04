const left = document.querySelector('.left')
const leftOverlay = document.querySelector('.left .overlay')
const leftText = document.querySelector('.left .text')
const right = document.querySelector('.right')
const rightOverlay = document.querySelector('.right .overlay')
const rightText = document.querySelector('.right .text')

left.addEventListener('mouseover', () => {
    left.style.width = '100%'
    leftOverlay.style.opacity = 0
    leftText.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
})

left.addEventListener('mouseout', () => {
    left.style.width = '50%'
    leftOverlay.style.opacity = 0.95
    leftText.style.backgroundColor = 'transparent'
})

right.addEventListener('mouseover', () => {
    right.style.width = '100%'
    rightOverlay.style.opacity = 0
    rightText.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
})

right.addEventListener('mouseout', () => {
    right.style.width = '50%'
    rightOverlay.style.opacity = 0.95
    rightText.style.backgroundColor = 'transparent'
})