import { Phone } from 'lucide-react'
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/cars'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-baseline gap-2" aria-label="Royal Motors home">
          <span className="font-serif text-2xl font-semibold tracking-wide text-gold">Royal</span>
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-foreground">Motors</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          <a href="#inventory" className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-gold">
            Inventory
          </a>
          <a href="#why-us" className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-gold">
            Why Us
          </a>
          <a href="#contact" className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-gold">
            Contact
          </a>
        </nav>

        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{WHATSAPP_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  )
}
