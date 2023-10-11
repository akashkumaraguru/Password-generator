document.getElementById('generate').addEventListener('click', function(){
    var length=document.getElementById('length').value;
    var uppercase=document.getElementById('uppercase').checked;
    var lowercase=document.getElementById('lowercase').checked;
    var numbers=document.getElementById('numbers').checked;
    var special =document.getElementById('special').checked;

    if(!uppercase && !lowercase && !number && !special){
        document.getElementById('password').textContent='not valid password';
        return;
    }
    var charset='';
    if(uppercase){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowercase){
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if(number){
        charset += "1234567890";
    }
    if(special){
        charset += "@#$%&*?<:"
    }
    var password =' ';
    for (var i=0;i<length;i++){
        var randomIndex=Math.floor(Math.random() * charset.length);
        password +=charset[randomIndex];
    }
    document.getElementById('password').textContent=password;
})
