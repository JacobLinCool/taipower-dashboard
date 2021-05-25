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
    <h1>資料來源</h1>
    <div>
      這個網站使用的資料來源是 <a href="https://github.com/JacobLinCool/taipower-api" target="_blank">這個 API 專案</a> 所提供的。<br>
      而該 API 的資料則是從 <a href="https://www.taipower.com.tw/" target="_blank">台灣電力公司全球資訊網</a> 抓取的。<br>
      所有相關的程式碼都可以在 <a href="https://github.com/JacobLinCool/taipower-dashboard" target="_blank">這個 Dashboard 專案</a> 及  <a href="https://github.com/JacobLinCool/taipower-api" target="_blank">那個 API 專案</a> 中查看。
      <br>
      <h2>相關連結</h2>
      <a href="https://www.taipower.com.tw/tc/page.aspx?mid=70" target="_blank">政府網站資料開放宣告 (台電)</a><br>
      <a href="https://www.taipower.com.tw/tc/page.aspx?mid=206" target="_blank">台電的今日電力資訊頁面</a><br>
    </div>
</template>

<script setup>
</script>

<style scoped>
a,
a:hover,
a:focus,
a:visited {
    color: rgb(86, 120, 221);
    text-decoration: none;
}
</style>
