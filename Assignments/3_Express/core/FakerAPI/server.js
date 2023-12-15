const { faker } = require('@faker-js/faker')

const express = require("express");
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const createUser = () => {
  //create the newUser
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNum: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.database.mongodbObjectId()
  };
  return newUser;
}

const createCompany = () => {
  //create the newCompany
  const newCompany = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    address2: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipcode: faker.location.zipCode(),
      country: faker.location.country()
    }
  }
  return newCompany;
}

const users = [];
const companies = [];

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json(users);
});

app.get("/api/users/new", (req, res) => {
  users.push(createUser());
  res.json(users);
});

app.get("/api/companies/new", (req, res) => {
  companies.push(createCompany());
  res.json(companies);
});

app.get("/api/user/company", (req, res) => {
  companies.push(createCompany());
  companies.push(createCompany());
  companies.push(createCompany());
  companies.push(createCompany());
  users.push(createUser());
  users.push(createUser());
  users.push(createUser());
  users.push(createUser());
  res.json([users, companies]);

});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );