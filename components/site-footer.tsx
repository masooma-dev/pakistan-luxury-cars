import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from '@/lib/cars'

const showrooms = [
  { city: 'Lahore', address: 'Main Boulevard, Gulberg III' },
  { city: 'Karachi', address: 'Shahrah-e-Faisal, PECHS' },
  { city: 'Islamabad', address: 'Jinnah Avenue, Blue Area' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-8 border-t border-gold/20 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold tracking-wide text-gold">Royal</span>
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-foreground">Motors</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {"Pakistan's trusted destination for premium and luxury automobiles since 2010."}
            </p>
            <a
              href={whatsappLink('Assalam o Alaikum, I would like to know more about your inventory.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-all hover:brightness-110"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</h2>
            <ul className="mt-6 flex flex-col gap-4 text-sm">
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-3 text-foreground/90 hover:text-gold">
                  <Phone className="size-4 text-gold" aria-hidden="true" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:sales@royalmotors.pk" className="flex items-center gap-3 text-foreground/90 hover:text-gold">
                  <Mail className="size-4 text-gold" aria-hidden="true" />
                  sales@royalmotors.pk
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground/90">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Mon – Sat: 10:00 AM – 9:00 PM
                  <br />
                  <span className="text-muted-foreground">Sunday by appointment</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Showrooms</h2>
            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {showrooms.map((s) => (
                <li key={s.city} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-serif text-base text-foreground">{s.city}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Royal Motors Pakistan. All rights reserved.</p>
          <p>Prices are indicative and subject to change.</p>
        </div>
      </div>
    </footer>
  )
}
