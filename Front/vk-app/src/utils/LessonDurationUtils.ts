

const durationToText = (duration: number): string => {
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;

    if(hours == 0) {
        return `${minutes} минут`;
    } else if (hours == 1){
        return `${hours} час${minutes == 0 ? `` : ` ${minutes} минут`}`;
    }
    else if (hours < 5){
        return `${hours} часа${minutes == 0 ? `` : ` ${minutes} минут`}`;
    }
    else{
        return `${hours} часов${minutes == 0 ? `` : ` ${minutes} минут`}`;
    }
}

export default durationToText;