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
    title: 'Estudante',
    type: 'group',
    children: [
        {
            id: 'student-dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/Student/Dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'student-courses',
            title: 'Cursos',
            type: 'item',
            url: '/Student/Courses',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'student-message',
            title: 'Mensagem Professor',
            type: 'item',
            url: '/Student/Message',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'configuration',
            title: 'Configurações',
            type: 'collapse',
            icon: icons.IconPalette,
            children: [
                {
                    id: 'student-profile',
                    title: 'Perfil',
                    type: 'item',
                    url: '/Student/Configuration/Profile',
                    breadcrumbs: false
                },
                {
                    id: 'student-password',
                    title: 'Trocar Senha',
                    type: 'item',
                    url: '/Student/Configuration/ResetPassword',
                    breadcrumbs: false
                },
                {
                    id: 'student-delete',
                    title: 'Deletar Conta',
                    type: 'item',
                    url: '/Student/Configuration/DeleteAccount',
                    breadcrumbs: false
                }
            ]
        },
       
    ]
};

export default student;
