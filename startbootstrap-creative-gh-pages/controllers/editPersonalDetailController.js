 $("#editDetails").click(function (){
    getUser();

});

$("#463").click(function (){
   alert("Ebwasasdddadadad")
});

function getUser(){
   $.ajax({
      url:"http://localhost:8080/bootapp/editStudent?id=S001",
      method:"GET",
      success: function (rest){
         console.log(rest)
         $("#username").val(rest.data.user.username);
         $("#firstName").val(rest.data.firstName);
         $("#lastName").val(rest.data.lastName);
         $("#emailAddress").val(rest.data.studentEmail);
         $("#birthdayDate").val(rest.data.birthday);
         $("#phoneNumber").val(rest.data.studentTelNumber);
         $("#parent-email").val(rest.data.parentEmail);
         $("#parent-contact").val(rest.data.parentTel);
      },
      error: function (err){
         alert("error")
      }
   })
}