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
          title: 'Ejes',
          children: [
            {
              title: 'Crear Eje',
              link: '/pages/ejes/crear',
            },
            {
              title: 'Ver Ejes',
              link: '/pages/ejes',
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
        {
          title: 'Programación de metas',
          children: [
            {
              title: 'Crear programación',
              link: '/pages/programaciones/crear',
            },
            {
              title: 'Reprogramación',
              link: '/pages/reprogramaciones/crear',
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
