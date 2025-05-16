import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../common/Modal/Modal';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { addDomain } from '../../store/actions/domainActions';
import { validateDomain } from '../../services/utils/validators';

const AddDomainModal = ({ isOpen, onClose, onSuccess }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        domain: '',
        registrar: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.domain) {
            newErrors.domain = 'Domain is required';
        } else if (!validateDomain(formData.domain)) {
            newErrors.domain = 'Please enter a valid domain';
        }

        if (!formData.registrar) {
            newErrors.registrar = 'Registrar is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        try {
            await dispatch(addDomain(formData));
            onSuccess();
            handleClose();
        } catch (error) {
            setErrors({ submit: error.message });
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setFormData({
            domain: '',
            registrar: '',
        });
        setErrors({});
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Add New Domain">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Domain Name
                    </label>
                    <Input
                        name="domain"
                        type="text"
                        placeholder="example.com"
                        value={formData.domain}
                        onChange={handleChange}
                        error={errors.domain}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Registrar
                    </label>
                    <Input
                        name="registrar"
                        type="text"
                        placeholder="GoDaddy, Namecheap, etc."
                        value={formData.registrar}
                        onChange={handleChange}
                        error={errors.registrar}
                    />
                </div>

                {errors.submit && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                        {errors.submit}
                    </div>
                )}

                <div className="flex justify-end space-x-3 pt-4">
                    <Button type="button" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="primary" loading={loading}>
                        Add Domain
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddDomainModal;