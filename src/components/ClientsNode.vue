<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-left inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nom
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Adresse
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Département
                  </th>
                  <th
                    class="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Téléphone
                  </th>
                  <th class="px-6 py-3 bg-gray-50">
                    <button
                      @click="btnNew"
                      class="border text-gray-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-xl my-4"
                      type="submit"
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
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        ></path>
                      </svg>
                    </button>
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="client in clients" :key="client.id">
                  <td class="px-10 py-4 whitespace-no-wrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-6 w-6">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ client.clientName }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ client.client_email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ client.client_address1 }}
                    </div>
                    <div class="text-sm leading-5 text-gray-900">
                      {{ client.client_address2 }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {{ client.client_postcode }}
                    </span>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
                  >
                    {{ client.client_phone }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium"
                  >
                    <button
                      @click.prevent="
                        populateClientToEdit(client);
                        newClient = true;
                      "
                      class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 mr-2"
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      @click.prevent="deleteClient(client.id)"
                      class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-red-700"
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
                          d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <!-- Next clienT -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Tailwind Modal -->
    <t-modal
      v-model="newClient"
      ref="newClientConfirm"
      :header="model.id ? 'Editer Client ID#' + model.id : 'Nouveau Client'"
    >
      <form @submit.prevent="saveClient">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-4">
                <label
                  for="clientname"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Nom</label
                >
                <input
                  v-model="model.clientName"
                  id="clientname"
                  class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="client_email"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Email address</label
                >
                <input
                  v-model="model.client_email"
                  id="client_email"
                  class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="client_phone"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Téléphone</label
                >
                <input
                  v-model="model.client_phone"
                  id="client_phone"
                  class="mt-1 form-mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="street_address"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Street address</label
                >
                <input
                  v-model="model.client_address1"
                  id="street_address"
                  class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6">
                <label
                  for="street_address"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Street address 2</label
                >
                <input
                  v-model="model.client_address2"
                  id="street_address"
                  class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  for="client_city"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >Ville</label
                >
                <input
                  v-model="model.client_city"
                  id="client_city"
                  class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="state"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >State / Province</label
                >
                <input
                  id="state"
                  class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  for="client_postcode"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >ZIP / Postal</label
                >
                <input
                  v-model="model.client_postcode"
                  id="client_postcode"
                  class="mt-1 form-input block w-full border px-2 py-4 rounded-lg shadow transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  aria-required="true"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </t-modal>
    <t-dialog
      ref="dialogConfirm"
      name="named-dialog"
      icon="question"
      type="confirm"
      variant="delete"
    >
      <template slot="title"> Delete user? </template>

      <p>This action cannot be undone.</p>

      <template slot="icon">
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
            d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
          />
        </svg>
      </template>
    </t-dialog>
    <Alert
      :visible="alertVisible"
      :type="alertType"
      :text="alertText"
      position="top-right"
      color="success"
      title="Success"
      description=""
    />
  </div>
</template>

<script>
import api from "@/api";
import Alert from "./Alert";

export default {
  name: "ClientsNode",
  components: {
    Alert,
  },
  data() {
    return {
      loading: false,
      clients: [],
      model: {},
      newClient: false,
      alertVisible: false,
      alertType: "success",
      alertText: "",
    };
  },
  async created() {
    await this.refreshClients();
  },
  methods: {
    async refreshClients() {
      this.loading = true;
      this.clients = await api.getClients();
      this.loading = false;
    },
    async populateClientToEdit(client) {
      this.model = Object.assign({}, client);
    },
    async saveClient() {
      if (this.model.id) {
        await api
          .updateClient(this.model.id, this.model)
          .then(() => {
            this.handleAlert(
              "success",
              "Le client a été correctement modifié !"
            );
            this.model = {
              id: null,
              clientName: null,
              client_email: null,
              client_phone: null,
              client_address1: null,
              client_address2: null,
              client_city: null,
              client_postcode: null,
            };
          })
          .catch(() => {
            this.handleAlert(
              "error",
              "Il y a eu une erreur dans la modification du client !"
            );
          });
      } else {
        await api
          .createClient(this.model)
          .then(() => {
            this.handleAlert(
              "success",
              "Le client a été correctement ajouté !"
            );
            this.model = {
              id: null,
              clientName: null,
              client_email: null,
              client_phone: null,
              client_address1: null,
              client_address2: null,
              client_city: null,
              client_postcode: null,
            };
          })
          .catch(() => {
            this.handleAlert(
              "error",
              "Il y a eu une erreur dans la création du client !"
            );
          });
      }
      this.model = {}; // reset form
      this.newClient = false;
      await this.refreshClients();
    },
    deleteClient: async function (id) {
      this.$dialog.confirm("Supprimer le client ?").then((result) => {
        console.log(result);
        if (result.isOk) {
          // if we are editing a client we deleted, remove it from the form
          if (this.model.id === id) {
            this.model = {};
          }
          api
            .deleteClient(id)
            .then(() => {
              this.handleAlert(
                "success",
                "Le client a été correctement supprimé !"
              );
              this.refreshClients();
            })
            .catch(() => {
              this.handleAlert(
                "error",
                "Il y a eu une erreur dans la suppression du client !"
              );
            });
        }
      });
    },
    btnNew() {
      this.model = {
        id: null,
        clientName: null,
        client_email: null,
        client_phone: null,
        client_address1: null,
        client_address2: null,
        client_city: null,
        client_postcode: null,
      };
      this.newClient = true;
    },

    handleAlert(type, text) {
      this.alertType = type;
      this.alertText = text;
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
</style>