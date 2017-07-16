//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//User Interface Logic
$(document).ready(function() {
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();


    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $('ul#contacts').append('<li><span class="contact">' + newContact.firstName + "</span></li>");

    $('#new-first-name').val('');
    $('#new-last-name').val('');

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
});
  });
});
