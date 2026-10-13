import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years of Trust' },
  { value: '2,500+', label: 'Cars Delivered' },
  { value: '100%', label: 'Verified Documents' },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Lahore · Karachi · Islamabad
          </p>

          <h1 className="font-serif text-5xl font-medium leading-[1.05] text-balance text-foreground sm:text-6xl lg:text-7xl">
            Premium Cars in Pakistan
            <span className="mt-3 block text-gold">Trusted Dealership</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Hand-picked luxury vehicles, fully inspected and documented. Transparent PKR pricing, secure
            transactions and white-glove delivery across the country.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#inventory"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-foreground transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              View Cars
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Book a Visit
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-2xl text-gold sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
