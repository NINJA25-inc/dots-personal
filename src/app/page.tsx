import { Box } from '@mui/material';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import ConceptSection from '@/components/ConceptSection';
import PricingCards from '@/components/PricingCards';
import Coaches from '@/components/Coaches';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Hero />
        <ServiceCards />
        <ConceptSection />
        <PricingCards />
        <Coaches />
        <FAQ />
        <ContactForm />
      </Box>
      <Footer />
    </Box>
  );
}