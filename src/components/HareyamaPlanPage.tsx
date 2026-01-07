import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, Target, Award, Trophy, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hareyamaImage1 from 'figma:asset/2a05418f3e47f8cc1533675a935fe679a8132cd1.png';
import hareyamaImage2 from 'figma:asset/103436f2257f01aef2d37924878932bb23350ec4.png';

export function HareyamaPlanPage() {
  const plans = [
    {
      name: "初回セッション",
      price: "15,000",
      badge: "継続プラン向け",
      badgeColor: "bg-gradient-to-r from-gray-600 to-gray-800",
      description: "晴山岬コーチによる個別指導",
      features: [
        "Jリーガーからの直接指導",
        "個別カウンセリング",
        "プロ目線での技術分析",
        "今後の成長プラン提案"
      ]
    },
    {
      name: "月額制プラン",
      price: "18,000",
      subPrice: "一回の単価",
      badge: "月回数ご自由に設定可能",
      badgeColor: "bg-gradient-to-r from-yellow-500 to-amber-600",
      description: "継続的にレベルアップを目指す方へ",
      features: [
        "月回数は自由に設定可能",
        "プロレベルの技術指導",
        "フィードバックやLINE相談も可能",
        "試合動画分析サポート"
      ],
      popular: true
    },
    {
      name: "単発レッスン",
      price: "22,000",
      badge: "1回のみ",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
      description: "ピンポイントで指導を受けたい方へ",
      features: [
        "1回完結のレッスン",
        "集中的な技術指導",
        "詳細なフィードバック",
        "プロの技術を直接学べる"
      ]
    }
  ];

  const ticketPlans = [
    { sessions: "5回", price: "100,000" },
    { sessions: "8回", price: "160,000", popular: true },
    { sessions: "12回", price: "240,000" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
      {/* Coach Introduction */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2 text-base font-bold mb-4">
              元Jリーガー 晴山岬プラン
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={hareyamaImage2}
                alt="晴山岬コーチ"
                className="w-full rounded-2xl shadow-2xl border-4 border-yellow-400"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                晴山岬選手の個人レッスンへの思い
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  1対1の個人レッスンを通じて、技術はもちろん<br />
                  「自分が子供の頃から知っておきたかったこと」<br />
                  を今の選手たちに伝えることを大切にしています。
                </p>
                <p>
                  早い段階で「本質」を理解しておくことは、<br />
                  将来の可能性を大きく広げます。
                </p>
                <p>
                  僕の経験を惜しみなく伝え、<br />
                  選手一人ひとりの成長をサポートします！
                </p>
                <div className="pt-4 border-t border-white/30">
                  <p>
                    選手当人はもちろん、親御さんとも<br />
                    たくさんコミュニケーションを<br />
                    取りたいなと考えてます！<br />
                    気軽に何でも聞いて欲しいです！<br />
                    よろしくお願いします！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              料金プラン
            </h2>
            <p className="text-lg text-gray-300">
              元Jリーガーからプロの技術を直接学べる特別プラン
            </p>
          </div>

          {/* Main Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-0 ${
                  plan.popular 
                    ? 'shadow-2xl shadow-yellow-400/20 scale-105' 
                    : ''
                } hover:scale-105 transition-all duration-300 relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-1 text-xs font-bold">
                    おすすめ
                  </div>
                )}
                <CardContent className="p-6 text-white">
                  <Badge className={`${plan.badgeColor} text-white mb-4`}>
                    {plan.badge}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">¥{plan.price.toLocaleString()}</span>
                    {plan.subPrice && (
                      <p className="text-sm text-gray-400 mt-1">{plan.subPrice}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ticket Plans Table */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              回数券チケットプラン
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black">
                    <th className="px-6 py-4 text-left font-bold">回数</th>
                    <th className="px-6 py-4 text-center font-bold">総額</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketPlans.map((plan, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-700 hover:bg-gray-700/50 transition-colors ${
                        plan.popular ? 'bg-yellow-900/20' : ''
                      }`}
                    >
                      <td className="px-6 py-4 font-bold text-white flex items-center">
                        {plan.sessions}
                        {plan.popular && (
                          <Badge className="ml-2 bg-yellow-500 text-black text-xs">人気</Badge>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center font-bold text-white text-lg">
                        ¥{plan.price.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 p-8 rounded-2xl shadow-2xl">
              <Trophy className="w-16 h-16 text-black mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                元Jリーガーからプロの技術を学ぶ
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}