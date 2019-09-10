//Layout container
import master from 'src/layouts/master'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {

  tickets: {
    permission: 'iticke.tickets.manage',
    activated: true,
    path: '/iticke/tickets/index',
    name: 'qticket.admin.tickets.index',
    layout: require('@imagina/qticket/_layouts/admin/tickets/index').default,
    containerLayout: master,
    title: 'qticket.sidebar.adminTickets',
    icon: 'fas fa-layer-group',
    middleware: [auth,access]
  },
    ticketsCreate: {
    permission: 'iticke.tickets.create',
    activated: true,
    path: '/iticke/tickets/create',
    name: 'qticket.admin.tickets.create',
    layout: require('@imagina/qticket/_layouts/admin/tickets/form').default,
    containerLayout: master,
    title: 'qticket.sidebar.adminTicketsCreate',
    icon: 'fas fa-layer-group',
    middleware: [auth,access]
  },
  ticketsUpdate: {
    permission: 'iticke.tickets.edit',
    activated: true,
    path: '/iticke/tickets/:id',
    name: 'qticket.admin.tickets.edit',
    layout: require('@imagina/qticket/_layouts/admin/tickets/form').default,
    containerLayout: master,
    title: 'qticket.sidebar.adminTicketsUpdate',
    icon: 'fas fa-map-marked-alt',
    middleware: [auth,access]
  },

}
