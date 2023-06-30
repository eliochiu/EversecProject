<template>
    <div id="main-detail">
        <div class="ins-detail">
            <div class="detail-title">
                指令详情
            </div>
            <div class="detail-info">
                <div class="detail-info-item" v-for="item in info" :key="item.key">
                    <span class="info-key">{{ item.key }}</span>
                    <span class="info-value">{{ item.value }}</span>
                </div>
            </div>
        </div>
        <div class="ins-statistic">
            <div class="statistic-title">
                指令反馈省份统计
            </div>
            <div class="statistic-search">
                <div class="demo-input-suffix">
                    <span class="suffix-title">反馈省份</span>
                    <el-select v-model="value" placeholder="请选择省份">
                        <el-option v-for="item in provinceOptions" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">传输层协议</span>
                    <el-select v-model="value" placeholder="请选择协议类型">
                        <el-option v-for="item in protocolOptions" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">事件大类</span>
                    <el-select v-model="value" placeholder="请选择事件大类">
                        <el-option v-for="item in eventOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">源IP</span>
                    <el-input placeholder="请输入源IP" suffix-icon="el-icon-search" v-model="sourceIP">
                    </el-input>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">目的IP</span>
                    <el-input placeholder="请输入目的IP" suffix-icon="el-icon-search" v-model="destinationIP">
                    </el-input>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">事件描述</span>
                    <el-input placeholder="请输入事件描述" suffix-icon="el-icon-search" v-model="eventDescription">
                    </el-input>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">手机号</span>
                    <el-input placeholder="请输入手机号" suffix-icon="el-icon-search" v-model="phoneNumber">
                    </el-input>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">IMEI</span>
                    <el-input placeholder="请输入IMEI号" suffix-icon="el-icon-search" v-model="IMEI">
                    </el-input>
                </div>

                <div class="demo-input-suffix">
                    <span class="suffix-title">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-button icon="el-icon-refresh">重置</el-button>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary">导出</el-button>
                </div>
            </div>
            <div class="statistic-plot" id="plot">
            </div>
            <div class="statistic-table">
                <el-table :data="tableData" style="width: 100%" height="250" :header-cell-style="{background:'#eef1f6',color:'#000'}">
                    <el-table-column fixed prop="date" label="日期" width="250">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="200">
                    </el-table-column>
                    <el-table-column prop="province" label="省份" width="200">
                    </el-table-column>
                    <el-table-column prop="city" label="市区" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="300">
                    </el-table-column>
                    <el-table-column prop="zip" label="邮编" width="120">
                    </el-table-column>
                </el-table>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="5"
                        layout="total, sizes, prev, pager, next, jumper" :total="20">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts"

export default {
    name: "main-detail",
    mounted() {
        let myChart = echarts.init(document.getElementById("plot"))
        let arrX = this.barData.map((obj, index) => {
            return obj.province;
        }).join(",").split(',')

        let arrY = []
        this.barData.forEach(e => {
            arrY.push(e.value)
        });

        console.log(arrX)
        console.log(arrY)

        let option = {
            xAxis: {
                data: arrX,
                axisLabel: {
                    color: "black"
                }
            },
            yAxis: {
                axisLabel: {
                    color: "black"
                }
            },
            series: [
                {
                    name: '',
                    type: 'bar',
                    data: arrY,
                    itemStyle: {
                        color: "rgb(80, 183, 224)"
                    }
                }
            ]
        };
        myChart.setOption(option);
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    data() {
        return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            value: "",
            sourceIP: "",
            destinationIP: "",
            eventDescription: "",
            phoneNumber: "",
            IMEI: "",
            provinceOptions: [
                {
                    value: 1,
                    label: "北京市"
                }, {
                    value: 2,
                    label: "上海市"
                }
            ],
            protocolOptions: [
                {
                    value: 1,
                    label: "TCP"
                }, {
                    value: 2,
                    label: "UDP"
                }
            ],

            eventOptions: [
                {
                    value: 1,
                    label: "事件1"
                }, {
                    value: 2,
                    label: "事件2"
                }
            ],
            info:
                [{
                    key: "指令ID",
                    value: 12345678
                },
                {
                    key: "指令类型",
                    value: "流量报文监测类型"
                },

                {
                    key: "版本号",
                    value: "2.0"
                },

                {
                    key: "指令下发时间",
                    value: "2022-07-19 19:17:59"
                },

                {
                    key: "指令属主",
                    value: "admin"
                },
                {
                    key: "指令优先级",
                    value: "高"
                },

                {
                    key: "数据上报方式",
                    value: "每30min定时报送"
                },

                {
                    key: "指令描述",
                    value: "xxxxxxxx"
                },
                {
                    key: "生产运营商",
                    value: "移动、联通、电信、广电"
                }],

            barData: [
                {
                    province: "北京",
                    value: 600
                },
                {
                    province: "上海",
                    value: 550
                },
                {
                    province: "广东",
                    value: 500
                },
                {
                    province: "江苏",
                    value: 500
                },
                {
                    province: "山东",
                    value: 400
                },
                {
                    province: "浙江",
                    value: 400
                },
                {
                    province: "河南",
                    value: 400
                },
                {
                    province: "河北",
                    value: 400
                },
                {
                    province: "湖南",
                    value: 400
                },
                {
                    province: "湖北",
                    value: 400
                },
                {
                    province: "福建",
                    value: 400
                },
                {
                    province: "四川",
                    value: 200
                },
                {
                    province: "甘肃",
                    value: 200
                },
                {
                    province: "山东",
                    value: 200
                },
                {
                    province: "浙江",
                    value: 200
                },
                {
                    province: "河南",
                    value: 80
                },
                {
                    province: "河北",
                    value: 80
                },
                {
                    province: "湖南",
                    value: 80
                }
            ],

            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }]
        }
    }
}


</script>

<style lang="less" scoped>
#main-detail {
    .ins-detail {
        border: 0.5px solid #B3C0D1;
        border-radius: 4px;
        background-color: rgb(251, 251, 251);

        .detail-title {
            font-size: 18px;
            text-align: left;
            margin: 20px;
        }

        .detail-info {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 30px;

            .detail-info-item {
                display: flex;
                justify-content: flex-start;
                align-items: baseline;

                .info-key,
                .info-value {
                    margin: 10px;
                }

                .info-key {
                    flex-basis: 100px;
                    text-align: right;
                    margin-right: 20px;
                }
            }
        }
    }

    .ins-statistic {
        margin-top: 20px;
        border: 0.5px solid #B3C0D1;
        border-radius: 4px;

        .statistic-title {
            font-size: 18px;
            text-align: left;
            margin: 20px;
            font-weight: 500;
        }

        .statistic-search {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 30px;

            .demo-input-suffix {
                display: flex;
                align-items: baseline;
                margin: 10px;
                justify-content: flex-start;

                .suffix-title {
                    flex-basis: 100px;
                    text-align: right;
                }

                .el-select,
                .el-input {
                    width: 300px;
                    margin-left: 10px;
                }

                .el-button {
                    margin-left: 10px;
                }
            }
        }
    }

    .statistic-plot {
        height: 400px;
    }

    .statistic-table {
        margin: 20px;
        margin-left: 100px;
        position: relative;

        .el-table {
            font-size: 16px;
            color: black;
        }

        .block {
            margin: 20px;
            right: 0;
        }
    }
}
</style>