//* Kasim Meghjee / Harjoitustyö 1
//* Virheilmoitusten muuttujat

function window_calculation() {

const MINERROR = "Minimum height and width of window is 50cm.";
const MAXERROR = "Maximum height and width of window is 200cm.";
const NOWINDOW = "No amount. 1 assumed."
const MAXWINDOW = "No more than 10 equal size windows."


document.getElementById("error").innerHTML = "";
document.getElementById("wood").innerHTML = "";
document.getElementById("glass").innerHTML = "";
document.getElementById("woods").innerHTML = "";
document.getElementById("glasses").innerHTML = "";
document.getElementById("size").innerHTML = "";

let height = Number(document.getElementById("window_height").value);
let width = Number(document.getElementById("window_width").value);
let amount = Number(document.getElementById("window_amount").value);

//* muutetaan sentit metreiksi

let height_meter = (height / 100).toFixed(2);
let width_meter = (width / 100).toFixed(2);

//* Muuttujat lasin ja puun määrään

let no_window = (height_meter - 0.1) * (width_meter - 0.1);
let window = (height_meter - 0.1) * (width_meter - 0.1);
let windows = (window * amount);
let wood = ((height_meter * 2) + (width_meter * 2) + ((height_meter - 0.12) * 2) + ((width_meter - 0.12) * 2));
let woods = (amount * ((height_meter * 2) + (width_meter * 2) + ((height_meter - 0.12) * 2) + ((width_meter - 0.12) * 2)));

//* Ikkunan koon muuttujat

let small = "small window"
let medium = "medium window";
let large = "large window";
let huge = "huge window";

if(window <= 0.5) {
    document.getElementById("size").innerHTML = small;
} else
if(window >=0.51 && window <= 1.5) {
    document.getElementById("size").innerHTML = medium;
} else
if(window >= 1.51 && window <= 2.5) {
    document.getElementById("size").innerHTML = large;
} else
if(window >= 2.51) {
    document.getElementById("size").innerHTML = huge;
}


if(height <= 49 || width <= 49) {
    document.getElementById("error").innerHTML = MINERROR;
    document.getElementById("size").innerHTML = "";
} else
if(height >= 201 || width >= 201) {
    document.getElementById("error").innerHTML = MAXERROR;
    document.getElementById("size").innerHTML = "";
} else
if(amount >=11) {
    document.getElementById("error").innerHTML = MAXWINDOW;
    document.getElementById("size").innerHTML = "";
} else
if (amount == "") {
    document.getElementById("error").innerHTML = NOWINDOW;
    document.getElementById("wood").innerHTML = wood.toFixed(2);
    document.getElementById("glass").innerHTML = no_window.toFixed(2);
    document.getElementById("woods").innerHTML = wood.toFixed(2);
    document.getElementById("glasses").innerHTML = no_window.toFixed(2);
} else
if(amount == 1) {
    document.getElementById("error").innerHTML = "";
    document.getElementById("wood").innerHTML = wood.toFixed(2);
    document.getElementById("glass").innerHTML = window.toFixed(2);
    document.getElementById("woods").innerHTML = woods.toFixed(2);
    document.getElementById("glasses").innerHTML = windows.toFixed(2);   
} else
if(amount >=1 || amount <=10) {
    document.getElementById("error").innerHTML = "";
    document.getElementById("wood").innerHTML = wood.toFixed(2);
    document.getElementById("glass").innerHTML = window.toFixed(2);
    document.getElementById("woods").innerHTML = woods.toFixed(2);
    document.getElementById("glasses").innerHTML = windows.toFixed(2);
} 

    

}

