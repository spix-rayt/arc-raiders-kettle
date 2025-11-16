<template>
  <div>
    <h1>Home Page</h1>
    <h2>Unconfirmed answers:</h2>
    <ul>
      <li>
        <h4><p>How much health damage will a player take if their shield = 1?</p></h4>
        <p>If player has shield=40. Ferro will deal 40 damage to shield and 24 damage to health</p>
        <p>If player has shield=1. Ferro will deal 1 damage to shield and 24 damage to health</p>
      </li>
      <li>
        <h4><p>Osprey breaks light and medium shield with one headshot?</p></h4>
        <p>I think no. need some tests or proofs</p>
      </li>
      <li>
        <h4><p>How fire rate stat works?</p></h4>
        <p>Idk. For some weapons, I recorded video at the shooting range and counted the number of frames per magazine at 60 fps.</p>
      </li>
      <li>
        <h4><p>Is damage numbers rounded after damage reduction?</p></h4>
        <p>Idk. I think no, because arpeggio has fractional damage</p>
      </li>
      <li>
        <h4><p>Venator deals 9 damage twice for a total of 18</p></h4>
        <p>Yes</p>
      </li>
    </ul>

    <h2>Used resources:</h2>
    <ul>
      <li>
        <a href="https://www.anvil.work.gd/" target="_blank">Headshot multipliers</a>
      </li>
      <li>
        <a href="https://arcstats.teon.cc/" target="_blank">Some weapons fire rate</a>
      </li>
      <li>
        <a href="https://arcraiders.wiki/wiki/Weapons" target="_blank">Weapon images and stats</a>
      </li>
      <li>
        <a href="https://www.reddit.com/r/ArcRaiders/comments/1owrpq8/ttkshots_to_kill_lvl_iv_weapons_v/" target="_blank">How headshot damage applies to shield</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
ul {
  padding-left: 30px;
}

li {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>