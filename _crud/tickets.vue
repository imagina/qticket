<template></template>

<script>
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
              {name: 'status', label: this.$tr('ui.form.status'), field: 'statusLabel', align: 'center'},
              {
                name: 'created_at', label: this.$tr('ui.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('ui.form.actions'), align: 'left'},
            ],
            requestParams: {},
            actions : []
          },
          update: {
            title: this.$tr('qticket.layout.updateTicket'),
            requestParams: {}
          },
          delete: true,
          formLeft: {
            options: {value:null},
            subject: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: this.$tr('qticket.layout.form.subject'),
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              }

            },
            message: {
              value: '',
              type: 'html',
              isTranslatable: false,
              props : {
                label: this.$tr('qticket.layout.form.message'),
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              }
            },

          },
          formRight: {

            status : {
              value: '1',
              type: 'select',
              isFakeField : false,
              props:{
                label: `${this.$tr('ui.form.status')}:`,
                options: [
                  {label: this.$tr('qticket.layout.form.statuses.open'), value: '0'},
                  {label: this.$tr('qticket.layout.form.statuses.pending'), value: '1'},
                  {label: this.$tr('qticket.layout.form.statuses.closed'), value: '2'},
                ],
              }
            },
            priority : {
              value: '1',
              isFakeField : false,
              type: 'select',
              props:{
                label: `${this.$tr('qticket.layout.form.priority')}:`,
                options: [
                  {label: this.$tr('qticket.layout.form.priorities.low'), value: '0'},
                  {label: this.$tr('qticket.layout.form.priorities.high'), value: '1'},
                  {label: this.$tr('qticket.layout.form.priorities.critical'), value: '2'},
                ],
              }
            },
            type : {
              value: '1',
              isFakeField : false,
              type: 'select',
              props:{
                label: `${this.$tr('ui.form.type')}:`,
                options: [
                  {label: this.$tr('qticket.layout.form.types.question'), value: '0'},
                  {label: this.$tr('qticket.layout.form.types.complain'), value: '1'},
                  {label: this.$tr('qticket.layout.form.types.claim'), value: '2'},
                  {label: this.$tr('qticket.layout.form.types.request'), value: '3'},
                ],
              }
            },
            fullName: {
              value: '',
              type: 'input',
              props:{
                label: this.$tr('qticket.layout.form.fullName'),
                rules: [
                  val => !!val || this.$tr('ui.message.fieldRequired')
                ],
              },
              isTranslatable: false,
            },
            phone: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props:{
                label: this.$tr('ui.form.phone'),
              }
            },
            email: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props:{
                label: this.$tr('qticket.layout.form.email'),
              }
            },
          },
        }
      }
    },
  }
</script>
