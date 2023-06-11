import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            form: {
                name: '',
                value: '',
            },
            contacts: [
                {
                    id: 1,
                    name: 'Egor',
                    value: '80(44) 111-22-33',
                    marked: false,
                },
            ],
        };
    },
    computed: {
        canCreate() {
            return this.form.value.trim() && this.form.name.trim();
        },
    },
    methods: {
        createContact() {
            const { ...contact } = this.form;
            this.contacts.push({ ...contact, id: Date.now(), marked: false });

            this.form.name = this.form.value = '';
        },
        markContact(id) {
            const contact = this.contacts.find((c) => c.id === id);
            contact.marked = true;
        },
        removeContact(id) {
            this.contacts = this.contacts.filter((c) => c.id !== id);
        },
    },
}).mount('#app');
