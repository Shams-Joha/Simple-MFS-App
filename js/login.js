document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('login Button Clicked');
        const mobile = document.getElementById('in-mobile').value;
      
        const pin = document.getElementById('in-pass').value;
        
        if (mobile === '01312321303' && pin === '1710') {
            console.log('Logged In');
        }
        else{
            console.log('Wrong Credentials');
        }


    }
    )