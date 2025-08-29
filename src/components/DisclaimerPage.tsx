import { ArrowLeft, AlertTriangle, Shield, Activity, Cloud, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DisclaimerPage() {
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
            <AlertTriangle className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-semibold text-black mb-4">免責事項</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DOTSサッカーパーソナルのサービス利用におけるリスクと責任範囲について
          </p>
        </div>

        {/* Content */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Important Notice */}
            <section>
              <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-black mr-3" />
                  <h2 className="text-xl font-semibold text-black">重要なお知らせ</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  スポーツ活動には、予期せぬ怪我や事故のリスクが伴います。
                  DOTSサッカーパーソナルのサービスをご利用いただく前に、以下の免責事項を必ずご確認ください。
                </p>
              </div>
            </section>

            {/* Training Related Risks */}
            <section>
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">トレーニング中の怪我・事故について</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">責任の免除</h3>
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
                </div>

                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">保護者の判断と責任</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    レッスンへの参加は、保護者様の判断と責任において行っていただきます。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">事前確認事項</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>お子様の健康状態</li>
                        <li>既往症・アレルギーの有無</li>
                        <li>当日の体調確認</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">推奨事項</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>スポーツ保険への加入</li>
                        <li>適切な装備の着用</li>
                        <li>水分補給の準備</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-black rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-black mr-2" />
                    <h3 className="font-semibold text-black">スポーツ保険の推奨</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    万一の事故に備え、スポーツ保険への加入を強く推奨いたします。
                    保険に関するご質問は、各保険会社または学校・クラブチームにお問い合わせください。
                  </p>
                </div>
              </div>
            </section>

            {/* Personal Items */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">所持品の紛失・盗難について</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  レッスン会場や移動中における所持品の紛失・盗難・損傷について、当サービスでは一切の責任を負いません。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-black mb-2">対象となる所持品</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>サッカー用品・シューズ</li>
                      <li>着替え・タオル</li>
                      <li>貴重品（財布・時計等）</li>
                      <li>電子機器・スマートフォン</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">管理のお願い</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>貴重品は最小限に</li>
                      <li>名前の記入をお願いします</li>
                      <li>各自での管理をお願いします</li>
                      <li>紛失時は速やかにご連絡を</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Weather and Disasters */}
            <section>
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">天候・災害による中止や変更について</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">中止・変更の判断</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    以下の場合、安全確保のためレッスンを中止または変更することがあります。
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
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
                </div>

                <div className="bg-gray-100 border-l-4 border-gray-400 rounded-lg p-6">
                  <h3 className="font-semibold text-black mb-3">中止・変更時の対応</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>レッスン開始2時間前までに連絡いたします</li>
                    <li>振替日程を調整いたします</li>
                    <li>振替が困難な場合は返金対応いたします</li>
                    <li>交通費等の実費は補償いたしません</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Website Information */}
            <section>
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-black mr-3" />
                <h2 className="text-xl font-semibold text-black">サイト情報の正確性について</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  当ウェブサイトに掲載している情報の正確性については、可能な限り注意を払っておりますが、
                  その内容について保証するものではありません。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-black mb-2">免責内容</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>情報の正確性・完全性</li>
                      <li>情報の最新性</li>
                      <li>リンク先サイトの内容</li>
                      <li>技術的な不具合</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">利用者の責任</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>情報の確認・検証</li>
                      <li>不明点の事前確認</li>
                      <li>自己判断での利用</li>
                      <li>損害の自己責任</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact for Questions */}
            <section>
              <h2 className="text-xl font-semibold text-black mb-4">免責事項に関するお問い合わせ</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">免責事項に関してご不明な点がございましたら、以下までお問い合わせください。</p>
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
              <h2 className="text-xl font-semibold text-black mb-4">免責事項の変更</h2>
              <div className="border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  本免責事項は、法令の変更やサービス内容の変更等に伴い、予告なく改定することがあります。
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