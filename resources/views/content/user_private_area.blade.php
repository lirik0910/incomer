@extends('layouts.app')
@section('content')
    @php
    //var_dump($user); die;
    @endphp
  <main class="main">
    <div class="container">
      <div class="profile">
        <div class="profile__info">
          <form class="avatarUploader" runat="server">
            <!--<input name="logo" type="file" id="avatarInput">-->
            <img src="@if(!empty($user->logo)) {{ $user->logo }} @else img/default-user.png @endif" alt="avatar" id="avatar">
          </form>
          <p class="profile__name">{{ $user->username }}</p>
          <p class="profile__role">Читатель</p>
          <ul class="profile__menu-list">
              <li class="profile__menu-item">
                  <a class="profile__menu-link" href="#info">Личная информация</a>
              </li>
            <!--<li class="profile__menu-item">
              <a class="profile__menu-link" href="#settings">Настройки профиля</a>
            </li>-->
            <!--<li class="profile__menu-item">
              <a class="profile__menu-link" href="#">Интересы</a>
            </li>
            <li class="profile__menu-item">
              <a class="profile__menu-link" href="#">Избранное</a>
            </li>
            <li class="profile__menu-item">
              <a class="profile__menu-link" href="#">Рассылки</a>
            </li>-->
          </ul>
          <a class="profile__exit" href="{{ url('/auth/logout') }}">Выйти</a>
        </div>
        <div class="profile__detail">
          <form class="profile__detail-block profile__detail-block--personal">
            <p id="info" class="profile__title">Личная информация</p>
            <fieldset class="profile__fieldset profile__fieldset--fullname">
              <legend>Ф.И.О</legend>
              <div class="profile__field"><span class="profile__placeholder @if(gettype($user->last_name) === 'string') profile__placeholder--active @endif">Фамилия</span>
                <input name="last_name" class="profile__input" value="{{ $user->last_name }}" type="text">
              </div>
              <div class="profile__field"><span class="profile__placeholder @if($user->first_name !== '') profile__placeholder--active @endif">Имя</span>
                <input name="first_name" class="profile__input" value="{{ $user->first_name }}" type="text">
              </div>
              <div class="profile__field"><span class="profile__placeholder @if($user->patronymic) profile__placeholder--active @endif">Отчество</span>
                <input name="patronymic" class="profile__input" value="{{ $user->patronymic }}" type="text">
              </div>
            </fieldset>
            <fieldset class="profile__fieldset profile__fieldset--birthday">
              <legend>Дата рождения</legend>
                <div class="profile__field"><span class="profile__placeholder @isset($birthday['year']) profile__placeholder--active @endisset">Год</span>
                    <select name="year" class="profile__select">
                        @foreach($years as $year)
                            @if($birthday['year'] == $year)
                                <option selected value="{{ $year }}">{{ $year }}</option>
                            @else
                                <option value="{{ $year }}"> {{ $year }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>
                <div class="profile__field"><span class="profile__placeholder @isset($birthday['month']) profile__placeholder--active @endisset">Месяц</span>
                    <select name="month" class="profile__select">
                        @foreach($month as $key => $value)
                            @if($birthday['month'] == $key)
                                <option selected value="{{ $key }}">{{ $value }}</option>
                            @else
                                <option value="{{ $key }}">{{ $value }}</option>
                            @endif
                        @endforeach
                    </select>
                </div>
              <div class="profile__field"><span class="profile__placeholder @isset($birthday['day']) profile__placeholder--active @endisset">День</span>
                <select name="day" class="profile__select">
                    @foreach($days as $day)
                        @if($birthday['day'] == $day)
                            <option selected value="{{ $day }}"> {{ $day }}</option>
                        @else
                            <option value="{{ $day }}">{{ $day }}</option>
                        @endif
                    @endforeach
                </select>
              </div>

            </fieldset>
            <fieldset class="profile__fieldset profile__fieldset--living">
              <legend>Место проживания</legend>
              <div class="profile__field">
                <span class="profile__placeholder @isset($user->country) profile__placeholder--active @endisset">Страна</span>
                <select name="country" class="profile__select" id="country">
                    <option value=""></option>
                    @foreach($countries as $country)
                        @if($country == $user->country)
                            <option selected value="{{ $country }}">{{ $country }}</option>
                        @else
                            <option value="{{ $country }}">{{ $country }}</option>
                        @endif
                    @endforeach
                </select>
              </div>
              <div class="profile__field">
                <span class="profile__placeholder @isset($user->city) profile__placeholder--active @endisset">Город</span>
                  <input name="city" class="profile__input" value="{{ $user->city }}" type="text">
              </div>
            </fieldset>
            <a class="profile__btn" href="#">Сохранить изменения</a>
          </form>
          <!--<form class="profile__detail-block profile__detail-block--settings">
            <p id="settings" class="profile__title">Настройки профиля</p>
            <fieldset class="profile__fieldset">
              <legend>Смена электронной почты</legend>
              <div class="profile__field">
                <span class="profile__placeholder">Новый адрес электронной почты</span>
                <input class="profile__input" type="email">
              </div>
              <div class="profile__field">
                <span class="profile__placeholder">Пароль</span>
                <input class="profile__input" type="password">
                <a class="profile__pass-btn" href="#">
                  @include('svg.eye')
                </a>
              </div>
              <div class="profile__notice">
                <p class="profile__notice-header">Внимание!</p>
                <p class="profile__notice-content">При смене электронной почты для следующего входа будет использоваться уже новый адрес.</p>
              </div>
              <a class="profile__btn" href="#">Сменить email</a>
            </fieldset>
            <fieldset class="profile__fieldset">
              <legend>Смена электронной почты</legend>
              <div class="profile__field">
                <span class="profile__placeholder">Старый пароль</span>
                <input class="profile__input" type="password">
                <a class="profile__pass-btn" href="#">
                  @include('svg.eye')
                </a>
              </div>
              <div class="profile__field">
                <span class="profile__placeholder">Новый пароль</span>
                <input class="profile__input" type="password">
                <a class="profile__pass-btn" href="#">
                  @include('svg.eye')
                </a>
              </div>
              <a class="profile__btn" href="#">Изменить пароль</a>
            </fieldset>
          </form>-->
        </div>
      </div>
    </div>
  </main>
@endsection
