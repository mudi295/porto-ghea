import { useEffect, useState } from 'react'
import AOS from 'aos'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Instagram, Mail, Menu, X,
  Sparkles, MapPin, Camera, Heart, Play, ExternalLink
} from 'lucide-react'

const navItems = [
  ['About', '#about'], ['Portfolio', '#portfolio'], ['Achievements', '#achievements'],
  ['Activities', '#activities'], ['Contact', '#contact'],
]

const categories = [
  { number: '01', title: 'Digital Creator', sub: 'Lifestyle · Beauty · Culinary', image: '/images/creator.jpeg', className: 'tile-creator' },
  { number: '02', title: 'Muse & Model', sub: 'Beauty · Editorial · Catwalk', image: '/images/model.jpeg', className: 'tile-model' },
  { number: '03', title: 'Brand Partner', sub: 'Campaign · Collaboration', image: '/images/brand.jpeg', className: 'tile-brand' },
  { number: '04', title: 'Public Figure', sub: 'Culture · Youth · Advocacy', image: '/images/ambassador.jpeg', className: 'tile-ambassador' },
]

const achievements = [
  { year: '2025', title: 'Duta Siswa Utama Putri', place: 'Kota Sukabumi' },
  { year: '2024', title: 'Mojang Kewes', place: 'Kota Sukabumi' },
  { year: '2024', title: 'Duta Hukum & HAM', place: 'Jawa Barat' },
  { year: 'GEN 11', title: 'Brand Ambassador', place: 'Forum OSIS Jawa Barat' },
]

function ThreeAccent() {
  return (
    <div className="three-accent" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.7} />
        <directionalLight position={[3, 3, 4]} intensity={2.5} color="#fff1f7" />
        <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.1}>
          <Sphere args={[1.25, 64, 64]} scale={1.15}>
            <MeshDistortMaterial color="#e7a8c0" roughness={0.23} metalness={0.12} distort={0.32} speed={1.8} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  )
}

function ImagePlaceholder({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`image-placeholder ${className} ${failed ? 'placeholder-fallback' : ''}`}>
      {!failed && <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />}
      {failed && (
        <div className="placeholder-label">
          <Camera size={23} strokeWidth={1.2} />
          <span>Tempat foto</span>
          <small>{src.split('/').pop()}</small>
        </div>
      )}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Ghea Djanie home">
        <span className="brand-copy"><strong>GHEA DJANIE</strong><small>CREATIVE PORTFOLIO</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Let’s collaborate <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Let’s collaborate <ArrowUpRight size={15} /></a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 100])
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-copy" data-aos="fade-up" data-aos-duration="900">
        <p className="eyebrow"><span className="eyebrow-line" /> DIGITAL CREATOR <span>✳</span> MUSE <span>✳</span> MODEL</p>
        <h1>Rah Arghea<br /><em>Adjanie.</em></h1>
        <br />
        <div className="hero-meta"><span><MapPin size={15} /> Sukabumi, Indonesia</span><span className="meta-dot" /> <span>Open for collaboration</span></div>
        <div className="hero-actions">
          <a className="button button-dark" href="#portfolio">Explore my world <ArrowRight size={16} /></a>
          <a className="text-link" href="#about">Get to know me <ArrowDown size={15} /></a>
        </div>
      </div>
      <motion.div className="hero-visual" style={{ y }} data-aos="fade-left" data-aos-delay="150">
        <div className="hero-image-frame">
          <ImagePlaceholder src="/images/hero-potrait.jpeg" alt="Foto portrait utama Rah Arghea Adजanie" className="hero-image" />
          <div className="hero-image-wash" />
          <div className="portrait-caption"><span>THE CREATIVE JOURNEY</span><strong>Ghea Djanie</strong></div>
        </div>
        <div className="hero-sticker"><Sparkles size={18} /><span>Creating<br />with purpose</span></div>
        <div className="hero-orbit" />
        <ThreeAccent />
      </motion.div>
      <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /><span>01 — 05</span></div>
    </section>
  )
}

