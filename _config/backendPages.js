
export default {

  tickets: {
    permission: 'iticke.tickets.manage',
    activated: true,
    path: '/iticke/tickets/index',
    name: 'qticket.admin.tickets.index',
    page: () => import('@imagina/qticket/_layouts/admin/tickets/index'),
    layout: () => import('src/layouts/master'),
    title: 'qticket.sidebar.adminTickets',
    icon: 'fas fa-layer-group',
    authenticated: true
  },
  // ticketsCreate: {
  //   permission: 'iticke.tickets.create',
  //   activated: true,
  //   path: '/iticke/tickets/create',
  //   name: 'qticket.admin.tickets.create',
  //   page: () => import('@imagina/qticket/_layouts/admin/tickets/form'),
  //   layout: () => import('src/layouts/master'),
  //   title: 'qticket.sidebar.adminTicketsCreate',
  //   icon: 'fas fa-layer-group',
  //   authenticated: true
  // },
  // ticketsUpdate: {
  //   permission: 'iticke.tickets.edit',
  //   activated: true,
  //   path: '/iticke/tickets/:id',
  //   name: 'qticket.admin.tickets.edit',
  //   page: () => import('@imagina/qticket/_layouts/admin/tickets/form'),
  //   layout: () => import('src/layouts/master'),
  //   title: 'qticket.sidebar.adminTicketsUpdate',
  //   icon: 'fas fa-map-marked-alt',
  //   authenticated: true
  // },

}
