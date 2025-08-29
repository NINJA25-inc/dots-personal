import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Target, 
  Zap, 
  Trophy, 
  Eye, 
  Brain, 
  Activity, 
  Heart, 
  Users2,
  BarChart3,
  Cpu,
  Star,
  Network,
  MessageCircle,
  Video,
  ClipboardList,
  ChevronRight
} from 'lucide-react';

export function MethodSection() {


  const methodSystem = [
    {
      icon: Eye,
      title: "可視化と評価",
      description: "データとビデオ解析により、成長を可視化し、客観的な評価を提供します。"
    },
    {
      icon: Star,
      title: "指導者も評価される仕組み",
      description: "コーチの指導力も定期的に評価し、質の高い指導を継続的に提供します。"
    },
    {
      icon: Network,
      title: "多専門家の連携",
      description: "コーチたちは常に最新の知見を取り入れ、進化し続ける指導を実践しています。"
    }
  ];

  const fivePillars = [
    {
      icon: Target,
      title: "技術",
      description: "基本技術から応用技術まで、段階的にスキルアップを図ります。",
      image: "https://images.unsplash.com/photo-1739550635585-484633b21450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0ZWNobmlxdWUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTYyNjY4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Brain,
      title: "IQ",
      description: "戦術理解力と判断力を向上させ、ゲームを読む力を養います。",
      image: "https://images.unsplash.com/photo-1569184777314-103b0f84d8e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdHJhdGVneSUyMHRhY3RpY3N8ZW58MXx8fHwxNzU2MjY2ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Activity,
      title: "フィジカル",
      description: "年代に適したフィジカルトレーニングで身体能力を向上させます。",
      image: "https://images.unsplash.com/photo-1721441905204-ea1b56b9d7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaXRuZXNzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU2MjY2ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Heart,
      title: "メンタル",
      description: "困難に向き合い、乗り越える強さを育む。どんな時も前へ進む力を育てます。",
      image: "https://images.unsplash.com/photo-1708533144300-9a00b4cc29f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBtZW50YWwlMjBzdHJlbmd0aHxlbnwxfHx8fDE3NTYyNjY4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Users2,
      title: "人間性",
      description: "リーダーシップ、チームワーク、礼儀など人として大切な要素を学びます。",
      image: "https://images.unsplash.com/photo-1695054486203-fea2173902ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0ZWFtd29yayUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzU2MjY2ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const mainServices = [
    {
      icon: Target,
      title: "サッカーパーソナルレッスン",
      description: "マンツーマンの個別指導で、一人ひとりに最適化されたトレーニングを提供"
    },
    {
      icon: MessageCircle,
      title: "練習後のフィードバック",
      description: "毎回のレッスン後に詳細なフィードバックで成長ポイントを明確化"
    },
    {
      icon: ClipboardList,
      title: "自主練習メニューの作成",
      description: "個人の課題に応じたオリジナルの自主練習プログラムを提供"
    },
    {
      icon: Video,
      title: "試合動画の分析",
      description: "実際の試合映像を分析し、具体的な改善点とアドバイスを提供"
    },
    {
      icon: MessageCircle,
      title: "担当コーチとのLINE相談",
      description: "24時間いつでも相談可能なLINEサポートで継続的なコミュニケーション"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="method" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6">
            DOTSメソッド
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed">
              データと経験が導く、次世代の育成デザイン。
            </p>
          </div>
        </div>



        {/* メソッドの仕組み */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-black text-center mb-12">
            メソッドの仕組み
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {methodSystem.map((method, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-4">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* サッカー育成の5つの柱 */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-black text-center mb-4">
            サッカー育成の5つの柱
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            それぞれの要素をバランスよく育成することで、真に強い選手を育てます
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {fivePillars.map((pillar, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
                <div className="relative">
                  <ImageWithFallback 
                    src={pillar.image}
                    alt={`${pillar.title}のイメージ`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 left-3 w-8 h-8 bg-black/80 rounded-lg flex items-center justify-center">
                    <pillar.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-black mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 主な提供サービス */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-black text-center mb-12">
            主な提供サービス
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}