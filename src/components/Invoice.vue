<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
      <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <div class="mb-6">
          <label
            class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold"
            >Example select</label
          >
          <select
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          disabled
          >
            <option>-- Selection de la dénomination sociale --</option>
            <option>Business 1</option>
            <option>Business 2</option>
            <option>Business 3</option>
          </select>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Nom de l'entreprise</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            disabled
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Adresse</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            disabled
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Ville</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            disabled
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Téléphone</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            disabled
          />
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <div class="mb-6">
          <label
            class="block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold"
            >Client</label>

          <t-select
            v-model="selected"
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            :options="clients"
            value-attribute="id"
            text-attribute="client_name"
          />
        </div>
        
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Email</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="email"
            name="field-name"
            placeholder="Write a text"
            v-model="selectedClient.client_email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Nom</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            v-model="selectedClient.clientName"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Adresse</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            v-model="selectedClient.client_address1"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Adresse 2</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            v-model="selectedClient.client_address2"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Code postal</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="number"
            name="field-name"
            placeholder="Write a text"
            v-model="selectedClient.client_postcode"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Ville</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
          />
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4 mb<-4 md:mb-0">
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for=""
            >Téléphone</label
          >
          <input
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            type="text"
            name="field-name"
            placeholder="Write a text"
            v-model="selectedClient.client_phone"
          />
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="invoiceDate"
            >Date de la facture :</label
          >
          <datepicker
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            placeholder="01/05/18"
            name="invoiceDate"
            v-model="invoice_date"
            ref="invoiceDate"
          ></datepicker>
        </div>
      </div>
    </div>

    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <th
          class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
        >
          No
        </th>
        <th
          colspan="3"
          class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
        >
          Description
        </th>
        <th
          class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
        >
          Prix
        </th>
        <th
          class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
        >
          Quantité
        </th>
        <th
          class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
        >
          Total
        </th>
      </thead>
      <tr v-for="(item, index) in items" :key="index">
        <td class="px-6 py-4 whitespace-no-wrap">
          {{ index + 1 }}
        </td>
        <td colspan="3" class="px-6 py-4 whitespace-no-wrap">
          <textarea
            v-model="item.description"
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            wrap="hard"
          ></textarea>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
          <input
              type="number"
            v-model.number="item.price"
            v-on:change="itemTotal(index)"
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          />
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
          <input
              type="number"
            v-model.number="item.qty"
            v-on:change="itemTotal(index)"
            class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          />
        </td>
        <td class="px-6 py-4 whitespace-no-wrap">
          {{ item.price * item.qty }}
        </td>
      </tr>
      <tr>
        <td class="px-6 py-4" colspan="6">
          <p>Total HT</p>
        </td>
        <td colspan="1" class="ml-8 px-6 py-4">
          {{ itemsTotal }}
        </td>
      </tr>
    </table>
    <div class="flex mt-8 justify-between mb-20">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="generateInvoice = true"
      >
        Generate Invoice
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="saveInvoice"
      >
        Save Invoice
      </button>
      <div class="flex">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          type="submit"
          @click="addItem(index)"
          name="add_item"
        >
          Ajouter
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          @click="removeItem(index)"
          name="delete_item"
        >
          Supprimer
        </button>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <section
        class="container mt-10 border px-4 py-6 text-sm mb-20"
        v-if="generateInvoice"
        :key="generateInvoice"
      >
        <div id="invoice" ref="invoice">
          <div class="flex flex-wrap -mx-4 -mb-4 md:mb-6">
            <div class="w-full flex items-center md:w-1/3 px-4 mb-4 md:mb-0">
              <img class="h-32" src="../assets/Sevy.png" />
            </div>
            <div
              class="w-full flex text-left text-sm md:w-1/3 px-4 mb-4 md:mb-0"
            >
              <address>
                <p>Sevy' Design</p>
                <p>13A Voie de la cité des près de vaux</p>
                <p>+33 7 82 98 63 31</p>
                <p>25000, Besançon</p>
                <p>sevy-design@outlook.com</p>
              </address>
            </div>
            <div
              class="w-full flex align-text-top text-sm text-left md:w-1/3 px-4 mb-4 md:mb-0"
            >
              <ul>
                <li>SIRET 379 603 681 00055</li>
                <li>SIREN 379 603 681</li>
                <li>APE 4333Z</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4 mb-10 mt-4">
            <div class="w-full md:w-1/2 px-4 mb-4">
              <div class="text-sm">
                <p>Facture no: {{ invoice_id }}</p>
                <p>Besançon le {{ formatDate(invoice_date) }}</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <address>
                <p>{{ clientName }}</p>
                <p>{{ client_address1 }}</p>
                <p>{{ client_address2 }}</p>
                <p>{{ client_city }}</p>
                <p>{{ client_postcode }}</p>
              </address>
            </div>
          </div>
          <!-- Table -->
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Prix
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantité
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total HT
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td class="border text-center">
                  <p>{{ index + 1 }}</p>
                </td>
                <td class="border text-center">
                  <textarea
                    v-model="item.description"
                    class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-white focus:bg-white focus:outline-none"
                    wrap="hard"
                    disabled
                  ></textarea>
                </td>
                <td class="border text-center">
                  <p>{{ item.price }}</p>
                </td>
                <td class="border text-center">
                  <p>{{ item.qty }}</p>
                </td>
                <td class="border text-center">
                  <p>{{ item.price * item.qty }}</p>
                </td>
              </tr>
              <tr>
                <td class="text-right border px-8 py-4" colspan="4">
                  <p>Total HT</p>
                </td>
                <td class="border px-8 py-4 text-center" colspan="1">
                  <p>{{ itemsTotal }}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-left mb-12 mt-12 text-sm">
            <p>Offre valables 30 jours</p>
            <p>
              Acompte 20 % à la signature, 30 % à l' intervention et le solde
              fin de chantier
            </p>
          </div>
          <div class="flex justify-center">
            <div class="w-1/3 text-left text-sm">
              <h2>Règlement</h2>
              <p>
                Par chèque à la réception de la facture à l'ordre de Mr
                <strong>LA ROSA</strong>
                <br />
                La loi 92-1142 indique que le règlment doit être fait a la date
                prévue
              </p>
            </div>
            <div class="w-1/3"></div>
            <div class="w-1/3 text-left">
              <h2>Bon pour accord</h2>
              <p>Signature:</p>
            </div>
          </div>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
          @click="exportPDF"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            ></path>
          </svg>
        </button>
      </section>
    </transition>
  </div>
