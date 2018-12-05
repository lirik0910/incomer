@extends('layouts.app')
@section('content')
  <main class="main">
    <div class="container">
      <div class="wrap">
        <div class="info">
          <div class="info__main">
            <div class="info__pic">
              <img src={{ $info['logo'] ?? '' }}>
            </div>
            <div class="info__text">
              <input type="hidden" id="person_id" value="{{$company->id}}">
              <p class="info__title">{{ $company->name }}</p>
              <p class="info__subtitle">NOSDAQ: {{ $info['ticker'] ?? '' }}</p>
            </div>
            <div class="info__stock info__stock--increase">
              {{--@include('svg.chevron')--}}
              <span>{{$info['lastPrice'] ?? ''}}</span>
            </div>
          </div>
          <div class="info__detail">
            <ul class="info__tabs">
              <li class="info__tab-item">
                <a class="info__tab-link info__tab-link--active" href="#">Сводка</a>
              </li>
              <li class="info__tab-item">
                {{--<a class="info__tab-link" href="#">Дочерние компании</a>--}}
              </li>
            </ul>
            <div class="info__tabs-content">
              <div class="info__tab-content info__tab-content--active">
                <div class="info__brief">
                  <p class="info__caption">Основание</p>
                  <div class="info__description"> 
                    <p>{{ $info['founding_date']?? '' }}</p>
                  </div>
                  <p class="info__caption">Отрасль</p>
                  <div class="info__description">
                    {{ $info['industry'] ?? '' }}
                  </div>
                  <p class="info__caption">Рыночная капитализация</p>
                  <div class="info__description"> 
                    <p>${{ $info['market_capitalization'] ?? ''}}</p>
                  </div>
                  <p class="info__caption">Акции в обращении</p>
                  <div class="info__description"> 
                    <p>{{ $info['shares_in_circulation']?? '' }}</p>
                  </div>
                </div>
                <div class="info__contact">
                  <p class="info__contact-title">Контактная информация</p>
                  <p class="info__caption">Юридический адрес</p>
                  <div class="info__description"> 
                    <p>{{ $info['address']?? '' }}</p>
                  </div>
                  <p class="info__caption">Телефон</p>
                  <div class="info__description"> 
                    <p>{{ $info['phone']?? '' }}</p>
                  </div>
                  <p class="info__caption">Факс</p>
                  <div class="info__description"> 
                    <p>{{ $info['fax']?? '' }}</p>
                  </div>
                  <p class="info__caption">Веб-сайт</p>
                  <div class="info__description"> <a target="_blank" href="{{ $info['website'] ?? ''}}">{{ $info['website'] ?? ''}}</a></div>
                </div>
              </div>
              {{--<div class="info__tab-content">--}}
                {{--<div class="info__content">--}}
                  {{--<ul class="info__filial-list">--}}
                    {{--<li class="info__filial-item">--}}
                      {{--<a class="info__filial-link" href="#">Filial 1</a>--}}
                    {{--</li>--}}
                    {{--<li class="info__filial-item">--}}
                      {{--<a class="info__filial-link" href="#">Filial 2</a>--}}
                    {{--</li>--}}
                    {{--<li class="info__filial-item">--}}
                      {{--<a class="info__filial-link" href="#">Filial 3</a>--}}
                    {{--</li>--}}
                  {{--</ul>--}}
                {{--</div>--}}
              {{--</div>--}}
            </div>
          </div>
        </div>
        <div class="main-wrap">
          <div class="chart">
            <div class="chart__wrap">
              <p class="block-title">О {{ $company->name }}  в цифрах</p>
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
                  <a class="chart__filter-link" href="#" data-period="1minute">Минута</a>
                </li>
                <li class="chart__filter-item">
                  <a class="chart__filter-link" href="#" data-period="5minute">5 Минут</a>
                </li>
                <li class="chart__filter-item">
                  <a class="chart__filter-link" href="#" data-period="10minute">10 Минут</a>
                </li>
                <li class="chart__filter-item">
                  <a class="chart__filter-link chart__filter-link--active" href="#" data-period="1day">День</a>
                </li>
                <li class="chart__filter-item">
                  <a class="chart__filter-link" href="#" data-period="1week">Неделя</a>
                </li>
                <li class="chart__filter-item">
                  <a class="chart__filter-link" href="#" data-period="1month">Месяц</a>
                </li>
              </ul>
            </div>
            <div class="chart__tab-content">
              {!! $company->bio ?? '' !!}
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
  </main>
@endsection
