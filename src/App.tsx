import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MethodSection } from './components/MethodSection';
import { LessonFlowSection } from './components/LessonFlowSection';
import { CoachSection } from './components/CoachSection';
import { FAQSection } from './components/FAQSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';

import { CommercialTransactionPage } from './components/CommercialTransactionPage';
import { CompanyInfoPage } from './components/CompanyInfoPage';
import { CoachRecruitmentPage } from './components/CoachRecruitmentPage';
import { TotalSupportPlanPage } from './components/TotalSupportPlanPage';
import { PricingPage } from './components/PricingPage';
import { HareyamaPlanPage } from './components/HareyamaPlanPage';
import { ScholarshipPage } from './components/ScholarshipPage';
import { SpecialLandingPage } from './components/SpecialLandingPage';

// Home page component
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MethodSection />
      <LessonFlowSection />
      <CoachSection />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}

// Sponsor page component
function SponsorPage() {
  return (
    <div className="pt-16">
      {/* Page content with top padding to account for fixed header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home button */}
          <div className="mb-8">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </button>
          </div>
          
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6">
              スポンサー提携先募集
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                共にサッカー界の未来を創造し、<br />
                次世代の選手育成をサポートしていただける<br />
                パートナー企業様を募集しています。
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 lg:p-12 mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
                私たちのミッション
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                DOTSサッカーパーソナルは、一人ひとりの可能性を最大限に引き出す個別指導を通じて、
                技術面だけでなく人間性も育む次世代のサッカー教育を提供しています。
              </p>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-12 text-center">
              スポンサー提携のメリット
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "ブランド認知度向上",
                  description: "サッカー愛好者や保護者層への効果的なリーチが可能です。公式サイトやSNSでの露出により、ブランドの認知度向上に貢献します。"
                },
                {
                  title: "若年層へのアプローチ",
                  description: "小学生から高校生まで幅広い年代の選手・保護者との接点を持つことで、将来の顧客層への長期的なアプローチが実現できます。"
                },
                {
                  title: "CSR活動の推進",
                  description: "スポーツを通じた青少年育成支援として、企業の社会貢献活動（CSR）の一環として価値のある取り組みです。"
                },
                {
                  title: "地域コミュニティとの連携",
                  description: "東京・神奈川・埼玉・千葉エリアの地域コミュニティとの強いつながりを活用し、地域密着型のマーケティングが可能です。"
                },
                {
                  title: "スポーツ業界ネットワーク",
                  description: "サッカー業界やスポーツ関連企業との新たなビジネスネットワークの構築機会を提供します。"
                },
                {
                  title: "長期的パートナーシップ",
                  description: "一時的な広告出稿とは異なり、持続的なブランド露出と長期的な関係構築が可能です。"
                }
              ].map((benefit, index) => (
                <div key={index} className="border border-gray-200 hover:border-black transition-all duration-300 bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              スポンサー提携についてのお問い合わせ
            </p>
            <a 
              href="mailto:info.dots.personal@gmail.com"
              className="text-black hover:text-gray-600 transition-colors duration-300 underline"
            >
              info.dots.personal@gmail.com
            </a>
          </div>


        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sponsor" element={<SponsorPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />

            <Route path="/commercial-transaction" element={<CommercialTransactionPage />} />
            <Route path="/company-info" element={<CompanyInfoPage />} />
            <Route path="/coach-recruitment" element={<CoachRecruitmentPage />} />
            <Route path="/total-support-plan" element={<TotalSupportPlanPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/hareyama-plan" element={<HareyamaPlanPage />} />
            <Route path="/scholarship" element={<ScholarshipPage />} />
            <Route path="/special-landing" element={<SpecialLandingPage />} />
            {/* Handle preview page and other unmatched routes */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}