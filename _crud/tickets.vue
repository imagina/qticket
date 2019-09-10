<template></template>
<script>
  //Component
  import crud from '@imagina/qcrud/_components/crud'

  export default {
    computed: {
      crudData() {
        return {
          apiRoute: 'apiRoutes.qticket.tickets',
          permission: 'iticke.tickets',
          create: {
            title: this.$tr('qticket.layout.newTicket'),
            // to: 'qticket.admin.tickets.create',
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('ui.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'subject', label: this.$tr('qticket.layout.form.subject'), field: 'subject', align: 'center'},
              {name: 'status', label: this.$tr('ui.form.status'), field: 'status', align: 'center'},
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {},
            actions : [

            ]
          },
          update: {
            title: this.$tr('qticket.layout.updateTicket'),
            requestParams: {}
          },
          delete: true,
          formLeft: {
            options: {value:null},
            subject: {
              label: this.$tr('qticket.layout.form.subject'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: false,
            },
            message: {
              label: this.$tr('qticket.layout.form.message'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: false,
            },
            fullName: {
              label: this.$tr('qticket.layout.form.fullName'),
              value: '',
              type: 'text',
              isRequired: true,
              isTranslatable: false,
            },
            phone: {
              label: this.$tr('ui.form.phone'),
              value: '',
              type: 'text',
              isRequired: false,
              isTranslatable: false,
            },
            email: {
              label: this.$tr('qticket.layout.form.email'),
              value: '',
              type: 'email',
              isRequired: false,
              isTranslatable: false,
            },

          },
          formRight: {

            status : {
              label: `${this.$tr('ui.form.status')}:`,
              value: '1',
              type: 'select',
              options: [
                {label: this.$tr('qticket.layout.form.statuses.open'), id: '0'},
                {label: this.$tr('qticket.layout.form.statuses.pending'), id: '1'},
                {label: this.$tr('qticket.layout.form.statuses.closed'), id: '2'},
              ],
            },
            priority : {
              label: `${this.$tr('qticket.layout.form.priority')}:`,
              value: '1',
              type: 'select',
              options: [
                {label: this.$tr('qticket.layout.form.priorities.low'), id: '0'},
                {label: this.$tr('qticket.layout.form.priorities.high'), id: '1'},
                {label: this.$tr('qticket.layout.form.priorities.critical'), id: '2'},
              ],
            },
            type : {
              label: `${this.$tr('ui.form.type')}:`,
              value: '1',
              type: 'select',
              options: [
                {label: this.$tr('qticket.layout.form.types.question'), id: '0'},
                {label: this.$tr('qticket.layout.form.types.complain'), id: '1'},
                {label: this.$tr('qticket.layout.form.types.claim'), id: '2'},
                {label: this.$tr('qticket.layout.form.types.request'), id: '3'},
              ],
            },

          },
        }
      }
    },
  }
</script>
