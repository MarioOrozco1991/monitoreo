import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'POA',
    icon: 'settings-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
        {
          title: 'Encabezado',
          children: [
            {
              title: 'Crear encabezado',
              link: '/pages/encabezado/crear',
            },
            {
              title: 'Editar encabezado  ',
              link: '/pages/editar-encabezado',
            },
          ]
        },
        {
          title: 'Ejes y objetivos',
          children: [
            {
              title: 'Ejes',
              link: '/pages/ejes',
            },
            {
              title: 'Objetivos Estratégicos',
              link: '/pages/objetivos-estrategicos',
            },
            {
              title: 'Objetivos Operativos',
              link: '/pages/objetivos-operativos',
            },
          ]
        },
        {
          title: 'Acciones',
          children: [
            {
              title: 'Crear acción',
              link: '/pages/acciones/crear',
            },
            {
              title: 'Modificación de Acciones',
              link: '/pages/acciones',
            },
          ]
        },  
      ], 
  },
  {
    title: 'Metas Físicas',
    children: [
      {
        title: 'Programaciones',
        link: '/pages/programaciones',
      },
      {
        title: 'Reprogramaciones',
        link: '/pages/reprogramaciones',
      },
    ]
  },
  {
    title: 'POM',
    icon: 'fas fa-poll',
    link: '/pages/revision',
  },
  {
    title: 'Revisión',
    icon: 'eye-outline',
    link: '/pages/revision',
  },
  {
    title: 'Aprobación',
    icon: 'checkmark-circle-2-outline',
    link: '/pages/aprobacion',
  },
  {
    title: 'Reportes',
    icon: 'file-text-outline',
    link: '/pages/reportes',
  },
  {
    title: 'Rol',
    icon: 'person-outline',
    children: [
        {
          title: 'Crear',
          link: '/pages/rol',
        },
      ],
  },
  {
    title: 'Actividades',
    icon: 'edit-2-outline',
    link: '/pages/seguimiento-actividades',
  },
//   {
//     title: 'Auth',
//     icon: 'lock-outline',
//     children: [
//       {
//         title: 'Login',
//         link: '/auth/login',
//       },
//       {
//         title: 'Register',
//         link: '/auth/register',
//       },
//       {
//         title: 'Request Password',
//         link: '/auth/request-password',
//       },
//       {
//         title: 'Reset Password',
//         link: '/auth/reset-password',
//       },
//     ],
//   },
];
