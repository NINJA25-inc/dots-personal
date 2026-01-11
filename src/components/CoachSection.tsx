import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { MapPin, Award, Heart, Users, Clock, Star } from 'lucide-react';
import hikaruCoachImage from 'figma:asset/793dd03827436dd27026f044b51d49fd74f35ac6.png';
import sekiguchiImage from 'figma:asset/c5cf84220a202624a338b79d0026c499220918ca.png';
import hareyamaImage from 'figma:asset/e0d24f5841421da1e059b4a058a9e38fe96fd3e0.png';

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
        "高サッカー部フットサル大会監督",
        "中学生のサッカーコーチ",
        "小学生・中学生の進路サポート",
        "中学クラブチーム、高校サッカー部に多数輩出"
      ],
      philosophy: "信じること。自分自身が一番準備にこだわり熱を持ち続ける情報アップデートをする「子供一人ひとりの可能性を信じ、サッカーを通して未来を切り拓く力を育てる」",
      message: "スペインやブラジルなどから最先端の指導技術を日々アップデートし、常に子どもに寄り添い、成長をサポートします。",
      respect: "今まで自身を育ててくれた方々",
      favoritePlayer: "リオネル・メッシ、アンドレス・イニエスタ、シャビ・エルナンデス",
      isActive: true,
      isMain: true
    },
    {
      name: "晴山岬コーチ",
      role: "ゲストコーチVIP",
      image: hareyamaImage,
      experience: "元Jリーガー / 元U-19日本代表候補",
      specialties: ["プロレベル指導", "高度な技術指導", "メンタル指導"],
      background: [
        "【Jリーグ】FC町田ゼルビア所属",
        "FC今治への期限付き移籍",
        "ドイツプロクラブでも複数プレー",
        "【高校サッカー】帝京長岡10番",
        "全国高校選手権優秀選手（18、19年度）",
        "2大会連続のハットトリックを達成、ベスト4進出"
      ],
      achievements: [
        "2020年：U-19日本代表候補",
        "2020年：日本高校選抜",
        "2019年：U-18日本代表",
        "国際大会：ポルトガル遠征、SBS杯、スペイン遠征",
        "AFC U-19選手権予選出場"
      ],
      philosophy: "サッカーだけではなく、メンタル面でもサポートできたり、よりコミュニケーションを取り、信頼されなんでも話せるコーチを目指します！",
      message: "Jリーグの現場で学んだ本物の技術とプロの姿勢を、直接指導します。高いレベルを目指す選手を全力でサポートします。",
      respect: "高校時代の総監督",
      favoritePlayer: "佐藤寿人選手、柿谷曜一朗選手",
      isActive: true,
      isVIP: true
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
      isActive: true,
      isCompact: true
    },
    {
      name: "りゅうきコーチ",
      role: "アシスタント",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjb2FjaCUyMHRyYWluaW5nfGVufDF8fHx8MTc2Njg1MjQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      experience: "サッカー歴16年",
      specialties: ["初心者指導", "低学年育成", "中学年育成"],
      background: [
        "JFAライセンスC級取得",
        "サッカー歴16年",
        "大学サッカーまでプレー",
        "在籍中にJリーグザスパ群馬スクールキッズコーチを担当"
      ],
      achievements: [
        "主に初心者から低学年中学年の育成の土台を得意とする",
        "子供達に寄り添う子供ファーストな指導が定評"
      ],
      philosophy: "子供達一人ひとりに寄り添い、サッカーの基礎を楽しく、そして確実に身につけていくことを大切にしています。",
      message: "子供達の成長を第一に考え、一人ひとりのペースに合わせた丁寧な指導を心がけています。",
      respect: "育成年代の指導者たち",
      favoritePlayer: "アンドレス・イニエスタ",
      isActive: true,
      isCompact: true
    }
  ];

  const comingSoonCoaches = [
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
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {activeCoaches.filter(coach => !coach.isCompact).map((coach, index) => {
            // メインコーチは特別なデザイン
            if (coach.isMain) {
              return (
                <Card key={index} className="border-2 border-gray-200 shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 relative">
                  {/* Main Badge at top - ブラックで高級感 */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg border border-gray-700">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-bold tracking-wide">メインコーチ</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {/* Image */}
                      <div className="relative h-80 sm:h-96">
                        <ImageWithFallback
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-4 border-t-4 border-gray-900">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-[#0f172a]">{coach.name}</h3>
                            <Badge className="bg-gray-900 text-white text-xs border-2 border-gray-700">{coach.role}</Badge>
                          </div>
                          <div className="flex items-center text-[#64748b] mb-3">
                            <Award className="w-3 h-3 mr-1 text-gray-900" />
                            <span className="text-xs font-semibold">{coach.experience}</span>
                          </div>
                          
                          {/* Specialties */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {coach.specialties.map((specialty, specIndex) => (
                              <Badge key={specIndex} variant="outline" className="border-gray-900 text-gray-900 bg-gray-50 text-xs px-2 py-0 font-semibold">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Background */}
                        <div className="mb-3">
                          <h4 className="font-bold text-[#0f172a] mb-2 flex items-center text-sm">
                            <Users className="w-3 h-3 mr-1 text-gray-900" />
                            経歴・資格
                          </h4>
                          <ul className="space-y-1">
                            {coach.background.map((item, bgIndex) => (
                              <li key={bgIndex} className="flex items-start">
                                <div className="w-1 h-1 bg-gray-900 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-xs text-[#64748b] leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mb-3">
                          <h4 className="font-bold text-[#0f172a] mb-2 flex items-center text-sm">
                            <Award className="w-3 h-3 mr-1 text-gray-900" />
                            実績
                          </h4>
                          <ul className="space-y-1">
                            {coach.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className="w-1 h-1 bg-gray-900 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
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
                        <div className="bg-white p-3 rounded-lg border-2 border-gray-200">
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
              );
            }

            // VIPコーチは特別なゴールドデザイン
            if (coach.isVIP) {
              return (
                <Card key={index} className="border-2 border-gray-200 shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 relative">
                  {/* VIP Badge at top */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-bold">VIP</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      {/* Image with Gold Border */}
                      <div className="relative h-80 sm:h-96">
                        <ImageWithFallback
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-4 border-t-4 border-yellow-400">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-[#0f172a]">{coach.name}</h3>
                            <Badge className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs border-2 border-yellow-300">{coach.role}</Badge>
                          </div>
                          <div className="flex items-center text-[#64748b] mb-3">
                            <Award className="w-3 h-3 mr-1 text-yellow-600" />
                            <span className="text-xs font-semibold">{coach.experience}</span>
                          </div>
                          
                          {/* Specialties */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {coach.specialties.map((specialty, specIndex) => (
                              <Badge key={specIndex} variant="outline" className="border-yellow-500 text-yellow-700 bg-yellow-50 text-xs px-2 py-0 font-semibold">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Background */}
                        <div className="mb-3">
                          <h4 className="font-bold text-[#0f172a] mb-2 flex items-center text-sm">
                            <Users className="w-3 h-3 mr-1 text-yellow-600" />
                            経歴・資格
                          </h4>
                          <ul className="space-y-1">
                            {coach.background.map((item, bgIndex) => (
                              <li key={bgIndex} className="flex items-start">
                                <div className="w-1 h-1 bg-yellow-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span className="text-xs text-[#64748b] leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mb-3">
                          <h4 className="font-bold text-[#0f172a] mb-2 flex items-center text-sm">
                            <Award className="w-3 h-3 mr-1 text-yellow-600" />
                            実績
                          </h4>
                          <ul className="space-y-1">
                            {coach.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className="w-1 h-1 bg-yellow-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
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
                        <div className="bg-white p-3 rounded-lg border-2 border-gray-200">
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
              );
            }

            return null;
          })}
        </div>

        {/* Compact Coaches - 小さく表示 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {activeCoaches.filter(coach => coach.isCompact).map((coach, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  {/* Compact Image Placeholder */}
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-300" />
                  </div>

                  {/* Compact Content */}
                  <div className="p-3">
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-[#0f172a]">{coach.name}</h3>
                        <Badge className="bg-[#2563eb] text-white text-xs">{coach.role}</Badge>
                      </div>
                      <div className="flex items-center text-[#64748b] mb-2">
                        <Award className="w-3 h-3 mr-1" />
                        <span className="text-xs">{coach.experience}</span>
                      </div>
                      
                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {coach.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="outline" className="border-[#10b981] text-[#10b981] text-xs px-2 py-0">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Compact Background */}
                    <div className="mb-2">
                      <h4 className="font-bold text-[#0f172a] mb-1 flex items-center text-sm">
                        <Users className="w-3 h-3 mr-1 text-[#2563eb]" />
                        経歴・資格
                      </h4>
                      <ul className="space-y-0.5">
                        {coach.background.slice(0, 3).map((item, bgIndex) => (
                          <li key={bgIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-[#2563eb] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-xs text-[#64748b] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compact Message */}
                    <div className="bg-white p-2 rounded-lg border-2 border-gray-200">
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
              コーチ陣
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