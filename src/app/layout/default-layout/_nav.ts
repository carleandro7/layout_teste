import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
   
  },

  {
    name: 'Components',
    title: true
  },

  {
    name: 'Inscrições',
    url: '/buttons',
    iconComponent: { name: 'cil-description' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Alunos',
    url: '/forms',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Range',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Layout',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
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
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands',
        icon: 'nav-icon-bullet'
      }
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
