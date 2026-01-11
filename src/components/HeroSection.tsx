import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/6c640b5849a41dad1ee20f5904b25495a0017852.png';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Content Container - Apple-style split layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-16 lg:py-20">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight tracking-tight">
                <span className="block mb-1 whitespace-nowrap">DOTSパーソナル</span>
                <span className="block mb-1 italic whitespace-nowrap">圧倒的に寄り添い、</span>
                <span className="block italic whitespace-nowrap">徹底的に質にこだわる。</span>
              </h1>

              {/* Subtitle with blue to red gradient */}
              <div className="text-lg sm:text-xl lg:text-2xl space-y-4 mt-8">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide">
                  育成年代向け個人出張型パーソナル
                </p>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-normal text-gray-500">選手一人ひとりの可能性を最大限に引き出す</p>
                  <p className="text-base sm:text-lg font-normal text-gray-500">次世代のサッカー育成プログラム</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Moved higher up */}
            <div className="space-y-6 mt-8">
              {/* Price Information */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    初回体験レッスン
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    ¥2,000
                  </p>
                </div>
                
                {/* Main CTA Button */}
                <Button 
                  onClick={() => window.open('https://forms.gle/b8P2LMDL2x5fJp4p7', '_blank')}
                  className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 overflow-hidden group border border-red-400/30"
                >
                  {/* Background gradient overlay with transparency */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                  
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-red-600/30 rounded-2xl blur-lg animate-pulse opacity-70"></div>
                  
                  <span className="relative z-10 drop-shadow-sm">体験レッスン申し込む</span>
                </Button>
              </div>

              {/* Secondary CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button 
                  onClick={() => scrollToSection('method')}
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  メソッドを知る
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  理念をもっと見る
                </Button>
              </div>
            </div>

            {/* Statistics - Moved higher up */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/50 mt-8">
              <div className="text-center group">
                <div className="text-xl lg:text-2xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  対象
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <div>小学生～高校生</div>
                  <div>初心者からトップレベルまで</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-xl lg:text-2xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  募集地域
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <div>東京・神奈川</div>
                  <div>埼玉・千葉</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="text-xl lg:text-2xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  個人レッスン
                </div>
                <div className="text-xs sm:text-sm text-gray-600">マンツーマン指導</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Adjusted positioning to align with DOTS text */}
          <div className="relative flex items-start justify-center lg:justify-end h-full pt-8 lg:pt-0">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Main Image Container - Adjusted to align with DOTS text */}
              <div className="relative aspect-[3/4] lg:aspect-[2/3] xl:aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="サッカートレーニング"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/8 via-transparent to-[#10b981]/10"></div>
              </div>
              
              {/* Floating accent elements - Updated to match left bottom green color */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#10b981]/50 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#10b981]/40 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#10b981]/50 rounded-xl blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}