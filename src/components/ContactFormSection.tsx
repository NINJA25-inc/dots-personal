import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Send, CheckCircle, MessageCircle, Mail } from 'lucide-react';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual form submission logic)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create mailto link with form data
    const subject = encodeURIComponent('DOTSサッカーパーソナル お問い合わせ');
    const body = encodeURIComponent(
      `お名前: ${formData.name}\n\nメールアドレス: ${formData.email}\n\nお問い合わせ内容:\n${formData.message}`
    );
    const mailtoLink = `mailto:info.dots.personal@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                お問い合わせありがとうございます
              </h3>
              <p className="text-gray-600">
                メールクライアントが開きます。送信ボタンを押してお問い合わせを完了してください。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            ご質問やご相談は、以下の方法からお気軽にお送りください。
          </p>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <a
              href="https://lin.ee/YL3zCoD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LINE公式アカウント</h3>
                <p className="text-sm text-gray-600">最も迅速な対応</p>
                <div className="mt-2">
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    推奨
                  </span>
                </div>
              </div>
            </a>
            
            <div className="flex items-center justify-center p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">メールフォーム</h3>
                <p className="text-sm text-gray-600">詳細なお問い合わせに</p>
                <div className="mt-2">
                  <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    下記フォーム
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardTitle className="text-center text-xl text-gray-900">
              お問い合わせフォーム
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-900 mb-2 block">
                  お名前 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="山田太郎"
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900 mb-2 block">
                  メールアドレス <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-900 mb-2 block">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="お問い合わせ内容をご記入ください。体験レッスンのお申し込み、料金プランのご相談など、どのようなことでもお気軽にお聞かせください。"
                  rows={6}
                  className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 hover:from-blue-600 hover:via-cyan-600 hover:to-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    送信中...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    送信する
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700 text-center">
                <span className="font-semibold text-yellow-800">※ 送信後、メールクライアントが自動で開きます。</span><br />
                メール送信を完了してお問い合わせを確定してください。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}