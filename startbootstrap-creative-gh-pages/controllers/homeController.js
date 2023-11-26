function addStudent(){

 var user={
   role:"Student",
  username:$("#username").val(),
  password:$("#password").val()
 }
var student={

}


 $.ajax({
  url:"http://localhost:8080/bootapp/home",
  method:"post",

  error(e){
   console.log(e.message);
  }
 })

 console.log(user);
}

$("#btnRegister").click(function (){
  addStudent();
});
