// import JSON file to display questions
function loadRequest() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);

      document.getElementById("result1").innerHTML = obj.Tofle[0].result;
      document.getElementById("result2").innerHTML = obj.Tofle[1].result;
      document.getElementById("result3").innerHTML = obj.Tofle[2].result;
      document.getElementById("result4").innerHTML = obj.Tofle[3].result;
      document.getElementById("result5").innerHTML = obj.Tofle[4].result;
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
