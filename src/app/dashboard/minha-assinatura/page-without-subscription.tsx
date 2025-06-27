import BannerWarning from '@/components/bannerWarning';
import {PricingCard} from '@/components/pricing-card';

export default async function MySubscription() {
  return (
    <>
      <BannerWarning text="Você precisa de uma assinatura ativa. Quer tal assinar agora?" />
      <PricingCard />
    </>
  );
}