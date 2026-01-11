import { Crown, Target, Heart, Users, TrendingUp, Award } from 'lucide-react';
import { Badge } from './ui/badge';

export function ScholarshipPage() {
  return (
    <div className="pt-16">
      {/* Page content with top padding to account for fixed header */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home button */}
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              戻る
            </button>
          </div>
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Badge className="bg-slate-600 text-white px-4 py-2 text-sm">
                <Crown className="w-4 h-4 mr-2" />
                特別制度
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              DOTSサッカーパーソナル
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              特待対象者 ご案内
            </h2>
          </div>

          {/* 1. 制度の目的 */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1. 制度の目的</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                DOTS サッカーパーソナルでは、<strong className="text-black">意欲・成長可能性・努力・人間性</strong>を重視する選手を応援するため、特待制度を設けています。
              </p>
              <p>
                過去の成績や大会実績も参考にしますが、最終的な判断は、<strong className="text-black">コーチの目（普段の練習での姿勢・取り組み・成長意欲・人間性）および選手のポテンシャル・能力</strong>を最も重視します。
              </p>
            </div>
          </div>

          {/* 2. 特待区分 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2. 特待区分</h3>
            </div>

            <div className="space-y-6">
              {/* A特待 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-yellow-400 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2">
                      <Crown className="w-4 h-4 mr-2" />
                      A特待
                    </Badge>
                    <span className="text-xl font-bold text-gray-900">フル特待／70%免除</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      評価基準
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 ml-6">
                      <li className="list-disc">基本的に複数回のレッスンを経験したうえで総合判断</li>
                      <li className="list-disc">普段の練習での姿勢・取り組み・努力が非常に優秀</li>
                      <li className="list-disc">技術・戦術・フィジカル・メンタルの伸びしろが高い</li>
                      <li className="list-disc">周囲に良い影響を与えられる高い人間性</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">参考成績例</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">全国大会出場クラス</Badge>
                      <Badge variant="outline" className="text-xs">ナショナルトレセン</Badge>
                      <Badge variant="outline" className="text-xs">世代別代表や強化指定選手</Badge>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      対象人数：<span className="text-yellow-700">年間2名</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* B特待 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-400 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                      <Crown className="w-4 h-4 mr-2" />
                      B特待
                    </Badge>
                    <span className="text-xl font-bold text-gray-900">準特待／30%免除</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      評価基準
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 ml-6">
                      <li className="list-disc">積極的に練習に取り組む姿勢</li>
                      <li className="list-disc">技術・戦術理解があり、今後の成長が見込める</li>
                      <li className="list-disc">チームや仲間に良い影響を与えられる人間性</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">参考成績例</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Jクラブ下部組織所属</Badge>
                      <Badge variant="outline" className="text-xs">都道府県トレセン所属</Badge>
                      <Badge variant="outline" className="text-xs">関東大会出場経験</Badge>
                      <Badge variant="outline" className="text-xs">地域選抜・優秀選手選出</Badge>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      対象人数：<span className="text-blue-700">年間5名程度</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* C特待 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-green-400 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                      <Crown className="w-4 h-4 mr-2" />
                      C特待
                    </Badge>
                    <span className="text-xl font-bold text-gray-900">育成枠／10%免除</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      評価基準
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600 ml-6">
                      <li className="list-disc">練習への意欲・努力を継続できる</li>
                      <li className="list-disc">将来の伸びしろが大きい</li>
                      <li className="list-disc">経済的支援が必要な場合も考慮</li>
                      <li className="list-disc">協調性や礼儀など、基本的な人間性を持つ</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">参考成績例</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">ブロックトレセン</Badge>
                      <Badge variant="outline" className="text-xs">地域トレセン</Badge>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      対象人数：<span className="text-green-700">年間10名程度</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mt-6">
                ※枠数・対象は年度や状況により変動します
              </p>
            </div>
          </div>

          {/* 3. 適用プラン */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3. 適用プラン</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-500 text-white px-4 py-2">回数券プラン</Badge>
              <Badge className="bg-purple-500 text-white px-4 py-2">月額プラン</Badge>
            </div>
          </div>

          {/* 4. 選考方法 */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4. 選考方法</h3>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span><strong className="text-black">普段の練習での姿勢・取り組み・人間性、選手のポテンシャル・能力</strong>を最優先に評価</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>A特待は<strong className="text-black">基本的に複数回のレッスンを経験したうえで総合判断</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>コーチングスタッフによる最終判断</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>必要に応じて大会成績や過去の実績も参考</span>
              </li>
            </ul>
          </div>

          {/* 5. 特待生としての心得 */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">5. 特待生としての心得</h3>
            </div>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>練習・試合に真摯に取り組む</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>礼儀・態度・生活面でも模範となる</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>チームや仲間に良い影響を与える存在になる</span>
              </li>
            </ul>
          </div>

          {/* 6. メッセージ */}
          <div className="bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl p-10 text-center text-white">
            <Crown className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">6. メッセージ</h3>
            <p className="text-lg leading-relaxed">
              DOTS サッカーパーソナルは、<br />
              選手の<strong className="text-yellow-400">努力・成長意欲・人間性</strong>を最も重視します。
            </p>
          </div>

          {/* Contact Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              特待生制度についての詳細は、レッスン時にコーチまでお問い合わせください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}