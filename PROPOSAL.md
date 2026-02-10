# SLO Spas Website Rebuild - Proposal for Dane

## What We Built

We rebuilt slospas.com from the ground up using modern web technology. The new site is faster, mobile-friendly, and includes an online shop for spa chemicals — a new revenue stream that runs on autopilot.

### Pages Included

| Page | What It Does |
|------|-------------|
| **Home** | Hero image, product categories (hot tubs, saunas, cold plunges), testimonials, calls to action |
| **Catalog** | All product lines with real images and pricing — J-200, J-300, J-400, Swim Spas, Clearlight Saunas, Avantikul Cold Plunges |
| **Projects** | Gallery of 9 installation photos from your current site |
| **Reviews** | All 6 customer reviews with star ratings |
| **Contact** | Contact form, business hours, address, phone, email, Google Maps link |
| **Shop** | 12 spa chemical products with search, category filters, and add-to-cart |
| **Cart** | Full shopping cart with quantity controls, shipping calculation, SLO County tax (8.5%), and order summary |

### Tech Stack

- **Next.js 16** — React framework (same tech used by Nike, TikTok, Twitch)
- **TypeScript** — Catches bugs before they happen
- **Tailwind CSS** — Modern styling, easy to customize
- **Vercel** — Hosting platform (free tier available, auto-deploys when you push code changes)

All your existing content, images, and branding have been preserved from the current site.

---

## The Online Chemical Shop — How It Works

The shop page is built and ready for customers to browse and add products to their cart. To accept real payments and fulfill orders, we need to connect a payment/order backend. You have two great options:

---

## Option A: Square Integration (Recommended)

**Since you already use Square, this is the simplest path.**

### How It Works
1. A customer browses chemicals on your site and adds items to their cart
2. They click "Proceed to Checkout"
3. Square's Web Payments SDK handles the payment securely (credit card, Apple Pay, Google Pay)
4. The order appears in your existing Square Dashboard — same place you manage your in-store sales
5. A webhook (automated notification) triggers your dropship supplier to fulfill the order

### What We Need to Build
- Connect the Square Web Payments SDK to the checkout page
- Set up Square Catalog API to sync products (so you can manage inventory/prices from Square Dashboard)
- Create a serverless function on Vercel that listens for new orders and forwards them to your dropship supplier

### Costs
| Item | Cost |
|------|------|
| Square API | **Free** (no monthly fee) |
| Transaction fees | **2.9% + $0.30** per card payment (same rates you're already paying) |
| Vercel hosting | **Free** tier covers most small business sites |
| **Total monthly** | **$0/mo** + transaction fees you'd pay anyway |

### Pros
- You already know Square — one dashboard for in-store and online
- Unified sales reporting
- No new monthly subscriptions
- Customer data in one place

### Cons
- No built-in dropshipping apps — we build the automation ourselves (one-time setup)
- Slightly more custom development work upfront

---

## Option B: Shopify (Headless)

**Shopify as an invisible backend — your site stays custom, Shopify handles orders.**

### How It Works
1. Customer browses and shops on your site (which looks exactly the same)
2. Checkout redirects to a Shopify-powered checkout page
3. Order appears in Shopify admin panel
4. A dropshipping app (DSers, AutoDS, or Spocket) automatically forwards the order to your chemical supplier

### What We Need to Build
- Connect the Shopify Storefront API to pull products and create checkouts
- Install and configure a dropshipping app
- Set up product listings in Shopify admin

### Costs
| Item | Cost |
|------|------|
| Shopify Basic plan | **$39/mo** |
| Transaction fees | **2.9% + $0.30** per transaction |
| Dropshipping app (AutoDS) | **$26-38/mo** for full automation |
| Vercel hosting | **Free** |
| **Total monthly** | **$65-77/mo** + transaction fees |

### Pros
- Built-in dropshipping apps that auto-forward orders to suppliers
- Huge ecosystem of plugins (email marketing, loyalty programs, etc.)
- Shopify handles checkout, tax calculations, and shipping labels

### Cons
- New monthly cost ($65-77/mo)
- Second admin panel to learn (separate from Square)
- Your in-store (Square) and online (Shopify) sales would be in different systems

---

## Dropshipping — How Orders Get Fulfilled

The whole point of dropshipping is that **you never touch the chemicals**. Here's the flow:

```
Customer orders     -->  Payment processes  -->  Supplier gets notified  -->  Supplier ships direct
on your website          (Square/Shopify)        (automated)                 to customer
```

### Recommended Supplier: Blue Wave Products
- **Confirmed dropshipping program** — their distribution centers are set up for dropship fulfillment
- Nationwide shipping from multiple warehouses
- Pool and spa chemicals, accessories, equipment
- You sign up as a dealer, set your own retail prices, and they handle fulfillment

### Other Potential Suppliers
- **SCP Distributors** — 180,000+ products, part of the world's largest pool supply network
- **POOLCORP** — 440 locations nationwide, 200,000+ products (wholesale, would need to negotiate dropship terms)
- **SpaDepot** — Online since 1997, free shipping on $100+ orders

### Your Involvement Per Order
**With Square (Option A):** You'd get an email notification and may need to one-click forward to the supplier, or we automate it fully with a webhook.

**With Shopify (Option B):** A dropshipping app like AutoDS handles everything automatically — you just monitor the dashboard occasionally.

---

## My Recommendation

**Go with Square (Option A)** because:

1. **You already use it** — no learning curve, no new subscriptions
2. **$0/month** vs $65-77/month for Shopify
3. **One dashboard** for everything — in-store spa sales and online chemical sales
4. The automation we build is a one-time setup that runs forever on Vercel's free tier
5. Over 12 months, you save **$780-924** compared to Shopify

The trade-off is a bit more custom dev work upfront to build the Square integration and dropship automation, but it's a one-time cost vs. ongoing monthly fees.

---

## Deployment Plan

1. **Push to GitHub** (done) — code is version-controlled and backed up
2. **Connect to Vercel** — import the GitHub repo, get a live URL in minutes (free)
3. **Review and refine** — adjust colors, content, pricing as needed
4. **Connect Square** — integrate payments and catalog sync
5. **Set up dropship supplier** — sign up with Blue Wave Products (or your preferred supplier)
6. **Build order automation** — webhook that forwards orders to supplier
7. **Point domain** — move slospas.com to the new Vercel deployment
8. **Go live**

---

## Questions for Dane

- Do you have specific chemical suppliers you already work with?
- Are there any products you'd want to add or remove from the shop?
- Do you want to keep the current slospas.com domain or use a different one?
- Any content changes or branding updates you'd like?
- Do you want to add any features? (appointment booking, financing calculator, live chat, etc.)

---

*Built with Next.js, deployed on Vercel. Ready for your review.*
