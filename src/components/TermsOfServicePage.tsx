import { ArrowLeft, FileText, Users, Calendar, CreditCard, AlertTriangle, Shield, Activity, Cloud, Info, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfServicePage() {
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
          <h1 className="text-3xl font-semibold text-black mb-4">利用規約</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DOTSサッカーパーソナルのサービス利用にあたっての条件をご確認ください。
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* General Conditions */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">サービス利用条件</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  DOTSサッカーパーソナル（以下「当サービス」）が提供するサッカー個人指導サービスの利用にあたり、
                  以下の利用規約（以下「本規約」）に同意いただく必要があります。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  本サービスのご利用をもって、本規約に同意されたものとみなします。
                </p>
              </div>
            </section>

            {/* Service Content */}
            <section>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">サービス内容</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">個人トレーニング</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>サッカー技術の個人指導</li>
                    <li>戦術理解の向上支援</li>
                    <li>個人の課題に特化した練習</li>
                    <li>実技指導とアドバイス</li>
                  </ul>
                </div>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">サポートサービス</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>フィジカル面のサポート</li>
                    <li>メンタル面のコーチング</li>
                    <li>動画による技術解析</li>
                    <li>進路相談・アドバイス</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Reservation and Cancellation */}
            <section>
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">予約・キャンセル規定</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">予約について</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>レッスンの予約は、LINEまたはメールにて受け付けます</li>
                    <li>予約確定は、当サービスからの確認連絡をもって成立とします</li>
                    <li>レッスン希望日の2日前までにご予約ください</li>
                    <li>天候等により日程変更が必要な場合があります</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">キャンセル料</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                      <p className="font-semibold text-black">当日キャンセル</p>
                      <p className="text-2xl font-semibold text-black">100%</p>
                    </div>
                    <div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                      <p className="font-semibold text-black">無断キャンセル</p>
                      <p className="text-2xl font-semibold text-black">100%</p>
                    </div>
                    <div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                      <p className="font-semibold text-black">前日キャンセル</p>
                      <p className="text-2xl font-semibold text-black">50%</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>振替制度：</strong> 2日前までのキャンセルは無料で振替可能です
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section>
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">お支払いについて</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-3">支払い方法</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>現金（レッスン当日）</li>
                      <li>銀行振込（事前払い）</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">支払い時期</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>原則として前日までのお支払い</li>
                      <li>回数券は購入時に一括払い</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-100 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>注意：</strong> 振込手数料、出張時の交通費はお客様負担となります
                  </p>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">禁止事項</h2>
              </div>
              <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                <p className="text-gray-700 mb-4">以下の行為は禁止とし、発覚した場合はサービス利用をお断りする場合があります。</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-black mb-2">記録・撮影関連</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>許可のない録音・録画</li>
                      <li>指導内容の無断録音</li>
                      <li>コーチの個人情報の撮影</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">その他</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>誹謗中傷・ハラスメント行為</li>
                      <li>継続的な無断キャンセル</li>
                      <li>サービスの妨害行為</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contract Termination */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">契約解除条件</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">以下の場合、当サービスは契約を解除することがあります。</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>本規約への重大な違反があった場合</li>
                  <li>支払いの遅延・不履行が継続的に発生した場合</li>
                  <li>当サービスの信用を著しく損なう行為があった場合</li>
                  <li>その他、継続的なサービス提供が困難と判断された場合</li>
                </ul>
              </div>
            </section>

            {/* Payment Handling */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">支払い遅延・不履行への対応</h2>
              <div className="bg-gray-50 border-l-4 border-gray-400 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black mb-2">遅延発生時</h3>
                    <p className="text-gray-700">支払期日から1週間以内にご連絡・お支払いがない場合、レッスンを一時停止いたします。</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">不履行時</h3>
                    <p className="text-gray-700">1ヶ月以上の支払い不履行の場合、契約を解除し、回数券等の残額返金は行いません。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Policy */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">返金について</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-black mb-2">回数券の返金</h3>
                    <p className="text-gray-700 mb-2">回数券は原則として返金不可です。</p>
                    <p className="text-sm text-gray-600">※ 使用期限は購入日から1年間</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">その他の返金</h3>
                    <p className="text-gray-700 mb-2">当サービス都合でのレッスン中止の場合は全額返金いたします。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">免責事項</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-lg font-semibold text-black">重要なお知らせ</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    スポーツ活動には、予期せぬ怪我や事故のリスクが伴います。
                    DOTSサッカーパーソナルのサービスをご利用いただく前に、以下の免責事項を必ずご確認ください。
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Activity className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-lg font-semibold text-black">トレーニング中の怪我・事故について</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    レッスン中に発生した怪我や事故については、当サービスでは一切の責任を負いかねます。
                    これは以下の場合を含みますが、これに限定されません：
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>ボールとの接触による怪我</li>
                    <li>転倒・衝突による怪我</li>
                    <li>筋肉や関節の損傷</li>
                    <li>その他のスポーツ活動に伴う身体的な損害</li>
                  </ul>
                  <div className="mt-4 p-4 bg-gray-100 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>推奨：</strong> 万一の事故に備え、スポーツ保険への加入を強く推奨いたします。
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-lg font-semibold text-black">所持品の紛失・盗難について</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    レッスン会場や移動中における所持品の紛失・盗難・損傷について、当サービスでは一切の責任を負いません。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">対象となる所持品</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>サッカー用品・シューズ</li>
                        <li>着替え・タオル</li>
                        <li>貴重品（財布・時計等）</li>
                        <li>電子機器・スマートフォン</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">管理のお願い</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>貴重品は最小限に</li>
                        <li>名前の記入をお願いします</li>
                        <li>各自での管理をお願いします</li>
                        <li>紛失時は速やかにご連絡を</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Cloud className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-lg font-semibold text-black">天候・災害による中止や変更について</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    以下の場合、安全確保のためレッスンを中止または変更することがあります。
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">悪天候</h4>
                      <p className="text-sm text-gray-600">雨、雪、強風、雷など</p>
                    </div>
                    <div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">気温</h4>
                      <p className="text-sm text-gray-600">猛暑、厳寒など</p>
                    </div>
                    <div className="text-center p-3 bg-white border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">災害</h4>
                      <p className="text-sm text-gray-600">地震、台風など</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-l-4 border-gray-400 rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">中止・変更時の対応</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>レッスン開始2時間前までに連絡いたします</li>
                      <li>振替日程を調整いたします</li>
                      <li>振替が困難な場合は返金対応いたします</li>
                      <li>交通費等の実費は補償いたしません</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Info className="w-6 h-6 text-black mr-3" />
                    <h3 className="text-lg font-semibold text-black">サイト情報の正確性について</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    当ウェブサイトに掲載している情報の正確性については、可能な限り注意を払っておりますが、
                    その内容について保証するものではありません。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">免責内容</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>情報の正確性・完全性</li>
                        <li>情報の最新性</li>
                        <li>リンク先サイトの内容</li>
                        <li>技術的な不具合</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">利用者の責任</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>情報の確認・検証</li>
                        <li>不明点の事前確認</li>
                        <li>自己判断での利用</li>
                        <li>損害の自己責任</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">お問い合わせ</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-6">
                  利用規約に関してご不明な点がございましたら、以下までお問い合わせください。
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-black mb-3">お問い合わせ方法</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-semibold text-sm">LINE</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-black">LINE公式アカウント</p>
                          <p className="text-sm text-gray-600">最も迅速な対応</p>
                        </div>
                        <a
                          href="https://lin.ee/YL3zCoD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 text-sm font-medium"
                        >
                          友だち追加
                        </a>
                      </div>
                      <div className="flex items-center p-3 bg-white border border-gray-200 rounded-lg">
                        <Mail className="w-5 h-5 text-black mr-3" />
                        <div className="flex-1">
                          <p className="font-semibold text-black">メール</p>
                          <p className="text-sm text-gray-600">info.dots.personal@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-3">お問い合わせ情報</h3>
                    <div className="space-y-2">
                      <p><span className="font-semibold">事業者名：</span>DOTSサッカーパーソナル</p>
                      <p><span className="font-semibold">責任者：</span>関口純平</p>
                      <p><span className="font-semibold">対応時間：</span>平日 9:00-18:00</p>
                      <p className="text-sm text-gray-600 mt-4">
                        ※ 緊急時は LINE でご連絡ください
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modification */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">規約の変更</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  本規約は、法令の変更やサービス内容の変更等に伴い、予告なく改定することがあります。
                  改定した場合は、当ウェブサイトに掲載することでお知らせいたします。
                  改定後の継続利用をもって、新しい規約に同意されたものとみなします。
                </p>
                <p className="text-sm text-gray-600 mt-4">最終更新日：2025年8月29日</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}