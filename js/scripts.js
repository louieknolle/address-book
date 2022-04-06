$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const phoneNumber1Input = $("input#phoneNumber1").val();
    const address1Input= $("input#address1").val();
    const email1Input = $("input#email1").val();
    const email2nd1Input = $("input#email2nd1").val();
    const favColor1Input = $("input#favColor1").val();

    const person2Input = $("input#person2").val();
    const phoneNumber2Input = $("input#phoneNumber2").val();
    const address2Input= $("input#address2").val();
    const email2Input = $("input#email2").val();
    const email2nd2Input = $("input#email2nd2").val();
    const favColor2Input = $("input#favColor2").val();

    const person3Input = $("input#person3").val();
    const phoneNumber3Input = $("input#phoneNumber3").val();
    const address3Input= $("input#address3").val();
    const email3Input = $("input#email3").val();
    const email2nd3Input = $("input#email2nd3").val();
    const favColor3Input = $("input#favColor3").val();

    $(".person1").text(person1Input);
    $(".phoneNumber1").text(phoneNumber1Input);
    $(".address1").text(address1Input);
    $(".email1").text(email1Input);
    $(".email2nd1").text(email2nd1Input);
    $(".favColor1").text(favColor1Input);

    $(".person2").text(person2Input);
    $(".phoneNumber2").text(phoneNumber2Input);
    $(".address2").text(address2Input);
    $(".email2").text(email2Input);
    $(".email2nd2").text(email2nd2Input);
    $(".favColor2").text(favColor2Input);

    $(".person3").text(person3Input);
    $(".phoneNumber3").text(phoneNumber3Input);
    $(".address3").text(address3Input);
    $(".email3").text(email3Input);
    $(".email2nd3").text(email2nd3Input);
    $(".favColor3").text(favColor3Input);

    $(".contact-name").show();
  });
});