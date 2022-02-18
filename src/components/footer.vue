<template>
    <footer>
        <div class="footer__inner container">
            <div class="footer__contacts">
                <div class="footer__logo">
                    <span>Kinobu</span>
                </div>

                <div class="footer__press">
                    <span class="footer__label">Контакт для прессы:</span>
                    <a class="footer__contact" href="mailto:press@kinobu.ru">
                        press@kinobu.ru
                    </a>
                </div>
                
                <div class="footer__support">
                    <span class="footer__label">Служба поддержки:</span>
                    <a class="footer__contact" href="mailto:support@kinobu.ru">
                        support@kinobu.ru
                    </a>
                </div>
            </div>

            <div class="footer__links">
                <div class="footer__socials">
                    <a class="footer__social" href="http://vk.com/kinoburu">
                        <i class="fab fa-vk"></i>
                    </a>
                    <a class="footer__social" href="http://ok.ru/kinoburu">
                        <i class="fab fa-odnoklassniki"></i>
                    </a>
                    <a class="footer__social" href="http://facebook.com/kinoburu">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="footer__social" href="http://twitter.com/kinoburu">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="footer__social" href="http://instagram.com/kinoburu">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="footer__social" href="http://youtube.com/kinoburu">
                        <i class="fab fa-youtube"></i> </a>
                    <a class="footer__social" href="tg://resolve?domain=kinoburu">
                        <i class="fab fa-telegram"></i>
                    </a>
                </div>

                <div class="footer__navigation">
                    <div class="footer__navblock">
                        <router-link class="footer__link fl" to="/about" >О проекте</router-link>
                        <router-link class="footer__link fl" to="/faq">FAQ</router-link>
                        <router-link class="footer__link fl" to="#"><s>Мобильная версия</s></router-link>
                        <router-link class="footer__link fl" to="/extension">Расширение</router-link>
                    </div>
                    <div class="footer__navblock">
                        <router-link class="footer__link fl" to="/rules">Правила</router-link>
                        <router-link class="footer__link fl" to="/partners">Партнерам</router-link>
                        <router-link class="footer__link fl" to="/api">API</router-link>
                        <router-link class="footer__link fl" to="/#"><s>Блог</s></router-link>
                    </div>
                </div>
            </div>

            <div class="footer__info">
                <div class="footer__adult">
                </div><!-- /footer__adult -->

                <div class="footer__copyright">
                    Просматривая материалы, находящиеся на настоящем сайте,
                    вы обязуетесь выполнять условия данного соглашения и получать удовольствие.
                </div><!-- /footer__copyright -->

                <div class="footer__company">
                    <a href="http://RobertWacker.ru">Robert Wacker</a> © MMXVIII - MMXIX
                </div><!-- /footer__company -->
            </div>
        </div>
    </footer>
</template>
<style lang="sass">

footer 
    padding: 18px 0
    border-top: 1px solid var(--footer-border)
    background: var(--footer-bg)
    color: var(--footer-color)
    font-size: 13px

    .footer__inner
        display: flex
        justify-contet: space-around
        flex-flow: row wrap

    a 
        color: var(--footer-link-color)
        text-decoration: none

        &:hover 
            color: var(--footer-link-hover)
            text-decoration: underline


    @media (max-width: 500px)
        .footer__contacts 
            display: none

    .footer__contacts 
        flex-basis: 25%


    .footer__logo 
        height: 27px
        padding-bottom: 18px


        span 
            font-size: 27px
            font-weight: 700


    .footer__label 
        display: block
        width: 100%
        font-weight: 500
        line-height: 25px


    .footer__contact 
        line-height: 25px

    .footer__links 
        flex-basis: 50%

    @media (max-width: 500px)
        .footer__links 
            flex-basis: 90%
            margin: 0 auto

    .footer__socials 
        padding-bottom: 18px
        font-size: 23px
        text-align: center


        a:hover 
            text-decoration: none


    .footer__social 
        padding-right: 18px
        width: 44px


    .footer__navigation 
        display: flex

        .footer__navblock
            widows: 50%
        

    @media (max-width: 500px)
        .footer__info 
            display: none

    .footer__info 
        flex-basis: 25%


    .footer__link 
        display: inline-block
        width: 50%
        line-height: 25px


    .footer__adult 
        padding-bottom: 18px


    .footer__copyright 
        padding-bottom: 18px
</style>