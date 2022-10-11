const list = ["luis@boolean.com", "igor@boolean.com", "leo@boolean.com", "marco@boolean.com"]


let mailUser = document.getElementById("mail");
let submit = document.getElementById("submit");
let answer = document.getElementById("answer")
let isFound = false;



submit.addEventListener("click", function() {
    console.log(mailUser.value);
    console.log(list.length);


    for (let i = 0; i < list.length; i++) {
        const thisElement = list[i];

        
       
        if (thisElement === mailUser.value) {
          isFound = true;
          
        } else {
            isFound = false;
        }
    }
    
    if (isFound) {
        answer.innerHTML = "mail corretto";
    } else {
        answer.innerHTML = "mail non corretto";
    }
})




