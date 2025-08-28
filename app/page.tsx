import WaitlistForm from './components/WaitlistForm'
import WaitlistCounter from './components/WaitlistCounter'
import QuickPoll from './components/QuickPoll'
import { WaitlistProvider } from './context/WaitlistContext'

export default function HomePage() {
  return (
    <WaitlistProvider>
    <div className="min-h-screen relative">
      {/* Фон - размытые вешалки с одеждой */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(45deg, #f3e7e9 25%, transparent 25%, transparent 75%, #f3e7e9 75%, #f3e7e9), linear-gradient(45deg, #f3e7e9 25%, transparent 25%, transparent 75%, #f3e7e9 75%, #f3e7e9)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
      
      {/* Градиент overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-white to-blue-100 opacity-90" />
      
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-black text-white px-3 py-1 text-xs uppercase tracking-widest mb-6">
            Beta Launch October 2025
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4">
            get<span className="italic font-light">dressed</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-light mb-2">
            Your AI Personal Stylist
          </p>
          <p className="text-lg text-gray-700 font-medium">
            Never wonder &quot;what to wear&quot; again
          </p>
        </div>

        {/* НОВОЕ: Мокап приложения */}
{/* Профессиональный iPhone 15 Pro мокап */}
<div className="mb-20 relative">
  <div className="max-w-[360px] mx-auto">
    {/* iPhone корпус */}
    <div className="bg-gray-900 rounded-[3rem] p-[8px] shadow-2xl">
      <div className="bg-black rounded-[2.8rem] relative overflow-hidden" style={{ height: '740px' }}>
        {/* Screen */}
        <div className="bg-white h-full rounded-[2.7rem] overflow-hidden">
          {/* Status bar с Dynamic Island */}
          <div className="bg-white px-6 pt-3 pb-2 relative">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-3 w-32 h-8 bg-black rounded-full"></div>
            
            {/* Время и иконки */}
            <div className="flex justify-between items-center relative z-10">
              <span className="text-sm text-black font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
                  <rect x="1" y="14" width="3" height="6" rx="0.5"/>
                  <rect x="6" y="10" width="3" height="10" rx="0.5"/>
                  <rect x="11" y="6" width="3" height="14" rx="0.5"/>
                  <rect x="16" y="2" width="3" height="18" rx="0.5"/>
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                </svg>
                <div className="flex items-center">
                  <div className="w-6 h-3 border border-black rounded-sm relative">
                    <div className="absolute inset-0 bg-black rounded-sm" style={{width: '80%'}}></div>
                  </div>
                  <div className="w-1 h-2 bg-black rounded-r-sm -ml-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App содержимое */}
          <div className="px-4 flex flex-col" style={{ height: 'calc(100% - 50px)' }}>
            {/* App Header - уменьшен */}
            <div className="py-3 border-b border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-wider text-center font-medium">
                Friday • August 23
              </p>
              <h2 className="text-xl font-bold text-center mt-1 text-black">
                Today&apos;s Outfits
              </h2>
            </div>
            
            {/* Outfit карточка - основная часть */}
            <div className="flex-1 py-3 flex flex-col">
              <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 relative">
                {/* СВАЙПЫ подсказки */}
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-red-500 opacity-30">
                  <div className="bg-red-100 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-green-500 opacity-30">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Header с badges */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2">
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
                      WORK
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                      AC SAFE
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">1/3</span>
                </div>
                
                {/* Outfit изображения - РЕАЛЬНЫЕ ФОТО */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="aspect-square bg-white rounded overflow-hidden mb-1">
                      {/* Вариант 1: URL изображения */}
                      <img 
                        src="https://i.imgur.com/mDLSVA0.jpeg" 
                        alt="White Shirt"
                        className="w-full h-full object-cover"
                      />
                      {/* Вариант 2: Если нет интернета, используй base64 или emoji */}
                      {/* <div className="w-full h-full flex items-center justify-center text-4xl bg-blue-50">👔</div> */}
                    </div>
                    <p className="text-[10px] text-center text-gray-700 font-medium">White Oxford</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="aspect-square bg-white rounded overflow-hidden mb-1">
                      <img 
                        src="https://i.imgur.com/Nad0GYN.jpeg" 
                        alt="Navy Chinos"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] text-center text-gray-700 font-medium">Navy Chinos</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="aspect-square bg-white rounded overflow-hidden mb-1">
                      <img 
                        src="https://i.imgur.com/9xKTy6y.jpeg" 
                        alt="Brown Loafers"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] text-center text-gray-700 font-medium">Brown Loafers</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="aspect-square bg-white rounded overflow-hidden mb-1">
                      <img 
                        src="https://i.imgur.com/7yhCl26.jpeg" 
                        alt="Watch"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] text-center text-gray-700 font-medium">Silver Watch</p>
                  </div>
                </div>
                
                {/* Описание - уменьшено */}
                <div className="mb-3">
                  <h3 className="font-bold text-base mb-1 text-black">Executive Ready</h3>
                  <p className="text-xs text-gray-600">
                    Perfect for office meetings and DIFC lunch
                  </p>
                </div>
                
                {/* Climate & Context - уменьшено */}
                <div className="bg-gray-50 rounded-lg p-2 mb-3">
                  <div className="flex justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <span>☀️</span>
                      <span className="text-gray-700">43°C → 20°C</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📍</span>
                      <span className="text-gray-700">Office day</span>
                    </div>
                  </div>
                </div>
                
                {/* Swipe индикаторы внизу карточки */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-red-500">
                    <span className="text-xl">👎</span>
                    <span className="text-xs font-medium">SKIP</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-black rounded-full"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 text-green-500">
                    <span className="text-xs font-medium">WEAR</span>
                    <span className="text-xl">👍</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Tab Bar - компактный */}
            <div className="border-t border-gray-100 py-2">
              <div className="flex justify-around">
                <button className="flex flex-col items-center gap-1 py-1">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  <span className="text-[9px] text-black">Today</span>
                </button>
                <button className="flex flex-col items-center gap-1 py-1">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  </svg>
                  <span className="text-[9px] text-gray-400">Plan</span>
                </button>
                <button className="flex flex-col items-center gap-1 py-1">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                  </svg>
                  <span className="text-[9px] text-gray-400">Closet</span>
                </button>
                <button className="flex flex-col items-center gap-1 py-1">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-[9px] text-gray-400">Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Caption */}
  <div className="text-center mt-6">
    <p className="text-sm text-gray-700 font-medium">
      Swipe right to wear, left for next option
    </p>
    <p className="text-xs text-gray-500 mt-1">
      Launching October 2025
    </p>
  </div>
</div>

        {/* НОВОЕ: User Flow секция */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            From closet photo to perfect outfit in 3 simple steps
          </p>
          
          {/* User Flow Steps */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2" style={{zIndex: -1}}></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center flex flex-col">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-4 relative flex-1 flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div className="text-4xl mb-3">📸</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Snap Your Wardrobe</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Open your closet</p>
                    <p>• Take one photo</p>
                    <p>• AI recognizes every item</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center flex flex-col">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-4 relative flex-1 flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div className="text-4xl mb-3">⚙️</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Set Your Preferences</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• Colors and styles</p>
                    <p>• Work events & occasions</p>
                    <p>• Dress codes</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center flex flex-col">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-4 relative flex-1 flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div className="text-4xl mb-3">👕</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Get Outfits</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• 3 curated options daily</p>
                    <p>• Swipe left/right to choose</p>
                    <p>• AI learns your style preferences</p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="text-center flex flex-col">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 mb-4 relative flex-1 flex flex-col">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Always Stylish!</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>• No morning struggles</p>
                    <p>• Perfect for AC transitions</p>
                    <p>• Event-appropriate every time</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* НОВОЕ: Trust badges с УТП про гардероб */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">3 sec</p>
            <p className="text-sm text-gray-600">Outfit generation</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">1 photo</p>
            <p className="text-sm text-gray-600">Entire closet scanned</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">15+</p>
            <p className="text-sm text-gray-600">Style parameters</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">24/7</p>
            <p className="text-sm text-gray-600">Always ready</p>
          </div>
        </div>

        {/* НОВОЕ: Выделенное УТП про гардероб */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 mb-16 text-center">
          <div className="text-4xl mb-3">📸 ➡️ 🚀</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Skip the tedious item-by-item setup
          </h3>
          <p className="text-gray-700 mb-6">
            Just take ONE photo of your open closet. Our AI instantly recognizes every piece, creates your digital wardrobe, and starts styling you in minutes.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-black">Traditional apps:</span> 2-3 hours manual input<br/>
              <span className="font-bold text-blue-600">GetDressed:</span> 30 seconds AI scan ⚡
            </p>
          </div>
        </div>
        
        {/* Form с улучшениями */}
        <div className="bg-white shadow-xl p-8 rounded-none border-2 border-black mb-20">
          <h2 className="text-5xl font-black text-black text-center mb-8">
            JOIN THE WAITLIST
          </h2>
          
          {/* НОВОЕ: Конкретные бенефиты */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-6">
            <p className="text-sm font-bold text-gray-800">🎯 First 100 members get:</p>
            <ul className="text-sm text-gray-700 mt-1">
              <li>• 50% OFF lifetime</li>
              <li>• Priority AI processing</li>
              <li>• Exclusive beta features access</li>
            </ul>
          </div>
          
          {/* НОВОЕ: Интерактивный счетчик */}
          <WaitlistCounter />
          
          <WaitlistForm />
          
          {/* НОВОЕ: Privacy */}
          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 Your data is secure. We never share your information.
          </p>
        </div>

<QuickPoll />

        {/* Features улучшенные */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 border-2 border-gray-200 hover:border-black transition group">
            <div className="text-4xl mb-3">👔</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-black">
              Smart Wardrobe
            </h3>
            <p className="text-gray-600">
              AI analyzes your style in seconds, not hours
            </p>
          </div>
          <div className="bg-white p-6 border-2 border-gray-200 hover:border-black transition group">
            <div className="text-4xl mb-3">🌡️</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-black">
              AC Transition Ready
            </h3>
            <p className="text-gray-600">
              Perfect layers for UAE&apos;s extreme AC culture
            </p>
          </div>
          <div className="bg-white p-6 border-2 border-gray-200 hover:border-black transition group">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-black">
              Context Aware
            </h3>
            <p className="text-gray-600">
              From government offices to beach clubs
            </p>
          </div>
        </div>

        {/* НОВОЕ: Социальное доказательство */}
        <div className="text-center mb-16 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">What early testers say:</p>
          <p className="italic text-gray-800">
            &quot;Finally someone understands the Abu Dhabi office to mall struggle!&quot;
          </p>
          <p className="text-sm text-gray-500 mt-2">- Sarah K., ADNOC employee</p>
        </div>

        {/* Social proof */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            Built with ❤️ in Abu Dhabi • Works across all UAE
          </p>
          <img src="/logo.jpeg" alt="GetDressed Logo" className="w-26 h-26 object-contain mx-auto border-2 border-white" />
        </div>
      </div>
    </div>
    </WaitlistProvider>
  )
}