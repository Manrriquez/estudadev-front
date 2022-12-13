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
    id: 'student',
    title: 'Estudante',
    type: 'group',
    children: [
        {
            id: 'student-courses',
            title: 'Courses',
            type: 'item',
            url: '/student/student-courses',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'student-message',
            title: 'Mensagem Professor',
            type: 'item',
            url: '/student/student-message',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
       
    ]
};

export default student;
