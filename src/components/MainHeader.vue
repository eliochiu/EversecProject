<template>
    <div id="main-header">
        <div class="button-area">
            <el-row>
                <el-button type="primary" plain v-for="item in buttonList" :key="item.id">
                    {{ item.name }}
                </el-button>
            </el-row>
        </div>
        <div class="search-area">
            <div class="demo-input-suffix">
                指令ID
                <el-input placeholder="请输入指令ID" suffix-icon="el-icon-search" v-model="input1">
                </el-input>
            </div>

            <div class="demo-input-suffix">
                指令类型
                <el-select v-model="value" placeholder="请选择指令类型">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <el-button icon="el-icon-refresh">重置</el-button>
                <el-button type="primary">查询</el-button>
            </div>
        </div>
    </div>
</template>




<script>


export default {
    name: 'main-header',
    data() {
        return {
            active: -1,
            input1: "",
            input2: "",
            buttonList: [
                {
                    id: 1,
                    name: "今日"
                },

                {
                    id: 2,
                    name: "近7日",
                },

                {
                    id: 3,
                    name: "近30日"
                },

                {
                    id: 4,
                    name: "自定义"

                }],

            options: [
                {
                    value: 1,
                    label: "流量报文监测指令"
                }, {
                    value: 2,
                    label: "处置指令"
                }
            ],
            value: ''
        }
    },

    computed: {

    },

    methods: {

    }
}

</script>

<style scoped>
#main-header {
    display: flex;
    justify-content: flex-start;

    .button-area {
        .el-button {
            margin: 0;
        }

        .el-button:first-child {
            border-right: none;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }

        .el-button:nth-child(2),
        .el-button:nth-child(3) {
            border-right: none;
            border-radius: 0;
        }

        .el-button:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;


        }
    }

    .search-area {
        display: flex;
        justify-content: space-between;
        margin-left: 60px;

        .el-input {
            flex: 1;
            width: 300px;
            margin: 0 10px;
        }

        .el-select {
            width: 300px;
            margin: 0 10px;
        }

        .el-input:first-child {
            margin-right: 50px;
        }
    }
}
</style>