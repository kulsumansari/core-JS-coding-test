/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    let result= '#';
    if( rgbValues.length >3 ) { throw new Error("Invalid Input"); }
    rgbValues.forEach((value)=>{
        if( !Number.isInteger(value) || value > 255 )
        {
            throw new Error("Invalid Input");   
        }
         result += toHex(value)
    });

    return result;
};
const toHex=(num)=>{
    let hex = num.toString(16);
    if(hex.length<2){
        hex= `0${hex}`;
    }
    return hex;
}

module.exports = rgbToHexConversion;
