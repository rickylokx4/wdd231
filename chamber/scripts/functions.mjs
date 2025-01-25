export function getCurrentYear(){
    const today = new Date();
    const year = today.getFullYear();
    const yearText = document.getElementById('currentyear');
    yearText.innerHTML = year;
}
export function getTomorrow(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    let tomorrow = date.getDay()+1;
    if (tomorrow == 7) {
        tomorrow = 0;
        let dayTomorrow = weekday[tomorrow];
        return dayTomorrow;
    }
    else {
        return weekday[(date.getDay())+1];
    }
}
export function getAfterTomorrow(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    let afterTomorrow = date.getDay()+2
    if (afterTomorrow == 7) {
        afterTomorrow = 0;
        let dayAfterTomorrow = weekday[afterTomorrow];
        return dayAfterTomorrow;
    }
    else if(afterTomorrow == 8){
        afterTomorrow = 1;
        let dayAfterTomorrow = weekday[afterTomorrow];
        return dayAfterTomorrow;
    }
    
    else {
        return weekday[(date.getDay())+2];
    }
}
export function getLastModified(){
    let LastModif = new Date(document.lastModified);
    const lastModified = document.getElementById('lastModified')
    lastModified.innerHTML="Last Modafied: "+ LastModif
}

