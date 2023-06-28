<template>
    <div class="font-['Inter']" style="background-color: #fff;">
      <Html lang="en">
        <Head>
          <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Meta charset="utf-8" />
          <Title>TEST</Title>
          <Meta name="description" content="TEST" />
          <Link
            rel="preload"
            href="/font/inter/regular.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <Link
            rel="preload"
            href="/font/inter/bold.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />
          <Link rel="stylesheet" href="/fonts.css" />
          <Link rel="icon" :href="'/favicon.ico'" as="image/x-icon" />
          <!-- <Link rel="prefetch" href="https://db.mit-union.ru" /> -->
        </Head>
      </Html>
      <slot />
      <NavigationFooter />
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped></style>