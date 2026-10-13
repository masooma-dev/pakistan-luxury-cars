export const WHATSAPP_NUMBER = '923001234567'
export const WHATSAPP_DISPLAY = '+92 300 1234567'

export type Car = {
  id: string
  model: string
  year: number
  price: string
  priceShort: string
  image: string
  specs: string[]
}

export const cars: Car[] = [
  {
    id: 'land-cruiser',
    model: 'Toyota Land Cruiser LC300 ZX',
    year: 2024,
    price: 'PKR 9,85,00,000',
    priceShort: '9.85 Crore',
    image: '/images/land-cruiser.png',
    specs: ['3.3L Twin-Turbo', 'Automatic', '4,200 km'],
  },
  {
    id: 's-class',
    model: 'Mercedes-Benz S 580 4MATIC',
    year: 2023,
    price: 'PKR 11,50,00,000',
    priceShort: '11.50 Crore',
    image: '/images/s-class.png',
    specs: ['4.0L V8 Hybrid', 'Automatic', '6,800 km'],
  },
  {
    id: 'range-rover',
    model: 'Range Rover Autobiography',
    year: 2024,
    price: 'PKR 13,75,00,000',
    priceShort: '13.75 Crore',
    image: '/images/range-rover.png',
    specs: ['4.4L V8', 'Automatic', '2,100 km'],
  },
  {
    id: 'bmw-7',
    model: 'BMW 740i M Sport',
    year: 2023,
    price: 'PKR 8,90,00,000',
    priceShort: '8.90 Crore',
    image: '/images/bmw-7.png',
    specs: ['3.0L Inline-6', 'Automatic', '9,500 km'],
  },
  {
    id: 'lexus-lx',
    model: 'Lexus LX 600 Ultra Luxury',
    year: 2024,
    price: 'PKR 12,40,00,000',
    priceShort: '12.40 Crore',
    image: '/images/lexus-lx.png',
    specs: ['3.5L Twin-Turbo V6', 'Automatic', '1,500 km'],
  },
  {
    id: 'porsche-cayenne',
    model: 'Porsche Cayenne Coupé',
    year: 2023,
    price: 'PKR 7,95,00,000',
    priceShort: '7.95 Crore',
    image: '/images/porsche-cayenne.png',
    specs: ['3.0L V6 Turbo', 'Automatic', '7,300 km'],
  },
]

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
