export const PRESETS_DATA = [
  {
    id: 'starter',
    title: 'Starter',
    subtitle: 'Essential setup',
    price: 1800,
    features: ['Foundation', '3 Pages', 'Contact Form', 'Basic SEO']
  },
  {
    id: 'business',
    title: 'Business',
    subtitle: 'Advanced features',
    price: 3200,
    isPopular: true,
    features: ['Foundation', '5 Pages', 'Booking System', 'SEO Optimisation', 'Analytics']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'Online store ready',
    price: 4500,
    features: ['Foundation', 'Product Pages', 'Payments', 'SEO Optimisation']
  }
];

export const CATEGORIES_DATA = [
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Build a strong base',
    iconName: 'LayoutGrid',
    items: [
      { 
        id: 'f-custom', 
        title: 'Custom Website', 
        price: 1200, 
        desc: 'Unique website tailored to your business.', 
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'f-responsive', 
        title: 'Responsive Design', 
        price: 400, 
        desc: 'Looks perfect on desktop, tablet and mobile.', 
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'f-speed', 
        title: 'Fast Loading', 
        price: 300, 
        desc: 'Optimised for speed to ensure best UX.', 
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'f-security', 
        title: 'Secure Setup', 
        price: 250, 
        desc: 'Basic security configuration.', 
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'f-hosting', 
        title: 'Hosting & Deployment', 
        price: 200, 
        desc: 'We handle hosting setup and launch.', 
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'f-analytics', 
        title: 'Basic Analytics', 
        price: 150, 
        desc: 'Track visitors and website performance.', 
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=200&fit=crop&q=80' 
      }
    ]
  },
  {
    id: 'design',
    title: 'Design & Content',
    subtitle: 'Create a lasting impression',
    iconName: 'Palette',
    items: [
      { 
        id: 'd-custom', 
        title: 'Custom Design', 
        price: 800, 
        desc: 'Unique design tailored to your brand.', 
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'd-brand', 
        title: 'Branding Integration', 
        price: 350, 
        desc: 'We apply your logo, colours and fonts.', 
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'd-uiux', 
        title: 'UI/UX Design', 
        price: 600, 
        desc: 'User-friendly interface design.', 
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'd-image', 
        title: 'Image & Graphics', 
        price: 300, 
        desc: 'Professional visuals for your content.', 
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'd-content', 
        title: 'Content Writing', 
        price: 400, 
        desc: 'Engaging copy that speaks to your audience.', 
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'd-icons', 
        title: 'Icon & Illustration', 
        price: 250, 
        desc: 'Custom icons and illustrations.', 
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=200&fit=crop&q=80' 
      }
    ]
  },
  {
    id: 'pages',
    title: 'Pages',
    subtitle: 'Expand your website',
    iconName: 'Layers',
    items: [
      { 
        id: 'p-about', 
        title: 'About Us', 
        price: 200, 
        desc: 'Tell your story and team background.', 
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'p-services', 
        title: 'Services', 
        price: 250, 
        desc: 'Showcase what you offer clearly.', 
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'p-portfolio', 
        title: 'Portfolio', 
        price: 350, 
        desc: 'Highlight your best work with galleries.', 
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=200&fit=crop&q=80' 
      }
    ]
  },
  {
    id: 'business',
    title: 'Business Features',
    subtitle: 'Tools that work for you',
    iconName: 'Briefcase',
    items: [
      { 
        id: 'b-contact', 
        title: 'Contact Form', 
        price: 150, 
        desc: 'Custom forms to capture leads.', 
        image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'b-booking', 
        title: 'Booking System', 
        price: 450, 
        desc: 'Let customers book appointments.', 
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'b-payments', 
        title: 'Online Payments', 
        price: 500, 
        desc: 'Accept credit cards directly.', 
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'b-users', 
        title: 'User Accounts', 
        price: 600, 
        desc: 'Allow users to register and manage profiles.', 
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'b-lang', 
        title: 'Multi-language', 
        price: 400, 
        desc: 'Support multiple languages.', 
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'b-member', 
        title: 'Membership', 
        price: 550, 
        desc: 'Create restricted areas.', 
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&q=80' 
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'Sell products online',
    iconName: 'ShoppingCart',
    items: [
      { 
        id: 'e-products', 
        title: 'Product Pages', 
        price: 500, 
        desc: 'High converting product pages.', 
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'e-cart', 
        title: 'Shopping Cart', 
        price: 400, 
        desc: 'Safe and smooth checkout process.', 
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=200&fit=crop&q=80' 
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    subtitle: 'Connect your tools',
    iconName: 'Cpu',
    items: [
      { 
        id: 'i-crm', 
        title: 'CRM Integration', 
        price: 350, 
        desc: 'Sync with HubSpot, Salesforce, etc.', 
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'i-email', 
        title: 'Email Marketing', 
        price: 250, 
        desc: 'Connect Mailchimp or ConvertKit.', 
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'i-social', 
        title: 'Social Media', 
        price: 150, 
        desc: 'Integrate social feeds and share buttons.', 
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&q=80' 
      },
      { 
        id: 'i-api', 
        title: 'API Integration', 
        price: 500, 
        desc: 'Connect third-party services via API.', 
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&q=80' 
      }
    ]
  }
];