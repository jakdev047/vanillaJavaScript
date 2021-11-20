// Excercise 01

const paymentSuccss = false;
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
      resolve("Congrats! You got your certificate");
    }, 1000);
  });

  return promise;
}

async function course() {
  try {
    await enroll(); // return promise ( resolve & reject exist)

    await progress(); // return promise ( resolve & reject exist)

    const message = await getCertificate(); // return promise ( only resolve exist)

    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();
