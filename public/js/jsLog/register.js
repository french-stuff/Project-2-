$(document).ready(function() {

    document.getElementById("submitRes").addEventListener('click', function(){
        if(!document.getElementById("userRes").value || !document.getElementById("passwordRes").value){
            document.getElementById("messageRes").textContent = "Fill the inputs"
            document.getElementById("messageRes").style.color = "red"
            document.getElementById("messageRes").style.display = "block"
        } else {
            let code = function() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                  return v.toString(16);
                });
            }

            let fullUser = {
                user: document.getElementById("userRes").value,
                password: document.getElementById("passwordRes").value,
                userCode: code
            }
            
            checkIfExists(fullUser.user, fullUser)
            

            document.getElementById("userRes").value = "";
            document.getElementById("passwordRes").value = "";
        }

            
            
        
        
    })

    function checkIfExists(name, fullUser){
        $.get("/api/users/newCheck/" + name, function(data){
            if(!data.length){
                userPost(fullUser)
            } else {
                document.getElementById("messageRes").textContent = "username unavailable"
                document.getElementById("messageRes").style.color = "red"
                document.getElementById("messageRes").style.display = "block"
            }
            
            
            

        })
    }


    function userPost(user){
        document.getElementById("messageRes").textContent = "account created"
        document.getElementById("messageRes").style.color = "green"
        document.getElementById("messageRes").style.display = "block"
        $.post("/api/users/new", user)
    }
});

