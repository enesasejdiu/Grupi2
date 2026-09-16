import { useState } from 'react'
import './App.css'

function App() {
  const [fuel, setFuel] = useState('Elektrike')
  const [driver, setDriver] = useState('Pa preference')
  const [destination, setDestination] = useState('')
  const [booked, setBooked] = useState(false)
  const vehicleOptions = [
    { name: 'Pa preferencë', symbol: '✦' },
    { name: 'Elektrike', symbol: '⚡' },
    { name: 'Benzinë', symbol: '◒' },
    { name: 'Diesel', symbol: '◆' },
  ]
  const price = fuel === 'Elektrike' ? '€8.40' : fuel === 'Benzinë' ? '€9.60' : fuel === 'Diesel' ? '€9.10' : '€8.90'
  const eta = fuel === 'Pa preferencë' ? '3–5 min' : fuel === 'Elektrike' ? '4–6 min' : '3–5 min'
  const handleBooking = (event) => { event.preventDefault(); if (destination.trim()) setBooked(true) }
  const cancelBooking = () => setBooked(false)

  return (
    <div className="app-shell">
      <header className="topbar"><a className="brand" href="#top"><span>R</span> rruga</a><nav><a className="nav-link active" href="#book">Rezervo taxi</a><a className="nav-link" href="#trips">Udhëtimet e mia</a></nav><button className="profile-button"><span className="avatar">AD</span> Ardit D. <b>⌄</b></button></header>
      <main id="top">
        <section className="intro"><div><p className="eyebrow">TAXI URBAN • PRISHTINË</p><h1>Shko ku të duhet,<br /><em>pa pritje.</em></h1><p className="intro-copy">Zgjidh veturën dhe shoferin që të përshtatet. Ne kujdesemi që rruga jote të jetë e sigurt dhe e rehatshme.</p></div><div className="status-pill"><span className="pulse"></span> 24 taksi aktive tani</div></section>
        <section className="workspace" id="book">
          <div className="booking-panel"><div className="panel-heading"><div><p className="section-kicker">01 / UDHËTIM I RI</p><h2>Ku po shkojmë?</h2></div><span className="round-icon">↗</span></div>
            <form onSubmit={handleBooking}><label className="field-label" htmlFor="pickup">Nisja</label><div className="input-wrap"><span className="dot green"></span><input id="pickup" value="Lokacioni im aktual" readOnly /></div><div className="route-line"></div><label className="field-label" htmlFor="destination">Destinacioni</label><div className="input-wrap destination-input"><span className="pin">⌖</span><input id="destination" placeholder="Ku dëshiron të shkosh?" value={destination} onChange={(event) => { setDestination(event.target.value); setBooked(false) }} required /></div>
              <div className="selection-group"><div className="field-label">Lloji i veturës</div><div className="choice-grid vehicle-grid">{vehicleOptions.map((option) => <button type="button" key={option.name} className={fuel === option.name ? 'choice selected' : 'choice'} onClick={() => setFuel(option.name)}><span className="choice-symbol">{option.symbol}</span><span>{option.name}</span>{fuel === option.name && <b>✓</b>}</button>)}</div></div>
              <div className="quick-destinations"><span className="field-label">Destinacione të shpejta</span>{['Aeroporti', 'Albi Mall', 'Qendra'].map((place) => <button type="button" key={place} onClick={() => { setDestination(place); setBooked(false) }}>{place}</button>)}</div>
              <div className="selection-group"><div className="field-label">Preferenca për shoferin</div><div className="choice-grid driver-grid">{['Pa preference', 'Femer', 'Mashkull'].map((option) => <button type="button" key={option} className={driver === option ? 'choice selected' : 'choice'} onClick={() => setDriver(option)}><span className="choice-symbol">{option === 'Pa preference' ? '✦' : option === 'Femer' ? '♀' : '♂'}</span><span>{option}</span></button>)}</div></div><button className="book-button" type="submit">{booked ? 'Kërko udhëtim tjetër' : 'Kërko taksi'} <span>→</span></button>{booked && <div className="ride-match"><div className="match-heading"><span className="match-check">✓</span><div><strong>Taksi u gjet</strong><small>Arrin për {eta}</small></div><span className="match-live"><span className="pulse"></span> LIVE</span></div><div className="driver-card"><span className="driver-photo">EB</span><div><strong>Erion B.</strong><small>★ 4.9 · 248 udhëtime</small></div><span className="car-number">01-234-AB</span></div><button className="cancel-button" type="button" onClick={cancelBooking}>Anulo kërkesën</button></div>}
            </form></div>
          <div className="map-panel"><div className="map-top"><div><p className="section-kicker">GJENDJA LIVE</p><h2>Prishtinë, Kosovë</h2></div><span className="map-live"><span className="pulse"></span> LIVE</span></div><div className="map-visual"><div className="map-label label-top">Ulpianë</div><div className="map-label label-left">Bregu i Diellit</div><div className="map-label label-right">Qendër</div><div className="map-label label-bottom">Arbëri</div><div className="road road-one"></div><div className="road road-two"></div><div className="road road-three"></div><div className="location-pin"><span>R</span></div><div className="taxi taxi-one">▰</div><div className="taxi taxi-two">▰</div><div className="taxi taxi-three">▰</div><div className="map-controls"><button>+</button><button>−</button></div></div><div className="arrival-card"><div><span className="mini-car">⚡</span><div><strong>{fuel} • {driver}</strong><small>Makina më e afërt</small></div></div><div className="arrival-time"><strong>{eta}</strong><small>{price} për udhëtim</small></div></div></div>
        </section>
        <section className="trust-row"><div><span className="trust-icon">◉</span><strong>Siguri e verifikuar</strong><small>Çdo shofer është i kontrolluar</small></div><div><span className="trust-icon">↯</span><strong>Çmim transparent</strong><small>Pa tarifa të fshehura</small></div><div><span className="trust-icon">♧</span><strong>Mbështetje 24/7</strong><small>Gjithmonë këtu për ty</small></div></section>
      </main><footer><span>rruga / platforma juaj e udhëtimit</span><span>© 2024 rruga</span></footer>
    </div>
  )
}

export default App
