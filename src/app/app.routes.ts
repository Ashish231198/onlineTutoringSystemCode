import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {
        path: '', component: HomepageComponent,
        data: {
            title: ''
        }
    },
    {
        path: 'student',
        loadChildren: () => import('./student-module/student-module.module').then(m => m.StudentModuleModule)
    },
    {
        path: 'tutor',
        loadChildren: () => import('./tutor-module/tutor-module.module').then(m => m.TutorModuleModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule)
    },
];
