function validateForm() {
    var name = document.forms["myForm"]["name"].value.trim();
    var email = document.forms["myForm"]["email"].value.trim();
    var comments = document.forms["myForm"]["comments"].value.trim();
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    else if (comments == "") {
        alert("Comments must be filled out");
        return false;
      }
      console.log(`${name} and comments ${comments}`)
  }
