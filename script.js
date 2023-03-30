var a = document.querySelectorAll(".drum");

for(var i=0; i<a.length; i++)
{
    a[i].addEventListener("click", function(){
        
        // var audio = new Audio("sounds/tom-1.mp3");
        // // https://open.spotify.com/track/6Pf2T6xvc8C0lWrkg0yUFc
        // audio.play();
        makeSound(this.innerHTML);
    });

}
document.addEventListener("keydown", function(event)
{
        makeSound(event.key);
});

function makeSound(key)
{
    switch(key)
        {
            case "f":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
                
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            default:
                console.log("You pressed "+key);
        }
}




