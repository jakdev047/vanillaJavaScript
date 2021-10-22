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
  const promise = new Promise(resolve=>{
    resolve('Promise Resolve');
  })

  setTimeout(() => {
    console.log("Set Time Out")
  });

  // promise call
  promise.then((res)=> {
    console.log(res)
  });

  console.log("Log")
}


run();