const pages = config('pages') // Get Pages from config

//Suscriptions
export default [
  {
    title: 'qticket.sidebar.adminGroup',
    icon: 'fas fa-map-marked-alt',
    children: [
      pages.qticket.tickets, // tickets setup
    ]
  },
]
