<template>
    <div id="main-aside">
        <div class="card-area">
            <div class="area-title">
                <div class="title">指令反馈列表</div>
                <div class="stat">共 {{ instructions.length }} 条</div>
            </div>
            <div class="area-body">
                <div v-for="(item, index) in instructions" :key="item.id" :class="className(index, active)"
                    @click="handleClick(index)">
                    <div class="card-title">
                        指令ID：{{ item.id }}
                    </div>
                    <span class="card-tag" :style="colorStyle(item.type)">
                        {{ tagName(item.type) }}
                    </span>

                    <div class="card-body">
                        <div class="left-box">
                            <div class="number">{{ item.provinceNumber }}</div>
                            <div class="number-title">反馈省份</div>
                        </div>
                        <div class="right-box">
                            <div class="number">{{ item.resultNumber }}</div>
                            <div class="number-title">反馈结果数</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "main-aside",
    data() {
        return {
            active: -1,
            instructions: [
                {
                    id: 12345678,
                    type: 1,
                    provinceNumber: 31,
                    resultNumber: 1231
                },

                {
                    id: 87654321,
                    type: 2,
                    provinceNumber: 31,
                    resultNumber: 563
                },

                {
                    id: 11111111,
                    type: 2,
                    provinceNumber: 31,
                    resultNumber: 52
                },

                {
                    id: 22222222,
                    type: 1,
                    provinceNumber: 30,
                    resultNumber: 77
                },

                {
                    id: 33333333,
                    type: 2,
                    provinceNumber: 31,
                    resultNumber: 1774
                },

                {
                    id: 44444444,
                    type: 2,
                    provinceNumber: 31,
                    resultNumber: 982
                },

                {
                    id: 55555555,
                    type: 1,
                    provinceNumber: 31,
                    resultNumber: 155
                },

                {
                    id: 66666666,
                    type: 2,
                    provinceNumber: 31,
                    resultNumber: 155
                },

                {
                    id: 77777777,
                    type: 1,
                    provinceNumber: 31,
                    resultNumber: 155
                }]
        }
    },
    computed: {
        tagName() {
            return (val) => {
                let nameMap
                nameMap = {
                    1: "流量报文监测指令",
                    2: "处置指令"
                }
                return nameMap[val]
            }
        },

        colorStyle() {
            return (val) => {
                let colorMap, bgColor
                colorMap = {
                    1: "pink",
                    2: "plum"
                }
                bgColor = colorMap[val]
                return "background-color: " + bgColor + ";"
            }
        },

        className() {
            return (index, active) => {
                if (active === index) {
                    return "card card-click"
                }
                return "card"

            }
        }
    },

    methods: {
        handleClick(index) {
            this.active = index
        }
    }

}

</script>

      
<style lang="less" scoped>
.card-area {
    .area-title {
        display: flex;
        justify-content: space-between;
        height: 20px;
        line-height: 20px;
        padding: 20px 0 10px;
        font-size: 16px;

        .title {
            margin: 0 20px;
            padding-left: 10px;
            border-left: 3px solid #409EFF;
        }

        .stat {
            margin: 0 20px;
        }
    }

    .area-body {
        margin: 10px;

        .card-click {
            background-color: rgba(64, 158, 255, 0.05);
            color: #409EFF;
            border: 1px solid #409EFF !important;
            box-shadow: 0px 0px 5px #409EFF;
            .number-title {
                color: #409EFF !important;
            }
        }

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
                top: -1px;
                right: -1px;
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
                    color: gray;
                }
            }
        }
    }
}
</style>

