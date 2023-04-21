
Page({
  data:{
    weatherData:'',
    imagsrc:'',
    livelist:[],
    dayList:[],
    location:'北京'
  },
  getIcon(code) {
    let imagsrc = '../../images/duoyun.png'
    let iconList = new Map()
      iconList.set(['101','102','151','152'],'../../images/duoyun.png')
      iconList.set(['307','300','316'],'../../images/dayu.png')
      iconList.set(['301','302','306','307','310','311','317'],'../../images/baoyu.png')
      iconList.set( ['312','318','350','351'],'../../images/leizhenyu.png')
      iconList.set(['103','153'],'../../images/wanduoyun.png')
      iconList.set(['100','150'],'../../images/qingtian.png')
      iconList.set(['305','306','309','314','315'],'../../images/xiaoyu.png')
      iconList.set(['104'],'../../images/阴天.png')
     for(let [key, value] of iconList) {
      if(key.includes(code)) {
        imagsrc = value
      }
    }
    return imagsrc
  },
  onLoad: function () {
    wx.showLoading({
      title: '加载中',
    })
    var location = '101010100 '
    let that = this;

    wx.getLocation({
      success: res => {
         location = `${res.longitude},${res.latitude}`
         wx.request({
           url:`https://restapi.amap.com/v3/geocode/regeo?key=c917407618fa20567d47ae5de6405fda&location=${res.longitude},${res.latitude}`,
           success(res) {
            console.log(res.data.regeocode.addressComponent,'城市')
            const {province, district,township} = res.data.regeocode.addressComponent
            that.setData({
              location: `${province},${district},${township}`
            })
           }
         })
         wx.request({
           url:`https://devapi.qweather.com/v7/weather/3d?key=3abac32bc219490380594f27aa1c7247&location=${location}`,
           success(res) {
             console.log(res)
             const code = res.data.daily[0].iconDay
             for(let item of res.data.daily) {
               item.imagsrc = that.getIcon(item.iconDay)
             }
             that.setData({
               dayList: res.data.daily,
               weatherData: res.data.daily[0],
               imagsrc:that.getIcon(code),
             })
             wx.hideLoading()
           }
         })
         wx.request({
           url: `https://devapi.qweather.com/v7/indices/1d?type=1,2,3,9&key=3abac32bc219490380594f27aa1c7247&location=${location}`,
           success(res){
             const img = ['../../images/户外.png', '../../images/车.png','../../images/wear.png','../../images/感冒药物.png']
             const list = res.data.daily.map((item,index)=>({
               title: item.name,
                 src: img[index],
                 text: item.text
             }))
             console.log(res.data.daily,'穿衣')
     
             that.setData({
               livelist: list
             })
           }
         })
      }
    })
   
  }
})