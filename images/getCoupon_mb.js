/*
 * Autumn
 * m.網址版折價券機制-getCoupon_mb_v20200714
 *******************************************************************
 *  --2020.07.14--增加SweetAlert2彈跳視窗套件更新alert浮層樣式
 *  --2017.04.21--IT最初版本
 *******************************************************************
 */

var checkCouponNum = '';
var checkCouponMsg = '';
function sendCouponNum(cp_no) {
  if(checkCouponNum!=cp_no){
    checkCouponNum = cp_no;
    var _RTN =  momoj.ajaxTool({data:{flag:"assignedToAcc", cp_no:cp_no}});
    //notLogin
    if(_RTN.rtnData['resultCode'] == '-1'){            
      var form = momoj("#tempForm");
      var _pathname = window.location.pathname;
      var _search = window.location.search;
      var _hash = window.location.hash;
      form.attr("action", "/mymomo/login.momo");
      form.find("input[name=preUrl]").attr('value',''+_pathname + _search);
      form.find("input[name=hash]").attr('value', _hash);
      momoj("#tempForm").submit();
      return; 
    }else{
      var msg = _RTN.rtnData['resultMsg'];
      checkCouponMsg = msg;
      Swal.fire({title: checkCouponMsg, confirmButtonText: '確認'})
      //showMomoMobileAlert(momoj("#momoMobileAlertArea"),msg,"momoMobileAlert");
      return;
    }
  }
  else{
    if(checkCouponMsg!=''){
      Swal.fire({title: checkCouponMsg, confirmButtonText: '確認'})
      //showMomoMobileAlert(momoj("#momoMobileAlertArea"),checkCouponMsg,"momoMobileAlert");
      return;
    }
  }
}

var checkCouponNum1 = '';
var checkCouponMsg1 = '';
function sendCouponNumLt(cp_no){
  if(checkCouponNum1!=cp_no){
    checkCouponNum1 = cp_no;
    var _RTN =  momoj.ajaxTool({data:{flag:"assignedToAcc", cp_no:cp_no}});
    //notLogin
    if(_RTN.rtnData['resultCode'] == '-1'){            
      var form = momoj("#tempForm");
      var _pathname = window.location.pathname;
      var _search = window.location.search;
      var _hash = window.location.hash;
      form.attr("action", "/mymomo/login.momo");
      form.find("input[name=preUrl]").attr('value',''+_pathname + _search);
      form.find("input[name=hash]").attr('value', _hash);
      momoj("#tempForm").submit();
      return; 
    }else{
      var rtnCode = _RTN.rtnData['resultCode'];
      if(rtnCode == "5") {
        var msg = _RTN.rtnData['resultMsg'];
        checkCouponMsg1 = msg;
        Swal.fire({title: msg, confirmButtonText: '確認'})
        //showMomoMobileAlert(momoj("#momoMobileAlertArea"),msg,"momoMobileAlert");
      } else {
        var msg = "您輸入的折價券已經可以使用了";
        checkCouponMsg1 = msg;
        Swal.fire({title: msg, confirmButtonText: '確認'})
        //showMomoMobileAlert(momoj("#momoMobileAlertArea"),msg,"momoMobileAlert");
      }
      return;
    }
  }
  else{
    if(checkCouponMsg1!=''){
      Swal.fire({title: checkCouponMsg1, confirmButtonText: '確認'})
      //showMomoMobileAlert(momoj("#momoMobileAlertArea"),checkCouponMsg1,"momoMobileAlert");
      return;
    }
  }
}
