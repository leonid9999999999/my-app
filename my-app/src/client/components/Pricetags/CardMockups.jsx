import React, { memo } from 'react';
import styles from './CardMockups.module.css';

// Карта макетов для замены громоздкого switch-case
const MOCKUP_COMPONENTS = {
  /* 1. FOUNDATION */
  browser: () => (
    <div className={styles.mockupBrowser}>
      <div className={styles.browserHeader}><span /><span /><span /></div>
      <div className={styles.browserBody}>
        <div className={styles.skeletonNav} />
        <div className={styles.skeletonHero} />
      </div>
    </div>
  ),
  devices: () => (
    <div className={styles.mockupDevices}>
      <div className={styles.desktopFrame}><div className={styles.screenInner} /></div>
      <div className={styles.mobileFrame} />
    </div>
  ),
  gauge: () => (
    <div className={styles.mockupSpeed}>
      <div className={styles.speedArc} />
      <div className={styles.speedValue}>100%</div>
    </div>
  ),
  shield: () => (
    <div className={styles.mockupShield}>
      <div className={styles.shieldBadge}>✓ SECURE</div>
    </div>
  ),
  server: () => (
    <div className={styles.mockupServer}>
      <div className={styles.serverLine}><span className={styles.dotOn} /></div>
      <div className={styles.serverLine}><span className={styles.dotOn} /></div>
    </div>
  ),
  chart: () => (
    <div className={styles.mockupChart}>
      <div className={styles.bar} style={{ height: '40%' }} />
      <div className={styles.bar} style={{ height: '70%' }} />
      <div className={styles.barActive} style={{ height: '100%' }} />
      <div className={styles.bar} style={{ height: '60%' }} />
    </div>
  ),

  /* 2. DESIGN & CONTENT */
  palette: () => (
    <div className={styles.mockupPalette}>
      <div className={styles.colorPill} style={{ background: '#3b82f6' }} />
      <div className={styles.colorPill} style={{ background: '#1d4ed8' }} />
      <div className={styles.colorPill} style={{ background: '#0f172a' }} />
    </div>
  ),
  brand: () => (
    <div className={styles.mockupBrand}>
      <div className={styles.logoBadge}>LOGO</div>
      <div className={styles.brandText}>Aa</div>
    </div>
  ),
  wireframe: () => (
    <div className={styles.mockupWireframe}>
      <div className={styles.wfHeader} />
      <div className={styles.wfGrid}><div /><div /></div>
    </div>
  ),
  image: () => (
    <div className={styles.mockupImage}>
      <div className={styles.imgIcon}>🖼️</div>
    </div>
  ),
  text: () => (
    <div className={styles.mockupText}>
      <div className={styles.lineLong} />
      <div className={styles.lineMedium} />
      <div className={styles.lineShort} />
    </div>
  ),
  shapes: () => (
    <div className={styles.mockupShapes}>
      <div className={styles.shapeSquare} />
      <div className={styles.shapeCircle} />
    </div>
  ),

  /* 3. PAGES */
  profile: () => (
    <div className={styles.mockupProfile}>
      <div className={styles.avatar} />
      <div className={styles.profileLines}><div /><div /></div>
    </div>
  ),
  list: () => (
    <div className={styles.mockupList}>
      <div className={styles.listItem} />
      <div className={styles.listItem} />
    </div>
  ),
  grid: () => (
    <div className={styles.mockupGrid}>
      <div /><div /><div /><div />
    </div>
  ),

  /* 4. BUSINESS & E-COMMERCE */
  form: () => (
    <div className={styles.mockupForm}>
      <div className={styles.inputBox} />
      <div className={styles.btnBox} />
    </div>
  ),
  calendar: () => (
    <div className={styles.mockupCal}>
      <div className={styles.calGrid}>
        <span /><span /><span className={styles.activeDay} /><span />
      </div>
    </div>
  ),
  creditCard: () => (
    <div className={styles.mockupCreditCard}>
      <div className={styles.cardChip} />
      <div className={styles.cardNumber}>•••• 4242</div>
    </div>
  ),
  user: () => (
    <div className={styles.mockupUser}>
      <div className={styles.userIcon} />
      <div className={styles.userBadge}>User</div>
    </div>
  ),
  globe: () => (
    <div className={styles.mockupGlobe}>
      <span>EN</span> | <span className={styles.activeLang}>RU</span>
    </div>
  ),
  lock: () => (
    <div className={styles.mockupLock}>
      <div className={styles.lockIcon}>🔒 VIP</div>
    </div>
  ),
  product: () => (
    <div className={styles.mockupProduct}>
      <div className={styles.prodImg} />
      <div className={styles.prodTag}>£99</div>
    </div>
  ),

  /* 5. INTEGRATIONS */
  nodes: () => (
    <div className={styles.mockupNodes}>
      <div className={styles.node} />
      <div className={styles.nodeLine} />
      <div className={styles.nodeActive} />
    </div>
  ),
  mail: () => (
    <div className={styles.mockupMail}>
      <div className={styles.mailEnvelope}>✉️ Sent</div>
    </div>
  ),
  social: () => (
    <div className={styles.mockupSocial}>
      <div className={styles.socIcon}>f</div>
      <div className={styles.socIcon}>in</div>
    </div>
  ),
  api: () => (
    <div className={styles.mockupCode}>
      <code>{`{ status: 200 }`}</code>
    </div>
  ),
};

// Дефолтный макет
const DefaultMockup = () => (
  <div className={styles.mockupDefault}>
    <div className={styles.defaultBox} />
  </div>
);

function CardMockups({ type }) {
  const MockupComponent = MOCKUP_COMPONENTS[type] || DefaultMockup;
  return <MockupComponent />;
}

// Оборачиваем в memo, так как пропс type статичен и компоненты легкие
export default memo(CardMockups);