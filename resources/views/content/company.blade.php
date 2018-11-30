@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="wrap">
      <div class="info">
        <div class="info__main">
          <div class="info__pic">
            <img src="img/tesla.png">
          </div>
          <div class="info__text">
            <p class="info__title">Tesla</p>
            <p class="info__subtitle">NOSDAQ: TSLA</p>
          </div>
          <div class="info__stock info__stock--increase">
            @include('svg.chevron')
            <span>314.86</span>
          </div>
        </div>
        <div class="info__detail">
          <ul class="info__tabs">
            <li class="info__tab-item">
              <a class="info__tab-link info__tab-link--active" href="#">Сводка</a>
            </li>
            <li class="info__tab-item">
              <a class="info__tab-link" href="#">Дочерние компании</a>
            </li>
          </ul>
          <div class="info__tabs-content">
            <div class="info__tab-content info__tab-content--active">
              <div class="info__brief">
                <p class="info__caption">Основание</p>
                <div class="info__description"> 
                  <p>23 мая 2003</p>
                </div>
                <p class="info__caption">Отрасль</p>
                <div class="info__description"> 
                  <p>Автомобилестроение </p>
                  <p>Солнечная энергетика</p>
                </div>
                <p class="info__caption">Рыночная капитализация</p>
                <div class="info__description"> 
                  <p>$53.708.000.000</p>
                </div>
                <p class="info__caption">Акции в обращении</p>
                <div class="info__description"> 
                  <p>170.583.344</p>
                </div>
              </div>
              <div class="info__contact">
                <p class="info__contact-title">Контактная информация</p>
                <p class="info__caption">Юридический адрес</p>
                <div class="info__description"> 
                  <p>Palo Alto, CA 94304–1317, United States</p>
                </div>
                <p class="info__caption">Телефон</p>
                <div class="info__description"> 
                  <p>+1–650–681–50–00</p>
                </div>
                <p class="info__caption">Факс</p>
                <div class="info__description"> 
                  <p>302–655–50–49</p>
                </div>
                <p class="info__caption">Веб-сайт</p>
                <div class="info__description"> <a href="#">tesla.com</a></div>
              </div>
            </div>
            <div class="info__tab-content">
              <div class="info__content">
                <ul class="info__filial-list">
                  <li class="info__filial-item">
                    <a class="info__filial-link" href="#">Filial 1</a>
                  </li>
                  <li class="info__filial-item">
                    <a class="info__filial-link" href="#">Filial 2</a>
                  </li>
                  <li class="info__filial-item">
                    <a class="info__filial-link" href="#">Filial 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-wrap">
        <div class="chart">
          <div class="chart__wrap">
            <p class="block-title">О Tesla в цифрах</p>
            <ul class="chart__tab-list">
              <li class="chart__tab-item">
                <a class="chart__tab-link chart__tab-link--active" href="#">Стоимость акций</a>
              </li>
              <li class="chart__tab-item">
                <a class="chart__tab-link" href="#">Биография</a>
              </li>
            </ul>
          </div>
          <div class="chart__tab-content chart__tab-content--active">
            <div id="diagram"></div>
            <ul class="chart__filter">
              <li class="chart__filter-item">
                <a class="chart__filter-link" href="#">Минута</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link" href="#">Час</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link chart__filter-link--active" href="#">День</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link" href="#">Неделя</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link" href="#">Месяц</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link" href="#">Квартал</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link" href="#">Год</a>
              </li>
              <li class="chart__filter-item">
                <a class="chart__filter-link chart__filter-link" href="#">Все время</a>
              </li>
            </ul>
          </div>
          <div class="chart__tab-content">
            <p>Tesla (читается Тэ́сла, ранее Tesla Motors) — американская компания, производитель электромобилей и (через свой филиал SolarCity) решений для хранения электрической энергии.</p>
            <p>Компания была основана в июле 2003 года Мартином Эберхардом и Марком Тарпеннингом, но сама компания считает Илона Маска, Джеффри Брайана Штробеля и Иэна Райта почти её сооснователями.</p>
            <p>Названа в честь всемирно известного электротехника и физика Николы Теслы.</p>
          </div>
        </div>
        <div class="news">
          <div class="news__wrap">
            <p class="block-title">Новости о компании</p>
            <ul class="news__sources">
              <li class="news__source">
                <a class="news__source-link news__source-link--active" href="#">В интернете</a>
              </li>
              <li class="news__source">
                <a class="news__source-link" href="#">Incomer Finance</a>
              </li>
            </ul>
          </div>
          <div class="news__tabs">
            <div class="news__tab news__tab--active">
              <div class="news__day">
                <p class="news__date">Сегодня, 4 ноября</p>
                <ul class="news__list">
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">14:35</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">14:30</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">13:29</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">13:12</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">12:01</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:51</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:36</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:09</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:08</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:02</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">09:48</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">09:42</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="news__day">
                <p class="news__date">Вчера, 3 ноября</p>
                <ul class="news__list">
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">14:35</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">14:30</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">13:29</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">13:12</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">12:01</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:51</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:36</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:09</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:08</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:02</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">09:48</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">09:42</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                </ul>
              </div>
              <button class="news__continue">Показать ещё</button>
            </div>
            <div class="news__tab">
              <div class="news__day">
                <p class="news__date">Сегодня, 4 ноября</p>
                <ul class="news__list">
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">14:35</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">14:30</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">13:29</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">13:12</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">12:01</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:51</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:36</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:09</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:08</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">11:02</span>
                      <p class="news__content">В Госдуме пообещали крипторублю судьбу традиционных денег</p>
                      <span class="news__site">forbes.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">09:48</span>
                      <p class="news__content">Вы могли это пропустить: падение объема торгов и подъем крипторынка</p>
                      <span class="news__site">lenta.ru</span>
                    </a>
                  </li>
                  <li class="news__item">
                    <a class="news__link" href="#">
                      <span class="news__time">09:42</span>
                      <p class="news__content">Производство Tesla 3 достигло 6.000 единиц в сутки</p>
                      <span class="news__site">rbc.ru</span>
                    </a>
                  </li>
                </ul>
              </div>
              <button class="news__continue">Показать ещё</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
