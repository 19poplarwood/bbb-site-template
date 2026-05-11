import { CalendarDays, Dog, Mail, MapPin, Waves, Wifi, Car, Utensils, Tv, WashingMachine } from "lucide-react";

const amenities = [
  { name: "Pet-friendly", icon: Dog },
  { name: "Fast Wi-Fi", icon: Wifi },
  { name: "Free parking", icon: Car },
  { name: "Full kitchen", icon: Utensils },
  { name: "Smart TV", icon: Tv },
  { name: "Washer & dryer", icon: WashingMachine },
  { name: "Near the bay", icon: Waves },
  { name: "Seasonal stays", icon: CalendarDays },
];

const photos = [
  "/photos/hero.jpg",
  "/photos/living-room.jpg",
  "/photos/kitchen.jpg",
  "/photos/bedroom.jpg",
  "/photos/bathroom.jpg",
  "/photos/outdoor.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-stone-900">
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#faf7f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-semibold tracking-wide">Barking Bayside Bungalow</a>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#photos" className="hover:text-stone-600">Photos</a>
            <a href="#amenities" className="hover:text-stone-600">Amenities</a>
            <a href="#calendar" className="hover:text-stone-600">Calendar</a>
            <a href="#book" className="hover:text-stone-600">Book</a>
          </div>
        </div>
      </nav>

      <section className="relative">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="/photos/hero.jpg"
          alt="Barking Bayside Bungalow"
          className="h-[78vh] w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-white">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em]">Villas, NJ 08251</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Cozy Pet-Friendly Bayside Bungalow
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-100">
              A peaceful shore escape near the bay, Cape May attractions, beaches, wineries, sunsets, and local favorites.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#book" className="rounded-2xl bg-white px-6 py-3 font-medium text-stone-900 shadow-lg">
                Request Availability
              </a>
              <a href="#photos" className="rounded-2xl border border-white px-6 py-3 font-medium text-white">
                View Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-xl font-semibold">Bayside Location</h2>
          <p className="mt-3 text-stone-600">
            Located in Villas, NJ, close to peaceful bay views, Cape May, beaches, dining, wineries, and shore-town activities.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-xl font-semibold">Cozy & Pet-Friendly</h2>
          <p className="mt-3 text-stone-600">
            A warm bungalow-style stay designed for relaxed getaways, small groups, couples, families, and pet lovers.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
          <h2 className="text-xl font-semibold">Seasonal Rates</h2>
          <p className="mt-3 text-stone-600">
            Rates vary by date and season. Send your requested dates to receive availability and current pricing.
          </p>
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">Photo Gallery</p>
        <h2 className="mt-2 text-3xl font-semibold">Showcase the Stay</h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Replace these placeholder images with your own photos in the public/photos folder.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Barking Bayside Bungalow photo ${index + 1}`}
              className="h-72 w-full rounded-3xl object-cover shadow-sm ring-1 ring-stone-200"
            />
          ))}
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">Amenities</p>
        <h2 className="mt-2 text-3xl font-semibold">Everything Guests Need</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {amenities.map(({ name, icon: Icon }) => (
            <div key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <Icon className="h-6 w-6" />
              <p className="mt-4 font-medium">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="calendar" className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">Availability</p>
        <h2 className="mt-2 text-3xl font-semibold">Check the Calendar</h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Replace the placeholder below with your public Google Calendar embed link.
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl bg-white p-3 shadow-sm ring-1 ring-stone-200">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
            className="h-[600px] w-full rounded-2xl"
          />
        </div>
      </section>

      <section id="book" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-stone-900 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-300">Direct Booking</p>
          <h2 className="mt-2 text-3xl font-semibold">Request Your Dates</h2>
          <p className="mt-4 text-stone-300">
            Tell us your preferred dates, guest count, and whether you are bringing a pet. We will respond with availability and seasonal pricing.
          </p>
          <div className="mt-8 space-y-4 text-sm text-stone-300">
            <p className="flex gap-2"><MapPin className="h-5 w-5" /> Villas, NJ 08251</p>
            <p className="flex gap-2"><Mail className="h-5 w-5" /> Replace with your email</p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <h3 className="text-2xl font-semibold">Booking Inquiry Form</h3>
          <p className="mt-3 text-stone-600">
            This button can link to a free Google Form for booking requests.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            className="mt-8 inline-flex rounded-2xl bg-stone-900 px-6 py-3 font-medium text-white"
          >
            Request Availability
          </a>
          <p className="mt-4 text-sm text-stone-500">
            Later, replace this link with your actual Google Form link.
          </p>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Barking Bayside Bungalow. All rights reserved.</p>
          <p>Cozy bayside bungalow in Villas, NJ.</p>
        </div>
      </footer>
    </main>
  );
}
