<template>
  <div class="relative font-body">
    <SectionHeader />
    <section class="pt-24">
      <slot />
      <div
        hidden
        id="snipcart"
        name="snipcart"
        data-config-modal-style="side"
        data-api-key="MmFmYTdhNWMtOGFjMi00ZmEwLWI3NDQtMjQxMDdhZTg4N2I4NjM4MDMyNjIyNzYzODc1Mjgy">
      </div>
    </section>
    <SectionSubscribe />
    <SectionFooter />
  </div>
</template>

<style>
body {
  -webkit-font-smoothing: antialised;
}
.snipcart-modal__container {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
}
.snipcart-form__footer, .snipcart-base-button {
  background-color: #284139;
  color: white
}
.snipcart-form__footer:hover, .snipcart-base-button:hover {
  background-color: hsl(152, 24%, 32%) !important;
  color: white
}
.snipcart-button-link {
  color: hsl(152, 24%, 32%);
}
.snipcart-button-link:hover {
  color: #284139
}
</style>