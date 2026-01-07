import { ArrowLeft, Users, Award, MapPin, Clock, DollarSign, Heart, BookOpen, Star, Trophy, Activity, Target, Zap, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function CoachRecruitmentPage() {
  const recruitmentDetails = [
    {
      icon: Users,
      title: "募集職種",
      content: "サッカーパーソナルコーチ",
      subtitle: "業務委託契約"
    },
    {
      icon: Award,
      title: "応募資格",
      content: "18歳以上",
      subtitle: "研修制度あり"
    },
    {
      icon: MapPin,
      title: "活動場所",
      content: "各レッスン会場",
      subtitle: "担当エリアにより異なる"
    },
    {
      icon: Clock,
      title: "活動時間",
      content: "原則自由",
      subtitle: "希望や担当レッスンに応じて調整"
    }
  ];

  const jobRequirements = [
    "18歳以上",
    "子どもが好きで、サッカーを心から楽しめる方",
    "本気でコーチとして挑戦したい方",
    "実績・資格は問いません（研修制度あり）"
  ];

  const workContent = [
    "サッカーパーソナルレッスンの指導",
    "レッスン生・保護者とのコミュニケーションやフィードバック",
    "運営サポート業務（レッスン管理、選手フォローなど）"
  ];

  const compensation = {
    hourlyWage: "1,500円 ～ 6,400円",
    benefits: [
      "レッスン生の人数や成績に応じて昇給あり",
      "交通費支給"
    ]
  };

  const selectionProcess = [
    { step: "書類選考", description: "履歴書・エントリーシート審査" },
    { step: "1次面接", description: "オンライン可" },
    { step: "実技テスト", description: "免除あり" },
    { step: "2次面接", description: "最終面接" },
    { step: "正式採用", description: "契約締結" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6">
            パーソナルコーチ募集
          </h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-relaxed">
              DOTSと一緒に<span className="font-semibold text-black">次世代の選手</span>を育成しませんか？
            </p>
            <p className="text-lg text-gray-600">
              サッカー経験者を歓迎！充実した研修制度でサポートします。
            </p>
          </div>
        </div>

        {/* Recruitment Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {recruitmentDetails.map((detail, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                  <detail.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-black mb-2">{detail.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{detail.content}</p>
                <p className="text-sm text-gray-500">{detail.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Information */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Job Requirements */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-black">
                  <Award className="w-5 h-5 mr-2 text-black" />
                  応募資格
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {jobRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Work Content */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-black">
                  <Users className="w-5 h-5 mr-2 text-black" />
                  業務内容
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {workContent.map((content, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm leading-relaxed">{content}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Compensation */}
            <Card className="border border-gray-200 shadow-sm bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center text-black">
                  <DollarSign className="w-5 h-5 mr-2 text-black" />
                  報酬
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">時給</span>
                    <Badge className="bg-black text-white text-lg px-4 py-2">
                      {compensation.hourlyWage}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {compensation.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Selection Process */}
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-black">
                  <Clock className="w-5 h-5 mr-2 text-black" />
                  採用フロー
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectionProcess.map((process, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-black">{process.step}</span>
                        <p className="text-sm text-gray-500">{process.description}</p>
                      </div>
                      {index < selectionProcess.length - 1 && (
                        <div className="ml-auto">
                          <Zap className="w-4 h-4 text-black" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application CTA */}
        <Card className="border border-gray-200 shadow-sm bg-black text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">応募方法</h3>
            <p className="mb-6 leading-relaxed">
              下記のGoogleフォームから応募してください。
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <div className="mb-6">
              <a
                href="https://forms.gle/qqYKNs7e9Ae8qDxQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
              >
                応募フォームに進む
              </a>
            </div>
            <Button 
              onClick={scrollToTop}
              className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-3 rounded-lg transition-colors duration-300"
            >
              ページ上部に戻る
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}