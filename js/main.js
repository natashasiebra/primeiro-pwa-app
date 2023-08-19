window.onload = () =>{
    "use strinct";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};