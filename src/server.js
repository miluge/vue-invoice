const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')
const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: '0oaokqb84Ldb7HLeS5d5',
    issuer: 'https://dev-7933736.okta.com/oauth2/default'
})

let app = express()
app.use(cors())
app.use(bodyParser.json())

// verify JWT token middleware
app.use((req, res, next) => {
    // require every request to have an authorization header
    if (!req.headers.authorization) {
        return next(new Error('Authorization header is required'))
    }
    let parts = req.headers.authorization.trim().split(' ')
    let accessToken = parts.pop()
    oktaJwtVerifier.verifyAccessToken(accessToken, 'api://default')
        .then(jwt => {
            req.user = {
                uid: jwt.claims.uid,
                email: jwt.claims.sub
            }
            next();
        })
        .catch(next) // jwt did not verify!
})

//SQLite db
let database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite'
})

// Define our Client model
// id, createdAt, and updatedAt are added by sequelize automatically

let Client = database.define('clients', {
    client_name: Sequelize.STRING,
    client_address1: Sequelize.STRING,
    client_address1: Sequelize.STRING,
    client_postcode: Sequelize.STRING,
    client_city: Sequelize.STRING,
    client_phone: Sequelize.STRING,
    client_email: Sequelize.STRING
})

// Define our Product model
// id, createdAt, and updatedAt are added by sequelize automatically
let Product = database.define('products', {
    product_name: Sequelize.STRING,
    product_qty: Sequelize.TEXT,
    product_price: Sequelize.TEXT,
    product_details: Sequelize.STRING,
    product_type: Sequelize.STRING
})

// Define our Invoice model
// id, createdAt, and updatedAt are added by sequelize automatically
let Invoice = database.define('invoices', {
    invoice_date: Sequelize.DATE,
    invoice_qty: Sequelize.TEXT,
    invoice_total: Sequelize.TEXT,
    invoice_details: Sequelize.STRING,
    invoice_type: Sequelize.STRING,
})

let Task = database.define('tasks', {
    task_price: Sequelize.DATE,
    task_qty: Sequelize.TEXT,
    task_total: Sequelize.TEXT,
    task_details: Sequelize.STRING
})

// One to many for Invoice has one or many Tasks
Invoice.hasMany(Task);
Task.belongsTo(Invoice);

// One to many for Client has one or many invoice
Client.hasMany(Invoice);
Invoice.belongsTo(Client);


// Initialize finale
finale.initialize({
    app: app,
    sequelize: database
})

// Create the dynamic REST resource for our client model
let clientResource = finale.resource({
    model: Client,
    endpoints: ['/clients', '/clients/:id', '/clients/:id/invoices/:id'],
    sort: {
        param: 'orderby',
        attributes: [ 'clientName', 'client_city', 'id', 'postcode' ]
    },
    pagination: true
})

// Create the dynamic REST resource for our product model
let productResource = finale.resource({
    model: Product,
    endpoints: ['/products', '/products/:id'],
})

// Create the dynamic REST resource for our invoice model
let invoiceResource = finale.resource({
    model: Invoice,
    endpoints: ['/invoices', '/invoices/:id', '/invoices/:id/tasks/:id'],
})

// Create the dynamic REST resource for our invoice model
let taskResource = finale.resource({
    model: Task,
    endpoints: ['/tasks', '/tasks/:id'],
})

// Resets the database and launches the express app on :8081
database
    .sync({ force: true })
    .then(() => {
        app.listen(8081, () => {
            console.log('listening to port localhost:8081')
        })
    })