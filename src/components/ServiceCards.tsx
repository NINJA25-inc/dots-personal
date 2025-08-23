'use client';

import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsIcon from '@mui/icons-material/Sports';

const services = [
  {
    icon: <SchoolIcon sx={{ fontSize: 48 }} />,
    title: '基礎技術トレーニング',
    description: 'ボールコントロール、パス、シュートなど、サッカーの基本技術を徹底的に習得',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    title: '少人数制クラス',
    description: '最大8名の少人数制で、一人ひとりに合わせた丁寧な指導を実現',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 48 }} />,
    title: '戦術理解',
    description: 'ゲーム分析と戦術理解を深め、試合で活きる判断力を養成',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
    title: '個人能力向上',
    description: '個々の強みを伸ばし、弱点を克服するパーソナライズドトレーニング',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
    title: '実戦経験',
    description: '定期的な練習試合と大会参加で、実戦での経験を積む',
  },
  {
    icon: <SportsIcon sx={{ fontSize: 48 }} />,
    title: 'フィジカル強化',
    description: '年齢に応じた適切なフィジカルトレーニングで、強い体づくり',
  },
];

export default function ServiceCards() {
  return (
    <Box
      id="services"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
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
            サービス紹介
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            DOTSでは、技術・戦術・フィジカル・メンタルの4つの側面から
            総合的にプレーヤーを育成します
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  backgroundColor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    boxShadow: '0 12px 24px rgba(0, 102, 204, 0.1)',
                    transform: 'translateY(-8px)',
                    '& .service-icon': {
                      color: 'secondary.main',
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <CardContent>
                  <Box
                    className="service-icon"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      fontSize: '20px',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}