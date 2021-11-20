// Call Back Hell

// Excercise 01
const paymentSuccss = true;
const marks = 90;

// enrollment function
function enroll(callback) {
  console.log("Course Enrollment is in progress...");

  setTimeout(() => {
    if (paymentSuccss) {
      callback();
    } else {
      console.log("Payment failed");
    }
  }, 2000);
}

// progress function
function progress(callback) {
  console.log("Course on progress...");

  setTimeout(() => {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not enough marks to get the certificate.");
    }
  }, 3000);
}

// getCertificate function
function getCertificate() {
  console.log("Preparing your certificate!");

  setTimeout(() => {
    console.log("Congrats! You got your certificate");
  }, 1000);
}


enroll(function(){
    progress(function(){
        getCertificate();
    })
})