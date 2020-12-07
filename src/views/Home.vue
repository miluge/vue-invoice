<template>

<div>
  <section class="pt-8 pb-2 bg-blueGray-50">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/3 px-3 mb-6">
          <div class="p-6 shadow bg-white rounded">
            <div class="flex justify-between">
              <p class="text-sm md:text-base text-blueGray-400">Client</p>
              <span class="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Ce mois-ci</span>
            </div>
            <p class="text-3xl lg:text-4xl font-bold font-heading">250 324</p>
            <p class="text-sm md:text-base text-blueGray-500">
              <span class="text-green-600">+18%</span>
              Depuis la dernière semaine
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6">
          <div class="p-6 shadow bg-white rounded">
            <div class="flex justify-between">
              <p class="text-sm md:text-base text-blueGray-400">Factures</p>
              <span class="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Ce mois-ci</span>
            </div>
            <p class="text-3xl lg:text-4xl font-bold font-heading">250 324</p>
            <p class="text-sm md:text-base text-blueGray-500">
              <span class="text-green-600">+18%</span>
              Depuis la dernière semaine
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6">
          <div class="p-6 shadow bg-white rounded">
            <div class="flex justify-between">
              <p class="text-sm md:text-base text-blueGray-400">Projects</p>
              <span class="text-xs py-1 px-2 rounded-full font-semibold text-blue-600 bg-blue-100 uppercase">Ce mois-ci</span>
            </div>
            <p class="text-3xl lg:text-4xl font-bold font-heading">252</p>
            <p class="text-sm md:text-base text-blueGray-500">
              <span class="text-red-500">-18.5%</span>
              Depuis la dernière semaine
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-blueGray-50">
    <div class="container px-4 mx-auto">
      <table class="w-full bg-white rounded shadow">
        <thead>
        <tr class="text-left text-xs"><th class="pl-6 py-4 font-normal">Projet</th><th class="px-4 py-4 font-normal">Budget</th><th class="px-4 py-4 font-normal">Status</th><th class="px-4 py-4 font-normal">Client</th><th class="px-4 py-4 font-normal">Progrès</th></tr>
        </thead>
        <tbody>
        <tr class="border-t border-blueGray-100">
          <td class="flex px-6 py-4 text-xs">
            <div>
              <p class="font-semibold">Rénovation</p>
            </div>
          </td>
          <td class="px-4 py-2 text-xs font-semibold">5000</td>
          <td class="px-4 py-2 text-xs">
            <span class="inline-block py-1 px-3 text-xs text-blue-600 bg-blue-100 font-semibold uppercase rounded-full">En cours</span>
          </td>
          <td class="px-4 py-2">
            <div>
              <p>Client Name</p>
            </div>
          </td>
          <td>
            <div class="flex pl-4 items-center">
              <p class="text-xs font-semibold">50%</p>
              <div class="ml-2 w-24 h-1 rounded-xl bg-blueGray-200">
                <div class="w-12 h-1 rounded-xl bg-blue-500"></div>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>


</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex';



export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters({
      // map this user to this.$store.getters.user
      user: "user"
    })
  }
}
</script>
