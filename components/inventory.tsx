import { cars } from '@/lib/cars'
import { CarCard } from '@/components/car-card'

export function Inventory() {
  return (
    <section id="inventory" aria-labelledby="inventory-heading" className="scroll-mt-8 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Curated Collection</p>
            <h2 id="inventory-heading" className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl text-balance">
              Featured Inventory
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every vehicle undergoes a 150-point inspection with verified excise documents and full service history.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
