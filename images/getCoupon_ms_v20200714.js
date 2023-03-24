/*
 * Autumn
 * www.網址版折價券機制-getCoupon_ms_v20200714
 *******************************************************************
 *  --2020.07.14--增加SweetAlert2彈跳視窗套件更新alert浮層樣式
 *  --2017.04.21--IT最初版本
 *******************************************************************
 */

var checkCouponNum = '';
var checkCouponMsg = '';
function sendCouponNum (cp_no){
  momoj().MomoLogin({GoCart:false, LoginSuccess:function() {
    if(checkCouponNum != cp_no){
      checkCouponNum = cp_no;
      var jsonData = new Object();
      jsonData.flag = '3002';
      jsonData.data = {
        cp_no: cp_no
      }
      momoj.ajax({
        type: 'POST',
        dataType: 'json',
        data: {data:JSON.stringify(jsonData)},
        url: '/servlet/MemberCenterServ',
        error: function(){
          Swal.fire({icon: 'error', title: '歸戶失敗，請重新輸入',confirmButtonText: '確認'})
          checkCouponNum='';
        },
        success: function(objData){
          switch(objData.rtnCode) {
            case '101':
              Swal.fire({icon: 'success', title: '折價券歸戶成功',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號資訊已列在表中';
              break;
            case '210':
              Swal.fire({icon: 'warning', title: '折價券號不存在',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號不存在';
              break;
            case '211':
              Swal.fire({icon: 'warning', title: '折價券號不能使用',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號不能使用';
              break;
            case '212':
              Swal.fire({icon: 'warning', title: '折價券號已使用過',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號已使用過';
              break;
            case '213':
              Swal.fire({icon: 'success', title: '折價券號資訊已列在表中',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號資訊已列在表中';
              break;
            case '214':
              Swal.fire({icon: 'warning', title: '折價券號已過期',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號已過期';
              break;
            case '215':
              Swal.fire({icon: 'warning', title: '折價券號不允許自行登錄',confirmButtonText: '確認'})
              checkCouponMsg = '折價券號不允許自行登錄';
              break;
            case '301':
            case '998':
              Swal.fire({icon: 'error', title: '歸戶失敗，請重新輸入',confirmButtonText: '確認'})
              checkCouponNum='';
              break;
          }
        }
      });
    }
    else{
      if(checkCouponMsg!=''){
        Swal.fire({icon: 'warning', title: checkCouponMsg })
      }
      else{
        Swal.fire({icon: 'warning', title: '系統錯誤，請重新整理頁面',confirmButtonText: '確認'})
      }
    }
  }}); 
}

//
var checkCouponNum1 = '';
var checkCouponMsg1 = '';
function sendCouponNumLt (cp_no){
  momoj().MomoLogin({GoCart:false, LoginSuccess:function() {
    if(checkCouponNum1 != cp_no){
      checkCouponNum1 = cp_no;
      var jsonData = new Object();
      jsonData.flag = '3002';
      jsonData.data = {
        cp_no: cp_no
      }
      momoj.ajax({
        type: 'POST',
        dataType: 'json',
        data: {data:JSON.stringify(jsonData)},
        url: '/servlet/MemberCenterServ',
        error: function(){
          alert('歸戶失敗，請重新輸入');
          checkCouponNum1='';
        },
        success: function(objData){
          if(objData.rtnCode == '213') {
            Swal.fire({icon: 'error', title: '歸戶失敗，請重新輸入',confirmButtonText: '確認'})
            checkCouponMsg1 = '折價券號資訊已列在表中';
          } else {
            Swal.fire({icon: 'success', title: '折價券歸戶成功',confirmButtonText: '確認'})
            checkCouponMsg1 = '折價券歸戶成功';
          }
        }
      });
    }
    else{
      if(checkCouponMsg1!=''){
        Swal.fire({icon: 'warning', title: checkCouponMsg1 })
      }
      else{
        Swal.fire({icon: 'warning', title: '系統錯誤，請重新整理頁面',confirmButtonText: '確認'})
      }
    }
  }}); 
}