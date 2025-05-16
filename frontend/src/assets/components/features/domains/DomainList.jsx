import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Search } from 'lucide-react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import DomainTable from './DomainTable';
import AddDomainModal from './AddDomainModal';
import { fetchDomains } from '../../store/actions/domainActions';

const DomainList = () => {
    const dispatch = useDispatch();
    const { domains, loading, error, totalCount } = useSelector((state) => state.domains);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        dispatch(fetchDomains({ page, pageSize, search: searchTerm }));
    }, [dispatch, page, pageSize, searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handleAddDomain = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
    };

    const handleDomainAdded = () => {
        dispatch(fetchDomains({ page, pageSize, search: searchTerm }));
        setIsAddModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Domains</h1>
                <Button
                    variant="primary"
                    icon={<Plus className="h-4 w-4" />}
                    onClick={handleAddDomain}
                >
                    Add Domain
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Search domains..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    icon={<Search className="h-5 w-5 text-gray-400" />}
                                />
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            {totalCount} {totalCount === 1 ? 'domain' : 'domains'}
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="p-6">
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                            {error}
                        </div>
                    </div>
                )}

                <DomainTable
                    domains={domains}
                    loading={loading}
                    page={page}
                    pageSize={pageSize}
                    totalCount={totalCount}
                    onPageChange={setPage}
                    onPageSizeChange={setPageSize}
                />
            </div>

            <AddDomainModal
                isOpen={isAddModalOpen}
                onClose={handleCloseModal}
                onSuccess={handleDomainAdded}
            />
        </div>
    );
};

export default DomainList;