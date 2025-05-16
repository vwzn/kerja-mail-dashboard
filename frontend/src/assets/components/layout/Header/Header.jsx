import React from 'react';
import { Search, Plus } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-white p-4 shadow-sm flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Dashboard</h2>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                    <Plus className="mr-2" size={20} />
                    Add New
                </button>
            </div>
        </div>
    );
};

export default Header;