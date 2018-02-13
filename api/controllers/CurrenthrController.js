/**
 * RbgtrackerController
 *
 * @description :: Server-side logic for managing rbgtrackers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        myhr : function(req, res) {                
               
                console.log("Query Parameters: ", req.query);

                CurrenthrService.getMyInfo(req.headers, req.query, function(err, response, data) {
                        if (err) {
                                return res.send(err)
                        };
                        
                        // Building object for LaMetric. We will return it
                    
                        var responseObj={};
                                        
                        responseObj.frames=[];
                    
                        var frame0 = {
                                'text': 'textframe',
                                'icon':'i14665',
                                'index':0
                        };                                                                                                             

                        if (req.query.currentHr === '' || req.query.currentHr === undefined) {
                            frame0.text = 'EMPTY'
                        }   
                    
                        else{
                            frame0.text = req.query.currentHr;  
                        } 
                        
                        responseObj.frames.push(frame0);
                    
                        //if (!data) {
                            console.log("Error: ", response.statusCode);
                        //    res.status(response.statusCode).send(response.body);
                        //} else {
                            console.log("Response: ", responseObj);
                            return res.status(200).json(responseObj);
                        //}                   
                    
                })
        },
};
