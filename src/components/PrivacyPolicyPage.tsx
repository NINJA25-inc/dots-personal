import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicyPage() {
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
            <Shield className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-semibold text-black mb-4">プライバシーポリシー</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DOTSサッカーパーソナルは、お客様の個人情報保護を最優先に考えています。
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Basic Policy */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">基本方針</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  DOTSサッカーパーソナル（以下「当サービス」）は、お客様の個人情報の保護に関して、個人情報保護法をはじめとする関連法令を遵守し、
                  以下のプライバシーポリシーを定めて個人情報の適切な取り扱いを行います。
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section>
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">取得する個人情報</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-semibold text-black mb-2">基本情報</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>氏名（お子様および保護者様）</li>
                    <li>住所・連絡先（電話番号）</li>
                    <li>メールアドレス</li>
                    <li>LINE情報（LINE ID等）</li>
                  </ul>
                </div>
                <div className="border-l-4 border-gray-400 pl-4">
                  <h3 className="font-semibold text-black mb-2">レッスン関連情報</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>レッスン内容・指導記録</li>
                    <li>トレーニングの進捗状況</li>
                    <li>フィードバック・評価内容</li>
                    <li>動画・写真（撮影許可をいただいた場合のみ）</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage Purpose */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">利用目的</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">サービス提供</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>レッスンの予約・実施</li>
                    <li>連絡・相談対応</li>
                    <li>トレーニング記録の管理</li>
                    <li>進捗状況の共有</li>
                  </ul>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">サービス向上</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>指導内容の改善</li>
                    <li>新サービスの開発</li>
                    <li>広報活動（本人許可時のみ）</li>
                    <li>アンケート・調査の実施</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third Party Disclosure */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">第三者への提供</h2>
              <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  当サービスは、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のため特に必要がある場合</li>
                </ul>
              </div>
            </section>

            {/* Security Management */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">安全管理措置</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">技術的対策</h3>
                  <p className="text-sm text-gray-600">アクセス制御・暗号化などの技術的安全管理措置を実施</p>
                </div>
                <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <UserCheck className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">人的対策</h3>
                  <p className="text-sm text-gray-600">スタッフへの教育・研修を定期的に実施</p>
                </div>
                <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">組織的対策</h3>
                  <p className="text-sm text-gray-600">個人情報保護管理者の設置・規程の整備</p>
                </div>
              </div>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">開示・訂正・削除について</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  お客様は、当サービスが保有する個人情報について、以下の権利を有します。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-black mb-2">開示請求</h3>
                    <p className="text-sm text-gray-700">保有する個人情報の開示を求めることができます</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">訂正・削除</h3>
                    <p className="text-sm text-gray-700">個人情報の訂正・削除を求めることができます</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  ※ 請求に際しては、本人確認を行わせていただきます。
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">お問い合わせ窓口</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">事業者名：</span>DOTSサッカーパーソナル</p>
                  <p><span className="font-semibold">責任者：</span>関口純平</p>
                  <p><span className="font-semibold">メールアドレス：</span>info.dots.personal@gmail.com</p>
                  <p><span className="font-semibold">対応時間：</span>平日 9:00-18:00</p>
                </div>
              </div>
            </section>

            {/* Update */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">改定について</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  本プライバシーポリシーは、法令の変更や事業内容の変更等に伴い、予告なく改定することがあります。
                  改定した場合は、当ウェブサイトに掲載することでお知らせいたします。
                </p>
                <p className="text-sm text-gray-600 mt-4">最終更新日：2025年8月27日</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}