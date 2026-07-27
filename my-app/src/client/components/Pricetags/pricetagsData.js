export const PRESETS_DATA = [
  {
    id: 'landing',
    title: 'Landing Page',
    subtitle: 'Up to 1 page',
    price: 149,
    features: ['1 Page', 'Basic Design', 'Contact Form', 'Deployment Included']
  },
  {
    id: 'starter',
    title: 'Starter Website',
    subtitle: 'Up to 5 pages',
    price: 449,
    features: ['Up to 5 Pages', 'Basic Design', 'Mobile Friendly', 'SEO Basics']
  },
  {
    id: 'business-preset',
    title: 'Business Website',
    subtitle: 'Up to 10 pages',
    price: 699,
    isPopular: true,
    features: ['Up to 10 Pages', 'Analytics', 'Maps', 'Contact Forms']
  },
  {
    id: 'corporate',
    title: 'Corporate Website',
    subtitle: 'Up to 20 pages',
    price: 1199,
    features: ['Up to 20 Pages', 'Advanced UI', 'Blog/News', 'Full Setup']
  },
  {
    id: 'ecommerce-preset',
    title: 'E-Commerce Website',
    subtitle: 'Online store ready',
    price: 1499,
    features: ['Product Catalogue', 'Cart & Checkout', 'Stripe/PayPal', 'Stock Control']
  },
  {
    id: 'custom-app',
    title: 'Custom Web Application',
    subtitle: 'Bespoke web platform',
    price: 2499,
    features: ['Custom Features', 'API Integrations', 'User Portal', 'Scalable Architecture']
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'packages',
    title: 'Website Package',
    subtitle: 'Core website structure',
    iconName: 'LayoutGrid',
    items: [
  {
    id: 'pkg-landing',
    title: 'Landing Page',
    price: 149,
    desc: 'Up to 1 page.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134298/photo-1642132652860-471b4228023e_z5oal1.avif' // Современный макет с CTA
  },
  {
    id: 'pkg-starter',
    title: 'Starter Website',
    price: 449,
    desc: 'Up to 5 pages.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134573/photo-1605988177955-9e58df5fed05_wz3uli.jpg' // Профессиональный дизайн для малого бизнеса
  },
  {
    id: 'pkg-business',
    title: 'Business Website',
    price: 699,
    desc: 'Up to 10 pages.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134801/photo-1651129522701-24a5cf4384c5_qubsuo.jpg' // Сложный, информативный бизнес-сайт
  },
  {
    id: 'pkg-corporate',
    title: 'Corporate Website',
    price: 1199,
    desc: 'Up to 20 pages.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134719/photo-1649442279006-8bccb4cc63e1_tqn346.jpg' // Строгий и солидный корпоративный стиль
  },
  {
    id: 'pkg-ecom',
    title: 'E-Commerce Website',
    price: 1499,
    desc: 'Complete online store.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134657/photo-1651126434060-6270c0a23326_wna6yx.jpg' // Крупный план товара для интернет-магазина
  },
  {
    id: 'pkg-app',
    title: 'Custom Web Application',
    price: 2499,
    desc: 'Bespoke web application from £2,499.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134872/photo-1560888787-ce64cc34bdd6_pumlkb.jpg' // Пример нестандартного дашборда или приложения
  }
]
  },
  {
    id: 'design-ui',
    title: 'Design & UI',
    subtitle: 'Visual style and branding upgrades',
    iconName: 'Palette',
    items: [
  {
    id: 'ui-modern',
    title: 'Modern Design',
    price: 149,
    desc: 'Clean, modern visual style.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785135056/photo-1665554306521-86afb5cb008a_k7wka0.jpg' // Современный UI дизайн
  },
  {
    id: 'ui-premium',
    title: 'Premium Design',
    price: 349,
    desc: 'Tailored aesthetic for growing brands.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&h=400&fit=crop&q=80' // Премиальный интерфейс с золотыми акцентами
  },
  {
    id: 'ui-luxury',
    title: 'Luxury Design',
    price: 699,
    desc: 'Bespoke high-end design styling.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop&q=80' // Роскошный дизайн с мрамором и золотом
  },
  {
    id: 'ui-custom',
    title: 'Complete Custom Design',
    price: 1199,
    desc: '100% custom UI from scratch.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785134956/photo-1561070791-2526d30994b5_vqzzor.jpg' // Уникальный кастомный интерфейс
  },
  {
    id: 'ui-ux-res',
    title: 'UX Research',
    price: 149,
    desc: 'User journey mapping and analysis.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop&q=80' // UX исследования и карты пользователя
  },
  {
    id: 'ui-wireframes',
    title: 'Wireframes',
    price: 99,
    desc: 'Layout blueprints before design.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785135218/photo-1602064172250-43f8909056c7_ecu7v6.jpg' // Схематические макеты
  },
  {
    id: 'ui-mobile-first',
    title: 'Mobile First Design',
    price: 79,
    desc: 'Optimised primarily for mobile displays.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80' // Телефон с мобильным интерфейсом
  },
  {
    id: 'ui-tablet-opt',
    title: 'Tablet Optimization',
    price: 49,
    desc: 'Pixel-perfect rendering on tablets.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785135274/photo-1597534458220-9fb4969f2df5_i3iwbb.jpg' // Планшет с интерфейсом
  },
  {
    id: 'ui-desktop-opt',
    title: 'Desktop Optimization',
    price: 49,
    desc: 'Enhanced view for large desktop monitors.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785135361/photo-1585229259126-8e72b0f28f98_uoww9l.jpg' // Большой монитор с интерфейсом
  },
  {
    id: 'ui-dark',
    title: 'Dark Theme',
    price: 69,
    desc: 'Sleek dark mode interface.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785135554/photo-1777703304097-0bee4cbb139a_bqucar.jpg' // Темная тема
  },
  {
    id: 'ui-light',
    title: 'Light Theme',
    price: 69,
    desc: 'Clean light mode interface.',
    image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=600&h=400&fit=crop&q=80' // Светлая тема
  },
  {
    id: 'ui-switcher',
    title: 'Theme Switcher',
    price: 89,
    desc: 'Allow visitors to toggle Dark/Light mode.',
    image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785135708/premium_photo-1720288700959-17b6880d3979_emugsv.jpg' // Переключатель тем
  },
  {
    id: 'ui-colors',
    title: 'Brand Color System',
    price: 79,
    desc: 'Structured design tokens & color palette.',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&h=400&fit=crop&q=80' // Палитра цветов и дизайн токены
  },
  {
    id: 'ui-typography',
    title: 'Typography Upgrade',
    price: 59,
    desc: 'Custom typography pair and font scaling.',
    image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?w=600&h=400&fit=crop&q=80' // Типографика и шрифты
  }
]
  },
  {
    id: 'sections',
    title: 'Website Sections',
    subtitle: 'Modular content blocks',
    iconName: 'Layers',
    items: [
      { id: 'sec-hero', title: 'Hero Section', price: 79, desc: 'Main banner block with CTA.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-about', title: 'About Us', price: 49, desc: 'Company history and mission block.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-services', title: 'Services', price: 49, desc: 'Service offerings showcase.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-process', title: 'Our Process', price: 69, desc: 'Step-by-step working process.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-portfolio', title: 'Portfolio', price: 79, desc: 'Projects portfolio showcase block.', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-gallery', title: 'Gallery', price: 59, desc: 'Photo / media grid section.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-pricing', title: 'Pricing', price: 69, desc: 'Pricing plans and table block.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-testimonials', title: 'Testimonials', price: 49, desc: 'Client reviews and feedback block.', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-faq', title: 'FAQ', price: 39, desc: 'Accordion dropdown for common Q&A.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-contact', title: 'Contact', price: 49, desc: 'Contact details and map block.', image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-booking', title: 'Booking', price: 99, desc: 'Embedded appointment block.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-team', title: 'Team', price: 59, desc: 'Team member cards & bios.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-partners', title: 'Partners', price: 39, desc: 'Logo cloud of clients/partners.', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-stats', title: 'Statistics', price: 49, desc: 'Key metrics and numbers block.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-timeline', title: 'Timeline', price: 59, desc: 'Chronological roadmap or company history.', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-video', title: 'Video Section', price: 79, desc: 'Embedded video player with custom thumbnail.', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-cta', title: 'Call To Action', price: 39, desc: 'High conversion banner block.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-blog', title: 'Blog', price: 199, desc: 'Blog article overview section.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-news', title: 'News', price: 149, desc: 'Latest press & news feed.', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-careers', title: 'Careers', price: 129, desc: 'Job listings & hiring block.', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-cases', title: 'Case Studies', price: 149, desc: 'Detailed project study cards.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-downloads', title: 'Downloads', price: 99, desc: 'File attachment download block.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-resources', title: 'Resources', price: 99, desc: 'Useful links and downloads directory.', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=200&fit=crop&q=80' },
      { id: 'sec-docs', title: 'Documentation', price: 199, desc: 'Knowledge base or docs section.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&q=80' }
    ]
  },
  {
    id: 'animations',
    title: 'Animations & Effects',
    subtitle: 'Interactive elements and dynamic motion',
    iconName: 'Sparkles',
    items: [
      { id: 'anim-fade', title: 'Fade', price: 19, desc: 'Smooth fade-in elements.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785137138/premium_photo-1774534898543-f1b8bce8cf45_bouuju.jpg' },
      { id: 'anim-slide', title: 'Slide', price: 19, desc: 'Directional slide motion on scroll.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785137282/photo-1529675641475-78780f1fd4b0_gbzv0z.jpg' },
      { id: 'anim-zoom', title: 'Zoom', price: 19, desc: 'Zoom-in effect on elements.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785137566/Y91Fg7p1lhJ9Ku02-qRvOm0XEJv_ORYjPw_a6kpyx.jpg' },
      { id: 'anim-reveal', title: 'Reveal', price: 29, desc: 'Mask reveal animation on scroll.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138048/video_preview_0000_afqkgd.jpg' },
      { id: 'anim-parallax', title: 'Parallax', price: 79, desc: 'Multi-layered parallax scrolling.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785137745/t92FzPYhYizFYIi5fbO3ieXpavQ_s7t8n1.jpg' },
      { id: 'anim-mouse', title: 'Mouse Effects', price: 79, desc: 'Cursor tracking motion and trails.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785137913/U8BKIAkHTzuf3xkCzKGU_vlcsnap-2026-01-23-12h14m06s272_r58ocm.png' },
      { id: 'anim-scroll', title: 'Scroll Animations', price: 69, desc: 'Dynamic elements triggered by scroll.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138137/6585a302350b3c7b21a735e3_website-scroll-thumbnail_xiii5y.webp' },
      { id: 'anim-float', title: 'Floating Elements', price: 49, desc: 'Gentle floating physics effect.', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop&q=80' },
      { id: 'anim-3d', title: '3D Effects', price: 149, desc: 'WebGL or 3D tilt effects on cards.', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=200&fit=crop&q=80' },
      { id: 'anim-gsap', title: 'GSAP Premium', price: 249, desc: 'High-end GSAP sequence animations.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138302/GSAP_twpuno.webp' },
      { id: 'anim-lottie', title: 'Lottie Animations', price: 79, desc: 'Lightweight vector motion graphics.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138474/1779271580302_vnwr7n.jpg' },
      { id: 'anim-counters', title: 'Counters', price: 25, desc: 'Animated number counting effect.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138615/counter-online_ihpmup.svg' },
      { id: 'anim-progress', title: 'Progress Bars', price: 25, desc: 'Animated skill or percentage bars.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138700/images_qcxvrr.jpg' },
      { id: 'anim-loading', title: 'Loading Screen', price: 49, desc: 'Custom preloader screen on entry.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138856/images_zabgx5.jpg' },
      { id: 'anim-cursor', title: 'Custom Cursor', price: 39, desc: 'Bespoke mouse cursor style.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138925/neon-glowing-cyan-color-mouse-260nw-2500959039_reuq8r.jpg' },
      { id: 'anim-scroll-bar', title: 'Scroll Progress', price: 25, desc: 'Reading progress bar indicator.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785138974/Scrolling.png_ckovhf.webp' },
      { id: 'anim-top', title: 'Back To Top', price: 15, desc: 'Smooth scroll back-to-top button.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785139058/Group-39887-1_s47djl.png' },
      { id: 'anim-trans', title: 'Page Transition', price: 23, desc: 'Seamless page routing animations.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785139210/68c4936b3498e63584807dc9_6010824eb92ae2273b3d91ac_6002086f72b72777db01d8ba_page-transitions-in-webflow_kefbmr.jpg' },
      { id: 'anim-glass', title: 'Glass Morphism', price: 39, desc: 'Modern translucent glass effect styling.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785139282/3d-website-interface-presentation-glass-morphism-mockup-with-blurred-frosted-morphism-effect_623342-207_kkoox6.jpg' },
      { id: 'anim-neumorph', title: 'Neumorphism', price: 39, desc: 'Soft-shadow extruded design style.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785139404/neumorphism-ui-design_t9u6pa.png' },
      { id: 'anim-hover', title: 'Hover Animations', price: 35, desc: 'Interactive hover feedback on buttons/cards.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785139499/hovero_zugzuj.png' }
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    subtitle: 'Lead capture & booking mechanisms',
    iconName: 'FileText',
    items: [
      { id: 'frm-contact', title: 'Contact Form', price: 39, desc: 'Standard contact form setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785140528/7f70934cdedbb19488e5eb16f9856adc7fcc0b69_vsj1qg.jpg' },
      { id: 'frm-booking', title: 'Booking Form', price: 129, desc: 'Form integrated with scheduling.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785140697/room_booking_enquiry_form_Free26-05-2017_1964232051_nei9si.jpg' },
      { id: 'frm-quote', title: 'Quote Form', price: 89, desc: 'Custom project estimation form.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785140740/How-to-Create-a-Quote-Request-Form-on-WordPress_3x_jvrhl9.png' },
      { id: 'frm-multistep', title: 'Multi-Step Form', price: 149, desc: 'Interactive multi-page lead funnel.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785140868/multi-step-forms-scaled_yshcpo.webp' },
      { id: 'frm-upload', title: 'File Upload', price: 49, desc: 'Secure document/image attachment field.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785140929/screenshot-2023-09-27-at-15.27.59_fvfxwy.png' },
      { id: 'frm-validation', title: 'Validation', price: 25, desc: 'Real-time field error checking.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785140982/BlogPost_Feature-Image_1490x700_Input-Validation-Errors_hgj7ws.png' },
      { id: 'frm-autoemail', title: 'Auto Email', price: 39, desc: 'Instant confirmation email to sender.', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=200&fit=crop&q=80' },
      { id: 'frm-templates', title: 'Email Templates', price: 49, desc: 'Custom HTML responsive email design.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141092/photo-1522542550221-31fd19575a2d_du2bw4.jpg' },
      { id: 'frm-calendar', title: 'Calendar', price: 89, desc: 'Interactive date selection picker.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141167/sMWw2eALAxhp_large_qwea2p.jpg' },
      { id: 'frm-timeslots', title: 'Time Slots', price: 89, desc: 'Dynamic time slot allocation.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141221/6256c34a22c973d322a114d6_TimeSlotManager_ndwzvr.png' },
      { id: 'frm-crm', title: 'CRM Connection', price: 149, desc: 'Direct form sync into your CRM.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&q=80' }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'Store features & payment solutions',
    iconName: 'ShoppingCart',
    items: [
      { id: 'ecom-cat', title: 'Product Catalogue', price: 249, desc: 'Product grid with detailed views.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141311/56286001-d655-4c32-989f-518153d737a5_eembkz.jpg' },
      { id: 'ecom-categories', title: 'Categories', price: 79, desc: 'Multi-level taxonomy setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141514/original-4d145882f880461c63581c1749aa0600_xpv94m.png' },
      { id: 'ecom-filters', title: 'Filters', price: 79, desc: 'Filter products by price, attribute & size.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141714/file-BOZsazqZYn_rnaugc.png' },
      { id: 'ecom-search', title: 'Search', price: 49, desc: 'Instant product search with suggestions.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141775/images_aeppdt.jpg' },
      { id: 'ecom-wishlist', title: 'Wishlist', price: 79, desc: 'Save products for later functionality.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141835/website-wish-list_p5hbbu.png' },
      { id: 'ecom-cart', title: 'Shopping Cart', price: 199, desc: 'Interactive slide-out or page cart.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785141891/Shopping_20Cart_20Visibility.jpg_wrvfss.jpg' },
      { id: 'ecom-checkout', title: 'Checkout', price: 199, desc: 'Secure, optimized payment page.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142042/11469812-6665-4ab9-8781-afceddeae36e-cover_mfkexo.png' },
      { id: 'ecom-stripe', title: 'Stripe', price: 149, desc: 'Card processing via Stripe.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142105/66b9ce933f6f61a7f0a7fad4_64edfd885f250dafcb1a01d9_Stripe-logo_aq5yfe.png' },
      { id: 'ecom-paypal', title: 'PayPal', price: 129, desc: 'Express PayPal gateway.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142176/CustomerStory_Banner_PayPal-scaled_tqtinj.png' },
      { id: 'ecom-applepay', title: 'Apple Pay', price: 99, desc: '1-click Apple Pay integration.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142229/images_xpk0fk.png' },
      { id: 'ecom-googlepay', title: 'Google Pay', price: 99, desc: '1-click Google Pay integration.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142370/images_an0ubc.jpg' },
      { id: 'ecom-discounts', title: 'Discount Codes', price: 79, desc: 'Promo codes & checkout coupons.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142443/67535aa8390916266f3db532_discount-vs-coupon-codes_ed8xcc.webp' },
      { id: 'ecom-stock', title: 'Stock Management', price: 149, desc: 'Automated inventory tracking.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=200&fit=crop&q=80' },
      { id: 'ecom-accounts', title: 'Customer Accounts', price: 249, desc: 'Client portal with order history.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142562/dsc09553-JS1005170695_n27s6j.webp' },
      { id: 'ecom-tracking', title: 'Order Tracking', price: 149, desc: 'Shipment & parcel tracking pages.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142651/13012021ecommerce-order-tracking-5_uqnry4.jpg' },
      { id: 'ecom-invoices', title: 'Invoices', price: 79, desc: 'Automated PDF receipt generator.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785142941/an-introduction-to-invoices-banner_cxizvi.png' },
      { id: 'ecom-subscriptions', title: 'Subscriptions', price: 249, desc: 'Recurring payment billing system.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785143010/Subscription-Management-Tools_xorkur.webp' },
      { id: 'ecom-downloads', title: 'Digital Downloads', price: 149, desc: 'Instant downloadable file sales.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785143070/7978abd333aa51d57d7c43a6c86475ee8620a76f-1362x824_aa9kmu.jpg' },
      { id: 'ecom-reviews', title: 'Reviews', price: 69, desc: 'Star rating and product review system.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785143162/ratings-illustrations_morningstarratingforstocks_xww4pb.png' },
      { id: 'ecom-related', title: 'Related Products', price: 59, desc: 'Cross-selling product recommendations.', image: 'https://premmerce.com/content/uploads/2023/06/premmerce-featured-image-woocommerce-search.png' }
    ]
  },
  {
    id: 'seo-performance',
    title: 'SEO & Performance',
    subtitle: 'Optimization and speed improvements',
    iconName: 'Search',
    items: [
      { id: 'seo-basic', title: 'Basic SEO', price: 99, desc: 'Basic meta tags & site submission.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785146941/hero_gue7mw.png' },
      { id: 'seo-advanced', title: 'Advanced SEO', price: 249, desc: 'Full on-page SEO optimization.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147074/FjuCWb92LCwBDSaPS5cYNgppWYqr3BT09g2uNa4x_g7bomy.png' },
      { id: 'seo-local', title: 'Local SEO', price: 149, desc: 'Google My Business & local citations.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147124/647998cbaa815dc0ab9189d8_Local_20SEO_q8kngv.webp' },
      { id: 'seo-tech', title: 'Technical SEO', price: 199, desc: 'Fix indexation, sitemaps & robots.txt.', image: 'https://www.cloudways.com/blog/wp-content/uploads/What-is-Technical-SEO.jpg' },
      { id: 'seo-keywords', title: 'Keyword Research', price: 149, desc: 'Competitor & keyword search report.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147182/images_p1lg8y.jpg' },
      { id: 'seo-schema', title: 'Schema Markup', price: 79, desc: 'Rich snippet microdata setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147221/images_rwk7ds.jpg' },
      { id: 'opt-images', title: 'Image Optimization', price: 39, desc: 'WebP compression and alt tagging.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147267/6481f4211d72a834f5069559_Image_20optimization-100_jzanfp.webp' },
      { id: 'opt-lazy', title: 'Lazy Loading', price: 39, desc: 'Defer non-critical images.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147304/1_7fpUOuKDeAijsch0bFwzfg_croy6f.png' },
      { id: 'opt-code', title: 'Code Optimization', price: 99, desc: 'Minify JS/CSS assets.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147353/images_vxkjyr.jpg' },
      { id: 'opt-pagespeed', title: 'Google PageSpeed 90+', price: 149, desc: 'Guaranteed high performance score.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147395/lifestyle-site-google-pagespeed-optimization-case-study-jumps-90-points_lt2oxy.png' },
      { id: 'opt-vitals', title: 'Core Web Vitals', price: 149, desc: 'Fix LCP, FID & CLS metrics.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147435/measure-core-web-vitals-647_vc6bzo.png' },
      { id: 'opt-caching', title: 'Caching', price: 79, desc: 'Browser & server-side caching.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147467/caching-hero_l3zwae.jpg' },
      { id: 'opt-compression', title: 'Compression', price: 49, desc: 'Gzip/Brotli server compression.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147523/674d85566992d4b5e670217c_66be62636e0c35eb75c4a425_q3-24_blog_image-compression_hero_oftfzq.jpg' },
      { id: 'opt-cdn', title: 'CDN', price: 79, desc: 'Global content delivery network setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147560/what-is-cdn_db7sgm.png' }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    subtitle: 'Connect third-party platforms',
    iconName: 'Cpu',
    items: [
      { id: 'int-ga', title: 'Google Analytics', price: 39, desc: 'GA4 installation & event setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147632/images_sjczwe.jpg' },
      { id: 'int-gsc', title: 'Google Search Console', price: 39, desc: 'Sitemap submission & tracking.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147669/google-search-console-guide-01_kwi8gr.jpg' },
      { id: 'int-meta', title: 'Meta Pixel', price: 49, desc: 'Facebook/Instagram ad tracking.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147708/image_z0a9d7.jpg' },
      { id: 'int-tiktok', title: 'TikTok Pixel', price: 49, desc: 'TikTok conversion tracking setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147769/1921819db40bb07efa633e0e4622228a52a1016a-2560x1440_ylrnup.png' },
      { id: 'int-linkedin', title: 'LinkedIn Insight', price: 49, desc: 'LinkedIn tag integration.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147836/photo-1746608943402-dab648e18855_jnfqjt.jpg' },
      { id: 'int-mailchimp', title: 'Mailchimp', price: 79, desc: 'Email subscription form sync.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147879/mailchimp-product-image_wfnpbc.png' },
      { id: 'int-brevo', title: 'Brevo', price: 79, desc: 'Brevo email marketing setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147925/brevo_65fs_rig777.png' },
      { id: 'int-zapier', title: 'Zapier', price: 129, desc: 'Custom automated workflows.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147960/Zapier-logo_z9pny9.png' },
      { id: 'int-calendly', title: 'Calendly', price: 49, desc: 'Embed scheduling widget.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785147993/Calendly_logo_f7gdmp.png' },
      { id: 'int-whatsapp', title: 'WhatsApp', price: 29, desc: 'Click-to-chat button setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148032/06ZvTNln3Toz309WtTLDiwP-25.fit_scale.size_400x225.v1652212718_ohrmdp.jpg' },
      { id: 'int-messenger', title: 'Messenger', price: 29, desc: 'Facebook Live Chat integration.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148070/PREVIEW_facebook-messenger_pltowz.png' },
      { id: 'int-insta', title: 'Instagram Feed', price: 59, desc: 'Live social photo gallery.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148148/Embed-Instagram-Feed-on-Website_ifeymk.jpg' },
      { id: 'int-fb', title: 'Facebook Feed', price: 59, desc: 'Embedded social feed widget.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148201/customize-my-facebook-news-feed-featured-image_ozunsx.png' },
      { id: 'int-yt', title: 'YouTube Feed', price: 69, desc: 'Automated video channel feed.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148242/og-youtube-feed_zodcg6.png' },
      { id: 'int-gmaps', title: 'Google Maps', price: 39, desc: 'Interactive location map embed.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148291/780x406-9b43c9c5_hjpzg9.png' },
      { id: 'int-trustpilot', title: 'Trustpilot', price: 49, desc: 'Verified reviews widget embed.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148334/0x0_cwvs0c.png' },
      { id: 'int-greviews', title: 'Google Reviews', price: 59, desc: 'Live Google rating display.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148369/harnessing-the-power-of-google-reviews-a-local-businesss-secret-weapon-767088_btudvx.jpg' },
      { id: 'int-livechat', title: 'Live Chat', price: 89, desc: 'Chatbot / human support widget.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148405/image_tytnia.png' },
      { id: 'int-intercom', title: 'Intercom', price: 149, desc: 'Intercom support setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148455/intercom-landing-page-770x384_ddttwd.jpg' },
      { id: 'int-hubspot', title: 'HubSpot', price: 199, desc: 'HubSpot CRM and chat sync.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148490/images_bdyyla.jpg' },
      { id: 'int-salesforce', title: 'Salesforce', price: 399, desc: 'Enterprise Salesforce API sync.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148544/images_wcgxbe.jpg' }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Website protection & compliance',
    iconName: 'Shield',
    items: [
      { id: 'sec-ssl', title: 'SSL Certificate', price: 0, desc: 'Included free of charge.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785149136/images_le9r2m.png' },
      { id: 'sec-spam', title: 'Spam Protection', price: 29, desc: 'Form honeypot and anti-bot checks.', image: 'https://www.digitalhost.com/dgh-assets/uploads/2020/11/spam_protct_01_01.png' },
      { id: 'sec-cloudflare', title: 'Cloudflare', price: 59, desc: 'DDoS mitigation and DNS security.', image: 'https://a.storyblok.com/f/119964/3840x3840/33eabeab3f/cloudflare-l-1.png' },
      { id: 'sec-firewall', title: 'Firewall', price: 99, desc: 'Web Application Firewall setup.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBQfVfpwfLfrasnFWEI5f_RfKASf7W9i8pcm6FqL6zGbtRXVGYBokcTQ&s=10' },
      { id: 'sec-backups', title: 'Backups', price: 59, desc: 'Automated backup engine setup.', image: 'https://cdn.prod.website-files.com/67fe9d195d667040ba91df59/6895d73a4a3d1114a3dfd24c_Data%20Backup%20-%20March%20Blog.png' },
      { id: 'sec-malware', title: 'Malware Scan', price: 69, desc: 'Scheduled security scanner.', image: 'https://www.webinspector.com/images/website-malware-scanner.png' },
      { id: 'sec-headers', title: 'Security Headers', price: 39, desc: 'HTTP security header hardening.', image: 'https://probely.com/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F35z0g1ex%2Fproduction%2F92156324878acfc908f202fa2c496ec34cff46ab-512x288.jpg%3Fw%3D2200%26fit%3Dmax%26auto%3Dformat&w=1400&q=75' },
      { id: 'sec-recaptcha', title: 'reCAPTCHA', price: 29, desc: 'Google reCAPTCHA v2/v3 integration.', image: 'https://miro.medium.com/v2/resize:fit:1400/1*t6uFobPbakfa83rdIQPd4g.jpeg' },
      { id: 'sec-2fa', title: 'Two Factor Login', price: 79, desc: '2FA authentication setup for admins.', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402215526/Two-Factor-Authentication-Implementation-Methods-and-Bypasses.png' },
      { id: 'sec-admin', title: 'Admin Protection', price: 79, desc: 'Custom login URLs and rate limiting.', image: 'https://www.careerexplorer.com/images/mkzl5ivvxsrdxmdnappz.jpg' }
    ]
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    subtitle: 'Inclusive WCAG standards',
    iconName: 'Eye',
    items: [
      { id: 'a11y-wcag', title: 'WCAG Improvements', price: 149, desc: 'Full compliance optimizations.', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=200&fit=crop&q=80' },
      { id: 'a11y-keyboard', title: 'Keyboard Navigation', price: 79, desc: 'Tab & focus order management.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785144497/20160913accessleadin_bjf5a5.jpg' },
      { id: 'a11y-screenreader', title: 'Screen Reader Support', price: 99, desc: 'ARIA roles & labels implementation.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785144582/Screen-reader_ceouif.webp' },
      { id: 'a11y-contrast', title: 'High Contrast', price: 49, desc: 'High contrast toggle mode.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785144682/Color-contrast-1-1024x576_gidloo.jpg' },
      { id: 'a11y-resize', title: 'Text Resize', price: 39, desc: 'Font size adjustment widget.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785144839/text_converter_for_website_logo-removebg-preview_csdekt.png' },
      { id: 'a11y-skip', title: 'Skip Navigation', price: 29, desc: 'Skip-to-content accessibility link.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785144884/UXT_glossary_skip_navigation_ugswmj.png' },
      { id: 'a11y-forms', title: 'Accessible Forms', price: 59, desc: 'Screen-reader friendly form fields.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785144924/Form-Accessibility-2-1024x576_w6hjij.jpg' }
    ]
  },
  {
    id: 'additional-services',
    title: 'Additional Services',
    subtitle: 'Post-launch maintenance & audits',
    iconName: 'Wrench',
    items: [
      { id: 'add-audit', title: 'Website Audit', price: 99, desc: 'Comprehensive site analysis.', image: 'https://www.tinybluesky.com/wp-content/uploads/2024/12/feature-image-website-audit.jpg' },
      { id: 'add-speed-audit', title: 'Website Speed Audit', price: 79, desc: 'Detailed speed bottleneck report.', image: 'https://cdn.searchenginejournal.com/wp-content/uploads/2023/03/untitled-design-43-6405cb01dcfc7-sej.png' },
      { id: 'add-seo-audit', title: 'SEO Audit', price: 129, desc: 'Keyword & ranking analysis report.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU423cH7dEJj5Ex_4pAooSL1fG6lRA8vnUEgdKUZvhqe4_JKsDIPWdwgy_&s=10' },
      { id: 'add-ux-audit', title: 'UX Audit', price: 149, desc: 'Usability evaluation report.', image: 'https://monsoonfish.com/wp-content/uploads/2024/02/UX-AUDIT-cover-_11zon.png' },
      { id: 'add-sec-audit', title: 'Security Audit', price: 149, desc: 'Vulnerability assessment.', image: 'https://www.safeaeon.com/assets/img/blogImages/it-security-audit-in-2025_banner.svg' },
      { id: 'add-redesign', title: 'Website Redesign', price: 399, desc: 'Complete revamp from £399.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhAFCmuew8-RuTa-2RYcqDxKzlMMvE7B7YvnjjHNaP4B9oKJZCBHeubFH&s=10' },
      { id: 'add-refresh', title: 'Website Refresh', price: 249, desc: 'Visual cleanup and content update.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdmA9i8VmYYbwcIA7sxlqBo1Al04A6QXkGlFcoGHVp4nkJ3yV09zM0j2y&s=10' },
      { id: 'add-modernise', title: 'Website Modernisation', price: 499, desc: 'Tech stack upgrade from £499.', image: 'https://www.webphoria.co.uk/wp-content/uploads/2025/12/websitehero-ezgif.com-png-to-webp-converter.webp' },
      { id: 'add-fix', title: 'Fix Existing Website', price: 99, desc: 'General fixes from £99.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&q=80' },
      { id: 'add-bugs', title: 'Bug Fixes', price: 49, desc: 'Minor issue resolutions from £49.', image: 'https://www.nine10.ca/wp-content/uploads/2019/12/bug-fixes-vs-maintenance.jpg' },
      { id: 'add-perf-opt', title: 'Performance Optimisation', price: 149, desc: 'Code optimization from £149.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&q=80' },
      { id: 'add-refactor', title: 'Code Refactoring', price: 249, desc: 'Clean code rewrite from £249.', image: 'https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/refactoring.png' },
      { id: 'add-mobile-opt', title: 'Mobile Optimisation', price: 149, desc: 'Fix mobile layout issues.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&q=80' },
      { id: 'add-responsive-fixes', title: 'Responsive Fixes', price: 99, desc: 'Fix broken layouts across devices.', image: 'https://matchboxdesigngroup.com/wp-content/uploads/2021/11/Top-14-Quick-Responsive-Web-Design-Fixes-You-Can-Make-in-2020-Matchbox-Design-Group-St.-Louis-MO.jpeg' },
      { id: 'add-a11y-imp', title: 'Accessibility Improvements', price: 149, desc: 'WCAG compliance fixes.', image: 'https://accessibilityspark.com/wp-content/uploads/2021/07/1_HnSxmR5WbFCD98wXgUe3EA.png' },
      { id: 'add-links', title: 'Broken Links Fix', price: 49, desc: 'Scan and repair 404 links.', image: 'https://api.backlinko.com/app/uploads/2023/06/Broken-Links.jpg' },
      { id: 'add-img-opt', title: 'Image Optimisation', price: 49, desc: 'Compress and resize images.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehfXvNQBq0p-pa2l_SJl2Et_zJNUEj4Jieov2GCIny0Ki_KbnVmziziY1&s=10' },
      { id: 'add-content-upload', title: 'Content Upload', price: 49, desc: 'Upload text and media assets.', image: 'https://clickex.net/wp-content/uploads/2018/12/UploadLimit-Header.png' },
      { id: 'add-migration', title: 'Migration', price: 199, desc: 'Safely move site to new server.', image: 'https://reviewbridge.com/wp-content/uploads/2019/08/how-to-migrate-your-website-to-a-different-web-host.png' },
      { id: 'add-clone', title: 'Website Clone', price: 399, desc: 'Duplicate existing site from £399.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZsOUDXxunASYxaFY52b2Q7ixbFKjISzxtCMnIGYcOM2F1TOajCKe5fQ&s=10' },
      { id: 'add-lp-create', title: 'Landing Page Creation', price: 199, desc: 'Single promotional landing page.', image: 'https://www.tarmika.com/wp-content/uploads/2021/09/eye-opening-graphics-26-1024x531.png' },
      { id: 'add-extra-page', title: 'Extra Page', price: 49, desc: 'Add 1 additional content page.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf36xPXuMo3wAayUg9yuu0dLFFueU0ES1v4TJpQ-mUrmghjXxj-E3faYrt&s=10' },
      { id: 'add-custom-feat', title: 'Custom Feature Development', price: 199, desc: 'Custom code feature from £199.', image: 'https://www.rolustech.com/wp-content/uploads/2019/12/Blog-Banner-inside.jpg' },
      { id: 'add-api-int', title: 'API Integration', price: 249, desc: 'Connect custom API from £249.', image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230215222654/What-is-an-API-Integration.gif' },
      { id: 'add-db-opt', title: 'Database Optimisation', price: 199, desc: 'Clean and index database.', image: 'https://perfmatters.io/wp-content/uploads/2020/06/perfmatters-database-optimization.png' },
      { id: 'add-cms-setup', title: 'CMS Setup', price: 249, desc: 'Configure content management system.', image: 'https://www.softwaresuggest.com/blog/wp-content/uploads/2021/03/what-is-a-content-management-system-and-how-does-it-work.jpg' },
      { id: 'add-wp-mig', title: 'WordPress Migration', price: 249, desc: 'Move WP site smoothly.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGPrruUPqOal-s-SPL6ibYNJIkgiQilasv1EQBn3RPw&s=10' },
      { id: 'add-react-mig', title: 'React Migration', price: 399, desc: 'Migrate site to React framework from £399.', image: 'https://www.dronahq.com/wp-content/uploads/2024/12/upgrading_react_19-scaled.webp' }
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'Brand identity assets',
    iconName: 'Briefcase',
    items: [
      { id: 'brand-logo', title: 'Logo Design', price: 149, desc: 'Standard vector logo design.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148661/logo-example_wzthze.jpg' },
      { id: 'brand-prem-logo', title: 'Premium Logo', price: 349, desc: 'Bespoke logo with multiple concepts.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148708/logo-1-595f75c9d56c1_n72q5t.png' },
      { id: 'brand-cards', title: 'Business Cards', price: 79, desc: 'Print-ready business card layout.', image: 'https://cms.cloudinary.vpsvc.com/images/if_ar_gt_1.1/c_scale,t_pdpHeroGallery_Gallery/if_else/c_scale,w_816/if_end/f_auto,q_auto:best,dpr_1.0/legacy_dam/en-gb/S001917118/NPIB-46493-Standard-BC-Hero-001' },
      { id: 'brand-letterhead', title: 'Letterhead', price: 49, desc: 'Corporate document template.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148818/0907ed46-4eb9-4cdd-a7c5-ca3f1888e5be-cover_o0gamo.png' },
      { id: 'brand-email-sig', title: 'Email Signature', price: 39, desc: 'HTML email signature for team.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148891/Email-signature-examples-for-SMBs_pef48a.png' },
      { id: 'brand-guidelines', title: 'Brand Guidelines', price: 249, desc: 'PDF brand style guide book.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148925/images_gqdk1n.jpg' },
      { id: 'brand-palette', title: 'Colour Palette', price: 59, desc: 'Primary and secondary color specs.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785148967/71siIPVRl5L._UF1000_1000_QL80__d2atzl.jpg' },
      { id: 'brand-typography', title: 'Typography System', price: 59, desc: 'Curated corporate typography kit.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785149009/69a048624f33f52750c727cd_typography-1706286421915-2x_d83aea.jpg' },
      { id: 'brand-social-kit', title: 'Social Media Kit', price: 149, desc: 'Avatars and social cover templates.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785149051/Social_Media_Kit_-_2_udyk0r.webp' }
    ]
  },
  {
    id: 'hosting-launch',
    title: 'Hosting & Launch',
    subtitle: 'Deployment & domain configuration',
    iconName: 'Server',
    items: [
      { id: 'hst-deployment', title: 'Deployment', price: 0, desc: 'Included free of charge.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145074/images_vdyhtq.jpg' },
      { id: 'hst-domain', title: 'Domain Connection', price: 29, desc: 'Connect custom domain to host.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145166/images_boi9v1.jpg' },
      { id: 'hst-email', title: 'Business Email', price: 49, desc: 'Google Workspace or Microsoft 365 setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145229/n-stage-email-front-uk_yzhncp.svg' },
      { id: 'hst-dns', title: 'DNS Configuration', price: 39, desc: 'MX, SPF & DKIM record setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145317/images_hl2zb5.png' },
      { id: 'hst-cloud', title: 'Cloud Hosting Setup', price: 99, desc: 'Vercel, Netlify, or AWS setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145372/images_ajcllv.jpg' },
      { id: 'hst-vps', title: 'VPS Setup', price: 199, desc: 'Virtual private server configuration.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145481/vps-setup-5-steps-1024x315_z7g20g.png' },
      { id: 'hst-monitoring', title: 'Monitoring', price: 49, desc: 'Uptime & downtime alert system.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145521/cover-post-sap-businessobjects-monitoring_swopdi.png' },
      { id: 'hst-autobackups', title: 'Automatic Backups', price: 59, desc: 'Daily/weekly cloud backup setup.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785145574/db_f3plzl.jpg' }
    ]
  },
  {
    id: 'care-plans',
    title: 'Monthly Care Plans',
    subtitle: 'Recurring maintenance & support subscription',
    iconName: 'Clock',
    items: [
      { id: 'care-essential', title: 'Essential Care', price: 39, desc: '£39/mo. Weekly backups, health monitoring, system updates, 15 min edits/mo.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=200&fit=crop&q=80' },
      { id: 'care-business', title: 'Business Care', price: 79, desc: '£79/mo. Daily backups, 1h dev time/mo, priority support, monthly report.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785136658/photo-1651684195895-38708dc94cfa_ecpwib.jpg' },
      { id: 'care-growth', title: 'Growth Care', price: 149, desc: '£149/mo. 3h dev time/mo, SEO monitoring, content updates, speed optimization.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785136401/photo-1573166364366-3f4f8b1857ea_d8yyps.jpg' },
      { id: 'care-premium', title: 'Premium Partner', price: 299, desc: '£299/mo. 8h dev time/mo, #1 priority, unlimited minor fixes, dedicated manager.', image: 'https://res.cloudinary.com/zypfrr9w/image/upload/v1785136584/premium_photo-1664298741031-0eaa0b14c089_gho2a7.jpg' }
    ]
  }
];