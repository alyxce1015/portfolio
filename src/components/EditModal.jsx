import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';

export default function EditModal({ item, onSave, onClose }) {
  const [form, setForm] = useState({
    date: '',
    role: '',
    company: '',
    desc: '',
  });

  // Pre-fill form when item changes
  useEffect(() => {
    if (item) {
      setForm({
        date:    item.date    || '',
        role:    item.role    || '',
        company: item.company || '',
        desc:    item.desc    || '',
      });
    }
  }, [item]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = () => {
    onSave({ ...item, ...form });
    onClose();
  };

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h3 className="modal__title">Edit Experience</h3>

        <label className="modal__label">Date Range</label>
        <input
          className="modal__input"
          type="text"
          placeholder="e.g. 2022 — Present"
          value={form.date}
          onChange={handleChange('date')}
          autoFocus
        />

        <label className="modal__label">Job Title</label>
        <input
          className="modal__input"
          type="text"
          placeholder="e.g. Senior Engineer"
          value={form.role}
          onChange={handleChange('role')}
        />

        <label className="modal__label">Company &amp; Type</label>
        <input
          className="modal__input"
          type="text"
          placeholder="e.g. Acme Corp · Full-time"
          value={form.company}
          onChange={handleChange('company')}
        />

        <label className="modal__label">Description</label>
        <textarea
          className="modal__textarea"
          placeholder="What did you do here?"
          value={form.desc}
          onChange={handleChange('desc')}
        />

        <div className="modal__actions">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
