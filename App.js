/*-------------------Phase 1 -----------------------*/
//Create an empty array
let helperArray = [];
/*Create a function that will return the
 api array data inside the empty 
 array named helperArray. 
 The data returned will be an array with 3 objects 
 Please check the data.json file*/
const showData = () => {
  //The fetch function  gets data from a server and returns a promise
  dataName = fetch("data.json");
  //We have to handle that promise by getting the http response and get the actual json body
  dataName
    .then((res) => res.json())
    //using res.json returns a promise so we have to handle that promise by getting the data
    .then((data) => {
      //Loop through each object and send them to the helperArray Array
      for (let i = 0; i < data.length; i++) {
        helperArray.push(data[i]);
      }
    });
  //The function will return the Array populated with 3 objects from the data.json file
  return helperArray;
};

/*-------------------Phase 2 -----------------------*/
const addElement = () => {
  //Loop through each object, create a div, header and list item
  data = showData();
  data.forEach((value) => {
    let divSection = document.createElement("div");
    let headerElement = document.createElement("h1");
    let listItem = document.createElement("p");
    headerElement.textContent = value.name;
    listItem.textContent = value.Temp;
    divSection.appendChild(headerElement);
    divSection.appendChild(listItem);
    document.body.appendChild(divSection);
  });
};
//To run this please type  showData() and then type  addElement() in the console
