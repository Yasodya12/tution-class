
// function test(){
//     // Create the div element with class "col-lg-4 col-sm-6"
//     var divElement = document.createElement("div");
//     divElement.className = "col-lg-4 col-sm-6";
//
// // Create the 'a' element with class "portfolio-box" and set the title attribute
//     var aElement = document.createElement("a");
//     aElement.className = "portfolio-box";
//     aElement.title = "Grade 5 Scholarship";
//
// // Create the 'img' element with specified styles and set the src and alt attributes
//     var imgElement = document.createElement("img");
//     imgElement.style.height = "350px";
//     imgElement.style.width = "650px";
//     imgElement.className = "img-fluid";
//     imgElement.src = "assets/img/portfolio/thumbnails/grade5.jpg";
//     imgElement.alt = "...";
//
// // Create the div element with class "portfolio-box-caption"
//     var divCaptionElement = document.createElement("div");
//     divCaptionElement.className = "portfolio-box-caption";
//
// // Create the inner div elements with class "project-category" and "project-name"
//     var categoryElement = document.createElement("div");
//     categoryElement.className = "project-category text-white-50";
//     categoryElement.innerText = "Grade 5 Scholarship";
//
//     var nameElement = document.createElement("div");
//     nameElement.className = "project-name";
//     nameElement.innerText = "Practice Papers";
//
// // Create the button element with class "btn btn-success" and set data-bs attributes
//     var buttonElement = document.createElement("button");
//     buttonElement.className = "btn btn-success";
//     buttonElement.setAttribute("data-bs-toggle", "modal");
//     buttonElement.setAttribute("data-bs-target", "#exampleModal-1");
//     buttonElement.innerText = "Join";
//
// // Append the elements to build the structure
//     divCaptionElement.appendChild(categoryElement);
//     divCaptionElement.appendChild(nameElement);
//     divCaptionElement.appendChild(buttonElement);
//
//     aElement.appendChild(imgElement);
//     aElement.appendChild(divCaptionElement);
//
//     divElement.appendChild(aElement);
//
//     let elementById = document.getElementById("Elemtn");
//     elementById.appendChild(divElement);
// // Append the 'div' element to the document body or any other parent element
//
//
// }


function getClasses(){
    $.ajax({
        url:"http://localhost:8080/bootapp/classes",
        method:"GET",
        success: function (rest){
           let data = rest.data;



           data.forEach(function (clz){

               console.log(clz.category);

               var divElement = document.createElement("div");
               divElement.className = "col-lg-4 col-sm-6";

// Create the 'a' element with class "portfolio-box" and set the title attribute
               var aElement = document.createElement("a");
               aElement.className = "portfolio-box";
               aElement.title = clz.category;

// Create the 'img' element with specified styles and set the src and alt attributes
               var imgElement = document.createElement("img");
               imgElement.style.height = "350px";
               imgElement.style.width = "650px";
               imgElement.className = "img-fluid";
               imgElement.src = `classImages/${clz.pic}`;
               imgElement.alt = "...";

// Create the div element with class "portfolio-box-caption"
               var divCaptionElement = document.createElement("div");
               divCaptionElement.className = "portfolio-box-caption";

// Create the inner div elements with class "project-category" and "project-name"
               var categoryElement = document.createElement("div");
               categoryElement.className = "project-category text-white-50";
               categoryElement.innerText = clz.category;

               var nameElement = document.createElement("div");
               nameElement.className = "project-name";
               nameElement.innerText = clz.subject;

// Create the button element with class "btn btn-success" and set data-bs attributes
               var buttonElement = document.createElement("button");
               buttonElement.className = "btn btn-success";
               buttonElement.setAttribute("data-bs-toggle", "modal");
               buttonElement.setAttribute("data-bs-target", `#${clz.classID}`);
               buttonElement.innerText = "Join";

// Append the elements to build the structure
               divCaptionElement.appendChild(categoryElement);
               divCaptionElement.appendChild(nameElement);
               divCaptionElement.appendChild(buttonElement);

               aElement.appendChild(imgElement);
               aElement.appendChild(divCaptionElement);

               divElement.appendChild(aElement);

               let elementById = document.getElementById("Elemtn");
               elementById.appendChild(divElement);
           });

        },
        error:function (err){
            alert("Error");
        }
    })
}


