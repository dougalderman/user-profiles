angular.module('userProfiles')
.controller('profileCtrl', function(friendService, $scope ) {
    
    friendService.getFriends()
    .then(function( response ) {
        console.log('in profileCtrl');
        console.log('response', response);
        $scope.currentUser = response.data.currentUser;
	    $scope.friends = response.data.friends;
    });
    
});