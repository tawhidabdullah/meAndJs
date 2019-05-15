const getUser = (id, callback) => {
  let user = {
    id: id,
    name: "Tawhid Abdullah"
  };
  callback(user);
};

getUser(967021, printUserData);

function printUserData(data) {   
  console.log(data); 
  console.log(data); 
}
// get a life , tawhid abdullah
  