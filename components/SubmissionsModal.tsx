
import React, { useState, useEffect } from 'react';
import { X, Inbox, Trash2, ExternalLink, Calendar, User, Mail, MessageSquare, Lock, ShieldCheck, Key, Eye, EyeOff, Save, ShieldAlert } from 'lucide-react';

interface Submission {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
  status: string;
}

interface SubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionsModal: React.FC<SubmissionsModalProps> = ({ isOpen, onClose }) => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'inbox' | 'settings'>('inbox');

  // Password Change State
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [settingsMessage, setSettingsMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset state on open
      setIsAuthenticated(false);
      setPasswordInput('');
      setLoginError('');
      setActiveTab('inbox');
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const getStoredPassword = () => {
    return localStorage.getItem('sahasrakshi_admin_hash') || 'admin';
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = getStoredPassword();
    
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
      const data = JSON.parse(localStorage.getItem('sahasrakshi_inquiries') || '[]');
      setSubmissions(data);
    } else {
      setLoginError('Access Denied: Invalid Authorization Token');
      // Shake effect simulation or sound could go here
    }
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPass = getStoredPassword();

    if (oldPassword !== currentPass) {
      setSettingsMessage({ text: 'Authentication failed: Incorrect current password.', type: 'error' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setSettingsMessage({ text: 'Validation error: Passwords do not match.', type: 'error' });
      return;
    }
    if (newPassword.length < 4) {
      setSettingsMessage({ text: 'Security requirement: Password too short (min 4 chars).', type: 'error' });
      return;
    }

    localStorage.setItem('sahasrakshi_admin_hash', newPassword);
    setSettingsMessage({ text: 'Protocol updated: Password changed successfully.', type: 'success' });
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('sahasrakshi_inquiries', JSON.stringify(updated));
  };

  const clearAll = () => {
    if (window.confirm('WARNING: Irreversible Action. Clear all inquiries from database?')) {
      setSubmissions([]);
      localStorage.removeItem('sahasrakshi_inquiries');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-500">
        
        {!isAuthenticated ? (
          /* LOGIN VIEW */
          <div className="flex-grow flex flex-col items-center justify-center p-10 text-center">
            <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mb-8 border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <Lock className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Secure Gateway</h2>
            <p className="text-slate-500 text-sm uppercase tracking-[0.2em] mb-10 font-bold">Authorized Access Only</p>
            
            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setLoginError('');
                  }}
                  autoFocus
                  placeholder="Enter Admin Access Key"
                  className={`w-full bg-slate-950 border ${loginError ? 'border-red-500/50' : 'border-slate-800 focus:border-cyan-500'} rounded-2xl px-6 py-4 text-white text-center tracking-widest outline-none transition-all placeholder:tracking-normal placeholder:text-slate-700`}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700 hover:text-cyan-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {loginError && (
                <p className="text-red-500 text-xs font-bold animate-pulse flex items-center justify-center gap-2 uppercase tracking-wide">
                  <ShieldAlert size={14} /> {loginError}
                </p>
              ) }

              <button 
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-cyan-900/20 transition-all active:scale-[0.98]"
              >
                Authenticate Protocol
              </button>
            </form>
            
            <button onClick={onClose} className="mt-8 text-slate-600 hover:text-slate-400 text-xs uppercase font-bold tracking-widest transition-colors">
              Abort Connection
            </button>
          </div>
        ) : (
          /* DASHBOARD VIEW */
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-bold text-white leading-none">Management Console</h2>
                </div>
                
                {/* Internal Tabs */}
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button 
                    onClick={() => setActiveTab('inbox')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'inbox' ? 'bg-slate-800 text-cyan-400 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Inbox
                  </button>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'settings' ? 'bg-slate-800 text-cyan-400 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Gate Security
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {activeTab === 'inbox' && submissions.length > 0 && (
                  <button 
                    onClick={clearAll}
                    className="text-[10px] font-bold text-slate-600 hover:text-red-400 transition-colors uppercase tracking-[0.2em]"
                  >
                    Wipe Records
                  </button>
                )}
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto p-8 bg-slate-950/30">
              {activeTab === 'inbox' ? (
                /* INBOX TAB */
                submissions.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-slate-600">
                      <Inbox size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest">No New Intelligence</h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-xs">All clear. Incoming inquiries will be decrypted and displayed here.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {submissions.map((sub) => (
                      <div key={sub.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group flex flex-col shadow-sm">
                        <div className="flex justify-between items-start mb-6">
                          <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[9px] font-bold rounded-md uppercase tracking-widest border border-cyan-500/10">
                            {sub.service}
                          </span>
                          <button 
                            onClick={() => deleteSubmission(sub.id)}
                            className="text-slate-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        
                        <div className="space-y-4 flex-grow">
                          <div className="flex items-start gap-3">
                            <User size={16} className="text-slate-600 mt-1 shrink-0" />
                            <div>
                              <p className="text-white font-bold text-sm leading-none">{sub.name}</p>
                              <div className="flex items-center gap-2 mt-2 text-slate-500 text-xs">
                                <Mail size={12} className="shrink-0" />
                                <p className="truncate">{sub.email}</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 pt-4 border-t border-slate-800/50">
                            <MessageSquare size={16} className="text-cyan-500/50 mt-1 shrink-0" />
                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-4">
                              "{sub.message}"
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-[10px] text-slate-600">
                          <div className="flex items-center gap-1.5 uppercase font-bold">
                            <Calendar size={12} />
                            {new Date(sub.timestamp).toLocaleDateString()}
                          </div>
                          <button className="text-cyan-500 hover:text-cyan-400 flex items-center gap-1 font-bold uppercase transition-colors">
                            Decrypt Full <ExternalLink size={10} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                /* SETTINGS TAB */
                <div className="max-w-md mx-auto py-10">
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-cyan-500/10 rounded-lg">
                        <Key className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">Update Access Key</h3>
                    </div>

                    <form onSubmit={handlePasswordChange} className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Current Access Key</label>
                        <input 
                          type="password"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 transition-all text-sm"
                          placeholder="Current Key"
                        />
                      </div>
                      <div className="pt-2 border-t border-slate-800">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">New Access Key</label>
                        <input 
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 transition-all text-sm mb-4"
                          placeholder="Minimum 4 characters"
                        />
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Confirm New Key</label>
                        <input 
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500 transition-all text-sm"
                          placeholder="Repeat New Key"
                        />
                      </div>

                      {settingsMessage.text && (
                        <div className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 uppercase tracking-wide animate-in fade-in duration-300 ${settingsMessage.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                          {settingsMessage.type === 'error' ? <ShieldAlert size={16} /> : <ShieldCheck size={16} />}
                          {settingsMessage.text}
                        </div>
                      )}

                      <button 
                        type="submit"
                        className="w-full bg-slate-800 hover:bg-cyan-600 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group"
                      >
                        <Save size={18} className="group-hover:scale-110 transition-transform" />
                        Save Security Configuration
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Information */}
            <div className="px-8 py-4 bg-slate-950/80 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Sahasrakshi Persistence Layer Active
              </div>
              <div>Session Status: Encrypted</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmissionsModal;
