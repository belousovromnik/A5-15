const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);
    }

function handleData(data) {
  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speach = $("input[name=speach]").val();

  let text = data.text.join('. ');
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  text = text.replace(/{var1}/g, var1);
  text = text.replace(/{var2}/g, var2);
  text = text.replace(/{var3}/g, var3);
  text = text.replace(/{var4}/g, var4);
  text = text.replace(/{var5}/g, var5);
  text = text.replace(/{var6}/g, var6);
  text = text.replace(/{speach}/g, speach);

  $("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
