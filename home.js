angular.module('chatBox').controller('HomeCtrl',function(commonService,$scope,$timeout, $location,$anchorScroll){
    $scope.username ='';
    $scope.arrayList=!JSON.parse(localStorage.getItem("list")) ? [] :JSON.parse(localStorage.getItem("list"));
    
    function fnGetUseinfo(){
    commonService.getUserData().then(resp=>{
        if(resp.status===200){
            $scope.username = resp.data.userName;
            $scope.$apply();
                }
    }).catch(err=>{
        $scope.errorMesg=err.Message;
    });
   }
   fnGetUseinfo();
   $scope.isbuttonclicked= false;
  // this.arrayList=[{user:'suresh',message:'Test'},{user:'system',message:Math.floor(Math.random() * 100)}];
  $scope.fnSendResp = function(){
      $scope.isbuttonclicked= true;
    // this.arrayList.push({user:'suresh',message:this.user.message});
    // this.arrayList.push({user:'system',message:Math.floor(Math.random() * 100)});
    commonService.saveUserData({user:$scope.username,message:$scope.user.message},
    function(){
       $timeout(function(){
        $scope.arrayList.push({user:'System',message:Math.floor(Math.random() * 100)});
        localStorage.setItem("list",JSON.stringify($scope.arrayList));
        $scope.isbuttonclicked= false;
        document.getElementById('textbox').scrollIntoView({ behavior: 'smooth', block: 'end' });
       },1000);
    }).then(function(resp){
        if(resp){
            $scope.arrayList.push(resp);
            localStorage.setItem("list",JSON.stringify($scope.arrayList));
            $scope.user.message='';
        }

    },function(err){
console.log(err);
    });
   
   };
   
});