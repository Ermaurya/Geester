
  $(document).ready(function(){
    $('.heart').click(function(){
      $('.likes').toggleClass("heart-active")
      $('.heart').toggleClass("heart-active")
    });
  });
  $(document).ready(function(){
    $('.post-image').dblclick(function(){
      $('.likes').toggleClass("heart-active")
      $('.heart').toggleClass("heart-active")
    });
  });
  // var like= document.getElementById('#icon2');
      //  like.addEventListener('click',function like(){
      //  
      //  like.style.Color = "#FF0000";
      //  });
      // 