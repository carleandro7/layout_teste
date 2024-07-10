import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
   
  },

  {
    name: 'Componentes',
    title: true
  },

  {
    name: 'Inscrições',
    url: '/buttons',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'Listagem',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Button groups',
      //   url: '/buttons/button-groups',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: 'Alunos',
    url: '/forms',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Cadastro',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Listagem',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Gráficos',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },
  {
    name: 'Relatórios',
    iconComponent: { name: 'cil-notes' },
    url: '/icons',
    children: [
      {
        name: 'Emissão',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        // badge: {
        //   color: 'success',
        //   text: 'FREE'
        // }
      },
      // {
      //   name: 'CoreUI Flags',
      //   url: '/icons/flags',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'CoreUI Brands',
      //   url: '/icons/brands',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  
  {
    title: true,
    name: 'Extras'
  },
 
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