function FourGrid() {
  return (
    <section className="intro-grid-section section-wrap" id="portfolio">
      <div className="section-heading" data-aos="fade-up">
        <p className="eyebrow">A WORLD OF MY OWN</p>
        <h2>Different sides,<br /><em>one story.</em></h2>
        <p className="section-intro">From creating digital stories to stepping in front of the camera, every chapter is a chance to connect and create.</p>
      </div>
      <div className="four-grid">
        {categories.map((item, i) => (
          <a className={`category-tile ${item.className}`} href={i === 3 ? '#achievements' : i === 2 ? '#collaborations' : '#activities'} key={item.number} data-aos="fade-up" data-aos-delay={i * 100}>
            <ImagePlaceholder src={item.image} alt={`Foto ${item.title}`} className="tile-image" />
            <span className="tile-number">{item.number} / 04</span>
            <div className="tile-overlay" />
            <div className="tile-copy"><span>{item.sub}</span><h3>{item.title}</h3></div>
            <span className="tile-arrow"><ArrowUpRight size={18} /></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function VideoHighlight() {
  return (
    <section className="highlight-section" aria-label="Video highlight">
      <video className="highlight-video" autoPlay muted loop playsInline poster="/images/highlight-poster.jpg">
        <source src="/videos/highlight.mp4" type="video/mp4" />
      </video>
      <div className="highlight-fallback" />
      <div className="highlight-tint" />
      <div className="highlight-grain" />
      <div className="highlight-content" data-aos="zoom-in" data-aos-duration="1100">
        <p className="eyebrow">A MOMENT, A MEMORY, A STORY</p>
        <h2>Rah Arghea<br /><em>Adjanie</em></h2>
        <p>Creating moments that feel like me.</p>
        <a href="#activities" className="highlight-link">Discover the highlights <ArrowRight size={16} /></a>
      </div>
      <span className="highlight-side-label">GHEA DJANIE · VISUAL DIARY</span>
      <span className="highlight-index">02 — VISUAL STORYTELLING</span>
    </section>
  )
}

function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="about-photo" data-aos="fade-right">
        <ImagePlaceholder src="/images/about-portrait.jpeg" alt="Foto Ghea untuk bagian about" className="about-image" />
        <span className="photo-note">A little piece of me <Heart size={13} /></span>
      </div>
      <div className="about-copy" data-aos="fade-left">
        <p className="eyebrow">01 / THE PERSON BEHIND THE STORY</p>
        <h2>Hello,<br /><em>it’s Ghea.</em></h2>
        <p>Halo, saya Rah Arghea Adjanie, berasal dari Kota Sukabumi. Sejak SMP saya senang membuat konten digital, mix and match outfit, dan mengeksplorasi kuliner.</p>
        <p>Saat ini saya menjadi seorang kreator digital yang dipercaya bekerja sama dengan berbagai brand di bidang skincare dan kecantikan, food, fashion, management, serta entertainment.</p>
        <blockquote>“Curiosity inspires me to explore, create, and grow.”</blockquote>
        <a className="text-link" href="#contact">Let’s make something meaningful <ArrowRight size={15} /></a>
      </div>
    </section>
  ) 
}

function Collaborations() {
  const brands = [
    ['01', 'Food & Culinary', 'A taste for stories'],
    ['02', 'Beauty & Skincare', 'Glow with confidence'],
    ['03', 'Fashion & Style', 'Style with a point of view'],
    ['04', 'Company & Brand', 'Partnerships with purpose'],
  ]
  return (
    <section id="collaborations" className="collab-section section-wrap">
      <div className="section-heading centered" data-aos="fade-up">
        <p className="eyebrow">03 / SELECTED COLLABORATIONS</p>
        <h2>Good stories are<br /><em>better together.</em></h2>
        <p className="section-intro">Creative partnerships built on authentic storytelling, shared values, and memorable experiences.</p>
      </div>
      <div className="collab-grid">
        {brands.map((brand, i) => (
          <div className="collab-card" key={brand[0]} data-aos="fade-up" data-aos-delay={i * 90}>
            <span>{brand[0]} <ArrowUpRight size={16} /></span>
            <div className="collab-symbol"><Sparkles size={23} strokeWidth={1.1} /></div>
            <h3>{brand[1]}</h3><p>{brand[2]}</p>
            <small>BRAND CATEGORY</small>
          </div>
        ))}
      </div>
      <p className="fine-print">Brand names and campaign imagery can be added here when the final assets are ready.</p>
    </section>
  )
}

function ModelPortfolio() {
  return (
    <section className="model-section section-wrap">
      <div className="model-heading" data-aos="fade-up">
        <div><p className="eyebrow">04 / IN FRONT OF THE CAMERA</p><h2>Muse <em>& Model.</em></h2></div>
        <p>Beauty, movement, and the art of expressing a story without saying a word.</p>
      </div>
      <div className="model-gallery">
        <div className="gallery-item gallery-tall" data-aos="fade-up"><ImagePlaceholder src="/images/model-beauty.jpeg" alt="Foto makeup muse" /><span>01 — BEAUTY EDITORIAL</span></div>
        <div className="gallery-item gallery-wide" data-aos="fade-up" data-aos-delay="100"><ImagePlaceholder src="/images/model-fashion.jpeg" alt="Foto fashion editorial" /><span>02 — FASHION STORY</span></div>
        <div className="gallery-item gallery-small" data-aos="fade-up" data-aos-delay="180"><ImagePlaceholder src="/images/model-portrait.jpeg" alt="Foto portrait model" /><span>03 — PORTRAIT</span></div>
        <div className="gallery-item gallery-small" data-aos="fade-up" data-aos-delay="240"><ImagePlaceholder src="/images/model-catwalk.jpeg" alt="Foto catwalk" /><span>04 — CATWALK</span></div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="achievement-section" id="achievements">
      <div className="section-wrap achievement-inner">
        <div className="achievement-intro" data-aos="fade-right">
          <p className="eyebrow">05 / MILESTONES & PURPOSE</p>
          <h2>More than<br /><em>a title.</em></h2>
          <p>Every opportunity is a responsibility to learn, represent, and create a positive impact in the community.</p>
          <div className="achievement-photo-wrap">
  <ImagePlaceholder
    src="/images/achievement.jpeg"
    alt="Foto kegiatan dan prestasi"
    className="achievement-photo"
  />
</div>
        </div>
        <div className="achievement-list">
          {achievements.map((item, i) => (
            <article className="achievement-row" key={item.title} data-aos="fade-up" data-aos-delay={i * 70}>
              <span className="achievement-year">{item.year}</span>
              <div><h3>{item.title}</h3><p>{item.place}</p></div>
              <ArrowUpRight size={19} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Activities() {
  const videos = [
    {
      src: '/videos/photoshoot-highlight.MOV',
      poster: '/images/muse-poster.jpg',
      title: 'Photoshoot Moments',
      category: 'MUSE',
      number: '01',
    },
    {
      src: '/videos/mc-highlight.MOV',
      poster: '/images/mc-poster.jpg',
      title: 'On the Mic',
      category: 'HOSTING & MC',
      number: '02',
    },
    {
      src: '/videos/model-highlight.mp4',
      poster: '/images/model-poster.jpg',
      title: 'Model in Motion',
      category: 'FASHION & MODELING',
      number: '03',
    },
  ];

  return (
    <section
      className="activities-section section-wrap"
      id="activities"
    >
      <div className="section-heading" data-aos="fade-up">
        <p className="eyebrow">06 / BEHIND THE SCENES</p>

        <h2>
          Life in <em>motion.</em>
        </h2>

        <p className="section-intro">
          A glimpse into my world — from the spotlight to
          the moments behind the scenes.
        </p>
      </div>

      <div className="activity-strip">
        {videos.map((video, i) => (
          <article
            className="activity-card"
            data-aos="fade-up"
            data-aos-delay={i * 120}
            key={video.src}
          >
            <div className="activity-video">
               <video
  src={video.src}
  poster={video.poster}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label={video.title}
/>

              <span className="activity-video-number">
                {video.number}
              </span>
            </div>

            <div className="activity-caption">
              <span>{video.category}</span>
              <h3>{video.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = ['MC / Moderator', 'Photoshoot / Makeup Muse', 'Model / Catwalk', 'Talent', 'Speaker / Narasumber', 'Brand Collaboration / Campaign']
  return (
    <section className="services-section section-wrap">
      <div className="services-top" data-aos="fade-up">
        <p className="eyebrow">07 / OPEN FOR OPPORTUNITIES</p>
        <h2>Let’s create<br /><em>something lovely.</em></h2>
        <p>Currently based in Sukabumi and open to creative collaborations, professional engagements, and meaningful projects.</p>
      </div>
      <div className="services-list">
        {services.map((service, i) => (
          <a href="#contact" className="service-row" key={service} data-aos="fade-up" data-aos-delay={i * 45}>
            <span>0{i + 1}</span><h3>{service}</h3><span className="service-rate">{i === 5 ? 'Let’s discuss' : 'Available'}</span><ArrowUpRight size={19} />
          </a>
        ))}
        <p className="rate-note">Rate card available upon discussion.</p>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-orb"><ThreeAccent /></div>
      <div className="contact-main section-wrap">
        <div className="contact-copy" data-aos="fade-up">
          <p className="eyebrow">LET’S START A CONVERSATION</p>
          <h2>Have a story<br />in <em>mind?</em></h2>
          <p>Let’s bring your next creative idea to life.</p>
          <a href="mailto:gheadjanie99@gmail.com" className="contact-email">gheadjanie99@gmail.com <ArrowUpRight size={18} /></a>
          <div className="social-links">
            <a href="https://www.instagram.com/gheadjanie/" target="_blank" rel="noreferrer"><Instagram size={17} /> @gheadjanie <ExternalLink size={13} /></a>
            <span><MapPin size={16} /> Sukabumi, Indonesia</span>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom section-wrap">
        <a href="#home" className="footer-logo">Ghea Djanie<span>.</span></a>
        <span>© 2026 Ghea Djanie · Made with care</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 850, easing: 'ease-out-cubic', once: true, offset: 75, mirror: false, disable: 'mobile' === 'never' ? false : false })
    const refresh = () => AOS.refresh()
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FourGrid />
        <VideoHighlight />
        <About />
        <Collaborations />
        <ModelPortfolio />
        <Achievements />
        <Activities />
        <Services />
      </main>
      <Contact />
    </>
  )
}