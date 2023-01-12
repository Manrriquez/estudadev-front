import { IconTypography, IconPalette, IconShadow, IconWindmill, IconDashboard } from '@tabler/icons';


const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconDashboard
};



const student = {
    id: 'Student',
    title: 'PAINEL DO ESTUDANTE',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/Student/Dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'courses',
            title: 'Cursos',
            type: 'item',
            url: '/Student/Courses',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'message',
            title: 'Mensagem Professor',
            type: 'item',
            url: '/Student/Message',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Perfil',
            type: 'item',
            url: '/Student/Profile',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'forgot-password',
            title: 'Trocar senha',
            type: 'item',
            url: '/Student/ForgotPassword',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'account-delete',
            title: 'Deletar conta',
            type: 'item',
            url: '/Student/DeleteAccount',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
      
    ]
};

export default student;
