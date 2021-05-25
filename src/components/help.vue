<template>
    <h1>說明</h1>
    <div>
      試著在台電網站被連爆的時候有個替代資訊來源。<br>
      <h2>背景顏色 <small>(color: true | false)</small></h2>
      <p>
        預設值： 啟用
      </p>
      <p>先定義 發電比率 = 淨發電量 / 裝置容量</p>
      <p>
        電廠的背景顏色有分四種：
        <ul>
          <li style="background: #b4f8c825">綠色： 100% >= 發電比率 >= 80%</li>
          <li style="background: #fbe7c625">黃色： 80% > 發電比率 >= 40%</li>
          <li style="background: #ffaebc25">紅色： 40% > 發電比率 > 0%</li>
          <li style="background: #ffffff25">白色： 發電比率 = 0%</li>
        </ul>
      </p>
      <h2>折疊模式 <small>(fold: true | false)</small></h2>
      <p>
        預設值： <br>
        當螢幕寬度 >= 1080 時 關閉 <br>
        否則 啟用
      </p>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>
