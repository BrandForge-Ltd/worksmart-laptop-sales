import { useState, Suspense, lazy } from 'react';
import CameraHeader from '../components/camera/CameraHeader';
import CameraHero from '../components/camera/CameraHero';
import CameraTrustBar from '../components/camera/CameraTrustBar';
import CameraFeatures from '../components/camera/CameraFeatures';
import CameraProductShowcase from '../components/camera/CameraProductShowcase';
import CameraAudience from '../components/camera/CameraAudience';
import CameraStats from '../components/camera/CameraStats';
import CameraTestimonials from '../components/camera/CameraTestimonials';
import CameraFAQ from '../components/camera/CameraFAQ';
import CameraFinalCTA from '../components/camera/CameraFinalCTA';
import CameraStickyCTA from '../components/camera/CameraStickyCTA';
import CameraFooter from '../components/camera/CameraFooter';

const CameraOrderModal = lazy(() => import('../components/camera/CameraOrderModal'));

export default function CameraHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
    setIsModalOpen(true);
  };

  return (
    <main className="flex-1 w-full relative overflow-hidden">
      <CameraHeader onOrderClick={openModal} />
      <CameraHero onOrderClick={openModal} />
      <CameraTrustBar />
      <CameraFeatures />
      <CameraProductShowcase />
      <CameraAudience />
      <CameraStats />
      <CameraTestimonials />
      <CameraFAQ />
      <CameraFinalCTA onOrderClick={openModal} />
      <CameraStickyCTA onOrderClick={openModal} />
      <CameraFooter />

      <Suspense fallback={null}>
        <CameraOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Suspense>
    </main>
  );
}
