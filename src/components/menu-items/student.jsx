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

const student = {
    id: 'Student',
    title: 'Estudante',
    type: 'group',
    children: [
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
