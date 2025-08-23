'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const footerSections = [
  {
    title: 'サービス',
    links: [
      { label: 'サービス紹介', href: '#services' },
      { label: 'DOTS概念', href: '#concept' },
      { label: '料金プラン', href: '#pricing' },
    ],
  },
  {
    title: 'サポート',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'お問い合わせ', href: '#contact' },
      { label: 'コーチ紹介', href: '#coaches' },
    ],
  },
  {
    title: '会社情報',
    links: [
      { label: '運営会社情報', href: '#company' },
      { label: '利用規約', href: '#terms' },
      { label: '特定商取引法表記', href: '#legal' },
    ],
  },
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        pt: 6,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SportsSoccerIcon sx={{ fontSize: 32, color: 'primary.main' }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '24px',
                  color: 'primary.main',
                  letterSpacing: '0.1em',
                }}
              >
                DOTS
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              次世代のサッカースクール
            </Typography>
            <Typography variant="body2" color="text.secondary">
              技術と創造性を育む
            </Typography>
          </Grid>

          {footerSections.map((section) => (
            <Grid item xs={6} md={3} key={section.title}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 2,
                  fontSize: '14px',
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={1.5}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    component="button"
                    variant="body2"
                    onClick={() => handleLinkClick(link.href)}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '14px',
                      textAlign: 'left',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
            © 2024 DOTS Soccer School. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              component="button"
              variant="body2"
              onClick={() => handleLinkClick('#privacy')}
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '12px',
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              プライバシーポリシー
            </Link>
            <Link
              component="button"
              variant="body2"
              onClick={() => handleLinkClick('#terms')}
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                fontSize: '12px',
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              利用規約
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}