$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

   
   const nameInput = $("input#name").val();
   const lastnameInput = $("input#lastname").val();
   const addressInput = $("input#address").val();
   const numberInput = $("input#number").val();









    $(".name").text(nameInput);
    $(".lastname").text(lastnameInput);
    $(".address").text(addressInput);
    $(".number").text(numberInput);


    $("#addressbook").show();

  })
})