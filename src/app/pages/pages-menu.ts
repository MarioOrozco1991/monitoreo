import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'POA',
    icon: 'settings-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
        {
          title: 'Centros de costo',
          link: '/pages/centros-de-costo',
        },
        {
          title: 'Resultados Institucionales',
          link: '/pages/resultados-institucionales',
        },
        {
          title: 'Políticas',
          children: [
            {
              title: 'Politica General de Gobierno',
              link: '/pages/politicas-gobierno',
            },
            {
              title: 'Políticas Públicas Asociadas',
              link: '/pages/politica-publica-asociada',
            },
          ]
        },
        {
          title: 'Productos y Subproductos',
          children: [
            {
              title: 'Productos',
              link: '/pages/productos',
            },
            {
              title: 'Subproductos',
              link: '/pages/subproductos',
            },
          ]
        },
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
              title: 'Listado de Acciones',
              link: '/pages/acciones',
            },
            {
              title: 'Programaciones',
              link: '/pages/programacion-acciones-poa',
            },
          ]
        },
        {
          title: 'Metas Físicas',
          children: [
            {
              title: 'Programaciones',
              link: '/pages/programaciones-metas-poa',
            },
          ]
        },  
    ], 
  },
  {
    title: 'POM',
    icon: 'bar-chart-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
        {
          title: 'Acciones',
          children: [
            {
              title: 'Programaciones',
              link: '/pages/programacion-acciones-pom',
            },
          ]
        },
        {
          title: 'Metas Físicas',
          children: [
            {
              title: 'Programaciones',
              link: '/pages/programaciones-metas-pom',
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
