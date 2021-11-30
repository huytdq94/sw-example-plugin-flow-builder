import template from './swag-example-plugin-modal.html.twig';
const { Component } = Shopware;

Component.register('swag-example-plugin-modal', {
    template,

    props: {
        sequence: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            tags: [],
        };
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.tags = this.sequence?.config?.tags || [];
        },

        onClose() {
            this.$emit('modal-close');
        },

        onAddAction() {
            const sequence = {
                ...this.sequence,
                config: {
                    ...this.config,
                    tags: this.tags
                },
            };

            this.$emit('process-finish', sequence);
        },
    },
});
