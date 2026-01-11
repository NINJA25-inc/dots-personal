import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, CreditCard, Banknote, Crown, Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PricingPage() {
  const navigate = useNavigate();

  const mainPlans = [
    {
      name: "初回体験",
      price: "2,000",
      duration: "60分",
      perSession: "2,000",
      badge: "初回限定",
      badgeColor: "bg-red-500",
      description: "まずは体験レッスンでDOTSメソッドを実感してください",
      features: [
        "個別カウンセリング",
        "マンツーマン指導",
        "詳細フィードバック",
        "今後の相談（LINEサポート付き）"
      ],
      popular: false,
      buttonText: "体験を申し込む",
      buttonColor: "relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 shadow-[0_0_25px_rgba(239,68,68,0.4)] hover:shadow-[0_0_35px_rgba(239,68,68,0.6)] border border-red-400/30 overflow-hidden group"
    },
    {
      name: "回数券プラン",
      price: "52,000",
      duration: "60分 × 8回",
      perSession: "6,500",
      badge: "人気No.1",
      badgeColor: "bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500",
      description: "継続的な成長を目指すお得なプラン",
      features: [
        "90分コースも選択可能",
        "マンツーマン指導",
        "動画分析付き",
        "試合動画分析・自主練メニュー作成",
        "詳細フィードバック",
        "LINE相談サポート",
        "成長記録管理"
      ],
      popular: true,
      buttonText: "回数券プランを選ぶ",
      buttonColor: "bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 hover:from-blue-600 hover:via-cyan-600 hover:to-green-600",
      scrollTo: "ticket-details"
    },
    {
      name: "月額プラン",
      price: "24,000",
      duration: "60分 × 4回/月",
      perSession: "6,000",
      badge: "継続プラン",
      badgeColor: "bg-green-500",
      description: "毎月定期的にレッスンを受けられるプラン",
      features: [
        "月4回レッスン",
        "90分コースも選択可能",
        "マンツーマン指導",
        "動画分析付き",
        "詳細フィードバック",
        "LINE相談サポート",
        "成長記録管理"
      ],
      popular: false,
      buttonText: "月額プランを選ぶ",
      buttonColor: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600",
      scrollTo: "monthly-details"
    }
  ];

  const ticketPlans = [
    {
      sessions: "5回",
      duration60: "37,500円",
      perSession60: "7,500円",
      duration90: "50,000円",
      perSession90: "10,000円"
    },
    {
      sessions: "8回",
      duration60: "52,000円",
      perSession60: "6,500円",
      duration90: "72,000円",
      perSession90: "9,000円",
      popular: true
    }
  ];

  const monthlyPlans = [
    {
      sessions: "1回",
      duration60: "7,500円",
      perSession60: "7,500円",
      duration90: "10,000円",
      perSession90: "10,000円"
    },
    {
      sessions: "2回",
      duration60: "15,000円",
      perSession60: "7,500円",
      duration90: "20,000円",
      perSession90: "10,000円"
    },
    {
      sessions: "4回",
      duration60: "24,000円",
      perSession60: "6,000円",
      duration90: "32,000円",
      perSession90: "8,000円",
      popular: true
    },
    {
      sessions: "8回",
      duration60: "40,000円",
      perSession60: "5,000円",
      duration90: "56,000円",
      perSession90: "7,000円"
    }
  ];

  const paymentMethods = [
    { icon: Banknote, name: "現金", description: "レッスン時に現金でお支払い" },
    { icon: CreditCard, name: "銀行振込", description: "指定口座へお振込み" },
    { icon: CreditCard, name: "クレジットカード", description: "PayPal経由でカード決済" }
  ];

  return (
    <div className="pt-16 bg-white">
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              ホームに戻る
            </button>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-[#64748b] max-w-3xl mx-auto">
              あなたの目標に合わせた最適なプランをお選びください。<br />
              すべてのプランで質の高いマンツーマン指導を提供します。
            </p>
          </div>

          {/* Main Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'border-2 border-[#2563eb] shadow-2xl scale-105 hover:scale-110' 
                    : 'border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white px-4 py-1 text-xs font-bold">
                    人気No.1
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <Badge className={`${plan.badgeColor} text-white mb-4 mx-auto`}>
                    {plan.badge}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-[#0f172a] mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[#0f172a]">¥{plan.price.toLocaleString()}</span>
                    {plan.price !== "0" && plan.price !== "2,000" && <span className="text-gray-500 ml-2">（税抜き）</span>}
                  </div>
                  <p className="text-sm text-[#64748b] mb-2">{plan.duration}</p>
                  {plan.perSession !== plan.price && (
                    <p className="text-xs text-[#10b981] font-semibold">
                      1回あたり ¥{plan.perSession.toLocaleString()}
                    </p>
                  )}
                  <p className="text-sm text-[#64748b] mt-4">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-[#10b981] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#64748b]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => {
                      if (plan.name === "初回体験") {
                        window.open('https://forms.gle/b8P2LMDL2x5fJp4p7', '_blank');
                      } else if (plan.scrollTo) {
                        const element = document.getElementById(plan.scrollTo);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`w-full ${plan.buttonColor} text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                    )}
                    <span className="relative z-10">{plan.buttonText}</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ticket Plans Detailed Table */}
          <div className="mb-16" id="ticket-details">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 text-center">
              回数券プラン詳細
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white">
                    <th className="px-6 py-4 text-left font-semibold">回数</th>
                    <th className="px-6 py-4 text-center font-semibold">60分コース</th>
                    <th className="px-6 py-4 text-center font-semibold">1回単価</th>
                    <th className="px-6 py-4 text-center font-semibold">90分コース</th>
                    <th className="px-6 py-4 text-center font-semibold">1回単価</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketPlans.map((plan, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        plan.popular ? 'bg-blue-50/50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-[#0f172a] flex items-center">
                        {plan.sessions}
                        {plan.popular && (
                          <Badge className="ml-2 bg-blue-500 text-white text-xs">人気</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-[#0f172a]">
                        {plan.duration60}
                      </td>
                      <td className="px-6 py-4 text-center text-[#10b981] font-semibold">
                        {plan.perSession60}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-[#0f172a]">
                        {plan.duration90}
                      </td>
                      <td className="px-6 py-4 text-center text-[#10b981] font-semibold">
                        {plan.perSession90}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Monthly Plans Detailed Table */}
          <div className="mb-16" id="monthly-details">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 text-center">
              月額プラン詳細
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white">
                    <th className="px-6 py-4 text-left font-semibold">月回数</th>
                    <th className="px-6 py-4 text-center font-semibold">60分コース</th>
                    <th className="px-6 py-4 text-center font-semibold">1回単価</th>
                    <th className="px-6 py-4 text-center font-semibold">90分コース</th>
                    <th className="px-6 py-4 text-center font-semibold">1回単価</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyPlans.map((plan, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        plan.popular ? 'bg-green-50/50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-[#0f172a] flex items-center">
                        月{plan.sessions}
                        {plan.popular && (
                          <Badge className="ml-2 bg-green-500 text-white text-xs">おすすめ</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-[#0f172a]">
                        {plan.duration60}
                      </td>
                      <td className="px-6 py-4 text-center text-[#10b981] font-semibold">
                        {plan.perSession60}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-[#0f172a]">
                        {plan.duration90}
                      </td>
                      <td className="px-6 py-4 text-center text-[#10b981] font-semibold">
                        {plan.perSession90}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Total Support Plan CTA */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-2 border-gray-700 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Crown className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-2xl font-bold">Total Support Plan</h3>
                    </div>
                    <p className="text-gray-300 mb-2">
                      本気度の高い選手向けの3ヶ月集中プログラム
                    </p>
                    <p className="text-xl font-bold text-yellow-400">
                      ¥110,000（税抜き）
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      対面レッスン全10回 / フィジカルセッション3回 / 動画分析5回 / チャットサポート随時
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate('/total-support-plan')}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8 text-center">
              お支払い方法
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 text-[#2563eb] mx-auto mb-4" />
                      <h4 className="font-bold text-[#0f172a] mb-2">{method.name}</h4>
                      <p className="text-sm text-[#64748b]">{method.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}