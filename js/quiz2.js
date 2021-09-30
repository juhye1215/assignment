//If select answer, Next button will be clickable
function btnAble() {
  var radioBtn = document.querySelectorAll('input[type="radio"]:checked');

  if (radioBtn != null) {
    //Test if something was checked
    document.getElementById("next").disabled = false;
  }
}

// import JSON file to display questions
function loadRequest() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);

      document.getElementById("type").innerHTML = obj.Tofle[1].type;
      document.getElementById("main-quiz").innerHTML = obj.Tofle[1].read;
      document.getElementById("que").innerHTML = obj.Tofle[1].question;

      document.getElementById("answer1").innerHTML = obj.Tofle[1].answers[0];
      document.getElementById("answer2").innerHTML = obj.Tofle[1].answers[1];
      document.getElementById("answer3").innerHTML = obj.Tofle[1].answers[2];
      document.getElementById("answer4").innerHTML = obj.Tofle[1].answers[3];

      document.getElementById("dictionary").innerHTML = obj.Tofle[1].dictionary;
    }
  };

  xhttp.open(
    "GET",
    "https://raw.githubusercontent.com/juhye1215/pearson-test/main/test.json",
    true
  );
  xhttp.setRequestHeader("Accept", "StudentJson.json");
  xhttp.send();
}

if (window.addEventListener) {
  window.addEventListener("load", loadRequest, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", loadRequest);
}
