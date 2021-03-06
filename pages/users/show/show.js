// pages/users/show/show.js

const app = getApp();


Page({
  data: {

  },
  
  onShow: function (options) {    
    // const page = this;
    // const url = app.globalData.url;    
    // const id = app.globalData.userId;
    // console.log(id)
    // const userInfo = app.globalData.userInfo;
    // const avatarUrl = app.globalData.userInfo.avatarUrl;
    // console.log(avatarUrl)
    // const nickName = userInfo.nickName;    
    // wx.request({      
    //   url: `${url}users/${id}`,      
    //   method: "PUT",
    //   data: { profile_image: avatarUrl, username: nickName },
    //   success(res) {       
    //     const user = res.data;       
    //     page.setData(user);
    //   }
    // })
  }, 

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo      
    })   
    console.log(33, userInfo);
    const page = this;
    const url = app.globalData.url;    
    const id = app.globalData.userId;
    const userInfo = app.globalData.userInfo;    
    const avatarUrl = app.globalData.userInfo.avatarUrl;    
    const nickName = userInfo.nickName;  
    console.log(44, userInfo);

    wx.request({     
      url: `${url}users/${id}`,       
      method: "GET",
      success(res) {  
        console.log(res)     
        const user = res.data;   
        console.log('onload user', user);      
        page.setData(user);
      }
    })
    
  },

  

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  destroyGoal(e) {
    console.log(e);
    const goal_id = e.currentTarget.dataset.goal_id;
    const url = app.globalData.url;
    const id = e.currentTarget.dataset.id;
    console.log(id);

    wx.request({
      url: `${url}goals/${goal_id}`,
      method: "delete",
      success() {
        wx.reLaunch({
          url: `/pages/users/show/show?id=${id}`,
        })
      }
    })
  },

  addGoal(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id;
    console.log(id);

    const url = app.globalData.url;

    wx.navigateTo({
      url: `/pages/goals/new/new?user_id=${id}`,
    })

    // const page = this;
    

    // const 

    // wx.request({
    //   url: `${url}goals`,
    //   method: "POST",
    //   data: ;
    //   success() {

    //   }
    // })
  },

  // formSubmit: function (event) {
  //   const page = this;   
  //   let first_name = event.detail.value.firstName;    
  //   let last_name = event.detail.value.lastName;   
  //   let user_id = app.globalData.userId
  //   let userDetail = { first_name: first_name, last_name: last_name }

  //   console.log(first_name)
  //   console.log(last_name)

  //   const url = app.globalData.url;
  //   const id = app.globalData.userId;

  //   wx.request({     
  //     url: `${url}users/${id}`,
  //     method: 'PUT',
  //     data: userDetail,
  //     success(res) {        
  //       wx.reLaunch({
  //         url: `/pages/users/show/show?id=${id}`
  //       });
  //     }
  //   });
  // },

  editProfile(e) {
    const page = this;
    console.log(e.currentTarget.dataset.id);
    const id = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: `/pages/users/edit/edit?id=${id}`,
    })
  }
})