export interface Route {
  slug: string;
  from: string;
  to: string;
  distance: string;
  driveTime: string;
  typicalCost: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  routeDetails: string;
  whatFits: { van: string; capacity: string; bestFor: string }[];
  faqs: { question: string; answer: string }[];
  tips: string[];
  relatedRoutes: string[];
}

export const routes: Route[] = [
  {
    slug: 'leeds-to-london',
    from: 'Leeds',
    to: 'London',
    distance: '195 miles',
    driveTime: '3.5-4 hours',
    typicalCost: '£350-£900',
    heroHeading: 'Man With A Van Leeds to London',
    metaTitle: 'Man With A Van Leeds to London | Fixed-Price Removals',
    metaDescription: 'Long-distance removal service from Leeds to London. Fixed-price quotes, dedicated van, no groupage. Typical cost £350–£900 depending on van size.',
    intro: 'Moving from Leeds to London is one of our most popular long-distance routes. Whether you\'re relocating for work, starting university, or making a lifestyle change, we provide a dedicated van service with a fixed price — no shared loads, no mileage extras. The M1 corridor makes this a straightforward run, and we do it regularly enough to know the best times to travel and the access quirks at the London end.',
    routeDetails: 'The standard route follows the M1 south from Leeds, joining the M25 or cutting through to central London depending on your destination. Journey time is typically 3.5-4 hours outside of rush hour. We recommend departing Leeds by 7am for arrivals in London before midday, avoiding the worst of the M25 traffic. For south London and Kent destinations, we route via the M1/M25/A2. For west London, the M1/M40 split can be faster. We factor in a comfort break around the halfway point (Northampton services area).',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, 20-30 boxes and a few small furniture items' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat, including a sofa, bed, wardrobe, and 30-50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2-3 bed house, full household including large furniture and appliances' },
    ],
    faqs: [
      {
        question: 'How much does it cost to move from Leeds to London?',
        answer: 'The cost depends on which van size you need. An LWB van (studio or single room) is typically £350-450. A Sprinter van (1-2 bed flat) is £500-650. A Luton van with two-man team (2-3 bed house) is £700-900. These are fixed prices covering loading, transport, and unloading — no fuel surcharges or mileage extras.',
      },
      {
        question: 'What\'s the best time to leave Leeds for a London delivery?',
        answer: 'We recommend departing Leeds between 6am and 7am for the smoothest journey. This gets you past the M1/M25 interchange before the mid-morning congestion builds. For deliveries to central London, arriving before 11am also gives you the best chance of street parking and loading bay availability. Weekend moves avoid weekday traffic entirely.',
      },
      {
        question: 'Can you deliver to a specific London borough or zone?',
        answer: 'Yes, we deliver to all London boroughs — central, inner, and outer. We\'re familiar with the congestion charge zone, ULEZ boundaries, and parking restrictions across London. Whether you\'re moving to a flat in Hackney, a house in Wimbledon, or student halls in Bloomsbury, we can get there. We\'ll factor in any zone charges at the quoting stage.',
      },
      {
        question: 'Is my stuff the only load on the van?',
        answer: 'Yes. Every Leeds to London booking gets a dedicated van — your belongings are the only items on board. No groupage, no shared loads, no detours to collect or deliver other people\'s things. Your items go straight from your Leeds address to your London address.',
      },
    ],
    tips: [
      'Book at least a week ahead for weekend slots — Leeds to London is our busiest route',
      'Departure before 7am avoids M1 and M25 peak traffic and gives you a full day to unload',
      'Check if your London address is in the ULEZ or congestion charge zone — we handle the charges but it\'s good to know',
      'If you\'re moving to a flat above ground floor, confirm lift access at the London end to avoid delays',
      'Consider a midweek move (Tuesday-Thursday) for more availability and sometimes shorter journey times',
    ],
    relatedRoutes: ['leeds-to-birmingham', 'leeds-to-bristol', 'leeds-to-nottingham'],
  },
  {
    slug: 'leeds-to-manchester',
    from: 'Leeds',
    to: 'Manchester',
    distance: '43 miles',
    driveTime: '1-1.5 hours',
    typicalCost: '£200-£500',
    heroHeading: 'Man With A Van Leeds to Manchester',
    metaTitle: 'Man With A Van Leeds to Manchester | Fixed-Price',
    metaDescription: 'Removal service from Leeds to Manchester. Fixed-price quotes, dedicated van, 7 days a week. Typical cost from £200 depending on van size.',
    intro: 'Leeds to Manchester is a short but frequently busy route across the Pennines. The M62 connects the two cities directly, and on a good day the journey takes about an hour. We run this route multiple times a week for everything from student moves and flat relocations to full house removals. Fixed-price quotes with no motorway supplements — the price we quote is what you pay.',
    routeDetails: 'The route follows the M62 westbound from Leeds, crossing the Pennines at the highest point on the English motorway network (1,221 feet at Junction 22). The M62 can be affected by weather in winter — high winds and snow occasionally slow traffic over the top. We monitor conditions and plan accordingly. For south Manchester (Stockport, Didsbury), we may route via the M60. For north Manchester (Bury, Rochdale), Junction 20/21 is the exit. The M62 is a reliable motorway but Junction 26-29 (the Pennine stretch) can slow down in poor weather.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, small furniture delivery' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat, student house move, moderate load' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2-3 bed house, full household removal' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Manchester move cost?',
        answer: 'An LWB van for a studio or single room move costs from £200. A Sprinter van for a 1-2 bed flat is typically £250-350. A Luton van with two-man team for a larger move is £400-500. These are fixed prices — no mileage, fuel, or motorway extras. The relatively short distance keeps costs down compared to longer routes.',
      },
      {
        question: 'How long does the journey take?',
        answer: 'The M62 crossing typically takes 1-1.5 hours depending on traffic and weather. Add 1-3 hours at each end for loading and unloading. A typical 1-bed flat move from Leeds to Manchester takes 3-4 hours total. We build in buffer time for the Pennine crossing, especially in winter when conditions can be unpredictable.',
      },
      {
        question: 'Does weather affect the M62 crossing?',
        answer: 'The M62 over the Pennines is the highest motorway in England and can be affected by snow, ice, and high winds in winter. We monitor conditions on the morning of every crossing and adjust departure times if needed. In severe weather, we\'ll discuss rescheduling with you. Summer moves over the Pennines are straightforward with no weather concerns.',
      },
      {
        question: 'Can you deliver to Manchester city centre apartments?',
        answer: 'Yes, we regularly deliver to apartments in Manchester city centre — Deansgate, Northern Quarter, Ancoats, Salford Quays, and the surrounding areas. Many city centre buildings have loading bays and goods lifts. We coordinate with building management in advance to ensure smooth access.',
      },
    ],
    tips: [
      'The M62 Pennine stretch can be slow in bad weather — winter moves benefit from an early departure',
      'Avoid the M62 between 4-6pm on weekdays when westbound traffic from Leeds is heaviest',
      'For moves to south Manchester, the M60 ring road avoids the city centre entirely',
      'Both cities have congestion/parking challenges in the centre — confirm access at both ends before moving day',
    ],
    relatedRoutes: ['leeds-to-liverpool', 'leeds-to-sheffield', 'leeds-to-birmingham'],
  },
  {
    slug: 'leeds-to-edinburgh',
    from: 'Leeds',
    to: 'Edinburgh',
    distance: '210 miles',
    driveTime: '3.5-4 hours',
    typicalCost: '£400-£700',
    heroHeading: 'Removals Leeds to Edinburgh',
    metaTitle: 'Removals Leeds to Edinburgh | Fixed-Price Quotes',
    metaDescription: 'Long-distance removal service from Leeds to Edinburgh. Fixed-price quotes, dedicated van. Typical cost £400–£700 depending on van size.',
    intro: 'Moving from Leeds to Edinburgh takes you up through the scenic north of England and across the Scottish border. The A1(M) provides a direct route, and the journey is typically 3.5-4 hours. We handle this route regularly — from professionals relocating between the two cities to students moving to Edinburgh\'s universities. Dedicated van, fixed price, no shared loads.',
    routeDetails: 'The route follows the A1(M) north from Leeds through Wetherby, past Scotch Corner, through Newcastle and Northumberland, crossing into Scotland near Berwick-upon-Tweed and continuing to Edinburgh. The A1 is dual carriageway for most of the route but single carriageway in parts of Northumberland — this is where most delays occur. An alternative route via the M6/A74(M) through Carlisle is available if the A1 is heavily delayed but adds about 30 minutes. We schedule a rest stop around Durham or Alnwick.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, or a small load of boxes and furniture' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat contents, including bed, sofa, and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full house move, 2-3 bedrooms with all furniture and appliances' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Edinburgh removal cost?',
        answer: 'An LWB van for a studio/single room is typically £400-450. A Sprinter van for a 1-2 bed flat costs £500-600. A Luton van with two-man team for a full house move is £600-700. These are fixed prices covering the entire journey including loading and unloading at both ends.',
      },
      {
        question: 'Do you need to stop overnight for a Leeds to Edinburgh move?',
        answer: 'No, the journey is comfortably done in a single day. We depart Leeds in the morning, arrive in Edinburgh by early afternoon, and have you fully unloaded the same day. For very large moves (4+ bed houses requiring the Luton van), loading may start early in the morning to ensure we arrive in Edinburgh with enough daylight hours for unloading.',
      },
      {
        question: 'Is Edinburgh city centre accessible for vans?',
        answer: 'Edinburgh\'s Old Town and New Town have narrow streets, one-way systems, and parking restrictions. We know which streets have loading bays and where the best access points are for Edinburgh\'s tenement flats. The suburbs (Morningside, Stockbridge, Leith) are more straightforward. We plan Edinburgh city centre moves carefully and may request an early arrival to use quieter morning streets.',
      },
      {
        question: 'Do I need to worry about different regulations in Scotland?',
        answer: 'From a moving perspective, there are no significant regulatory differences to worry about. Speed limits, road rules, and insurance all apply the same way. The main practical difference is that Scottish property transactions work differently (with missives rather than exchange/completion), which can affect moving dates — but that\'s a conveyancing matter rather than something we need to handle.',
      },
    ],
    tips: [
      'The A1 through Northumberland has single carriageway stretches — factor in extra time if travelling during tourist season',
      'Edinburgh parking permits may be needed in the New Town and residential zones — check with your new council',
      'Early departure from Leeds (7am) gets you into Edinburgh by midday, leaving a full afternoon for unloading',
      'If moving to an Edinburgh tenement flat, check stair width and any shared stairwell restrictions in advance',
    ],
    relatedRoutes: ['leeds-to-glasgow', 'leeds-to-newcastle', 'leeds-to-london'],
  },
  {
    slug: 'leeds-to-birmingham',
    from: 'Leeds',
    to: 'Birmingham',
    distance: '120 miles',
    driveTime: '2-2.5 hours',
    typicalCost: '£300-£650',
    heroHeading: 'Man With A Van Leeds to Birmingham',
    metaTitle: 'Man With A Van Leeds to Birmingham | Fixed Price',
    metaDescription: 'Removal service from Leeds to Birmingham. Fixed-price quotes, dedicated van, 7 days a week. Typical cost from £300 depending on van size.',
    intro: 'Birmingham is a popular route for professionals and families relocating between England\'s second-largest city and Leeds. The M1/M42 corridor makes this a straightforward 2-2.5 hour journey. We provide dedicated van moves with fixed pricing — no shared loads and no motorway surcharges. Whether you\'re heading to the city centre, Edgbaston, or the suburbs, we\'ve done the route many times.',
    routeDetails: 'The standard route takes the M1 south from Leeds, then the M42 to approach Birmingham from the east. For Birmingham city centre and the western suburbs (Edgbaston, Moseley, Harborne), the M1/M6/A38 route can be faster. The M42 avoids Birmingham\'s congested city centre entirely, which is useful for eastern and southern suburbs. We avoid the M6 Spaghetti Junction area during rush hours.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat or single room — boxes, a desk, and small furniture' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat with sofa, bed, wardrobe, and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full 2-3 bed house removal including all furniture' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Birmingham move cost?',
        answer: 'An LWB van (studio/single room) is typically £300-350. A Sprinter van (1-2 bed flat) costs £400-500. A Luton van with two-man team (full house) is £550-650. These are fixed prices covering everything — loading, transport, and unloading. No mileage or fuel extras.',
      },
      {
        question: 'Which route do you take from Leeds to Birmingham?',
        answer: 'The most common route is M1 south to Junction 23a, then M42 towards Birmingham. For western Birmingham (Edgbaston, Harborne), we may use the M1/M6/A38 approach instead. We choose the route based on your specific destination and the traffic conditions on the day. Both options are well-maintained motorways with reliable journey times.',
      },
      {
        question: 'Is Birmingham city centre accessible for vans?',
        answer: 'Birmingham city centre has a Clean Air Zone (CAZ), which applies to some older vehicles. Our fleet complies with CAZ requirements, so there\'s no surcharge. The city centre has a mix of one-way systems and pedestrianised areas. For apartment buildings, we coordinate with building management for goods lift and loading bay access.',
      },
      {
        question: 'Can you do a same-day return from Birmingham?',
        answer: 'Yes, the 2-2.5 hour journey each way makes same-day returns comfortable. If we load in Leeds in the morning, we can be unloading in Birmingham by early afternoon and back in Leeds by evening. This works well for smaller moves that don\'t require a full day of loading time.',
      },
    ],
    tips: [
      'The M6 near Birmingham (Spaghetti Junction) is best avoided during weekday rush hours — we route around it',
      'Birmingham\'s Clean Air Zone is in place but our vans are compliant — no extra charges for you',
      'Mid-morning departure from Leeds gets you into Birmingham before the afternoon traffic builds',
      'For the Jewellery Quarter and Digbeth, confirm loading bay access — these areas have limited street parking',
    ],
    relatedRoutes: ['leeds-to-london', 'leeds-to-nottingham', 'leeds-to-bristol'],
  },
  {
    slug: 'leeds-to-bristol',
    from: 'Leeds',
    to: 'Bristol',
    distance: '210 miles',
    driveTime: '3.5-4 hours',
    typicalCost: '£450-£800',
    heroHeading: 'Removals Leeds to Bristol',
    metaTitle: 'Removals Leeds to Bristol | Fixed-Price Quotes',
    metaDescription: 'Long-distance removal service from Leeds to Bristol. Fixed-price, dedicated van. Typical cost £450–£800 depending on van size.',
    intro: 'Bristol is one of the UK\'s most vibrant cities, and the Leeds to Bristol route is well-travelled for work relocations, university moves, and lifestyle changes. The M1/M5 corridor provides a direct motorway route of around 210 miles, taking 3.5-4 hours. We offer dedicated van moves with fixed pricing — your belongings travel alone, straight from door to door.',
    routeDetails: 'The route takes the M1 south from Leeds to Junction 21a (Leicester), then the M69/M5 south to Bristol. An alternative via the M1/M40/M5 through Oxford is slightly longer but can be faster when the M69 is congested. Bristol\'s road network includes the Clifton Suspension Bridge (toll), the A4174 ring road, and the M32 spur into the city centre. We choose the approach based on your specific Bristol address.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat or single room with boxes and small furniture' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat — bed, sofa, wardrobe, and 30-50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full 2-3 bed house removal with all household contents' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Bristol removal cost?',
        answer: 'An LWB van for a studio or single room costs £450-500. A Sprinter van for a 1-2 bed flat is £550-650. A Luton van with two-man team for a full house is £700-800. Fixed prices covering loading, transport, and unloading — no mileage or motorway charges on top.',
      },
      {
        question: 'Is Bristol\'s Clean Air Zone a problem?',
        answer: 'Bristol has a Clean Air Zone (CAZ) in the city centre. Our fleet meets the emissions requirements, so there are no additional charges passed to you. If your destination is within the CAZ boundary, we handle everything — you don\'t need to worry about registration or payments.',
      },
      {
        question: 'Can the move be completed in one day?',
        answer: 'Yes. We depart Leeds early morning and arrive in Bristol by late morning or early afternoon. Unloading is usually complete by late afternoon. For very large moves or properties with difficult access, we may recommend a slightly earlier start to ensure everything is done comfortably in daylight hours.',
      },
      {
        question: 'What about the hills in Bristol?',
        answer: 'Bristol is famously hilly, and some residential streets have significant gradients. Areas like Totterdown, Bedminster, and Clifton have steep streets that require careful van handling. Our drivers are experienced with this and plan routes to approach properties from the safest angle. If your new address is on a particularly steep street, let us know and we\'ll plan accordingly.',
      },
    ],
    tips: [
      'Bristol\'s streets are steep in many residential areas — confirm parking and gradient at your new address',
      'The M5 past Birmingham can be slow during Friday afternoon getaway traffic — avoid Friday afternoon departures',
      'Early morning departure (6-7am) from Leeds gives the most relaxed arrival time in Bristol',
      'If moving near the Clifton Suspension Bridge, note the toll and weight limit — our Luton van uses alternative routes',
    ],
    relatedRoutes: ['leeds-to-london', 'leeds-to-birmingham', 'leeds-to-nottingham'],
  },
  {
    slug: 'leeds-to-sheffield',
    from: 'Leeds',
    to: 'Sheffield',
    distance: '35 miles',
    driveTime: '45-60 min',
    typicalCost: '£150-£450',
    heroHeading: 'Man With A Van Leeds to Sheffield',
    metaTitle: 'Man With A Van Leeds to Sheffield | Fixed Price',
    metaDescription: 'Man and van from Leeds to Sheffield. Fixed-price quotes, same-day and next-day available. Typical cost from £150.',
    intro: 'Sheffield is the closest major city to Leeds, and the M1 makes the 35-mile journey quick and reliable — typically under an hour. This is one of our most frequent routes, handling everything from student moves between the two university cities to family relocations and furniture deliveries. The short distance keeps costs down, and same-day or next-day booking is often available.',
    routeDetails: 'The route follows the M1 south from Leeds through Wakefield, directly into Sheffield. It\'s a straightforward motorway run with no single carriageway stretches. Junction 33 serves Sheffield city centre, while Junction 34 is better for the northern suburbs (Hillsborough, Stannington). For the western side (Crookes, Broomhill, student areas), the A61 or Penistone Road approach works well.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio, single room, or a few pieces of furniture' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat, student house, moderate load' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full house move, 2-3 bedrooms with all contents' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Sheffield move cost?',
        answer: 'The short distance keeps costs low. An LWB van for a studio or single room starts from £150. A Sprinter for a 1-2 bed flat is typically £200-300. A Luton van with two-man team for a full house is £350-450. Fixed prices with no extras — the M1 run is quick and efficient.',
      },
      {
        question: 'Can I book same-day for a Leeds to Sheffield move?',
        answer: 'Often, yes. Because it\'s a short route and one we do frequently, same-day availability is better than for longer routes. If you contact us in the morning, there\'s a good chance we can get a van to you that day. Next-day is almost always available. Weekends may need a day or two more notice.',
      },
      {
        question: 'Do you cover Sheffield\'s student areas?',
        answer: 'Yes, we cover all of Sheffield including the student areas around Broomhill, Crookes, Ecclesall Road, and the city centre. Both University of Sheffield and Sheffield Hallam generate a lot of student move demand. We know the parking challenges in these areas and plan ahead.',
      },
      {
        question: 'Is it worth using a van for such a short distance?',
        answer: 'If you\'re moving furniture, appliances, or more than a few boxes, a van move is much more efficient than multiple car trips. The M1 makes the journey quick, and a single van load replaces 3-5 car loads. For a bed, sofa, or wardrobe, a van is the only practical option anyway.',
      },
    ],
    tips: [
      'The M1 between Leeds and Sheffield is reliable — rarely major delays outside of rush hour',
      'Sheffield\'s hills can be steep (especially Broomhill, Crookes, and Walkley) — confirm parking at the delivery address',
      'For student area moves in Sheffield, weekday mornings offer the best parking availability',
      'Same-day booking is often possible for this short route — don\'t hesitate to ask',
    ],
    relatedRoutes: ['leeds-to-manchester', 'leeds-to-nottingham', 'leeds-to-birmingham'],
  },
  {
    slug: 'leeds-to-newcastle',
    from: 'Leeds',
    to: 'Newcastle',
    distance: '95 miles',
    driveTime: '1.5-2 hours',
    typicalCost: '£250-£550',
    heroHeading: 'Removals Leeds to Newcastle',
    metaTitle: 'Removals Leeds to Newcastle | Fixed-Price Quotes',
    metaDescription: 'Long-distance removal from Leeds to Newcastle. Fixed-price, dedicated van, 7 days a week. Typical cost from £250 depending on van size.',
    intro: 'Newcastle is roughly 95 miles north-east of Leeds, connected by the A1(M) for a comfortable 1.5-2 hour journey. We handle regular moves between the two cities — from professionals relocating for work to students heading to Newcastle\'s universities. The route is straightforward motorway driving with no tricky stretches, and we offer dedicated van service at a fixed price.',
    routeDetails: 'The route follows the A1(M) north from Leeds through Wetherby, past Scotch Corner, past Darlington and Durham, directly into Newcastle. It\'s a well-maintained dual carriageway/motorway for the entire journey. For Gateshead and the southern suburbs, the A1 bypass provides direct access. For Jesmond, Heaton, and the city centre, the A167 approach from the south is most direct.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, small furniture load' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat with standard furniture and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full 2-3 bed house move with all contents' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Newcastle removal cost?',
        answer: 'An LWB van for a studio or single room is typically £250-300. A Sprinter van for a 1-2 bed flat costs £350-450. A Luton van with two-man team for a full house is £450-550. Fixed prices with everything included — loading, transport, and unloading.',
      },
      {
        question: 'How long does the journey take?',
        answer: 'The A1(M) from Leeds to Newcastle typically takes 1.5-2 hours. It\'s a straightforward motorway run with no single carriageway sections to slow things down. Add 1-3 hours at each end for loading and unloading. A typical 1-bed flat move takes 4-5 hours total including the drive.',
      },
      {
        question: 'Do you cover Newcastle\'s student areas?',
        answer: 'Yes, we cover Jesmond, Heaton, Sandyford, and all the Newcastle University and Northumbria University student areas. These areas have Victorian terraces similar to Headingley in Leeds, so we\'re very familiar with the access challenges — narrow streets, no driveways, and tight stairwells.',
      },
      {
        question: 'Can you deliver to Gateshead as well?',
        answer: 'Yes, Gateshead, Sunderland, and the wider Tyneside area are all covered. The A1 runs right through Gateshead, so it adds minimal time. Team Valley, MetroCentre area, and Whickham are all easily accessible from the main route.',
      },
    ],
    tips: [
      'The A1(M) is reliable with few delays — one of the smoothest long-distance routes from Leeds',
      'Newcastle city centre has a congestion-free approach from the south via the A167',
      'Jesmond and Heaton have tight Victorian streets similar to Headingley — confirm parking before moving day',
      'For Tyne Tunnel crossings (to North Shields, Whitley Bay), factor in the toll',
    ],
    relatedRoutes: ['leeds-to-edinburgh', 'leeds-to-glasgow', 'leeds-to-sheffield'],
  },
  {
    slug: 'leeds-to-glasgow',
    from: 'Leeds',
    to: 'Glasgow',
    distance: '220 miles',
    driveTime: '3.5-4 hours',
    typicalCost: '£450-£800',
    heroHeading: 'Man With A Van Leeds to Glasgow',
    metaTitle: 'Man With A Van Leeds to Glasgow | Fixed Price',
    metaDescription: 'Long-distance removal from Leeds to Glasgow. Fixed-price quotes, dedicated van. Typical cost £450–£800 depending on van size.',
    intro: 'Glasgow is Scotland\'s largest city, and the route from Leeds via the M6/A74(M)/M74 is a well-established corridor taking around 3.5-4 hours. We handle regular moves between Leeds and Glasgow for families, professionals, and students. The motorway route is maintained to a high standard and makes for a comfortable single-day move with a dedicated van.',
    routeDetails: 'The main route follows the M62 west from Leeds to the M6, then north through Lancaster, past Carlisle, and across the border to the A74(M)/M74 into Glasgow. This western route is faster and more reliable than the A1/Edinburgh approach. The M74 feeds directly into the Glasgow motorway network (M8/M77). For the West End (Byres Road, Partick), we approach via the M8/Clydeside Expressway. For the South Side, the M77/M8 gives direct access.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, or small load of boxes and furniture' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat contents including bed, sofa, and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full house removal, 2-3 bedrooms with all furniture' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Glasgow move cost?',
        answer: 'An LWB van for a studio/single room is typically £450-500. A Sprinter van for a 1-2 bed flat costs £550-650. A Luton van with two-man team for a full house is £700-800. Fixed prices covering the complete service — loading in Leeds, transport, and unloading in Glasgow.',
      },
      {
        question: 'Which route do you take to Glasgow?',
        answer: 'We take the M62/M6/A74(M)/M74 western route through Lancaster and Carlisle. It\'s faster and more reliable than going via the A1 and Edinburgh. The entire route is motorway or dual carriageway. We typically schedule a rest stop around the Tebay services in Cumbria, which is about the halfway mark.',
      },
      {
        question: 'Is the move completed in one day?',
        answer: 'Yes, easily. We depart Leeds in the morning and arrive in Glasgow by early afternoon. A typical flat move is fully completed well before evening. For larger house moves requiring the Luton van, we start loading early in the morning to maximise daylight hours at the Glasgow end for unloading.',
      },
      {
        question: 'Do you cover all areas of Glasgow?',
        answer: 'Yes — city centre, West End, East End, South Side, and the surrounding suburbs. We\'re familiar with Glasgow\'s tenement flats (common in the West End and South Side) and the access challenges they present — narrow closes, winding stairs, and limited parking. Just let us know the area and we\'ll plan accordingly.',
      },
    ],
    tips: [
      'The M6 past Lancaster can be slow on bank holidays and summer Fridays — avoid those departure times',
      'Tebay services on the M6 is the best rest stop on this route — independently run with good food',
      'Glasgow tenement flats often have narrow common stairwells — confirm stair width and any furniture that needs dismantling',
      'Low emission zone in Glasgow city centre — our vans are compliant, no extra charges',
    ],
    relatedRoutes: ['leeds-to-edinburgh', 'leeds-to-newcastle', 'leeds-to-manchester'],
  },
  {
    slug: 'leeds-to-liverpool',
    from: 'Leeds',
    to: 'Liverpool',
    distance: '75 miles',
    driveTime: '1.5-2 hours',
    typicalCost: '£250-£550',
    heroHeading: 'Man With A Van Leeds to Liverpool',
    metaTitle: 'Man With A Van Leeds to Liverpool | Fixed Price',
    metaDescription: 'Man and van from Leeds to Liverpool. Fixed-price quotes, dedicated van, 7 days a week. Typical cost from £250.',
    intro: 'Liverpool is about 75 miles west of Leeds, connected by the M62 for a journey of 1.5-2 hours. We handle regular moves between the two cities — student relocations, family moves, and professional transfers. The trans-Pennine M62 route is straightforward, and the fixed price we quote includes everything with no motorway supplements.',
    routeDetails: 'The route follows the M62 west from Leeds, crossing the Pennines and continuing past Manchester to Liverpool. The M62 terminates at Junction 4 in Tarbock, from where the M57 and local roads access different parts of Liverpool. For the city centre and waterfront, the M62/Edge Lane approach is most direct. For south Liverpool (Aigburth, Allerton), the A562 offers a direct route. The Mersey tunnels provide access to the Wirral if needed.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, small furniture delivery' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat, student house move' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full house removal, 2-3 bedrooms' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Liverpool move cost?',
        answer: 'An LWB van for a studio or single room starts from £250. A Sprinter van for a 1-2 bed flat is typically £300-400. A Luton van with two-man team for a full house is £450-550. Fixed prices covering everything — no motorway, fuel, or tunnel extras.',
      },
      {
        question: 'Does the M62 get congested?',
        answer: 'The M62 is generally reliable but can slow down around the Manchester stretches (Junctions 10-18) during peak hours. The Pennine crossing (Junctions 22-24) can be affected by weather in winter. We time departures to avoid the worst congestion and build in buffer time. Weekend moves typically have lighter traffic.',
      },
      {
        question: 'Do you cover the Wirral as well?',
        answer: 'Yes, we can deliver to the Wirral via the Mersey tunnels (Birkenhead/Wallasey). Tunnel tolls are factored into the quote. Prenton, Bebington, West Kirby, and Heswall are all within our range. Just include the specific address when requesting your quote.',
      },
      {
        question: 'Can you move students between Leeds and Liverpool universities?',
        answer: 'Yes, we handle student moves between Leeds and Liverpool regularly. Liverpool\'s student areas (Smithdown Road, Kensington, Wavertree) have similar terraced housing to Leeds. We know the parking challenges in both cities and plan accordingly. Fixed prices from £250 for a student room move.',
      },
    ],
    tips: [
      'Avoid the M62 between Manchester and Liverpool during weekday rush hours (7-9am, 4-6pm)',
      'Liverpool city centre has some one-way restrictions — confirm loading access at your destination',
      'Mersey tunnel tolls apply if delivering to the Wirral — we factor this into the quote',
      'Liverpool\'s student areas have tight terraced streets — parking is first-come-first-served',
    ],
    relatedRoutes: ['leeds-to-manchester', 'leeds-to-sheffield', 'leeds-to-birmingham'],
  },
  {
    slug: 'leeds-to-nottingham',
    from: 'Leeds',
    to: 'Nottingham',
    distance: '75 miles',
    driveTime: '1.5-2 hours',
    typicalCost: '£250-£500',
    heroHeading: 'Removals Leeds to Nottingham',
    metaTitle: 'Removals Leeds to Nottingham | Fixed Price',
    metaDescription: 'Removal service from Leeds to Nottingham. Fixed-price quotes, dedicated van. Typical cost from £250 depending on van size.',
    intro: 'Nottingham is about 75 miles south of Leeds, connected directly by the M1 for a journey of 1.5-2 hours. It\'s a popular route for university moves (both cities have major universities), professional relocations, and family moves. The M1 provides a quick, reliable corridor with no single carriageway sections to slow you down.',
    routeDetails: 'The route follows the M1 south from Leeds through Wakefield, past Sheffield and Chesterfield, to Nottingham. Junction 26 serves the western side of Nottingham (Beeston, university campus), while Junction 24 provides access to the city centre and the eastern suburbs. The entire route is motorway with good services. The journey rarely takes more than 2 hours even with moderate traffic.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, or small delivery' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1-2 bed flat with standard furniture and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: 'Full house removal, 2-3 bedrooms with all contents' },
    ],
    faqs: [
      {
        question: 'How much does a Leeds to Nottingham move cost?',
        answer: 'An LWB van for a studio or single room starts from £250. A Sprinter van for a 1-2 bed flat is typically £300-400. A Luton van with two-man team for a full house is £400-500. Fixed prices with no extras — the M1 route is efficient and keeps costs reasonable.',
      },
      {
        question: 'Is the M1 reliable for this route?',
        answer: 'The M1 between Leeds and Nottingham is generally reliable. The only regular congestion point is around Junction 32-33 (Sheffield/Rotherham) during rush hours. Smart motorway sections have improved flow. We schedule departures to avoid the worst of the Sheffield-area traffic, and the journey is rarely more than 2 hours.',
      },
      {
        question: 'Do you cover the University of Nottingham campus area?',
        answer: 'Yes, we cover the University Park campus (Junction 26 access), Jubilee Campus, and all the student areas including Lenton, Dunkirk, Beeston, and Radford. These areas have typical student terraces and we\'re well practised with the parking and access challenges. Student room moves from Leeds start at £250.',
      },
      {
        question: 'Can you do a Nottingham to Leeds move as well?',
        answer: 'Yes, we handle moves in both directions. If you\'re relocating from Nottingham to Leeds, the same fixed pricing applies. Just let us know your Nottingham collection address and your Leeds destination, and we\'ll quote accordingly. The M1 northbound is just as straightforward.',
      },
    ],
    tips: [
      'The M1 past Sheffield (Junctions 32-35) can slow during rush hours — mid-morning departure avoids this',
      'Nottingham has a workplace parking levy in the city centre — relevant if you\'re moving to a commercial address',
      'For student area deliveries (Lenton, Dunkirk), weekday mornings have the best parking availability',
      'Junction 26 provides the quickest access to the university campus and Beeston area',
    ],
    relatedRoutes: ['leeds-to-sheffield', 'leeds-to-birmingham', 'leeds-to-london'],
  },
];

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}

export function getRelatedRoutes(slugs: string[]): Route[] {
  return slugs.map((slug) => routes.find((r) => r.slug === slug)).filter(Boolean) as Route[];
}
