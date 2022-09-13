function anbutton() {
    document.getElementById("demo").style.display = "block";
    document.getElementById("anbutton").innerHTML = "Không còn tin nào hết";
    document.getElementById("anbutton").style.color = "gray";
}
$(document).ready(function(){
    $("#demo1").on("hide.bs.collapse", function(){
      $(".btn2").html('Mở rộng <i class="fa-solid fa-angle-down"></i>');
    });
    $("#demo1").on("show.bs.collapse", function(){
      $(".btn2").html('Thu gọn <i class="fa-solid fa-angle-up"></i>');
    });
});