var paymentMethods = {
  PayPal: "Algeria,Angola,Benin,Botswana,Burkina Faso,Burundi,Cameroon,Cape Verde,Chad,Comoros,Cote d Ivoire,Democratic Republic of the Congo,Djibouti,Egypt,Eritrea,Ethiopia,Gabon Republic,Gambia,Guinea,Guinea-Bissau,Kenya,Lesotho,Madagascar,Malawi,Mali,Mauritania,Mauritius,Mayotte,Morocco,Mozambique,Namibia,Niger,Nigeria,Republic of the Congo,Reunion,Rwanda,Saint Helena,Sao Tome and Principe,Senegal,Seychelles,Sierra Leone,Somalia,South Africa,Swaziland,Tanzania,Togo,Tunisia,Uganda,Zambia,Zimbabwe,Anguilla,Antigua and Barbuda,Argentina,Aruba,Bahamas,Barbados,Belize,Bermuda,Bolivia,Brazil,British Virgin Islands,Canada,Cayman Islands,Chile,Colombia,Costa Rica,Dominica,Dominican Republic,Ecuador,El Salvador,Falkland Islands,French Guiana,Greenland,Grenada,Guadeloupe,Guatemala,Guyana,Honduras,Jamaica,Martinique,Mexico,Montserrat,Netherlands Antilles,Nicaragua,Panama,Paraguay,Peru,Saint Kitts and Nevis,Saint Lucia,Saint Pierre and Miquelon,Saint Vincent and the Grenadines,Suriname,Trinidad and Tobago,Turks and Caicos,United States,Uruguay,Venezuela,Armenia,Australia,Bahrain,Bhutan,Brunei,Cambodia,China,Cook Islands,Fiji,French Polynesia,Hong Kong,India,Indonesia,Israel,Japan,Jordan,Kazakhstan,Kiribati,Kuwait,Kyrgyzstan,Laos,Malaysia,Maldives,Marshall Islands,Federated States of Micronesia,Mongolia,Nauru,Nepal,New Caledonia,New Zealand,Niue,Norfolk Island,Oman,Palau,Papua New Guinea,Philippines,Pitcairn Islands,Qatar,Samoa,Saudi Arabia,Singapore,Solomon Islands,South Korea,Sri Lanka,Taiwan,Tajikistan,Thailand,Tonga,Turkmenistan,Tuvalu,United Arab Emirates,Vanuatu,Vietnam,Wallis and Futuna,Yemen,Albania,Andorra,Austria,Azerbaijan Republic,Belarus,Belgium,Bosnia and Herzegovina,Bulgaria,Croatia,Cyprus,Czech Republic,Denmark,Estonia,Faroe Islands,Finland,France,Georgia,Germany,Gibraltar,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein,Lithuania,Luxembourg,Macedonia,Malta,Moldova,Monaco,Montenegro,Netherlands,Norway,Poland,Portugal,Romania,Russia,San Marino,Serbia,Slovakia,Slovenia,Spain,Svalbard and Jan Mayen,Sweden,Switzerland,Ukraine,United Kingdom,Vatican City",
  Moolah: "United States,Canada,United Kingdom,Australia",
  Stripe: "Austria,Australia,Belgium,Canada,Germany,Denmark,Spain,France,United Kingdom,Ireland,Italy,Luxembourg,Netherlands,Norway,Sweden,United States,Japan",
  MercadoPago: "Argentina,Brazil,Colombia,Mexico,Venezuela,Chile"
}
var allCountriesArr = new Array();
for (let country in paymentMethods) {
  allCountriesArr.push(paymentMethods[country].split(','));
}
console.log(allCountriesArr);
//make a object payMethArr here of payment methods and the countries as arrays so it's simpler to genPayList
var merged = [].concat.apply([], allCountriesArr);
var deduped = merged.filter((el, pos) => merged.indexOf(el) === pos);
deduped.sort();

var selCoun = document.getElementById("selectedcountry");

for (let country in deduped) {
  var option = document.createElement("option");
  option.text = deduped[country];
  selCoun.add(option);
}
var table = document.getElementById(countryTable);

function optionCheck(sel) {
  document.getElementById("paymentMethod").innerHTML = sel.value;

}

function genPayList(sel) {
  document.getElementById("");
  //here we will check the country specified against payMethArr to see which arrays have that country
  
    if(merged.indexOf(sel) !== -1) {
      addRow();
    }
    //if a country matchs a payMethod, then call addRow
}

function addRow() { //here, write a function which adds a new row to the paymentMethod div
  //pay attnetion to formatting
}
