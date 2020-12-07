<template>
  <div class="container mx-auto px-4">
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Facture no
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-6 py-3 bg-gray-50">
                <router-link to="/factures">Créer une nouvelle facture</router-link>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="invoice in invoices" :key="invoice.id">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ invoice.id }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ invoice.date }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">{{ invoice.client_name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ invoice.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {{ invoice.total }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {{ invoice.date }}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </a>
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </a>
              </td>
            </tr>

            <!-- More rows... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import api from '@/api'
export default {
  name: "InvoiceList",
  data() {
    return {
      loading: false,
      invoices: [],
      model: {},
    }
  },
  async created() {
    this.refreshInvoices()
  },
  methods: {
    async refreshInvoices() {
      this.loading = true
      this.invoices = await api.getInvoices()
      this.loading = false
    },
    async populateInvoiceToEdit(invoice) {
      this.model = Object.assign({}, invoice)
    },
    async saveInvoice() {
      if (this.model.id) {
        await api.updateInvoice(this.model.id, this.model)
      } else {
        await api.createInvoice(this.model)
      }
      this.model = {} // reset form
      await this.refreshInvoices()
    },

    deleteInvoice: async function (id) {
      if (this.$dialog.confirm('Supprimer cette factures ?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deleteClient(id)
        await this.refreshClients()
      }
    },

    // validation mail
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>

<style scoped>

</style>