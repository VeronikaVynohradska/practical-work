document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.querySelector(".greeting");
    const welcomeElement = document.querySelector(".welcome-section");
    const mainTextElement = document.querySelector(".typing-demo p");
    const topSectionElement = document.querySelector(".top-section");

    setTimeout(() => {
        greetingElement.style.opacity = "0";

        setTimeout(() => {
            welcomeElement.style.opacity = "1";
            
            setTimeout(() => {
                welcomeElement.style.opacity = "0";
                
                setTimeout(() => {
                    topSectionElement.style.opacity = "1";

                    function typeText(element, text, index = 0) {
                        if (index < text.length) {
                            element.innerHTML += text.charAt(index);
                            setTimeout(() => typeText(element, text, index + 1), 30);
                        }
                    }
                    
                    let textToType = mainTextElement.textContent;
                    mainTextElement.textContent = "";
                    typeText(mainTextElement, textToType);       
                }, 1000);
            }, 2000);
        }, 2000);
    }, 1000);
});

document.documentElement.classList.remove('no-js');