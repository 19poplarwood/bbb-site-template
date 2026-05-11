export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-700">
          Pet-friendly bayside stay in Villas, NJ 08251
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Cozy Bayside Bungalow Near Cape May
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          A beachside home with swim spa, outdoor shower, Happy Crab Lounge,
          sunsets on the bay, and thoughtful comforts so you can pack less and
          relax more.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScbDV3DqpxrS97Eu2nmpAqWxwTkDDPr7QW-ZgvSY9OHTm6osw/viewform"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Request Availability
          </a>
          <a
            href="#photos"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
          >
            View Photos
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Welcome to our beachside home.</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Whether you’re here for a family vacation, a couples’ retreat, or a
          friends’ getaway, we hope you relax, explore, and enjoy everything the
          Jersey Shore has to offer.
        </p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          We fell in love with Villas because it combines quiet bayfront charm,
          stunning sunsets over the Delaware Bay, and easy access to Cape May,
          Wildwood, Avalon, Stone Harbor, and beyond.
        </p>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Why Guests Love It</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Swim Spa Retreat", "Hydrotherapy jets, lighting, and space to unwind after beach days."],
              ["Happy Crab Lounge", "A converted shed hangout for games, drinks, naps, and relaxing."],
              ["Pet-Friendly Fun", "Fenced yard, doggy door, crate, bowls, leashes, and nearby dog-friendly beaches."],
              ["Pack Less", "Beach gear, kitchen essentials, games, blankets, and thoughtful details included."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="photos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Pictures</h2>
        <p className="mt-3 text-slate-700">
          A peek inside and around the bungalow.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["/exterior.png", "Bungalow Exterior"],
            ["/surf-shower.png", "Surf Shower"],
            ["/bay-sunset.png", "Bay Sunset"],
            ["/kitchen.png", "Kitchen"],
            ["/living-room.png", "Living Room"],
            ["/living-dining.png", "Living & Dining"],
            ["/bathroom.png", "Main Bathroom"],
            ["/outdoor-dining.png", "Outdoor Dining"],
            ["/pet-friendly.png", "Pet-Friendly Details"],
          ].map(([src, label]) => (
            <figure key={label} className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
              <img
                src={src}
                alt={label}
                className="h-64 w-full object-cover"
              />
              <figcaption className="p-4 text-sm font-medium">{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
