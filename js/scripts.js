//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Address.prototype.fullAddress = function () {
  return this.street + ", " + this.city + ", " + this.state + ", " + this.zip;
}
//User Interface Logic
$(document).ready(function() {
  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();


    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function(){
      var inputtedStreet = $(this).find('input.new-address-street').val();
      var inputtedCity = $(this).find('input.new-address-city').val();
      var inputtedState = $(this).find('input.new-address-state').val();
      var inputtedZip = $(this).find('input.new-address-zip').val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newContact.addresses.push(newAddress);
    });

    $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address){
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    });
  });

    $('#new-first-name').val('');
    $('#new-last-name').val('');
    $('.new-address-street').val('');
    $('.new-address-city').val('');
    $('.new-address-state').val('');
    $('.new-address-zip').val('');
  });
});
