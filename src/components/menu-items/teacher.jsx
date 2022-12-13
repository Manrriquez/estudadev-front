// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const teacher = {
    id: 'Teacher',
    title: 'Professor',
    type: 'group',
    children: [
        {
            id: 'teacher-courses',
            title: 'Courses',
            type: 'item',
            url: '/Teacher/Courses',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'teacher-message',
            title: 'Mensagem Professor',
            type: 'item',
            url: '/Teacher/Message',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
       
    ]
};

export default teacher;
