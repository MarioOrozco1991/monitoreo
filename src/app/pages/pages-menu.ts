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
              link: '/pages/crear-encabezado',
            },
            {
              title: 'Editar encabezado  ',
              link: '/pages/editar-encabezado',
            },
          ]
        },
        {
          title: 'Ejes',
          children: [
            {
              title: 'Crear Ejes',
              link: '/pages/crear-ejes',
            },
            {
              title: 'Editar Ejes  ',
              // link: '/pages/editar-encabezado',
            },
          ]
        },
        {
          title: 'Acciones',
          children: [
            {
              title: 'Crear acción',
              link: '/pages/crear-accion',
            },
            {
              title: 'Editar acción',
            },
          ]
        },  
        {
          title: 'Programación de metas',
          children: [
            {
              title: 'Crear programación',
              link: '/pages/programaciones/crear',
            },
            {
              title: 'Reprogramación',
              link: '/pages/reprogramacion',
            },
            {
              title: 'Ver programaciones',
              link: '/pages/programaciones',
            },
          ]
        },
      ], 
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
  {
    title: 'POA',
    icon: 'bar-chart-2-outline',
    link: '/pages/poa',
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
