var WebSocket = require('ws')
const fetch = require('node-fetch')
const config = require('./config')
var ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json"); 
var interval = 0; 
var token = config.token;
console.log(token)
  payload = {
    op: 2, d: {
      token: token, intents: 512, 
     status: "idle", 
      properties: {
        $os: "linux", $browser: "chrome", $device: "chrome", 
      }, 
    
    }, }; 

ws.addEventListener("open", function open(x) { ws.send(JSON.stringify(payload));
                                             }); 
ws.addEventListener("message", function incomming(data) {
  var x = data.data; 
  
  var payload = JSON.parse(x); 
  const { t, event, op, d } = payload;
  switch (op) {  
case 10:
      const { heartbeat_interval } = d; setInterval(() => { ws.send(JSON.stringify({ op: 2, d: null })); }, heartbeat_interval); break; } switch (t)
    { 
  
  
      case "MESSAGE_CREATE": 
        const command = d.content
        
        if(command === 'send') {
          
        let URL = `https://discord.com/api/v9/channels/${d.channel_id}/messages`;
          const options = {
          method: 'POST', 
            headers: { "Authorization": `Bot ${token}`, "Content-Type": "application/json"  
          },
            
      
          body: JSON.stringify({ 
                    
                                                                    "content" : "aaa",
 "components": [
   { "type": 1,
   "components": [ { "type": 2, "label": "Click me!", "style": 1, "custom_id": "click_one" } ]
   }
        ]
          }) 
          };
        
          fetch(URL, options) .then(response => response.text())  .catch(console.error);
          return
        }      
                                                                                ///  break;
  ///    case "INTERACTION_CREATE": 
      //  console.log(d)
                               
   break;
      case "INTERACTION_CREATE":
           let URL = `https://discord.com/api/v9/interactions/${d.id}/${d.token}/callback`;  
        if(d.data.custom_id === 'register') {
         console.log(d.data.components[0].components[0].value)
 var qq = { method: 'POST', headers: { "Authorization": `Bot ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ "type": 4, "data": { "content": "Hello", } }) };

       fetch(URL, qq) .then(response => response.text()) .then(console.log) .catch(console.error);  

          return
    
       }
        if(d.data.custom_id === 'click_one') {
        
               
        var requestOptions = { 
          method: 'POST', headers: { 
            "Authorization": `Bot ${token}`, 
            "Content-Type": "application/json"
          }, body : JSON.stringify({

      type: 9,
data: {
  title: config.modal_name,				custom_id: 'register',
  components: [	
    {		
      type: 1,
            components: [		
              {
type: 4,
                custom_id: "name", label: "Name", 
                style: 1, "min_length": 1,
                max_length: 4000, placeholder: "John",
                required: true

            },


                         					
                         
    ],
                                     
                        }],
    components: [	
    {		
      type: 1,
            components: [		
              {
type: 4,
                custom_id: "age", label: "age", 
                style: 1, "min_length": 1,
                max_length: 4000, placeholder: "John",
                required: true

            },


                         					
                         
    ],
                                     
                        }],
    

                              },
  
            
          }) };
        fetch(URL, requestOptions) .then(response => response.text())  
   .then(data => console.log(data))       
          .catch(console.error); 
return
    }
    }
  
  
  

});
