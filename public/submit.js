document.getElementById("uvInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      var str = document.getElementById("uvInput").value;
  
      if (!str.startsWith("https://")) {
        str = "https://" + str;
      }
  
      var encodedURL = "/uv/service/" + encodeURIComponent(
        str
          .toString()
          .split('')
          .map((char, ind) =>
            ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
          )
          .join('')
      );
  
      window.location.href = encodedURL;
    }
  });
  