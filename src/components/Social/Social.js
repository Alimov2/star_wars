import './Social.css'

export default function Social () {
  return (
    <div className="social">
      <ul className="social__links">
        <li className="social__icon"><a href="https://www.facebook.com/alimov.muhiddin.1/" target='blank'><ion-icon name="logo-facebook"></ion-icon></a></li>
        <li className="social__icon"><a href="https://www.instagram.com/_alim0v" target='blank'><ion-icon name="logo-instagram"></ion-icon></a></li>
      </ul>
      <a href="https://www.youtube.com/channel/UCtKgTdppusnEh6B6lSamBIg" target='blank' className="social__alimov">Alimov</a>
    </div>
  )
}
