
import { CalendarDays, ChefHat, Dog, Flame, Gamepad2, MapPin, PawPrint, Shell, ShowerHead, Sparkles, Utensils, Waves, Wifi, Car, Tv, WashingMachine, BedDouble } from "lucide-react";

const bookingFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc762Bdd9EhnQrBRFo19-Tz8u4xrRlCzwKec04ddtm5elAYjg/viewform?usp=header";

const featuredAmenities = [
  { name: "13' Swim Spa", icon: Sparkles },
  { name: "Happy Crab Lounge", icon: Gamepad2 },
  { name: "Pet-Friendly", icon: Dog },
  { name: "Outdoor Dining for 8", icon: Utensils },
  { name: "Surf Shower", icon: ShowerHead },
  { name: "Fire Pit Area", icon: Flame },
  { name: "Fully Stocked Kitchen", icon: ChefHat },
  { name: "Beach Gear Included", icon: Waves },
];

const everydayAmenities = [
  "Central air", "Gas fireplace for cozy fall nights", "4 TVs with YouTube access", "Fast Wi-Fi",
  "Washer & dryer", "Gas grill and grilling tools", "Games, puzzles, books, indoor and outdoor games",
  "Beach towels, beach chairs, umbrellas, coolers, and beach carts", "2 kayaks, 1 bike, pool floats, and outdoor games",
  "Fenced yard and doggy door", "Dog crate, bowls, and leashes", "Men's and women's golf clubs for the nearby par-3 course"
];

const kitchenAmenities = [
  "Ninja Flip air fryer, roast, toast, pizza & dehydrator", "Keurig Duo coffee maker",
  "George Foreman grill / panini press", "Electric tea kettle, blender, mixer, toaster, and mini waffle maker",
  "Fresh seasoning rack and spices", "Dinner service for 12", "Indoor and outdoor dinnerware",
  "Wine, champagne, margarita, martini, rocks, shot, and travel glasses",
  "Charcuterie board, serving platters, beachy serveware, and storage containers",
  "Pots, pans, baking sheets, baking dishes, pizza stone, and cooking utensils"
];

const rooms = [
  { title: "Shell Suite", image: "/photos/shell-suite.jpg", description: "A calm coastal retreat with soft shell-inspired bedding, soothing blue tones, and a relaxing beach-house feel." },
  { title: "Seas the Day Room", image: "/photos/seas-the-day-room.jpg", description: "A bright, simple, restful room with classic coastal stripes and soft ocean colors." },
  { title: "Whale Hello There Room", image: "/photos/whale-room.jpg", description: "A playful whale-themed room perfect for kids, teens, or anyone young at heart." }
];

