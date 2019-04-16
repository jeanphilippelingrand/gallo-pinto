import Vue from 'vue'

export default Vue.mixin({
  data () {
    return {
      screenSize: screen,
      isHD: false
    }
  },
  computed: {
    isSmall: function () {
      return this.screenSize.width < 600 || this.screenSize.height < 600
    }
  },
  methods: {
    getImageURL: function (url) {
      if (this.isSmall) {
        return 'http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,q_100,w_893/v1521997360/gallo%20pinto' + url
      }

      if (this.isHD) {
        return 'http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,q_100,w_4032/v1520700460/gallo%20pinto' + url
      }

      return 'http://res.cloudinary.com/dzcoopyjp/image/upload/c_scale,w_1000/v1520700460/gallo%20pinto' + url
    }
  }
})
