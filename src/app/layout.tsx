import type { Metadata } from "next";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "DOTS Soccer School - 未来を創るサッカースクール",
  description: "技術と創造性を育む次世代のサッカースクール。プロコーチによる少人数制指導で、お子様の可能性を最大限に引き出します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
