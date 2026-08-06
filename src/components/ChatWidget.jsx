import React, { useState, useEffect, useRef } from 'react';

export default function ChatWidget({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'quote'
  
  // Lead Form State inside Chat
  const [leadForm, setLeadForm] = useState({
    spindleType: 'Motorized Spindle',
    brand: '',
    rpm: '',
    issue: 'Bearing Wear / Vibration'
  });

  const chatBodyRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to General Precision Spindles. I am your AI Technical Assistant. How can our engineering team assist you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Contact Phone Configuration
  const anilNumber = '919764252188'; // Anil Vakude
  const sachinNumber = '919764032929'; // Sachin Kuchekar

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (hasUnread) setHasUnread(false);
  };

  const openWhatsApp = (phoneNum = anilNumber, customMsgText) => {
    const defaultText = 'Hi GPS Spindles team, I need technical assistance for a spindle repair / rebuild project.';
    const textToEncode = customMsgText ? `Hi GPS Spindles team, ${customMsgText}` : defaultText;
    window.open(`https://wa.me/${phoneNum}?text=${encodeURIComponent(textToEncode)}`, '_blank');
  };

  const simulateBotResponse = (userText) => {
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botReply = '';
      let showWaBtn = true;
      let targetPhone = anilNumber;
      let navTarget = null;

      if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('rate') || lower.includes('estimate') || lower.includes('charge')) {
        botReply = 'Spindle rebuild pricing depends on bearing class (Si3N4 Hybrid Ceramic vs Steel) and shaft grinding requirements. We offer free technical teardown inspection. Would you like an instant quote estimate for your model?';
      } else if (lower.includes('time') || lower.includes('day') || lower.includes('turnaround') || lower.includes('urgent') || lower.includes('emergency') || lower.includes('breakdown')) {
        botReply = 'Standard SOP rebuild turnaround is 6–8 business days. For emergency breakdown situations, we offer Priority 24-Hour Intake. Call Anil Vakude (+91 97642 52188) or Sachin Kuchekar (+91 97640 32929) for priority shipping.';
        targetPhone = sachinNumber;
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('pune') || lower.includes('workshop') || lower.includes('factory') || lower.includes('where')) {
        botReply = 'Our workshop facility is located at: 15/A/2, Shop No.3, GKD Industrial Estate, Near Savli Dhaba, Nanded Phata, Sinhgad Road, Pune – 411041, Maharashtra. Free pickup is available for Pune industrial clients!';
        navTarget = 'contact';
      } else if (lower.includes('haas') || lower.includes('mori') || lower.includes('kessler') || lower.includes('fischer') || lower.includes('weiss') || lower.includes('oem') || lower.includes('brand')) {
        botReply = 'We service over 20+ major OEM spindle brands including DMG Mori, Haas, Kessler, Fischer, Weiss, Setco, GMN, and Royal. Every unit is restored to sub-micron tolerances.';
        navTarget = 'products';
      } else if (lower.includes('warranty') || lower.includes('guarantee') || lower.includes('cert')) {
        botReply = 'All rebuilt and manufactured spindles carry a 12-Month Full Warranty and a QR-coded digital Quality Inspection Report documenting 100,000 RPM dynamic balancing.';
      } else {
        botReply = 'Thank you for reaching out! Our engineers specialize in high-speed motorized, belt-driven, and high-frequency spindle rebuilds. You can message our engineering desk directly on WhatsApp or select a quick topic below.';
      }

      setIsTyping(false);
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time,
          showWhatsAppBtn: showWaBtn,
          targetPhone,
          navTarget,
          customMsg: userText
        }
      ]);
    }, 600);
  };

  const handleQuickOption = (questionText) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user', text: questionText, time };
    setMessages((prev) => [...prev, userMsg]);
    simulateBotResponse(questionText);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user', text: userText, time };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    simulateBotResponse(userText);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    const formattedMsg = `Quote Request: Spindle Type: ${leadForm.spindleType}, Machine Make/Model: ${leadForm.brand || 'N/A'}, Max Speed: ${leadForm.rpm || 'Standard'}, Observed Issue: ${leadForm.issue}`;
    openWhatsApp(anilNumber, formattedMsg);
  };

  return (
    <>
      {/* ══ FLOATING BADGE BUTTON ══════════════════════════════ */}
      <div className="chat-floating-badge-wrap">
        <button
          onClick={handleOpen}
          className="chat-main-btn"
          title="GPS Technical Support Desk"
          aria-label="GPS Technical Support Desk"
        >
          {hasUnread && <span className="chat-unread-dot" />}
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* ══ CHAT WINDOW POPUP ═════════════════════════════════ */}
      {isOpen && (
        <div className="chat-window-box">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <span className="chat-online-pulse" />
                GPS
              </div>
              <div>
                <div className="chat-header-title">GPS Technical Desk</div>
                <div className="chat-header-status">
                  <span className="chat-status-dot" /> Online • Pune Facility
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-close-btn" aria-label="Close Chat">
              ✕
            </button>
          </div>

          {/* Tab Bar: Assistant vs Rapid Quote */}
          <div style={{ display: 'flex', background: '#090e17', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setActiveTab('chat')}
              style={{
                flex: 1,
                padding: '0.55rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                border: 'none',
                background: activeTab === 'chat' ? 'var(--bg-secondary)' : 'transparent',
                color: activeTab === 'chat' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Interactive Assistant
            </button>
            <button
              onClick={() => setActiveTab('quote')}
              style={{
                flex: 1,
                padding: '0.55rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                border: 'none',
                background: activeTab === 'quote' ? 'var(--bg-secondary)' : 'transparent',
                color: activeTab === 'quote' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Rapid Quote Form
            </button>
          </div>

          {/* TAB 1: CHAT ASSISTANT */}
          {activeTab === 'chat' && (
            <>
              {/* Messages Body */}
              <div className="chat-body" ref={chatBodyRef}>
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-bubble-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
                    <div className={`chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                      {msg.text}
                      
                      {/* Action buttons inside bot bubble */}
                      {msg.showWhatsAppBtn && (
                        <div style={{ marginTop: '0.65rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <button
                            onClick={() => openWhatsApp(msg.targetPhone || anilNumber, msg.customMsg)}
                            className="chat-wa-cta-btn"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                            Connect via WhatsApp
                          </button>

                          {msg.navTarget && (
                            <button
                              onClick={() => {
                                setIsOpen(false);
                                onNavigate(msg.navTarget);
                              }}
                              className="btn btn-secondary"
                              style={{ padding: '0.4rem', fontSize: '0.75rem', width: '100%', textAlign: 'center' }}
                            >
                              Open {msg.navTarget === 'contact' ? 'Contact Info' : 'Product Catalog'} &rarr;
                            </button>
                          )}
                        </div>
                      )}
                      <div className="chat-timestamp">{msg.time}</div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="chat-bubble-row bot-row">
                    <div className="chat-bubble bot-bubble" style={{ padding: '0.5rem 0.85rem' }}>
                      <span className="chat-typing-dots">
                        <span /><span /><span />
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Topic Chips */}
              <div className="chat-preset-pills">
                <button onClick={() => handleQuickOption('What is your repair cost estimate?')} className="chat-preset-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Repair Pricing Estimate
                </button>
                <button onClick={() => handleQuickOption('Emergency Breakdown Support')} className="chat-preset-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  Emergency Breakdown
                </button>
                <button onClick={() => handleQuickOption('What is your rebuild turnaround time?')} className="chat-preset-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Turnaround Time (6-8 Days)
                </button>
                <button onClick={() => handleQuickOption('Supported OEM Spindle Brands')} className="chat-preset-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  OEM Brands Supported
                </button>
              </div>

              {/* Input Footer */}
              <form onSubmit={handleSendMessage} className="chat-footer-form">
                <input
                  type="text"
                  placeholder="Ask a technical question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="chat-input"
                />
                <button type="submit" className="chat-send-btn" title="Send message">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </>
          )}

          {/* TAB 2: RAPID QUOTE FORM */}
          {activeTab === 'quote' && (
            <div style={{ padding: '1.25rem', flexGrow: 1, overflowY: 'auto', background: '#f8fafc' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Instant Spindle Quote Request
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                Fill out basic spindle specs below to generate a pre-formatted inquiry directly to our engineering desk.
              </p>

              <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Spindle Type
                  </label>
                  <select
                    value={leadForm.spindleType}
                    onChange={(e) => setLeadForm({ ...leadForm, spindleType: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: '#ffffff' }}
                  >
                    <option value="Motorized Spindle">Integrated Motorized Spindle</option>
                    <option value="Belt-Driven Spindle">Belt-Driven Mechanical Spindle</option>
                    <option value="High-Frequency Spindle">High-Frequency Grinding Spindle</option>
                    <option value="Gear-Driven Spindle">Gear Transmission Heavy Duty</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Machine Brand / Spindle Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Haas VMC-750 / DMG Mori / Kessler"
                    value={leadForm.brand}
                    onChange={(e) => setLeadForm({ ...leadForm, brand: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: '#ffffff' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Max RPM Rating
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12,000 RPM / 24,000 RPM"
                    value={leadForm.rpm}
                    onChange={(e) => setLeadForm({ ...leadForm, rpm: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: '#ffffff' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Primary Issue Observed
                  </label>
                  <select
                    value={leadForm.issue}
                    onChange={(e) => setLeadForm({ ...leadForm, issue: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: '#ffffff' }}
                  >
                    <option value="Bearing Wear / Noise / Heat">Bearing Noise / Excessive Heating</option>
                    <option value="Runout / Taper Damage">Shaft Runout / Tool Taper Damage</option>
                    <option value="Stator Winding Failure">Motor Stator Electrical Burnout</option>
                    <option value="Complete Crash / Overhaul">Complete Spindle Crash / Overhaul</option>
                    <option value="New Manufacturing Unit">New Custom Spindle Manufacturing</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="chat-wa-cta-btn"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', marginTop: '0.5rem', fontSize: '0.85rem' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Send Quote Inquiry via WhatsApp &rarr;
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
