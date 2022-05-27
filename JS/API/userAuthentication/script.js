var username = document.getElementById("username");
var password = document.getElementById("password");
let submit = document.getElementById("submit");
var flag = false; // for second option

/**-------First Option------------------------------------------------------------------- */

submit.addEventListener("click", () => {
  fetch("user.json")
    .then((response) => response.json())
    .then((json) => {
      let checkData = json.findIndex((user) => {
        return user.username == username.value && user.password == password.value;
      });
      console.log(checkData);
      if (checkData == -1) {
        alert("Error! Please check your data");
      } else {
        alert("Welcome");
      }
    });
});


/**----------------Second Option---------------------------------------------------------- */

// submit.addEventListener("click",()=>{

//     fetch("user.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(jsondata => {
//     for (let index = 0; index < jsondata.length; index++) {
//         const element = jsondata[index];

//         if(element.username === username.value && element.password === password.value){
//            flag = true;
//             break;
//         }
//     }
//     if (flag) {
//         alert('true')
//     }else{
//         alert('false')
//     }

// });

// })

/**-------------------------------------------------------------------------- */





const handleClick = () => {
  const mailValue = document.getElementById("input-mail").value;
  const passwordValue = document.getElementById("input-password").value;
  console.log(mailValue, passwordValue);

  fetch("db.json")
    .then((response) => response.json())
    .then((json) => {
      let checkData = json.users.findIndex((user) => {
        return user.email == mailValue && user.password == passwordValue;
      });
      console.log(checkData);
      if (checkData == -1) {
        alert("Error! Please check your data");
      } else {
        alert("Welcome");
      }
    });
};
