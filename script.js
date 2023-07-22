const registerUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Register User end");
    }, 2000);
    resolve();
  });
};

const loginUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Login user end");
      resolve();
    }, 5000);
  });
};

const verifyEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Verify Mail end");
      resolve();
    }, 4000);
  });
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("data not found");
      console.log("4. Getting all data");
    }, 3000);
  });
};

const getAccessAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5. Access all resouces!");
      resolve();
    }, 1000);
  });
};

const otherWorks = () => {
  console.log(" Work all set!");
};

// asyncronas code run in background
// problem of nested callbacks known as collback hell
// solution in modern javascript is come in picture is known as " Promises"
// promises is the inbuild object or class in javascript

// registerUser(() => {
//   loginUser(() => {
//     verifyEmail(() => {
//       getData(() => {
//         getAccessAll();
//       });
//     });
//   });
// });

// registerUser()
//   .then(loginUser)
//   .then(verifyEmail)
//   .then(getData)
//   .then(getAccessAll);

const authentication = async () => {
  try {
    await registerUser();
    await loginUser();
    await verifyEmail();
    await getData();
    await getAccessAll();
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

authentication()
  .then(() => console.log("all done!"))
  .catch((err) => {
    console.log(err);
  });

otherWorks();
