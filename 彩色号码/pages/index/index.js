// index.js
// 获取应用实例
var rand,sum;
function createRand(){
  rand=[];
  sum=0;
  for(var i=0;i<=6;i++){
    var r=(Math.random()*30+1).toFixed()*1;
    rand.push(r);
    sum=sum+rand[i];
    console.log(rand[i]);
  }
  console.log(sum);
};
Page({
  onLoad:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:sum
    })
  },
  newRand:function(){
    createRand();
    this.setData({
      rand:rand,
      sum:sum
    })
  }
})
