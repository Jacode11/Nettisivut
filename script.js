const myImage = new Image();
myImage.src = 'data:image/png;base64,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';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 350;
    canvas.height = 296;
    
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    
    let particlesArray = [];
    const numberOfParticles = 5000;

    class Particle{
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 3.5;
            this.size = Math.random() * 1.5 + 1;
        }
        update(){
            this.y+= this.velocity;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init(){
        for (let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate(){
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
}); 