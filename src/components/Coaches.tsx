'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
} from '@mui/material';

const coaches = [
  {
    name: '山田 太郎',
    role: 'ヘッドコーチ',
    image: '/api/placeholder/200/200',
    specialties: ['戦術指導', 'メンタルコーチング'],
    experience: 'JFA公認S級ライセンス',
    description: '元Jリーガーとして10年間活躍。選手目線での指導が強み。',
  },
  {
    name: '鈴木 花子',
    role: 'テクニカルコーチ',
    image: '/api/placeholder/200/200',
    specialties: ['個人技術', 'ドリブル'],
    experience: 'JFA公認A級ライセンス',
    description: 'なでしこリーグでの経験を活かし、細やかな技術指導を担当。',
  },
  {
    name: '佐藤 健',
    role: 'フィジカルコーチ',
    image: '/api/placeholder/200/200',
    specialties: ['フィジカル強化', 'コンディショニング'],
    experience: 'NSCA認定トレーナー',
    description: '年齢に応じた適切なトレーニングで怪我なく成長をサポート。',
  },
  {
    name: '田中 美咲',
    role: 'GKコーチ',
    image: '/api/placeholder/200/200',
    specialties: ['GK専門指導', 'ポジショニング'],
    experience: 'JFA公認GK-A級ライセンス',
    description: '元日本代表GKとして、専門的なGK育成プログラムを実施。',
  },
  {
    name: '伊藤 翔',
    role: 'U-12コーチ',
    image: '/api/placeholder/200/200',
    specialties: ['基礎技術', '楽しさ重視'],
    experience: 'JFA公認B級ライセンス',
    description: '子どもたちがサッカーを好きになる指導を心がけています。',
  },
  {
    name: '高橋 さくら',
    role: 'アシスタントコーチ',
    image: '/api/placeholder/200/200',
    specialties: ['サポート全般', 'コミュニケーション'],
    experience: 'JFA公認C級ライセンス',
    description: '保護者との連携を大切に、子どもたちの成長を見守ります。',
  },
];

export default function Coaches() {
  return (
    <Box
      id="coaches"
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
            コーチ紹介
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            経験豊富なプロフェッショナルコーチ陣が
            <br />
            お子様の成長を全力でサポートします
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {coaches.map((coach, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    transform: 'translateY(-4px)',
                    '& .coach-avatar': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <CardContent sx={{ width: '100%' }}>
                  <Avatar
                    className="coach-avatar"
                    src={coach.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '20px',
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {coach.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    {coach.role}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="secondary.main"
                    sx={{
                      display: 'block',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {coach.experience}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mb: 2,
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {coach.specialties.map((specialty, idx) => (
                      <Chip
                        key={idx}
                        label={specialty}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 102, 204, 0.08)',
                          color: 'secondary.main',
                          fontSize: '12px',
                        }}
                      />
                    ))}
                  </Stack>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                    }}
                  >
                    {coach.description}
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