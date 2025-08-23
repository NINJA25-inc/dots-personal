'use client';

import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: '何歳から入会できますか？',
    answer: '4歳から18歳までのお子様が対象です。年齢やレベルに応じたクラス分けを行っているため、どなたでも安心して参加いただけます。',
  },
  {
    question: '初心者でも大丈夫ですか？',
    answer: 'もちろん大丈夫です。初心者から経験者まで、それぞれのレベルに合わせた指導を行います。基礎から丁寧に指導しますので、サッカーが初めてのお子様も安心してご参加ください。',
  },
  {
    question: 'レッスンの振替はできますか？',
    answer: '月額プランの場合、月2回まで振替が可能です。体調不良や学校行事などでお休みされる場合は、前日までにご連絡いただければ振替レッスンをご案内いたします。',
  },
  {
    question: '必要な用具は何ですか？',
    answer: 'サッカーボール、運動できる服装、トレーニングシューズ（スパイク可）、水筒をご用意ください。ユニフォームは月額プラン加入者には貸与いたします。',
  },
  {
    question: '雨天時のレッスンはどうなりますか？',
    answer: '小雨の場合は実施しますが、荒天時は中止となります。中止の場合は開始2時間前までにメールでご連絡し、振替レッスンをご案内いたします。',
  },
  {
    question: '保護者の見学は可能ですか？',
    answer: '見学スペースをご用意していますので、いつでも見学可能です。お子様の成長を間近でご覧いただけます。',
  },
  {
    question: '兄弟割引はありますか？',
    answer: 'はい、ご兄弟で入会される場合、2人目以降は月謝が20%割引となります。回数券にも割引が適用されます。',
  },
  {
    question: '試合や大会への参加はありますか？',
    answer: '定期的に練習試合を行い、年に数回は外部大会にも参加します。試合経験を通じて実戦力を養います。',
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      id="faq"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 600,
            }}
          >
            よくある質問
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            入会をご検討の方からよくいただく質問をまとめました
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                borderRadius: '12px !important',
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.08)',
                boxShadow: 'none',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  borderColor: 'secondary.main',
                  boxShadow: '0 4px 12px rgba(0, 102, 204, 0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 3,
                  py: 2,
                  '& .MuiAccordionSummary-content': {
                    my: 0,
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    fontSize: '17px',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 0,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                    fontSize: '15px',
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}