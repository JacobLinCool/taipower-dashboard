<template>
    <div id="說明">
      <h1>說明</h1>
      試著在台電網站被連爆的時候有個替代資訊來源。<br>
    </div>
    <div id="常見問題">
      <h1>常見問題</h1>
      <h2>總用電量 > 總發電量？</h2>
      <span>可能原因：</span>
      <ol>
        <li>台電兩者數據時間差（較常發生於 XX:X0 ~ XX:X5 之間，發電數據可能較用電數據慢 5 分鐘）</li>
        <li>API 解析數據時發生問題</li>
        <li>台電所提供的數據有問題</li>
      </ol>
      <span>解決方法：</span>
      <ul>
        <li>於 <a href="https://www.taipower.com.tw/d006/loadGraph/loadGraph/genshx_.html" target="_blank">台電各機組發電量頁面</a> 再次確認</li>
      </ul>
      <span>發生紀錄：</span>
      <ul>
        <li>2021.05.26：台電各水力發電機組加總有誤（差10） <a href="https://web.archive.org/web/20210526050814/https://www.taipower.com.tw/tc/page.aspx?mid=206&cid=406&cchk=b6134cc6-838c-4bb9-b77a-0b0094afd49d" target="_blank">網頁存檔</a></li>
      </ul>
    </div>
    <div id="欄位介紹">
      <h1>欄位介紹</h1>
      <h2>第一區塊</h2>
      <ul>
        <li>總用電量：現時用電量 (約於 XX:X0 更新)</li>
        <li>總發電量：現時發電量 (約於 XX:X5 更新)</li>
        <li>最新資料：發電量的數據時間 (約於 XX:X5 更新)</li>
        <li>背景比率：現時用電量 / 最大供電能力 (約於 XX:X0 更新)</li>
      </ul>
      <h2>第二區塊</h2>
      <ul>
        <li>類別旁數字：現時該類別總發電量 (約於 XX:X5 更新)</li>
        <li>類別下橫條：佔總發電量比例 (約於 XX:X5 更新)</li>
        <li>機組備註：台電寫的備註 (約於 XX:X5 更新)</li>
      </ul>
    </div>
    <div id="輔助功能">
    <h1>輔助功能</h1>
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
    <div id="資料來源">
      <h1>資料來源</h1>
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
