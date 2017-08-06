
let container = document.querySelector(".container");

for (i=0; i < customers.results.length; i++){
  let cust  = document.createElement("div");
   let first = customers.results[i].name.first;
   let last = customers.results[i].name.last;
    let email = customers.results[i].email;
    let Street = customers.results[i].location.street;
    let city = customers.results[i].location.city;
    let state = customers.results[i].location.state;
    let postcode = customers.results[i].location.postcode;
    let mobile = customers.results[i].phone;
    let ss = customers.results[i].id.value;
    cust.innerHTML = `
    <article>
<img src="${customers.results[i].picture.large}">
<h3>${first} ${last}</h3>
<p>${email}</p>
<p>${Street}</p>
<p>${city} ${state} ${postcode}</p>
<p>${mobile}</p>
<p>${ss}</p>

</article>
  `;

container.appendChild(cust);
}
