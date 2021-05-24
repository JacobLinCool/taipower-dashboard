<template>
    <div id="max-container">
        <div id="white-paper">
            <div id="head">
                <div class="front" v-if="taipower">
                    <div class="usage">
                        <span id="usage-label">總用電量 / 總發電量 (MW)</span>
                        <span id="usage-value"
                            >{{ taipower.usage.current }} /
                            {{ parseInt(taipower.statistics.total) }}
                        </span>
                    </div>
                    <div class="time">
                        <span
                            >最新資料
                            {{ taipower.time.replaceAll(/-/g, " / ") }}
                        </span>
                    </div>
                </div>
                <div class="back" v-if="taipower">
                    <div class="usage-percentage">
                        {{ taipower.usage.percentage }}<span>%</span>
                    </div>
                </div>
            </div>
            <div id="body" v-if="taipower">
                <div id="plants-wrap">
                    <div
                        class="plant-type-wrap"
                        v-for="[type, plants] of Object.entries(
                            taipower.plants
                        )"
                        :key="type"
                    >
                        <h2 class="plant-type-name">
                            {{ type }}
                            <span> {{ taipower.statistics[type] }} (MW) </span>
                            <div
                                :class="'line ' + type"
                                :style="{
                                    width:
                                        (taipower.statistics[type] /
                                            taipower.statistics.total) *
                                            100 +
                                        '%',
                                }"
                            ></div>
                        </h2>
                        <div
                            class="plant"
                            v-for="plant of plants"
                            :key="plant.name"
                            tabindex="0"
                        >
                            <h3
                                :class="
                                    plant.now
                                        ? 'plant-generating'
                                        : 'plant-not-generating'
                                "
                            >
                                {{ plant.name }}
                            </h3>
                            <div class="plant-data">
                                <div>
                                    <span class="label">淨發電量</span>
                                    <span class="value"
                                        >{{ plant.now }}
                                        <span style="font-size: 1rem"
                                            >MW</span
                                        ></span
                                    >
                                </div>
                                <div>
                                    <span class="label">裝置容量</span>
                                    <span class="value"
                                        >{{ plant.max }}
                                        <span style="font-size: 1rem"
                                            >MW</span
                                        ></span
                                    >
                                </div>
                                <div>
                                    <span class="label">備註</span>
                                    <span class="value">{{
                                        plant.description || "沒有備註"
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="social">
                    <a
                        href="https://github.com/JacobLinCool/taipower-dashboard"
                        target="_blank"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import swal from "sweetalert2";
import { ref, onMounted } from "vue";
import { get_data } from "./js/data.js";

const taipower = ref(false);
const get_taipower_data = async () => {
    swal.fire({
        title: "正在更新資料",
        icon: "info",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
    });
    taipower.value = await get_data();
    swal.fire({
        title: "資料已更新",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
    });
};
onMounted(() => {
    get_taipower_data();
    setInterval(get_taipower_data, 10 * 60 * 1000);
});

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
* {
    position: relative;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #5a5a5a;
}

#max-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    background: rgb(86, 120, 221);

    overflow: hidden;
}

#white-paper {
    width: 100%;
    height: 100%;
    max-width: 1200px;

    background: rgb(255, 255, 255);

    overflow: auto;
}

#head {
    width: 100%;
    height: min(30vw, 360px);

    background: rgb(240, 240, 240);

    border-radius: 0 0 32px 32px;

    overflow: hidden;
}

#head > .front,
#head > .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#head > .front {
    z-index: 2;
}

#head > .front > .usage {
    position: absolute;
    top: 0;
    left: 0;
    width: 88%;
    height: 74%;
    margin: 3% 6%;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

#head > .front > .usage > #usage-label {
    top: 1vw;

    font-size: min(4vw, 30px);
    font-weight: bold;
}

#head > .front > .usage > #usage-value {
    font-size: min(10vw, 120px);
    font-weight: bold;
}

#head > .front > .time {
    position: absolute;
    top: 68%;
    left: 0;
    width: 88%;
    height: calc(26% - 4px);
    margin: 2px 6%;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

#head > .back {
    color: rgb(216, 216, 216);
    font-size: min(30vw, 360px);
}

#head > .back > .usage-percentage {
    width: 100%;

    text-align: right;
}

#head > .back > .usage-percentage > span {
    font-size: min(10vw, 120px);
}

#plants-wrap {
    width: 88%;
    margin: 16px 6%;
}

.plant-type-name > span {
    font-size: 1rem;
    color: rgb(128, 128, 128);
}

.plant-type-name > .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: royalblue;
    transition: all 0.3s;
}

.line.核能\(Nuclear\) {
    background: rgb(204, 0, 153);
}
.line.燃煤\(Coal\) {
    background: rgb(230, 92, 0);
}
.line.汽電共生\(Co-Gen\) {
    background: rgb(230, 230, 0);
}
.line.民營電廠-燃煤\(IPP-Coal\) {
    background: rgb(255, 163, 71);
}
.line.燃氣\(LNG\) {
    background: rgb(0, 102, 0);
}
.line.民營電廠-燃氣\(IPP-LNG\) {
    background: rgb(94, 223, 223);
}
.line.燃油\(Oil\) {
    background: rgb(255, 25, 25);
}
.line.輕油\(Diesel\) {
    background: rgb(132, 132, 132);
}
.line.水力\(Hydro\) {
    background: rgb(0, 0, 178);
}
.line.風力\(Wind\) {
    background: rgb(0, 153, 51);
}
.line.太陽能\(Solar\) {
    background: rgb(0, 204, 0);
}
.line.抽蓄發電\(Pumping\ Gen\) {
    background: rgb(51, 102, 204);
}
.line.抽蓄負載\(Pumping\ Load\) {
    background: rgb(51, 102, 204);
}
.line.地熱\(Geothermal\) {
    background: rgb(0, 0, 0);
}

.plant {
    height: 30px;
    margin: 4px 0;

    border-radius: 5px;

    overflow: hidden;
    transition: all 0.3s;
}

.plant:hover,
.plant:focus {
    height: 180px;
    padding: 0 10px;
    box-shadow: 0px 2px 6px 0px grey;
}

.plant > h3 {
    margin: 0 0 4px;

    transition: all 0.3s;
}

.plant:hover > h3,
.plant:focus > h3 {
    margin: 0 0 8px;
    font-size: 1.5rem;
}

.plant > .plant-data {
    width: 100%;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-gap: 0;
}

.plant > .plant-data > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.plant > .plant-data > div > .value {
    font-size: 32px;
}

.plant-not-generating {
    color: rgb(160, 160, 160);
}

#social {
    width: calc(100% - 48px);
    min-height: 60px;
    margin: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
</style>
