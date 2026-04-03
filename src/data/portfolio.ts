export const personal = {
  name: "Ashraf Mohamed",
  title: "Security Researcher & Software Engineer",
  email: "ashrafal3oni@gmail.com",
  phone: "+966503489316",
  location: "Riyadh, Saudi Arabia",
  dob: "19/01/1999",
  status: "Single",
  photo: "/images/ashraf.jpeg",
  linkedin: "https://www.linkedin.com/in/ashraf-mohammed-salih/",
  github: "https://github.com/ashrafmohammedsalih",
  tagline: "I built the systems — now I know how to break and defend them",
  profile:
    "Cybersecurity professional and penetration tester with OSCP and OSCP+ certifications. Skilled in vulnerability analysis, exploitation, post-exploitation, and reporting with a focus on real-world attack scenarios. Proficient in tools such as Burp Suite, Nmap, Metasploit, and various scripting techniques to automate and enhance testing processes. Backed by years of hands-on software engineering experience building IoT systems, mobile apps, and hardware integrations — giving me deep knowledge of attack surfaces from the inside.",
  aboutDetailed:
    "I\u2019m a cybersecurity researcher and penetration tester specializing in network, web application, IoT, and hardware security assessments. With OSCP and OSCP+ certifications, I have proven hands-on ability to identify and exploit vulnerabilities in realistic environments \u2014 from Active Directory networks to embedded IoT systems. What sets me apart is my engineering background: I spent years building the exact types of production systems I now test \u2014 smart lockers controlled via RS485 serial protocols, vending machines connected through USB APIs, NFC/RFID access control systems, MQTT-connected Raspberry Pi agents, and payment gateways processing real transactions. This gives me something most security researchers don\u2019t have: protocol-level knowledge of how these systems actually work, where the vulnerabilities hide, and how to exploit them.",
  securityFocus:
    "My core focus areas are penetration testing (network, web, IoT), vulnerability research, privilege escalation, Active Directory exploitation, and hardware hacking. I understand the full attack surface of connected systems: from the mobile app layer (Flutter, REST APIs) through the backend (MQTT brokers, WebSockets, databases) down to the hardware layer (RS485 serial buses, NFC/RFID readers, embedded Linux on Raspberry Pi). I write custom scripts and tools to automate reconnaissance, enumeration, and exploitation workflows.",
  whatIDo: [
    {
      title: "Penetration Testing",
      desc: "Network, web application, and IoT penetration testing. OSCP & OSCP+ certified. Active Directory exploitation, privilege escalation, lateral movement, post-exploitation, and reporting.",
    },
    {
      title: "IoT & Hardware Hacking",
      desc: "RS485 bus sniffing, MQTT broker exploitation, NFC/RFID cloning & replay, firmware analysis, embedded Linux attacks. Built 5+ IoT production systems \u2014 I know exactly where the vulnerabilities hide.",
    },
    {
      title: "Web & API Security",
      desc: "OWASP Top 10, SQL injection, XSS, CSRF, IDOR, authentication bypass, SSRF. REST API and WebSocket security testing. Payment gateway vulnerability analysis from the builder\u2019s perspective.",
    },
    {
      title: "Security Tooling & Automation",
      desc: "Python and Bash scripting for recon, enumeration, and exploitation automation. Custom tool development (Magnum Scanner). Proficient with Burp Suite, Nmap, Metasploit, Hashcat, BloodHound, Ghidra.",
    },
  ],
  stats: [
    { num: "OSCP+", label: "OffSec Certified+" },
    { num: "OSCP", label: "OffSec Certified" },
    { num: "10+", label: "Systems Built & Tested" },
    { num: "50K+", label: "Users Served" },
  ],
  languages: ["Arabic (Native)", "English"],
};

