import { ChevronRight, Target, TrendingUp, Calendar, FileText, Video, Dumbbell, MessageCircle, Activity } from 'lucide-react';

export function TotalSupportPlanPage() {
  return (
    <div className="pt-16 bg-black">
      {/* Slide 1: Title Slide */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Abstract Background Elements - Futuristic */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Button */}
          <div className="absolute top-8 left-4 sm:left-8">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </button>
          </div>

          <div className="py-20">
            {/* Badge */}
            <div className="inline-block mb-8">
              <span className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-500/50 rounded-full text-cyan-400 tracking-wider uppercase shadow-lg shadow-cyan-500/20">
                <Target className="w-4 h-4 mr-2" />
                本気の選手限定プログラム
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-300 mb-8 tracking-tight">
              Total Support Plan
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl lg:text-4xl text-cyan-400 mb-4 max-w-5xl mx-auto leading-relaxed">
              本気で成長したい選手へ。
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              結果へ導く<span className="text-cyan-400 font-semibold">「3ヶ月集中」</span>総合サポート
            </p>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <ChevronRight className="w-8 h-8 text-cyan-400/60 mx-auto rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Plan Purpose and Target */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 tracking-wide">
                <TrendingUp className="w-4 h-4 mr-2" />
                CONCEPT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              「成長実感」を<br className="sm:hidden" />デザインする
            </h2>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Catchphrase */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-16 mb-12 shadow-2xl">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed text-center">
                技術・フィジカル・メンタルを総合サポート。<br />
                結果が出るまで伴走する<br />
                <span className="text-orange-400 font-bold">"トータル型"</span> の指導。
              </p>
            </div>

            {/* Target Audience */}
            <div className="bg-orange-50 border-4 border-orange-500 rounded-2xl p-8 lg:p-12 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    【本気度の高い選手 限定】
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    このプランは、真剣に成長を目指す選手のための特別プログラムです。<br />
                    3ヶ月間、あなたの目標達成に全力でコミットします。
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Value Proposition */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-orange-500"></div>
                プレミアムな価値
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                料金でふるいにかけられる分、意識が高く、指導効果が出やすい環境を実現。<br />
                成長実感が、あなたの次のステージへの原動力となります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Service Details */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full tracking-wide">
                <Calendar className="w-4 h-4 mr-2" />
                3 MONTHS INTENSIVE PROGRAM
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              3ヶ月集中サポート
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              サービス内容
            </p>
          </div>

          {/* Service Categories */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Category 1: Core Training */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 border-orange-500">
              <div className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-500 p-3 rounded-xl">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      1. 現場指導（メイン）
                    </h3>
                    <p className="text-gray-600">指導の質を最大化する対面レッスン</p>
                  </div>
                </div>
                <div className="ml-0 lg:ml-20">
                  <div className="bg-orange-50 rounded-xl p-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-orange-600" />
                      <p className="text-xl font-bold text-gray-900">
                        対面レッスン: <span className="text-orange-600">全10回</span> （週1ペース）
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 2: Analysis & Design */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 border-cyan-500">
              <div className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-cyan-500 p-3 rounded-xl">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      2. フィジカルセッション
                    </h3>
                    <p className="text-gray-600">身体能力を引き出す専門トレーニング</p>
                  </div>
                </div>
                <div className="ml-0 lg:ml-20">
                  <div className="bg-cyan-50 rounded-xl p-6">
                    <div className="flex items-center gap-3">
                      <Dumbbell className="w-6 h-6 text-cyan-600" />
                      <p className="text-xl font-bold text-gray-900">
                        フィジカルセッション: <span className="text-cyan-600">3回</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 3: Analysis & Design */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 border-purple-500">
              <div className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-500 p-3 rounded-xl">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      3. 動画・試合分析
                    </h3>
                    <p className="text-gray-600">データに基づく戦略的アプローチ</p>
                  </div>
                </div>
                <div className="ml-0 lg:ml-20 space-y-4">
                  <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4">
                    <Video className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">試合・練習動画分析</p>
                      <p className="text-gray-600"><span className="text-purple-600 font-bold">5回</span> - 詳細なフィードバックで課題を明確化</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4">
                    <FileText className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">成長レポート</p>
                      <p className="text-gray-600">初回 / 中間 / 最終に提出（「成長ストーリー」を明確化）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-4">
                    <Dumbbell className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">自主練メニュー提供</p>
                      <p className="text-gray-600">個別にカスタマイズされたトレーニングプラン</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 4: Continuous Support */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-8 border-blue-500">
              <div className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-500 p-3 rounded-xl">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      4. チャットサポート（随時対応）
                    </h3>
                    <p className="text-gray-600">3ヶ月間、いつでもあなたをサポート</p>
                  </div>
                </div>
                <div className="ml-0 lg:ml-20">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <p className="text-xl text-gray-900 font-bold mb-2">
                          メンタル・生活習慣サポート
                        </p>
                        <p className="text-gray-600">チャットで随時対応 - 疑問や不安をすぐに解消</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Maximization Note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl px-8 py-6 shadow-lg">
              <p className="text-xl sm:text-2xl font-bold">
                すべてが連動し、「指導の質」を最大化
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Pricing and CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-orange-500/20 border-2 border-orange-500 rounded-full text-orange-400 tracking-wide">
                INVESTMENT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              料金と申込について
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-12 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Total Support Plan
                </h3>
                <p className="text-xl text-orange-100">
                  3ヶ月集中サポートプログラム
                </p>
              </div>

              {/* Price */}
              <div className="bg-gray-50 px-8 py-12 text-center border-b-4 border-orange-500">
                <div className="mb-4">
                  <span className="text-gray-600 text-xl">プログラム料金</span>
                </div>
                <div className="mb-2">
                  <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900">
                    ¥110,000
                  </span>
                  <span className="text-2xl text-gray-600 ml-2">（税抜）</span>
                </div>
                <div className="text-3xl text-orange-600 font-bold">
                  税込 ¥121,000
                </div>
              </div>

              {/* Features */}
              <div className="p-8 lg:p-12 bg-white">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full p-2 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl text-gray-900 font-bold mb-1">3ヶ月間の完全サポート</p>
                      <p className="text-gray-600">対面レッスン全10回 + 継続的なオンラインサポート</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full p-2 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl text-gray-900 font-bold mb-1">「成長ストーリー」を設計</p>
                      <p className="text-gray-600">分析・メンタル・動画添削を組合せ、質を最大化</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 rounded-full p-2 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl text-gray-900 font-bold mb-1">本気の選手だけの特別環境</p>
                      <p className="text-gray-600">高い意識を持つ仲間との切磋琢磨</p>
                    </div>
                  </div>
                </div>

                {/* Final Appeal */}
                <div className="mt-10 pt-10 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 text-center border-2 border-orange-500">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      本気で成長したい選手限定
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      このプログラムは、真剣に自分を変えたい、<br className="hidden sm:block" />
                      結果を出したい選手のための特別な投資です。<br />
                      あなたの3ヶ月後の成長した姿を、一緒に実現しましょう。
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-10 text-center">
                  <a
                    href="mailto:info.dots.personal@gmail.com?subject=Total Support Plan お申し込み・お問い合わせ"
                    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-2xl font-bold">お問い合わせ・お申し込み</span>
                  </a>
                  <p className="mt-6 text-gray-600 text-lg">
                    メール: info.dots.personal@gmail.com<br />
                    担当: 運営代表 関口
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              ※ プログラムの詳細や開始時期については、メールにてお気軽にお問い合わせください。<br />
              ※ 定員に達し次第、募集を締め切らせていただきます。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}