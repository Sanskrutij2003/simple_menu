document.addEventListener("DOMContentLoaded",function(){
    var clicked =true;
    var ref=document.getElementById("btn");
    const menu =document.getElementById('menu');
    ref.addEventListener("click",function(){
        if (clicked){
            clicked=false;
            menu.classList.remove('hide');
            menu.classList.remove('menu--fade-out');
            menu.classList.add('show')
            menu.classList.add('menu--fade-in');
            ref.innerHTML= '<i class="fas fa-times"></i>';
        }
        else{
            clicked= true;
            menu.classList.remove('menu--fade-in');
            menu.classList.add('menu--fada-out');
            setTimeout(function(){
                menu.classList.add('hide');
            },0.2*1000);
            ref.innerHTML='<i class="fas fa bars"></i>';
        }
        
    });
});