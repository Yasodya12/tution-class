function displaySelectedImage(event, elementId) {
 const selectedImage = document.getElementById(elementId);
 const fileInput = event.target;

 if (fileInput.files && fileInput.files[0]) {
  const reader = new FileReader();

  reader.onload = function(e) {
   selectedImage.src = e.target.result;
  };

  reader.readAsDataURL(fileInput.files[0]);
 }
}

function saveImg(){
    let data2 = $("#customFile2")[0].files[0];
    var img = new FormData();

    img.append("img", data2)

    $.ajax({
        url:"http://localhost:8080/bootapp/home/imgSaave",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: img,
        success: function (resp) {
            alert("Successfully Uploaded");

        },
        error: function (err) {
            console.log(err);
        }
    });
}



function addStudent(){



    let data2 = $("#customFile2")[0].files[0];

    var user={
        userId:"U002",
        username:$("#username").val(),
        password:$("#password").val(),
    }


    var student={
        user:user,
        studentID:"S002",
        firstName:$("#firstName").val(),
        lastName:$("#lastName").val(),
        birthday:$("#birthdayDate").val(),

        gender:$('input[name="gender"]:checked').val(),
        studentEmail:$("#emailAddress").val(),
        studentTelNumber:$("#phoneNumber").val(),
        parentEmail:$("#parent-email").val(),
        parentTel:$("#parent-contact").val(),
        pictureFaceeee:$("#customFile2")[0].files[0].name,

    }



    // let user = $("#test");
    //
    // user.append("role", "Student");
    // let serialize = user.serialize();


    $.ajax({
        url:"http://localhost:8080/bootapp/home",
        method: 'post',
        async: true,
        // contentType: false,
        // processData: true,
        contentType: "application/json",
        data: JSON.stringify(student),
        success: function (resp) {
            alert("Successfully Uploaded");

        },
        error: function (err) {
           alert(err.responseJSON.message);
        }
    });




}

$("#btnRegister").click(function (){
  addStudent();
  // saveImg();
});

function sendMail(){
    let serialize = $("#contactForm").serialize();
    $.ajax({
       url:"http://localhost:8080/bootapp/home",
        method:"put",
        data:serialize,
        success: function (rest){
            alert("SUccess")
        },
        error: function (err){
           alert("error")
        }
    });
}

$("#submitButton").click(function (){
   sendMail();

});
