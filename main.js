const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.backgroundColor ="#000"
const particleArray = []

let hue = 0

const color = [
    '#E37B40',
    '#46B29D',
    '#DE5B49',
    '#324D5C',
    '#F0CA4D'
]

const mouse = {
    x: undefined, 
    y: undefined,
}



class Particle {  //hạt
    constructor(){
        this.x = mouse.x
        this.y = mouse.y

        // this.x = Math.random()*(canvas.width)
        // this.y = Math.random()*(canvas.height)
        this.size = Math.random()*16 + 1
        this.speedX = Math.random()*3 -1.5
        this.speedY = Math.random()*3 -1.5
        // this.color = color[Math.floor(Math.random()*(color.length))] 
        this.color = 'hsl(' + hue +',100%,50%)'
    }
    update(){
        this.x += this.speedX
        this.y += this.speedY
        if(this.size > 0.2) this.size -= 0.1
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2)
        ctx.fill()
    }
}
function init(){
    for (let i = 0; i < 4; i++) {
        particleArray.push(new Particle())
    }
}


function handleParticle(){
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw()
        if(particleArray[i].size <= 0.2)
        {
            particleArray.splice(i,1)
        }
    }
    
}


canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x
    mouse.y = event.y
    init()
})

function animate(){
    // ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    handleParticle()
    hue++
    requestAnimationFrame(animate)
}


// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
//     // ctx.fillRect(x,y,width,height);
//     ctx.fillStyle = 'blue'
//     ctx.fillRect(10,10,200,200);

// })




const drawCircle = (r)=>{
    ctx.fillStyle = 'blue'
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,r,0,Math.PI * 2)
    ctx.fill()
}
animate()

// console.log(ctx);