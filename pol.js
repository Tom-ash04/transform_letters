var text = prompt("Wpisz słowo");

convert (text);

function convert(){
var str = text;
var res = str.replace(/Ą/g, "A").replace(/Ć/g, "C").replace(/Ę/g, "E").replace(/Ł/g, "L").replace(/Ń/g, "N").replace(/Ó/g, "O").replace(/Ś/g, "S").replace(/Ź/g, "X").replace(/Ż/g, "Z").replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e").replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o").replace(/ź/g, "x").replace(/ż/g, "z");
alert(res);
}
