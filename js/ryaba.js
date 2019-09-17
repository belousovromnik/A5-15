const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [ 
    {var1: ''}, 
    {var2: ''}, 
    {var3: ''}, 
    {var4: ''}, 
    {var5: ''}, 
    {var6: ''}, 
    {speach: ''}];

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);
    }

function handleData(data) {

  let text = data.text.join('<br>');

  fields.forEach( (field) => {
    for (let key in field) {
      field[key] = $(`input[name=${key}]`).val();
      text = text.replace(new RegExp(`{${key}}`, 'g'), field[key]);
    };
  });

  $("#result").html(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
