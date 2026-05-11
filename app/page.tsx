export default function Home() {
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-700">
            Villas, New Jersey
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Bayside Bungalow
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            A cozy pet-friendly beach bungalow near Cape May with a swim spa,
            outdoor shower, relaxing lounge spaces, and unforgettable sunsets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#photos"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View Photos
            </a>

            <a
              href="mailto:youremail@example.com"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Relax by the Bay</h2>

            <p className="mt-6 leading-8 text-slate-700">
              Welcome to Bayside Bungalow — a relaxing coastal retreat located
              near the Delaware Bay and minutes from Cape May and Wildwood.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Enjoy beautiful sunsets, nearby beaches, local restaurants, and a
              thoughtfully designed home stocked with amenities for couples,
              families, and pet lovers.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-8">
            <h3 className="text-xl font-semibold">Amenities</h3>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>✓ Swim Spa</li>
              <li>✓ Pet Friendly</li>
              <li>✓ Outdoor Shower</li>
              <li>✓ Fully Equipped Kitchen</li>
              <li>✓ Beach Gear Included</li>
              <li>✓ Fast WiFi</li>
              <li>✓ Smart TV</li>
              <li>✓ Outdoor Dining Area</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section
        id="photos"
        className="bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">Photo Gallery</h2>

            <p className="mt-3 text-slate-700">
              A look inside the bungalow and around the property.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <img
                  src={photo}
                  alt={`Property photo ${index + 1}`}
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-slate-900 px-8 py-14 text-white">
          <h2 className="text-3xl font-bold">
            Minutes from Cape May
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Conveniently located near beaches, wineries, restaurants, shopping,
            fishing, and local attractions throughout Cape May County.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          © 2026 Bayside Bungalow. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
