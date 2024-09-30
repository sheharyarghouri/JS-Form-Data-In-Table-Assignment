var firstnamevaluearr = [];
var lastnamevaluearr = [];
var addressvaluearr = [];
var mobilenovaluearr = [];
var emailvaluearr = [];
var passvaluearr = [];


//  Stored each input value in variable inside the function

function submit_form() {
    let firstnamevalue = document.getElementById("firstname").value;
    let lastnamevalue = document.getElementById("lastname").value;
    let addressvalue = document.getElementById("address").value;
    let mobilenovalue = document.getElementById("cell").value;
    let emailvalue = document.getElementById("email").value;
    let passvalue = document.getElementById("pass").value;

    // PUSH VARIABLE IN ARRAYS

    firstnamevaluearr.push(firstnamevalue);
    lastnamevaluearr.push(lastnamevalue)
    addressvaluearr.push(addressvalue)
    mobilenovaluearr.push(mobilenovalue)
    emailvaluearr.push(emailvalue)
    passvaluearr.push(passvalue)

    let userdata = document.getElementById("tablee");

    //  FIRST ROW DATA

    var fnameShow1 = document.getElementById("fname1");
    var lnameShow1 = document.getElementById("lname1");
    var addressShow1 = document.getElementById("address1");
    var numShow1 = document.getElementById("num1");
    var emailShow1 = document.getElementById("email1");
    var passShow1 = document.getElementById("pass1");

    fnameShow1.innerHTML = `
    ${firstnamevaluearr[0]}`

    lnameShow1.innerHTML = `
    ${lastnamevaluearr[0]}`

    addressShow1.innerHTML = `
    ${addressvaluearr[0]}`

    numShow1.innerHTML = `
    ${mobilenovaluearr[0]}`

    emailShow1.innerHTML = `
    ${emailvaluearr[0]}`

    passShow1.innerHTML = `
    ${passvaluearr[0]}`


    if (firstnamevaluearr[1] === undefined) {
        fnameShow1.innerHTML = `
    ${hello}`
    }
    // SECOND ROW DATA

    var fnameShow2 = document.getElementById("fname2");
    var lnameShow2 = document.getElementById("lname2");
    var addressShow2 = document.getElementById("address2");
    var numShow2 = document.getElementById("num2");
    var emailShow2 = document.getElementById("email2");
    var passShow2 = document.getElementById("pass2");

    fnameShow2.innerHTML = `
    ${firstnamevaluearr[1]}`

    lnameShow2.innerHTML = `
    ${lastnamevaluearr[1]}`

    addressShow2.innerHTML = `
    ${addressvaluearr[1]}`

    numShow2.innerHTML = `
    ${mobilenovaluearr[1]}`

    emailShow2.innerHTML = `
    ${emailvaluearr[1]}`

    passShow2.innerHTML = `
    ${passvaluearr[1]}`


    if (firstnamevaluearr[2] === undefined) {
        fnameShow2.innerHTML = `
    ${hello}`
    }

    // THIRD ROW DATA

    var fnameShow3 = document.getElementById("fname3");
    var lnameShow3 = document.getElementById("lname3");
    var addressShow3 = document.getElementById("address3");
    var numShow3 = document.getElementById("num3");
    var emailShow3 = document.getElementById("email3");
    var passShow3 = document.getElementById("pass3");

    fnameShow3.innerHTML = `
    ${firstnamevaluearr[2]}`

    lnameShow3.innerHTML = `
    ${lastnamevaluearr[2]}`

    addressShow3.innerHTML = `
    ${addressvaluearr[2]}`

    numShow3.innerHTML = `
    ${mobilenovaluearr[2]}`

    emailShow3.innerHTML = `
    ${emailvaluearr[2]}`

    passShow3.innerHTML = `
    ${passvaluearr[2]}`


    if (firstnamevaluearr[3] === undefined) {
        fnameShow3.innerHTML = `
    ${hello}`
    }
    // FOURTH ROW DATA

    var fnameShow4 = document.getElementById("fname4");
    var lnameShow4 = document.getElementById("lname4");
    var addressShow4 = document.getElementById("address4");
    var numShow4 = document.getElementById("num4");
    var emailShow4 = document.getElementById("email4");
    var passShow4 = document.getElementById("pass4");

    fnameShow4.innerHTML = `
    ${firstnamevaluearr[3]}`

    lnameShow4.innerHTML = `
    ${lastnamevaluearr[3]}`

    addressShow4.innerHTML = `
    ${addressvaluearr[3]}`

    numShow4.innerHTML = `
    ${mobilenovaluearr[3]}`

    emailShow4.innerHTML = `
    ${emailvaluearr[3]}`

    passShow4.innerHTML = `
    ${passvaluearr[3]}`
}