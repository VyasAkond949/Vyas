window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            document.querySelector(".blur-wrapper").classList.add("blur")
        },
        2000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".blur-wrapper").classList.remove("blur");
    document.body.style.overflow = "auto";
});