import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Calendar, CheckCircle, XCircle } from 'lucide-react';
import Table from '../../common/Table/Table';
import TablePagination from '../../common/Table/TablePagination';
import DomainActions from './DomainActions';

const DomainTable = ({
    domains,
    loading,
    page,
    pageSize,
    totalCount,
    onPageChange,
    onPageSizeChange,
}) => {
    const columns = [
        {
            key: 'name',
            header: 'Domain',
            render: (value, item) => (
                <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                        <Link
                            to={`/domains/${item.id}`}
                            className="text-sm font-medium text-gray-900 hover:text-blue-600"
                        >
                            {value}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                            {item.registrar}
                        </p>
                    </div>
                </div>
            ),
        },
        {
            key: 'status',
            header: 'Status',
            render: (value) => (
                <div className="flex items-center">
                    {value === 'active' ? (
                        <>
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm text-green-600">Active</span>
                        </>
                    ) : (
                        <>
                            <XCircle className="h-4 w-4 text-red-500 mr-2" />
                            <span className="text-sm text-red-600">Inactive</span>
                        </>
                    )}
                </div>
            ),
        },
        {
            key: 'mailboxCount',
            header: 'Mailboxes',
            render: (value) => (
                <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">{value}</span>
                </div>
            ),
        },
        {
            key: 'expiryDate',
            header: 'Expires',
            render: (value) => (
                <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">
                        {new Date(value).toLocaleDateString()}
                    </span>
                </div>
            ),
        },
        {
            key: 'dnsStatus',
            header: 'DNS',
            render: (value) => (
                <span
                    className={`inline-flex px-2 py-1 text-xs rounded-full ${value === 'configured'
                            ? 'bg-green-100 text-green-800'
                            : value === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                        }`}
                >
                    {value}
                </span>
            ),
        },
        {
            key: 'actions',
            header: '',
            render: (_, item) => <DomainActions domain={item} />,
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                data={domains}
                loading={loading}
            />
            <TablePagination
                page={page}
                pageSize={pageSize}
                totalCount={totalCount}
                onPageChange={onPageChange}
                onPageSizeChange={onPageSizeChange}
            />
        </>
    );
};

export default DomainTable;