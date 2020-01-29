$(document).ready(function() {
        document.getElementById("reslogChange").addEventListener('click', function(){
            document.getElementById("messageLog").style.display = "none"
            document.getElementById("messageRes").style.display = "none"
        })
    
    
        document.getElementById("submitLog").addEventListener('click', function(){
            if(!document.getElementById("userLog").value || !document.getElementById("passwordLog").value){
                document.getElementById("messageLog").textContent = "Fill the inputs"
                document.getElementById("messageLog").style.color = "red"
                document.getElementById("messageLog").style.display = "block"
            } else {
                $.post("/api/users/log/" + document.getElementById("userLog").value + "&" + document.getElementById("passwordLog").value, function(data) {
                    if(!data || !data.length){
                        document.getElementById("messageLog").textContent = "This account doesn't exist"
                        document.getElementById("messageLog").style.color = "red"
                        document.getElementById("messageLog").style.display = "block"
                        document.getElementById("userLog").value = ""
                        document.getElementById("passwordLog").value = ""
                    } else {
                        localStorage.setItem('key', data[0].userCode)
                        document.getElementById("userLog").value = ""
                        document.getElementById("passwordLog").value = ""
                        location.href = "/feed"
                    }
                    
                })
            }
            
        
        });
    
})