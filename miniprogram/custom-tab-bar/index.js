Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/images/icon/mybook.png",
        selectedIconPath: "/images/icon/mybook.png",
        text: "我的"
      },
      {
        pagePath: "/pages/index/index",
        iconPath: "/images/icon/booklibrary.png",
        selectedIconPath: "/images/icon/booklibrary.png",
        text: "书库"
      },
      {
        pagePath: "/pages/index/index",
        iconPath: "/images/icon/bookgroup.png",
        selectedIconPath: "/images/icon/bookgroup.png",
        text: "书圈"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})