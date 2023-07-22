const datas = [
  { name: "sachin", profession: "software developer" },
  { name: "anuj", profession: "software developer" },
  { name: "Soham", profession: "software developer" },
];

const getPserson = () => {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${index} - ${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

// const addPerson = (callbacks) => {
//   setTimeout(() => {
//     datas.push({ name: "sumit", profession: "software developer" });
//     callbacks();
//   }, 5000);
// };

// addPerson(() => {
//     getPserson();
//   });

const addPerson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push({ name: "sumit", profession: "software developer" });
      let err = true;
      if (!err) {
        resolve();
      } else {
        reject("kuch gadwad hai");
      }
    }, 2000);
  });
};

// addPerson()
//   .then(getPserson)
//   .catch((err) => {
//     console.log(err);
//   });

const auth = async () => {
  try {
    await addPerson();
    getPserson();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

auth()
  .then(() => {
    console.log("all set");
  })
  .catch((err) => console.log(err));
