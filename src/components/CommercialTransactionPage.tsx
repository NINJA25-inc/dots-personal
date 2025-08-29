import { ArrowLeft, FileText, Building, CreditCard, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CommercialTransactionPage() {
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
            <FileText className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-semibold text-black mb-4">特定商取引法に基づく表記</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            特定商取引に関する法律に基づく事業者情報の表示
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Business Information */}
            <section>
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">事業者情報</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-4">基本情報</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-black">事業者名：</span>
                      <span className="text-gray-700">DOTSサッカーパーソナル</span>
                    </div>
                    <div>
                      <span className="font-semibold text-black">運営会社：</span>
                      <span className="text-gray-700">株式会社NINJA</span>
                    </div>
                    <div>
                      <span className="font-semibold text-black">責任者名：</span>
                      <span className="text-gray-700">関口純平</span>
                    </div>
                    <div>
                      <span className="font-semibold text-black">設立：</span>
                      <span className="text-gray-700">2025年6月27日</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-4">所在地・連絡先</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-black">所在地：</span>
                      <span className="text-gray-700">北海道北斗市追分4丁目11-8</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="font-semibold text-black">電話番号：</span>
                      <span className="text-gray-700 ml-2">請求があった場合のみ開示</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-600 mr-2" />
                      <span className="font-semibold text-black">メール：</span>
                      <span className="text-gray-700 ml-2">info.dots.personal@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Information */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-6">販売価格・サービス内容</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">サービス内容</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>サッカー個人トレーニング指導</li>
                      <li>フットサル個人指導</li>
                      <li>技術・戦術分析とアドバイス</li>
                      <li>フィジカル・メンタルサポート</li>
                      <li>進路相談・サポート</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">価格表示</h3>
                    <p className="text-gray-700 mb-3">
                      各サービスの価格は、当ウェブサイトの料金プランページに記載しております。
                    </p>
                    <p className="text-sm text-gray-600">
                      ※ 表示価格は税込価格です<br/>
                      ※ 地域により出張料金が発生する場合があります
                    </p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">商品代金以外の必要料金</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <CreditCard className="w-6 h-6 text-black mx-auto mb-2" />
                      <p className="font-semibold text-black">振込手数料</p>
                      <p className="text-sm text-gray-600">お客様負担</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <Building className="w-6 h-6 text-black mx-auto mb-2" />
                      <p className="font-semibold text-black">出張交通費</p>
                      <p className="text-sm text-gray-600">距離に応じて発生</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <Calendar className="w-6 h-6 text-black mx-auto mb-2" />
                      <p className="font-semibold text-black">施設利用料</p>
                      <p className="text-sm text-gray-600">会場によって発生</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section>
              <div className="flex items-center mb-6">
                <CreditCard className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">支払い方法・時期</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">支払い方法</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                        <div>
                          <p className="font-semibold text-black">現金</p>
                          <p className="text-sm text-gray-600">レッスン当日にお支払い</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                        <div>
                          <p className="font-semibold text-black">銀行振込</p>
                          <p className="text-sm text-gray-600">事前お支払い（推奨）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">支払い時期</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">単発レッスン</p>
                        <p className="text-sm text-gray-600">原則として前日まで</p>
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">回数券</p>
                        <p className="text-sm text-gray-600">購入時に一括払い</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Delivery */}
            <section>
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">サービス提供時期</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">レッスン実施</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>予約確定後、指定日時にサービス提供</li>
                      <li>天候等による変更の場合は事前連絡</li>
                      <li>振替日程は相談の上決定</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">予約受付時間</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>平日：9:00-18:00</li>
                      <li>土日祝：10:00-17:00</li>
                      <li>お問い合わせ：24時間受付</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-6">キャンセル料・返金規定</h2>
              <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">キャンセル料</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <span className="font-semibold text-black">2日前まで</span>
                        <span className="text-black font-semibold">無料</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <span className="font-semibold text-black">前日</span>
                        <span className="text-black font-semibold">50%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <span className="font-semibold text-black">当日・無断</span>
                        <span className="text-black font-semibold">100%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">返金規定</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">振替制度</p>
                        <p className="text-sm text-gray-600">2日前までのキャンセルは無料で振替可能</p>
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">回数券</p>
                        <p className="text-sm text-gray-600">原則返金不可（使用期限1年）</p>
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">当社都合</p>
                        <p className="text-sm text-gray-600">当社都合での中止は全額返金</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>注意：</strong> 返金時の振込手数料はお客様負担となります
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-6">申込方法・問い合わせ先</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">申込方法</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-black font-semibold text-sm">LINE</span>
                        </div>
                        <div>
                          <p className="font-semibold text-black">LINE公式アカウント</p>
                          <p className="text-sm text-gray-600">最も迅速な対応</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <Mail className="w-5 h-5 text-black mr-3" />
                        <div>
                          <p className="font-semibold text-black">メール</p>
                          <p className="text-sm text-gray-600">info.dots.personal@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">問い合わせ対応</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">対応時間</p>
                        <p className="text-sm text-gray-600">平日 9:00-18:00</p>
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">返信時間</p>
                        <p className="text-sm text-gray-600">通常24時間以内</p>
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <p className="font-semibold text-black mb-1">緊急時</p>
                        <p className="text-sm text-gray-600">LINEでご連絡ください</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Notes */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-6">その他の重要事項</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">個人情報の取り扱い</h3>
                  <p className="text-gray-700 leading-relaxed">
                    お客様の個人情報は、「プライバシーポリシー」に従って適切に管理・保護いたします。
                    詳細は当ウェブサイトのプライバシーポリシーをご確認ください。
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">免責事項</h3>
                  <p className="text-gray-700 leading-relaxed">
                    レッスン中の怪我や事故、所持品の紛失・盗難等については、当サービスでは責任を負いかねます。
                    詳細は「免責事項」ページをご確認ください。
                  </p>
                </div>
              </div>
            </section>

            {/* Update Information */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">表記の変更について</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  本表記は、法令の変更やサービス内容の変更等に伴い、予告なく改定することがあります。
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