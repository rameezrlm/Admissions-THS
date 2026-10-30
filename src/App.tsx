import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Languages, 
  HelpCircle,
  ArrowRight,
  Maximize2,
  ChevronDown
} from 'lucide-react';

const TEST_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScilTWYWKKmMF-4r9-XCGOc-7aFyPsqLpsUqM_8AH0R3ETWcw/viewform?usp=sharing&ouid=103184450591655164099";

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  const handleStartTest = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsRedirecting(true);
    // Smooth redirect
    setTimeout(() => {
      window.location.href = TEST_FORM_URL;
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-emerald-700 selection:text-white">
      {/* Top Header Bar */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Zone */}
          <div className="flex items-center gap-3">
            <img 
              src="/assets/aistudio/image_372c6c74.png" 
              alt="Taleem-o-Hunar Society Logo" 
              className="w-10 h-10 object-contain drop-shadow-xs"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 tracking-tight leading-none text-base sm:text-lg">
                Taleem-o-Hunar Society
              </span>
              <span className="text-xs text-emerald-800 font-semibold tracking-wide mt-0.5">
                {lang === 'en' ? 'Online Assessment Portal' : 'آن لائن امتحانی پورٹل'}
              </span>
            </div>
          </div>

          {/* Controls: Language & Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors border border-slate-200"
              title="Toggle English / اردو"
            >
              <Languages className="w-3.5 h-3.5 text-slate-600" />
              <span>{lang === 'en' ? 'اردو' : 'English'}</span>
            </button>

            <a
              href={TEST_FORM_URL}
              onClick={handleStartTest}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-md shadow-xs transition-colors whitespace-nowrap"
            >
              <span>{lang === 'en' ? 'Start Test' : 'ٹیسٹ شروع کریں'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center">
        {/* Hero Card */}
        <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 flex flex-col items-center text-center relative overflow-hidden">
          {/* Subtle green ambient accent line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700" />

          {/* Logo Badge */}
          <div className="relative mb-6 group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2 bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-600/30 shadow-md flex items-center justify-center">
              <img 
                src="/assets/aistudio/image_372c6c74.png" 
                alt="Taleem-o-Hunar Society" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Welcome Message */}
          <div className="max-w-2xl mx-auto space-y-3">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en' ? (
                <>Welcome to Taleem-o-Hunar Society</>
              ) : (
                <span className="font-urdu text-3xl sm:text-4xl leading-relaxed">
                  تعلیم وہنر سوسائٹی کے امتحانی پورٹل میں خوش آمدید
                </span>
              )}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === 'en' ? (
                <>
                  Official evaluation and skill assessment session. Click the button below to open the test form and complete your answers.
                </>
              ) : (
                <span className="font-urdu text-base sm:text-lg block text-slate-700">
                  تمام امیدواروں کے لیے باقاعدہ آن لائن ٹیسٹ۔ برائے مہربانی نیچے دیے گئے بٹن پر کلک کریں اور اپنا ٹیسٹ شروع کریں۔
                </span>
              )}
            </p>
          </div>

          {/* Big Start Test Button (User's primary requirement) */}
          <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-sm">
            <a
              href={TEST_FORM_URL}
              onClick={handleStartTest}
              className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>{lang === 'en' ? 'Start Test' : 'Start Test (ٹیسٹ شروع کریں)'}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            {isRedirecting && (
              <p className="text-xs text-emerald-800 font-medium animate-pulse">
                {lang === 'en' ? 'Redirecting to test form...' : 'فارم پر منتقل کیا جا رہا ہے...'}
              </p>
            )}

            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Google Form
              </span>
              <span>·</span>
              <a 
                href={TEST_FORM_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1"
              >
                <span>Open in new tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Pre-Test Checklist */}
          <div className="mt-10 w-full pt-8 border-t border-slate-100 text-left">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">
              {lang === 'en' ? 'Important Instructions' : 'اہم ہدایات'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <FileText className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {lang === 'en' ? 'Candidate Details' : 'امیدوار کی معلومات'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    {lang === 'en' 
                      ? 'Ensure your Full Name, Roll No / Phone, and email match your registration.'
                      : 'اپنا مکمل نام، فون نمبر اور کوائف درست درج کریں۔'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {lang === 'en' ? 'Submission' : 'بروقت جمع کروائیں'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    {lang === 'en'
                      ? 'Attempt all mandatory questions and do not reload the page while answering.'
                      : 'تمام لازمی سوالات حل کریں اور صفحہ ریفریش نہ کریں۔'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {lang === 'en' ? 'Single Attempt' : 'ایک بار کوشش'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    {lang === 'en'
                      ? 'Each candidate is allowed one official submission. Review before final submit.'
                      : 'ایک امیدوار صرف ایک مرتبہ ٹیسٹ جمع کروا سکتا ہے۔'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Form Preview Toggle (Convenience Option) */}
          <div className="mt-8 pt-4 w-full flex flex-col items-center">
            <button
              onClick={() => setShowEmbed(!showEmbed)}
              className="text-xs font-medium text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>
                {showEmbed 
                  ? (lang === 'en' ? 'Hide embedded form view' : 'فارم چھپائیں') 
                  : (lang === 'en' ? 'Want to solve on this page? View embedded form' : 'اسی صفحہ پر ٹیسٹ حل کریں')}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showEmbed ? 'rotate-180' : ''}`} />
            </button>

            {showEmbed && (
              <div className="w-full mt-4 rounded-xl overflow-hidden border border-slate-300 shadow-inner bg-slate-100 p-1">
                <div className="bg-white px-3 py-2 text-xs text-slate-500 flex items-center justify-between border-b border-slate-200">
                  <span>Google Forms Portal</span>
                  <a
                    href={TEST_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Full Screen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src={TEST_FORM_URL}
                  title="Taleem-o-Hunar Society Test"
                  width="100%"
                  height="700"
                  className="w-full rounded-b-lg border-0 bg-white"
                >
                  Loading Google Form...
                </iframe>
              </div>
            )}
          </div>
        </div>

        {/* Need Help Accordion */}
        <div className="mt-6 w-full max-w-md text-center">
          <button
            onClick={() => setShowFaq(!showFaq)}
            className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center gap-1.5 transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Form not opening? Troubleshooting tips' : 'اگر فارم نہ کھلے تو کیا کریں؟'}</span>
          </button>

          {showFaq && (
            <div className="mt-3 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 text-left space-y-2 shadow-xs">
              <p>
                <strong>1. Google Account Login:</strong> Make sure you are signed into your browser with an active Google account.
              </p>
              <p>
                <strong>2. Direct URL:</strong> If popup blockers prevent redirecting,{' '}
                <a 
                  href={TEST_FORM_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-emerald-700 font-semibold underline"
                >
                  click this direct link
                </a>{' '}
                to open the form.
              </p>
              <p>
                <strong>3. Mobile Users:</strong> On smartphone browsers, the form opens seamlessly in Chrome or Safari.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Taleem-o-Hunar Society</span>
            <span>·</span>
            <span className="font-urdu text-emerald-800 font-bold">تعلیم وہنر سوسائٹی</span>
          </div>
          <p>© {new Date().getFullYear()} Taleem-o-Hunar Society. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
