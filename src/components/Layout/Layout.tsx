import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';

export const Layout: FC = () => {
    return (
        <div className='page-wrapper'>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}