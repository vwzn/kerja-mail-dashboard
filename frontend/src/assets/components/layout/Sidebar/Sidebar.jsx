import { NavLink } from 'react-router-dom';
import { Mail, Globe, Settings, BarChart3 } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { path: '/dashboard', icon: BarChart3, label: 'Overview' },
        { path: '/domains', icon: Globe, label: 'Domains' },
        { path: '/mailboxes', icon: Mail, label: 'Mailboxes' },
        { path: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
            <div className="flex items-center mb-8">
                <Mail className="mr-2" size={32} />
                <h1 className="text-xl font-bold">Kerjamail</h1>
            </div>

            <nav className="space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `w-full flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-800'
                            }`
                        }
                    >
                        <item.icon className="mr-3" size={20} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;