import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StatsCard from './StatsCard';
import { fetchOverviewStats } from '../../store/actions/overviewActions';

const OverviewStats = () => {
    const dispatch = useDispatch();
    const { stats, loading, error } = useSelector((state) => state.overview);

    useEffect(() => {
        dispatch(fetchOverviewStats());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                Failed to load statistics: {error}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
                title="Total Domains"
                value={stats?.totalDomains || 0}
                icon="globe"
                color="blue"
                trend={stats?.domainTrend}
            />
            <StatsCard
                title="Active Mailboxes"
                value={stats?.activeMailboxes || 0}
                icon="mail"
                color="green"
                trend={stats?.mailboxTrend}
            />
            <StatsCard
                title="Storage Used"
                value={`${stats?.storageUsed || 0} GB`}
                icon="database"
                color="purple"
                percentage={stats?.storagePercentage}
            />
            <StatsCard
                title="Monthly Emails"
                value={stats?.monthlyEmails || 0}
                icon="send"
                color="orange"
                trend={stats?.emailTrend}
            />
        </div>
    );
};

export default OverviewStats;