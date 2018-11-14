  window.onload=function(){
    var search = document.getElementById("search");
    var xhr = new XMLHttpRequest();
    
    search.addEventListener("click",function(){
      xhr.onreadystatechange=function(){
      //xhr.addEventListener("readystatechange",function(){
            alert(xhr.responseText);
            
        }; 
        
        xhr.open("GET","request.php?q=definition",true)
        xhr.send();
});

};