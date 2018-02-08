/**
 * RbgtrackerController
 *
 * @description :: Server-side logic for managing rbgtrackers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        currenthr : function(req, res) {                
               
                console.log("Query Parameters: ", req.query);
                CurrenthrService.getMyInfo(req.headers, req.query, function(err, response, data) {
                        if (err) {
                                return res.send(err)
                        };
						
                        // Building object for LaMetric. We will return it
                    
                        var responseObj={};
                                        
                        responseObj.frames=[];
                    
                        var frame0 = {
                            'text': 'stats for:',
                            'icon':'i15434',
                            'index': 0
                        };
                                                                                                                              

                        // Checking if we have a number in the parameter. 
                        if (req.query.currentHr === '') {
                            frame1.text = 'INSERT', 
                            frame2.text = 'DATA'
                        }   
                    
                        else{
                        // Putting the number in the textfield.
                            frame0.text = params.currentHr;    
                        }       
                        
                        responseObj.frames.push(frame0);
					
                        if (!data) {
                            console.log("Error: ", response.statusCode);
                            res.status(response.statusCode).send(response.body);
                        } else {
                            console.log("Response: ", responseObj);
                            return res.status(200).json(responseObj);
                        }					
					
                })
        },
};
