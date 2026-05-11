export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-900 text-sm font-bold text-white">
            BB
          </div>
          <div>
            <p className="font-semibold">Bayside Bungalow</p>
            <p className="text-sm text-slate-600">Villas, New Jersey</p>
          </div>
        </div>

        <a
          href="mailto:youremail@example.com"
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Contact
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">
          Pet-Friendly Coastal Retreat
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Relax by the bay at Bayside Bungalow
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          A cozy beach bungalow near Cape May with a swim spa, outdoor shower,
          comfortable gathering spaces, and everything you need for a relaxing
          Jersey Shore getaway.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#details"
            className="rounded-full bg-sky-900 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800"
          >
            View Details
          </a>
          <a
            href="#photos"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            Photos Coming Soon
          </a>
        </div>
      </section>

      <section id="details" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Swim Spa", "Unwind after beach days with a relaxing swim spa experience."],
            ["Pet Friendly", "Bring your pup and enjoy a comfortable fenced outdoor space."],
            ["Near Cape May", "Close to beaches, sunsets, restaurants, wineries, and shore attractions."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-3xl font-bold">Welcome to your bayside escape</h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-700">
            Bayside Bungalow is designed for easy, comfortable vacations. Spend
            your mornings by the water, afternoons exploring Cape May County, and
            evenings relaxing outside after sunset.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Inside the bungalow</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>✓ Comfortable living space</li>
                <li>✓ Fully equipped kitchen</li>
                <li>✓ Fast WiFi</li>
                <li>✓ Smart TV</li>
                <li>✓ Family-friendly essentials</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Outside & nearby</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>✓ Swim spa</li>
                <li>✓ Outdoor shower</li>
                <li>✓ Outdoor dining space</li>
                <li>✓ Bay sunsets nearby</li>
                <li>✓ Short drive to Cape May</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="photos" className="bg-sky-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Photos coming soon</h2>
          <p className="mt-4 max-w-2xl leading-8 text-sky-100">
            This section is ready for your property photos. Add images later to
            the public folder and replace these placeholders with a gallery.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex h-56 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-sm text-sky-100"
              >
                Photo {item} Placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="text-3xl font-bold">Ready to plan your stay?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-700">
            Reach out for availability, pricing, and details about the bungalow.
          </p>

          <a
            href="mailto:youremail@example.com"
            className="mt-8 inline-block rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Bayside Bungalow. Villas, New Jersey.
      </footer>
    </main>
  )
}
