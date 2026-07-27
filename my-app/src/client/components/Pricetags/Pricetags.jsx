import React, { useState, useMemo, useCallback, useRef } from 'react'; // 1. Добавили useRef
import { Link } from 'react-router-dom'; // Для Next.js замените на: import Link from 'next/link';
import * as Icons from 'lucide-react';
import { PRESETS_DATA, CATEGORIES_DATA } from './pricetagsData';
import styles from './Pricetags.module.css';

// Компонент для безопасного рендера динамических иконок
const DynamicIcon = ({ name, size = 18, className = '' }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent size={size} className={className} />;
};

export default function Pricetags() {
  const [selectedIds, setSelectedIds] = useState([
    'f-custom', 'd-design', 'b-booking', 'f-analytics'
  ]);
  const [activeCategory, setActiveCategory] = useState('all');

  // 2. Создаем реф для секции каталога
  const catalogRef = useRef(null);

  // 3. Функция плавной прокрутки к каталогу
  const scrollToCatalog = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Переключение выбора карточки с использованием useCallback
  const toggleItem = useCallback((id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  }, []);

  // Мемоизация списка выбранных объектов
  const selectedList = useMemo(() => {
    const list = [];
    CATEGORIES_DATA?.forEach(cat => {
      cat.items?.forEach(item => {
        if (selectedIds.includes(item.id)) {
          list.push(item);
        }
      });
    });
    return list;
  }, [selectedIds]);

  // Мемоизация подсчета общей суммы
  const totalAmount = useMemo(() => {
    return selectedList.reduce((sum, item) => sum + (item.price || 0), 0);
  }, [selectedList]);

  return (
    <div className={styles.wrapper}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.badgePill}>
          <Icons.Tag size={12} style={{ marginRight: 6 }} /> PRICING
        </div>
        
        <h1 className={styles.mainHeading}>
          Build Your Website <br />
          <span className={styles.blueGlow}>Your Way</span>
        </h1>
        
        <p className={styles.subHeading}>
          Every business is different. That’s why we offer a flexible approach.<br />
          Choose the features you need, and we’ll build a solution that fits your goals and budget.
        </p>

        <div className={styles.benefitsRow}>
          <div className={styles.benefitItem}>
            <Icons.Target size={16} className={styles.benefitIcon} />
            <span>Custom solutions tailored to your goals</span>
          </div>
          <div className={styles.benefitItem}>
            <Icons.ShieldCheck size={16} className={styles.benefitIcon} />
            <span>Transparent pricing no hidden fees</span>
          </div>
          <div className={styles.benefitItem}>
            <Icons.TrendingUp size={16} className={styles.benefitIcon} />
            <span>Scalable systems grow as you grow</span>
          </div>
        </div>

        {/* HERO INTERACTIVE DASHBOARD WITH REAR GLOW */}
        <div className={styles.heroDashboardWrapper}>
          <div className={styles.glowBg} />
          
          <div className={styles.heroDashboard}>
            <div className={styles.dashWindow}>
              <div className={styles.dashHeader}>
                <div className={styles.dashDots}><span /><span /><span /></div>
              </div>
              <div className={styles.dashBody}>
                <div className={styles.dashLeft}>
                  <h3>Your Website</h3>
                  <p>Built around your business</p>
                  <div className={styles.dashChartPlaceholder} />
                  
                  {/* 4. Добавили onClick для прокрутки */}
                  <button className={styles.dashBtn} onClick={scrollToCatalog}>
                    Explore features
                  </button>
                </div>

                {/* DYNAMIC YOUR SELECTIONS BLOCK */}
                <div className={styles.dashRight}>
                  <h4>Your Selections</h4>
                  <div className={styles.selectionList}>
                    {selectedList.length === 0 ? (
                      <span className={styles.emptyText}>No features selected yet</span>
                    ) : (
                      selectedList.slice(0, 5).map(item => (
                        <div key={item.id} className={styles.selectionRow}>
                          <span>{item.title}</span>
                          <strong>£{item.price?.toLocaleString()}</strong>
                        </div>
                      ))
                    )}
                    {selectedList.length > 5 && (
                      <div className={styles.moreItems}>+ {selectedList.length - 5} more items</div>
                    )}
                  </div>

                  <div className={styles.selectionTotal}>
                    <span>Estimated Total</span>
                    <strong>£{totalAmount.toLocaleString()}+</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className={styles.howItWorks}>
          <h3>How It Works</h3>
          <div className={styles.howGrid}>
            <div className={styles.howCard}>
              <div className={styles.howIcon}><Icons.Zap size={20} /></div>
              <h4>1. Choose</h4>
              <p>Select the features you need</p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howIcon}><Icons.Sliders size={20} /></div>
              <h4>2. Customize</h4>
              <p>We tailor everything to your business</p>
            </div>
            <div className={styles.howCard}>
              <div className={styles.howIcon}><Icons.Rocket size={20} /></div>
              <h4>3. Launch</h4>
              <p>We build, test and launch your site</p>
            </div>
          </div>
        </div>

        {/* POPULAR COMBINATIONS */}
        <div className={styles.presetsWrapper}>
          <h3>Popular Combinations</h3>
          <p className={styles.presetsSub}>Not sure where to start? Here are some popular setups our clients often choose.</p>
          <div className={styles.presetsGrid}>
            {PRESETS_DATA?.map(preset => (
              <div key={preset.id} className={`${styles.presetCard} ${preset.isPopular ? styles.popularPreset : ''}`}>
                {preset.isPopular && <div className={styles.popularTag}>Most Popular</div>}
                <h4>{preset.title}</h4>
                <span className={styles.presetSetup}>{preset.subtitle}</span>
                <ul className={styles.presetList}>
                  {preset.features?.map((feat, i) => (
                    <li key={i}><Icons.Check size={14} color="#3b82f6" /> {feat}</li>
                  ))}
                </ul>
                <div className={styles.presetPrice}>From <strong>£{preset.price?.toLocaleString()}</strong></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.needUnique}>
          <div>
            <h4>Need Something Unique?</h4>
            <p>We’re happy to create a custom solution for your business.</p>
          </div>
          <Link to="/ContactUs" className={styles.blueBtn} style={{ textDecoration: 'none' }}>
            Get a Custom Quote →
          </Link>
        </div>
      </section>

      {/* 2. CATALOG SECTION (5. Привязали catalogRef) */}
      <section ref={catalogRef} className={styles.catalogSection}>
        <div className={styles.catalogHeader}>
          <h2>All the Features <span className={styles.blueGlow}>You Might Need</span></h2>
          <p>Explore all the powerful features we offer. Pick what’s right for your business.</p>
        </div>

        <div className={styles.catalogLayout}>
          {/* SIDEBAR WITH FIXED HEADER-SAFE STICKY */}
          <aside className={styles.sidebar}>
            <button
              className={`${styles.sideItem} ${activeCategory === 'all' ? styles.sideActive : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <div className={styles.sideIconBox}><Icons.LayoutGrid size={18} /></div>
              <div className={styles.sideMeta}>
                <strong>All Features</strong>
                <span>View all options</span>
              </div>
            </button>
            <div className={styles.sideDivider} />
            {CATEGORIES_DATA?.map(cat => (
              <button
                key={cat.id}
                className={`${styles.sideItem} ${activeCategory === cat.id ? styles.sideActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div className={styles.sideIconBox}>
                  <DynamicIcon name={cat.iconName} />
                </div>
                <div className={styles.sideMeta}>
                  <strong>{cat.title}</strong>
                  <span>{cat.subtitle}</span>
                </div>
              </button>
            ))}
          </aside>

          {/* CARDS CONTAINER IN RECTANGULAR WRAPPER BOXES */}
          <main className={styles.cardsContainer}>
            {CATEGORIES_DATA
              ?.filter(cat => activeCategory === 'all' || activeCategory === cat.id)
              .map(cat => (
                <div key={cat.id} className={styles.categoryOuterBox}>
                  
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryTitleRow}>
                      <div className={styles.catIconPill}>
                        <DynamicIcon name={cat.iconName} />
                      </div>
                      <div>
                        <h3>{cat.title}</h3>
                        <p>{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardsGrid}>
                    {cat.items?.map(item => {
                      const isSelected = selectedIds.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          className={`${styles.featureCard} ${isSelected ? styles.cardSelected : ''}`}
                          onClick={() => toggleItem(item.id)}
                        >
                          <div className={styles.cardMockupContainer}>
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className={styles.cardRealImg} 
                              loading="lazy"
                            />
                          </div>
                          
                          <div className={styles.cardContent}>
                            <div className={styles.cardTitleRow}>
                              <h4>{item.title}</h4>
                              <span className={styles.priceTag}>£{item.price}</span>
                            </div>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}

            <div className={styles.bottomBanner}>
              <h4>Don't see what you need?</h4>
              <p>We can build custom features tailored to your business.</p>

              <Link 
                to="/ContactUs" 
                className={styles.blueBtn} 
                style={{ textDecoration: 'none' }}
              >
                Get a Custom Solution →
              </Link>
            </div>
          </main>
        </div>
      </section>

    </div>
  );
}