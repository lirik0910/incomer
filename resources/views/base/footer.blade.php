<footer class="footer">
  <div class="container">
    <div class="footer__column">
      <a class="logo" href="{{ url('/') }}">
      @include('svg.logo-2')
      <!-- @include('svg.logo') -->
      </a>
      <span class="footer__copyright">© «Incomer Finance», 2018 г.</span>
      <ul class="social">
        <li class="social__item">
          <a class="social__link" href="#">
            @include('svg.facebook')
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#">
            @include('svg.vkontakte')
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#">
            @include('svg.google')
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__column">
      <ul class="footer__map">
        <li class="footer__map-item"><a class="footer__map-link" href="#">Компании</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Блокчейн</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Криптовалюты</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Прогнозы</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Треш</a></li>
      </ul>
    </div>
    <div class="footer__column">
      <ul class="footer__map">
        <li class="footer__map-item"><a class="footer__map-link" href="#">Контакты</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Рекламодателям</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Политика конфиденциальности</a></li>
        <li class="footer__map-item"><a class="footer__map-link" href="#">Правила использования</a></li>
      </ul>
    </div>
  </div>
</footer>
