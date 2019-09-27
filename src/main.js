//Function layout
const calcMinString = (firstString, secondString, thirdString) => {
    const minLength = Math.min(firstString.length, secondString.length, thirdString.length);
    return minLength;
};


document.querySelector("#calcButton").addEventListener("click", () => {
    //Converted strings to int
    const firstString = parseInt(document.querySelector("#firstString").value);
    const secondString = parseInt(document.querySelector("#secondString").value);
    const thirdString = parseInt(document.querySelector("#thirdString").value);

    //Begin of calculations
    const minString = calcMinString(firstString, secondString, thirdString);

    //Send results back to IDs
    document.querySelector("#result").innerHTML = minString;

});