import { ShieldCheck, FileCheck2, Truck, Handshake } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: '150-Point Inspection', text: 'Certified technicians verify every vehicle inside and out.' },
  { icon: FileCheck2, title: 'Verified Documents', text: 'Excise, customs and ownership papers checked before listing.' },
  { icon: Handshake, title: 'Bank Financing', text: 'Flexible leasing with leading Pakistani banks.' },
  { icon: Truck, title: 'Nationwide Delivery', text: 'Enclosed transport to your doorstep in any city.' },
]

export function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-heading" className="border-y border-border bg-card/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="why-heading" className="sr-only">
          Why choose Royal Motors
        </h2>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-4">
              <span className="flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
