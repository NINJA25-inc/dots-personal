'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Alert,
  MenuItem,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';

const ageGroups = [
  '4-6歳',
  '7-9歳',
  '10-12歳',
  '13-15歳',
  '16-18歳',
];

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    parentName: '',
    childName: '',
    age: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showAlert, setShowAlert] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({
      parentName: '',
      childName: '',
      age: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Box
      id="contact"
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
            お問い合わせ
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            体験レッスンのお申し込み、ご質問など
            <br />
            お気軽にお問い合わせください
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: 'white',
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <ChatIcon sx={{ fontSize: 48, mb: 2, mx: 'auto' }} />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  LINE でお問い合わせ
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  最も早くご返信できます
                  <br />
                  お友達追加で最新情報も配信
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    backgroundColor: 'white',
                    color: '#25D366',
                    fontWeight: 600,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  LINE 友達追加
                </Button>
                <Typography variant="caption" sx={{ mt: 2, opacity: 0.9 }}>
                  @dots-soccer
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ p: 4 }}>
              <CardContent>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                  メールフォーム
                </Typography>

                {showAlert && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="保護者氏名"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="お子様のお名前"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        label="年齢層"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      >
                        {ageGroups.map((age) => (
                          <MenuItem key={age} value={age}>
                            {age}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="電話番号"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        type="tel"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="メールアドレス"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="お問い合わせ内容"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="体験レッスン希望、ご質問など自由にご記入ください"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.5,
                          backgroundColor: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.dark',
                          },
                        }}
                      >
                        送信する
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
