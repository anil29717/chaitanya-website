import Header from './components/Header'
import Hero from './components/Hero'
import OfferBanner from './components/OfferBanner'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Services from './components/Services'
import Packages from './components/Packages'
import SpecialOffers from './components/SpecialOffers'
import WhyChooseUs from './components/WhyChooseUs'
import Doctors from './components/Doctors'
import Technology from './components/Technology'
import Interventional from './components/Interventional'
import HomeCollection from './components/HomeCollection'
import Testimonials from './components/Testimonials'
import HealthCentre from './components/HealthCentre'
import LocalSEO from './components/LocalSEO'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileBottomBar from './components/MobileBottomBar'

export default function App() {
  return (
    <>
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Chaitanya Diagnostic Centre',
            description: 'Advanced diagnostic imaging and laboratory services in Noida — MRI, CT Scan, Ultrasound, Pathology, and health checkup packages.',
            url: 'https://chaitanyadiagnostics.in',
            telephone: ['+919318473692', '+919311241149'],
            email: 'cdcnoida@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Metro Pillar No. 215-216, Hoshiarpur',
              addressLocality: 'Sector-51, Noida',
              addressRegion: 'Uttar Pradesh',
              postalCode: '201301',
              addressCountry: 'IN',
            },
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:30', closes: '21:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '07:30', closes: '20:00' },
            ],
          }),
        }}
      />

      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <OfferBanner />
        <TrustStrip />
        <About />
        <Services />
        <Packages />
        <SpecialOffers />
        <WhyChooseUs />
        <Doctors />
        <Technology />
        <Interventional />
        <HomeCollection />
        <Testimonials />
        <HealthCentre />
        <LocalSEO />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
