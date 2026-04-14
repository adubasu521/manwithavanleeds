export interface Service {
  slug: string;
  name: string;
  description: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
  commonIssues: string[];
  relatedServices: string[];
  image: string;
  seasonalNotes: string;
  vanRecommendation: string;
}

export const services: Service[] = [
  {
    slug: 'man-and-van-leeds',
    name: 'Local Man and Van',
    description: 'Same-day and next-day man and van hire across Leeds and the surrounding area. Ideal for studio flats, single-room moves, quick clearances, and anything that doesn\'t need a full removals team.',
    heroHeading: 'Man and Van Leeds — Same-Day & Next-Day Availability',
    metaTitle: 'Man and Van Leeds | Same-Day Booking Available',
    metaDescription: 'Same-day and next-day man and van hire across Leeds. Fixed-price quotes, fully insured, available 7 days a week. LWB Sprinter and Luton vans.',
    features: [
      'Same-day and next-day booking across Leeds',
      'Fixed-price quotes with no hourly meter surprises',
      'Choice of LWB, Sprinter, or Luton van to match your load',
      'Fully insured — goods-in-transit and public liability',
      'Available 7 days a week including bank holidays',
      'Single items to full studio flat moves covered',
    ],
    process: [
      { step: 'Tell us what you need moved', description: 'Send us a quick message or photo of your items. Include your collection and delivery postcodes so we can give you an accurate fixed price.' },
      { step: 'Get your fixed-price quote', description: 'We\'ll confirm the price, van size, and availability — usually within the hour. No obligation, no hidden fees.' },
      { step: 'We arrive and load up', description: 'Our driver arrives at your door with the right van. We load carefully, securing items with blankets and straps.' },
      { step: 'Delivered and unloaded', description: 'We transport your belongings to the destination and unload them exactly where you need them. Job done.' },
    ],
    faqs: [
      {
        question: 'How quickly can you send a man and van in Leeds?',
        answer: 'Most local Leeds jobs can be booked for the same day or next day, depending on availability. If you contact us before midday, there\'s a strong chance we can get a van to you that afternoon. Weekend and evening slots fill up faster, so booking a day ahead is recommended for those times.',
      },
      {
        question: 'What size van will you send for a man and van job?',
        answer: 'It depends on how much you\'re moving. For a few boxes or a single piece of furniture, we\'ll send a Long Wheelbase (LWB) van. For a studio flat or a larger single-room move, we typically use a Sprinter. We\'ll confirm the right van size when you describe your load — no guesswork.',
      },
      {
        question: 'Do I need to help with loading and unloading?',
        answer: 'Not unless you want to. Our driver handles all the loading and unloading as standard on most bookings. If you prefer to load the van yourself (for example, to keep costs down), we offer a self-loading rate which is cheaper per hour. Just let us know which option you prefer when booking.',
      },
      {
        question: 'Is a man and van cheaper than a full removals service?',
        answer: 'For smaller moves — studio flats, single rooms, or a few items — a man and van is almost always the most cost-effective option. You\'re only paying for the van size and time you actually need. Full removals services make more sense when you have a 2-bed property or larger, where a two-man team and bigger van are necessary.',
      },
      {
        question: 'What areas in Leeds do you cover for man and van jobs?',
        answer: 'We cover all of Leeds including the city centre, Headingley, Hyde Park, Chapel Allerton, Horsforth, Morley, Armley, Garforth, and every postcode from LS1 to LS28. We also cover surrounding towns like Bradford, Wakefield, Harrogate, and York. Long-distance jobs to anywhere in the UK are available too.',
      },
    ],
    priceRange: 'From £120 (fixed-price) · From £25/h (hourly)',
    commonIssues: [
      'Underestimating the number of items and needing a larger van',
      'Narrow doorways or stairwells in older Leeds terraces',
      'Parking restrictions in city centre and permit zones',
      'Items not packed or disassembled before the driver arrives',
    ],
    relatedServices: ['house-removals-leeds', 'furniture-delivery-leeds', 'clearance-collections-leeds'],
    image: '/images/services/man-and-van.webp',
    seasonalNotes: 'Busiest periods are end of June through early July (student moves out) and September (student moves in). Book at least 48 hours ahead during these peaks. Winter months tend to be quieter with more same-day availability.',
    vanRecommendation: 'For most man and van jobs, our LWB van handles everything comfortably. If you\'re moving a full studio flat or have bulky furniture, we\'ll recommend the Sprinter for extra space.',
  },
  {
    slug: 'house-removals-leeds',
    name: 'House Removals',
    description: 'Full house removal service for 1, 2, 3, and 4+ bedroom properties across Leeds and West Yorkshire. We handle the loading, transport, and unloading — carefully and efficiently.',
    heroHeading: 'House Removals Leeds — Fixed-Price & Fully Insured',
    metaTitle: 'House Removals Leeds | Fixed-Price Quotes',
    metaDescription: 'Professional house removals in Leeds. Fixed-price quotes, fully insured, available 7 days a week. 1-bed flats to 4-bed houses.',
    features: [
      'Fixed-price quotes for 1-bed flats through to 4+ bed houses',
      'Two-man teams available for larger properties',
      'Furniture wrapped in protective blankets and secured with straps',
      'Fully insured — goods-in-transit and public liability on every move',
      'Available 7 days a week with flexible morning or afternoon starts',
      'Van size matched to your property — no paying for space you don\'t need',
    ],
    process: [
      { step: 'Request a quote', description: 'Tell us about your property — number of bedrooms, any large items, access issues, and your moving date. We\'ll send a fixed-price quote, usually within the hour.' },
      { step: 'Confirm your booking', description: 'Once you\'re happy with the quote, confirm your moving date. We\'ll send a booking confirmation with arrival time, van details, and everything you need to know.' },
      { step: 'Moving day', description: 'Our team arrives on time, wraps furniture in protective blankets, and loads the van carefully. We work efficiently but never rush — your belongings are treated with care.' },
      { step: 'Delivery and setup', description: 'We transport everything to your new home, unload room by room, and place furniture where you want it. We\'ll even take away packing materials if you\'ve used our packing service.' },
    ],
    faqs: [
      {
        question: 'How much does a house removal cost in Leeds?',
        answer: 'A 1-bed flat removal in Leeds typically starts from around £150, a 2-bed from £250, and a 3-bed house from £350. The exact price depends on the volume of items, distance between properties, access (stairs, lifts, parking), and whether you need a packing service. We provide a fixed-price quote before the move so there are no surprises.',
      },
      {
        question: 'How long does a house removal take?',
        answer: 'A 1-bed flat move usually takes 2-3 hours including loading, transit, and unloading. A 3-bed house typically takes 4-6 hours with a two-man team. These times can vary depending on access at both ends, the number of floors, and how much furniture needs wrapping. We\'ll give you a time estimate alongside your quote.',
      },
      {
        question: 'Do you disassemble and reassemble furniture?',
        answer: 'We can disassemble beds, wardrobes, and tables at your current property and reassemble them at your new home. This is included as standard on full house removals. If you have particularly complex items like fitted wardrobes or bespoke furniture, let us know in advance so we can plan appropriately.',
      },
      {
        question: 'What happens if something gets damaged during the move?',
        answer: 'All our moves are covered by goods-in-transit insurance and public liability insurance. If any item is damaged during loading, transport, or unloading, we\'ll work with you to resolve it through our insurance. We also take preventive measures — protective blankets, straps, and careful handling — to minimise the risk of damage in the first place.',
      },
      {
        question: 'Can you move a house over the weekend or in the evening?',
        answer: 'Yes, we operate 7 days a week including weekends and bank holidays. Evening moves are also available, which is useful if you need to work around exchange completion times or want to avoid taking a day off work. Weekend slots are popular so we recommend booking at least a week ahead.',
      },
    ],
    priceRange: '1-bed from £150 · 3-bed from £350 · Luton + two-man from £60/h',
    commonIssues: [
      'Completion date changes at short notice requiring rebooking',
      'No parking available outside the property on moving day',
      'Items in loft, garage, or shed forgotten during the initial quote',
      'Narrow Victorian terraces with tight stairwells and doorways',
      'Heavy items on upper floors with no lift access',
    ],
    relatedServices: ['packing-service-leeds', 'storage-leeds', 'long-distance-removals-leeds'],
    image: '/images/services/house-removals.webp',
    seasonalNotes: 'Peak season for house removals in Leeds runs from May through September. Friday is the busiest day as most property completions happen then. January and February are quieter with more flexibility on dates. End-of-month dates fill up fastest.',
    vanRecommendation: 'For 1-2 bed flats, our Sprinter van handles the move in one trip. For 3+ bed houses, we use the Luton van with a two-man team — the tail lift makes loading heavy items much easier.',
  },
  {
    slug: 'long-distance-removals-leeds',
    name: 'Long-Distance Removals',
    description: 'Expert removal services for long-distance relocations from Leeds to anywhere in the UK. Popular routes include Leeds to London, Manchester, Edinburgh, Bristol, and Birmingham. Fixed-price quotes, dedicated van, no groupage.',
    heroHeading: 'Long-Distance Removals from Leeds',
    metaTitle: 'Long-Distance Removals from Leeds | Fixed Prices',
    metaDescription: 'Long-distance removal service from Leeds to anywhere in the UK. Popular routes: Leeds to London, Manchester, Edinburgh, Bristol. Fixed-price quotes.',
    features: [
      'Dedicated van — your belongings travel alone, no shared loads',
      'Fixed-price quotes covering loading, transport, and unloading',
      'Popular routes: London, Manchester, Edinburgh, Birmingham, Bristol',
      'Fully insured for the entire journey — goods-in-transit cover included',
      'Available 7 days a week with flexible departure times',
      'Door-to-door service from your Leeds address to anywhere in the UK',
    ],
    process: [
      { step: 'Tell us where you\'re going', description: 'Share your current Leeds address and destination, along with a rough idea of what you\'re moving. We\'ll recommend the right van size and give you a fixed price.' },
      { step: 'Confirm and book', description: 'Lock in your date and van. We\'ll send a confirmed itinerary with collection time, estimated arrival time, and driver contact details.' },
      { step: 'Loading day', description: 'Our team arrives in Leeds, loads your belongings carefully, and hits the road. You can travel separately or ride along — your choice.' },
      { step: 'Delivery at destination', description: 'We arrive at your new address and unload everything room by room. The price you were quoted is the price you pay — no mileage supplements or fuel surcharges.' },
    ],
    faqs: [
      {
        question: 'How much does a long-distance move from Leeds cost?',
        answer: 'Pricing depends on the distance and how much you\'re moving. A Leeds to Manchester move with a Sprinter van typically starts from £200. Leeds to London ranges from £350 to £900 depending on whether you need an LWB, Sprinter, or Luton van. We quote fixed prices — the amount we confirm is what you pay, with no fuel or mileage extras.',
      },
      {
        question: 'Will my belongings be on a shared van with other people\'s items?',
        answer: 'No. Every long-distance booking gets a dedicated van. Your items are the only ones on board for the entire journey. This means no delays waiting for other collections, no risk of items being mixed up, and your goods arrive together in one delivery. This is what we mean by "no groupage."',
      },
      {
        question: 'Can you do a long-distance move at the weekend?',
        answer: 'Yes, we operate 7 days a week for long-distance moves. Weekend slots are popular, especially for routes like Leeds to London, so booking 5-7 days ahead is recommended. We can also accommodate early morning departures or evening collections to work around your schedule.',
      },
      {
        question: 'How long does a long-distance removal from Leeds take?',
        answer: 'The driving time depends on the route — Leeds to London is around 4 hours, Leeds to Edinburgh about 3.5 hours, Leeds to Manchester about 1.5 hours. Add 1-3 hours each end for loading and unloading depending on the property size. We\'ll give you estimated arrival times when you book.',
      },
      {
        question: 'What if I need storage at the other end before I can move in?',
        answer: 'We can arrange short-term storage at either end of the move if your dates don\'t align. We work with trusted storage partners in Leeds and can recommend facilities near your destination too. Storage starts from £20/day — just mention it when requesting your quote.',
      },
    ],
    priceRange: '£200–£900 depending on distance and van size',
    commonIssues: [
      'Completion dates changing after the van is booked',
      'Underestimating load size and needing a bigger van for the journey',
      'Parking restrictions or narrow access at the destination property',
      'Traffic delays on the M1 or M62 adding transit time',
    ],
    relatedServices: ['house-removals-leeds', 'packing-service-leeds', 'storage-leeds'],
    image: '/images/services/long-distance-removals.webp',
    seasonalNotes: 'Long-distance moves peak in summer (June-September) and around Christmas/New Year. The Leeds to London route is consistently busy year-round. Mid-week moves are easier to schedule and sometimes available at short notice even during peak periods.',
    vanRecommendation: 'For long-distance moves, we recommend the Sprinter or Luton van depending on volume. The Sprinter handles up to a 2-bed flat comfortably. For a full house move, the Luton with tail lift is the better choice.',
  },
  {
    slug: 'student-moves-leeds',
    name: 'Student Moves',
    description: 'Affordable, straightforward student moves in and out of Leeds. Covering all the major student areas — Headingley, Hyde Park, Woodhouse, Burley, Kirkstall, and city-centre student blocks.',
    heroHeading: 'Student Moves Leeds — Affordable Fixed-Price Service',
    metaTitle: 'Student Removals Leeds | Affordable & Fixed Price',
    metaDescription: 'Affordable student move service in Leeds. Covering Headingley, Hyde Park, Woodhouse and all student areas. Fixed price, no hourly surprises.',
    features: [
      'Fixed prices from £80 — no hourly meter or surprise charges',
      'Covering Headingley, Hyde Park, Woodhouse, Burley, Kirkstall, and LS2/LS6 student blocks',
      'Available 7 days a week throughout the academic year',
      'End-of-year moves, new-term moves, and mid-year changes covered',
      'Boxes, bags, bikes, and bulky furniture all welcome',
      'Same-day booking often available — ideal for last-minute moves',
    ],
    process: [
      { step: 'Tell us what you\'re moving', description: 'Send a quick list or photo of your stuff — bedroom furniture, boxes, bikes, whatever you\'ve got. Include your current address and where you\'re moving to.' },
      { step: 'Fixed-price quote', description: 'We\'ll come back with a fixed price based on the volume and distance. No hourly rates, so you know exactly what you\'ll pay before we arrive.' },
      { step: 'We collect from your room', description: 'Our driver comes to your student house or halls, loads everything up, and takes care of stairs, narrow hallways, and all the usual student housing challenges.' },
      { step: 'Delivered to your new place', description: 'We unload at your new student house, halls, or your parents\' home if you\'re heading back for the summer. Everything placed where you need it.' },
    ],
    faqs: [
      {
        question: 'When is the busiest time for student moves in Leeds?',
        answer: 'The two biggest peaks are late June to early July (when students move out at the end of the academic year) and September (when students move into new houses or halls for the autumn term). During these periods, we recommend booking at least 3-5 days ahead. Outside of these peaks, same-day or next-day bookings are usually available.',
      },
      {
        question: 'Can you move me from one student house to another in Headingley?',
        answer: 'Yes, local moves within Headingley, Hyde Park, or between nearby student areas are one of our most common jobs. Even if you\'re only moving a few streets, it\'s much quicker and easier than multiple car trips — especially with furniture. We know the area well, including the one-way streets and best places to park.',
      },
      {
        question: 'I\'m moving back to my parents\' house for the summer — can you help?',
        answer: 'Absolutely. We handle a lot of end-of-year student moves from Leeds to family homes across the UK. Whether that\'s a short trip to Bradford or Wakefield, or a long-distance run to London or Edinburgh, we can give you a fixed-price quote. We\'ll collect from your student house and deliver directly to your parents\' door.',
      },
      {
        question: 'Do I need to have everything packed and ready?',
        answer: 'It helps if your belongings are in bags or boxes when we arrive, but we understand that student moves can be last-minute. Our driver can help with loading loose items and will wrap any furniture in blankets. If you need actual packing materials and a packing service, we can arrange that as an add-on.',
      },
      {
        question: 'How much does a student move in Leeds cost?',
        answer: 'A typical student move within Leeds (for example, Hyde Park to Headingley) starts from around £80-120 for a single room\'s worth of belongings. Larger loads or moves to other cities cost more depending on distance and volume. We\'ll always confirm a fixed price before the move so you know exactly what to budget.',
      },
    ],
    priceRange: 'From £80 (local Leeds) · Long-distance from £200',
    commonIssues: [
      'Multiple students sharing a van on the same moving day causing scheduling conflicts',
      'No parking on narrow streets in Headingley and Hyde Park',
      'Items left in shared areas that aren\'t clearly labelled',
      'Tight stairwells and narrow hallways in Victorian student terraces',
    ],
    relatedServices: ['man-and-van-leeds', 'long-distance-removals-leeds', 'packing-service-leeds'],
    image: '/images/services/student-moves.webp',
    seasonalNotes: 'Peak student move season in Leeds: late June to early July (move-out) and September (move-in). During these weeks, we run multiple student moves per day across LS6, LS4, and LS2. Book early to secure your preferred time slot. January sees a smaller peak from mid-year lease changes.',
    vanRecommendation: 'An LWB van handles most single-room student moves. If you\'re sharing with housemates and combining loads, we may recommend the Sprinter for the extra capacity.',
  },
  {
    slug: 'ikea-delivery-leeds',
    name: 'IKEA Delivery & Assembly',
    description: 'Bought something from IKEA and need it delivered and put together? We collect from IKEA Leeds (Holbeck) or any IKEA store and deliver to your door — including carrying items upstairs and into rooms.',
    heroHeading: 'IKEA Delivery & Assembly Leeds',
    metaTitle: 'IKEA Delivery Leeds | Same-Day Available',
    metaDescription: 'IKEA delivery and assembly in Leeds. We collect from IKEA Leeds (Holbeck) and deliver to your door. No minimum order. Fixed-price quotes.',
    features: [
      'Collection from IKEA Leeds (Holbeck) or any IKEA store',
      'Delivery straight to your door — we carry items inside and upstairs',
      'Assembly service available on request',
      'No minimum order size — single items welcome',
      'Fixed-price quotes with same-day availability',
      'Ideal for items that don\'t fit in your car — sofas, wardrobes, beds',
    ],
    process: [
      { step: 'Tell us what you\'ve bought', description: 'Let us know what items you need collecting from IKEA and your delivery address. A list of item names or IKEA order numbers makes quoting quick.' },
      { step: 'We quote and schedule', description: 'We\'ll confirm a fixed price based on the number and size of items. If you want assembly, we\'ll factor that in too. Same-day collection is often available.' },
      { step: 'Collection from IKEA', description: 'We go to IKEA Leeds in Holbeck (or whichever store you\'ve ordered from), collect your items using your order details, and load them safely into the van.' },
      { step: 'Delivered and optionally assembled', description: 'We deliver to your home, carry items to the room you want them in, and if you\'ve booked assembly, we build your furniture on the spot.' },
    ],
    faqs: [
      {
        question: 'Can you collect from IKEA Leeds on the same day?',
        answer: 'In most cases, yes. If you contact us in the morning, we can usually collect from IKEA Leeds in Holbeck and deliver to you that same afternoon or evening. Availability depends on our schedule for the day, so the earlier you get in touch, the better your chances of a same-day slot.',
      },
      {
        question: 'How much does IKEA delivery in Leeds cost?',
        answer: 'Delivery from IKEA Leeds to a Leeds address typically starts from £30-50 for a small load (a few flat-pack boxes). Larger orders like a full bedroom set or a sofa might be £60-100 depending on the number of items and your postcode. Assembly is quoted separately based on the items. We always confirm a fixed price before we go.',
      },
      {
        question: 'Can you deliver from IKEA stores other than Leeds?',
        answer: 'Yes. While IKEA Leeds in Holbeck is our most common collection point, we can also collect from IKEA Sheffield, IKEA Manchester (Ashton-under-Lyne), or any other IKEA store in the region. The price adjusts based on the extra distance. Some customers order for click-and-collect at a specific store and we handle the pickup.',
      },
      {
        question: 'Do you assemble IKEA furniture as well as deliver it?',
        answer: 'Yes, we offer assembly as an add-on to any IKEA delivery. We build desks, wardrobes, bed frames, shelving units, and most other IKEA items. Assembly is charged per item and quoted upfront. The most common assembly requests are PAX wardrobes, MALM bed frames, and KALLAX shelving.',
      },
      {
        question: 'What if my IKEA order is too big for one van?',
        answer: 'Our Sprinter van fits most IKEA orders comfortably — even large items like the VIMLE sofa or full PAX wardrobe systems. For exceptionally large orders (furnishing an entire flat, for example), we\'ll let you know if we need to make two trips or send the Luton van instead. We\'ll confirm this at the quoting stage.',
      },
    ],
    priceRange: 'From £30 delivery · Assembly from £20 per item',
    commonIssues: [
      'Items out of stock at IKEA when the driver arrives',
      'Flat-pack boxes too large to fit through narrow stairwells',
      'Missing screws or parts discovered during assembly',
      'Delivery address with no parking nearby for the van',
    ],
    relatedServices: ['furniture-delivery-leeds', 'man-and-van-leeds'],
    image: '/images/services/ikea-delivery.webp',
    seasonalNotes: 'IKEA deliveries peak in September when students furnish new houses and flats, and in January during IKEA sales. Saturday collections from IKEA Leeds can be slower due to store traffic — weekday collections are faster.',
    vanRecommendation: 'For most IKEA orders (1-5 flat-pack boxes), our LWB van is perfect. If you\'re furnishing a whole room or buying a sofa, we\'ll send the Sprinter for the extra width and height.',
  },
  {
    slug: 'furniture-delivery-leeds',
    name: 'Furniture & Single Item Delivery',
    description: 'Bought a sofa, wardrobe, or piece of furniture from a local seller, Facebook Marketplace, or a shop? We collect and deliver single items anywhere in Leeds and the surrounding area.',
    heroHeading: 'Single Item & Furniture Delivery Leeds',
    metaTitle: 'Furniture & Single Item Delivery Leeds | Fixed Price',
    metaDescription: 'Need a sofa or wardrobe delivered in Leeds? We collect and deliver single items anywhere in Leeds and West Yorkshire. Fixed price, same-day available.',
    features: [
      'Single items from sofas and wardrobes to washing machines',
      'Collection from private sellers, shops, Facebook Marketplace, and eBay pickups',
      'Fixed-price quotes — no hourly rates or minimum charges',
      'Same-day and next-day availability across Leeds',
      'Items carried upstairs and placed in the room of your choice',
      'Protective blankets used for all furniture — no scratches or dents',
    ],
    process: [
      { step: 'Tell us what needs delivering', description: 'Describe the item (or send a photo), the collection address, and the delivery address. If it\'s a Marketplace or eBay purchase, just share the listing link.' },
      { step: 'Get a fixed price', description: 'We\'ll confirm the price based on the item size and distance. Single items within Leeds start from as little as £30. No surprises, no extras.' },
      { step: 'We collect the item', description: 'Our driver goes to the collection point — whether that\'s a private home, a shop, or a warehouse — and loads the item carefully with protective wrapping.' },
      { step: 'Delivered to your door', description: 'We bring the item to your home and place it in the room you want. If it\'s a sofa or large wardrobe, we handle stairs and tight hallways.' },
    ],
    faqs: [
      {
        question: 'Can you collect from a private seller for me?',
        answer: 'Yes, this is one of our most popular services. If you\'ve bought something on Facebook Marketplace, Gumtree, or eBay, we can collect it from the seller\'s address and deliver it to you. Just share the pickup address and we\'ll include it in your quote. We can even inspect the item on collection if you want.',
      },
      {
        question: 'How much does it cost to deliver a single item in Leeds?',
        answer: 'Delivery of a single item within Leeds typically costs £30-60, depending on the item size and distance. A sofa from one side of Leeds to the other is usually around £40-50. Items requiring two people to carry (like a heavy wardrobe or piano) may cost a bit more. We always quote a fixed price before collecting.',
      },
      {
        question: 'Can you deliver a washing machine or fridge?',
        answer: 'Yes, we regularly deliver white goods including washing machines, fridges, dishwashers, and tumble dryers. We can carry them into your kitchen and position them, but we don\'t handle plumbing or electrical connections. If you need the old appliance removed at the same time, we can do that too for a small extra charge.',
      },
      {
        question: 'What if the item doesn\'t fit through the door or up the stairs?',
        answer: 'Before we commit, we\'ll ask about access at the delivery address. If a sofa or wardrobe is too large for the stairwell, we\'ll discuss options — some items can be partially disassembled, or in some cases brought in through a window. We\'ll flag any potential issues at the quoting stage so there are no surprises.',
      },
      {
        question: 'Do you deliver for businesses and shops as well?',
        answer: 'Yes, we handle furniture deliveries for independent shops, antique dealers, and online sellers across Leeds. If you run a business that needs regular delivery support, we can discuss ongoing arrangements. We also handle customer deliveries on behalf of shops — your customer sees our van, not a branded courier.',
      },
    ],
    priceRange: 'Single items from £30 · Larger pieces from £50',
    commonIssues: [
      'Item dimensions don\'t match the listing — too big for doorways or stairs',
      'Seller not available at the agreed collection time',
      'Heavy items on upper floors with no lift',
      'Fragile items (glass tables, mirrors) requiring extra care',
    ],
    relatedServices: ['man-and-van-leeds', 'ikea-delivery-leeds', 'fragile-items-removals-leeds'],
    image: '/images/services/furniture-delivery.webp',
    seasonalNotes: 'Furniture delivery demand spikes in September (students furnishing houses), January (post-Christmas upgrades), and during bank holiday weekends when people shop online sales. Same-day availability is generally good year-round.',
    vanRecommendation: 'Most single furniture items fit comfortably in our LWB van. For sofas, large wardrobes, or multiple items, we\'ll send the Sprinter. Blankets and straps are always included.',
  },
  {
    slug: 'office-removals-leeds',
    name: 'Office Removals',
    description: 'Professional office moves for small businesses, startups, and commercial tenants across Leeds city centre and West Yorkshire. We work around your schedule — evenings and weekends available.',
    heroHeading: 'Office Removals Leeds — Evenings & Weekends Available',
    metaTitle: 'Office Removals Leeds | Flexible Scheduling',
    metaDescription: 'Professional office removals in Leeds. Evenings and weekends available to minimise downtime. Fixed-price quotes for small businesses and commercial tenants.',
    features: [
      'Evening and weekend moves to minimise business downtime',
      'Desks, monitors, chairs, filing cabinets, and IT equipment handled',
      'Fixed-price quotes for predictable budgeting',
      'Small offices to full commercial floor moves',
      'Careful handling of IT equipment and sensitive documents',
      'Available 7 days a week across Leeds city centre and West Yorkshire',
    ],
    process: [
      { step: 'Office assessment', description: 'Tell us about your office — number of desks, IT equipment, filing cabinets, and any specialist items. Include your current and new addresses and preferred moving window.' },
      { step: 'Fixed-price quote', description: 'We\'ll confirm a fixed price and timeline. For larger offices, we may visit in person to give an accurate quote. We\'ll also confirm whether we need building management access at either end.' },
      { step: 'Managed move', description: 'Our team arrives at your preferred time — whether that\'s a Friday evening, Saturday morning, or during office hours. Desks are wrapped, IT equipment is carefully boxed, and everything is labelled by area.' },
      { step: 'Set up at the new office', description: 'We unload and place furniture in the correct rooms at your new office. Desks and chairs go where you need them. You\'re up and running with minimal disruption.' },
    ],
    faqs: [
      {
        question: 'Can you move our office outside of business hours?',
        answer: 'Yes, evening and weekend moves are available and very popular with our commercial clients. Many businesses choose a Friday evening or Saturday move so that staff arrive at the new office on Monday morning with minimal disruption. We\'re flexible on start times — we can begin at 6pm, 7pm, or whenever suits your business.',
      },
      {
        question: 'Do you handle IT equipment like monitors and servers?',
        answer: 'We transport monitors, desktop computers, printers, and standard office IT equipment. Each item is wrapped individually and transported securely. For servers, network racks, or specialised equipment, we recommend having your IT team disconnect and reconnect — we handle the physical transport in between.',
      },
      {
        question: 'How much does an office move in Leeds cost?',
        answer: 'A small office (2-5 desks) within Leeds city centre typically costs £200-400. Larger offices with 10+ desks, server rooms, and extensive filing can range from £500-1500. The price depends on the volume of items, access at both buildings, and whether you need out-of-hours service. We quote fixed prices for predictable budgeting.',
      },
      {
        question: 'Can you coordinate access with building management?',
        answer: 'Yes. We regularly work with building management teams, especially for office moves in Leeds city centre where goods lifts, loading bays, and timed access slots are common. We\'ll liaise with building management at both ends to ensure smooth access on moving day. Just provide us with the relevant contact details.',
      },
      {
        question: 'What about confidential documents and files?',
        answer: 'We treat all office contents with discretion. Filing cabinets can be transported locked, and we use sealed crates for loose documents. Our team is CRB-checked and we carry public liability insurance. For particularly sensitive moves, we can discuss additional confidentiality measures.',
      },
    ],
    priceRange: 'Small office from £200 · Larger offices from £500',
    commonIssues: [
      'Building management restricting lift access or loading bay times',
      'IT equipment not disconnected before the movers arrive',
      'Lease overlap issues requiring temporary storage between offices',
      'Parking restrictions and permit requirements at city centre buildings',
    ],
    relatedServices: ['man-and-van-leeds', 'packing-service-leeds', 'storage-leeds'],
    image: '/images/services/office-removals.webp',
    seasonalNotes: 'Office moves are steady year-round but peak around quarter-end dates (March, June, September, December) when commercial leases often begin or end. January also sees a spike as businesses start fresh in new premises after the new year.',
    vanRecommendation: 'Small offices (2-5 desks) fit in a Sprinter van. Larger offices with 10+ workstations typically need the Luton van, and possibly two trips for very large moves.',
  },
  {
    slug: 'packing-service-leeds',
    name: 'Packing Service',
    description: 'Don\'t want to pack yourself? Our team brings packing materials (boxes, bubble wrap, tape) and carefully packs your belongings before the move.',
    heroHeading: 'Professional Packing Service Leeds',
    metaTitle: 'Packing Service Leeds | Full or Partial Packing',
    metaDescription: 'Professional packing service in Leeds. We bring all materials and pack your belongings carefully before moving day. Add-on or standalone booking.',
    features: [
      'All packing materials included — boxes, bubble wrap, tape, tissue paper',
      'Full house packing or partial packing (kitchen only, fragile items only)',
      'Available as an add-on to any removal booking or standalone',
      'Usually done the day before or morning of your move',
      'Fragile items individually wrapped with extra protection',
      'Boxes labelled by room for easy unpacking at the other end',
    ],
    process: [
      { step: 'Tell us what needs packing', description: 'Let us know if you want a full house pack or specific rooms only. Mention any particularly fragile or valuable items that need special attention.' },
      { step: 'We quote and schedule', description: 'We\'ll confirm a fixed price for the packing based on the volume and complexity. Packing is usually scheduled for the day before or morning of your move.' },
      { step: 'Packing day', description: 'Our team arrives with all the materials — boxes, bubble wrap, tape, tissue paper. We pack room by room, wrapping fragile items individually and labelling every box clearly.' },
      { step: 'Ready to move', description: 'Once everything is packed and labelled, we\'re ready to load the van. If you\'re moving the next day, your home is boxed up and ready to go first thing in the morning.' },
    ],
    faqs: [
      {
        question: 'How much does a packing service cost in Leeds?',
        answer: 'A full packing service for a 2-bed property typically costs £150-250, including all materials. A 3-bed house ranges from £250-400. Kitchen-only or fragile-items-only packing starts from £80. The price depends on the volume of items, number of rooms, and how much specialist wrapping is needed. We always quote a fixed price.',
      },
      {
        question: 'Do I need to do anything before the packing team arrives?',
        answer: 'Not really — the whole point is that we handle it. However, it helps if you\'ve separated any items you\'re not taking with you (rubbish, donations, items for storage). Also, if there are any items of particular value or fragility, point those out so we can give them extra attention. We\'ll bring all the boxes and materials we need.',
      },
      {
        question: 'Can I have just the kitchen packed?',
        answer: 'Yes, partial packing is very popular. The kitchen is usually the most time-consuming room to pack yourself (crockery, glassware, small appliances), so many customers have us handle just that while they pack the rest. We can also do fragile-items-only packing, covering artwork, mirrors, ornaments, and glassware throughout the house.',
      },
      {
        question: 'What happens to the packing materials afterwards?',
        answer: 'We can collect and remove used boxes and packing materials after you\'ve unpacked at your new home. Just let us know when you\'re done unpacking and we\'ll arrange a collection. Alternatively, you\'re welcome to keep or recycle the boxes yourself. Many customers pass them on to friends or neighbours who are moving.',
      },
      {
        question: 'Is the packing service available on its own, without a removal?',
        answer: 'Yes, you can book packing as a standalone service even if another company is handling your move, or if you\'re moving yourself. We bring the materials, pack everything up, and label the boxes. This is useful if you want professional packing quality but have already arranged transport separately.',
      },
    ],
    priceRange: 'Kitchen from £80 · Full 2-bed from £150 · Full 3-bed from £250',
    commonIssues: [
      'Discovering more items than expected during packing, requiring extra boxes',
      'Fragile items not identified in advance — artwork, antiques, glassware',
      'Homeowners wanting to keep packing and sorting at the same time (slows the process)',
      'Not enough time scheduled for packing large houses with full lofts',
    ],
    relatedServices: ['house-removals-leeds', 'fragile-items-removals-leeds', 'long-distance-removals-leeds'],
    image: '/images/services/packing-service.webp',
    seasonalNotes: 'Packing services are busiest during the house moving peak season (May-September) and around end-of-month dates when completions cluster. Booking 3-5 days ahead is recommended during these periods.',
    vanRecommendation: 'Packing is usually booked alongside a removal, so the van recommendation depends on the move itself. If you\'re booking packing as a standalone service, no van is needed — we arrive with materials only.',
  },
  {
    slug: 'piano-moving-leeds',
    name: 'Piano Moving',
    description: 'Specialist piano moving in Leeds and West Yorkshire. Upright and grand pianos handled with proper equipment and technique. We assess access, stairs, and doorways before the job.',
    heroHeading: 'Piano Moving Leeds — Specialist Handling',
    metaTitle: 'Piano Moving Leeds | Upright & Grand Pianos',
    metaDescription: 'Specialist piano moving in Leeds and West Yorkshire. Upright and grand pianos handled with proper equipment. Fixed-price quotes.',
    features: [
      'Upright and grand pianos moved with specialist equipment',
      'Pre-move assessment of access, stairs, and doorways',
      'Protective wrapping and padding throughout',
      'Two-man team as standard for all piano moves',
      'Ground floor, upstairs, and basement pianos handled',
      'Fixed-price quotes with no hidden surcharges',
    ],
    process: [
      { step: 'Describe your piano and access', description: 'Tell us the type of piano (upright, baby grand, grand), which floor it\'s on, and any access challenges — narrow hallways, tight turns, steps. Photos of the piano and doorways are very helpful.' },
      { step: 'Access assessment and quote', description: 'Based on your details (and sometimes a visit or video call), we\'ll confirm the approach, team size, and a fixed price. We\'ll flag any access concerns upfront.' },
      { step: 'Careful collection', description: 'Our two-man team arrives with piano skids, straps, protective blankets, and ramps. The piano is wrapped completely and manoeuvred carefully through doorways and down stairs.' },
      { step: 'Safe delivery', description: 'We transport the piano in a secure, padded position within the van and deliver it to the exact spot in your new home. Legs and pedals are reattached if they were removed for transit.' },
    ],
    faqs: [
      {
        question: 'How much does it cost to move a piano in Leeds?',
        answer: 'An upright piano move within Leeds (ground floor to ground floor, straightforward access) typically costs £120-200. Grand pianos cost more — usually £250-500 — due to the extra weight, size, and preparation involved. Stairs, tight doorways, and long-distance transport all affect the price. We always confirm a fixed price after assessing the access.',
      },
      {
        question: 'Can you move a piano upstairs or downstairs?',
        answer: 'Yes, we regularly move pianos between floors. Upright pianos on stairs require a two-man team and specialist technique. Grand pianos on stairs are more complex and may require the legs to be removed. We assess the staircase width, any turns, and the ceiling height before confirming the approach.',
      },
      {
        question: 'Will you need to take the piano apart?',
        answer: 'Upright pianos are almost always moved whole — legs stay on, and the piano is tilted and rolled on specialist skids. Grand pianos often need the legs and pedals removed for safe transport, especially if there are stairs or tight doorways. We handle the disassembly and reassembly at the other end.',
      },
      {
        question: 'Is the piano insured during the move?',
        answer: 'Yes, all piano moves are covered by our goods-in-transit insurance. We also use specialist equipment — padded blankets, ratchet straps, and skids — to protect the instrument at every stage. If your piano is particularly valuable (concert grand, antique, or sentimental), let us know so we can confirm appropriate coverage.',
      },
      {
        question: 'How far in advance should I book a piano move?',
        answer: 'We recommend booking piano moves at least a week in advance, as they require a two-man team and sometimes special access arrangements. For straightforward ground-floor piano moves, we can sometimes accommodate shorter notice. Grand piano moves and moves involving stairs always benefit from advance planning.',
      },
    ],
    priceRange: 'Upright from £120 · Grand from £250',
    commonIssues: [
      'Doorways or stairwells too narrow for the piano without removing the door frame',
      'The weight of a grand piano exceeding what a standard floor can safely support',
      'Access to upper-floor flats with no lift and tight Victorian staircases',
      'Homeowners not realising how heavy pianos are (upright: 150-300kg, grand: 300-600kg)',
    ],
    relatedServices: ['fragile-items-removals-leeds', 'house-removals-leeds', 'man-and-van-leeds'],
    image: '/images/services/piano-moving.webp',
    seasonalNotes: 'Piano moves are steady year-round with no strong seasonal pattern. However, house move peaks (May-September, end-of-month Fridays) often include piano moves as part of a larger removal. Dedicated piano-only moves can usually be booked with shorter notice.',
    vanRecommendation: 'Piano moves use our Luton van with tail lift. The tail lift is essential for safely loading upright and grand pianos without risking damage from ramps.',
  },
  {
    slug: 'fragile-items-removals-leeds',
    name: 'Fragile & Antique Removals',
    description: 'Safe transport of valuable, fragile, or irreplaceable items. Antiques, artwork, mirrors, sculptures, and other specialist pieces are wrapped and secured individually.',
    heroHeading: 'Fragile & Antique Item Removals Leeds',
    metaTitle: 'Antique & Fragile Item Removals Leeds | Specialist Care',
    metaDescription: 'Safe transport of antiques, artwork, mirrors and fragile items in Leeds. Individually wrapped and secured. Declare items when quoting for appropriate cover.',
    features: [
      'Individual wrapping with bubble wrap, tissue, and protective blankets',
      'Antiques, artwork, mirrors, glass, sculptures, and ceramics handled',
      'CRB-checked drivers with experience handling high-value items',
      'Custom packing solutions for unusual shapes and sizes',
      'Goods-in-transit insurance covering declared value',
      'Climate-controlled environment maintained where possible',
    ],
    process: [
      { step: 'Describe your items', description: 'Tell us what needs moving — materials, dimensions, approximate value, and any known vulnerabilities. Photos are very helpful for fragile or unusual items.' },
      { step: 'Custom quote and plan', description: 'We\'ll confirm the packing approach, materials needed, and a fixed price. For high-value items, we\'ll discuss insurance coverage to make sure you\'re appropriately covered.' },
      { step: 'Specialist packing', description: 'Each item is wrapped individually with appropriate materials — bubble wrap for glass, acid-free tissue for artwork, custom padding for sculptures. Nothing touches anything else in the van.' },
      { step: 'Careful transport and delivery', description: 'Items are secured in the van with straps and padding. We drive carefully and deliver to your specified location, unwrapping and placing items exactly where you want them.' },
    ],
    faqs: [
      {
        question: 'What types of fragile items do you transport?',
        answer: 'We handle a wide range — antique furniture, framed artwork and paintings, mirrors, glass tabletops, chandeliers, ceramics, sculptures, wine collections, and musical instruments. Essentially, if it\'s valuable, fragile, or irreplaceable, we have the equipment and experience to move it safely. Please describe your items when requesting a quote.',
      },
      {
        question: 'How do you protect fragile items during transport?',
        answer: 'Each item gets individual treatment. Glass and mirrors are wrapped in bubble wrap and corner protectors. Artwork gets acid-free tissue and flat-pack art boxes or blanket wrapping. Antique furniture is wrapped in moving blankets with no tape touching the surface. Everything is strapped securely in the van so nothing shifts during transit.',
      },
      {
        question: 'What insurance coverage do you provide for valuable items?',
        answer: 'Our standard goods-in-transit insurance covers items up to a declared value. For particularly high-value pieces (fine art, antiques worth £1,000+), we recommend declaring the value at the time of booking so we can confirm appropriate coverage. If your items require specialist insurance beyond our standard cover, we\'ll advise you accordingly.',
      },
      {
        question: 'Can you move items from a gallery or auction house?',
        answer: 'Yes, we regularly collect items from galleries, auction houses, and antique dealers across Leeds and West Yorkshire. We\'re comfortable working with gallery staff and following their handling protocols. If the gallery has specific packing requirements or crate specifications, let us know and we\'ll accommodate them.',
      },
      {
        question: 'How much does it cost to move fragile or antique items?',
        answer: 'Pricing depends on the number of items, their size, fragility, and distance. A single framed painting within Leeds might be £40-60. A set of antique furniture could be £150-300. Complex items like chandeliers or large sculptures are quoted individually after we understand the full scope. Materials are included in the price.',
      },
    ],
    priceRange: 'Single items from £40 · Multiple pieces from £150',
    commonIssues: [
      'Items more fragile or valuable than initially described',
      'No protective packing on items before our team arrives (we handle this, but it adds time)',
      'Very large or heavy antique furniture that won\'t fit through modern doorways',
      'Items stored in damp conditions with pre-existing damage',
    ],
    relatedServices: ['piano-moving-leeds', 'packing-service-leeds', 'house-removals-leeds'],
    image: '/images/services/fragile-items.webp',
    seasonalNotes: 'Fragile item moves are steady year-round. There\'s a slight peak around Christmas (gifts and artwork being moved) and in spring/summer when house moves include antique collections. Auction house collections tend to cluster around major sale dates.',
    vanRecommendation: 'For fragile items, we use whichever van gives the most secure environment — typically the Sprinter or Luton, depending on volume. The key is having enough space to separate items properly rather than stacking them.',
  },
  {
    slug: 'clearance-collections-leeds',
    name: 'Clearance Collections',
    description: 'Need to clear a property, a room, or a storage unit? We collect and remove furniture, appliances, and general items — saving you multiple trips.',
    heroHeading: 'Property Clearance & Collections Leeds',
    metaTitle: 'Property Clearance Leeds | Furniture & General Clearance',
    metaDescription: 'House and property clearance service in Leeds. We collect and remove furniture, appliances and general items. Useful for bereavements and downsizing.',
    features: [
      'Full house clearance or single-room clearance',
      'Furniture, appliances, and general household items removed',
      'Storage unit clearance available',
      'Ideal for bereavements, downsizing, and end-of-tenancy clearance',
      'Responsible disposal — reusable items donated or recycled where possible',
      'Fixed-price quotes based on volume, not time',
    ],
    process: [
      { step: 'Tell us what needs clearing', description: 'Describe the scope — whole house, single room, garage, or storage unit. Photos help us estimate the volume and give an accurate fixed price. Include the address and any access details.' },
      { step: 'Fixed-price quote', description: 'We\'ll confirm a price based on the volume of items and the access situation. No hourly rates — you know the cost upfront. We\'ll also confirm what happens to the items (tip, charity, recycling).' },
      { step: 'Collection day', description: 'Our team arrives, clears the items room by room, and loads everything into the van. We work carefully and respectfully, especially during bereavement clearances.' },
      { step: 'Responsible disposal', description: 'Items are taken to the appropriate destination — reusable furniture is donated to local charities where possible, recyclable materials are separated, and the rest goes to licensed waste facilities.' },
    ],
    faqs: [
      {
        question: 'How much does a house clearance cost in Leeds?',
        answer: 'A single room clearance in Leeds typically costs £80-150. A full house clearance (3-bed) ranges from £300-600 depending on the volume and type of items. Garages and storage units are usually £100-250. We quote fixed prices based on volume so you know exactly what to expect. Access challenges like upper floors or narrow streets may affect the price slightly.',
      },
      {
        question: 'Do you handle bereavement clearances sensitively?',
        answer: 'Yes, we understand that clearing a loved one\'s home is a difficult and emotional process. Our team works respectfully and at a pace that suits you. If there are items you want to keep, we\'ll set those aside carefully. We can also work while you\'re not there if that\'s easier. Many of our clearance jobs are bereavements and we treat every one with care.',
      },
      {
        question: 'What happens to the items you collect?',
        answer: 'We sort items into categories. Furniture and household goods in good condition are donated to local charities in Leeds (we work with several). Recyclable materials (metal, cardboard, textiles) go to recycling facilities. Items that can\'t be reused or recycled go to licensed waste disposal. We\'ll let you know how your items were handled if you\'d like.',
      },
      {
        question: 'Can you clear a storage unit?',
        answer: 'Yes, we regularly clear storage units across Leeds and the surrounding area. Just provide the storage facility name, unit number, and access details. We can also handle the logistics of removing items, closing the unit, and returning keys if needed. This is useful when storage is no longer needed after a move or bereavement.',
      },
      {
        question: 'Do you take everything, including appliances and white goods?',
        answer: 'Yes, we remove furniture, appliances (washing machines, fridges, ovens), mattresses, carpets, curtains, and general household items. We can also handle garden waste and shed clearance. The only items we can\'t take are hazardous materials (chemicals, paint, asbestos) — these need specialist disposal. Let us know if you\'re unsure about any items.',
      },
    ],
    priceRange: 'Single room from £80 · Full house from £300',
    commonIssues: [
      'More items than expected (lofts, sheds, garages forgotten in the initial estimate)',
      'Items heavier than they look — old furniture, cast iron radiators',
      'Access to upper-floor properties with no lift',
      'Personal items (photos, documents) mixed in with clearance items that need sorting',
    ],
    relatedServices: ['man-and-van-leeds', 'house-removals-leeds', 'storage-leeds'],
    image: '/images/services/clearance-collections.webp',
    seasonalNotes: 'Clearance work is relatively steady year-round. There\'s a slight increase in January (New Year decluttering) and spring (spring cleaning and garden clearance). End-of-tenancy clearances peak at the end of each month when leases expire.',
    vanRecommendation: 'For single-room clearances, the Sprinter van usually has plenty of capacity. Full house clearances typically need the Luton van and may require multiple loads for larger properties.',
  },
  {
    slug: 'storage-leeds',
    name: 'Storage',
    description: 'Need somewhere to put your belongings between moves? We work with trusted local storage providers in Leeds. Short-term and long-term options available.',
    heroHeading: 'Short & Long-Term Storage Leeds',
    metaTitle: 'Storage Leeds | From £20/day',
    metaDescription: 'Need storage between moves in Leeds? We work with trusted local storage providers. Short and long-term options available from £20/day.',
    features: [
      'Short-term and long-term storage options from £20/day',
      'Trusted local storage partners across Leeds',
      'We handle transport to and from the storage facility',
      'Ideal between moves when dates don\'t align',
      'Flexible access — retrieve your items when you need them',
      'Combined with removal service for seamless transition',
    ],
    process: [
      { step: 'Tell us what you need stored', description: 'Describe the volume — number of boxes, furniture items, and anything bulky. Let us know how long you expect to need storage (days, weeks, or months).' },
      { step: 'We arrange the facility', description: 'We\'ll match you with the right storage provider in Leeds based on your needs — container, unit, or room. We confirm the cost (from £20/day) and access arrangements.' },
      { step: 'Transport to storage', description: 'We collect your belongings and transport them to the storage facility. Items are loaded into the unit carefully, with heavier items at the back and things you might need at the front.' },
      { step: 'Retrieval when you\'re ready', description: 'When your new home is ready, we collect everything from storage and deliver it to your door. One call, and your belongings are back with you.' },
    ],
    faqs: [
      {
        question: 'How much does storage cost in Leeds?',
        answer: 'Storage starts from £20/day for short-term needs (a few days to a couple of weeks). For longer-term storage, monthly rates work out cheaper — typically £100-300/month depending on the size of the unit. We\'ll recommend the most cost-effective option based on how long you need storage and the volume of items.',
      },
      {
        question: 'Can I access my belongings while they\'re in storage?',
        answer: 'Yes, most of our storage partners offer flexible access during business hours. If you need to retrieve specific items before the rest, we can arrange that. Some facilities offer 24/7 access for an additional charge. We\'ll confirm the access policy when setting up your storage.',
      },
      {
        question: 'Is storage secure?',
        answer: 'All our storage partners have security measures including CCTV, individual unit padlocks, and secure perimeters. Many facilities also have alarm systems and on-site staff. Your items are stored in your own locked unit — only you have the key. For high-value items, we can recommend facilities with additional security.',
      },
      {
        question: 'Can you move items into storage and then deliver them later?',
        answer: 'Absolutely — this is one of our most common combined services. If your move-out date and move-in date don\'t align, we collect your belongings, transport them to storage, and then deliver them to your new home when you\'re ready. It\'s one booking covering the whole process, which keeps things simple.',
      },
      {
        question: 'What can\'t be stored?',
        answer: 'Most household items can be stored without issue — furniture, boxes, appliances, clothing, and personal belongings. Items that can\'t be stored include perishable food, flammable materials, chemicals, and anything alive (plants, pets). If you\'re unsure about a specific item, just ask and we\'ll confirm with the storage provider.',
      },
    ],
    priceRange: 'From £20/day · Monthly from £100',
    commonIssues: [
      'Underestimating the volume of items and needing a larger unit',
      'Forgetting to label boxes, making retrieval difficult later',
      'Storing items that need climate control (wooden furniture, electronics) in basic units',
      'Short-term storage extending into long-term, making monthly rates more cost-effective',
    ],
    relatedServices: ['house-removals-leeds', 'long-distance-removals-leeds', 'packing-service-leeds'],
    image: '/images/services/storage.webp',
    seasonalNotes: 'Storage demand peaks during the summer house-moving season (May-September) when move dates frequently don\'t align. Students also use storage over summer when they\'re between houses. Winter is quieter with more availability and sometimes better rates.',
    vanRecommendation: 'Transport to storage uses whichever van matches your volume — LWB for a few items, Sprinter for a room\'s worth, Luton for a full house. We\'ll confirm the right van when quoting.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
