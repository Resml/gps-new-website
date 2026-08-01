import React, { useState, useEffect, useRef } from 'react';

export default function QuoteForm({ selectedSpindle, setSelectedSpindle }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    spindleBrand: '',
    spindleType: '',
    priority: 'standard',
    symptoms: ''
  });
  
  const [fileDetails, setFileDetails] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedSpindle) {
      let derivedType = '';
      if (selectedSpindle.includes('APEX-M')) {
        derivedType = 'motorized';
      } else if (selectedSpindle.includes('APEX-B')) {
        derivedType = 'belt';
      } else if (selectedSpindle.includes('APEX-G')) {
        derivedType = 'gear';
      } else if (selectedSpindle.includes('APEX-H')) {
        derivedType = 'high-freq';
      }
      
      setFormData(prev => ({
        ...prev,
        spindleBrand: selectedSpindle,
        spindleType: derivedType
      }));
    }
  }, [selectedSpindle]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFileDetails({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (setSelectedSpindle) {
      setSelectedSpindle(null);
    }
  };

  return (
    <div className="b2b-card" style={{ padding: '2rem' }}>
      {isSubmitted ? (
        <div className="form-success-banner">
          <div className="success-icon">&check;</div>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--success)', marginBottom: '0.5rem', borderBottom: 'none' }}>Inquiry Submitted</h3>
          <p style={{ fontSize: '0.85rem', marginBottom: 0, color: 'var(--text-secondary)' }}>
            Thank you. Your spindle specifications have been logged. A diagnostic engineer will review your data and respond within 2 business hours with shipping procedures and initial estimates.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="form-input" 
                required 
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Required" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="form-input" 
                required 
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Required" 
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="company" className="form-label">Company Name</label>
              <input 
                type="text" 
                id="company" 
                className="form-input" 
                required 
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Corporate Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com" 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="spindleBrand" className="form-label">Spindle Brand &amp; Model</label>
            <input 
              type="text" 
              id="spindleBrand" 
              className="form-input" 
              required 
              value={formData.spindleBrand}
              onChange={handleChange}
              placeholder="e.g. Mazak, Kessler, Fischer SMS-30" 
            />
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="spindleType" className="form-label">Spindle Category</label>
              <select 
                id="spindleType" 
                className="form-select" 
                required
                value={formData.spindleType}
                onChange={handleChange}
              >
                <option value="" disabled>Select Category</option>
                <option value="motorized">Motorized Integrated</option>
                <option value="belt">Belt-Driven Cartridge</option>
                <option value="gear">Gear-Driven Spindle</option>
                <option value="high-freq">High-Frequency Grinding</option>
                <option value="other">Other / Custom</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="priority" className="form-label">Inquiry Urgency</label>
              <select 
                id="priority" 
                className="form-select" 
                required
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="standard">Standard Evaluation (7-10 Business Days)</option>
                <option value="expedited">Expedited Repair (3-5 Business Days)</option>
                <option value="emergency">Emergency Repair (24-48 Hours)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="symptoms" className="form-label">Primary Mechanical Failure / Symptom</label>
            <select 
              id="symptoms" 
              className="form-select" 
              required
              value={formData.symptoms}
              onChange={handleChange}
            >
              <option value="" disabled>Select Primary Issue</option>
              <option value="noise">Elevated Noise / Bearing Whine</option>
              <option value="heat">Thermal Growth / Temperature Rise</option>
              <option value="crash">Spindle Crash / Seizure</option>
              <option value="runout">Runout Errors / Part Defects</option>
              <option value="drawbar">Tool Clamping / Drawbar Defect</option>
              <option value="motor">Stator Field / Motor Failure</option>
              <option value="other">Routine Maintenance Rebuild</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Upload Runout Logs / Photos (Optional)</label>
            <div 
              className="file-upload-area" 
              style={{
                borderColor: dragActive ? 'var(--accent-primary)' : 'var(--border-color)',
                backgroundColor: dragActive ? 'var(--bg-tertiary)' : 'var(--bg-secondary)'
              }}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <span className="file-upload-icon">&#8682;</span>
              {fileDetails ? (
                <>
                  <p className="file-upload-text">Selected: <strong style={{ color: 'var(--accent-primary)' }}>{fileDetails.name}</strong></p>
                  <p className="file-upload-subtext">Size: {fileDetails.size} MB</p>
                </>
              ) : (
                <>
                  <p className="file-upload-text"><span>Select File</span> or drag diagnostics file here</p>
                  <p className="file-upload-subtext">PDF, PNG, JPG, or DOC (Max 15MB)</p>
                </>
              )}
              <input 
                type="file" 
                ref={fileInputRef}
                style={{ display: 'none' }} 
                onChange={handleFileInput}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0, marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: 'var(--radius-md)' }}>Submit Technical Request</button>
          </div>
        </form>
      )}
    </div>
  );
}
