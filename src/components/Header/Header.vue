<template>
  <header>
    <div class="header__wrap">
      <div class="header__inner">
        <Logo />
        <Navigation />
        <router-link to="/auth/login">Login</router-link>
      </div>
    </div>
  </header>
</template>
<style lang="sass">
  .header__wrap
    background: var(--nav-bg)
    width: 100%
  .header__inner
    margin: 0 auto
    display: flex
    align-items: center
    max-width: 1000px
</style>