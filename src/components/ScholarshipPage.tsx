import { Crown, Target, Heart, TrendingUp, Award, CheckCircle } from 'lucide-react';
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
              特待生制度について
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              優秀な選手を応援するため、レッスン料金の一部を免除する制度です。<br />
              該当者にはレッスン後にコーチから直接オファーをさせていただきます。
            </p>
          </div>

          {/* 重要なお知らせ */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 mb-12 border-2 border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">重要なお知らせ</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">
                特待生制度は<strong className="text-yellow-700">自己応募制ではありません</strong>
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>レッスンを受講いただいた選手の中から、コーチが評価・選考します</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>該当者には<strong className="text-black">レッスン後にコーチから直接オファー</strong>をさせていただきます</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>まずは体験レッスンから始めていただき、選手の可能性を見させていただきます</span>
                </li>
              </ul>
            </div>
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

          {/* 2. 評価のポイント */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2. 評価のポイント</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  レッスンでの姿勢
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>真摯に取り組む姿勢</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>積極的な質問や探究心</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>継続的な努力</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  成長可能性
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>技術・戦術理解力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>フィジカル・メンタルの伸びしろ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>将来の可能性</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  人間性
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>礼儀正しさ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>協調性・コミュニケーション能力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>周囲への良い影響</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                  参考要素
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>大会成績・実績</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>トレセン・選抜歴</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>所属チームでの活動</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. 特待区分（参考） */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3. 特待区分（参考）</h3>
            </div>

            <p className="text-gray-600 mb-6 text-center">
              コーチの評価により、以下のいずれかの特待区分でオファーをさせていただきます
            </p>

            <div className="space-y-6">
              {/* A特待 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-yellow-400 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2">
                      <Crown className="w-4 h-4 mr-2" />
                      A特待
                    </Badge>
                    <span className="text-xl font-bold text-gray-900">フル特待</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  基本的に複数回のレッスンを経験したうえで総合判断し、技術・姿勢・人間性すべてにおいて非常に優秀な選手にオファーいたします。
                </p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    対象人数：<span className="text-yellow-700">年間2名程度</span>
                  </p>
                </div>
              </div>

              {/* B特待 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-400 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                      <Crown className="w-4 h-4 mr-2" />
                      B特待
                    </Badge>
                    <span className="text-xl font-bold text-gray-900">準特待</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  積極的に練習に取り組み、技術・戦術理解があり、今後の成長が見込める選手にオファーいたします。
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    対象人数：<span className="text-blue-700">年間5名程度</span>
                  </p>
                </div>
              </div>

              {/* C特待 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-green-400 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                      <Crown className="w-4 h-4 mr-2" />
                      C特待
                    </Badge>
                    <span className="text-xl font-bold text-gray-900">育成枠</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  練習への意欲・努力を継続でき、将来の伸びしろが大きい選手にオファーいたします。経済的支援が必要な場合も考慮します。
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    対象人数：<span className="text-green-700">年間10名程度</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mt-6">
                ※枠数・対象は年度や状況により変動します
              </p>
            </div>
          </div>

          {/* 4. 特待生としての心得 */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4. 特待生としての心得</h3>
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
              <li className="flex items-start gap-3">
                <span className="text-slate-600 mt-1">•</span>
                <span>特待生としての自覚と責任を持つ</span>
              </li>
            </ul>
          </div>

          {/* 5. メッセージ */}
          <div className="bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl p-10 text-center text-white mb-12">
            <Crown className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-4">5. メッセージ</h3>
            <p className="text-lg leading-relaxed mb-6">
              DOTS サッカーパーソナルは、<br />
              選手の<strong className="text-yellow-400">努力・成長意欲・人間性</strong>を最も重視します。
            </p>
            <p className="text-base leading-relaxed">
              まずは体験レッスンから始めていただき、<br />
              あなたの可能性を私たちに見せてください。
            </p>
          </div>

          {/* Contact Note */}
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              特待生制度に関するご質問は、レッスン時にコーチまでお気軽にお問い合わせください。
            </p>
            <p className="text-gray-600 text-sm">
              ※特待生制度は自己応募制ではありません。該当者にはコーチからオファーをさせていただきます。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
