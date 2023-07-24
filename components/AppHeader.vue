<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="flex h-16 items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:flex-1 lg:items-center">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="" />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Flyout menus -->
                  <PopoverGroup class="inset-x-0 bottom-0 px-4">
                    <div class="flex h-full justify-center space-x-8">
                      <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
                        class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name
                        }}</a>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">Your Company</span>
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
                </a>

                <div class="flex flex-1 items-center justify-end">
                  <a href="#" class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">Search</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = {
  pages: [
    { name: 'SUV', href: '/' },
    { name: 'Truck', href: '/' },
  ],
}

const open = ref(false)
</script>