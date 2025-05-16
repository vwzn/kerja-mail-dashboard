import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Search, Filter } from 'lucide-react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import MailboxTable from './MailboxTable';
import AddMailboxModal from './AddMailboxModal';
import { fetchMailboxes } from '../../store/actions/mailboxActions';

const MailboxList = () => {
    const dispatch = useDispatch();
    const { mailboxes, loading, error, totalCount } = useSelector((state) => state.mailboxes);
    const { domains } = useSelector((state) => state.domains);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDomain, setSelectedDomain] = useState('');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        dispatch(fetchMailboxes({
            page,
            pageSize,
            search: searchTerm,
            domain: selectedDomain
        }));
    }, [dispatch, page, pageSize, searchTerm, selectedDomain]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handleDomainFilter = (e) => {
        setSelectedDomain(e.target.value);
        setPage(1);
    };

    const handleAddMailbox = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsAddModalOpen(false);
    };

    const handleMailboxAdded = () => {
        dispatch(fetchMailboxes({
            page,
            pageSize,
            search: searchTerm,
            domain: selectedDomain
        }));
        setIsAddModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Mailboxes</h1>
                <Button
                    variant="primary"
                    icon={<Plus className="h-4 w-4" />}
                    onClick={handleAddMailbox}
                >
                    Add Mailbox
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Search mailboxes..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    icon={<Search className="h-5 w-5 text-gray-400" />}
                                />
                            </div>
                        </div>
                        <div className="sm:w-64">
                            <select
                                value={selectedDomain}
                                onChange={handleDomainFilter}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">All Domains</option>
                                {domains.map((domain) => (
                                    <option key={domain.id} value={domain.id}>
                                        {domain.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        {totalCount} {totalCount === 1 ? 'mailbox' : 'mailboxes'}
                    </div>
                </div>

                {error && (
                    <div className="p-6">
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                            {error}
                        </div>
                    </div>
                )}

                <MailboxTable
                    mailboxes={mailboxes}
                    loading={loading}
                    page={page}
                    pageSize={pageSize}
                    totalCount={totalCount}
                    onPageChange={setPage}
                    onPageSizeChange={setPageSize}
                />
            </div>

            <AddMailboxModal
                isOpen={isAddModalOpen}
                onClose={handleCloseModal}
                onSuccess={handleMailboxAdded}
                domains={domains}
            />
        </div>
    );
};

export default MailboxList;