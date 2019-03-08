//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择','男', '女'],
    index: 0,
    items: [
      { name: 'only', value: '单程', checked: true },
      { name: 'double', value: '往返', checked: false },
    ],
    Array: ['请选择','太原南', '北京西','石家庄北'],
    page: 0,
    Arraycity: ['请选择','太原南', '北京西', '石家庄北'],
    pageTo: 0,
    ArrayArrive: ['请选择','杭州', '天津', '成都'],
    arrive: 0,
    ArrayArriveto: ['请选择','天津', '杭州', '杭州'],
    arriveTo: 0,
    date: '2018-09-01',
    dateto: '2018-12-01',
    ArrayPlan: ['请选择','火车', '飞机', '轮船'],
    Plan:0,
    ArrayPlanto: ['请选择','火车', '飞机', '轮船'],
    Planto: 0,
    ArrayNum: ['请选择','G620', 'G601'],
    Num: 0,
    ArrayNumto: ['请选择','G620', 'G601'],
    Numto: 0,
    go: '2018-09-01',
    ArrayUntil: ['请选择','6：20 - 8：20', '11.30 - 14：30', '18：00 - 22：00'],
    until: 0,
    ArrayUntilto: ['请选择','6：20 - 8：20', '11.30 - 14：30', '18：00 - 22：00'],
    untilto: 0,
    ArrayPlaneto: ['请选择','8：20 - 10：20', '13.30 - 15：30', '18：00 - 22：00'],
    planeto: 0,
    ArrayWay: ['请选择','火车', '飞机', '轮船'],
    way: 0,
    ArrayFly: ['请选择','G620', 'G601'],
    Fly: 0,
    focus: false,
    panelShowV:true,
    idValue:'',
    nameValue:''
  },
  // 姓名
  nameInput: function (e) {
    this.setData({
      nameValue: e.detail.value
    })
  },
// 身份证
  idInput: function(e) {
    this.setData({
      idValue: e.detail.value
    })
  },
  // 展开
  panelShow: function(){
    this.setData({
      panelShowV: !this.data.panelShowV
    });
    console.log(this.data.panelShowV)
  },
  // 性别选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为1', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  // 单程选择
  radioChange: function (e) {
    var checked = e.detail.value;
    
    var changed = {}
    for (var i = 0; i < this.data.items.length; i++) {
      if (checked.indexOf(this.data.items[i].name) !== -1) {
        changed['items[' + i + '].checked'] = true
      } else {
        changed['items[' + i + '].checked'] = false
      }
    }
    console.log(this.data.items[0].checked)
    this.setData(changed)
  },
// ------------单程-----------
  // 出发城市
  bindPickerChangeCity: function (p) {
    console.log('picker发送选择改变，携带值2为', p.detail.value)
    this.setData({
      page: p.detail.value
    })
  },

  // 抵达城市
  bindPickerChangeArrive: function (p) {
    console.log('picker发送选择改变，携带值为', p.detail.value)
    this.setData({
      arrive: p.detail.value
    })
  },

  // 出发日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  // 出发时间段
  bindPickerChangeUntil: function (p) {
    console.log('picker发送选择改变，携带值为', p.detail.value)
    this.setData({
      until: p.detail.value
    })
  },

  // 来程交通方式
  bindPickerChangePlan: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Plan: e.detail.value
    })
  },

  // 选择车次或航班
  bindPickerChangeNum: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Num: e.detail.value
    })
  },
  
// ------------往返-----------
  // 出发城市
  bindPickerChangeCityto: function (p) {
    console.log('picker发送选择改变，携带值为', p.detail.value)
    this.setData({
      pageTo: p.detail.value
    })
  },

  // 抵达城市
  bindPickerChangeArriveto: function (p) {
    console.log('picker发送选择改变，携带值为', p.detail.value)
    this.setData({
      arriveTo: p.detail.value
    })
  },

  // 出发日期
  bindDateChangeto: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateto: e.detail.value
    })
  },

  // 出发时间段
  bindPickerChangeUntilto: function (p) {
    console.log('picker发送选择改变，携带值为', p.detail.value)
    this.setData({
      untilto: p.detail.value
    })
  },

  // 来程交通方式
  bindPickerChangePlanto: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Planto: e.detail.value
    })
  },

  // 选择车次或航班
  bindPickerChangeNumto: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Numto: e.detail.value
    })
  },

  // 回城日期
  bindDateChangeGo: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      go: e.detail.value
    })
  },

  // 回城时间段
  bindPickerChangePlaneto: function (p) {
    console.log('picker发送选择改变，携带值为', p.detail.value)
    this.setData({
      planeto: p.detail.value
    })
  },
  
  // 回程交通方式
  bindPickerChangeWay: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      way: e.detail.value
    })
  },

  // 回城车次或航班
  bindPickerChangeFly: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Fly: e.detail.value
    })
  },

  // 文本输入框
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  warn:function(){

    if(this.data.nameValue==''){
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 2000,
        mask: true,
        
      })
      return;
    }
    if (this.data.idValue == '') {
      wx.showToast({
        title: '请输入身份证',
        icon: 'none',
        duration: 2000,
        mask: true,

      })
      return;
    }
    if (this.data.page == '0' && this.data.items[0].checked){
      wx.showToast({
        title: '选择出发城市',
        icon: 'none',
        duration: 2000,
        mask: true,

      })
      return;
    }
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000,
      mask:true,
      success:function(){
      setTimeout(function(){
        wx.redirectTo({
          url: "/pages/getdata/getdata",
        })
      },2000)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})


