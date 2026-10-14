import type { Metadata } from 'next';

const basePath = process.env.PAGES_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'F52 Privacy Policy | Rose Gold Code',
  description: 'How the F52 app handles your information. F52 has no accounts, analytics, or ads, and keeps your lists on your device.',
};

export default function F52Privacy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href={`${basePath}/`} aria-label="Rose Gold Code home"><span className="brand-mark" aria-hidden="true">{'{'}<span>·</span>{'}'}</span><span>Rose Gold Code</span></a>
        <nav aria-label="Main navigation"><a href={`${basePath}/#apps`}>Our apps</a><a href={`${basePath}/#about`}>About</a><a href={`${basePath}/#contact`}>Contact <span aria-hidden="true">↗</span></a></nav>
      </header>
      <main id="main" className="legal wrap">
        <p className="eyebrow">F52 · Privacy Policy</p>
        <h1>Your lists stay with you.</h1>
        <p className="legal-meta">Effective October 14, 2026</p>

        <section aria-labelledby="summary">
          <h2 id="summary">The short version</h2>
          <ul>
            <li>F52 has no accounts, sign-in, ads, analytics, or tracking.</li>
            <li>Your Seen and Watchlist lists, rankings, and settings are stored only on your device. We never receive them.</li>
            <li>To show films and shows, F52 loads data from The Movie Database (TMDB). Trailers come from YouTube. App updates come from Expo.</li>
            <li>We only hear from you if you email us.</li>
          </ul>
        </section>

        <section aria-labelledby="who">
          <h2 id="who">Who we are</h2>
          <p>F52 is made by Rose Gold Code LLC, an Arizona company (“we,” “us”). This policy explains what information the F52 iOS app handles and why. Questions are welcome at <a href="mailto:will@rosegoldcode.com">will@rosegoldcode.com</a>.</p>
        </section>

        <section aria-labelledby="device">
          <h2 id="device">Information stored on your device</h2>
          <p>F52 saves the titles you mark as Seen or add to your Watchlist, your rankings and sort progress, and your display preferences (like dark mode). This information is stored locally on your device. It is not sent to us or to anyone else, and we have no way to see it.</p>
          <p>If your iPhone is backed up to iCloud or a computer, Apple may include F52’s data in that backup, under Apple’s own privacy terms. To delete everything F52 has stored, delete the app.</p>
        </section>

        <section aria-labelledby="services">
          <h2 id="services">Services F52 connects to</h2>
          <p><strong>The Movie Database (TMDB).</strong> F52 requests film and TV information, artwork, and streaming availability from TMDB. Your search terms and the filters you choose are sent to TMDB to get results. Like any website or online service, TMDB receives your device’s IP address and basic technical information with each request. TMDB’s use of that information is covered by the <a href="https://www.themoviedb.org/privacy-policy">TMDB Privacy Policy</a>. F52 uses the TMDB API but is not endorsed or certified by TMDB.</p>
          <p><strong>YouTube.</strong> When a title has a trailer, F52 shows its thumbnail from YouTube and plays the trailer in an embedded YouTube player. YouTube, operated by Google, receives your IP address and may use cookies when the player loads. See the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.</p>
          <p><strong>Expo.</strong> When F52 starts, it checks Expo’s update service for bug fixes and improvements to download. Expo receives your device’s IP address and technical details needed to deliver the right update, such as the app version, platform, and an installation identifier. See the <a href="https://expo.dev/privacy">Expo Privacy Policy</a>.</p>
          <p>F52 does not send these services your name, email, or the contents of your lists.</p>
        </section>

        <section aria-labelledby="contact-us">
          <h2 id="contact-us">When you contact us</h2>
          <p>The Support and Feature Request options in Settings open your email app with a message addressed to us. A feature request includes the F52 version number so we know which release you are using. If you send the message, we receive your email address and whatever you write. We use it only to reply and to improve F52.</p>
        </section>

        <section aria-labelledby="apple">
          <h2 id="apple">Information from Apple</h2>
          <p>Apple may give us aggregated App Store statistics. If you have chosen to share analytics with app developers in your device settings, or you submit feedback through TestFlight, Apple may also give us crash reports and feedback. These are governed by Apple’s privacy policy and your device settings.</p>
        </section>

        <section aria-labelledby="sharing">
          <h2 id="sharing">What we don’t do</h2>
          <p>We do not sell or rent personal information, share it for advertising, or track you across other companies’ apps and websites. We would only disclose information we hold, such as an email you sent us, if required by law.</p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children">Children</h2>
          <p>F52 is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has emailed us personal information, contact us and we will delete it.</p>
        </section>

        <section aria-labelledby="choices">
          <h2 id="choices">Your choices</h2>
          <p>You can delete F52’s data at any time by deleting the app. To have us delete emails you have sent us, or to ask about any information we hold, email <a href="mailto:will@rosegoldcode.com">will@rosegoldcode.com</a>.</p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes">Changes to this policy</h2>
          <p>If F52 starts handling information differently, for example by adding accounts or analytics, we will update this page and the effective date before that change ships.</p>
        </section>
      </main>
      <footer className="site-footer wrap"><a className="footer-brand" href={`${basePath}/`}>Rose Gold Code LLC</a><p>© {new Date().getFullYear()} Rose Gold Code LLC</p><a href="mailto:will@rosegoldcode.com">Contact</a></footer>
    </>
  );
}
