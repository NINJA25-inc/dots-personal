import { Link } from 'react-router-dom';

export function RecruitmentSection() {
  return (
    <section id="recruitment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          パーソナルコーチ募集
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          DOTSと一緒に次世代の選手を育成しませんか？
        </p>
        <Link 
          to="/coach-recruitment"
          className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors duration-300 inline-block"
        >
          詳細を見る
        </Link>
      </div>
    </section>
  );
}