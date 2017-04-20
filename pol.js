var text = prompt("Wpisz słowo");

convert (text);

function convert(){
var str = text;
var res = str.replace(/Ą/g, "A");
str = str.replace(/Ć/g, "C");
str = str.replace(/Ę/g, "E");
str = str.replace(/Ł/g, "L");
str = str.replace(/Ń/g, "N");
str = str.replace(/Ó/g, "O");
str = str.replace(/Ś/g, "S");
str = str.replace(/Ź/g, "X");
str = str.replace(/Ż/g, "Z");
str = str.replace(/ą/g, "a");
str = str.replace(/ć/g, "c");
str = str.replace(/ę/g, "e");
str = str.replace(/ł/g, "l");
str = str.replace(/ń/g, "n");
str = str.replace(/ó/g, "o");
str = str.replace(/ź/g, "x");
str = str.replace(/ż/g, "z");
alert(str);
}
