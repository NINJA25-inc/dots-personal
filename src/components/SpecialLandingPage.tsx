import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Trophy, Star, Users, ChevronLeft, ChevronRight, MessageCircle, Calendar, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hareyamaHeroImage from 'figma:asset/8592576e00c8309473e281df11af1414b5a44b5d.png';

export function SpecialLandingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: MessageCircle,
      title: "体験申し込み",
      subtitle: "LINEで相談",
      description: "まずはLINEまたはお問い合わせフォームから体験レッスンをお申し込みください。気軽にご質問やご相談もお受けします。",
      details: [
        "LINE公式アカウントで24時間受付",
        "選手の現在のレベルや目標をお聞かせください",
        "ご希望の日時や場所をお知らせください"
      ]
    },
    {
      icon: Calendar,
      title: "日時・場所決定",
      subtitle: "スケジュール調整",
      description: "お客様のご都合に合わせて、レッスンの日時場所を決定いたしす。東京、埼玉、神奈川、千葉エリアで対応可能です。",
      details: [
        "平日・土日祝日対応",
        "公園、グラウンド、フットサル場など",
        "交通費は別途ご負担いただきます"
      ]
    },
    {
      icon: Users,
      title: "コーチと待ち合わせ",
      subtitle: "レッスン開始",
      description: "指定の場所でコーチと待ち合わせ。簡単な挨拶と目標確認の後、60分間のマンツーマンレッスンを開始します。",
      details: [
        "レッスン前に簡単なカウンセリング",
        "個人の特性に合わせたメニュー",
        "動画撮影でフォーム分析も実施"
      ]
    },
    {
      icon: MessageSquare,
      title: "レッスン後",
      subtitle: "フィードバック",
      description: "レッスン終了後、コーチから詳細なフィードバックをお渡しします。今後の練習ポイントや改善点も具体的にアドバイスします。",
      details: [
        "レッスン内容の詳細レポート",
        "動画分析結果のシェア",
        "次回までの自主練習メニュー提案"
      ]
    }
  ];

  const faqs = [
    {
      question: "個人レッスンは初めてでも大丈夫ですか？",
      answer: "もちろんで��。初回体験レッスンでは、まず選手の現在のレベルや目標をお聞きし、一人ひとりに合わせたレッスン内容を提案させていただきます。初心者から上級者まで、幅広いレベルに対応していますので、安心してお申し込みください。"
    },
    {
      question: "交通費はかかりますか？",
      answer: "はい、レッスン場所までのコーチの交通費は別途ご負担いただいております。交通費の詳細については、お申し込み時に場所を確認した上で事前にお知らせいたします。できるだけご負担を抑えられるよう、効率的なルートを選択いたします。"
    },
    {
      question: "入会金はありますか？",
      answer: "DOTSでは入会金は一切いただいておりません。レッスン料金のみで始めていただけます。また、年会費やその他の費用も発生しませんので、気軽にスタートしていただけます。"
    },
    {
      question: "レッスン場所はどこで行いますか？",
      answer: "東京都、埼玉県、神奈川県、千葉県内の公園、学校のグラウンド、フットサル場などで実施します。お客様のご希望に合わせて最適な場所を提案いたします。施設利用料が必要な場合は事前にお知らせ���、ご相談の上で決定いたします。"
    },
    {
      question: "年代やレベルに制限はありますか？",
      answer: "小学生から大学生まで幅広い年代に対応しております。また、初心者から上級者まで、どのようなレベルの選手も歓迎です。それぞれの年代・レベルに応じた適切な指導方法で、個々の成長をサポートいたします。"
    },
    {
      question: "コーチとのコミュニケーションはどのように取れますか？",
      answer: "LINE公式アカウントを通じて、24時間いつでもご質問やご相談をお受けしています。レッスンの振り返りや次回までの課題、日常の練習についてのアドバイスなども気軽にお尋ねください。迅速に対応いたします。"
    },
    {
      question: "支払い方法は何がありますか？",
      answer: "現金払い（レッスン当日）、銀行振込（事前振込）、クレジットカード決済に対応しております。クレジットカード決済では、VISA、Mastercard、JCB、American Expressをご利用いただけます。月額プランや回数券の場合は、事前のお支払いをお願いしております。お客様のご都合に合わせて柔軟に対応いたしますので、ご相談ください。"
    },
    {
      question: "レッスン中に子どもがケガをした場合、責任はどうなりますか？",
      answer: "レッスン中のケガや体調不良については、基本的に自己管理・自己責任となります。ただし、当方の重大な過失によって事故が発生した場合に備え、法人として「スポーツ法人責任保険」に加入しております。万が一の場合でも一定の補償を受けられる体制を整えておりますのでご安心ください。"
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              元Jリーガー晴山岬<br />
              サッカー個人レッスン
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              プロの技術と経験を、あなたに。
            </p>
          </div>

          <div>
            <ImageWithFallback
              src={hareyamaHeroImage}
              alt="晴山岬コーチ"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              晴山岬 プロフィール
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">晴山岬（24歳）</p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">FC町田ゼルビア</span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">FC今治</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">元U-18日本代表</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-green-600" />
                    Jリーグ
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>FC町田ゼルビア</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>FC今治への期限付き移籍</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>ドイツリーグの複数クラブ</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>スペリオ城北</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>品川CC（現在所属）</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-6 h-6 mr-2 text-green-600" />
                    高校サッカー
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>帝京長岡10番</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>全国高校選手権優秀選手（18、19年度）</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>2大会連続のハットトリックを達成</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>ベスト4進出</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Trophy className="w-6 h-6 mr-2 text-green-600" />
                    代表歴
                  </h3>
                  <ul className="space-y-2 ml-8">
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>20年：U-19日本代表候補</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>20年：日本高校選抜</span>
                    </li>
                    <li className="text-gray-700 flex items-start">
                      <span className="mr-2">・</span>
                      <span>19年：U-18日本代表</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                晴山岬コーチからのメッセージ
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                1対1の個人レッスンを通じて、技術はもちろん「自分が子供の頃から知っておきたかったこと」を今の選手たちに伝えることを大切にしています。
              </p>
              <p>
                早い段階で「本質」を理解しておくことは、将来の可能性を大きく広げます。
              </p>
              <p>
                僕の経験を惜しみなく伝え、選手一人ひとりの成長をサポートします！
              </p>
              <div className="pt-6 border-t border-gray-200 mt-6">
                <p>
                  選手当人はもちろん、親御さんともたくさんコミュニケーションを取りたいなと考えてます！<br />
                  気軽に何でも聞いて欲しいです！<br />
                  よろしくお願いします！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Scene Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              晴山岬選手とは？
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* YouTube動画 */}
            <a 
              href="https://youtu.be/en8o3ITJ8c0?si=2wArlZ5GYVwoaL1L"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/en8o3ITJ8c0"
                  title="晴山岬選手 インタビュー - YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  インタビュー映像を見る
                </h3>
              </div>
            </a>

            {/* Instagram動画 */}
            <a 
              href="https://www.instagram.com/reel/DTSiPOwD9WX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.instagram.com/reel/DTSiPOwD9WX/embed"
                  title="晴山岬選手 プレー映像 - Instagram"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  プレー映像を一部見る
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-1 h-20 bg-gradient-to-b from-gray-200 to-gray-300 mx-auto mb-12"></div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            対面指導のお申し込みは<br />公式LINEから
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            お気軽にお問い合わせください
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#06C755] text-white hover:bg-[#05B34C] text-xl px-16 py-8 h-auto font-bold shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 rounded-full"
          >
            <a 
              href="https://lin.ee/35xksH5"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式LINEで申し込む
            </a>
          </Button>
          <p className="mt-8 text-gray-500 text-sm">
            ※LINEにて詳細をご案内いたします
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              料金プラン
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ① パーソナルトレーニング
                  </h3>
                  <p className="text-gray-600 mb-3">完全マンツーマン指導</p>
                  <p className="text-sm text-gray-500">
                    ※交通費・コート代は別途<br />
                    （公園等での実施可）
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg text-gray-600 mb-1">初回60分</p>
                  <p className="text-4xl font-bold text-green-600">¥15,000</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ② 少人数トレーニング（3名〜7名）
                  </h3>
                  <p className="text-gray-600 mb-3">仲間と一緒に切磋琢磨</p>
                  <p className="text-sm text-gray-500">
                    ※交通費・コート代は別途<br />
                    （公園等での実施可）
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg text-gray-600 mb-1">90分</p>
                  <p className="text-4xl font-bold text-green-600">¥30,000</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ③ グループトレーニング（人数制限なし）
                  </h3>
                  <p className="text-gray-600 mb-3">チーム単位での指導</p>
                  <p className="text-sm text-gray-500">
                    ※交通費・コート代は別途<br />
                    （公園等での実施可）
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg text-gray-600 mb-1">90分</p>
                  <p className="text-4xl font-bold text-green-600">¥50,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              個人レッスンの流れ
            </h2>
            <p className="text-lg text-[#64748b] max-w-3xl mx-auto mb-8">
              体験申し込みから実際のレッスンまで、4つのステップで簡単にスタートできます。
            </p>
            <div className="text-sm text-[#64748b] bg-blue-50 p-4 rounded-lg inline-block">
              <strong className="text-[#2563eb]">募集地域：</strong>
              東京都、埼玉県、神奈川県、千葉県
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-[#2563eb] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white">
                    <CardContent className="p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                          <div className="mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#2563eb] to-[#10b981] rounded-2xl flex items-center justify-center mx-auto md:mx-0">
                              <step.icon className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          <div className="mb-2">
                            <span className="text-sm font-medium text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
                              STEP {index + 1}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-lg text-[#10b981] font-medium mb-4">
                            {step.subtitle}
                          </p>
                          <p className="text-[#64748b] leading-relaxed mb-6">
                            {step.description}
                          </p>
                        </div>
                        <div>
                          <div className="bg-gray-50 rounded-xl p-6">
                            <h4 className="font-bold text-[#0f172a] mb-4">詳細内容</h4>
                            <ul className="space-y-3">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-[#2563eb] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-[#64748b] text-sm leading-relaxed">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              onClick={prevStep}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="text-center px-4">
              <div className="text-sm text-[#64748b]">
                {currentStep + 1} / {steps.length}
              </div>
            </div>

            <Button
              onClick={nextStep}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              よくある質問
            </h2>
            <p className="text-lg text-[#64748b]">
              お客様からよくいただくご質問をまとめました。
              その他のご質問がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-[#0f172a] font-medium">
                    <span className="mr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[#64748b] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}