</template>

<script>
import api from "@/api";
import html2pdf from "html2pdf.js";
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  name: "Invoice",
  components: {
    Datepicker,
  },
  data() {
    return {
      businessName: "",
      from_adress1: "",
      from_adress2: "",
      from_city: "",
      from_postcode: "",
      post_code: "",
      clientName: "",
      client_address1: "",
      client_address2: "",
      client_city: "",
      client_postcode: "",
      invoice_id: "",
      invoice_date: "",
      invoice_due: "",
      items: [
        {
          description: "",
          qty: "",
          price: "",
          discount: "",
          tax: "",
          tax_amount: "",
          total: "",
        },
      ],
      clients: [],
      model: {},
      taxtotal: 0,
      total: 0,
      account_name: "",
      account_sortcode: "",
      account_number: "",
      invoice_notes: "",
      generateInvoice: false,
      selected: null,
      selectedClient: {
        id: null,
        clientName: null,
        client_address1: null,
        client_address2: null,
        client_postcode: null,
        client_city: null,
        client_phone: null,
        client_email: null,
      },
    };
  },
  async created() {
    this.refreshClients();
  },
  watch: {
    selected() {
      this.selectedClient = this.clients.find(
        (client) => client.id == this.selected
      );
    },
  },

  methods: {
    async refreshClients() {
      this.loading = true;
      this.clients = await api.getClients();
      this.loading = false;
    },

    selectClient(client) {
      console.log(client);
      this.selectedClient = client;
    },

    addItem: function () {
      this.items.push({
        description: "",
        qty: "",
        price: "",
        discount: "",
        tax: "",
        discount_amount: "",
        tax_amount: "",
        total: "",
      });
    },

    removeItem(index) {
      this.items.splice(index, 1);
    },

    // Format Date
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },

    itemTotal(index) {
      let discountTotal;
      let taxTotal;
      let taxDisTotal;

      // Basic item total.
      const calculatedTotal = this.items[index].qty * this.items[index].price;
      this.items[index].total = calculatedTotal;

      // If discount applied.
      if (this.items[index].discount) {
        discountTotal = calculatedTotal * (this.items[index].discount / 100);
        this.items[index].discount_amount = discountTotal;
        this.items[index].total = calculatedTotal - discountTotal;
      } else if (
        this.items[index].discount === 0 ||
        this.items[index].discount === ""
      ) {
        this.items[index].discount_amount = 0;
      }

      // If tax applied.
      if (this.items[index].tax) {
        taxTotal = calculatedTotal * (this.items[index].tax / 100);
        this.items[index].tax_amount = taxTotal;
        this.items[index].total = calculatedTotal + taxTotal;
      } else if (this.items[index].tax === 0 || this.items[index].tax === "") {
        this.items[index].tax_amount = 0;
      }

      // If tax & discount applied.
      if (this.items[index].tax && this.items[index].discount) {
        taxDisTotal =
          (calculatedTotal - discountTotal) * (this.items[index].tax / 100);
        this.items[index].discount_amount = discountTotal;
        this.items[index].tax_amount = taxDisTotal;
        this.items[index].total = calculatedTotal - discountTotal + taxDisTotal;
      }
    },

    exportPDF() {
      const element = document.getElementById("invoice");
      const opt = {
        margin: 1,
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "cm", format: "letter", orientation: "p" },
      };

      html2pdf(element, opt);
    },

    async saveInvoice() {
      await api.createInvoice({ businessName: this.businessName });
      // this.model = {} // reset form
      // this.newClient = false;
      // await this.refreshClients()
    },
  },
  computed: {
    // Update running totals
    itemsTotal() {
      return this.items.reduce((acc, item) => acc + item.total, 0);
    },
  },
};
</script>

<style scoped>
</style>