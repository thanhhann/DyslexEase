
window.addEventListener("DOMContentLoaded", (event) => {
    const OnBtn = document.querySelector(".on-btn");
    OnBtn.addEventListener("click", () =>{
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "on",
                tabId: tabs[0].id
            });
        });
    });
});


window.addEventListener("DOMContentLoaded", (event) => {
    const OffBtn = document.querySelector(".off-btn");
    OffBtn.addEventListener("click", () =>{
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                command: "off",
                tabId: tabs[0].id
            });
        });
    });
});

// document.getElementById("on-btn").addEventListener("click", () => {
//     // Access the element you want to change
//     var element = document.getElementById("elementToChange");
    
//     // Add or remove CSS classes to change its style
//     if (element.classList.contains("body")) {
//         element.classList.remove("body");
//     } else {
//         element.classList.add("body");
//     }
// });
// });