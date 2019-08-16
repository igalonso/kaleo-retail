  var payload = context.getVariable('request.content');
 var proxyRequestPayload = JSON.parse(payload);
 var times = context.getVariable('system.timestamp');
 
 proxyRequestPayload.timestamp = times;
 context.setVariable('request.content',JSON.stringify(proxyRequestPayload));