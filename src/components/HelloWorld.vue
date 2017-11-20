<template>
  <div>
    <datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>
    <p class="info">2</p>
    <div style="padding:15px;">
      <x-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> 1 </x-button>
      <x-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> 3 </x-button>
      <x-button @click.native="toggleFormat" type="primary"> 4</x-button>
      <x-button @click.native="showPopup = true" type="primary"> 4 </x-button>
    </div>
    <div v-transfer-dom>
      <popup v-model="showPopup">
        <datetime-view v-model="value2" format="YYYY-MM"></datetime-view>
      </popup>
    </div>
  </div>
</template>



<script>
  import { DatetimeView, XButton, Popup, TransferDom } from 'vux'

  export default {
    components: {
      DatetimeView,
      XButton,
      Popup
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        value1: '2017-10-11',
        value2: '2017-10',
        showPopup: false,
        format: 'YYYY-MM-DD'
      }
    },
    methods: {
      toggleFormat () {
        if (this.format === 'YYYY-MM-DD') {
          this.format = 'YYYY-MM-DD HH:mm'
        } else {
          this.format = 'YYYY-MM-DD'
        }
      },
      changeValue (val) {
        this.value1 = val
        this.$refs.datetime.render()
      }
    }
  }
</script>

<style scoped>
  .info {
    padding-top: 15px;
    text-align: center;
    color: #666;
  }
</style>
