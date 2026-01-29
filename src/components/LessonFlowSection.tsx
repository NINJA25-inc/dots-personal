import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, MessageCircle, Calendar, Users, MessageSquare } from 'lucide-react';

export function LessonFlowSection() {
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
      description: "お客様のご都合に合わせて、レッスンの日時と場所を決定いたします。東京、埼玉、神奈川、千葉エリアで対応可能です。",
      details: [
        "平日・土日祝日対応",
        "公園、グラウンド、フットサル場など",
        "交通費は別途ご負担い���だきます"
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

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lesson-flow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Step Navigation */}
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

        {/* Step Cards */}
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

        {/* Navigation Buttons */}
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
  );
}