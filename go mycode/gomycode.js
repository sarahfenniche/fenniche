var titre=document.getElementById("titre");
titre.style.color="white";

var getText=document.getElementById("changestyle")

function Weight(){
    event.preventDefault();
    getText.style.fontWeight="bold";
}

function Style(){
    event.preventDefault();
    getText.style.fontStyle="italic";
}

function Decoration(){
    event.preventDefault();
    getText.style.textDecoration="underline";
}

function Size(){
    event.preventDefault();
    var x=document.getElementById("bam").value;
    getText.style.fontSize=x;
}


function Family(){
    event.preventDefault();
    var y=document.getElementById("splash").value;
    getText.style.fontFamily=y;
}
$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });
  $(document).ready(function(){
    $("#image1").click(function(){
      $("#myModal").modal();
    });
  });

  $(document).ready(function(){
    $("#image2").click(function(){
      $("#myModal").modal();
    });
  });

  $(document).ready(function(){
    $("#image3").click(function(){
      $("#myModal").modal();
    });
    
  });
// c'est pour animer une image 

  $(".jquery").mouseenter(function(){
   $(this).css({"background-color":"black"});
   $(this).animate({opacity:0.5});
  });

  $(".jquery").mouseleave(function(){
    $(this).animate({opacity:1});
    $(this).css({"background-color":"hsl(0, 0%, 0%,0)"});

   });



   $(".jquery2").mouseenter(function(){
    $(this).css({"background-color":"black"});
    $(this).animate({opacity:0.5});
   });
 
   $(".jquery2").mouseleave(function(){
     $(this).animate({opacity:1});
    $(this).css({"background-color":"hsl(0, 0%, 0%,0)"});


    });




    $(".jquery3").mouseenter(function(){
      $(this).css({"background-color":"black"});
      $(this).animate({opacity:0.5});
     });
   
     $(".jquery3").mouseleave(function(){
       $(this).animate({opacity:1});
    $(this).css({"background-color":"hsl(0, 0%, 0%,0)"});

      });