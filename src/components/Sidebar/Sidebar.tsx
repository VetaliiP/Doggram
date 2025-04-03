import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: FC = () => {
    return (
        <aside className='flex flex-col p-4' style={{ borderRight: "1px solid rgba(224, 224, 224, 0.2)" }} >
            <Link to="/">
                <p className='font-paw text-5xl tracking-[3px]'>Doggram</p>
            </Link>
            <div className='flex flex-col justify-start items-start gap-y-4 pt-6'>
                <Link to="/">
                    Main
                </Link>
                <button>
                    Search
                </button>
                <button>
                    Messages
                </button>
                <button>
                    Notification
                </button>
                <button>
                    Publication
                </button>
                <Link to="/profile">
                    Profile
                </Link>
            </div>
            <div className='flex-1'>

            </div>
            <div>
                <button>
                    More
                </button>
            </div>
        </aside>
    )
}