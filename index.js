console.log("fetching data...");

fetch("https://dummyjson.com/posts", { method: "GET" })
  .then((response) => {
    console.log("Response object", response);
    return response.json();
    
  })
  .then((posts) => {
    console.log("POSTS", posts);
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Waiting in line....");
         // reject("No Seats Left");
        }, 1000);
  });
})


  fetch("https://dummyjson.com/products", { method: "GET" })
  .then((response) => {
    console.log("Response object", response);
    return response.json();
  })
  .then((products) => {
    console.log("PRODUCTS", products);
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Waiting in line....");
          //reject("No Seats Left");
        }, 2000);
  });
})





  fetch("https://dummyjson.com/todos", { method: "GET" })
  .then((response) => {
    console.log("Response object", response);
    return response.json();
  })
  .then((todos) => {
    console.log("TODOS", todos);
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
             resolve("Waiting in line....");
          //reject("No Seats Left");
        }, 3000);
  });
})


/*promiseAPI1()
   /* .then((posts) => {
    console.log(posts, new Date());
    return promiseAPI1();
 
  .then((products) => {
    console.log(products, new Date());
    return promiseAPI2(); 
  })
  .then((todos) => {
    console.log(todos, new Date());
    return promiseAPI3();
  })

  .catch((err) => {
    console.log("ERROR", err);
    console.log("Sorry, Come again later");
  });

  promiseAPI1()
  */