function loadCard(){
    $.ajax({
        url:"http://localhost:8080/bootapp/classes",
        method:"GET",
        success: function (rest){
            let data = rest.data;
            data.forEach(function (clz){
                $(document).ready(function() {
                    // Create the modal structure
                    var modalElement = $('<div>').addClass('modal fade modal-dialog-scrollable modal-xl').attr({'id': clz.classID, 'tabindex': '-1', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true'});
                    var modalDialogElement = $('<div>').addClass('modal-dialog');
                    var modalContentElement = $('<div>').addClass('modal-content');
                    var modalHeaderElement = $('<div>').addClass('modal-header');
                    var modalTitleElement = $('<h1>').addClass('modal-title fs-5').attr('id', 'exampleModalLabel').text('Modal title');
                    var closeButtonElement = $('<button>').addClass('btn-close').attr({'type': 'button', 'data-bs-dismiss': 'modal', 'aria-label': 'Close'});

                    modalHeaderElement.append(modalTitleElement, closeButtonElement);

                    var modalBodyElement = $('<div>').addClass('modal-body');
                    var cardElement = $('<div>').addClass('card overflow-hidden text-center');
                    var avatarLinkElement = $('<a>').attr('href', '#!.html').addClass('avatar xl rounded-circle bg-gray bg-opacity-10 p-1 position-relative mt-n5 d-block mx-auto');
                    var avatarImageElement = $('<img>').attr('src', 'https://bootdey.com/img/Content/avatar/avatar1.png').addClass('avatar-img img-fluid rounded-circle').attr('alt', '');
                    var nameElement = $('<h5>').addClass('mb-0 pt-3');
                    var nameLinkElement = $('<a>').attr('href', '#!.html').addClass('text-reset').text(`test 1 ${clz.name}`);
                    var smallElement = $('<span>').addClass('text-muted small d-block mb-4').text('Full stack developer');
                    console.log(clz.name);
                    nameElement.append(nameLinkElement);
                    avatarLinkElement.append(avatarImageElement);
                    cardElement.append(avatarLinkElement, nameElement, smallElement);

                    var cardBodyElement = $('<div>').addClass('card-body p-0');
                    var paragraphElement = $('<p>').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut autem dolores esse fugiat fugit, harum inventore itaque necessitatibus, nulla placeat possimus quam quas reiciendis rem sunt tempora unde voluptates.');

                    var rowElement = $('<div>').addClass('row mx-0 border-top border-bottom');
                    var col1Element = $('<div>').addClass('col-md-6 mx-auto text-center py-3');
                    var col1HeaderElement = $('<h5>').addClass('mb-0').text('1000+');
                    var col1SmallElement = $('<small>').addClass('text-muted').text('Students');

                    col1Element.append(col1HeaderElement, col1SmallElement);

                    rowElement.append(col1Element);

                    var listGroupElement = $('<ul>').addClass('list-group list-group-flush');

                    var listItem1Element = $('<li>').addClass('list-group-item px-3 d-flex align-items-center justify-content-between');
                    var listItem1SpanElement = $('<span>').addClass('text-muted small').text('Class Fee');
                    var listItem1StrongElement = $('<strong>').text('RS: 3000');

                    listItem1Element.append(listItem1SpanElement, listItem1StrongElement);

                    var listItem2Element = $('<li>').addClass('list-group-item px-3 d-flex align-items-center justify-content-between');
                    var listItem2SpanElement = $('<span>').addClass('text-muted small').text('Time');
                    var listItem2StrongElement = $('<strong>').text('Saturday 1-5pm');

                    listItem2Element.append(listItem2SpanElement, listItem2StrongElement);

                    var listItem3Element = $('<li>').addClass('list-group-item px-3 d-flex align-items-center justify-content-between');
                    var listItem3SpanElement = $('<span>').addClass('text-muted small d-flex align-items-center');
                    var listItem3IconElement = $('<span>').addClass('align-middle lh-1 me-1 size-5 border border-4 border-success rounded-circle d-inline-block');
                    var listItem3SpanTextElement = $('<span>').text('Pay');
                    var listItem3DivElement = $('<div>').addClass('text-end');

                    listItem3SpanElement.append(listItem3IconElement, listItem3SpanTextElement);

                    var imgContainerElement = $('<div>').addClass('d-flex justify-content-center mb-4');
                    var selectedAvatarElement = $('<img>').attr('id', 'selectedAvatar').attr('src', 'assets/img/cash-payment-icon-5.png').addClass('rounded-circle').css({'width': '100px', 'height': '100px', 'object-fit': 'cover'}).attr('alt', 'example placeholder');

                    var fileInputContainerElement = $('<div>').addClass('d-flex justify-content-center');
                    var fileInputButtonElement = $('<div>').addClass('btn btn-primary btn-rounded');
                    var fileInputLabelElement = $('<label>').addClass('form-label text-white').attr('for', 'customFile2').text('Choose file');
                    var fileInputElement = $('<input>').attr({'name': 'pictureFaceeee', 'type': 'file', 'class': 'form-control d-none', 'id': 'customFile2'}).on('change', function(event) {
                        displaySelectedImage(event, 'selectedAvatar');
                    });

                    fileInputButtonElement.append(fileInputLabelElement, fileInputElement);
                    fileInputContainerElement.append(fileInputButtonElement);
                    listItem3DivElement.append(imgContainerElement.append(selectedAvatarElement), fileInputContainerElement);

                    listItem3Element.append(listItem3SpanElement, listItem3DivElement);

                    listGroupElement.append(listItem1Element, listItem2Element, listItem3Element);

                    cardBodyElement.append(paragraphElement, rowElement, listGroupElement);

                    cardElement.append(cardBodyElement);

                    modalBodyElement.append($('<div>').addClass('mb-3 mb-lg-5').append(cardElement));

                    var modalFooterElement = $('<div>').addClass('modal-footer');
                    var closeButtonFooterElement = $('<button>').addClass('btn btn-secondary').attr({'type': 'button', 'data-bs-dismiss': 'modal'}).text('Close');
                    var payButtonElement = $('<button>').addClass('btn btn-primary').attr('type', 'button').text('Pay');

                    modalFooterElement.append(closeButtonFooterElement, payButtonElement);

                    modalContentElement.append(modalHeaderElement, modalBodyElement, modalFooterElement);
                    modalDialogElement.append(modalContentElement);
                    modalElement.append(modalDialogElement);

                    // Append the modal to the document body or any other parent element
                    $('#cardID').append(modalElement);
                });
            });
        }
    });



}

loadCard();

getClasses();