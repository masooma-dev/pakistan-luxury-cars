import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { type Car, whatsappLink } from '@/lib/cars'

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px] hover:shadow-gold/25">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={car.image}
          alt={`${car.year} ${car.model}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1 text-xs font-semibold uppercase tracking-wider text-success-foreground">
          <span className="size-1.5 rounded-full bg-success-foreground" aria-hidden="true" />
          For Sale
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {car.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-medium text-foreground text-balance">{car.model}</h3>

        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground" aria-label="Specifications">
          {car.specs.map((spec, i) => (
            <li key={spec} className="flex items-center gap-3">
              {i > 0 && <span className="size-1 rounded-full bg-gold/60" aria-hidden="true" />}
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Price</p>
            <p className="mt-1 text-2xl font-semibold text-gold">{car.price}</p>
          </div>
          <p className="pb-1 text-xs text-muted-foreground">{car.priceShort}</p>
        </div>

        <a
          href={whatsappLink(`Assalam o Alaikum, I am interested in the ${car.year} ${car.model} listed at ${car.price}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-transparent px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-gold-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Contact on WhatsApp
          <span className="sr-only">about the {car.model} (opens in new tab)</span>
        </a>
      </div>
    </article>
  )
}
