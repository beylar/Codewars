const duration = (seconds) => {
    let  minutes, hours, days, years;
    if(seconds === 0){
        return "now"
    }
    if(seconds < 60){
        return `${seconds} second(s)`
    } 
    if (seconds < (60 * 60)){
        minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        return `${minutes} minute(s) and ${seconds} second(s)`
    }

    if(seconds < (60 * 60 * 24)){
        hours = Math.floor(seconds / 3600);
        minutes = seconds % 3600
        seconds = minutes % 60
        if(minutes >= 60){
            minutes = Math.floor(minutes / 60);
            seconds = minutes % 60;
            return `${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`
        }
            
        return `${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`
    }

    if(seconds < (60 * 60 * 24 * 365)){
        days = Math.floor(seconds / (60 * 60 * 24))
        hours = seconds % (60 * 60 * 24)
        minutes = hours % 60;
        seconds = minutes % 60;
        if(hours >= 24){
            hours = Math.floor(hours / 3600);
            minutes += hours % 3600;
            return `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`
        }

        return `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`
    }
    

}

console.log(duration(0))
console.log(duration(42))
console.log(duration(2800))
console.log(duration(4800))
console.log(duration(15731080))

