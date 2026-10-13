import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Inventory } from '@/components/inventory'
import { WhyUs } from '@/components/why-us'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Inventory />
        <WhyUs />
      </main>
      <SiteFooter />
    </>
  )
}
