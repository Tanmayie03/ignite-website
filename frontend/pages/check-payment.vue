<script setup>
const route = useRoute();
const formdata = new FormData();
formdata.append('ticket_id', route.query.ticket_id)
const data = reactive({
    status: false,
    pending: true
})
const {data:payment, pending, error} = await useFetch(`${useRuntimeConfig().public.base_url}${useRuntimeConfig().public.url_prefix}/public/event/${route.query.event_id}/confirm/${route.query.registration_id}`, 
    {
        method: `POST`,
        headers: {
            'accept' : 'application/json',
        },
        body: formdata,
    })
    if ( payment.value ){
        if(payment.value.data.hasOwnProperty('payment_status')){
            if(payment.value.data.payment_status == "COMPLETED"){
                data.status = true
            }   
        }
        else {
            data.status = true
        }
    } 
</script>
<template>
    <div>
        <div class="pt-16 text-2xl md:pt-0">
            <div v-if="!pending">
                <div v-if="data.status == true"> 
                      
                    <PaymentSuccess /> 
                </div>
                <div v-else>
                    <!-- pass props if error -->
                    <div v-if="!payment">
                        <PaymentUnsuccess :message="error.data.error"  />
                    </div>
                    <div v-else>
                        <PaymentUnsuccess />
                    </div>

                    
                </div>
            </div>
            <div v-else>
                Loading 
            </div>
        </div>
    </div>
</template>