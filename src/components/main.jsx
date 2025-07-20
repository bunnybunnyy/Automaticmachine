import React, { useRef } from 'react';
import './main.css';

const Main = () => {
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Hamburger menu logic
  React.useEffect(() => {
    const hamburger = hamburgerRef.current;
    const navLinks = navLinksRef.current;
    const navLinkItems = navLinks.querySelectorAll('a');

    function closeMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    function handleHamburgerClick(e) {
      e.stopPropagation();
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
      // Prevent background scroll when menu is open
      if (!expanded) {
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
      }
    }

    function handleDocumentClick(e) {
      if (window.innerWidth <= 600 && navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          closeMenu();
        }
      }
    }

    function handleResize() {
      if (window.innerWidth > 600) {
        closeMenu();
      }
    }

    hamburger.addEventListener('click', handleHamburgerClick);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
          closeMenu();
        }
      });
    });
    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      navLinkItems.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  // WhatsApp form logic
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const issue = form.issue.value;
    const address = form.address.value;
    const date = form.date.value;
    const time = form.time.value;
    const message =
      'Repair Request%0A' +
      'Name: ' + encodeURIComponent(name) + '%0A' +
      'Phone: ' + encodeURIComponent(phone) + '%0A' +
      'Issue: ' + encodeURIComponent(issue) + '%0A' +
      'Address: ' + encodeURIComponent(address) + '%0A' +
      'Preferred Date: ' + encodeURIComponent(date) + '%0A' +
      'Preferred Time: ' + encodeURIComponent(time);
    const whatsappNumber = '923317897503';
    window.open('https://wa.me/' + whatsappNumber + '?text=' + message, '_blank');
    form.reset();
  };

  return (
    <>
<nav>
        <div className="nav-header">
          <img src="https://st2.depositphotos.com/4397757/10561/v/450/depositphotos_105612920-stock-illustration-washing-machines-repair-service-logo.jpg" alt="Logo" />
          <button className="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links" ref={hamburgerRef}>
            <span style={{display: 'block', width: '26px', height: '3px', background: 'black', border: '1px solid red', margin: 0}}>&nbsp;</span>
            <span style={{display: 'block', width: '26px', height: '3px', background: 'black', border: '1px solid red', margin: '4px 0'}}>&nbsp;</span>
            <span style={{display: 'block', width: '26px', height: '3px', background: 'black', border: '1px solid red', margin: 0}}>&nbsp;</span>
          </button>
  </div>
        <div id="nav-links" ref={navLinksRef}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#location">Location</a>
  </div>
</nav>
      <div id="home" className="hero">
        <div className="img-box">
          <img src="https://nadeemacservice.pk/wp-content/uploads/2023/01/automatic-machine-2.jpg" alt="Hero Background" />
        </div>
        <div className="content">
<h2>Best Automatic Washing Machine Repair</h2>
<p>Expert residential and commercial repair services with quality and 100% satisfaction</p>
          <button onClick={() => window.location.href='tel:+923317897503'}>Call Us</button>
          <button onClick={() => window.location.href='#contact'}>Get Free Estimate</button>
</div>
</div>
      <div id="about" className="about">
<h1>Who We Are</h1>
        <h3>One of the Top maintenance & Repair Company in Islamabad</h3>
<p>Since 2010,Friends Traders has been offering high quality and affordable repair and maintenance solutions to homeowners and businesses in Islamabad. We have been in business for more than a decade and we have built up a good reputation for  providing professional, efficient and customer focused services. The quality which sets us apart from other islamabad local services providers is that we are highly skilled technicians and committed to providing you the high caliber services whether it’s for routine maintenance or urgent repairs. From AC services, plumbing, electrical, HVAC or general home improvements,  we are here to meet your needs with expertise.</p>
        <div className="img-box">
          <img src="https://media.istockphoto.com/id/1309386943/photo/worker-repairing-washing-machine-in-laundry-room.jpg?s=612x612&w=0&k=20&c=Geo6u0Bo_JMcipJBTHcDcB-ogo5bEcnz7HXv8WCQsog=" alt="Hero Background" />
        </div>
</div>
<section>
    <h1>
        We are Reapairing All Type Of Automatic Machine
    </h1>
      <div id="repair" className="gallery">
        <div className="gallery-item">
          <div className="img-box">
            <img src="https://img.freepik.com/premium-photo/serviceman-repairs-broken-washing-machine-near-beige-wall_255755-4906.jpg" alt="Repair 1" />
          </div>
          <div className="img-caption">Diagnosing washing machine motor issues</div>
  </div>
        <div className="gallery-item">
          <div className="img-box">
            <img src="https://t3.ftcdn.net/jpg/04/23/35/16/360_F_423351639_qcIVh5khAZrpTdIHakM5n8G6wtgFIA7y.jpg" alt="Repair 2" />
          </div>
          <div className="img-caption">Replacing faulty water inlet valves</div>
  </div>
        <div className="gallery-item">
          <div className="img-box">
            <img src="https://brightfixing.com/wp-content/uploads/2025/01/front-load-washing-machine-repair-in-dubai.png" alt="Repair 3" />
          </div>
          <div className="img-caption">Front-load washing machine drum repair</div>
  </div>
        <div className="gallery-item">
          <div className="img-box">
            <img src="https://gulfcoastappliances.com/wp-content/uploads/2023/12/Washing-Machine-Repair-in-Clearwater-FL.jpeg" alt="Repair 4" />
          </div>
          <div className="img-caption">Expert cleaning and maintenance service</div>
  </div>
        <div className="gallery-item">
          <div className="img-box">
            <img src="https://fixitt.co.za/wp-content/uploads/2020/04/washing-machine-repair.jpg" alt="Repair 5" />
          </div>
          <div className="img-caption">Fixing drainage and water pump problems</div>
  </div>
        <div className="gallery-item">
          <div className="img-box">
            <img src="https://media.istockphoto.com/id/2140183630/photo/repairman-using-a-screwdriver-disassembles-a-washing-machine-for-repair.jpg?s=612x612&w=0&k=20&c=vpLsKVsKm8LEUIBknDNzyrB8jQQHVL2Ib8oG72ymazM=" alt="Repair 6" />
          </div>
          <div className="img-caption">Professional disassembly for complex repairs</div>
  </div>
</div>
</section>
      <div id="contact" className="contact-section">
<h3>Contact Us</h3>
        <form id="repairForm" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="03XXXXXXXXX" required />
          <label htmlFor="issue">Issue</label>
<select id="issue" name="issue" required>
<option value="">Select issue</option>
<option value="Not Turning On">Not Turning On</option>
<option value="Water Leakage">Water Leakage</option>
<option value="Noise During Operation">Noise During Operation</option>
<option value="Drum Not Spinning">Drum Not Spinning</option>
<option value="Other">Other</option>
</select>
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" placeholder="Your address" rows={3} required></textarea>
          <label htmlFor="date">Preferred Date</label>
          <input type="date" id="date" name="date" required />
          <label htmlFor="time">Preferred Time</label>
          <input type="time" id="time" name="time" required />
          <button type="submit" className="submit-btn">Book Repair</button>
</form>
</div>
      <div className="map-info-section" id="location">
        <div className="shop-info">
    <h3>Our Shop</h3>
          <p><strong>Friends Traders</strong><br />Near Waris Khan Metro Station Rawalpindi, Pakistan</p>
    <p>We are your trusted experts for automatic washing machine repair and maintenance in Islamabad. Visit our shop for in-person consultations, spare parts, and fast service. Our experienced technicians are always ready to help you with any appliance issue.</p>
  </div>
        <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53158.42491024534!2d72.99322843551634!3d33.62082872699708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95e951af7adb%3A0x573067e256df96f1!2sfriend%20traders!5e0!3m2!1sen!2s!4v1752927444760!5m2!1sen!2s"
            width="100%" height="260" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="Friends Traders Location"
          />
  </div>
</div>
<footer>
© 2025 Friends Traders Washing Machine Repair. All rights reserved.
</footer>
      <a className="whatsapp-btn" href="https://wa.me/+923317897503" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.111 6.479 6.58 2.01 12.149 2c2.652.004 5.146 1.037 7.019 2.912A9.822 9.822 0 0122.3 12.08c-.003 5.568-4.472 10.037-9.949 10.037zm8.413-17.453A11.815 11.815 0 0012.146.001C5.615.013.111 5.522.1 12.049c0 2.124.557 4.199 1.615 6.021L.057 23.925a1 1 0 001.225 1.225l5.858-1.541a11.888 11.888 0 005.006 1.163h.005c6.531-.012 11.035-5.521 11.049-12.048a11.87 11.87 0 00-3.315-8.668z" />
    </svg>
  </a>
    </>
  );
};

export default Main;