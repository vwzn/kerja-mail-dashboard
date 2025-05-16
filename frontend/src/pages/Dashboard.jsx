import React from 'react';
import { Globe, Mail, Users, Package } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { title: 'Active Domains', value: '3', icon: Globe, color: 'text-blue-600' },
        { title: 'Email Accounts', value: '8', icon: Mail, color: 'text-green-600' },
        { title: 'Storage Usage', value: '4.2 GB', icon: Package, color: 'text-purple-600' },
        { title: 'Email Traffic', value: '12.5K', icon: Users, color: 'text-orange-600' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6 ">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <stat.icon className={stat.color} size={24} />
                            <span className="text-sm text-gray-500">Total</span>
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;