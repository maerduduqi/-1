//index.js
var start,end,sum;
Page({
  
  startNum:function(e){
    start=parseFloat(e.detail.value);
  },
  endNum:function(e){
    end=parseFloat(e.detail.value);
  },
  calc:function(){
    sum=start;
    for(var i=1;i<=5;i++){
      sum=sum*(1+end);
    }
    this.setData({
      suml:sum
    })
  }
})