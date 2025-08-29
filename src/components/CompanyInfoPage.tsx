import { ArrowLeft, Building, Calendar, MapPin, User, Target, Lightbulb, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CompanyInfoPage() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Home button */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            ホームに戻る
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
            <Building className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-semibold text-black mb-4">会社概要</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            テクノロジーとスポーツを融合させ、個々の成長を最大化する次世代サッカー教育
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          
          {/* Company Overview */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-black p-6">
              <h2 className="text-2xl font-semibold text-white mb-2">DOTSサッカーパーソナル</h2>
              <p className="text-gray-300">Dream・Opportunity・Training・Success</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Building className="w-6 h-6 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-1">会社名</h3>
                      <p className="text-gray-700">DOTSサッカーパーソナル</p>
                      <p className="text-sm text-gray-600">（運営会社：株式会社NINJA）</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-1">設立</h3>
                      <p className="text-gray-700">2025年6月27日</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-1">所在地</h3>
                      <p className="text-gray-700">北海道北斗市追分4-11-8</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <User className="w-6 h-6 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-1">代表者</h3>
                      <p className="text-gray-700">関口純平</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Code className="w-6 h-6 text-black mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black mb-1">事業内容</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• AIソリューション開発</li>
                        <li>• ITコンサルタント</li>
                        <li>• サッカー教育事業</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">企業理念</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">ミッション</h3>
                    <p className="text-gray-700 leading-relaxed">
                      テクノロジーとスポーツを融合させ、個々の成長を最大化する
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">ビジョン</h3>
                    <p className="text-gray-700 leading-relaxed">
                      子どもから大人まで、挑戦するすべての人に最適なサポートを提供
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">事業領域</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-3">AIソリューション開発</h3>
                  <p className="text-sm text-gray-600">
                    人工知能技術を活用した革新的なソリューションの開発・提供
                  </p>
                </div>
                
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-3">ITコンサルタント</h3>
                  <p className="text-sm text-gray-600">
                    企業のデジタル変革を支援するITコンサルティングサービス
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-3">サッカー教育事業</h3>
                  <p className="text-sm text-gray-600">
                    個人指導を中心とした次世代サッカー教育プログラムの提供
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Representative Profile */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">代表者プロフィール</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="font-semibold text-black text-lg">関口純平</h3>
                    <p className="text-sm text-gray-600">代表取締役</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-black mb-3">経歴・専門分野</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">エンジニアとしての豊富な技術経験</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">株式会社NINJA設立・事業運営</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">AIソリューション開発・ITコンサルティング</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">テクノロジーとスポーツ教育の融合推進</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-xl font-semibold text-black mb-6">私たちの価値観</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">イノベーション</h3>
                  <p className="text-gray-700 leading-relaxed">
                    常に新しい技術とアプローチを取り入れ、従来の枠にとらわれない革新的なサービスを提供します。
                  </p>
                </div>
                
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">個別最適化</h3>
                  <p className="text-gray-700 leading-relaxed">
                    一人ひとりの特性や目標に合わせた、完全にカスタマイズされたサポートを提供します。
                  </p>
                </div>
                
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">継続的成長</h3>
                  <p className="text-gray-700 leading-relaxed">
                    短期的な成果だけでなく、長期的な視点での持続可能な成長をサポートします。
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">信頼関係</h3>
                  <p className="text-gray-700 leading-relaxed">
                    選手、保護者、コーチとの深い信頼関係を基盤とした、質の高いサービスを提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="bg-black rounded-lg text-white p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">未来への展望</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                DOTSサッカーパーソナルは、テクノロジーの力でスポーツ教育を革新し、
                すべての人が自分らしく成長できる社会の実現を目指しています。
                私たちと一緒に、新しいスポーツ教育の未来を創造しませんか？
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}