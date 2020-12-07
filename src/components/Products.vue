<template>
  <div class="container mx-auto">
  <div class="flex flex-col mb-20">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Désignation
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Prix
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
              <th class="px-6 py-3 bg-gray-50">
                <button @click="newProduct=true" class="border text-gray-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-xl my-4" type="submit"
                > Ajouter
                </button>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in products" :key="product.id">
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ client.clientName }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ client.client_email}}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">{{ client.client_address1 }}</div>
                <div class="text-sm leading-5 text-gray-900">{{ client.client_address2 }}</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ client.client_postcode }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {{ client.client_phone }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" @click.prevent="populateProductToEdit(client); newClient=true" class="text-indigo-600 hover:text-indigo-900">Editer</a>
                <a href="#" @click.prevent="deleteProduct(client.id)" class="text-indigo-600 hover:text-indigo-900">Supprimer</a>
              </td>
            </tr>
            <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    <!-- MOdal -->
    <t-modal v-model="newProduct" :header="(model.id ? 'Editer Produit ID#' + model.id : 'Nouveau Produit')">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
                <input id="first_name" class="mt-1 form-input block w-full border px-2 py-4 rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                <input id="last_name" class="mt-1 form-input block w-full border px-2 py-4 rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                <input id="email_address" class="mt-1 form-input block w-full border px-2 py-4 rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Téléphone</label>
                <input id="email_address" class="mt-1 form-input block w-full border px-2 py-4 rounded transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-5 text-gray-700">Country / Region</label>
                <select id="country" class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">Street address</label>
                <input id="street_address" class="mt-1 form-input block w-full  border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium leading-5 text-gray-700">City</label>
                <input id="city" class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="state" class="block text-sm font-medium leading-5 text-gray-700">State / Province</label>
                <input id="state" class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal_code" class="block text-sm font-medium leading-5 text-gray-700">ZIP / Postal</label>
                <input id="postal_code" class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
              Save
            </button>
          </div>
        </div>
      </form>
    </t-modal>
    <t-dialog
        name="named-dialog"
        icon="question"
        type="confirm"
        variant="demo"
    >
      <template slot="title">
        Delete user?
      </template>

      <p>This action cannot be undone.</p>

      <template slot="icon">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
      </template>
    </t-dialog>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: "Products",
  data() {
    return {
      loading: false,
      products: [],
      model: {},
      newProduct: false,
    }
  },
  async created() {
    this.refreshProducts()
  },
  methods: {
    async refreshProducts() {
      this.loading = true
      this.clients = await api.getProducts()
      this.loading = false
    },
    async populateProductToEdit(product) {
      this.model = Object.assign({}, product)
    },
    async saveProduct() {
      if (this.model.id) {
        await api.updateProduct(this.model.id, this.model)
      } else {
        await api.createProduct(this.model)
      }
      this.model = {} // reset form
      await this.refreshProducts()
    },
    async deleteProduct(id) {
      if (this.$dialog.confirm('Are you sure you want to delete this product?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deleteProduct(id)
        await this.refreshProducts()
      }
    }
  }
}
</script>