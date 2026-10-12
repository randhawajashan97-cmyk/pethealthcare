import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Star, Phone, Navigation, Bone, Stethoscope, Scissors, ShoppingBag, Heart, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero.jpg";
import food from "@/assets/food.jpg";
import vet from "@/assets/vet.jpg";
import accessories from "@/assets/accessories.jpg";

const ADDRESS =
  "Shop 2, Public School, Guru Nanak School Wali Gali, Pheruman Rd, opposite Shaheed Darshan Singh, Rayya, Punjab 143112";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("The pet health care, " + ADDRESS)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pet Health Care — Pet Store in Rayya, Punjab" },
      {
        name: "description",
        content:
          "4.9★ rated pet store in Rayya, Punjab. Pet food, supplements, accessories, grooming and health care. Open daily till 9 pm.",
      },
      { property: "og:title", content: "The Pet Health Care — Rayya, Punjab" },
      {
        property: "og:description",
        content: "Healthy pets, happy homes. Pet food, accessories and care in Rayya. Open till 9 pm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Bone, title: "Pet Food & Nutrition", text: "Premium dry & wet food, treats and supplements for dogs, cats and birds." },
  { icon: Stethoscope, title: "Health Care", text: "Medicines, deworming, tick & flea care and expert advice for your pet." },
  { icon: Scissors, title: "Grooming Supplies", text: "Shampoos, brushes and grooming essentials to keep pets clean and happy." },
  { icon: ShoppingBag, title: "Accessories & Toys", text: "Collars, leashes, beds, bowls and toys your pets will love." },
];

const reviews = [
  { name: "Gurpreet S.", text: "Very helpful owner and genuine products. My dog's food is always available here." },
  { name: "Harman K.", text: "Best pet shop in Rayya. Good prices and great advice on pet health." },
  { name: "Manpreet R.", text: "Clean shop, friendly service and lots of variety in accessories." },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
            <Heart className="h-6 w-6 fill-primary" /> The Pet Health Care
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#reviews" className="hover:text-primary">Reviews</a>
            <a href="#visit" className="hover:text-primary">Visit Us</a>
          </nav>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Directions
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Happy golden retriever and tabby cat at The Pet Health Care store" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-5 py-24">
          <div className="max-w-xl text-primary-foreground">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-sm backdrop-blur">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.9 rating · Trusted pet store in Rayya
            </div>
            <h1 className="text-balance text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Healthy pets, happy homes.
            </h1>
            <p className="mt-6 text-lg opacity-90">
              Premium food, health care and accessories for your loved companions — all under one roof in Rayya, Punjab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a href="#services" className="rounded-full border border-primary-foreground/40 px-7 py-3.5 font-semibold hover:bg-background/10">
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm opacity-90">
              <Clock className="h-4 w-4" /> Open today · Closes 9 pm
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24">
        <p className="font-semibold uppercase tracking-widest text-leaf">What we offer</p>
        <h2 className="mt-2 max-w-2xl text-4xl font-bold md:text-5xl">Everything your pet needs to thrive</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-4xl font-bold md:text-5xl">Inside our store</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: food, t: "Nutrition & Treats" },
              { img: vet, t: "Pet Health Care" },
              { img: accessories, t: "Accessories & Toys" },
            ].map((g) => (
              <figure key={g.t} className="group overflow-hidden rounded-2xl">
                <img src={g.img} alt={g.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="mt-3 font-display text-lg font-semibold">{g.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <img src={vet} alt="Caring for a puppy" loading="lazy" width={1024} height={768} className="rounded-3xl object-cover shadow-2xl" />
        <div>
          <p className="font-semibold uppercase tracking-widest text-leaf">About us</p>
          <h2 className="mt-2 text-4xl font-bold">Caring for Rayya's pets with love</h2>
          <p className="mt-5 text-muted-foreground">
            The Pet Health Care is your neighbourhood pet store on Pheruman Road. We stock genuine, quality products and
            share honest advice so every dog, cat and bird lives a healthier, happier life.
          </p>
          <ul className="mt-8 space-y-4">
            {["Genuine branded products", "Friendly expert guidance", "Fair prices for every family"].map((x) => (
              <li key={x} className="flex items-center gap-3 font-medium">
                <ShieldCheck className="h-5 w-5 text-leaf" /> {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-leaf text-leaf" />
            ))}
          </div>
          <h2 className="mt-4 text-4xl font-bold">Rated 4.9 by our customers</h2>
          <p className="mt-2 text-muted-foreground">Based on Google reviews</p>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-card p-7 shadow-sm">
                <p className="text-card-foreground">“{r.text}”</p>
                <p className="mt-5 font-semibold text-primary">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid overflow-hidden rounded-3xl border bg-card md:grid-cols-2">
          <div className="p-10 md:p-14">
            <h2 className="text-4xl font-bold">Visit our store</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p>{ADDRESS}</p>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p>Open daily · Closes 9:00 pm</p>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p>Call or visit us in store</p>
              </div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:opacity-90">
              <Navigation className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
          <iframe
            title="The Pet Health Care location"
            className="min-h-[380px] w-full"
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent("Pheruman Rd, Rayya, Punjab 143112")}&output=embed`}
          />
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} The Pet Health Care · Rayya, Punjab
      </footer>
    </div>
  );
}
