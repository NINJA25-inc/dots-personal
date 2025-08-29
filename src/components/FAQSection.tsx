import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "個人レッスンは初めてでも大丈夫ですか？",
      answer: "もちろん大丈夫です。初回体験レッスンでは、まず選手の現在のレベルや目標をお聞きし、一人ひとりに合わせたレッスン内容を提案させていただきます。初心者から上級者まで、幅広いレベルに対応していますので、安心してお申し込みください。"
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
      answer: "東京都、埼玉県、神奈川県、千葉県内の公園、学校のグラウンド、フットサル場などで実施します。お客様のご希望に合わせて最適な場所を提案いたします。施設利用料が必要な場合は事前にお知らせし、ご相談の上で決定いたします。"
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
      answer: "現金払い（レッスン当日）と銀行振込に対応しております。月額プランや回数券の場合は、事前のお振込みをお願いしております。お客様のご都合に合わせて柔軟に対応いたしますので、ご相談ください。"
    },
    {
      question: "特待生制度とはどのようなものですか？",
      answer: "DOTSでは、特に才能のある選手や向上心の高い選手を対象とした特待生制度を設けています。技術レベルや取り組み姿勢を総合的に評価し、レッスン料の割引や追加サポートを提供いたします。詳細については個別にご相談ください。"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-[#64748b]">
            お客様からよくいただくご質問をまとめました。
            その他のご質問がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
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
  );
}