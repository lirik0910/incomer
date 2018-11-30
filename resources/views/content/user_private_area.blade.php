@extends('layouts.app')
@section('content')
  <div class="container">
    <div class="profile">
      <div class="profile__info">
        <form class="avatarUploader" runat="server">
          <input type="file" id="avatarInput">
          <img src="img/photo-dark.jpg" alt="avatar" id="avatar">
        </form>
        <p class="profile__name">Example User 78</p>
        <p class="profile__role">Читатель</p>
        <ul class="profile__menu-list">
          <li class="profile__menu-item">
            <a class="profile__menu-link" href="#">Настройки профиля</a>
          </li>
          <li class="profile__menu-item">
            <a class="profile__menu-link" href="#">Личная информация</a>
          </li>
          <li class="profile__menu-item">
            <a class="profile__menu-link" href="#">Интересы</a>
          </li>
          <li class="profile__menu-item">
            <a class="profile__menu-link" href="#">Избранное</a>
          </li>
          <li class="profile__menu-item">
            <a class="profile__menu-link" href="#">Рассылки</a>
          </li>
        </ul>
        <a class="profile__exit" href="#">Выйти</a>
      </div>
      <div class="profile__detail">
        <form class="profile__detail-block profile__detail-block--personal">
          <p class="profile__title">Личная информация</p>
          <fieldset class="profile__fieldset profile__fieldset--fullname">
            <legend>Ф.И.О</legend>
            <div class="profile__field"><span class="profile__placeholder">Фамилия</span>
              <input class="profile__input" type="text">
            </div>
            <div class="profile__field"><span class="profile__placeholder">Имя</span>
              <input class="profile__input" type="text">
            </div>
            <div class="profile__field"><span class="profile__placeholder">Отчество</span>
              <input class="profile__input" type="text">
            </div>
          </fieldset>
          <fieldset class="profile__fieldset profile__fieldset--birthday">
            <legend>Дата рождения</legend>
            <div class="profile__field"><span class="profile__placeholder">День</span>
              <select class="profile__select">
                <option value="" selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div class="profile__field"><span class="profile__placeholder">Месяц</span>
              <select class="profile__select">
                <option value="" selected></option>
                <option value="1">Январь</option>
                <option value="2">Февраль</option>
                <option value="3">Март</option>
                <option value="4">Апрель</option>
              </select>
            </div>
            <div class="profile__field"><span class="profile__placeholder">Год</span>
              <select class="profile__select">
                <option value="" selected></option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </div>
          </fieldset>
          <fieldset class="profile__fieldset profile__fieldset--living">
            <legend>Место проживания</legend>
            <div class="profile__field">
              <span class="profile__placeholder">Страна</span>
              <select class="profile__select" id="country">
                <option value="" selected></option>
                <option value="1">Украина</option>
                <option value="2">Россия</option>
                <option value="3">Беларусь</option>
                <option value="4">Греция</option>
              </select>
            </div>
            <div class="profile__field profile__field--block">
              <span class="profile__placeholder">Город</span>
              <select class="profile__select" id="city">
                <option value="" selected></option>
                <option value="1">Киев</option>
                <option value="2">Мариуполь</option>
                <option value="3">Керч</option>
                <option value="4">Полтава</option>
              </select>
            </div>
          </fieldset>
          <a class="profile__btn" href="#">Сохранить изменения</a>
        </form>
        <form class="profile__detail-block profile__detail-block--settings">
          <p class="profile__title">Настройки профиля</p>
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
        </form>
      </div>
    </div>
  </div>
@endsection
