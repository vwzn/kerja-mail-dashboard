import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MoreVertical, Edit, Shield, Trash2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { deleteDomain, updateDomainDNS } from '../../store/actions/domainActions';

const DomainActions = ({ domain }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAction = async (action) => {
        setIsMenuOpen(false);

        switch (action) {
            case 'edit':
                navigate(`/domains/${domain.id}/edit`);
                break;
            case 'manage-dns':
                navigate(`/domains/${domain.id}/dns`);
                break;
            case 'verify-dns':
                setLoading(true);
                try {
                    await dispatch(updateDomainDNS(domain.id));
                } catch (error) {
                    console.error('DNS verification failed:', error);
                } finally {
                    setLoading(false);
                }
                break;
            case 'delete':
                if (window.confirm(`Are you sure you want to delete ${domain.name}?`)) {
                    setLoading(true);
                    try {
                        await dispatch(deleteDomain(domain.id));
                    } catch (error) {
                        console.error('Delete failed:', error);
                    } finally {
                        setLoading(false);
                    }
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
            >
                <MoreVertical className="h-5 w-5 text-gray-400" />
            </button>

            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-20">
                        <div className="py-1">
                            <button
                                onClick={() => handleAction('edit')}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Edit className="h-4 w-4 mr-3" />
                                Edit Domain
                            </button>
                            <button
                                onClick={() => handleAction('manage-dns')}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <ExternalLink className="h-4 w-4 mr-3" />
                                Manage DNS
                            </button>
                            <button
                                onClick={() => handleAction('verify-dns')}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <Shield className="h-4 w-4 mr-3" />
                                Verify DNS
                            </button>
                            <hr className="my-1" />
                            <button
                                onClick={() => handleAction('delete')}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                                <Trash2 className="h-4 w-4 mr-3" />
                                Delete Domain
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DomainActions;