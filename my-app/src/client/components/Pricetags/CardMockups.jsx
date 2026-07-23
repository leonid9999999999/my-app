import React from 'react';
import styles from './CardMockups.module.css';

export default function CardMockups({ type }) {
  switch (type) {
    /* 1. FOUNDATION */
    case 'browser':
      return (
        <div className={styles.mockupBrowser}>
          <div className={styles.browserHeader}><span /><span /><span /></div>
          <div className={styles.browserBody}>
            <div className={styles.skeletonNav} />
            <div className={styles.skeletonHero} />
          </div>
        </div>
      );
    case 'devices':
      return (
        <div className={styles.mockupDevices}>
          <div className={styles.desktopFrame}><div className={styles.screenInner} /></div>
          <div className={styles.mobileFrame} />
        </div>
      );
    case 'gauge':
      return (
        <div className={styles.mockupSpeed}>
          <div className={styles.speedArc} />
          <div className={styles.speedValue}>100%</div>
        </div>
      );
    case 'shield':
      return (
        <div className={styles.mockupShield}>
          <div className={styles.shieldBadge}>✓ SECURE</div>
        </div>
      );
    case 'server':
      return (
        <div className={styles.mockupServer}>
          <div className={styles.serverLine}><span className={styles.dotOn} /></div>
          <div className={styles.serverLine}><span className={styles.dotOn} /></div>
        </div>
      );
    case 'chart':
      return (
        <div className={styles.mockupChart}>
          <div className={styles.bar} style={{ height: '40%' }} />
          <div className={styles.bar} style={{ height: '70%' }} />
          <div className={styles.barActive} style={{ height: '100%' }} />
          <div className={styles.bar} style={{ height: '60%' }} />
        </div>
      );

    /* 2. DESIGN & CONTENT */
    case 'palette':
      return (
        <div className={styles.mockupPalette}>
          <div className={styles.colorPill} style={{ background: '#3b82f6' }} />
          <div className={styles.colorPill} style={{ background: '#1d4ed8' }} />
          <div className={styles.colorPill} style={{ background: '#0f172a' }} />
        </div>
      );
    case 'brand':
      return (
        <div className={styles.mockupBrand}>
          <div className={styles.logoBadge}>LOGO</div>
          <div className={styles.brandText}>Aa</div>
        </div>
      );
    case 'wireframe':
      return (
        <div className={styles.mockupWireframe}>
          <div className={styles.wfHeader} />
          <div className={styles.wfGrid}><div /><div /></div>
        </div>
      );
    case 'image':
      return (
        <div className={styles.mockupImage}>
          <div className={styles.imgIcon}>🖼️</div>
        </div>
      );
    case 'text':
      return (
        <div className={styles.mockupText}>
          <div className={styles.lineLong} />
          <div className={styles.lineMedium} />
          <div className={styles.lineShort} />
        </div>
      );
    case 'shapes':
      return (
        <div className={styles.mockupShapes}>
          <div className={styles.shapeSquare} />
          <div className={styles.shapeCircle} />
        </div>
      );

    /* 3. PAGES */
    case 'profile':
      return (
        <div className={styles.mockupProfile}>
          <div className={styles.avatar} />
          <div className={styles.profileLines}><div /><div /></div>
        </div>
      );
    case 'list':
      return (
        <div className={styles.mockupList}>
          <div className={styles.listItem} />
          <div className={styles.listItem} />
        </div>
      );
    case 'grid':
      return (
        <div className={styles.mockupGrid}>
          <div /><div /><div /><div />
        </div>
      );

    /* 4. BUSINESS & E-COMMERCE */
    case 'form':
      return (
        <div className={styles.mockupForm}>
          <div className={styles.inputBox} />
          <div className={styles.btnBox} />
        </div>
      );
    case 'calendar':
      return (
        <div className={styles.mockupCal}>
          <div className={styles.calGrid}>
            <span /><span /><span className={styles.activeDay} /><span />
          </div>
        </div>
      );
    case 'creditCard':
      return (
        <div className={styles.mockupCreditCard}>
          <div className={styles.cardChip} />
          <div className={styles.cardNumber}>•••• 4242</div>
        </div>
      );
    case 'user':
      return (
        <div className={styles.mockupUser}>
          <div className={styles.userIcon} />
          <div className={styles.userBadge}>User</div>
        </div>
      );
    case 'globe':
      return (
        <div className={styles.mockupGlobe}>
          <span>EN</span> | <span className={styles.activeLang}>RU</span>
        </div>
      );
    case 'lock':
      return (
        <div className={styles.mockupLock}>
          <div className={styles.lockIcon}>🔒 VIP</div>
        </div>
      );
    case 'product':
      return (
        <div className={styles.mockupProduct}>
          <div className={styles.prodImg} />
          <div className={styles.prodTag}>£99</div>
        </div>
      );

    /* 5. INTEGRATIONS */
    case 'nodes':
      return (
        <div className={styles.mockupNodes}>
          <div className={styles.node} />
          <div className={styles.nodeLine} />
          <div className={styles.nodeActive} />
        </div>
      );
    case 'mail':
      return (
        <div className={styles.mockupMail}>
          <div className={styles.mailEnvelope}>✉️ Sent</div>
        </div>
      );
    case 'social':
      return (
        <div className={styles.mockupSocial}>
          <div className={styles.socIcon}>f</div>
          <div className={styles.socIcon}>in</div>
        </div>
      );
    case 'api':
      return (
        <div className={styles.mockupCode}>
          <code>{`{ status: 200 }`}</code>
        </div>
      );

    default:
      return (
        <div className={styles.mockupDefault}>
          <div className={styles.defaultBox} />
        </div>
      );
  }
}