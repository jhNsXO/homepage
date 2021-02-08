function setBG() {
  var api = "ZWM1YmU1ZjkxNWI5NTY4ZjU1NDhjYWY4NDQ1ODkwZTI=";
  var dec = atob(api);
  let xhr = new XMLHttpRequest();
  // Request to open weather map
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?id=2778067&units=metric&appid="+dec+""
  );
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.responseText);
        var weather = json.weather[0].description;
        var clear = weather.indexOf("clear")
        var cloud = weather.indexOf("cloud")
        var rain = weather.indexOf("rain")
        var drizzle = weather.indexOf("drizzle")
        var thunder = weather.indexOf("thunder")
        var snow = weather.indexOf("snow")
        var sleet = weather.indexOf("sleet")
        var fog = weather.indexOf("fog")
        var mist = weather.indexOf("mist")
        var haze = weather.indexOf("haze")

        if (clear != -1) {
          document.getElementById("fullscreen-bg").innerHTML =
          "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"default.mp4\" type=\"video/mp4\"></video>";
        } else if (cloud != -1) {
          document.getElementById("fullscreen-bg").innerHTML =
          "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"cloud.mp4\" type=\"video/mp4\"></video>";
        } else if (rain != -1 || drizzle != -1 || thunder != -1) {
          document.getElementById("fullscreen-bg").innerHTML =
          "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"rain.mp4\" type=\"video/mp4\"></video>";
        } else if (snow != -1 || sleet !=-1) {
          document.getElementById("fullscreen-bg").innerHTML =
          "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"snow.mp4\" type=\"video/mp4\"></video>";
        } else if (fog != -1 || mist != -1 || haze != -1) {
          document.getElementById("fullscreen-bg").innerHTML =
          "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"fog.mp4\" type=\"video/mp4\"></video>";
        } else {
          document.getElementById("fullscreen-bg").innerHTML =
          "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"default.mp4\" type=\"video/mp4\"></video>";
        }
      }
    } else {
      console.log("error msg: " + xhr.status);
      document.getElementById("fullscreen-bg").innerHTML =
      "<video playsinline autoplay muted loop id=\"fullscreen-bg-video\"><source src=\"default.mp4\" type=\"video/mp4\"></video>";
    }
  };
  xhr.send();
}
