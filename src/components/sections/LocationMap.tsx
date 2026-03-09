
export default function LocationMap() {
    return (
        <section className="relative w-full bg-rose-50 py-24 dark:bg-stone-950">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">

                {/* Location Details */}
                <div>

                    <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-rose-500 dark:text-rose-400">
                        Our Location
                    </span>

                    <h2 className="mb-6 font-serif text-4xl text-stone-800 dark:text-stone-100 md:text-5xl">
                        Visit Our Office
                    </h2>

                    <p className="mb-8 text-stone-600 dark:text-stone-400">
                        We would love to meet you and discuss your celebration.
                        Visit our office to explore ideas, review designs,
                        and start planning your unforgettable event.
                    </p>

                    <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-md dark:border-stone-800 dark:bg-stone-900">

                        <h3 className="mb-2 font-serif text-xl text-stone-800 dark:text-stone-100">
                            Legacy Events
                        </h3>

                        <p className="text-stone-600 dark:text-stone-400">
                            605, Merlin Matrix
                            <br />
                            DN 10, Sector 5
                            <br />
                            Saltlake, Kolkata
                            <br />
                            West Bengal, India
                        </p>

                    </div>

                </div>

                {/* Google Map */}
                <div className="overflow-hidden rounded-xl shadow-xl">

                    <iframe
                        src="https://www.google.com/maps?q=Merlin%20Matrix%20Sector%205%20Salt%20Lake%20Kolkata&output=embed"
                        width="100%"
                        height="420"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

            </div>

        </section>
    )
}