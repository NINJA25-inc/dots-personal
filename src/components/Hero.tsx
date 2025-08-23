'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export default function Hero() {
  const handleCTAClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F7 100%)',
        pt: { xs: 10, md: 8 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.05) 35px, rgba(0, 0, 0, 0.05) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0, 0, 0, 0.05) 35px, rgba(0, 0, 0, 0.05) 70px)
          `,
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Box
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: '0.2s',
              animationFillMode: 'both',
            }}
          >
            <Typography
              component="span"
              sx={{
                display: 'inline-block',
                px: 2,
                py: 0.5,
                backgroundColor: 'secondary.main',
                color: 'white',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 500,
                mb: 3,
              }}
            >
              NEXT GENERATION SOCCER SCHOOL
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: '0.4s',
              animationFillMode: 'both',
              background: 'linear-gradient(90deg, #1D1D1F 0%, #0066CC 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            未来を創る
            <br />
            サッカースクール
          </Typography>

          <Typography
            variant="h3"
            color="text.secondary"
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: '0.6s',
              animationFillMode: 'both',
              fontWeight: 400,
              mb: 4,
              maxWidth: '600px',
            }}
          >
            DOTSで技術と創造性を磨き、
            <br />
            次世代のプレーヤーへ
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: '0.8s',
              animationFillMode: 'both',
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleCTAClick}
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '18px',
                backgroundColor: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              体験レッスンを申し込む
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                const element = document.querySelector('#concept');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '18px',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  backgroundColor: 'transparent',
                },
              }}
            >
              DOTS概念を見る
            </Button>
          </Stack>

          <Box
            sx={{
              mt: 8,
              animation: `${float} 4s ease-in-out infinite`,
              animationDelay: '1s',
            }}
          >
            <Box
              component="img"
              src="/api/placeholder/800/400"
              alt="DOTS Soccer School"
              sx={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}