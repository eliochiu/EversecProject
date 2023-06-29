<template>
    <div :class='{ "card": !this.isHover, "card card-click": this.isHover }' @click="cardClick" @mousemove="cardHover"
        @mouseout="cardOut">
        <div class="card-title">
            指令ID：{{ this.ins.id }}
        </div>
        <span class="card-tag" :style="colorStyle">
            {{ this.tagName }}
        </span>

        <div class="card-body">
            <div class="left-box">
                <div class="number">{{ this.ins.provinceNumber }}</div>
                <div class="number-title">反馈省份</div>
            </div>
            <div class="right-box">
                <div class="number">{{ this.ins.resultNumber }}</div>
                <div class="number-title">反馈结果数</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "common-card",
    props: ["ins"],
    data() {
        return {
            isClicked: false,
            isHover: false
        }
    },
    computed: {
        tagName() {
            let nameMap
            nameMap = {
                1: "流量报文监测指令",
                2: "处置指令"
            }
            return nameMap[this.ins.type]
        },

        colorStyle() {
            let colorMap, bgColor
            colorMap = {
                1: "pink",
                2: "plum"
            }

            bgColor = colorMap[this.ins.type]
            return "background-color: " + bgColor + ";"
        },

        isSelected() {
            if (!this.isHover && this.isClicked) {
                return true
            }

            return false
        }
    },

    methods: {
        cardClick() {
            this.isClicked = true
        },

        cardHover() {
            this.isHover = true
        },

        cardOut() {
            this.isHover = false
        }
    }
}

</script>

      
<style lang="less" scoped>
.card {
    position: relative;
    width: 100%;
    border: 1px solid #B3C0D1;
    border-radius: 5px;
    margin-bottom: 10px;

    .card-title {
        height: 20px;
        line-height: 20px;
        padding: 10px 17px;
        text-align: left;
    }

    .card-tag {
        position: absolute;
        top: 0;
        right: 0px;
        color: #fff;
        font-size: 10px;
        padding: 0 15px;
        border-radius: 5px;
        height: 20px;
        line-height: 20px;
    }

    .card-body {
        display: flex;
        justify-content: center;

        .left-box,
        .right-box {
            flex: 1;
            margin: 10px 0 20px;
        }

        .left-box {
            border-right: 0.5px solid #B3C0D1;
        }

        .line {
            font-weight: 100;
            font-size: 40px;
            color: #B3C0D1;

        }

        .number {
            height: 30px;
            font-size: 20px;
        }

        .number-title {
            height: 20px;
        }
    }
}
</style>

<style>
.card-click {
    background-color: rgba(64, 158, 255, 0.05);
    color: #409EFF;
    border: 1px solid #409EFF !important;
    box-shadow: 0px 0px 5px #409EFF;
}
</style>