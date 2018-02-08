module.exports = {
        /**
         * Method: getMyInfo
         * @return json
         * returns Gets authenticated user profile
         */
        getMyInfo: function(headers, parameters, callback) {         
				
				var params = [		
					{
						id:parameters.currentHr			
					}								
				];

				var postHeader={
					'User-Agent': headers.host,
					'Accept':'application/json',
					'Authorization':headers.authorization // pass authorization header received in request
                };
                RequestService.getData(postHeader, params, callback);
        },
}