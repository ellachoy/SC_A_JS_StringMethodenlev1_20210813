// console.log("hi, String Methoden");
console.log("Übung lev1_1:length");

// Erstelle zwei Variablen nachName und vorName.
let nachName= " Choy";
let vorName= "Ella";
// Zeige die Länge der beiden Variablen in der Konsole an.
console.log(nachName.length);
console.log(vorName.length);
// Erstelle noch ein Variable “name”, die die Summe der beiden Variablen ist.
let name=nachName+vorName;
// Zeige die Länge der Variable “name” in der Konsole an.
console.log(name.length);
console.log("  ");
console.log(" ");


console.log("Übung lev1_2:indexOf");
let txt = "How inappropriate to call this planet Earth, when clear it is Ocean."
// Suche die Position des Zeichens “h” in der Variablen txt.
console.log(txt.indexOf("h"));
// Suche die Position des Zeichens “Earth” in der Variablen txt.
console.log(txt.indexOf("Earth"));
// Suche die Position des Zeichens “Moon” in der Variablen txt.
console.log(txt.indexOf("Moon"));
console.log("  ");
console.log(" ");


console.log("Übung lev1_3:search");
let txt2 ="Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
// Suche die Position des Zeichens “;” in der Variablen txt.
console.log(txt2.search(";"));
// Suche die Position des Zeichens “green” in der Variablen txt.
console.log(txt2.search("green"));
// Suche die Position des Zeichens “blue” in der Variablen txt.
console.log(txt2.search("blue"));
console.log("  ");
console.log(" ");


console.log("Übung lev1_4:slice");
let A = 'Sam is going to coding school';
console.log(A.length);
// Sam
let Sam=A.slice(0,3);
// is
let is=A.slice(4,6);
// am 
let am=A.slice(1,3);
// going to
let got=A.slice(7,16)
// school
let isg=A.slice(23,29);
document.write("Übung lev1_4:slice <br>");
document.write(Sam+"<br>");
document.write(is+"<br>");
document.write(am+ " "+ is+ " "+ got+ isg+"<br>");
document.write(is+ " "+ got+ isg+"<br>");
document.write(isg+"<br>");
document.write(Sam+ " "+ is +" "+ isg+"<br>");



console.log("Übung lev1_5:substring");
let text = 'Sam is back from coding school';
console.log(text.length);
// Sam
let nama=text.substring(0,3);
// is
let su=text.substring(4,6);
// school
let sch=text.substring(24,30);
document.write("-----------------------------<br>");
document.write("Übung lev1_5:substring <br>");
document.write(nama+"<br>");
document.write(su+"<br>");
document.write(sch+"<br>");
document.write(nama+ " "+ su +" "+ sch+"<br>");
document.write("-----------------------------<br>");



console.log("Übung lev1_6:substr");// merwürdig!!! an trainer/in fragen!!!
let texts = "Sam is working at coding school";
console.log(texts.length);
let texts1=texts.substr(0,3);
let texts2=texts.substr(3,4);
let texts3=texts.substr(14,4);
let texts4=texts.substr(25,31);
let texts5=texts.substr(6,9);
let res1=texts5.replace("working" , "works")

document.write("Übung lev1_6:substr <br>");
document.write(texts1+"<br>");
document.write(texts2+"<br>");
document.write(texts3+ texts4+"<br>");
document.write(texts1+ res1+texts3+texts4+"<br>");
document.write("-----------------------------<br>");

console.log("Übung lev1_7:replace");
let textrep = "Sam is good at coding school";
console.log(textrep.length);
let textrep1="Sam";
let textrep2="is";
let textrep3="good";
let textrep4="at";
let textrep5="school";

let resA=textrep3.replace("good","bad");
let resB=textrep1.replace("Sam","Tom");
let resC=textrep5.replace("school","tennis");

document.write("Übung lev1_7:replace <br>");
document.write(textrep1+ " "+textrep2+ " "+ resA+" "+textrep3+" "+textrep4+" "+textrep5+"<br>");
document.write(resB+ " "+textrep2+ " "+textrep3+" "+textrep4+" "+textrep5+"<br>");
document.write(textrep1+ " "+textrep2+ " "+textrep3+" "+textrep4+" "+resC+"<br>");
document.write("-----------------------------<br>");


console.log("Übung lev1_8:toLowerCase-toUpperCase");
let textLp = "Sam is going to coding school";
let textLp1="Sam";
let up1=textLp1.toUpperCase();
let Lo1=textLp1.toLowerCase();
let textLp2="is";
let up2=textLp2.toUpperCase();
let textLp3="going";
let up3=textLp3.toUpperCase();
let textLp4="to";
let up4=textLp4.toUpperCase();
let textLp5="school";
let up5=textLp5.toUpperCase();

let resLPA=textLp4.replace("to","at");


document.write("Übung lev1_8:toLowerCase-toUpperCase <br>");
document.write(up1 + " "+up2+" "+up3+ " "+ " "+up4+" "+up5+"<br>");
document.write(Lo1 + " "+textLp2+" "+textLp3+" "+resLPA+ " "+ " "+textLp5+"<br>");
document.write(up1 + " "+textLp2+" "+textLp3+ " "+ " "+textLp4+" "+up5+"<br>");
document.write( Lo1+ " "+up2+" "+up3+ " "+ " "+up4+" "+textLp5+"<br>");
document.write( textLp1+ " "+up2+" "+up3+ " "+ " "+up4+" "+textLp5+"<br>");
document.write("-----------------------------<br>");



console.log("Übung lev1_9:concat");
let text1 = "Sam is going to coding school";
let text2 = "Tom"
let text3 = "programming bike"
let text4 = "and"


