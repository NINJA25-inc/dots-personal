import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock } from 'lucide-react';

export function SponsorsSection() {
  // スポンサーカテゴリー（準備中）
  const sponsorCategories = [
    {
      category: "スポーツ用品",
      description: "プロ仕様のサッカー用品を特別価格で提供"
    },
    {
      category: "トレーニング施設",
      description: "フィジカル強化のための最新設備を完備"
    },
    {
      category: "栄養・健康",
      description: "アスリート向け栄養補給サポート"
    },
    {
      category: "医療・ケア",
      description: "怪我予防とリハビリテーション"
    },
    {
      category: "メンタルサポート",
      description: "競技力向上のためのメンタルトレーニング"
    },
    {
      category: "分析・テクノロジー",
      description: "最新のスポーツ分析技術を提供"
    }
  ];

  const partnershipBenefits = [
    "DOTSの選手・保護者への特別価格でのサービス提供",
    "相互のブランド認知度向上",
    "スポーツ業界でのネットワーク拡大",
    "社会貢献活動への参加機会",
    "若手アスリート育成への貢献"
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              スポンサー提携先
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            DOTSの理念に共感し、次世代のサッカー選手育成を支援してくださる
            パートナー企業様との提携を準備中です。
          </p>
        </div>

        {/* Coming Soon Sponsors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorCategories.map((category, index) => (
            <Card key={index} className="border-2 border-dashed border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-50/50 overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <Clock className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-300/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-full">
                    {category.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-600 mb-3">
                  Coming Soon
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              パートナーシップのメリット
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DOTSとの提携により、以下のような価値を共創いたします。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white/70 backdrop-blur-sm rounded-xl p-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              新規パートナー企業様を募集中
            </h3>
            <p className="mb-6 max-w-2xl mx-auto leading-relaxed">
              DOTSの理念に共感し、次世代のサッカー選手育成に貢献いただける
              企業様からのお問い合わせをお待ちしております。
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              パートナー提携のお問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}