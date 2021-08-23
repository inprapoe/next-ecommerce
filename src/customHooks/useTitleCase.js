const useTitleCase = (string) => {
    let splitString = string.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
    }
    return splitString.join(' '); 
}

export default useTitleCase
