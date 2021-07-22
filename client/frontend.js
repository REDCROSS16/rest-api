import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue ({
    el:'#app',
    data() {
        return {
            form: {
                name: '',
                value: '',
            },
            contacts: [
                {
                    id:1,
                    name: "Александр",
                    value: '33 382-20-11',
                    marked: false,
                }
            ]
        }
    },
    computed : {
        canCreate() {

        }
    }
    methods : {
        createContact() {
            const {...contact} = this.form;
            console.log(contact)

            this.form.name = this.form.value = '';
            this.contacts.push({...contact, id: Date.now()});
        },
        markContact(id) {
            const contact = this.contacts.find(c => c.id === id);
            contact.marked = true;
        },
        removeContact(id) {

        }

    },
})