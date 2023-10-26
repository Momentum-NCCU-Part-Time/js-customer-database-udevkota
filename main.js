const entryPoint = document.querySelector('.customerContainer');
//Save the entryPoint variable to interject JS 

function customerToDom (customerData) {
  //create a func that will take customer data and add it to the DOM

  let customerName = customerData.name.first.charAt(0).toUpperCase() + customerData.name.first.slice(1) + " " + customerData.name.last.charAt(0).toUpperCase() + customerData.name.last.slice(1)
  //Create customer's full name by adding first and last name properties and capitalize the first letter

  return `<div class="customerCard">
            <img src=${customerData.picture.large} class="customerHeadshot">
            <h2 class="customerNameText">${customerName}<h2>
            <h3><a href="${customerData.email}">${customerData.email}</a></h3>
            <ul class="customerInfo">
              <li class="addressLine1">${customerData.location.street.number} ${customerData.location.street.name}</li>
              <li class="addressLine2">${customerData.location.city}, ${nameToAbbr(customerData.location.state)} ${customerData.location.postcode}</li>
              <li class="dob">DOB: ${moment(customerData.dob.date).format("MMM D, YYYY")}</li>
              <li class="regSince">Customer Since: ${moment(customerData.registered.date).format("MMM D, YYYY")}</li>
            </ul>
          </div>`
      //Template literals
      //Save cutomer image to an image element
      //Save customer name that we created to h2 element
      //create a ul list for the address and date customer joined
      //create li for street number and street address
      //create li for city, state, zip. For state used nameToAbbr function from state.js
      //create li for date customer signed up and text of "Customer Since:" 
};

let allCustomers = customers.map((customer) => customerToDom(customer)).join('\n');
//map through each customer into the function and join all elements created from all customers with a new line betweeen each customer

entryPoint.innerHTML = allCustomers;
//Interject all elements for all customers into DOM