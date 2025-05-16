import React from 'react';
import { TrendingUp, TrendingDown, Globe, Mail, Database, Send } from 'lucide-react';

const StatsCard = ({ title, value, icon, color, trend, percentage }) => {
    const iconMap = {
        globe: Globe,
        mail: Mail,
        database: Database,
        send: Send,
    };

    const colorMap = {
        blue: {
            bg: 'bg-blue-50',
            text: 'text-blue-600',
            icon: 'text-blue-500',
        },
        green: {
            bg: 'bg-green-50',
            text: 'text-green-600',
            icon: 'text-green-500',
        },
        purple: {
            bg: 'bg-purple-50',
            text: 'text-purple-600',
            icon: 'text-purple-500',
        },
        orange: {
            bg: 'bg-orange-50',
            text: 'text-orange-600',
            icon: 'text-orange-500',
        },
    };

    const Icon = iconMap[icon] || Globe;
    const colorScheme = colorMap[color] || colorMap.blue;

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${colorScheme.bg}`}>
                    <Icon className={`h-6 w-6 ${colorScheme.icon}`} />
                </div>
                {trend !== undefined && (
                    <div className="flex items-center">
                        {trend > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span className={trend > 0 ? 'text-green-500' : 'text-red-500'}>
                            {Math.abs(trend)}%
                        </span>
                    </div>
                )}
            </div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            {percentage !== undefined && (
                <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${colorScheme.text}`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{percentage}% of total</p>
                </div>
            )}
        </div>
    );
};

export default StatsCard;