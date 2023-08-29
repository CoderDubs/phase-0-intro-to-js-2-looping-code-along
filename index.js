// Code your solutions in this file
function writeCards(names){
const thankYou = [];
for(let i=0; i < names.length; i++){
    thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return thankYou;
}

function countDown(startNum) {
    while(startNum>=0) {
        console.log(startNum);
        startNum--;
    }
}