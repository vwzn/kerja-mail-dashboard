import React from 'react';
import { Mail } from 'lucide-react';

const Mailboxes = () => {
    const mailboxes = [
        { id: 1, email: 'admin@example.com', domain: 'example.com', usage: '2.5 GB', quota: '5 GB' },
        { id: 2, email: 'info@example.com', domain: 'example.com', usage: '1.2 GB', quota: '5 GB' },
        { id: 3, email: 'support@mysite.co.id', domain: 'mysite.co.id', usage: '500 MB', quota: '2 GB' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Mailbox Management</h1>

            <div className="bg-white rounded-lg shadow">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email Address
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Domain
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Storage Usage
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mailboxes.map((mailbox) => (
                                <tr key={mailbox.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <Mail className="mr-2 text-gray-400" size={16} />
                                            <span className="font-medium">{mailbox.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {mailbox.domain}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: `${(parseFloat(mailbox.usage) / parseFloat(mailbox.quota)) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600">{mailbox.usage} / {mailbox.quota}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                                        <button className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Mailboxes;