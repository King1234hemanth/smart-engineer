document.getElementById("submit-button").addEventListener("click", function(){
    const letter = document.querySelector(".letter");
    letter.computedStyleMap.animation ='none';
    void letter.offsetWidth;
    letter.computedStyleMap.animation=null;
});