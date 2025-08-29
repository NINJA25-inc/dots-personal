import { Card, CardContent } from './ui/card';
import dotsImage from 'figma:asset/9d00f2c5d243d2d81caf543f456292efa7530e1b.png';

export function AboutSection() {
  const values = [
    {
      title: "自立と成長",
      description: "選手自身が考え、判断し、行動する力を育成。コーチはサポート役として自主性を最大限に引き出します。自分に矢印を向け、成長率と自己ベストの更新を重視。それぞれのペースで確実な向上を目指します。"
    },
    {
      title: "育成パートナー",
      description: "コーチと選手、保護者が一体となって育成に取り組む。信頼関係を基盤とした長期的なパートナーシップを築きます。"
    },
    {
      title: "世界基準・多文化視点",
      description: "世界で通用するスキルと視野を身につける。多様な文化や価値観を理解し、グローバルに活躍できる人材を育成します。"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DOTSとは */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
              DOTSとは
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                DOTS（ドッツ）は、選手一人ひとりが持つ才能を"点"として捉え、その点を線でつなぎ、未来へと広げていく育成を目指します。
              </p>
              <p>
                Dream（夢）から始まり、Opportunity（機会）を提供し、Training（練習）を通じて、Success（成功）へ導く。
                これが私たちの育成哲学です。
              </p>
              <p>
                個々の特性や可能性を見極め、オーダーメイドのプログラムで選手の力を最大限に引き出します。
              </p>
              <p>
                技術の向上にとどまらず、人としての成長も重視し、サッカーを通じて人生を豊かにする力を育んでいきます。
              </p>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={dotsImage}
                  alt="サッカートレーニングの様子"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-black/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* DOTSの価値観 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              DOTSの価値観
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちが大切にする3つの価値観。これらの要素が組み合わさることで、
              選手の真の成長を実現します。
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}