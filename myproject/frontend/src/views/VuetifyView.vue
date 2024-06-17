<template>
    <div>Hello Vuetify Test</div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                    v-bind="activatorProps"
                    color="surface-variant"
                    text="Open Dialog"
                    variant="flat"
                ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                    <table><tr><td>dddd</td></tr></table>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text="Close Dialog"
                        @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    <v-data-table :items="items"></v-data-table>
    <hr />
    <v-pagination :length="5" @update:modelValue="goPage"></v-pagination>
</template>
<script>
    export default {
        data(){
            return  {
                items : [
                            {
                            name: 'African Elephant',
                            species: 'Loxodonta africana',
                            diet: 'Herbivore',
                            habitat: 'Savanna, Forests',
                            },
                        ]
                    };
        },
        created(){},
        methods : {
            goPage(page){
                console.log(page);
            }
        }
    }
</script>
<style>
</style>