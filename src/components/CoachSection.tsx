import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { MapPin, Award, Heart, Users, Clock } from 'lucide-react';
import hikaruCoachImage from 'figma:asset/793dd03827436dd27026f044b51d49fd74f35ac6.png';
import sekiguchiImage from 'figma:asset/c5cf84220a202624a338b79d0026c499220918ca.png';

export function CoachSection() {
  const activeCoaches = [
    {
      name: "ひかるコーチ",
      role: "メインコーチ", 
      image: hikaruCoachImage,
      experience: "年間500〜600件のレッスン実施",
      specialties: ["サッカー", "フットサル", "サッカーパーソナル指導"],
      background: [
        "サッカー：地元クラブから関東リーグ所属チームなどでプレー",
        "フットサルに転向、日本でのプレーを経てブラジルへ渡航",
        "AABB FUTSALおよびPulo Futsal（ブラジル2部相当）に所属",
        "FIFAフットサルW杯優勝メンバーとのセレクションマッチに出場"
      ],
      achievements: [
        "年間500〜600件のサッカーパーソナルレッスンを実施",
        "高校サッカー部フットサル大会監督",
        "中学生のサッカーコーチ",
        "小学生・中学生の進路サポート",
        "中学クラブチーム、高校サッカー部に多数輩出"
      ],
      philosophy: "信じること。自分自身が一番準備にこだわり熱を持ち続ける情報アップデートをする「子供一人ひとりの可能性を信じ、サッカーを通して未来を切り拓く力を育てる」",
      message: "スペインやブラジルなどから最先端の指導技術を日々アップデートし、常に子どもに寄り添い、成長をサポートします。",
      respect: "今まで自身を育ててくれた方々",
      favoritePlayer: "リオネル・メッシ、アンドレス・イニエスタ、シャビ・エルナンデス",
      isActive: true
    },
    {
      name: "関口純平",
      role: "事業運営",
      image: sekiguchiImage,
      experience: "エンジニア・事業運営経験5年",
      specialties: ["事業運営", "テクノロジー", "AI推進"],
      background: [
        "エンジニアとしてアプリ開発・ITコンサル・AI推進を経験",
        "AIソリューション開発に従事",
        "4社での経験を経て、株式会社NINJAを設立",
        "サッカー経験あり、テクノロジーとスポーツの融合を目指す"
      ],
      achievements: [
        "クラウドファンディング系サービス開発",
        "エンジンのアプリ開発"
      ],
      philosophy: "選手、保護者、コーチの三者が信頼関係を築き、共に成長できる環境作りを大切にしています。",
      message: "テクノロジーとサッカーの融合により、新しい育成の形を創造していきます。",
      respect: "同業者の仲間たち",
      favoritePlayer: "クリスティアーノ・ロナウド",
      isActive: true
    }
  ];

  const comingSoonCoaches = [
    { name: "テクニカルコーチ A", role: "技術指導専門" },
    { name: "テクニカルコーチ B", role: "技術指導専門" },
    { name: "フィジカルコーチ", role: "体力強化専門" },
    { name: "戦術コーチ", role: "戦術指導専門" }
  ];

  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            コーチスタッフ紹介
          </h2>
          <p className="text-lg text-[#64748b] max-w-3xl mx-auto">
            豊富な経験と実績を持つプロフェッショナルなコーチ陣が、
            あなたの成長を全力でサポートします。
          </p>
        </div>

        {/* Active Coaches Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activeCoaches.map((coach, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {/* Image */}
                  <div className="relative h-80 sm:h-96">
                    <ImageWithFallback
                      src={coach.image}
                      alt={coach.name}
                      className={`w-full h-full object-cover ${coach.name === "ひかるコーチ" ? "object-top" : "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-[#0f172a]">{coach.name}</h3>
                        <Badge className="bg-[#2563eb] text-white text-xs">{coach.role}</Badge>
                      </div>
                      <div className="flex items-center text-[#64748b] mb-3">
                        <Award className="w-3 h-3 mr-1" />
                        <span className="text-xs">{coach.experience}</span>
                      </div>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {coach.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="outline" className="border-[#10b981] text-[#10b981] text-xs px-2 py-0">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Background */}
                    <div className="mb-3">
                      <h4 className="font-bold text-[#0f172a] mb-2 flex items-center text-sm">
                        <Users className="w-3 h-3 mr-1 text-[#2563eb]" />
                        経歴・資格
                      </h4>
                      <ul className="space-y-1">
                        {coach.background.map((item, bgIndex) => (
                          <li key={bgIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-[#2563eb] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-xs text-[#64748b] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-3">
                      <h4 className="font-bold text-[#0f172a] mb-2 flex items-center text-sm">
                        <Award className="w-3 h-3 mr-1 text-[#10b981]" />
                        実績
                      </h4>
                      <ul className="space-y-1">
                        {coach.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-[#10b981] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-xs text-[#64748b] leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Philosophy */}
                    <div className="mb-3">
                      <h4 className="font-bold text-[#0f172a] mb-2 text-sm">指導理念</h4>
                      <p className="text-xs text-[#64748b] leading-relaxed italic">
                        "{coach.philosophy}"
                      </p>
                    </div>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 gap-3 mb-4">
                      <div>
                        <h5 className="font-medium text-[#0f172a] mb-1 text-sm">尊敬する指導者</h5>
                        <p className="text-xs text-[#64748b]">{coach.respect}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-[#0f172a] mb-1 text-sm">憧れの選手</h5>
                        <p className="text-xs text-[#64748b]">{coach.favoritePlayer}</p>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg">
                      <h4 className="font-bold text-[#0f172a] mb-1 flex items-center text-sm">
                        <Heart className="w-3 h-3 mr-1 text-red-500" />
                        メッセージ
                      </h4>
                      <p className="text-xs text-[#64748b] leading-relaxed">
                        {coach.message}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Coaches */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">
              専門コーチ陣
            </h3>
            <p className="text-sm text-[#64748b]">
              各分野の専門コーチが続々参加予定
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSoonCoaches.map((coach, index) => (
              <Card key={index} className="border-2 border-dashed border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 bg-gray-50/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
                      <Clock className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                  <h4 className="font-bold text-[#0f172a] mb-2">
                    {coach.name}
                  </h4>
                  <p className="text-sm text-[#64748b] mb-4">
                    {coach.role}
                  </p>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-lg">
                    <p className="text-xs font-medium text-gray-600">
                      Coming Soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}