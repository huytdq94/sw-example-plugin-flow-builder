import { ACTION } from '../../constant/swag-example-plugin.constant';

const { Component } = Shopware;

Component.override('sw-flow-sequence-action', {
    computed: {
        modalName() {
            if (this.selectedAction === ACTION.CREATE_TAG) {
                return 'swag-example-plugin-modal';
            }

            return this.$super('modalName');
        },

        actionDescription() {
            const actionDescriptionList = this.$super('actionDescription');

            return {
                ...actionDescriptionList,
                [ACTION.CREATE_TAG] : (config) => this.getCreateTagDescription(config),
            };
        },
    },

    methods: {
        getCreateTagDescription(config) {
            const tags = config.tags.join(', ');

           return this.$tc('swag-example-plugin.descriptionTags', 0, {
                tags
            });
        },

        getActionTitle(actionName) {
            if (actionName === ACTION.CREATE_TAG) {
                return {
                    value: actionName,
                    icon: 'default-badge-help',
                    label: this.$tc('swag-example-plugin.titleCreateTag'),
                }
            }

            return this.$super('getActionTitle', actionName);
        },
    },
});
