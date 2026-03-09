export default function Footer() {
    return (
        <footer className="bg-white dark:bg-stone-950">
            <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h3 className="font-serif text-2xl text-stone-800 dark:text-stone-100">
                            Legacy Events
                        </h3>

                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                            Crafting timeless celebrations with elegance,
                            intention, and unforgettable detail.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-rose-400">
                            Explore
                        </h4>

                        <ul className="mt-6 space-y-4 text-sm text-stone-600 dark:text-stone-400">
                            <li>
                                <a href="/" className="transition hover:text-rose-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/portfolio" className="transition hover:text-rose-500">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="transition hover:text-rose-500">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/about-us" className="transition hover:text-rose-500">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/contact-us" className="transition hover:text-rose-500">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-rose-400">
                            Contact
                        </h4>

                        <ul className="mt-6 space-y-4 text-sm text-stone-600 dark:text-stone-400">
                            <li>Kolkata, India</li>
                            <li>
                                <a href="mailto:hello@legacyevents.com" className="transition hover:text-rose-500">
                                    hello@legacyevents.co
                                </a>
                            </li>
                            <li>
                                <a href="tel:+910000000000" className="transition hover:text-rose-500">
                                    +91 00000 00000
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm uppercase tracking-[0.2em] text-rose-400">
                            Connect
                        </h4>

                        <ul className="mt-6 space-y-4 text-sm text-stone-600 dark:text-stone-400">
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="transition hover:text-rose-500"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="transition hover:text-rose-500"
                                >
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-20 border-t border-stone-200 pt-8 dark:border-stone-800">

                    {/* Bottom Strip */}
                    <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-stone-400 dark:text-stone-500 sm:flex-row sm:text-left">
                        <p>
                            © {new Date().getFullYear()} Legacy Events. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <a href="/privacy" className="transition hover:text-rose-500">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="transition hover:text-rose-500">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}