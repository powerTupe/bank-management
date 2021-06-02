/*
function check_empty(){
    if (document.getElementById('name').value="" || document.getElementById('email').value = "" || document.getElementById('pass').value = "")
    {
        alert("FILL THE COMPLETE FORM");
    }
    else{
        document.getElementsByTagName('form').submit();
        alert("FORM SUBMITTED SUCCESFULLY");
    }
}*/

document.getElementById('size2').addEventListener('click',
function(){
   document.querySelector('.model-bg').style.display="flex"; 
});

document.querySelector('.close').addEventListener('click',
                                                 function(){
    document.querySelector('.model-bg').style.display ="none";
});

document.querySelector('.submit').addEventListener('click',
                                                  function(){
    document.querySelector('.model-bg').style.display = "none";
});
