<!DOCTYPE html>
  <head>
    <title>My todo app</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"> 
  </head>
  <body>
        

       <script type="text/javascript">
        const hasMeting = false;
        const meting = new Promise((resolve,reject)=>{
            if(!hasMeting){
              const metingDetails = {
                name: 'Technical meting',
                location: 'Google Meet',
                time: '10.00 PM',
              }
              resolve(metingDetails);
            }else{
              reject(new Error("Meting already scheduled!"));
            }

        });

        const addToCalender = (meting)=>{
          const fullMet = `${meting.name} was scheduled on ${meting.loction} at ${meting.time}`;
        };

        async function myMeting(){
          try{
            const metingDetails = await meting;
            console.log('promise meting : ',metingDetails);
            const calender = await addToCalender(metingDetails);
            console.log(calender);

          }catch{
            console.log('something wrong');
          }
        }

       </script>
  </body> 

  </html>
