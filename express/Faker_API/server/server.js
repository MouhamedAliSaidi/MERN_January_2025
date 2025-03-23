import express from "express";
import { faker } from '@faker-js/faker';

const createUser = () => ({
    id: faker.string.uuid(), 
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    password: faker.internet.password(),
});

const createCompany = () => ({
    id: faker.string.uuid(), // 
    name: faker.company.name(),
    address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
    },
});

const app = express();
const port = 8080;

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({
    user: createUser(),
    company: createCompany(),
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));

