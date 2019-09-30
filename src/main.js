//Function layout
const calcMinString = (firstString, secondString, thirdString) => {
    const minLength = Math.min(firstString.length, secondString.length, thirdString.length);
    return minLength;
};


document.querySelector("#calcButton").addEventListener("click", () => {
    //Converted strings to int
    const firstString = document.querySelector("#firstString").value;
    const secondString = document.querySelector("#secondString").value;
    const thirdString = document.querySelector("#thirdString").value;

    //Begin of calculations
    const minString = `The smallest string is of length ${calcMinString(firstString, secondString, thirdString)}`;
    

    
    //Send results back to IDs
    document.querySelector("#result").innerHTML = minString;

});