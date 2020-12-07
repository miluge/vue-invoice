import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:8081/',
    json: true
})

export default {
    async execute(method, resource, data) {
        // inject the accessToken for each request
        let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(req => {
            return req.data
        })
    },

    // Client
    getClients() {
        return this.execute('get', '/clients')
    },

    // Client
    getClientInvoice(id) {
        return this.execute('get', `/clients/${id}/invoices/${id}`)
    },
    getClient(id) {
        return this.execute('get', `/clients/${id}`)
    },
    createClient(data) {
        return this.execute('post', '/clients', data)
    },
    updateClient(id, data) {
        return this.execute('put', `/clients/${id}`, data)
    },
    deleteClient(id) {
        return this.execute('delete', `/clients/${id}`)
    },

    // Products
    getProducts() {
        return this.execute('get', '/products')
    },
    getProduct(id) {
        return this.execute('get', `/products/${id}`)
    },
    createProduct(data) {
        return this.execute('post', '/products', data)
    },
    updateProduct(id, data) {
        return this.execute('put', `/products/${id}`, data)
    },
    deleteProduct(id) {
        return this.execute('delete', `/products/${id}`)
    },

    //Invoice
    getInvoices() {
        return this.execute('get', '/invoices')
    },
    getInvoice(id) {
        return this.execute('get', `/invoices/${id}`)
    },
    getTaskInvoice(id) {
        return this.execute('get', `/invoices/${id}/tasks/${id}`)
    },
    createInvoice(data) {
        return this.execute('post', '/invoices', data)
    },
    updateInvoice(id, data) {
        return this.execute('put', `/invoices/${id}`, data)
    },
    deleteInvoice(id) {
        return this.execute('delete', `/invoices/${id}`)
    },

    //Task
    getTasks() {
        return this.execute('get', '/tasks')
    },
    getTask(id) {
        return this.execute('get', `/tasks/${id}`)
    },
    createTask(data) {
        return this.execute('post', '/tasks', data)
    },
    updateTask(id, data) {
        return this.execute('put', `/tasks/${id}`, data)
    },
    deleteTask(id) {
        return this.execute('delete', `/tasks/${id}`)
    }
}