export const skills = [
  {
    category: "Offensive Security",
    icon: "shield",
    accent: "#ef4444",
    items: [
      { name: "OSCP+", context: "Offensive Security Certified Professional+" },
      { name: "Penetration Testing", context: "Network, Web, IoT" },
      { name: "Vulnerability Research", context: "CVE discovery" },
      { name: "Exploit Development", context: "Buffer overflow, RCE" },
      { name: "Privilege Escalation", context: "Linux & Windows" },
      { name: "Active Directory", context: "Kerberos, NTLM attacks" },
      { name: "Metasploit", context: "Exploitation framework" },
      { name: "Burp Suite", context: "Web app testing" },
    ],
  },
  {
    category: "IoT & Hardware Security",
    icon: "cpu",
    accent: "#10b981",
    items: [
      { name: "RS485 Bus Sniffing", context: "Serial protocol analysis" },
      { name: "MQTT Security", context: "Broker auth, TLS, ACLs" },
      { name: "NFC/RFID Hacking", context: "Card cloning, replay" },
      { name: "Embedded Linux", context: "Raspberry Pi hardening" },
      { name: "Firmware Analysis", context: "IoT device reversing" },
      { name: "USB Attack Vectors", context: "POS terminal, serial" },
      { name: "Vending Machine Internals", context: "Built & tested 5+ systems" },
      { name: "Physical Security", context: "Lock bypass, access control" },
    ],
  },
  {
    category: "Network & Web Security",
    icon: "network",
    accent: "#f59e0b",
    items: [
      { name: "Nmap", context: "Network discovery & scanning" },
      { name: "Wireshark", context: "Packet analysis" },
      { name: "OWASP Top 10", context: "Web vulnerability testing" },
      { name: "SQL Injection", context: "Detection & exploitation" },
      { name: "XSS / CSRF", context: "Client-side attacks" },
      { name: "API Security", context: "REST, WebSocket testing" },
      { name: "Payment Security", context: "Gateway vulnerability analysis" },
    ],
  },
  {
    category: "Programming & Scripting",
    icon: "code",
    accent: "#06b6d4",
    items: [
      { name: "Python", context: "Exploit dev, IoT agents, automation" },
      { name: "Bash", context: "Recon scripts, enumeration" },
      { name: "Dart / Flutter", context: "4+ published mobile apps" },
      { name: "Kotlin", context: "Android kiosk apps" },
      { name: "Java", context: "Spring Boot backends" },
      { name: "PHP", context: "Laravel APIs" },
      { name: "JavaScript", context: "Web app testing" },
    ],
  },
  {
    category: "Security Tools",
    icon: "tools",
    accent: "#8b5cf6",
    items: [
      { name: "Kali Linux", context: "Primary security OS" },
      { name: "Burp Suite Pro", context: "Web app pentesting" },
      { name: "Metasploit", context: "Exploitation framework" },
      { name: "Nmap / Masscan", context: "Network scanning" },
      { name: "Hashcat / John", context: "Password cracking" },
      { name: "Gobuster / ffuf", context: "Directory brute-force" },
      { name: "BloodHound", context: "AD enumeration" },
      { name: "Ghidra / IDA", context: "Reverse engineering" },
    ],
  },
  {
    category: "Software Engineering",
    icon: "server",
    accent: "#64748b",
    items: [
      { name: "Flutter / BLoC", context: "Cross-platform apps" },
      { name: "Clean Architecture", context: "Scalable structure" },
      { name: "RESTful APIs", context: "Backend development" },
      { name: "Windows Server / IIS", context: "Ministry deployment" },
      { name: "MSSQL Server", context: "Enterprise database" },
      { name: "Active Directory / Kerberos", context: "Server-to-server auth" },
      { name: "MQTT / WebSocket", context: "Real-time IoT comms" },
      { name: "MySQL / PostgreSQL", context: "Database systems" },
      { name: "AWS / VPS", context: "Cloud deployment" },
      { name: "Git / GitHub", context: "Version control" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "tools",
    accent: "#64748b",
    items: [
      { name: "AWS", context: "Cloud hosting" },
      { name: "VPS", context: "Server deployment" },
      { name: "GitHub", context: "Version control" },
      { name: "Android Studio", context: "Mobile IDE" },
      { name: "VS Code", context: "Primary editor" },
      { name: "Postman", context: "API testing" },
      { name: "systemd", context: "Pi service management" },
      { name: "Google Maps SDK", context: "3Minutes Taxi" },
    ],
  },
];

export interface ScreenSection {
  title: string;
  description: string;
  screens: {
    image: string;
    label: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  category: "app" | "iot";
  summary: string;
  highlights: string[];
  tech: string[];
  images: string[];
  color?: string;
  logo?: string;
  preview?: string;
  previewType?: "phone" | "wide";
  mockupType?: "phone" | "kiosk";
  sections?: ScreenSection[];
}

export const experiences = [
  {
    role: "Mobile Application Developer & IoT Developer",
    company: "MOGI ALTIGAH",
    companyAr: "موجي الاتقان",
    companyDesc: "Vending Machine Solutions",
    logo: "/images/mogi-altigah-logo.webp",
    period: "12/2023 – Present",
    location: "Riyadh, Saudi Arabia",
    description: [
      "Led development of subscription-based meal delivery apps (SaladBar, Khozama) with IoT-integrated vending machines and smart locker pickup systems.",
      "Designed and built Wasfaty — an automated medication dispensing kiosk integrated with Saudi Arabia's national e-Prescribing platform (NUPCO), handling the full 9-step dispensing cycle.",
      "Developed and deployed the Ministry of Industry employee purchase system on dual Windows Server infrastructure \u2014 IIS web server with custom AppPool configuration, MSSQL database server, Kerberos delegation for secure Windows-integrated authentication between servers.",
      "Built Fushati — a school canteen management ecosystem with parent app, canteen manager app, NFC card scanning, and Google ML Kit face recognition.",
      "Integrated payment gateways (Moyasser, Interpay, Apple Pay, mada, Tamara, STC Pay) and QR code-based payment systems for vending machines.",
      "Built smart locker control services using Python on Raspberry Pi, communicating with Kerong lock boards via RS485 serial protocol and MQTT.",
      "Established a new company department focused on vending machine technology and payment integration.",
    ],
    projects: ["SaladBar Meals", "Fushati Canteen", "Khozama Meals", "Smart Vending App", "Wasfaty", "Smart Lockers", "Ministry of Industry", "Payment Integration"],
  },
  {
    role: "Full Stack Mobile Application Developer",
    company: "Full Screen",
    companyAr: "فل سكرين",
    companyDesc: "Media \u00B7 Advertising \u00B7 Exhibitions",
    logo: "/images/fullscreen-logo.png",
    logoWhite: true,
    period: "06/2023 – 12/2023",
    location: "Riyadh, Saudi Arabia",
    description: [
      "Built 3Minutes Taxi — a ride-hailing app trusted by 50,000+ customers, with real-time GPS tracking, multiple service tiers, and fixed pricing.",
      "Implemented application UI with custom widgets, rich animations, and seamless third-party API integrations using Flutter.",
      "Designed dynamic and complex functionality using BLoC design pattern for efficient state management and Clean Architecture principles.",
      "Integrated Google Maps SDK for real-time driver tracking, optimal route navigation, and location-based services.",
    ],
    projects: ["3Minutes Taxi"],
  },
];

export const projects: Project[] = [
  {
    slug: "ministry-of-industry",
    title: "Ministry of Industry \u2014 Employee Purchase System",
    company: "MOGI ALTIGAH",
    category: "iot",
    color: "#0d5e4f",
    logo: "/images/ministry-of-industry/ministry-logo.png",
    preview: "/images/ministry-of-industry/machine-front.jpg",
    previewType: "wide",
    summary:
      "Automated employee purchase system using NFC/RFID access cards with vending machines. Deployed on dual Windows Server infrastructure with IIS application pools, MSSQL database, and Kerberos authentication between web and database servers. Virtual daily point balance with classification-based quotas and purchase rules.",
    highlights: [
      "Dual Windows Server deployment: dedicated web server (IIS) and database server (MSSQL) with Kerberos-based authentication between them",
      "Custom IIS Application Pool configuration following security best practices for isolated process identity and least privilege",
      "MSSQL Server database with role-based access, stored procedures, and encrypted connections",
      "Kerberos delegation between IIS web server and MSSQL database server for secure Windows-integrated authentication",
      "NFC/RFID access card integration for contactless purchasing at vending machines",
      "Daily balance auto-recharge with classification-based rules (Manager, Supervisor, Employee, Technician)",
      "Slot-based category mapping (juices, meals, snacks) with per-classification purchase limits",
      "Admin panel with employee management, classification management, balance & recharge, vending machine registry, and reporting modules",
      "Real-time API validation of employee identity, daily quotas, and product category rules in under 1 second",
    ],
    tech: ["Windows Server", "IIS", "MSSQL", "Kerberos", "Active Directory", "Backend API", "NFC/RFID", "Vending Machine Hardware", "Admin Dashboard"],
    images: [],
  },
  {
    slug: "smart-lockers",
    title: "Smart Lockers",
    company: "MOGI ALTIGAH",
    category: "iot",
    color: "#06b6d4",
    preview: "/images/smart-lockers/locker-system.webp",
    previewType: "wide",
    summary:
      "Smart locker service built with Python on Raspberry Pi, communicating with locker board hardware via serial port for lock/unlock control.",
    highlights: [
      "Raspberry Pi-based locker control system",
      "Serial port communication with locker board hardware",
      "Remote lock/unlock via backend API and MQTT",
    ],
    tech: ["Python", "Raspberry Pi", "Serial Communication", "MQTT"],
    images: [],
  },
  {
    slug: "khozama-meals",
    title: "Khozama Meals",
    company: "AL KUZAMA TRADING CO",
    category: "app",
    color: "#1a3a4a",
    logo: "/images/khozama-meals/kuzama-logo.png",
    preview: "/images/khozama-meals/banner.png",
    previewType: "wide" as const,
    summary:
      "A smart meal subscription platform (Al Kuzama Trading Co / \u0634\u0631\u0643\u0629 \u0627\u0644\u062E\u0632\u0627\u0645\u0649 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629) for corporate workplaces. Employees subscribe via the app, choose daily meals, and collect them from Smart Locker machines at their office floor \u2014 the app decides who gets what, the machine just delivers. A complete digital food ecosystem: subscription management, meal planning, QR-based locker pickup, and an operations dashboard.",
    highlights: [
      "Smart Locker IoT integration: App \u2192 Backend API \u2192 MQTT \u2192 Lock Agent \u2192 Serial Port \u2192 Locker Board",
      "5-step onboarding wizard: profile, package, pickup location, meal planning, payment",
      "3 subscription tiers: Breakfast Only (120 SAR), Breakfast + Snack (180 SAR), Full Day (280 SAR) \u2014 with 3-month 20% discount",
      "Weekly meal planner with per-day breakfast, snack, and lunch selection",
      "Meal menu with cuisine filters (Eastern, English, International) and nutritional info (calories, protein, carbs, fats)",
      "Smart Locker = smart pickup point, not a vending machine \u2014 each box is assigned to a subscriber, opens only via QR",
      "Flexible machine placement: standalone on office floors or beside existing vending machines",
      "Operations dashboard: subscription management, box management, packing schedules, pickup monitoring, waste reports, per-floor usage reports",
      "Revenue share partnership model \u2014 full ecosystem management in exchange for revenue sharing",
      "AI-ready platform: daily demand prediction, smart meal suggestions, subscriber behavior analysis, waste reduction",
      "Multiple payment gateways: Visa, Mastercard, mada, Tamara, STC Pay, Apple Pay",
      "Push notifications for meal readiness, subscription reminders, and new menu items",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "MQTT", "RESTful APIs", "Smart Locker Hardware", "Payment Gateway"],
    images: [],
    sections: [
      {
        title: "Welcome & Brand",
        description: "The app opens with the Al Kuzama brand identity \u2014 elegant serif typography over warm food photography with a cozy fireplace ambiance. \u201cHealthy meals designed specifically for your workday.\u201d Users sign in with phone number, Google, or Apple ID.",
        screens: [
          { image: "/images/khozama-meals/screen-01.jpg", label: "Welcome Screen" },
          { image: "/images/khozama-meals/screen-03.jpg", label: "Welcome (Variant)" },
          { image: "/images/khozama-meals/screen-04.png", label: "Phone Login" },
        ],
      },
      {
        title: "Authentication",
        description: "Users enter their Saudi phone number (+966) and receive a 6-digit OTP for verification. The clean, minimal auth flow includes resend timer, phone number edit option, and clear error states for invalid codes.",
        screens: [
          { image: "/images/khozama-meals/screen-04.png", label: "Phone Input" },
          { image: "/images/khozama-meals/screen-05.png", label: "OTP Verification" },
          { image: "/images/khozama-meals/screen-12.png", label: "Profile Setup (Step 1)" },
        ],
      },
      {
        title: "Subscription Plans",
        description: "Step 2 of onboarding \u2014 users choose from 3 meal plans: Breakfast Only (120 SAR/mo), Breakfast + Light Meal (180 SAR/mo), or Full Day coverage (280 SAR/mo). Toggle between monthly and 3-month plans with a 20% discount. A meal schedule timetable shows delivery times for each meal type.",
        screens: [
          { image: "/images/khozama-meals/screen-13.png", label: "Package Selection" },
          { image: "/images/khozama-meals/screen-26.png", label: "Pickup Info & Locker Slot" },
          { image: "/images/khozama-meals/screen-29.png", label: "Coupon Code Applied" },
        ],
      },
      {
        title: "Meal Planning",
        description: "Step 4 \u2014 the weekly meal planner lets users customize their breakfast, snack, and lunch for each day (Sunday through Thursday). Users can browse the full menu filtered by cuisine type (Eastern, English, International), view nutritional info (calories, protein, carbs), and add favorites. A \u201crepeat last week\u201d option saves time.",
        screens: [
          { image: "/images/khozama-meals/screen-35.png", label: "Weekly Meal Planner" },
          { image: "/images/khozama-meals/screen-17.jpg", label: "Breakfast Menu" },
          { image: "/images/khozama-meals/screen-18.jpg", label: "Meal Detail & Nutrition" },
        ],
      },
      {
        title: "Payment & Checkout",
        description: "Step 5 \u2014 subscription summary with price breakdown (plan cost, company discount, subscription discount, total). Supports saved Visa/Mastercard cards, mada, Tamara (BNPL), STC Pay, and Apple Pay. Add new card via a bottom sheet modal. Success screen confirms the subscription is active.",
        screens: [
          { image: "/images/khozama-meals/screen-20.png", label: "Payment & Checkout" },
          { image: "/images/khozama-meals/screen-21.png", label: "Add New Card" },
          { image: "/images/khozama-meals/screen-23.png", label: "Subscription Success" },
        ],
      },
      {
        title: "Homepage & Daily View",
        description: "The main dashboard shows today\u2019s date with a weekly calendar strip, the current meal (with photo, description, and delivery time window), and the assigned locker info (floor, machine number, slot). Users can modify meals, view the upcoming week\u2019s schedule, and quickly navigate to the food menu or orders tab.",
        screens: [
          { image: "/images/khozama-meals/screen-30.png", label: "Today\u2019s Menu" },
          { image: "/images/khozama-meals/screen-34.png", label: "Edit Meal" },
          { image: "/images/khozama-meals/screen-33.png", label: "No Meals Scheduled" },
        ],
      },
      {
        title: "Notifications & Settings",
        description: "Push notifications inform users when meals are ready for pickup (\u201cYour meal is waiting!\u201d), subscription renewal reminders, and new menu additions. The settings screen includes account management, payment methods, terms & conditions, WhatsApp support, and logout. Users can edit their profile and change phone numbers with OTP re-verification.",
        screens: [
          { image: "/images/khozama-meals/screen-37.png", label: "Notifications" },
          { image: "/images/khozama-meals/screen-39.png", label: "Settings" },
          { image: "/images/khozama-meals/screen-40.png", label: "Account Details" },
        ],
      },
    ],
  },
  {
    slug: "3minutes-taxi",
    title: "3Minutes Taxi",
    company: "Full Screen",
    category: "app",
    color: "#1B5E3B",
    logo: "/images/3minutes-taxi/logo.png",
    preview: "/images/3minutes-taxi/banner.jpg",
    previewType: "wide" as const,
    summary:
      "A ride-hailing taxi app operating in Saudi Arabia connecting passengers with professional drivers. Features real-time GPS tracking, multiple service tiers (daily commute, family transport, business VIP, delivery), fixed pricing with no surge charges, and multiple payment options. Trusted by over 50,000 customers.",
    highlights: [
      "Real-time ride booking with GPS driver tracking and optimal route navigation",
      "Multiple service tiers: daily commutes, family transport, business VIP, and passenger delivery",
      "Fixed pricing without surge charges during peak hours",
      "Multiple payment options: bank cards, e-wallets, and cash",
      "Driver rating and selection system for passenger safety",
      "Captain (driver) portal with flexible work hours, income calculator, and earnings withdrawal",
      "Trip history tracking and monthly financial rewards for drivers",
      "24/7 customer support and comprehensive driver vetting system",
      "Custom UI widgets and rich animations throughout the app",
      "Available on both Google Play Store and Apple App Store",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Google Maps", "RESTful APIs", "Animations", "GPS Tracking", "Payment Gateway"],
    images: ["/images/3minutes-taxi/screens.png"],
    sections: [
      {
        title: "Splash & Onboarding",
        description: "The app opens with the 3Minute branded splash screen featuring the bilingual logo (Arabic/English). An onboarding screen introduces the service \u2014 \u201cOrder your car with confidence\u201d \u2014 requesting location permission. A language selector supports English (US) and Arabic for a fully localized RTL/LTR experience.",
        screens: [
          { image: "/images/3minutes-taxi/screen-01.png", label: "Splash Screen" },
          { image: "/images/3minutes-taxi/screen-02.png", label: "Onboarding & Permissions" },
          { image: "/images/3minutes-taxi/screen-03.png", label: "Language Selection" },
        ],
      },
      {
        title: "Authentication",
        description: "Users sign in with their Saudi phone number (+966) and agree to terms of service and privacy policy. A 4-digit OTP is sent to the phone for secure verification. The clean, minimal auth flow gets users into the app in seconds.",
        screens: [
          { image: "/images/3minutes-taxi/screen-04.png", label: "Phone Login" },
          { image: "/images/3minutes-taxi/screen-05.png", label: "OTP Verification" },
          { image: "/images/3minutes-taxi/screen-23.png", label: "Registration Form" },
        ],
      },
      {
        title: "Home & Destination",
        description: "The home screen shows a live Google Maps view centered on the user\u2019s location in Riyadh with a personalized greeting. Users enter their destination or pick from saved/recent locations (Work, Home, School). The map updates in real-time with route pins as users search and confirm their destination.",
        screens: [
          { image: "/images/3minutes-taxi/screen-06.png", label: "Home Map" },
          { image: "/images/3minutes-taxi/screen-07.png", label: "Saved Destinations" },
          { image: "/images/3minutes-taxi/screen-08.png", label: "Destination Search" },
        ],
      },
      {
        title: "Ride Booking & Driver Matching",
        description: "After confirming the destination, users select a ride type (economy, 3Minute standard, VIP, or ladies-only) with transparent pricing in SAR. A scanning animation searches for nearby drivers. Once matched, the driver\u2019s full profile appears \u2014 name, star rating, car model, plate number, and live ETA on the map.",
        screens: [
          { image: "/images/3minutes-taxi/screen-09.png", label: "Ride Type Selection" },
          { image: "/images/3minutes-taxi/screen-10.png", label: "Finding Driver" },
          { image: "/images/3minutes-taxi/screen-11.png", label: "Driver Matched" },
        ],
      },
      {
        title: "Live Tracking & Trip",
        description: "Real-time GPS tracking shows the driver\u2019s route to pickup and then to the destination. An SOS button is available for emergencies. The arrival ETA badge updates live. At trip end, a detailed summary shows base fare, distance, waiting time, taxes, and total cost in SAR with a cash payment option.",
        screens: [
          { image: "/images/3minutes-taxi/screen-12.png", label: "Live Tracking" },
          { image: "/images/3minutes-taxi/screen-13.png", label: "Trip Summary & Fare" },
          { image: "/images/3minutes-taxi/screen-14.png", label: "Driver Rating" },
        ],
      },
      {
        title: "Notifications & Trip History",
        description: "The notifications center displays ride alerts with timestamps. An illustrated empty state appears when there are no new notifications. The trip history screen logs all completed rides with request ID, driver name, fare, route details, and dates \u2014 with tabs for completed and cancelled trips.",
        screens: [
          { image: "/images/3minutes-taxi/screen-16.png", label: "Notifications" },
          { image: "/images/3minutes-taxi/screen-17.png", label: "Empty Notifications" },
          { image: "/images/3minutes-taxi/screen-18.png", label: "Trip History" },
        ],
      },
      {
        title: "Wallet & Referral",
        description: "The digital wallet shows the current balance in SAR with a full transaction log of trip spending. Users can add funds to their wallet. A referral program lets users invite friends with a unique code and earn 30 SAR per successful referral.",
        screens: [
          { image: "/images/3minutes-taxi/screen-20.png", label: "Wallet Balance" },
          { image: "/images/3minutes-taxi/screen-21.png", label: "Refer a Friend" },
          { image: "/images/3minutes-taxi/screen-19.png", label: "Saved Addresses" },
        ],
      },
      {
        title: "Profile & Settings",
        description: "The side drawer menu provides quick access to all app sections \u2014 notifications, trips, wallet, favorites, language, about, and support. Users edit their profile with photo upload, name, email, and phone. The About page links to terms & conditions, privacy policy, and company info. Made with love in Jeddah.",
        screens: [
          { image: "/images/3minutes-taxi/screen-15.png", label: "Side Menu" },
          { image: "/images/3minutes-taxi/screen-24.png", label: "Edit Profile" },
          { image: "/images/3minutes-taxi/screen-22.png", label: "About" },
        ],
      },
    ],
  },
  {
    slug: "smart-vending-app",
    title: "Smart Vending App",
    company: "MOGI ALTIGAH",
    category: "app",
    color: "#6AB04C",
    logo: "/images/saladbar-meals/logo.png",
    preview: "/images/smart-vending-app/screen-09.png",
    previewType: "phone" as const,
    summary:
      "A mobile companion app for SaladBar smart vending machines. Users scan a QR code on the machine, browse available products by category (food, drinks, snacks), add items to cart, and pay via credit card, Apple Pay, or PayPal — all from their phone. The machine dispenses the product after payment confirmation.",
    highlights: [
      "QR code scanning to connect to a specific vending machine — camera-based with real-time scanning animation",
      "Product catalog with category filters: All Products, Coca-Cola, Chipsy, Indomie — fetched live from machine inventory",
      "Product detail view with photo, description, price in SAR, quantity selector, and promo code support",
      "Shopping cart with subtotal, taxes, and total calculation — multi-item ordering in a single session",
      "Multiple payment methods: Credit/Debit Card, Apple Pay, PayPal — with saved card management",
      "Credit card management: add new cards, view saved cards with carousel, edit/delete cards",
      "Payment success/failure flows with clear feedback — confetti animation on success, retry on failure",
      "Vending machine dispenses product automatically after successful payment confirmation",
      "Skeleton loading states for product grid while fetching from machine API",
      "Comprehensive error handling: no internet, no products available, payment failure, machine unavailable",
      "Full Arabic RTL support for bilingual user experience",
      "Built with Flutter using BLoC pattern and Clean Architecture",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "QR Code Scanner", "Vending Machine API", "Apple Pay", "PayPal", "Credit Card", "RESTful APIs"],
    images: [],
    sections: [
      {
        title: "Splash & Onboarding",
        description: "The app opens with the SaladBar bilingual splash screen. A 2-step onboarding introduces the service: 'Welcome to SaladBar — the largest self-service vending chain for fresh salads and snacks' followed by QR code scanning instructions.",
        screens: [
          { image: "/images/smart-vending-app/screen-01.png", label: "Splash Screen" },
          { image: "/images/smart-vending-app/screen-02.png", label: "Onboarding — Welcome" },
          { image: "/images/smart-vending-app/screen-03.png", label: "Onboarding — QR Scanner" },
        ],
      },
      {
        title: "QR Code Scanning",
        description: "Users scan the QR code displayed on the vending machine to connect their phone to that specific machine. The scanner shows a live camera feed with a green frame overlay, scanning animation line, and loading spinner during QR processing.",
        screens: [
          { image: "/images/smart-vending-app/screen-04.png", label: "QR Scanner — Ready" },
          { image: "/images/smart-vending-app/screen-05.png", label: "QR Scanner — Scanning Line" },
          { image: "/images/smart-vending-app/screen-06.png", label: "QR Scanner — Processing" },
        ],
      },
      {
        title: "Product Catalog",
        description: "After scanning, the app fetches the product inventory from that machine in real-time. Products display in a grid with category tabs (All, Coca-Cola, Chipsy, Indomie). Each product card shows a photo, Arabic name, category, and price in SAR. A skeleton loading state shows while products load.",
        screens: [
          { image: "/images/smart-vending-app/screen-07.png", label: "Loading Products" },
          { image: "/images/smart-vending-app/screen-08.png", label: "Products — Skeleton" },
          { image: "/images/smart-vending-app/screen-09.png", label: "Product Catalog" },
        ],
      },
      {
        title: "Product Details & Cart",
        description: "Tapping a product opens a detail view with photo, description, price in SAR, quantity selector (+/-), promo code input, subtotal/taxes/total breakdown, and a 'Go to Payment' button.",
        screens: [
          { image: "/images/smart-vending-app/screen-10.png", label: "Product Detail — Pepsi" },
        ],
      },
      {
        title: "Payment Methods",
        description: "Three payment options: Credit Card (primary), Apple Pay, and PayPal. The credit card flow includes a saved card carousel with card number, holder name, and expiry. Users can add new cards with a full form (card number, expiry, CVV, holder name).",
        screens: [
          { image: "/images/smart-vending-app/screen-11.png", label: "Payment Methods" },
          { image: "/images/smart-vending-app/screen-12.png", label: "No Card — Add New" },
          { image: "/images/smart-vending-app/screen-13.png", label: "Saved Card" },
        ],
      },
      {
        title: "Card Management",
        description: "Full credit card lifecycle: add new card form with validation, saved card carousel with edit/delete buttons, card added success confirmation, and card failure handling.",
        screens: [
          { image: "/images/smart-vending-app/screen-14.png", label: "Add Card Form" },
          { image: "/images/smart-vending-app/screen-15.png", label: "Card Added — Success" },
          { image: "/images/smart-vending-app/screen-16.png", label: "Card Failed" },
        ],
      },
      {
        title: "Payment & Dispensing",
        description: "After payment, the app shows success with a confetti animation and prompts the user to collect the product from the machine. Payment failure shows an error with retry. The machine dispenses automatically after backend confirmation.",
        screens: [
          { image: "/images/smart-vending-app/screen-17.png", label: "Payment Success — Confetti" },
          { image: "/images/smart-vending-app/screen-18.png", label: "Payment Error" },
          { image: "/images/smart-vending-app/screen-19.png", label: "Payment Success — Checkmark" },
        ],
      },
      {
        title: "Dispensing Confirmation & States",
        description: "Final confirmation screens after product dispensing with confetti celebration. Comprehensive error states handle edge cases: no internet connection, machine error, and empty inventory.",
        screens: [
          { image: "/images/smart-vending-app/screen-20.png", label: "Dispense Success — Collect" },
          { image: "/images/smart-vending-app/screen-21.png", label: "Error — Something Wrong" },
          { image: "/images/smart-vending-app/screen-22.png", label: "No Internet" },
          { image: "/images/smart-vending-app/screen-23.png", label: "No Products Available" },
        ],
      },
    ],
  },
  {
    slug: "saladbar-meals",
    title: "SaladBar Meals",
    company: "MOGI ALTIGAH",
    category: "app",
    color: "#6AB04C",
    logo: "/images/saladbar-meals/logo.png",
    preview: "/images/saladbar-meals/banner.jpg",
    previewType: "wide" as const,
    summary:
      "Subscription-based healthy meal delivery app with QR code vending machine pickup. Users choose dietary packages (Low-carb, Balanced), select weekly/monthly plans, customize meal combos, and collect meals by scanning QR codes on vending machines. Features a built-in wallet system with Apple Pay integration.",
    highlights: [
      "Led a team of developers, resulting in increased company revenue and new business opportunities",
      "4-step onboarding with illustrated slides: snack anytime, freshness monitoring, taste variety, seamless QR pickup",
      "Two audience modes: Office employees and Gym-goers with tailored packages",
      "Dietary packages: Low-carb and Balanced with detailed nutritional descriptions",
      "Weekly (400 SAR) and Monthly (1200 SAR) subscription plans",
      "QR code scanning to retrieve meals from vending machines",
      "Built-in wallet with Apple Pay, Visa/Mastercard recharge, and transaction history",
      "Weekly meal tracker with day-by-day progress visualization",
      "Combo meal selection with weight, calorie count, and date-based scheduling",
      "Apple PassKit & Google Wallet digital card integration for Moyasser payment gateway",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Moyasser SDK", "Apple PassKit", "Google Wallet", "RESTful APIs", "QR Code"],
    images: [],
    sections: [
      {
        title: "Splash & Onboarding",
        description: "The app opens with the SaladBar bilingual logo (Arabic/English) on a warm cream background. A 4-slide onboarding introduces the service: \u201cHave a Snack Anytime\u201d with illustrated food trays, \u201cIt\u2019s Always Fresh\u201d highlighting remotely monitored vending machines, \u201cPick Your Taste\u201d showcasing variety, and \u201cSeamless Pick-up Experience\u201d explaining the QR code flow.",
        screens: [
          { image: "/images/saladbar-meals/screen-01.png", label: "Splash Screen" },
          { image: "/images/saladbar-meals/screen-02.png", label: "Onboarding \u2014 Snack Anytime" },
          { image: "/images/saladbar-meals/screen-05.png", label: "Onboarding \u2014 QR Pickup" },
        ],
      },
      {
        title: "Authentication & Profile",
        description: "Users log in with their phone number and verify via OTP. New users complete a 2-step registration: name & email, then date of birth, workplace (e.g. Ministry of Higher Education), and gender. A success screen confirms verification with a hexagonal checkmark animation.",
        screens: [
          { image: "/images/saladbar-meals/screen-06.png", label: "Phone Login" },
          { image: "/images/saladbar-meals/screen-08.png", label: "OTP Verification" },
          { image: "/images/saladbar-meals/screen-10.png", label: "Create Account (Step 1)" },
        ],
      },
      {
        title: "Dietary Packages & Plans",
        description: "Users choose their audience mode \u2014 \u201cMeals for employees\u201d (office) or \u201cMeals for Gym bros\u201d (fitness). Then select a dietary package: Low-carb or Balanced, each with detailed nutritional descriptions and food photography. Plans are available as Weekly (400 SAR) or Monthly (1200 SAR) subscriptions.",
        screens: [
          { image: "/images/saladbar-meals/screen-24.png", label: "Audience Selection" },
          { image: "/images/saladbar-meals/screen-35.jpg", label: "Dietary Packages" },
          { image: "/images/saladbar-meals/screen-29.png", label: "Plan Selection" },
        ],
      },
      {
        title: "Meal Selection & Combos",
        description: "Users select subscription days and pick meals for each day from available combos. Each combo shows food photos, weight in grams, and calorie count. A starting day picker lets users choose when their subscription begins. The checkout screen shows an order summary with coupon support and Salad Bar Wallet as the payment method.",
        screens: [
          { image: "/images/saladbar-meals/screen-30.png", label: "Select Meals & Days" },
          { image: "/images/saladbar-meals/screen-40.png", label: "Pick a Combo" },
          { image: "/images/saladbar-meals/screen-31.png", label: "Checkout" },
        ],
      },
      {
        title: "Home & QR Vending",
        description: "The home dashboard greets the user by name, shows today\u2019s or tomorrow\u2019s meal with photo, weight, and calories, and a weekly meal tracker with day-by-day progress dots. The \u201cGet Your Meal\u201d button opens the QR scanner to scan the vending machine code. The camera recognizes the machine and dispenses the meal.",
        screens: [
          { image: "/images/saladbar-meals/screen-66.png", label: "Home \u2014 Today\u2019s Meal" },
          { image: "/images/saladbar-meals/screen-67.png", label: "Home \u2014 Tomorrow\u2019s Meal" },
          { image: "/images/saladbar-meals/screen-68.png", label: "QR Code Scanner" },
        ],
      },
      {
        title: "Wallet & Payments",
        description: "The built-in Salad Bar Wallet displays the current balance in SAR with a colorful illustrated header. Users recharge with preset amounts (100\u20131000 SAR) or custom amounts. Payment supports Apple Pay and manual card entry (Visa, Mastercard). Transaction history shows credited and debited entries.",
        screens: [
          { image: "/images/saladbar-meals/screen-50.png", label: "Wallet Balance" },
          { image: "/images/saladbar-meals/screen-52.png", label: "Recharge Balance" },
          { image: "/images/saladbar-meals/screen-53.png", label: "Apple Pay & Card Payment" },
        ],
      },
      {
        title: "Subscriptions & Profile",
        description: "The Manage Subscriptions screen shows active and expired plans with options to manage meals or pause the plan. The side drawer menu provides quick access to Profile, Subscriptions, Wallet, Contact, and Language settings. Users can edit personal info and switch between English and Arabic.",
        screens: [
          { image: "/images/saladbar-meals/screen-47.png", label: "Manage Subscriptions" },
          { image: "/images/saladbar-meals/screen-28.png", label: "Side Menu" },
          { image: "/images/saladbar-meals/screen-45.png", label: "Profile" },
        ],
      },
    ],
  },
  {
    slug: "fushati-canteen",
    title: "Fushati Canteen",
    company: "MOGI ALTIGAH",
    category: "app",
    color: "#00C9A7",
    logo: "/images/fushati-canteen/logo.png",
    preview: "/images/fushati-canteen/banner.jpg",
    previewType: "wide" as const,
    summary:
      "A new experience for school cafeterias \u2014 Fushati (\u0641\u0633\u062D\u062A\u064A) is a comprehensive canteen management solution empowering parents to monitor children\u2019s daily expenses, set spending limits, and top up digital student cards. Features NFC card scanning, face recognition, Apple Pay integration, and full Arabic RTL support.",
    highlights: [
      "Enhanced parental control: monitor children\u2019s daily expenses and set personalized spending limits",
      "Digital student card system with unique card number, balance tracking, and transaction history",
      "NFC card scanning for easy payment card registration at the canteen",
      "Google ML Kit face recognition for secure student authentication",
      "Top-up via Apple Pay, Visa, Mastercard, and mada payment gateways",
      "Card verification modal showing student name, phone, and card details before confirmation",
      "Full Arabic RTL support for bilingual (Arabic/English) user experience",
      "Multi-app ecosystem: parent app, canteen manager app, and admin dashboard",
      "Transaction history with credited/debited entries and timestamps",
      "Card management: add new cards, top up balance, delete cards",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "Google ML Kit", "NFC", "Apple Pay", "mada", "RESTful APIs"],
    images: [],
    sections: [
      {
        title: "Splash & Onboarding",
        description: "The app opens with the Fushati (\u0641\u0633\u062D\u062A\u064A) bilingual logo on a soft mint gradient. The tagline \u201cA new experience for school cafeterias\u201d introduces the service. An onboarding slide highlights \u201cEnhanced Parental Control\u201d \u2014 empowering parents to monitor their children\u2019s daily expenses and set personalized spending limits.",
        screens: [
          { image: "/images/fushati-canteen/screen-01.png", label: "Splash \u2014 Tagline" },
          { image: "/images/fushati-canteen/screen-02.png", label: "Onboarding \u2014 Parental Control" },
          { image: "/images/fushati-canteen/screen-06.png", label: "Home \u2014 Empty State" },
        ],
      },
      {
        title: "Authentication",
        description: "Parents log in with their Saudi phone number (+966). A 5-digit activation code is sent via SMS for verification. The code entry screen shows a countdown timer for resend. On success, a green \u201cAll set!\u201d screen with an animated OK hand confirms verification and redirects to the home page.",
        screens: [
          { image: "/images/fushati-canteen/screen-03.png", label: "Phone Login" },
          { image: "/images/fushati-canteen/screen-04.png", label: "OTP Verification" },
          { image: "/images/fushati-canteen/screen-05.png", label: "Verification Success" },
        ],
      },
      {
        title: "Student Card Setup",
        description: "Parents add their child\u2019s student card by entering the card number. A verification modal displays the student\u2019s full details \u2014 name, phone number, creation date, and card number \u2014 for confirmation before linking. On success, the card appears on the home screen showing the balance in Saudi Riyals with a \u201cManage\u201d button.",
        screens: [
          { image: "/images/fushati-canteen/screen-09.png", label: "Add New Card" },
          { image: "/images/fushati-canteen/screen-10.png", label: "Card Verification" },
          { image: "/images/fushati-canteen/screen-11.png", label: "Card Added Success" },
        ],
      },
      {
        title: "Home & Card Management",
        description: "The home dashboard displays the student\u2019s digital card with card number, student name, phone, and current balance in R.S (Saudi Riyals). Parents can add multiple cards for different children. The Manage Card screen shows top-up and delete options alongside a full transaction history with credited/debited entries, amounts, transaction IDs, and timestamps.",
        screens: [
          { image: "/images/fushati-canteen/screen-12.png", label: "Home \u2014 Student Card" },
          { image: "/images/fushati-canteen/screen-13.png", label: "Manage Card & History" },
          { image: "/images/fushati-canteen/screen-19.png", label: "Arabic RTL \u2014 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A" },
        ],
      },
      {
        title: "Top Up & Payments",
        description: "Parents top up their child\u2019s card with preset amounts (100\u20131000 SAR) via a bottom sheet. Payment supports Apple Pay and manual card entry (Visa, Mastercard, mada). The payment gateway shows merchant details, card holder info, and amount. A processing spinner appears during the transaction, followed by a success or failure dialog.",
        screens: [
          { image: "/images/fushati-canteen/screen-14.png", label: "Top Up Amount" },
          { image: "/images/fushati-canteen/screen-15.png", label: "Apple Pay & Card Payment" },
          { image: "/images/fushati-canteen/screen-17.png", label: "Payment Success" },
        ],
      },
      {
        title: "Profile & Settings",
        description: "The side drawer menu provides access to Profile, Contact Us, App Language, and Log Out. The profile setup collects name, email, and gender. Profile completion is prompted via a green badge in the menu. The app supports full Arabic RTL layout switching for a bilingual experience.",
        screens: [
          { image: "/images/fushati-canteen/screen-07.png", label: "Side Menu" },
          { image: "/images/fushati-canteen/screen-08.png", label: "Profile Details" },
          { image: "/images/fushati-canteen/screen-21.png", label: "Menu \u2014 Completed Profile" },
        ],
      },
    ],
  },
  {
    slug: "wasfty",
    title: "Wasfty \u2014 Automated Medication Dispensing",
    company: "MOGI ALTIGAH",
    category: "iot",
    color: "#1B3A5C",
    logo: "/images/wasfty/banner.png",
    preview: "/images/wasfty/banner.png",
    previewType: "wide" as const,
    mockupType: "kiosk",
    summary:
      "A self-service pharmacy kiosk that replaces traditional pharmacy counters with vending machines. Integrated with Saudi Arabia\u2019s national Wasfaty (NUPCO) e-Prescribing platform. Patients scan a QR code or enter a prescription reference number, and the machine automatically dispenses their medications with printed labels \u2014 no pharmacist counter needed.",
    highlights: [
      "Full 9-step Wasfaty dispensing cycle: download eRx, trade advisor, patient history, payer authorization, claim submission",
      "YS Spring Vending Machine platform with 15\u201321\u2033 capacitive touchscreen, QR scanner, spring motor dispensers, and drop sensors",
      "Android kiosk app built with Kotlin + Jetpack Compose running on YS 5\u2033 mainboard",
      "Bilingual UI (Arabic/English) with real-time language toggle for patient interaction",
      "QR code scanning + manual reference number entry with National ID for prescription lookup",
      "Prescription preview screen showing patient details, prescribing hospital, available medications with dosage and quantities",
      "Automated spring motor dispensing with per-slot infrared drop detection to verify delivery",
      "Thermal label printing (ESC/POS) with medication name, dosage, and instructions in Arabic + English",
      "Admin panel with PIN-protected access: lift control, door/partition toggles, LED/heating controls, slot configuration (spring/belt), merge/split slots, factory reset",
      "Backend integration via WebSocket for real-time heartbeat, inventory sync, and transaction reporting",
      "Offline mode with local caching and automatic retry when connectivity is restored",
      "SFDA, NHIC, SCFHS regulatory compliance for medication dispensing in Saudi Arabia",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Android", "YS Vending SDK", "WebSocket", "Retrofit", "Room DB", "QR Code", "ESC/POS Printer", "Wasfaty NUPCO APIs", "REST APIs"],
    images: [],
    sections: [
      {
        title: "Welcome & QR Scan",
        description: "The kiosk greets patients with the Wasfaty (\u0648\u0635\u0641\u062A\u064A) bilingual logo and \u201cWelcome to Self-Service Pharmacy.\u201d The header bar shows the machine ID (VM-XYS-001), location (Riyadh Central Mall \u2014 Floor 1), online status, and last sync time. Patients scan their prescription QR code using the built-in 2D barcode scanner, or manually enter the Reference Number from their SMS along with their National ID.",
        screens: [
          { image: "/images/wasfty/screen-01.png", label: "Welcome \u2014 QR Scan & Manual Entry" },
          { image: "/images/wasfty/screen-02.png", label: "Scanning Prescription" },
        ],
      },
      {
        title: "Prescription Preview",
        description: "After scanning, the system downloads the e-prescription from the Wasfaty Hub and displays full details: patient name (masked for privacy), National ID, prescribing date, hospital (e.g. King Fahad Hospital), and number of available medications. Each medication card shows the drug name (e.g. Panadol Extra 500mg), form (Tablet), dosage (500mg, Oral), quantity (1 box), and availability status with a green checkmark. The patient confirms with \u201cConfirm & Dispense.\u201d",
        screens: [
          { image: "/images/wasfty/screen-03.png", label: "Prescription Details & Medications" },
        ],
      },
      {
        title: "Processing & Authorization",
        description: "The system processes the prescription through the full Wasfaty 9-step cycle: authorization request to the payer, polling for approval, downloading the result, and preparing for dispensing. A circular progress indicator shows the percentage with bilingual text \u2014 \u201cProcessing your prescription / \u062C\u0627\u0631\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0648\u0635\u0641\u0629 \u0627\u0644\u0637\u0628\u064A\u0629.\u201d The process may take up to 2 minutes depending on payer response.",
        screens: [
          { image: "/images/wasfty/screen-04.png", label: "Processing Prescription (26%)" },
        ],
      },
      {
        title: "Dispensing Medications",
        description: "Once authorized, the machine activates the spring motor for each medication slot. The screen shows each drug being dispensed with a progress counter (e.g. \u201cDispensing\u2026 0 of 1\u201d). A yellow warning banner reads \u201c\u26A0 DO NOT LEAVE \u2014 Please wait until all items are dispensed / \u0644\u0627 \u062A\u063A\u0627\u062F\u0631.\u201d Drop sensors verify each item fell into the collection tray. If a drop is not detected, the system retries the slot automatically.",
        screens: [
          { image: "/images/wasfty/screen-05.png", label: "Dispensing \u2014 DO NOT LEAVE" },
        ],
      },
      {
        title: "Completion & Collection",
        description: "A green checkmark confirms \u201cDispensing Complete! / \u0625\u062A\u0645 \u0635\u0631\u0641 \u0627\u0644\u0623\u062F\u0648\u064A\u0629 \u0628\u0646\u062C\u0627\u062D.\u201d Instructions tell the patient to collect medications from the pickup tray and printed labels from the printer slot. The dispensed medications list is shown with a checkmark. A support hotline number (800-XXX-XXXX) is displayed. The session auto-closes after 67 seconds. If an error occurs, the patient sees a red \u201cUnable to Process\u201d screen with retry and support options.",
        screens: [
          { image: "/images/wasfty/screen-06.png", label: "Dispensing Complete \u2014 Collect Items" },
          { image: "/images/wasfty/screen-07.png", label: "Error \u2014 Unable to Process" },
        ],
      },
      {
        title: "Admin Panel",
        description: "Technicians access the admin panel via a PIN-protected lock screen. The panel provides full hardware control across 7 tabs: Dashboard (machine status), Shipment (inventory), Lift (floor control with Move Up / Return to Home), Temperature monitoring, Diagnostics, Slots (spring/belt per slot, merge/split, batch operations, factory reset), API settings, and Network configuration. Door & Partition toggles and LED/Glass Heating ON/OFF controls allow remote hardware management.",
        screens: [
          { image: "/images/wasfty/screen-08.png", label: "Admin PIN Access" },
          { image: "/images/wasfty/screen-09.png", label: "Lift, Door & Hardware Controls" },
          { image: "/images/wasfty/screen-10.png", label: "Slot Config & Factory Reset" },
        ],
      },
    ],
  },
  {
    slug: "payment-integration",
    title: "Payment Integration",
    company: "MOGI ALTIGAH",
    category: "iot",
    color: "#f59e0b",
    summary:
      "Integrated vending machines with Interpay and digital payment providers. QR code-based payment systems and POS terminal connectivity via USB APIs.",
    highlights: [
      "Interpay payment and refund processing for vending machines",
      "QR code-based payment system design",
      "POS terminal integration via USB APIs",
      "Real-time inventory management via backend APIs",
      "Established a new company department focused on vending machine technology",
    ],
    tech: ["Interpay", "Digital Payments", "QR Code", "USB APIs", "RESTful APIs"],
    images: [],
  },
]

export const education = {
  degree: "Bachelor of Science, Software Engineering",
  university: "Sudan University of Science and Technology",
  period: "11/2016 \u2013 03/2022",
  location: "Khartoum, Sudan",
  gpa: "3.08 / 4.0",
  organizations: [
    {
      name: "IEEE SUSTech Student Branch",
      roles: [
        "Project Team Volunteer \u2014 Developing Mobile Applications using Flutter (2020\u20132021)",
        "Project Team Vice-Leader (2022)",
      ],
    },
  ],
};
