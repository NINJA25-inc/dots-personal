import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, CreditCard, Banknote, Crown } from 'lucide-react';

export function PricingSection() {
  const mainPlans = [
    {
      name: "初回体験",
      price: "4,000",
      duration: "60分",
      perSession: "4,000",
      badge: "毎月10名限定",
      badgeColor: "bg-red-500",
      description: "まずは体験レッスンでDOTSメソッドを実感してください",
      features: [
        "個別カウンセリング",
        "マンツーマン指導",
        "動画分析",
        "詳細フィードバック",
        "今後の相談（LINEサポート付き）"
      ],
      popular: false,
      buttonText: "体験を申し込む",
      buttonColor: "relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] border border-red-400/30 overflow-hidden group"
    },
    {
      name: "単発プラン",
      price: "12,000",
      duration: "60分",
      perSession: "12,000",
      badge: "都度払い",
      badgeColor: "bg-gray-500",
      description: "必要な時に気軽にレッスンを受けられます",
      features: [
        "マンツーマン指導",
        "詳細フィードバック",
        "LINE相談サポート"
      ],
      popular: false,
      buttonText: "申し込む",
      buttonColor: "bg-gray-600 hover:bg-gray-700"
    },
    {
      name: "回数券8回プラン",
      price: "64,000",
      duration: "60分 × 8回",
      perSession: "8,000",
      badge: "お得プラン",
      badgeColor: "bg-blue-500",
      description: "継続的な成長を目指すお得なプラン",
      features: [
        "有効期限：6ヶ月間",
        "90分コースも選択可能",
        "マンツーマン指導",
        "動画分析付き",
        "試合動画分析　自主練メニュー作成",
        "詳細フィードバック",
        "LINE相談サポート",
        "成長記録管理"
      ],
      popular: false,
      buttonText: "お得プランを選ぶ",
      buttonColor: "bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 hover:from-blue-600 hover:via-cyan-600 hover:to-green-600"
    }
  ];

  const ticketPlans = [
    {
      sessions: "5回",
      duration60: "45,000円",
      perSession60: "9,000円",
      duration90: "63,000円",
      perSession90: "12,600円"
    },
    {
      sessions: "8回",
      duration60: "64,000円",
      perSession60: "8,000円",
      duration90: "90,000円",
      perSession90: "11,250円",
      popular: true
    }
  ];

  const monthlyPlans = [
    {
      sessions: "1回",
      duration60: "9,000円",
      perSession60: "9,000円",
      duration90: "12,500円",
      perSession90: "12,500円"
    },
    {
      sessions: "2回",
      duration60: "17,000円",
      perSession60: "8,500円",
      duration90: "24,000円",
      perSession90: "12,000円"
    },
    {
      sessions: "3回",
      duration60: "24,000円",
      perSession60: "8,000円",
      duration90: "33,000円",
      perSession90: "11,000円"
    },
    {
      sessions: "4回",
      duration60: "30,000円",
      perSession60: "7,500円",
      duration90: "42,000円",
      perSession90: "10,500円"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            あなたの目標やペースに合わせて選べる柔軟な料金プラン。
            継続しやすい価格設定で、長期的な成長をサポートします。
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden ${
                plan.popular ? 'ring-4 ring-blue-500/30 scale-105' : ''
              } ${plan.badge === "お得プラン" ? 'ring-4 ring-blue-500/50 shadow-blue-100' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white px-6 py-2 text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    人気No.1
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4 relative">
                <div className="mb-3">
                  <Badge className={`${plan.badgeColor} text-white text-xs px-3 py-1`}>
                    {plan.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </CardTitle>
                <div className="mb-3">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    ¥{plan.price}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{plan.duration}</div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-3 mb-4">
                  <div className="text-lg font-bold text-gray-900">
                    1回あたり ¥{plan.perSession}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => {
                    if (plan.name === "初回体験") {
                      window.open('https://forms.gle/b8P2LMDL2x5fJp4p7', '_blank');
                    } else {
                      scrollToSection('contact');
                    }
                  }}
                  className={`w-full ${plan.buttonColor} text-white transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 py-3 font-semibold`}
                >
                  {plan.name === "初回体験" && (
                    <>
                      {/* Background gradient overlay with transparency */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                      
                      {/* Pulsing glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-red-600/30 rounded-lg blur-sm animate-pulse opacity-70"></div>
                    </>
                  )}
                  <span className={`relative z-10 ${plan.name === "初回体験" ? 'drop-shadow-sm' : ''}`}>
                    {plan.buttonText}
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Pricing Tables */}
        <div className="space-y-12">
          {/* 回数券プラン */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
              回数券プラン（詳細料金表）
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-3 sm:px-6 font-bold text-gray-900 text-sm sm:text-base">回数</th>
                    <th className="text-center py-4 px-3 sm:px-6 font-bold text-gray-900 text-sm sm:text-base">60分コース</th>
                    <th className="text-center py-4 px-3 sm:px-6 font-bold text-gray-900 text-sm sm:text-base">90分コース</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketPlans.map((plan, index) => (
                    <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${plan.popular ? 'bg-gradient-to-r from-blue-50 to-green-50 ring-2 ring-blue-200' : ''}`}>
                      <td className="py-4 sm:py-6 px-3 sm:px-6">
                        <div className="flex items-center">
                          <span className="font-bold text-base sm:text-lg text-gray-900">{plan.sessions}</span>
                          {plan.popular && (
                            <Badge className="ml-2 sm:ml-3 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs">
                              人気
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="space-y-1">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">{plan.duration60}</div>
                          <div className="text-xs sm:text-sm text-blue-600 font-semibold">
                            （1回あたり{plan.perSession60}）
                          </div>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="space-y-1">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">{plan.duration90}</div>
                          <div className="text-xs sm:text-sm text-green-600 font-semibold">
                            （1回あたり{plan.perSession90}）
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 月額プラン */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
              月額プラン（1ヶ月）
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-3 sm:px-6 font-bold text-gray-900 text-sm sm:text-base">回数/月</th>
                    <th className="text-center py-4 px-3 sm:px-6 font-bold text-gray-900 text-sm sm:text-base">60分コース</th>
                    <th className="text-center py-4 px-3 sm:px-6 font-bold text-gray-900 text-sm sm:text-base">90分コース</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyPlans.map((plan, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 sm:py-6 px-3 sm:px-6">
                        <span className="font-bold text-base sm:text-lg text-gray-900">{plan.sessions}</span>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="space-y-1">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">{plan.duration60}</div>
                          <div className="text-xs sm:text-sm text-blue-600 font-semibold">
                            （1回あたり{plan.perSession60}）
                          </div>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="space-y-1">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">{plan.duration90}</div>
                          <div className="text-xs sm:text-sm text-green-600 font-semibold">
                            （1回あたり{plan.perSession90}）
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 特待生制度セクション */}
        <div className="max-w-xl mx-auto mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-slate-200">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <Badge className="bg-slate-600 text-white px-3 py-1 text-xs">
                  <Crown className="w-3 h-3 mr-1" />
                  特別制度
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                特待生制度
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                子どもたちの将来を応援する制度です。
              </p>
            </div>

            <div className="text-center mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">対象選手（目安）</h4>
              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto mb-6">
                <div className="text-xs text-gray-600 bg-slate-50 rounded-lg py-2 px-3">
                  地域トレセン選出者
                </div>
                <div className="text-xs text-gray-600 bg-slate-50 rounded-lg py-2 px-3">
                  都県選抜選出者
                </div>
                <div className="text-xs text-gray-600 bg-slate-50 rounded-lg py-2 px-3">
                  関東大会出場者
                </div>
                <div className="text-xs text-gray-600 bg-slate-50 rounded-lg py-2 px-3">
                  全国大会出場者
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                詳細はお問い合わせいただければご案内いたします。
              </p>

              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Crown className="w-4 h-4 mr-2" />
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            お支払い方法
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">現金払い</h4>
              <p className="text-sm text-gray-600">レッスン当日に現金でお支払い</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">口座振込</h4>
              <p className="text-sm text-gray-600">事前に指定口座へお振込み</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
            <p className="text-sm text-gray-700 text-center space-y-2">
              <span className="block font-semibold text-yellow-800">※ 料金は税込みです。</span>
              <span className="block">別途交通費（実費）を頂戴します。</span>
              <span className="block">お支払い方法は現金または口座振込</span>
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}