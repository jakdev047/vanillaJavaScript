const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // Data not received
  });

function run() {
  // promise define
  const promise = new Promise((resolve) => {
    resolve("Promise Resolve");
  });

  setTimeout(() => {
    console.log("Set Time Out");
  });

  // promise call
  promise.then((res) => {
    console.log(res);
  });

  console.log("Log");
}

run();

// Excercise 01 ( promise )
const paymentSuccss = true;
const marks = 90;

// enrollment function
function enroll() {
  console.log("Course Enrollment is in progress...");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccss) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 2000);
  });

  return promise;
}

// progress function
function progress() {
  console.log("Course on progress...");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not enough marks to get the certificate.");
      }
    }, 3000);
  });

  return promise;
}

// getCertificate function
function getCertificate() {
  console.log("Preparing your certificate!");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Congrats! You got your certificate")
    }, 1000);
  });

  return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(value=> console.log(value))
    .catch(err => console.log(err))


// Excercise 02 ( async await )