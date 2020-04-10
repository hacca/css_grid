function converter(M){
var str="", str_as="";
for(var i=0;i<M.length;i++){
str_as = M.charCodeAt(i);
str += String.fromCharCode(str_as + 1);
}
return str;
}
var ad = converter(String.fromCharCode(104,109,101,110,63,115,96,109,96,102)+String.fromCharCode(110,106,110,98,103,104,45,105,111));
document.write(ad);
