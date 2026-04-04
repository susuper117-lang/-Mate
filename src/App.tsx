/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X,
  Heart,
  ShieldCheck,
  Home,
  Users,
  Bell,
  Globe,
  LogOut,
  Search,
  Headset,
  FileText,
  MessageCircleMore
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Reservation {
  id: string;
  subject: string;
  birthDate: string;
  phone: string;
  institution: string;
  date: string;
  status: 'pending' | 'confirmed';
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: '양도신청', href: '#reservation-form', subItems: ['양도신청'] },
    { label: '신청조회', href: '#', subItems: ['양도신청 조회'] },
    { label: '검진기관', href: '#', subItems: ['검진기관 안내'] },
    { label: '고객센터', href: '#', subItems: ['검진 절차안내', 'FAQ'] },
  ];

  return (
    <nav 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Upgraded Cross-style Logo */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Top Leaf (Orange) */}
                  <rect x="36" y="12" width="28" height="36" rx="14" fill="#FF5A36" />
                  {/* Left Leaf (Orange) */}
                  <rect x="12" y="36" width="36" height="28" rx="14" fill="#FF5A36" />
                  
                  {/* Right Leaf (Blue) */}
                  <rect x="52" y="36" width="36" height="28" rx="14" fill="#3B82F6" />
                  {/* Bottom Leaf (Blue) */}
                  <rect x="36" y="52" width="28" height="36" rx="14" fill="#3B82F6" />
                  
                  {/* White Highlight on top leaf to maintain the "Heart" feel */}
                  <path 
                    d="M42 22 C42 18 58 18 58 22" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    opacity="0.8"
                  />
                  
                  {/* Center Dot for polish */}
                  <circle cx="50" cy="50" r="4" fill="white" opacity="0.3" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#333333]">
                종합검진Mate
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12 mr-auto ml-16 h-full">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="h-full flex items-center justify-center min-w-[80px]"
                onMouseEnter={() => setHoveredItem(item.label)}
              >
                <a 
                  href={item.href} 
                  className={`text-slate-600 hover:text-brand-primary font-medium transition-colors h-full flex items-center border-b-2 ${hoveredItem === item.label ? 'border-brand-primary text-brand-primary' : 'border-transparent'}`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-slate-500 border-l border-slate-200 ml-8 pl-8">
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span className="font-bold text-brand-primary">KOR</span>
              <span className="text-slate-300">ENG</span>
            </div>
            <a href="#" className="hover:text-slate-800">마이페이지</a>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-700">DX업무담당자2</span>
              <span className="text-slate-300">|</span>
              <button className="flex items-center gap-1 hover:text-brand-accent">
                로그아웃
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-slate-900/80 backdrop-blur-xl text-white z-40 overflow-hidden shadow-2xl border-b border-white/10"
            onMouseEnter={() => setHoveredItem(hoveredItem)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex">
                {/* Offset to align with Navbar items (Logo area width + ml-16) */}
                <div className="w-[188px] shrink-0" /> 
                
                <div className="flex gap-12 py-10 ml-16">
                  {navItems.map((item) => (
                    <div 
                      key={item.label} 
                      className={`flex flex-col items-center transition-opacity duration-300 min-w-[80px] ${hoveredItem === item.label ? 'opacity-100' : 'opacity-40'}`}
                    >
                      <div className="flex flex-col items-center gap-4">
                        {item.subItems.map((sub) => (
                          <a 
                            key={sub} 
                            href={item.href} 
                            className="text-white hover:text-brand-primary transition-colors text-sm font-medium whitespace-nowrap text-center"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Bottom Accent Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
          >
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <a 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-slate-900 font-bold text-lg"
                >
                  {item.label}
                </a>
                <div className="pl-4 flex flex-col gap-2">
                  {item.subItems.map((sub) => (
                    <a 
                      key={sub} 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-slate-500 text-sm font-medium"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const VisualSection = () => {
  const menuItems = [
    { icon: <Calendar className="w-12 h-12" />, label: '양도신청', desc: '가족에게 검진권 양도' },
    { icon: <FileText className="w-12 h-12" />, label: '신청조회', desc: '양도 신청 내역 확인' },
    { icon: <MapPin className="w-12 h-12" />, label: '검진기관', desc: '전국 검진 센터 안내' },
    { icon: <Headset className="w-12 h-12" />, label: '고객센터', desc: '도움이 필요하신가요?' },
  ];

  return (
    <section className="relative">
      {/* Hero Area */}
      <div className="bg-gradient-to-br from-brand-blue to-white pt-20 pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[40%] h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
            alt="Medical background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:flex-[7] text-center md:text-left"
            >
              <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold mb-6">
                2026년도 1차 신청
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                DX업무담당자2님은 <br />
                <span className="text-brand-primary">배우자 종합검진 양도 신청</span> 대상자입니다.
              </h2>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-sm border border-brand-primary/10">
                  <Calendar className="w-5 h-5 text-brand-accent" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">양도 신청 기간</p>
                    <p className="text-slate-700 font-bold text-sm">2026.01.01(목) 08:00 ~ 01.17(금) 23:59</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-sm border border-brand-primary/10">
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">문의처</p>
                    <p className="text-slate-700 font-bold text-sm">031-200-7510(Knox ID 복리지원안내)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:flex-[3] relative hidden lg:block"
            >
              {/* Health Checkup Illustration */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 bg-brand-primary/5 rounded-full blur-3xl" />
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-2xl">
                  {/* Background Circle */}
                  <circle cx="200" cy="200" r="160" fill="white" fillOpacity="0.6" />
                  
                  {/* Medical Report / Clipboard */}
                  <motion.g
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Clipboard Shadow */}
                    <rect x="115" y="85" width="170" height="230" rx="15" fill="#000" opacity="0.05" />
                    {/* Clipboard Body */}
                    <rect x="110" y="80" width="170" height="230" rx="15" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                    {/* Clip */}
                    <rect x="155" y="65" width="80" height="30" rx="8" fill="#3B82F6" />
                    <rect x="180" y="72" width="30" height="4" rx="2" fill="white" opacity="0.3" />
                    
                    {/* Report Content */}
                    <rect x="135" y="120" width="120" height="8" rx="4" fill="#F1F5F9" />
                    <rect x="135" y="140" width="100" height="8" rx="4" fill="#F1F5F9" />
                    
                    {/* Pulse Line Chart */}
                    <path d="M135 200 L155 200 L165 170 L175 230 L185 200 L205 200 L215 180 L225 220 L235 200 L255 200" 
                          stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    
                    {/* Checkboxes */}
                    <rect x="135" y="240" width="12" height="12" rx="3" fill="#3B82F6" opacity="0.2" />
                    <path d="M137 246 L140 249 L145 242" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <rect x="160" y="240" width="80" height="6" rx="3" fill="#F1F5F9" />
                    
                    <rect x="135" y="265" width="12" height="12" rx="3" fill="#3B82F6" opacity="0.2" />
                    <path d="M137 271 L140 274 L145 267" stroke="#3B82F6" strokeWidth="2" fill="none" />
                    <rect x="160" y="265" width="60" height="6" rx="3" fill="#F1F5F9" />
                  </motion.g>

                  {/* Floating Heart Icon */}
                  <motion.g
                    animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <circle cx="310" cy="150" r="40" fill="#F97316" />
                    <Heart className="text-white w-12 h-12" x="286" y="126" />
                  </motion.g>

                  {/* Floating Magnifying Glass (Examination) */}
                  <motion.g
                    animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <circle cx="100" cy="280" r="35" fill="#3B82F6" opacity="0.1" />
                    <circle cx="95" cy="275" r="20" stroke="#3B82F6" strokeWidth="3" fill="white" />
                    <path d="M110 290 L125 305" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
                  </motion.g>

                  {/* Floating Plus Icons */}
                  <motion.g
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <path d="M320 280 H340 M330 270 V290" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                    <path d="M80 100 H90 M85 95 V105" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
                  </motion.g>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Menu Bar (Overlapping) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => {
                if (item.label === '양도신청') {
                  document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center gap-4 group transition-all hover:border-brand-accent/30 hover:bg-brand-accent"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-accent group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <p className="text-xl font-bold text-slate-800 group-hover:text-white">{item.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    birthDate: '',
    phone: '',
    institution: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [selectedSchedules, setSelectedSchedules] = useState<Array<{date: string, time: string}>>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3)); // April 2026
  const [showTimePicker, setShowTimePicker] = useState<{date: string} | null>(null);
  const [showScheduleNotice, setShowScheduleNotice] = useState(false);

  const institutions = ['삼성강북병원', '삼성창원병원', '서울대학교병원', '아산병원', '세브란스병원'];

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handleDateClick = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const isPast = (year < 2026) || 
                   (year === 2026 && month < 3) || 
                   (year === 2026 && month === 3 && day < 4);
    if (isPast) return;

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // Check if already selected
    const existingIndex = selectedSchedules.findIndex(s => s.date === dateStr);
    if (existingIndex !== -1) {
      // Deselect
      removeSchedule(existingIndex);
      return;
    }

    if (selectedSchedules.length >= 3) return;
    
    setShowTimePicker({ date: dateStr });
  };

  const addSchedule = (time: string) => {
    if (showTimePicker) {
      const newSchedules = [...selectedSchedules, { date: showTimePicker.date, time }];
      setSelectedSchedules(newSchedules);
      setShowTimePicker(null);
      
      // Show notice when the first schedule (1지망) is added
      if (newSchedules.length === 1) {
        setShowScheduleNotice(true);
      }
    }
  };

  const removeSchedule = (index: number) => {
    setSelectedSchedules(selectedSchedules.filter((_, i) => i !== index));
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    const days = [];

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12" />);
    }

    // Days of current month
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = selectedSchedules.some(s => s.date === dateStr);
      const isToday = day === 4 && month === 3 && year === 2026; // Mocking "Today" for April 4, 2026
      
      const isPast = (year < 2026) || 
                     (year === 2026 && month < 3) || 
                     (year === 2026 && month === 3 && day < 4);

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateClick(day)}
          disabled={isPast || (selectedSchedules.length >= 3 && !isSelected)}
          className={`h-12 w-full flex flex-col items-center justify-center rounded-xl transition-all relative
            ${isSelected ? 'bg-brand-primary text-white' : 'hover:bg-slate-100 text-slate-700'}
            ${isToday ? 'font-bold' : ''}
            ${isPast ? 'opacity-20 cursor-not-allowed grayscale' : ''}
            ${selectedSchedules.length >= 3 && !isSelected && !isPast ? 'opacity-30 cursor-not-allowed' : ''}
          `}
        >
          <span>{day}</span>
          {isToday && <span className="text-[8px] text-brand-accent absolute bottom-1">Today</span>}
        </button>
      );
    }

    return days;
  };

  return (
    <section id="reservation-form" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">건강검진 양도 신청</h2>
          <p className="text-slate-500">원하시는 검진 대상과 기관을 선택하여 양도 신청을 진행하실 수 있습니다.</p>
        </div>

        <div className="card overflow-visible">
          <form className="space-y-12">
            {/* 기본 정보 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-brand-primary rounded-full" />
                기본 정보 입력
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-primary" /> 대상자 지정
                  </label>
                  <select 
                    className={`input-field appearance-none bg-white ${!formData.subject ? 'text-slate-400' : 'text-slate-900'}`}
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="" className="text-slate-400">대상자를 선택하세요</option>
                    {['(부) 김○○', '(모) 박○○', '(배/부) 이○○', '(배/모) 정○○'].map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-primary" /> 생년월일
                  </label>
                  <input 
                    type="date" 
                    className={`input-field ${!formData.birthDate ? 'text-slate-400' : 'text-slate-900'}`}
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-primary" /> 연락처
                  </label>
                  <input 
                    type="tel" 
                    placeholder="010-0000-0000" 
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-primary" /> 검진 기관
                  </label>
                  <select 
                    className={`input-field appearance-none bg-white ${!formData.institution ? 'text-slate-400' : 'text-slate-900'}`}
                    value={formData.institution}
                    onChange={(e) => setFormData({...formData, institution: e.target.value})}
                  >
                    <option value="" className="text-slate-400">기관을 선택하세요</option>
                    {institutions.map(inst => (
                      <option key={inst} value={inst}>{inst}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 희망 일정 선택 */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-brand-primary rounded-full" />
                희망 검진 일정 선택
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                {/* Calendar */}
                <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-bold text-slate-800">
                      {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
                    </h4>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        type="button"
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
                      <div key={d} className={`text-center text-xs font-bold py-2 ${i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-slate-400'}`}>
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>

                {/* Selected List */}
                <div className="lg:col-span-2 space-y-6">
                  <h4 className="text-sm font-bold text-slate-700">선택한 희망 검진 일정</h4>
                  
                  <div className="space-y-4">
                    {[0, 1, 2].map((idx) => (
                      <div key={idx} className="space-y-2">
                        <p className="text-xs font-bold text-slate-400">{idx + 1}지망</p>
                        <div className="min-h-[56px] bg-white border border-slate-200 rounded-xl px-4 flex items-center justify-between group">
                          {selectedSchedules[idx] ? (
                            <>
                              <span className="text-sm font-bold text-slate-700">
                                {selectedSchedules[idx].date} / {selectedSchedules[idx].time}
                              </span>
                              <button 
                                type="button"
                                onClick={() => removeSchedule(idx)}
                                className="p-1 hover:bg-slate-100 rounded-full text-slate-300 hover:text-red-400 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <span className="text-sm text-slate-300 italic">일정을 선택해주세요</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedSchedules.length === 0 && (
                    <div className="bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/10">
                      <p className="text-xs text-brand-primary leading-relaxed">
                        * 달력에서 원하시는 날짜를 클릭하여 오전/오후를 선택해주세요. 최대 3지망까지 선택 가능합니다.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Time Picker Modal/Overlay */}
            <AnimatePresence>
              {showTimePicker && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
                >
                  <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h5 className="text-lg font-bold text-slate-800">시간 선택</h5>
                      <button onClick={() => setShowTimePicker(null)} className="text-slate-400 hover:text-slate-600">
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="text-slate-500 mb-8">
                      <span className="font-bold text-brand-primary">{showTimePicker.date}</span> 검진 시간을 선택해주세요.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        type="button"
                        onClick={() => addSchedule('오전')}
                        className="py-4 rounded-2xl border-2 border-slate-100 hover:border-brand-primary hover:bg-brand-primary/5 text-slate-700 font-bold transition-all"
                      >
                        오전
                      </button>
                      <button 
                        type="button"
                        onClick={() => addSchedule('오후')}
                        className="py-4 rounded-2xl border-2 border-slate-100 hover:border-brand-primary hover:bg-brand-primary/5 text-slate-700 font-bold transition-all"
                      >
                        오후
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Schedule Notice Modal */}
            <AnimatePresence>
              {showScheduleNotice && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
                >
                  <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center"
                  >
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <AlertCircle className="w-8 h-8 text-brand-accent" />
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 mb-4">안내 드립니다</h5>
                    <div className="space-y-3 text-slate-600 mb-8">
                      <p>
                        지금 선택하신 일정은 <span className="font-bold text-brand-primary underline underline-offset-4">희망 검진 일정</span>입니다.
                      </p>
                      <p className="text-sm">
                        실제 검진 예약은 병원에 직접 진행해 주셔야 하며 <br />
                        <span className="text-brand-accent font-bold">희망 일정은 참고용으로 병원에 전달</span>됩니다.
                      </p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setShowScheduleNotice(false)}
                      className="w-full py-4 bg-brand-primary text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/20 hover:scale-[1.02] transition-transform"
                    >
                      확인했습니다
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-6 border-t border-slate-100 space-y-6">
              <div className="flex items-center gap-3 px-1">
                <input 
                  type="checkbox" 
                  id="agreement"
                  className="w-5 h-5 rounded border-slate-300 text-brand-primary focus:ring-brand-primary cursor-pointer"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="agreement" className="text-slate-600 font-medium cursor-pointer select-none">
                  본인은 위 내용에 대해 동의합니다.
                </label>
              </div>

              <button 
                type="button"
                disabled={!agreed || selectedSchedules.length === 0}
                className={`w-full btn-primary text-lg py-4 transition-all duration-300 ${(!agreed || selectedSchedules.length === 0) ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-[1.01] shadow-lg shadow-brand-primary/20'}`}
                onClick={() => alert('양도 신청이 접수되었습니다.')}
              >
                양도 신청 완료하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">왜 종합검진Mate인가요?</h2>
        <p className="text-slate-500">차별화된 서비스로 당신의 건강을 책임집니다.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Users className="w-8 h-8 text-brand-primary" />,
            title: "가족 통합 관리",
            desc: "본인뿐만 아니라 가족 구성원의 검진 일정과 결과를 한곳에서 관리하세요."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
            title: "검증된 의료기관",
            desc: "국내 최고 수준의 대학병원 및 전문 검진 센터와 파트너십을 맺고 있습니다."
          },
          {
            icon: <Bell className="w-8 h-8 text-brand-primary" />,
            title: "스마트 알림 서비스",
            desc: "검진 예약부터 사후 관리까지, 중요한 일정을 놓치지 않도록 알려드립니다."
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="card text-center"
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 25 C35 10, 10 25, 10 50 C10 75, 35 90, 50 90 L50 10 Z" fill="#f97316" />
                  <path d="M50 25 C65 10, 90 25, 90 50 C90 75, 65 90, 50 90 L50 10 Z" fill="#3b82f6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                종합검진<span className="text-slate-300 font-extrabold">Mate</span>
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            건강한 미래를 위한 첫걸음, <br />
            종합검진Mate가 함께합니다.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">서비스</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-brand-primary transition-colors">검진 예약</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">검진기관 안내</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">가족 혜택</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">고객지원</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-brand-primary transition-colors">공지사항</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">자주 묻는 질문</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">1:1 문의</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1588-0000</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 서울특별시 강남구 테헤란로</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 종합검진Mate. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">이용약관</a>
          <a href="#" className="hover:text-white font-bold">개인정보처리방침</a>
        </div>
      </div>
    </div>
  </footer>
);

const AdminDashboard = () => {
  const reservations: Reservation[] = [
    { id: '1', subject: '홍길동', birthDate: '1980-05-15', phone: '010-1234-5678', institution: '삼성강북병원', date: '2026-04-10', status: 'confirmed' },
    { id: '2', subject: '김철수', birthDate: '1975-11-20', phone: '010-9876-5432', institution: '삼성창원병원', date: '2026-04-12', status: 'pending' },
    { id: '3', subject: '이영희', birthDate: '1992-03-05', phone: '010-5555-4444', institution: '서울대학교병원', date: '2026-04-15', status: 'confirmed' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">관리자 대시보드</h2>
            <p className="text-slate-500">예약 현황 및 대상자 명단을 관리합니다.</p>
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            엑셀 다운로드
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">ID</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">대상자</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">생년월일</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">검진기관</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">예약일자</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">상태</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {reservations.map((res) => (
                  <tr key={res.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-500">#{res.id}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{res.subject}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{res.birthDate}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{res.institution}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{res.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        res.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {res.status === 'confirmed' ? '확정' : '대기'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-brand-primary hover:underline font-medium">상세보기</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatBot = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-28 right-8 w-[360px] max-h-[640px] bg-white rounded-[40px] shadow-2xl z-[100] overflow-hidden flex flex-col border border-slate-100"
        >
          {/* Header */}
          <div className="p-6 flex justify-end">
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-6 pb-20 scrollbar-hide">
            {/* Logo & Status */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  <rect x="0" y="0" width="100" height="100" rx="35" fill="#3F51B5" />
                  <path d="M50 25 C32 25 22 35 22 48 C22 58 30 66 40 69 L40 82 L55 70 C68 70 78 60 78 48 C78 35 68 25 50 25 Z" fill="white" />
                  <path d="M24 48 C24 32 36 22 50 22 C64 22 76 32 76 48" stroke="#FF7061" strokeWidth="9" fill="none" strokeLinecap="round" />
                  <rect x="14" y="40" width="16" height="26" rx="8" fill="#FF7061" />
                  <rect x="70" y="40" width="16" height="26" rx="8" fill="#FF7061" />
                  <circle cx="42" cy="48" r="3.5" fill="#FF7061" />
                  <circle cx="58" cy="48" r="3.5" fill="#FF7061" />
                  <path d="M40 56 Q50 72 60 56 Z" fill="#FF7061" />
                  <path d="M78 58 L78 65 C78 74 70 74 62 74" stroke="#FF7061" strokeWidth="6" fill="none" strokeLinecap="round" />
                  <circle cx="58" cy="74" r="5" fill="#D4E157" />
                </svg>
              </div>
              <h3 className="text-4xl font-black tracking-tighter text-[#FF7061] mb-4">maemi</h3>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-500">
                  응답가능 <span className="font-medium text-slate-400 ml-1">(운영시간: 월~금, 08:00-17:00)</span>
                </span>
              </div>
            </div>

            {/* Notice */}
            <div className="mb-4">
              <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-1.5">
                공지사항 📢
              </h4>
              <div className={`bg-white border ${isNoticeOpen ? 'border-[#FF7061]/30' : 'border-slate-100'} rounded-2xl overflow-hidden transition-all duration-300`}>
                <button 
                  onClick={() => setIsNoticeOpen(!isNoticeOpen)}
                  className="w-full p-4 flex items-center justify-between group transition-colors"
                >
                  <span className="text-sm font-bold text-slate-700">검진기관 예약 오픈일 안내</span>
                  <motion.div
                    animate={{ rotate: isNoticeOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#FF7061] transition-colors" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isNoticeOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 space-y-3">
                        <div className="h-[1px] bg-slate-50 w-full mb-3" />
                        {[
                          { name: '삼성강북병원', date: '2월 2일(월)', phone: '031) 000-0000' },
                          { name: '서울대병원', date: '2월 5일(목)', phone: '031) 000-0000' },
                          { name: '세브란스병원', date: '2월 10일(화)', phone: '031) 000-0000' },
                          { name: '아산병원', date: '2월 12일(목)', phone: '031) 000-0000' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-1 p-2 rounded-xl bg-slate-50/50">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-slate-700">{item.name}</span>
                              <span className="text-xs font-bold text-[#FF7061]">{item.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                              <Phone className="w-3 h-3" />
                              <span>{item.phone}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Main Banner */}
            <div className="bg-[#FEF8F6] border border-[#FADCD2] rounded-[32px] py-3 px-8 shadow-sm mb-8 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF7061]/5 rounded-full blur-2xl" />
                <div className="absolute top-1/2 -right-8 w-32 h-32 bg-[#3F51B5]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-[#FF7061]/20 rounded-full" />
                <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-[#3F51B5]/10 rounded-full" />
                <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-[#D4E157]/30 rounded-full" />
              </div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex justify-center -mt-2 mb-0">
                  <svg width="150" height="90" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Left Bubble */}
                    <g transform="translate(10, 2)">
                      <path d="M45 15C28 15 15 25 15 38C15 48 22 56 32 59L32 70L45 60C58 60 68 50 68 38C68 25 58 15 45 15Z" fill="#FDE7E4" />
                      <circle cx="35" cy="35" r="2.5" fill="#FF8A80" />
                      <circle cx="50" cy="35" r="2.5" fill="#FF8A80" />
                      <ellipse cx="42.5" cy="40" rx="4" ry="2.5" fill="#FF8A80" />
                      <circle cx="25" cy="40" r="5" fill="#FFD1CD" />
                      <circle cx="60" cy="40" r="5" fill="#FFD1CD" />
                    </g>
                    
                    {/* Right Bubble */}
                    <g transform="translate(23, 10)">
                      <path d="M85 35C68 35 55 45 55 58C55 68 62 76 72 79L72 90L85 80C98 80 108 70 108 58C108 45 98 35 85 35Z" fill="#FDE7E4" />
                      <circle cx="75" cy="55" r="2.5" fill="#FF8A80" />
                      <circle cx="95" cy="55" r="2.5" fill="#FF8A80" />
                      <path d="M78 62Q85 70 92 62" stroke="#FF8A80" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                      <circle cx="65" cy="60" r="5" fill="#FFD1CD" />
                      <circle cx="100" cy="60" r="5" fill="#FFD1CD" />
                    </g>

                    {/* Question Mark */}
                    <g transform="translate(5, 0)">
                      <path d="M65 15Q65 8 72 8T79 15Q79 19 75 22T72 27" stroke="#9FA8DA" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <circle cx="72" cy="32" r="2" fill="#9FA8DA" />
                    </g>

                    {/* Exclamation Mark */}
                    <g transform="translate(15, 4)">
                      <path d="M55 65L55 75" stroke="#9FA8DA" strokeWidth="4" strokeLinecap="round" fill="none" />
                      <circle cx="55" cy="82" r="2.5" fill="#9FA8DA" />
                    </g>

                    {/* Extra Sparkles */}
                    <circle cx="130" cy="40" r="2" fill="#FFD1CD" />
                    <circle cx="30" cy="80" r="1.5" fill="#FFD1CD" />
                    <path d="M140 70L144 74M144 70L140 74" stroke="#FFD1CD" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                
                <h4 className="text-base font-bold text-slate-900 mb-0.5">궁금한 내용이 있나요?</h4>
                <p className="text-xs text-slate-500 mb-3 font-medium">지금 바로 maemi chat을 경험하세요.</p>
                
                <button className="w-full py-3 bg-gradient-to-r from-[#9B6B9E] to-[#E67E73] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#E67E73]/20 hover:scale-[1.02] transition-transform">
                  maemi와 대화하기
                  <MessageCircleMore className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="pb-4">
              <h4 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-1.5">
                자주 묻는 질문 🙋‍♀️
              </h4>
              <div className="space-y-3">
                {[
                  { 
                    q: '배우자 종합검진 양도 기준이 어떻게 되나요?', 
                    a: "배우자 검진권은 '26년 기준 배우자가 1986년 이전 출생자인 경우에 본인 부모님 및 배우자 부모님에게 양도 가능합니다. (단, 26년 1월 1일 이전 입사자 및 이전 결혼한 배우자 限)" 
                  },
                  { 
                    q: "'격년'의 기준이 어떻게 되나요?", 
                    a: '배우자가 만40세에 도래하는 해부터 대상으로 선정되어 해당 년도부터 격년으로 양도 대상자가 됩니다. 단, 복직자의 배우자가 만 40세 이상인 경우 복직 차년도부터 격년으로 신청 가능합니다.' 
                  },
                  { 
                    q: '검진 예약 변경은 어떻게 하나요?', 
                    a: '검진 예약 변경은 선택(예약)하신 해당 병원으로 문의해주시기 바랍니다.' 
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white border ${openFaqIndex === idx ? 'border-[#FF7061]/30' : 'border-slate-100'} rounded-2xl overflow-hidden transition-all duration-300`}
                  >
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full text-left p-4 flex justify-between items-center group transition-colors"
                    >
                      <span className={`text-sm font-medium ${openFaqIndex === idx ? 'text-[#FF7061] font-bold' : 'text-slate-600'}`}>
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaqIndex === idx ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className={`w-4 h-4 ${openFaqIndex === idx ? 'text-[#FF7061]' : 'text-slate-300'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4">
                            <div className="h-[1px] bg-slate-50 w-full mb-3" />
                            <div className="px-2 text-xs leading-relaxed text-slate-500 font-medium">
                              {item.a}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 w-full bg-[#F1F1F1] border-t border-slate-100 px-12 py-4 flex justify-between items-center z-10">
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-6 h-6 flex items-center justify-center text-[#FF7061]">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#FF7061]">홈</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-6 h-6 flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400">채팅</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-6 h-6 flex items-center justify-center text-slate-400 group-hover:text-slate-600 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400">설정</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <VisualSection />
        <ReservationForm />
        <Features />
        
        {/* Admin Toggle for Demo */}
        <div className="py-12 bg-white flex justify-center">
          <button 
            onClick={() => setIsAdmin(!isAdmin)}
            className="text-xs text-slate-400 hover:text-slate-600 underline"
          >
            {isAdmin ? '사용자 화면으로 돌아가기' : '관리자 모드 미리보기'}
          </button>
        </div>
        
        {isAdmin && <AdminDashboard />}
      </main>
      
      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 z-50 group drop-shadow-2xl"
      >
        <div className="w-full h-full relative">
          {/* Background Squircle */}
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <rect x="0" y="0" width="100" height="100" rx="35" fill="#3F51B5" />
            
            {/* Speech Bubble / Face */}
            <path 
              d="M50 25 C32 25 22 35 22 48 C22 58 30 66 40 69 L40 82 L55 70 C68 70 78 60 78 48 C78 35 68 25 50 25 Z" 
              fill="white" 
            />
            
            {/* Headset Band */}
            <path 
              d="M24 48 C24 32 36 22 50 22 C64 22 76 32 76 48" 
              stroke="#FF7061" 
              strokeWidth="9" 
              fill="none" 
              strokeLinecap="round"
            />
            
            {/* Ear Cups */}
            <rect x="14" y="40" width="16" height="26" rx="8" fill="#FF7061" />
            <rect x="70" y="40" width="16" height="26" rx="8" fill="#FF7061" />
            
            {/* Eyes */}
            <circle cx="42" cy="48" r="3.5" fill="#FF7061" />
            <circle cx="58" cy="48" r="3.5" fill="#FF7061" />
            
            {/* Mouth */}
            <path 
              d="M40 56 Q50 72 60 56 Z" 
              fill="#FF7061" 
            />
            
            {/* Microphone */}
            <path 
              d="M78 58 L78 65 C78 74 70 74 62 74" 
              stroke="#FF7061" 
              strokeWidth="6" 
              fill="none" 
              strokeLinecap="round"
            />
            <circle cx="58" cy="74" r="5" fill="#D4E157" />
          </svg>
          
          {/* Notification Badge */}
          {!isChatOpen && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center shadow-md">
              <span className="text-[11px] text-white font-bold">1</span>
            </div>
          )}
        </div>
      </motion.button>

      <Footer />
    </div>
  );
}
