'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const concepts = [
  {
    title: 'Dream',
    subtitle: '夢を描く',
    description: 'プロを目指す夢から始まる、無限の可能性',
  },
  {
    title: 'Overcome',
    subtitle: '挑戦する',
    description: '困難を乗り越える強い心と技術の習得',
  },
  {
    title: 'Teamwork',
    subtitle: '協力する',
    description: 'チームワークと個人の成長の両立',
  },
  {
    title: 'Success',
    subtitle: '成功体験',
    description: '小さな成功の積み重ねが大きな自信へ',
  },
];

const features = [
  'プロコーチによる本格指導',
  '最新の育成メソッド導入',
  '個人カルテによる成長管理',
  'メンタルサポート体制',
  '保護者との密な連携',
  '進路相談サポート',
];

export default function ConceptSection() {
  return (
    <Box
      id="concept"
      sx={{
        py: 10,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            DOTS概念
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              mb: 6,
            }}
          >
            Dream, Overcome, Teamwork, Success
            <br />4つの柱で未来のプレーヤーを育成
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {concepts.map((concept, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    backgroundColor: 'background.default',
                    border: '1px solid',
                    borderColor: 'rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: 'secondary.main',
                      mb: 0.5,
                    }}
                  >
                    {concept.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {concept.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                    }}
                  >
                    {concept.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #0066CC 0%, #003D7A 100%)',
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                }}
              >
                DOTSの特徴
              </Typography>
              <Stack spacing={2}>
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 24 }} />
                    <Typography variant="body1">{feature}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
