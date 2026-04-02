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
  Menu, 
  X,
  Heart,
  ShieldCheck,
  Users,
  Bell,
  Globe,
  LogOut,
  Search,
  Headset,
  FileText
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

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
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
          
          <div className="hidden md:flex items-center gap-12 mr-auto ml-16">
            <a href="#" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">양도신청</a>
            <a href="#" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">신청조회</a>
            <a href="#" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">검진기관</a>
            <a href="#" className="text-slate-600 hover:text-brand-primary font-medium transition-colors">고객센터</a>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4"
          >
            <a href="#" className="block text-slate-600 font-medium">양도신청</a>
            <a href="#" className="block text-slate-600 font-medium">신청조회</a>
            <a href="#" className="block text-slate-600 font-medium">검진기관</a>
            <a href="#" className="block text-slate-600 font-medium">고객센터</a>
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
    date: ''
  });

  const institutions = ['삼성강북병원', '삼성창원병원', '서울대학교병원', '아산병원', '세브란스병원'];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">건강검진 양도 신청</h2>
          <p className="text-slate-500">원하시는 검진 대상과 기관을 선택하여 양도 신청을 진행하실 수 있습니다.</p>
        </div>

        <div className="card">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-primary" /> 검진 대상자
                </label>
                <input 
                  type="text" 
                  placeholder="성함을 입력하세요" 
                  className="input-field"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
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

            <div className="pt-6 border-t border-slate-100">
              <button 
                type="button"
                className="w-full btn-primary text-lg py-4"
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

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

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
      
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-accent rounded-full border-2 border-white flex items-center justify-center shadow-md">
            <span className="text-[11px] text-white font-bold">1</span>
          </div>
        </div>
      </motion.button>

      <Footer />
    </div>
  );
}
