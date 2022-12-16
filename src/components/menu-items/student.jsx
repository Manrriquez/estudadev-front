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
            title: 'Courses',
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
       
    ]
};

export default student;
