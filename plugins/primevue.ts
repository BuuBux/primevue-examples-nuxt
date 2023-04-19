import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('PrimeButton', Button)
    nuxtApp.vueApp.component('PrimeInputText', InputText)
    nuxtApp.vueApp.component('PrimeToast', Toast)
    //other components that you need
})
