'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const pricingPlans = [
  {
    name: '体験レッスン',
    price: '無料',
    period: '初回限定',
    popular: false,
    features: [
      '60分のレッスン体験',
      'コーチによるスキル診断',
      '施設見学',
      '保護者説明会',
    ],
    buttonText: '体験を申し込む',
  },
  {
    name: '月額プラン',
    price: '¥15,000',
    period: '月',
    popular: true,
    features: [
      '週2回のレギュラーレッスン',
      '個人カルテ作成・管理',
      '月1回の個別面談',
      '練習試合参加権',
      'ユニフォーム貸与',
    ],
    buttonText: '申し込む',
  },
  {
    name: '回数券',
    price: '¥20,000',
    period: '8回分',
    popular: false,
    features: [
      '有効期限3ヶ月',
      '好きな時に参加可能',
      '振替レッスン対応',
      '兄弟割引適用可',
    ],
    buttonText: '購入する',
  },
];

export default function PricingCards() {
  const handleButtonClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="pricing"
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
            料金プラン
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            お子様のペースに合わせて選べる料金プラン
            <br />
            まずは無料体験レッスンからお試しください
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: plan.popular ? '2px solid' : '1px solid',
                  borderColor: plan.popular ? 'secondary.main' : 'rgba(0, 0, 0, 0.08)',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: plan.popular
                    ? '0 20px 40px rgba(0, 102, 204, 0.15)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: plan.popular ? 'scale(1.05)' : 'scale(1.02)',
                    boxShadow: '0 12px 24px rgba(0, 102, 204, 0.15)',
                  },
                }}
              >
                {plan.popular && (
                  <Chip
                    label="人気プラン"
                    color="secondary"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                        color: plan.popular ? 'secondary.main' : 'text.primary',
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {plan.period}
                    </Typography>
                  </Box>

                  <Stack spacing={2} sx={{ mb: 4, flex: 1 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <CheckIcon
                          sx={{
                            fontSize: 20,
                            color: 'secondary.main',
                          }}
                        />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    onClick={handleButtonClick}
                    sx={{
                      py: 1.5,
                      backgroundColor: plan.popular ? 'secondary.main' : 'transparent',
                      borderColor: plan.popular ? 'secondary.main' : 'primary.main',
                      color: plan.popular ? 'white' : 'primary.main',
                      '&:hover': {
                        backgroundColor: plan.popular ? 'secondary.dark' : 'rgba(0, 102, 204, 0.04)',
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="text"
            onClick={handleButtonClick}
            sx={{
              color: 'secondary.main',
              fontSize: '16px',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            体験レッスンから始める →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}