const gallery = [
  { src: "/photos/hero-exterior.png", label: "Bungalow Exterior" },
  { src: "/photos/surf-shower.jpg", label: "Surf Shower" },
  { src: "/photos/bay-sunset.jpg", label: "Bay Sunset" },
  { src: "/photos/kitchen.jpg", label: "Kitchen" },
  { src: "/photos/living-room.jpg", label: "Living Room" },
  { src: "/photos/living-dining.jpg", label: "Living & Dining" },
  { src: "/photos/main-bath.jpg", label: "Main Bathroom" },
  { src: "/photos/outdoor-dining.jpg", label: "Outdoor Dining" },
  { src: "/photos/pet-friendly-art.jpg", label: "Pet-Friendly Details" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf4ea] text-stone-900">
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src="/logos/barking-bayside-logo.png" alt="Barking Bayside Bungalow logo" className="h-12 w-12 rounded-full object-contain" />
            <span className="font-semibold tracking-wide">Barking Bayside Bungalow</span>
          </a>
          <div className="hidden items-center gap-6 text-sm lg:flex">
            <a href="#welcome" className="hover:text-stone-600">Welcome</a>
            <a href="#amenities" className="hover:text-stone-600">Amenities</a>
            <a href="#rooms" className="hover:text-stone-600">Rooms</a>
            <a href="#gallery" className="hover:text-stone-600">Photos</a>
            <a href={bookingFormUrl} target="_blank" className="rounded-full bg-[#0f6f78] px-5 py-2 font-semibold text-white hover:bg-[#0b5960]">Request Availability</a>
          </div>
        </div>
      </nav>

      <section className="relative">
        <img src="/photos/hero-exterior.png" alt="Barking Bayside Bungalow exterior" className="h-[82vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-center px-5">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-3xl text-white">
              <img src="/logos/barking-bayside-logo.png" alt="Barking Bayside Bungalow logo" className="mb-6 h-28 w-28 rounded-full bg-white/90 object-contain p-2 shadow-lg" />
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur"><PawPrint className="h-4 w-4" />Pet-friendly bayside stay in Villas, NJ 08251</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Cozy Bayside Bungalow Near Cape May</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">A beachside home with swim spa, outdoor shower, Happy Crab Lounge, sunsets on the bay, and thoughtful comforts so you can pack less and relax more.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={bookingFormUrl} target="_blank" className="rounded-2xl bg-white px-7 py-3 text-center font-semibold text-stone-900 shadow-lg transition hover:scale-[1.02]">Request Availability</a>
                <a href="#gallery" className="rounded-2xl border border-white px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10">View Photos</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="welcome" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f6f78]">Welcome</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Welcome to our beachside home.</h2>
          <div className="mt-5 space-y-4 leading-8 text-stone-700">
            <p>Whether you’re here for a family vacation, a couples’ retreat, or a friends’ getaway, we hope you relax, explore, and enjoy everything the Jersey Shore has to offer.</p>
            <p>We’re Emily and Ryan, and along with our four-legged children, Pacino & Lola, we’re thrilled to share our home with you.</p>
            <p>We fell in love with Villas because it combines quiet bayfront charm, stunning sunsets over the Delaware Bay, and easy access to Cape May, Wildwood, Avalon, Stone Harbor, and beyond.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200">
          <img src="/photos/bay-sunset.jpg" alt="Sunset on the bay" className="h-80 w-full object-cover" />
          <div className="p-7">
            <h3 className="text-2xl font-semibold">Sunsets on the Bay</h3>
            <p className="mt-3 leading-7 text-stone-600">Just steps away. Bring a chair, your pup, and maybe a glass of wine — you’ll see why we never get tired of it.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#2f473f] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div><p className="text-sm uppercase tracking-[0.25em] text-stone-200">Why Guests Love It</p><h2 className="mt-3 text-3xl font-semibold md:text-4xl">Coastal comfort with personality.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            <Feature title="Swim Spa Retreat" text="A 13-foot swim spa with hydrotherapy jets, lighting, and space to unwind after beach days or sunset walks." />
            <Feature title="Happy Crab Lounge" text="Our converted shed hangout for games, drinks, naps, sports, or escaping the summer sun. Photos coming soon." />
            <Feature title="Pet-Friendly Fun" text="Fenced yard, doggy door, crate, bowls, leashes, dog-friendly bay beaches, and pup-friendly patios nearby." />
            <Feature title="Pack Less, Relax More" text="Beach gear, kitchen essentials, games, cozy blankets, and thoughtful details are ready for your stay." />
          </div>
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f6f78]">Amenities</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Everything you need for an easy shore stay.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAmenities.map(({ name, icon: Icon }) => <div key={name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200"><Icon className="h-7 w-7 text-[#0f6f78]" /><p className="mt-4 font-semibold">{name}</p></div>)}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ListCard icon={<ChefHat className="h-6 w-6 text-[#0f6f78]" />} title="Fully Stocked Kitchen" intro="After years of being renters ourselves, we don’t want you to have to lug everything." items={kitchenAmenities} />
          <ListCard icon={<Shell className="h-6 w-6 text-[#0f6f78]" />} title="Comforts & Extras" intro="Cozy, convenient, and set up for beach days, rainy days, and off-season weekends." items={everydayAmenities} />
        </div>
      </section>

      <section className="bg-[#fffaf2] px-5 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f6f78]">Swim Spa</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Swim Spa Retreat</h2>
            <p className="mt-5 leading-8 text-stone-700">Our 13-foot swim spa is designed for year-round relaxation after beach days, sunset walks, and cozy evenings at the shore.</p>
            <ul className="mt-6 grid gap-2 leading-7 text-stone-700"><li>• Hydrotherapy jets</li><li>• Seating for up to 4</li><li>• LED lighting</li><li>• Heated water for cooler nights</li><li>• Spacious design for lounging or light exercise</li></ul>
            <p className="mt-5 rounded-2xl bg-white p-4 text-sm text-stone-600 ring-1 ring-stone-200">Photos of the finished swim spa space are coming soon.</p>
          </div>
          <img src="/photos/swim-spa-model.jpg" alt="Swim spa model preview" className="h-[430px] w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-stone-200" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <img src="/logos/happy-crab-logo.png" alt="Happy Crab Lounge logo" className="mx-auto h-52 w-52 object-contain" />
          <h2 className="mt-6 text-3xl font-semibold">The Happy Crab Lounge</h2>
          <p className="mt-4 leading-8 text-stone-700">Or “the shed” if you’re boring. A place to unwind, enjoy drinks, play games, escape the sun, take a nap, or relax while watching a game.</p>
          <p className="mt-5 rounded-2xl bg-[#fbf4ea] p-4 text-sm text-stone-600">Interior photos coming soon as this space is completed.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Mini title="Surf Shower" text="Rinse off after beach days, kayaking, swim spa evenings, sandy paws, and sandy toes." icon={<ShowerHead className="h-7 w-7 text-[#0f6f78]" />} />
          <Mini title="Outdoor Living" text="Outdoor dining, fire pit seating, lighting, and Adirondack photos coming soon." icon={<Flame className="h-7 w-7 text-[#0f6f78]" />} />
          <img src="/photos/surf-shower.jpg" alt="Outdoor surf shower" className="h-72 w-full rounded-[2rem] object-cover shadow-sm ring-1 ring-stone-200 sm:col-span-2" />
        </div>
      </section>

      <section id="rooms" className="bg-[#2f473f] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-200">Rooms</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Coastal rooms with personality.</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {rooms.map((room) => <div key={room.title} className="overflow-hidden rounded-[2rem] bg-white text-stone-900 shadow-sm"><img src={room.image} alt={room.title} className="h-80 w-full object-cover" /><div className="p-6"><h3 className="text-2xl font-semibold">{room.title}</h3><p className="mt-3 leading-7 text-stone-600">{room.description}</p></div></div>)}
          </div>
          <div className="mt-8 rounded-[2rem] bg-white/10 p-6 backdrop-blur"><h3 className="flex items-center gap-2 text-2xl font-semibold"><BedDouble className="h-6 w-6" />Sleeps 8</h3><p className="mt-3 text-stone-100">1 king bed, 2 queen beds, and a twin bed with trundle.</p></div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f6f78]">Gallery</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A peek inside and around the bungalow.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo) => <div key={photo.src} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-stone-200"><img src={photo.src} alt={photo.label} className="h-72 w-full object-cover" /><p className="p-4 text-sm font-semibold">{photo.label}</p></div>)}
        </div>
      </section>

      <section className="bg-[#fffaf2] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f6f78]">Nearby</p>
            <h2 className="mt-3 text-3xl font-semibold">Local Attractions</h2>
            <ul className="mt-6 grid gap-3 leading-7 text-stone-700"><li>• 10 minutes to Cape May</li><li>• 15 minutes to Wildwood</li><li>• 20 minutes to Avalon & Stone Harbor</li><li>• 40 minutes to Atlantic City</li><li>• Fleck’s Ice Cream, dog-friendly bay beaches, wineries, restaurants, kayaking, and sunsets nearby</li></ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f6f78]">House Rules</p>
            <h2 className="mt-3 text-3xl font-semibold">A few simple rules.</h2>
            <ul className="mt-6 grid gap-3 leading-7 text-stone-700"><li>• No smoking inside the home 🚭</li><li>• Pets welcome if approved 🐾 Please clean up after them, as lawn service visits weekly.</li><li>• Quiet hours: 10:00 PM – 8:00 AM</li><li>• No parties or events without prior approval</li><li>• Please respect our neighbors — they are amazing!</li></ul>
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-300">Direct Booking Request</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Request Your Dates</h2>
          <p className="mt-5 leading-8 text-stone-300">Rates vary by date and season. Share your requested dates, guest count, pet details, and any questions. We’ll reply with availability and current pricing.</p>
          <div className="mt-8 grid gap-4 text-sm text-stone-300"><p className="flex gap-2"><MapPin className="h-5 w-5" /> Villas, NJ 08251</p><p className="flex gap-2"><CalendarDays className="h-5 w-5" /> Seasonal rates vary by date</p><p className="flex gap-2"><Dog className="h-5 w-5" /> Pets welcome with approval</p></div>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <h3 className="text-2xl font-semibold">Booking Inquiry Form</h3>
          <p className="mt-3 leading-7 text-stone-600">This is a request form, not an instant booking confirmation. We’ll review your dates and respond directly.</p>
          <a href={bookingFormUrl} target="_blank" className="mt-8 inline-flex rounded-2xl bg-[#0f6f78] px-6 py-3 font-semibold text-white transition hover:bg-[#0b5960]">Open Booking Request Form</a>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-[#fffaf2] px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3"><img src="/logos/barking-bayside-logo.png" alt="Barking Bayside Bungalow logo" className="h-10 w-10 rounded-full object-contain" /><p>© 2026 Barking Bayside Bungalow. All rights reserved.</p></div>
          <p>Cozy pet-friendly bayside bungalow in Villas, NJ 08251.</p>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return <div className="rounded-3xl bg-white/10 p-6 backdrop-blur"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-stone-100">{text}</p></div>;
}

function Mini({ title, text, icon }: { title: string; text: string; icon: React.ReactNode }) {
  return <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">{icon}<h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-stone-600">{text}</p></div>;
}

function ListCard({ icon, title, intro, items }: { icon: React.ReactNode; title: string; intro: string; items: string[] }) {
  return <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200"><h3 className="flex items-center gap-2 text-2xl font-semibold">{icon}{title}</h3><p className="mt-3 leading-7 text-stone-600">{intro}</p><ul className="mt-5 grid gap-2 text-sm leading-6 text-stone-700">{items.map((item) => <li key={item}>• {item}</li>)}</ul></div>;
}
